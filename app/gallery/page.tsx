import type { Metadata } from 'next';
import { prisma } from '@/lib/db';
import { GalleryView } from '@/components/gallery/GalleryView';
import styles from './page.module.css';

export const revalidate = 60;

export const metadata: Metadata = {
  title: 'Gallery | Muslim Will',
  description: 'Photos and videos from Muslim Will events across the community.',
  alternates: { canonical: 'https://www.themuslimwill.com/gallery' },
};

export default async function GalleryPage() {
  const media = await prisma.media.findMany({
    where: { event: { status: { not: 'DRAFT' } } },
    orderBy: { createdAt: 'desc' },
    include: { event: { select: { id: true, title: true } } },
  });

  const events = Array.from(new Map(media.map((m) => [m.event.id, m.event])).values());

  const items = media.map((m) => ({
    id: m.id,
    type: m.type,
    url: m.url,
    thumbnailUrl: m.thumbnailUrl,
    caption: m.caption,
    eventId: m.event.id,
    eventTitle: m.event.title,
  }));

  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <h1>Gallery</h1>
        <p>Moments from Muslim Will events across the community.</p>
      </div>

      {items.length === 0 ? (
        <p className={styles.empty}>No photos or videos yet — check back after our next event.</p>
      ) : (
        <GalleryView media={items} events={events} />
      )}
    </div>
  );
}
