'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from './page.module.css';

interface EventListItem {
  id: string;
  slug: string;
  title: string;
  status: 'DRAFT' | 'UPCOMING' | 'PAST';
  eventDate: string | null;
  isCurrent: boolean;
  _count: { media: number };
}

export default function AdminDashboardPage() {
  const [events, setEvents] = useState<EventListItem[] | null>(null);
  const [error, setError] = useState('');
  const [settingCurrentId, setSettingCurrentId] = useState<string | null>(null);

  useEffect(() => {
    loadEvents();
  }, []);

  function loadEvents() {
    fetch('/api/admin/events')
      .then(async (res) => {
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || 'Failed to load events.');
        setEvents(data.events);
      })
      .catch((err) => setError(err instanceof Error ? err.message : 'Failed to load events.'));
  }

  async function handleSetCurrent(id: string) {
    setSettingCurrentId(id);
    try {
      const res = await fetch(`/api/admin/events/${id}/set-current`, { method: 'POST' });
      if (!res.ok) throw new Error('Failed to update');
      setEvents((prev) => prev && prev.map((e) => ({ ...e, isCurrent: e.id === id })));
    } catch {
      setError('Failed to set the current /event page. Please try again.');
    } finally {
      setSettingCurrentId(null);
    }
  }

  return (
    <div>
      <div className={styles.header}>
        <h1>Events</h1>
        <Link href="/admin/events/new" className={styles.newBtn}>
          + New event
        </Link>
      </div>

      <p className={styles.helpText}>
        The event marked <strong>Live at /event</strong> is the one shown at the fixed
        <code> /event</code> URL — use this for pre-printed QR codes so you never have to reprint
        them; just switch which event is &quot;current&quot; here.
      </p>

      {error && <p>{error}</p>}

      {events === null && !error && <p>Loading…</p>}

      {events && events.length === 0 && <p className={styles.empty}>No events yet. Create your first one.</p>}

      {events && events.length > 0 && (
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Title</th>
              <th>Status</th>
              <th>Date</th>
              <th>Media</th>
              <th>/event</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {events.map((event) => (
              <tr key={event.id}>
                <td>{event.title}</td>
                <td>
                  <span className={`${styles.badge} ${styles[`badge${event.status}`]}`}>{event.status}</span>
                </td>
                <td>{event.eventDate ? new Date(event.eventDate).toLocaleDateString() : '—'}</td>
                <td>{event._count.media}</td>
                <td>
                  {event.isCurrent ? (
                    <span className={styles.currentBadge}>✓ Live</span>
                  ) : (
                    <button
                      type="button"
                      className={styles.setCurrentBtn}
                      disabled={settingCurrentId === event.id}
                      onClick={() => handleSetCurrent(event.id)}
                    >
                      {settingCurrentId === event.id ? 'Setting…' : 'Set as current'}
                    </button>
                  )}
                </td>
                <td>
                  <Link href={`/admin/events/${event.id}/edit`} className={styles.editLink}>
                    Edit
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
