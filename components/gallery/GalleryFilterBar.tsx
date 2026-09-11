'use client';

import styles from './Gallery.module.css';

interface EventOption {
  id: string;
  title: string;
}

interface GalleryFilterBarProps {
  events: EventOption[];
  selectedEventId: string | null;
  onSelect: (eventId: string | null) => void;
}

export function GalleryFilterBar({ events, selectedEventId, onSelect }: GalleryFilterBarProps) {
  if (events.length <= 1) return null;

  return (
    <div className={styles.filterBar}>
      <button
        type="button"
        className={`${styles.pill} ${selectedEventId === null ? styles.pillActive : ''}`}
        onClick={() => onSelect(null)}
      >
        All Events
      </button>
      {events.map((event) => (
        <button
          key={event.id}
          type="button"
          className={`${styles.pill} ${selectedEventId === event.id ? styles.pillActive : ''}`}
          onClick={() => onSelect(event.id)}
        >
          {event.title}
        </button>
      ))}
    </div>
  );
}
