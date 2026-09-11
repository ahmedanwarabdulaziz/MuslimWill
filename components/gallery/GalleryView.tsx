'use client';

import { useMemo, useState } from 'react';
import { GalleryFilterBar } from './GalleryFilterBar';
import { GalleryGrid, type GalleryMediaItem } from './GalleryGrid';

export interface GalleryEventMedia extends GalleryMediaItem {
  eventId: string;
}

interface GalleryViewProps {
  media: GalleryEventMedia[];
  events: { id: string; title: string }[];
}

export function GalleryView({ media, events }: GalleryViewProps) {
  const [selectedEventId, setSelectedEventId] = useState<string | null>(null);

  const filtered = useMemo(
    () => (selectedEventId ? media.filter((item) => item.eventId === selectedEventId) : media),
    [media, selectedEventId],
  );

  return (
    <>
      <GalleryFilterBar events={events} selectedEventId={selectedEventId} onSelect={setSelectedEventId} />
      <GalleryGrid items={filtered} />
    </>
  );
}
