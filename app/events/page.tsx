import type { Metadata } from 'next';
import { prisma } from '@/lib/db';
import { EventListRow } from '@/components/events/EventListRow';
import { EventGalleryWrapper } from '@/components/events/EventGalleryWrapper';
import type { EventWithThumb } from '@/lib/events-data';
import homeStyles from '@/app/page.module.css';
import styles from './page.module.css';

export const revalidate = 60;

export const metadata: Metadata = {
  title: 'Events | Muslim Will',
  description: 'See where Muslim Will has been and what community events are coming up next.',
  alternates: { canonical: 'https://www.themuslimwill.com/events' },
};

export default async function EventsPage() {
  const [upcoming, past] = await Promise.all([
    prisma.event.findMany({ 
      where: { status: 'UPCOMING' }, 
      orderBy: { eventDate: 'asc' },
      include: { media: { orderBy: { order: 'asc' }, take: 1 } }
    }),
    prisma.event.findMany({ 
      where: { status: 'PAST' }, 
      orderBy: { eventDate: 'desc' },
      include: { media: { orderBy: { order: 'asc' }, take: 1 } }
    }),
  ]);

  return (
    <div className={styles.main}>
      <section className={`${homeStyles.section} ${styles.heroSection}`}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.eyebrow}>Community Gatherings</div>
            <h1 className={styles.heroTitle}>Meet the Team</h1>
            <p className={styles.heroText}>
              Find us at a masjid, Islamic centre, or community event near you. 
              We are constantly traveling to educate communities about Islamic estate planning.
            </p>
          </div>
        </div>
      </section>

      <section className={`${homeStyles.section} ${styles.eventsSection}`}>
        <div className={styles.container}>
          {upcoming.length === 0 && past.length === 0 && (
            <div className={styles.emptyState}>
              <p>No events to show right now — check back soon.</p>
            </div>
          )}

          {upcoming.length > 0 && (
            <div className={styles.eventGroup}>
              <h2 className={styles.groupTitle}>Upcoming Events</h2>
              <div className={styles.listContainer}>
                {upcoming.map((event) => (
                  <EventListRow key={event.id} event={event as EventWithThumb} />
                ))}
              </div>
            </div>
          )}

          {past.length > 0 && (
            <div className={styles.eventGroup}>
              <h2 className={styles.groupTitle}>Past Events</h2>
              <div className={styles.listContainer}>
                {past.map((event) => (
                  <EventListRow key={event.id} event={event as EventWithThumb} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
      <EventGalleryWrapper />
    </div>
  );
}
