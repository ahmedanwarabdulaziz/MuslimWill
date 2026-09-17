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
  mainImageUrl?: string | null;
  onMainImageSelect?: (url: string) => void;
  partnerLogoUrl?: string | null;
  onPartnerLogoSelect?: (url: string) => void;
}

export function MediaUploader({ eventId, media, onMediaChange, mainImageUrl, onMainImageSelect, partnerLogoUrl, onPartnerLogoSelect }: MediaUploaderProps) {
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
        {media.map((item) => {
          const isMain = item.url === mainImageUrl;
          const isLogo = item.url === partnerLogoUrl;
          return (
            <div key={item.id} className={styles.item}>
              {item.type === 'VIDEO' ? (
                <video src={item.url} poster={item.thumbnailUrl ?? undefined} controls className={styles.thumb} />
              ) : (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={item.url} alt={item.caption ?? ''} className={styles.thumb} />
              )}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', width: '100%', marginTop: '0.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', gap: '0.5rem', width: '100%' }}>
                  <button
                    type="button"
                    className={styles.deleteBtn}
                    style={{ flex: 1, backgroundColor: isMain ? 'var(--color-primary)' : 'var(--color-background-alt)', color: isMain ? '#fff' : 'inherit', border: isMain ? 'none' : '1px solid var(--color-border)' }}
                    onClick={() => onMainImageSelect?.(item.url)}
                  >
                    {isMain ? '★ Main Image' : 'Set Main'}
                  </button>
                  <button type="button" className={styles.deleteBtn} onClick={() => handleDelete(item.id)}>
                    Remove
                  </button>
                </div>
                {item.type === 'IMAGE' && onPartnerLogoSelect && (
                  <button
                    type="button"
                    className={styles.deleteBtn}
                    style={{ backgroundColor: isLogo ? 'var(--color-gold)' : 'var(--color-background-alt)', color: isLogo ? 'var(--color-navy)' : 'inherit', border: isLogo ? 'none' : '1px solid var(--color-border)' }}
                    onClick={() => onPartnerLogoSelect(item.url)}
                  >
                    {isLogo ? '★ Partner Logo' : 'Set as Partner Logo'}
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
