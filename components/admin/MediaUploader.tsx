'use client';

import { useState } from 'react';
import styles from './MediaUploader.module.css';

export interface MediaItem {
  id: string;
  type: 'IMAGE' | 'VIDEO';
  url: string;
  thumbnailUrl: string | null;
  caption: string | null;
}

interface MediaUploaderProps {
  eventId: string;
  media: MediaItem[];
  onMediaChange: (media: MediaItem[]) => void;
}

export function MediaUploader({ eventId, media, onMediaChange }: MediaUploaderProps) {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState('');

  async function handleFiles(files: FileList | null) {
    if (!files || files.length === 0) return;
    setUploading(true);
    setError('');

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
        const { media: newMedia } = await saveRes.json();

        onMediaChange([...media, newMedia]);
      }
    } catch (err) {
      console.error('Media upload failed:', err);
      setError(err instanceof Error ? err.message : 'Upload failed. Please try again.');
    } finally {
      setUploading(false);
    }
  }

  async function handleDelete(id: string) {
    if (!confirm('Remove this media item?')) return;
    try {
      const res = await fetch(`/api/admin/media/${id}`, { method: 'DELETE' });
      if (!res.ok) throw new Error('Failed to delete media');
      onMediaChange(media.filter((m) => m.id !== id));
    } catch (err) {
      console.error('Failed to delete media:', err);
      setError('Failed to delete media item.');
    }
  }

  return (
    <div className={styles.wrapper}>
      <label className={styles.uploadBtn}>
        {uploading ? 'Uploading…' : '+ Upload photos / videos'}
        <input
          type="file"
          accept="image/*,video/*"
          multiple
          hidden
          disabled={uploading}
          onChange={(e) => handleFiles(e.target.files)}
        />
      </label>
      {error && <p className={styles.error}>{error}</p>}

      <div className={styles.grid}>
        {media.map((item) => (
          <div key={item.id} className={styles.item}>
            {item.type === 'VIDEO' ? (
              <video src={item.url} poster={item.thumbnailUrl ?? undefined} controls className={styles.thumb} />
            ) : (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={item.url} alt={item.caption ?? ''} className={styles.thumb} />
            )}
            <button type="button" className={styles.deleteBtn} onClick={() => handleDelete(item.id)}>
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
