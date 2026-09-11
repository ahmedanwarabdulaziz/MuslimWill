import Image from 'next/image';
import Link from 'next/link';
import { PiCalendarLight, PiMapPinLight, PiImagesLight } from 'react-icons/pi';
import { prisma } from '@/lib/db';
import { Card, CardContent, CardTitle } from '@/components/ui/Card';
import type { Event, Media } from '@/generated/prisma/client';
import homeStyles from '@/app/page.module.css';
import styles from './EventsHomeSection.module.css';

type EventWithThumb = Event & { media: Media[] };

function thumbnailUrl(event: EventWithThumb): string | null {
  const item = event.media[0];
  if (!item) return null;
  return item.type === 'IMAGE' ? item.url : item.thumbnailUrl ?? item.url;
}

function formatMeta(event: Event): string {
  const parts: string[] = [];
  if (event.eventDate) parts.push(new Date(event.eventDate).toLocaleDateString(undefined, { dateStyle: 'medium' }));
  if (event.location) parts.push(event.location);
  return parts.join(' • ');
}

export async function EventsHomeSection() {
  const [current, upcomingRaw, pastRaw] = await Promise.all([
    prisma.event.findFirst({
      where: { isCurrent: true },
      include: { media: { orderBy: { order: 'asc' }, take: 1 } },
    }),
    prisma.event.findMany({
      where: { status: 'UPCOMING' },
      orderBy: { eventDate: 'asc' },
      take: 3,
      include: { media: { orderBy: { order: 'asc' }, take: 1 } },
    }),
    prisma.event.findMany({
      where: { status: 'PAST' },
      orderBy: [{ eventDate: 'desc' }, { createdAt: 'desc' }],
      take: 3,
      include: { media: { orderBy: { order: 'asc' }, take: 1 } },
    }),
  ]);

  const upcoming = upcomingRaw.filter((e) => e.id !== current?.id);
  const past = pastRaw.filter((e) => e.id !== current?.id);

  if (!current && upcoming.length === 0 && past.length === 0) return null;

  return (
    <section className={`${homeStyles.section} ${homeStyles.sectionCream}`}>
      <div className={homeStyles.container}>
        <div className={homeStyles.sectionHeader}>
          <div className={styles.eyebrow}>✦ Where We&apos;ve Been, Where We&apos;re Going</div>
          <h2 className={homeStyles.sectionH2} style={{ color: 'var(--color-navy)' }}>
            Community Events
          </h2>
          <p className={homeStyles.sectionIntro}>
            Meet the Muslim Will team in person at a masjid or Islamic centre near you.
          </p>
        </div>

        {current && (
          <div className={styles.featured}>
            <div className={styles.featuredImageWrap}>
              {thumbnailUrl(current) ? (
                <Image src={thumbnailUrl(current)!} alt={current.title} fill sizes="(max-width: 800px) 100vw, 50vw" />
              ) : current.partnerLogoUrl ? (
                <Image
                  src={current.partnerLogoUrl}
                  alt={current.partnerName ?? current.title}
                  fill
                  sizes="(max-width: 800px) 100vw, 50vw"
                  style={{ objectFit: 'contain', padding: '2rem' }}
                />
              ) : (
                <div className={styles.featuredImagePlaceholder}>
                  <PiImagesLight />
                </div>
              )}
            </div>
            <div className={styles.featuredBody}>
              <div className={styles.liveBadge}>● Happening Now</div>
              <h3 className={styles.featuredTitle}>{current.title}</h3>
              {formatMeta(current) && (
                <div className={styles.metaLine}>
                  {current.eventDate && (
                    <span>
                      <PiCalendarLight style={{ verticalAlign: '-2px' }} />{' '}
                      {new Date(current.eventDate).toLocaleDateString(undefined, { dateStyle: 'medium' })}
                    </span>
                  )}
                  {current.location && (
                    <span>
                      <PiMapPinLight style={{ verticalAlign: '-2px' }} /> {current.location}
                    </span>
                  )}
                </div>
              )}
              <Link href={`/events/${current.slug}`} className={styles.featuredCta}>
                View Offer →
              </Link>
            </div>
          </div>
        )}

        {upcoming.length > 0 && (
          <>
            <h3 className={styles.subheading}>Upcoming</h3>
            <div className={styles.grid}>
              {upcoming.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </>
        )}

        {past.length > 0 && (
          <>
            <h3 className={styles.subheading}>Past Events</h3>
            <div className={styles.grid}>
              {past.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </>
        )}

        <div className={styles.footerLinks}>
          <Link href="/events">See all events →</Link>
          <Link href="/gallery">View photo &amp; video gallery →</Link>
        </div>
      </div>
    </section>
  );
}

function EventCard({ event }: { event: EventWithThumb }) {
  const src = thumbnailUrl(event);
  return (
    <Link href={`/events/${event.slug}`} className={styles.cardLink}>
      <Card variant="interactive" style={{ height: '100%' }}>
        <div className={styles.cardImageWrap}>
          {src ? (
            <Image src={src} alt={event.title} fill sizes="260px" style={{ objectFit: 'cover' }} />
          ) : (
            <div className={styles.cardImagePlaceholder}>
              <PiImagesLight />
            </div>
          )}
        </div>
        <CardContent>
          <CardTitle>{event.title}</CardTitle>
          {formatMeta(event) && <p className={styles.cardMeta}>{formatMeta(event)}</p>}
        </CardContent>
      </Card>
    </Link>
  );
}
