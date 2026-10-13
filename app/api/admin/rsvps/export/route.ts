import { prisma } from '@/lib/db';
import { CURRENT_RSVP_EVENT, formatPass } from '@/lib/rsvp';

// Admin-only (guarded by proxy.ts): RSVP list as CSV for the door team / phone follow-up.
export async function GET() {
  const event = CURRENT_RSVP_EVENT;
  const rsvps = await prisma.rsvp.findMany({ where: { eventSlug: event.slug }, orderBy: { passNumber: 'asc' } });

  const cell = (value: unknown) => {
    const text = value == null ? '' : String(value);
    // Quote everything; neutralise spreadsheet formulas.
    const safe = /^[=+\-@]/.test(text) ? `'${text}` : text;
    return `"${safe.replace(/"/g, '""')}"`;
  };

  const header = ['Pass', 'Name', 'Phone', 'Email', 'Party size', 'Priority', 'Marketing consent', 'UTM source', 'UTM campaign', 'RSVP time (Toronto)', 'Checked in'];
  const rows = rsvps.map((r) => [
    formatPass(r.passNumber),
    r.name,
    r.phone,
    r.email,
    r.partySize,
    r.priority ? 'Yes' : 'No',
    r.marketingConsent ? 'Yes' : 'No',
    r.utmSource,
    r.utmCampaign,
    r.createdAt.toLocaleString('en-CA', { timeZone: 'America/Toronto' }),
    r.checkedInAt ? r.checkedInAt.toLocaleString('en-CA', { timeZone: 'America/Toronto' }) : '',
  ]);

  const csv = [header, ...rows].map((row) => row.map(cell).join(',')).join('\r\n');

  return new Response('﻿' + csv, {
    headers: {
      'Content-Type': 'text/csv; charset=utf-8',
      'Content-Disposition': `attachment; filename="rsvps-${event.slug}.csv"`,
      'Cache-Control': 'no-store',
    },
  });
}
