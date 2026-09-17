import Link from 'next/link';
import Image from 'next/image';
import { PiArrowRightLight, PiImagesLight } from 'react-icons/pi';
import { getThumbnailUrl, type EventWithThumb } from '@/lib/events-data';
import styles from './EventListRow.module.css';

export function EventListRow({ event }: { event: EventWithThumb }) {
  const date = event.eventDate ? new Date(event.eventDate) : null;
  const month = date ? date.toLocaleDateString(undefined, { month: 'short', timeZone: 'UTC' }).toUpperCase() : 'TBA';
  const day = date ? date.getUTCDate() : '-';
  const src = getThumbnailUrl(event);

  return (
    <Link href={`/events/${event.slug}`} className={styles.rowLink}>
      <div className={styles.row}>
        <div className={styles.thumbWrap}>
          {src ? (
            <Image src={src} alt={event.title} fill sizes="140px" style={{ objectFit: 'contain', padding: '0.25rem' }} />
          ) : (
            <div className={styles.thumbPlaceholder}>
              <PiImagesLight />
            </div>
          )}
        </div>
        
        <div className={styles.dateBlock}>
          <span className={styles.month}>{month}</span>
          <span className={styles.day}>{day}</span>
        </div>
        
        <div className={styles.infoBlock}>
          <h4 className={styles.title}>{event.title}</h4>
          <span className={styles.location}>{event.location || 'Online / TBA'}</span>
        </div>
        
        <div className={styles.actionBlock}>
          <PiArrowRightLight className={styles.arrowIcon} />
        </div>
      </div>
    </Link>
  );
}
