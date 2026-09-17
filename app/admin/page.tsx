'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ImagePlus } from 'lucide-react';
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

function QuickUploader({ eventId, onUploadSuccess }: { eventId: string; onUploadSuccess: () => void }) {
  const [uploading, setUploading] = useState(false);

  async function handleFiles(files: FileList | null) {
    if (!files || files.length === 0) return;
    setUploading(true);

    try {
      for (const file of Array.from(files)) {
        const isVideo = file.type.startsWith('video/');
        const resourceType = isVideo ? 'video' : 'image';

        const signRes = await fetch('/api/admin/media/sign', { method: 'POST' });
        if (!signRes.ok) throw new Error('Failed to prepare upload');
        const { signature, timestamp, apiKey, cloudName, folder } = await signRes.json();

        const uploadData = new FormData();
        uploadData.append('file', file);
        uploadData.append('api_key', apiKey);
        uploadData.append('timestamp', String(timestamp));
        uploadData.append('signature', signature);
        uploadData.append('folder', folder);

        const cloudinaryRes = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/${resourceType}/upload`, {
          method: 'POST',
          body: uploadData,
        });
        if (!cloudinaryRes.ok) throw new Error('Upload to media host failed');
        const uploaded = await cloudinaryRes.json();

        const thumbnailUrl = isVideo
          ? `https://res.cloudinary.com/${cloudName}/video/upload/${uploaded.public_id}.jpg`
          : null;

        const saveRes = await fetch('/api/admin/media', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            eventId,
            type: isVideo ? 'VIDEO' : 'IMAGE',
            url: uploaded.secure_url,
            thumbnailUrl,
            publicId: uploaded.public_id,
          }),
        });
        if (!saveRes.ok) throw new Error('Failed to save media record');
      }
      onUploadSuccess();
    } catch (err) {
      console.error('Media upload failed:', err);
      alert('Upload failed. Please try again.');
    } finally {
      setUploading(false);
    }
  }

  return (
    <label style={{ cursor: uploading ? 'wait' : 'pointer', color: uploading ? 'var(--color-text-muted)' : 'var(--color-primary)', display: 'flex' }} title="Add Media">
      <ImagePlus size={20} />
      <input
        type="file"
        accept="image/*,video/*"
        multiple
        hidden
        disabled={uploading}
        onChange={(e) => handleFiles(e.target.files)}
      />
    </label>
  );
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
                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    <QuickUploader eventId={event.id} onUploadSuccess={loadEvents} />
                    <Link href={`/admin/events/${event.id}/edit`} className={styles.editLink}>
                      Edit
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
