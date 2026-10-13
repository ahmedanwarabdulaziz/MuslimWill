import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';
import { prisma } from '@/lib/db';
import { ADMIN_COOKIE_NAME, verifyAdminSessionToken } from '@/lib/auth';
import { CURRENT_RSVP_EVENT, formatPass, getPriorityStatus } from '@/lib/rsvp';
import styles from './page.module.css';

export const dynamic = 'force-dynamic';

async function requireAdmin() {
  const token = (await cookies()).get(ADMIN_COOKIE_NAME)?.value;
  if (!(await verifyAdminSessionToken(token))) throw new Error('Unauthorized');
}

async function updateCapacity(formData: FormData) {
  'use server';
  await requireAdmin();
  const capacity = Number.parseInt(String(formData.get('capacity')), 10);
  if (!Number.isFinite(capacity) || capacity < 0 || capacity > 1000) return;
  await prisma.rsvpEvent.update({ where: { slug: CURRENT_RSVP_EVENT.slug }, data: { priorityCapacity: capacity } });
  revalidatePath('/admin/rsvps');
  revalidatePath('/RSVP');
}

async function toggleCheckIn(formData: FormData) {
  'use server';
  await requireAdmin();
  const id = String(formData.get('id'));
  const rsvp = await prisma.rsvp.findUnique({ where: { id } });
  if (!rsvp) return;
  await prisma.rsvp.update({ where: { id }, data: { checkedInAt: rsvp.checkedInAt ? null : new Date() } });
  revalidatePath('/admin/rsvps');
}

export default async function RsvpsAdminPage({ searchParams }: { searchParams: Promise<{ q?: string }> }) {
  const { q } = await searchParams;
  const event = CURRENT_RSVP_EVENT;
  const query = q?.trim();

  const [priority, rsvps, totals] = await Promise.all([
    getPriorityStatus(event),
    prisma.rsvp.findMany({
      where: {
        eventSlug: event.slug,
        ...(query
          ? {
              OR: [
                { name: { contains: query, mode: 'insensitive' as const } },
                { email: { contains: query, mode: 'insensitive' as const } },
                { phone: { contains: query } },
                ...(/^\d+$/.test(query.replace(/^MW-?/i, '')) ? [{ passNumber: Number(query.replace(/^MW-?/i, '')) }] : []),
              ],
            }
          : {}),
      },
      orderBy: { passNumber: 'asc' },
    }),
    prisma.rsvp.aggregate({ where: { eventSlug: event.slug }, _count: { _all: true }, _sum: { partySize: true } }),
  ]);
  const checkedIn = await prisma.rsvp.count({ where: { eventSlug: event.slug, checkedInAt: { not: null } } });

  return (
    <div>
      <div className={styles.header}>
        <div>
          <h1>RSVPs</h1>
          <p className={styles.sub}>{event.partner} · {event.dateLabel} · <a href="/RSVP" target="_blank">View page</a></p>
        </div>
        <a href="/api/admin/rsvps/export" className={styles.exportBtn}>Export CSV</a>
      </div>

      <div className={styles.stats}>
        <div className={styles.stat}><span>RSVPs</span><strong>{totals._count._all}</strong></div>
        <div className={styles.stat}><span>People expected</span><strong>{totals._sum.partySize ?? 0}</strong></div>
        <div className={styles.stat}><span>Priority used</span><strong>{priority.used} / {priority.capacity}</strong></div>
        <div className={styles.stat}><span>Checked in</span><strong>{checkedIn}</strong></div>
      </div>

      <form action={updateCapacity} className={styles.capacity}>
        <label>
          <span>Priority capacity</span>
          <input type="number" name="capacity" min={0} max={1000} defaultValue={priority.capacity} />
        </label>
        <button type="submit">Save</button>
        <p>How many people your team can serve first. The public page shows <strong>{priority.remaining}</strong> remaining. Raise this when you add team members.</p>
      </form>

      <form className={styles.search}>
        <input type="search" name="q" defaultValue={query} placeholder="Search name, email, phone or pass (MW-23)" />
        <button type="submit">Search</button>
        {query && <a href="/admin/rsvps">Clear</a>}
      </form>

      <div className={styles.tableWrap}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Pass</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Party</th>
              <th>Priority</th>
              <th>Consent</th>
              <th>Source</th>
              <th>Check-in</th>
            </tr>
          </thead>
          <tbody>
            {rsvps.length === 0 && (
              <tr><td colSpan={9} className={styles.empty}>{query ? 'No matches.' : 'No RSVPs yet.'}</td></tr>
            )}
            {rsvps.map((r) => (
              <tr key={r.id} className={r.checkedInAt ? styles.checkedRow : undefined}>
                <td><strong>{formatPass(r.passNumber)}</strong></td>
                <td>{r.name}</td>
                <td><a href={`tel:${r.phone}`}>{r.phone}</a></td>
                <td><a href={`mailto:${r.email}`}>{r.email}</a></td>
                <td>{r.partySize}</td>
                <td>{r.priority ? <span className={styles.badgeGold}>Priority</span> : '—'}</td>
                <td>{r.marketingConsent ? 'Yes' : 'No'}</td>
                <td>{[r.utmSource, r.utmCampaign].filter(Boolean).join(' / ') || '—'}</td>
                <td>
                  <form action={toggleCheckIn}>
                    <input type="hidden" name="id" value={r.id} />
                    <button type="submit" className={r.checkedInAt ? styles.undoBtn : styles.checkBtn}>
                      {r.checkedInAt
                        ? `✓ ${r.checkedInAt.toLocaleTimeString('en-CA', { timeZone: 'America/Toronto', hour: 'numeric', minute: '2-digit' })}`
                        : 'Check in'}
                    </button>
                  </form>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
