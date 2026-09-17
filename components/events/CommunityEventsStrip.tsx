import Link from 'next/link';
import { getEventsOverview, type EventWithThumb } from '@/lib/events-data';
import { EventListRow } from '@/components/events/EventListRow';
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
  limit = 10,
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
      </div>

      <div className={styles.tickerWrapper}>
        <div className={styles.tickerTrack}>
          {[...items, ...items, ...items].map(({ event, badge }, i) => (
            <div key={`${event.id}-${i}`} className={styles.tickerCardWrap}>
               {badge === 'Live Now' && <div className={styles.tickerBadgeLiveAbsolute}>● Live Now</div>}
               <EventListRow event={event as EventWithThumb} />
            </div>
          ))}
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.footer}>
          <Link href="/events">See all events →</Link>
        </div>
      </div>
    </section>
  );
}
