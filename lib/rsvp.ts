import { prisma } from '@/lib/db';

export { MARKETING_CONSENT_TEXT } from '@/lib/rsvp-copy';

// The event the /RSVP page currently takes reservations for. To run the next
// session, change this object; RSVPs are kept per slug.
export const CURRENT_RSVP_EVENT = {
  slug: 'mac-waterloo-2026-10-23',
  partner: 'MAC Islamic Centre of Waterloo',
  dateLabel: 'Friday, October 23, 2026',
  timeLabel: 'After Maghrib Prayer',
  venue: 'MAC Islamic Centre of Waterloo',
  address: '510 Erbsville Rd, Waterloo, ON N2V 2R4',
  mapUrl: 'https://www.google.com/maps/search/?api=1&query=MAC+Islamic+Centre+of+Waterloo+510+Erbsville+Rd+Waterloo+ON',
  // Calendar invite window (Toronto time). Maghrib is around 6:20 pm that day.
  startsAt: '2026-10-23T18:30:00-04:00',
  endsAt: '2026-10-23T21:00:00-04:00',
  // RSVPs stay open until the end of the event day.
  closesAt: '2026-10-24T00:00:00-04:00',
  defaultPriorityCapacity: 20,
  // First pass handed out for this event (MW-23, MW-24, ...).
  firstPassNumber: 23,
} as const;

export type RsvpEventConfig = typeof CURRENT_RSVP_EVENT;

export const CALCULATOR_URL = 'https://app.themuslimwill.com/calculator';

export function isRsvpOpen(event: RsvpEventConfig = CURRENT_RSVP_EVENT) {
  return Date.now() < new Date(event.closesAt).getTime();
}

export async function ensureRsvpEvent(event: RsvpEventConfig = CURRENT_RSVP_EVENT) {
  return prisma.rsvpEvent.upsert({
    where: { slug: event.slug },
    update: {},
    create: { slug: event.slug, priorityCapacity: event.defaultPriorityCapacity },
  });
}

export async function getPriorityStatus(event: RsvpEventConfig = CURRENT_RSVP_EVENT) {
  const row = await ensureRsvpEvent(event);
  const used = await prisma.rsvp.count({ where: { eventSlug: event.slug, priority: true } });
  return { capacity: row.priorityCapacity, used, remaining: Math.max(0, row.priorityCapacity - used) };
}

export function formatPass(passNumber: number) {
  return `MW-${passNumber}`;
}

export function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function icsDate(iso: string) {
  return new Date(iso).toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '');
}

function icsEscape(value: string) {
  return value.replace(/\\/g, '\\\\').replace(/;/g, '\\;').replace(/,/g, '\\,').replace(/\n/g, '\\n');
}

export function buildIcs(event: RsvpEventConfig, passLabel: string) {
  return [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//The Muslim Will//RSVP//EN',
    'METHOD:PUBLISH',
    'BEGIN:VEVENT',
    `UID:${event.slug}-${passLabel}@themuslimwill.com`,
    `DTSTAMP:${icsDate(new Date().toISOString())}`,
    `DTSTART:${icsDate(event.startsAt)}`,
    `DTEND:${icsDate(event.endsAt)}`,
    `SUMMARY:${icsEscape('Islamic Will Session — The Muslim Will')}`,
    `LOCATION:${icsEscape(`${event.venue}, ${event.address}`)}`,
    `DESCRIPTION:${icsEscape(`${event.timeLabel}. Your priority pass: ${passLabel}. Bring your family details, executor and guardian names, and a rough list of your assets.`)}`,
    'END:VEVENT',
    'END:VCALENDAR',
  ].join('\r\n');
}
