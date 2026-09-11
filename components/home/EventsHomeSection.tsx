import Image from 'next/image';
import Link from 'next/link';
import { PiCalendarLight, PiMapPinLight, PiImagesLight } from 'react-icons/pi';
import { EventThumbCard } from '@/components/events/EventThumbCard';
import { getEventsOverview, getThumbnailUrl, formatEventMeta } from '@/lib/events-data';
import homeStyles from '@/app/page.module.css';
import styles from './EventsHomeSection.module.css';

export async function EventsHomeSection() {
  const { current, upcoming, past } = await getEventsOverview();

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
              {getThumbnailUrl(current) ? (
                <Image
                  src={getThumbnailUrl(current)!}
                  alt={current.title}
                  fill
                  sizes="(max-width: 800px) 100vw, 50vw"
                />
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
              {formatEventMeta(current) && (
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
                <EventThumbCard key={event.id} event={event} />
              ))}
            </div>
          </>
        )}

        {past.length > 0 && (
          <>
            <h3 className={styles.subheading}>Past Events</h3>
            <div className={styles.grid}>
              {past.map((event) => (
                <EventThumbCard key={event.id} event={event} />
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
