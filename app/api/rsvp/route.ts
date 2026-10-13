import { NextResponse, after } from 'next/server';
import nodemailer from 'nodemailer';
import { prisma } from '@/lib/db';
import { Prisma } from '@/generated/prisma/client';
import {
  CALCULATOR_URL,
  CURRENT_RSVP_EVENT,
  MARKETING_CONSENT_TEXT,
  buildIcs,
  ensureRsvpEvent,
  escapeHtml,
  formatPass,
  getPriorityStatus,
  isRsvpOpen,
  type RsvpEventConfig,
} from '@/lib/rsvp';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function clean(value: unknown, max: number) {
  return typeof value === 'string' ? value.trim().slice(0, max) : '';
}

export async function POST(req: Request) {
  let data: Record<string, unknown>;
  try {
    data = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
  }

  // Honeypot: bots fill hidden fields. Pretend success, store nothing.
  if (data._gotcha) {
    return NextResponse.json({ ok: true, pass: formatPass(0), priority: false });
  }

  const event = CURRENT_RSVP_EVENT;
  if (!isRsvpOpen(event)) {
    return NextResponse.json({ error: 'RSVPs for this session are closed.' }, { status: 410 });
  }

  const name = clean(data.name, 100);
  const email = clean(data.email, 200).toLowerCase();
  const phone = clean(data.phone, 30);
  const partySize = Math.min(10, Math.max(1, Number.parseInt(String(data.partySize ?? '1'), 10) || 1));
  const marketingConsent = data.marketingConsent === true;

  if (name.length < 2) return NextResponse.json({ error: 'Please enter your name.' }, { status: 400 });
  if (!EMAIL_RE.test(email)) return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 });
  if (phone.replace(/\D/g, '').length < 10) return NextResponse.json({ error: 'Please enter a valid phone number.' }, { status: 400 });

  await ensureRsvpEvent(event);

  const existing = await prisma.rsvp.findUnique({ where: { eventSlug_email: { eventSlug: event.slug, email } } });
  if (existing) {
    return NextResponse.json({ ok: true, alreadyRegistered: true, pass: formatPass(existing.passNumber), priority: existing.priority });
  }

  let rsvp = null;
  for (let attempt = 0; attempt < 3 && !rsvp; attempt++) {
    try {
      rsvp = await prisma.$transaction(async (tx) => {
        const settings = await tx.rsvpEvent.findUniqueOrThrow({ where: { slug: event.slug } });
        const [last, priorityUsed] = await Promise.all([
          tx.rsvp.aggregate({ where: { eventSlug: event.slug }, _max: { passNumber: true } }),
          tx.rsvp.count({ where: { eventSlug: event.slug, priority: true } }),
        ]);
        return tx.rsvp.create({
          data: {
            eventSlug: event.slug,
            passNumber: Math.max(last._max.passNumber ?? 0, event.firstPassNumber - 1) + 1,
            priority: priorityUsed + settings.manualReserved < settings.priorityCapacity,
            name,
            email,
            phone,
            partySize,
            marketingConsent,
            consentText: marketingConsent ? MARKETING_CONSENT_TEXT : null,
            utmSource: clean(data.utmSource, 100) || null,
            utmMedium: clean(data.utmMedium, 100) || null,
            utmCampaign: clean(data.utmCampaign, 100) || null,
          },
        });
      });
    } catch (error) {
      // Two people submitting at the same moment can collide on the pass number
      // (retry), or the same email can race itself (return the stored RSVP).
      if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2002') {
        const dup = await prisma.rsvp.findUnique({ where: { eventSlug_email: { eventSlug: event.slug, email } } });
        if (dup) return NextResponse.json({ ok: true, alreadyRegistered: true, pass: formatPass(dup.passNumber), priority: dup.priority });
        continue;
      }
      console.error('RSVP save failed', error);
      return NextResponse.json({ error: 'Something went wrong. Please try again.' }, { status: 500 });
    }
  }

  if (!rsvp) {
    return NextResponse.json({ error: 'Something went wrong. Please try again.' }, { status: 500 });
  }

  const pass = formatPass(rsvp.passNumber);

  // Send the email after responding so the visitor sees their pass immediately.
  // The RSVP is already saved; a mail outage must not lose the reservation.
  const confirmation = { name, email, pass, priority: rsvp.priority };
  const notice = {
    ...confirmation,
    phone,
    partySize,
    marketingConsent,
    source: [rsvp.utmSource, rsvp.utmCampaign].filter(Boolean).join(' / '),
  };
  after(async () => {
    const [toAttendee, toTeam] = await Promise.allSettled([
      sendConfirmation(event, confirmation),
      sendTeamNotice(event, notice),
    ]);
    if (toAttendee.status === 'rejected') console.error('RSVP confirmation email failed', toAttendee.reason);
    if (toTeam.status === 'rejected') console.error('RSVP team notification failed', toTeam.reason);
  });

  return NextResponse.json({ ok: true, pass, priority: rsvp.priority });
}

function createTransport() {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 465,
    secure: process.env.SMTP_SECURE === 'true',
    auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
  });
}

// Who hears about each new booking. Override with RSVP_NOTIFY_TO (comma-separated).
const TEAM_NOTIFY_TO = process.env.RSVP_NOTIFY_TO || 'ahmedanwarabdulaziz@gmail.com';

async function sendTeamNotice(
  event: RsvpEventConfig,
  rsvp: {
    name: string;
    email: string;
    phone: string;
    pass: string;
    priority: boolean;
    partySize: number;
    marketingConsent: boolean;
    source: string;
  },
) {
  const [seats, total] = await Promise.all([
    getPriorityStatus(event),
    prisma.rsvp.aggregate({ where: { eventSlug: event.slug }, _count: { _all: true }, _sum: { partySize: true } }),
  ]);
  const people = (total._sum.partySize ?? 0) + seats.manual;
  const name = escapeHtml(rsvp.name);
  const phone = escapeHtml(rsvp.phone);
  const email = escapeHtml(rsvp.email);

  const row = (label: string, value: string) =>
    `<tr><td style="padding: 8px 12px; color: #666666; font-size: 14px; border-bottom: 1px solid #eeeeee;">${label}</td>` +
    `<td style="padding: 8px 12px; color: #111111; font-size: 15px; font-weight: 600; border-bottom: 1px solid #eeeeee;">${value}</td></tr>`;

  const html = `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><title>New seat booked</title></head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f5f5ee; margin: 0; padding: 24px 12px;">
  <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 560px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; overflow: hidden;">
    <tr><td style="background-color: #0A2540; padding: 20px 24px;">
      <div style="color: #d4af37; font-size: 12px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase;">New seat booked</div>
      <div style="color: #ffffff; font-size: 22px; font-weight: 700; margin-top: 4px;">${rsvp.pass} · ${name}</div>
    </td></tr>
    <tr><td style="padding: 16px 12px;">
      <table width="100%" cellpadding="0" cellspacing="0">
        ${row('Phone', `<a href="tel:${phone}" style="color: #0A2540;">${phone}</a>`)}
        ${row('Email', `<a href="mailto:${email}" style="color: #0A2540;">${email}</a>`)}
        ${row('Number attending', String(rsvp.partySize))}
        ${row('Priority seat', rsvp.priority ? 'Yes' : 'No (priority seats were full)')}
        ${row('Email consent', rsvp.marketingConsent ? 'Yes' : 'No')}
        ${row('Source', escapeHtml(rsvp.source || 'Direct'))}
      </table>
      <div style="margin: 18px 12px 4px; padding: 14px 16px; background-color: #f5f5ee; border-radius: 8px; font-size: 14px; color: #333333;">
        <strong>${total._count._all}</strong> online bookings · <strong>${people}</strong> people expected (incl. phone) · <strong>${seats.remaining}</strong> of ${seats.capacity} priority seats left
      </div>
      <div style="padding: 12px;"><a href="https://www.themuslimwill.com/admin/rsvps" style="display: inline-block; background-color: #0A2540; color: #d4af37; font-weight: 700; text-decoration: none; padding: 10px 18px; border-radius: 8px;">Open RSVPs admin</a></div>
    </td></tr>
  </table>
</body></html>`;

  const text = [
    `New seat booked: ${rsvp.pass} ${rsvp.name}`,
    `Phone: ${rsvp.phone}`,
    `Email: ${rsvp.email}`,
    `Number attending: ${rsvp.partySize}`,
    `Priority seat: ${rsvp.priority ? 'Yes' : 'No'}`,
    `Email consent: ${rsvp.marketingConsent ? 'Yes' : 'No'}`,
    `Source: ${rsvp.source || 'Direct'}`,
    '',
    `${total._count._all} online bookings, ${people} people expected, ${seats.remaining} of ${seats.capacity} priority seats left`,
    'https://www.themuslimwill.com/admin/rsvps',
  ].join('\n');

  await createTransport().sendMail({
    from: process.env.MAIL_FROM || '"Muslim Will" <info@themuslimwill.com>',
    to: TEAM_NOTIFY_TO,
    replyTo: rsvp.email,
    subject: `New seat booked: ${rsvp.pass} ${rsvp.name}${rsvp.priority ? ' (priority)' : ''} · ${seats.remaining} priority seats left`,
    html,
    text,
  });
}

async function sendConfirmation(
  event: RsvpEventConfig,
  rsvp: { name: string; email: string; pass: string; priority: boolean },
) {
  const transporter = createTransport();

  const firstName = escapeHtml(rsvp.name.split(/\s+/)[0]);
  const passNote = rsvp.priority
    ? 'You have <strong>priority access</strong>. Show this pass when you arrive and our team will see you first.'
    : 'Priority seats were full when you registered, but your seat is saved. Show this pass when you arrive to check in.';

  const p = 'font-size: 16px; color: #444444; margin: 0 0 16px;';
  const li = 'font-size: 15px; color: #444444; margin-bottom: 6px;';

  const html = `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>You're on the list</title></head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; line-height: 1.6; color: #333333; margin: 0; padding: 0; background-color: #f5f5ee;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f5f5ee; padding: 32px 16px;">
    <tr><td align="center">
      <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; background-color: #ffffff; border-radius: 12px; overflow: hidden;">
        <tr><td style="background-color: #0A2540; padding: 28px 32px; text-align: center;">
          <div style="font-size: 24px; font-weight: 700; color: #ffffff;">The Muslim Will</div>
          <div style="font-size: 13px; color: #d4af37; letter-spacing: 0.08em; text-transform: uppercase; margin-top: 4px;">Islamic Will Session</div>
        </td></tr>
        <tr><td style="padding: 32px;">
          <p style="${p}">Assalamu alaikum ${firstName},</p>
          <p style="${p}">You're on the list for our Islamic will session with ${escapeHtml(event.partner)}. We look forward to seeing you.</p>

          <table width="100%" cellpadding="0" cellspacing="0" style="border: 2px solid #d4af37; border-radius: 10px; margin: 8px 0 24px;">
            <tr><td style="padding: 20px; text-align: center;">
              <div style="font-size: 12px; color: #888888; letter-spacing: 0.08em; text-transform: uppercase;">Your pass</div>
              <div style="font-size: 34px; font-weight: 800; color: #0A2540; letter-spacing: 0.04em; margin: 4px 0 8px;">${rsvp.pass}</div>
              <div style="font-size: 14px; color: #444444;">${passNote}</div>
            </td></tr>
          </table>

          <p style="${p}"><strong>${escapeHtml(event.dateLabel)}</strong><br>${escapeHtml(event.timeLabel)}<br>${escapeHtml(event.venue)}<br><a href="${event.mapUrl}" style="color: #0A2540;">${escapeHtml(event.address)}</a></p>
          <p style="${p}">A calendar invite is attached to this email.</p>

          <p style="font-size: 17px; font-weight: 700; color: #0A2540; margin: 24px 0 8px;">What to bring</p>
          <ul style="padding-left: 20px; margin: 0 0 24px;">
            <li style="${li}">Your family details: spouse, children, parents, siblings</li>
            <li style="${li}">Who you would choose as executor, and as guardian for any minor children</li>
            <li style="${li}">A rough list of your assets: property, accounts, investments</li>
            <li style="${li}">Any charitable bequest you would like to include</li>
          </ul>

          <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f5f5ee; border-radius: 10px;">
            <tr><td style="padding: 20px;">
              <div style="font-size: 16px; font-weight: 700; color: #0A2540; margin-bottom: 6px;">Get ahead before Friday</div>
              <div style="font-size: 15px; color: #444444; margin-bottom: 14px;">See how Ontario's default rules and Islamic inheritance would divide your estate. Free, about 3 minutes, no names or assets needed.</div>
              <a href="${CALCULATOR_URL}?utm_source=rsvp_email&amp;utm_medium=email&amp;utm_campaign=${event.slug}" style="display: inline-block; background-color: #d4af37; color: #0A2540; font-weight: 700; text-decoration: none; padding: 12px 22px; border-radius: 8px;">Check the difference for your family</a>
            </td></tr>
          </table>

          <p style="${p} margin-top: 24px;">If your plans change, simply reply to this email.</p>
          <p style="font-size: 16px; color: #111111; font-weight: 600; margin: 0;">The Muslim Will Team</p>
        </td></tr>
        <tr><td style="padding: 20px 32px; background-color: #fcfcfc; border-top: 1px solid #f0f0f0; text-align: center; font-size: 13px; color: #888888;">
          <a href="https://www.themuslimwill.com" style="color: #0A2540; text-decoration: none;">themuslimwill.com</a> · info@themuslimwill.com · +1-877-416-WILL
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;

  const text = [
    `Assalamu alaikum ${rsvp.name.split(/\s+/)[0]},`,
    '',
    `You're on the list for our Islamic will session with ${event.partner}.`,
    '',
    `Your pass: ${rsvp.pass}`,
    rsvp.priority
      ? 'You have priority access. Show this pass when you arrive and our team will see you first.'
      : 'Priority seats were full when you registered, but your seat is saved. Show this pass when you arrive.',
    '',
    `${event.dateLabel} · ${event.timeLabel}`,
    `${event.venue}, ${event.address}`,
    '',
    'What to bring: family details, executor and guardian names, a rough list of assets, any charitable bequest.',
    '',
    `Get ahead: ${CALCULATOR_URL}`,
    '',
    'The Muslim Will Team',
  ].join('\n');

  await transporter.sendMail({
    from: process.env.MAIL_FROM || '"Muslim Will" <info@themuslimwill.com>',
    replyTo: process.env.MAIL_REPLY_TO || 'info@themuslimwill.com',
    to: rsvp.email,
    subject: `You're on the list: Islamic Will Session, ${event.dateLabel}`,
    html,
    text,
    attachments: [
      { filename: 'muslim-will-session.ics', content: buildIcs(event, rsvp.pass), contentType: 'text/calendar; charset=utf-8; method=PUBLISH' },
    ],
  });
}
