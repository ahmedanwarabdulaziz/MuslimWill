import { prisma } from '@/lib/db';
import { GalleryView } from '@/components/gallery/GalleryView';
import styles from './EventGalleryWrapper.module.css';

interface EventGalleryWrapperProps {
  currentEventId?: string;
}

export async function EventGalleryWrapper({ currentEventId }: EventGalleryWrapperProps) {
  const mediaRaw = await prisma.media.findMany({
    where: { event: { status: { not: 'DRAFT' } } },
    orderBy: { createdAt: 'desc' },
    include: { event: { select: { id: true, title: true, partnerLogoUrl: true } } },
  });

  // Exclude partner logos from the gallery
  const media = mediaRaw.filter(m => m.url !== m.event.partnerLogoUrl);

  const events = Array.from(new Map(media.map((m) => [m.event.id, m.event])).values());

  const items = media.map((m) => ({
    id: m.id,
    type: m.type as 'IMAGE' | 'VIDEO',
    url: m.url,
    thumbnailUrl: m.thumbnailUrl,
    caption: m.caption,
    eventId: m.event.id,
    eventTitle: m.event.title,
  }));

  if (items.length === 0) return null;

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>Event Gallery</h2>
          <p>Moments from our events across the community.</p>
        </div>
        <GalleryView media={items} events={events} />
      </div>
    </section>
  );
}
