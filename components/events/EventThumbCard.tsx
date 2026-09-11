import Image from 'next/image';
import Link from 'next/link';
import { PiImagesLight } from 'react-icons/pi';
import { Card, CardContent, CardTitle } from '@/components/ui/Card';
import { getThumbnailUrl, formatEventMeta, type EventWithThumb } from '@/lib/events-data';
import styles from './EventThumbCard.module.css';

export function EventThumbCard({ event, badge }: { event: EventWithThumb; badge?: string }) {
  const src = getThumbnailUrl(event);
  const meta = formatEventMeta(event);

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
          {badge && <span className={styles.cardBadge}>{badge}</span>}
          <CardTitle>{event.title}</CardTitle>
          {meta && <p className={styles.cardMeta}>{meta}</p>}
        </CardContent>
      </Card>
    </Link>
  );
}
