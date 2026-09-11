import Image from 'next/image';
import styles from './Gallery.module.css';

export interface GalleryMediaItem {
  id: string;
  type: 'IMAGE' | 'VIDEO';
  url: string;
  thumbnailUrl: string | null;
  caption: string | null;
  eventTitle: string;
}

export function GalleryGrid({ items }: { items: GalleryMediaItem[] }) {
  return (
    <div className={styles.grid}>
      {items.map((item) => (
        <div key={item.id} className={styles.item}>
          {item.type === 'VIDEO' ? (
            <video src={item.url} poster={item.thumbnailUrl ?? undefined} controls className={styles.media} />
          ) : (
            <Image
              src={item.url}
              alt={item.caption ?? item.eventTitle}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              style={{ objectFit: 'cover' }}
            />
          )}
          <div className={styles.caption}>{item.caption ?? item.eventTitle}</div>
        </div>
      ))}
    </div>
  );
}
