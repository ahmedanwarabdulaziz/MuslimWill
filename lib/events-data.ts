import { prisma } from '@/lib/db';
import type { Event, Media } from '@/generated/prisma/client';

export type EventWithThumb = Event & { media: Media[] };

export function getThumbnailUrl(event: EventWithThumb): string | null {
  const item = event.media[0];
  if (!item) return null;
  return item.type === 'IMAGE' ? item.url : (item.thumbnailUrl ?? item.url);
}

export function formatEventMeta(event: Event): string {
  const parts: string[] = [];
  if (event.eventDate) parts.push(new Date(event.eventDate).toLocaleDateString(undefined, { dateStyle: 'medium' }));
  if (event.location) parts.push(event.location);
  return parts.join(' • ');
}

interface EventsOverviewOptions {
  excludeEventId?: string;
  upcomingLimit?: number;
  pastLimit?: number;
}

export async function getEventsOverview({
  excludeEventId,
  upcomingLimit = 3,
  pastLimit = 3,
}: EventsOverviewOptions = {}) {
  const [currentRaw, upcomingRaw, pastRaw] = await Promise.all([
    prisma.event.findFirst({
      where: { isCurrent: true },
      include: { media: { orderBy: { order: 'asc' }, take: 1 } },
    }),
    prisma.event.findMany({
      where: { status: 'UPCOMING' },
      orderBy: { eventDate: 'asc' },
      take: upcomingLimit + 1,
      include: { media: { orderBy: { order: 'asc' }, take: 1 } },
    }),
    prisma.event.findMany({
      where: { status: 'PAST' },
      orderBy: [{ eventDate: 'desc' }, { createdAt: 'desc' }],
      take: pastLimit + 1,
      include: { media: { orderBy: { order: 'asc' }, take: 1 } },
    }),
  ]);

  const current = currentRaw && currentRaw.id !== excludeEventId ? currentRaw : null;
  const upcoming = upcomingRaw.filter((e) => e.id !== current?.id && e.id !== excludeEventId).slice(0, upcomingLimit);
  const past = pastRaw.filter((e) => e.id !== current?.id && e.id !== excludeEventId).slice(0, pastLimit);

  return { current, upcoming, past };
}
