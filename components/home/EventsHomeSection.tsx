import Image from 'next/image';
import Link from 'next/link';
import { PiCalendarLight, PiMapPinLight, PiImagesLight } from 'react-icons/pi';
import { EventListRow } from '@/components/events/EventListRow';
import { getEventsOverview, getThumbnailUrl, formatEventMeta, type EventWithThumb } from '@/lib/events-data';
import homeStyles from '@/app/page.module.css';
import styles from './EventsHomeSection.module.css';

export async function EventsHomeSection() {
  const { current, upcoming, past } = await getEventsOverview({ upcomingLimit: 12, pastLimit: 12 });

  if (!current && upcoming.length === 0 && past.length === 0) return null;

  return (
    <section className={`${homeStyles.section} ${homeStyles.sectionCream}`}>
      <div className={homeStyles.container}>
        <div className={styles.stylishHeader}>
          <div className={styles.stylishEyebrow}>Community Gatherings</div>
          <h2 className={styles.stylishTitle}>
            Where We&apos;ve Been, <br />
            <span className={styles.goldText}>Where We&apos;re Going.</span>
          </h2>
          <p className={styles.stylishIntro}>
            Meet the Muslim Will team in person at a masjid or Islamic centre near you. 
            We are constantly traveling to educate communities about Islamic estate planning.
          </p>
        </div>

        <div className={styles.unifiedGroup}>
          {current && (
            <div className={styles.featured}>
              <div className={styles.featuredImageWrap}>
                {getThumbnailUrl(current) ? (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img src={getThumbnailUrl(current)!} alt={current.title} className={styles.fgImage} />
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
                        {new Date(current.eventDate).toLocaleDateString(undefined, { dateStyle: 'medium', timeZone: 'UTC' })}
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
            <div className={styles.listContainer}>
              {upcoming.map((event) => (
                <EventListRow key={event.id} event={event as EventWithThumb} />
              ))}
            </div>
          )}
        </div>

        {past.length > 0 && (
          <div className={styles.eventGroup}>
            <h3 className={styles.subheading}>Past Events</h3>
            <div className={styles.listContainer}>
              {past.map((event) => (
                <EventListRow key={event.id} event={event as EventWithThumb} />
              ))}
            </div>
          </div>
        )}

        <div className={styles.footerLinks}>
          <Link href="/events">See all events →</Link>
          <Link href="/gallery">View photo &amp; video gallery →</Link>
        </div>
      </div>
    </section>
  );
}
