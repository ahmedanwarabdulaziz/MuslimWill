import type { Metadata } from 'next';
import Link from 'next/link';
import { prisma } from '@/lib/db';
import { Card, CardContent, CardTitle } from '@/components/ui/Card';
import styles from './page.module.css';

export const revalidate = 60;

export const metadata: Metadata = {
  title: 'Events | Muslim Will',
  description: 'See where Muslim Will has been and what community events are coming up next.',
  alternates: { canonical: 'https://www.themuslimwill.com/events' },
};

export default async function EventsPage() {
  const [upcoming, past] = await Promise.all([
    prisma.event.findMany({ where: { status: 'UPCOMING' }, orderBy: { eventDate: 'asc' } }),
    prisma.event.findMany({ where: { status: 'PAST' }, orderBy: { eventDate: 'desc' } }),
  ]);

  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <h1>Events</h1>
        <p>Meet the Muslim Will team in person, or look back at where we&apos;ve been.</p>
      </div>

      {upcoming.length === 0 && past.length === 0 && (
        <p className={styles.empty}>No events to show right now — check back soon.</p>
      )}

      {upcoming.length > 0 && (
        <section>
          <h2 className={styles.sectionTitle}>Upcoming</h2>
          <div className={styles.grid}>
            {upcoming.map((event) => (
              <Link key={event.id} href={`/events/${event.slug}`} className={styles.cardLink}>
                <Card variant="interactive">
                  <CardContent>
                    <CardTitle>{event.title}</CardTitle>
                    <p className={styles.eventMeta}>
                      {event.eventDate ? new Date(event.eventDate).toLocaleDateString() : ''}
                      {event.location ? ` • ${event.location}` : ''}
                    </p>
                    {event.heroEyebrow && <p className={styles.eventTagline}>{event.heroEyebrow}</p>}
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>
      )}

      {past.length > 0 && (
        <section>
          <h2 className={styles.sectionTitle}>Past Events</h2>
          <div className={styles.grid}>
            {past.map((event) => (
              <Link key={event.id} href={`/events/${event.slug}`} className={styles.cardLink}>
                <Card>
                  <CardContent>
                    <CardTitle>{event.title}</CardTitle>
                    <p className={styles.eventMeta}>
                      {event.eventDate ? new Date(event.eventDate).toLocaleDateString() : ''}
                      {event.location ? ` • ${event.location}` : ''}
                    </p>
                    {event.heroEyebrow && <p className={styles.eventTagline}>{event.heroEyebrow}</p>}
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
