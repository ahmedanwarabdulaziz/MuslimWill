import Link from 'next/link';
import { EventThumbCard } from './EventThumbCard';
import { getEventsOverview } from '@/lib/events-data';
import styles from './CommunityEventsStrip.module.css';

interface CommunityEventsStripProps {
  title?: string;
  subtitle?: string;
  excludeEventId?: string;
  limit?: number;
}

export async function CommunityEventsStrip({
  title = 'Community Events',
  subtitle = "See where we've been and what's coming up next.",
  excludeEventId,
  limit = 3,
}: CommunityEventsStripProps) {
  const { current, upcoming, past } = await getEventsOverview({ excludeEventId, upcomingLimit: limit, pastLimit: limit });

  const items = [
    ...(current ? [{ event: current, badge: 'Live Now' }] : []),
    ...upcoming.map((event) => ({ event, badge: 'Upcoming' })),
    ...past.map((event) => ({ event, badge: 'Past Event' })),
  ].slice(0, limit);

  if (items.length === 0) return null;

  return (
    <section className={`${styles.section} ${styles.sectionCream}`}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.eyebrow}>✦ Muslim Will In The Community</div>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.subtitle}>{subtitle}</p>
        </div>

        <div className={styles.grid}>
          {items.map(({ event, badge }) => (
            <EventThumbCard key={event.id} event={event} badge={badge} />
          ))}
        </div>

        <div className={styles.footer}>
          <Link href="/events">See all events →</Link>
        </div>
      </div>
    </section>
  );
}
