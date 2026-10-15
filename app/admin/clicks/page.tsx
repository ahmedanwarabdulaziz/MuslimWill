import { prisma } from '@/lib/db';
import styles from './page.module.css';

export const dynamic = 'force-dynamic';

const RANGES = { '1': 'Last 24 hours', '7': 'Last 7 days', '30': 'Last 30 days', '90': 'Last 90 days' } as const;
type RangeKey = keyof typeof RANGES;

type GroupField = 'destination' | 'sourcePage' | 'utmSource' | 'utmCampaign' | 'device' | 'country';

async function topBy(field: GroupField, since: Date) {
  const rows = await prisma.outboundClick.groupBy({
    by: [field],
    where: { createdAt: { gte: since } },
    _count: { _all: true },
    orderBy: { _count: { id: 'desc' } },
    take: 10,
  });
  return rows.map((row) => ({ label: (row[field] as string | null) ?? '(none)', count: row._count._all }));
}

function daysAgo(days: number) {
  return new Date(Date.now() - days * 24 * 60 * 60 * 1000);
}

function Breakdown({ title, rows }: { title: string; rows: { label: string; count: number }[] }) {
  return (
    <section className={styles.card}>
      <h2>{title}</h2>
      {rows.length === 0 ? (
        <p className={styles.empty}>No data</p>
      ) : (
        <ul className={styles.list}>
          {rows.map((row) => (
            <li key={row.label}>
              <span>{row.label}</span>
              <strong>{row.count}</strong>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default async function ClicksPage({ searchParams }: { searchParams: Promise<{ days?: string }> }) {
  const { days } = await searchParams;
  const range: RangeKey = days && days in RANGES ? (days as RangeKey) : '7';
  const since = daysAgo(Number(range));

  const [total, register, destinations, pages, sources, campaigns, devices, countries, recent] = await Promise.all([
    prisma.outboundClick.count({ where: { createdAt: { gte: since } } }),
    prisma.outboundClick.count({ where: { createdAt: { gte: since }, destination: { startsWith: '/Account/Register' } } }),
    topBy('destination', since),
    topBy('sourcePage', since),
    topBy('utmSource', since),
    topBy('utmCampaign', since),
    topBy('device', since),
    topBy('country', since),
    prisma.outboundClick.findMany({ where: { createdAt: { gte: since } }, orderBy: { createdAt: 'desc' }, take: 100 }),
  ]);

  return (
    <div>
      <div className={styles.header}>
        <h1>Clicks to the app</h1>
        <nav className={styles.ranges}>
          {(Object.keys(RANGES) as RangeKey[]).map((key) => (
            <a key={key} href={`?days=${key}`} className={key === range ? styles.active : undefined}>
              {RANGES[key]}
            </a>
          ))}
        </nav>
      </div>

      <div className={styles.stats}>
        <div className={styles.stat}>
          <span>All clicks to app</span>
          <strong>{total}</strong>
        </div>
        <div className={styles.stat}>
          <span>Register clicks</span>
          <strong>{register}</strong>
        </div>
      </div>

      <div className={styles.grid}>
        <Breakdown title="Destination" rows={destinations} />
        <Breakdown title="Clicked from page" rows={pages} />
        <Breakdown title="Source (utm_source)" rows={sources} />
        <Breakdown title="Campaign (utm_campaign)" rows={campaigns} />
        <Breakdown title="Device" rows={devices} />
        <Breakdown title="Country" rows={countries} />
      </div>

      <h2 className={styles.recentTitle}>Recent clicks</h2>
      <div className={styles.tableWrap}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Time</th>
              <th>Destination</th>
              <th>From page</th>
              <th>Button</th>
              <th>Source / campaign</th>
              <th>Device</th>
              <th>Clarity user</th>
            </tr>
          </thead>
          <tbody>
            {recent.map((click) => (
              <tr key={click.id}>
                <td>{click.createdAt.toLocaleString('en-CA', { timeZone: 'America/Toronto' })}</td>
                <td>{click.destination}</td>
                <td>{click.sourcePage ?? '—'}</td>
                <td>{click.linkText ?? '—'}</td>
                <td>{[click.utmSource, click.utmCampaign].filter(Boolean).join(' / ') || (click.fbclid ? 'facebook (fbclid)' : '—')}</td>
                <td>{[click.device, click.country].filter(Boolean).join(' · ')}</td>
                <td>{click.clarityUserId ?? '—'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
