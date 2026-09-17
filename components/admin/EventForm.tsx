'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import type { Offer, PackagePart, Step } from '@/lib/schemas';
import { OfferListEditor } from './OfferListEditor';
import { PackagePartListEditor } from './PackagePartListEditor';
import { StepListEditor } from './StepListEditor';
import { StringListEditor } from './StringListEditor';
import { MediaUploader, type MediaItem } from './MediaUploader';
import styles from './EventForm.module.css';

type EventStatus = 'DRAFT' | 'UPCOMING' | 'PAST';

export interface EventFormInitialData {
  id: string;
  slug: string;
  status: EventStatus;
  title: string;
  eventDate: string | null;
  location: string | null;
  partnerName: string | null;
  partnerLogoUrl: string | null;
  heroEyebrow: string | null;
  heroHeadline: string;
  heroHeadlineAccent: string | null;
  heroSubcopy: string | null;
  heroBadges: string[];
  trustBarItems: string[];
  offers: Offer[];
  packageParts: PackagePart[];
  howItWorks: Step[];
  helpPhone: string | null;
  helpEmail: string | null;
  metaTitle: string | null;
  metaDescription: string | null;
  ogImageUrl: string | null;
  media: MediaItem[];
}

interface EventFormProps {
  mode: 'create' | 'edit';
  initialEvent?: EventFormInitialData;
}

export function EventForm({ mode, initialEvent }: EventFormProps) {
  const router = useRouter();

  const [slug, setSlug] = useState(initialEvent?.slug ?? '');
  const [status, setStatus] = useState<EventStatus>(initialEvent?.status ?? 'DRAFT');
  const [title, setTitle] = useState(initialEvent?.title ?? '');
  const [eventDate, setEventDate] = useState(initialEvent?.eventDate ? initialEvent.eventDate.slice(0, 10) : '');
  const [location, setLocation] = useState(initialEvent?.location ?? '');
  const [partnerName, setPartnerName] = useState(initialEvent?.partnerName ?? '');
  const [partnerLogoUrl, setPartnerLogoUrl] = useState(initialEvent?.partnerLogoUrl ?? '');
  const [heroEyebrow, setHeroEyebrow] = useState(initialEvent?.heroEyebrow ?? '');
  const [heroHeadline, setHeroHeadline] = useState(initialEvent?.heroHeadline ?? '');
  const [heroHeadlineAccent, setHeroHeadlineAccent] = useState(initialEvent?.heroHeadlineAccent ?? '');
  const [heroSubcopy, setHeroSubcopy] = useState(initialEvent?.heroSubcopy ?? '');
  const [heroBadges, setHeroBadges] = useState<string[]>(initialEvent?.heroBadges ?? []);
  const [trustBarItems, setTrustBarItems] = useState<string[]>(initialEvent?.trustBarItems ?? []);
  const [offers, setOffers] = useState<Offer[]>(initialEvent?.offers ?? []);
  const [packageParts, setPackageParts] = useState<PackagePart[]>(initialEvent?.packageParts ?? []);
  const [howItWorks, setHowItWorks] = useState<Step[]>(initialEvent?.howItWorks ?? []);
  const [helpPhone, setHelpPhone] = useState(initialEvent?.helpPhone ?? '');
  const [helpEmail, setHelpEmail] = useState(initialEvent?.helpEmail ?? '');
  const [metaTitle, setMetaTitle] = useState(initialEvent?.metaTitle ?? '');
  const [metaDescription, setMetaDescription] = useState(initialEvent?.metaDescription ?? '');
  const [ogImageUrl, setOgImageUrl] = useState(initialEvent?.ogImageUrl ?? '');
  const [media, setMedia] = useState<MediaItem[]>(initialEvent?.media ?? []);

  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    setMessage(null);

    const payload = {
      slug: slug || undefined,
      status,
      title,
      eventDate: eventDate || null,
      location: location || null,
      partnerName: partnerName || null,
      partnerLogoUrl: partnerLogoUrl || null,
      heroEyebrow: heroEyebrow || null,
      heroHeadline,
      heroHeadlineAccent: heroHeadlineAccent || null,
      heroSubcopy: heroSubcopy || null,
      heroBadges,
      trustBarItems,
      offers,
      packageParts,
      howItWorks,
      helpPhone: helpPhone || null,
      helpEmail: helpEmail || null,
      metaTitle: metaTitle || null,
      metaDescription: metaDescription || null,
      ogImageUrl: ogImageUrl || null,
    };

    try {
      const url = mode === 'create' ? '/api/admin/events' : `/api/admin/events/${initialEvent!.id}`;
      const method = mode === 'create' ? 'POST' : 'PUT';
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const result = await res.json();
      if (!res.ok) throw new Error(result.error || 'Failed to save event');

      if (mode === 'create') {
        router.push(`/admin/events/${result.event.id}/edit`);
      } else {
        setMessage({ type: 'success', text: 'Saved.' });
        router.refresh();
      }
    } catch (err) {
      setMessage({ type: 'error', text: err instanceof Error ? err.message : 'Failed to save event' });
    } finally {
      setSaving(false);
    }
  }

  async function handleDelete() {
    if (!initialEvent) return;
    if (!confirm(`Delete "${initialEvent.title}"? This also removes its media. This can't be undone.`)) return;
    setSaving(true);
    try {
      const res = await fetch(`/api/admin/events/${initialEvent.id}`, { method: 'DELETE' });
      if (!res.ok) throw new Error('Failed to delete event');
      router.push('/admin');
    } catch {
      setMessage({ type: 'error', text: 'Failed to delete event.' });
      setSaving(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Event Details</h3>
        <div className={styles.row}>
          <div className={styles.field}>
            <label className={styles.label}>Title *</label>
            <input className={styles.input} value={title} onChange={(e) => setTitle(e.target.value)} required />
          </div>
          <div className={styles.field}>
            <label className={styles.label}>Status</label>
            <select
              className={styles.select}
              value={status}
              onChange={(e) => setStatus(e.target.value as EventStatus)}
            >
              <option value="DRAFT">Draft</option>
              <option value="UPCOMING">Upcoming</option>
              <option value="PAST">Past</option>
            </select>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.field}>
            <label className={styles.label}>URL slug</label>
            <input
              className={styles.input}
              value={slug}
              placeholder="auto-generated from title if left blank"
              onChange={(e) => setSlug(e.target.value)}
            />
          </div>
          <div className={styles.field}>
            <label className={styles.label}>Event date</label>
            <input
              type="date"
              className={styles.input}
              value={eventDate}
              onChange={(e) => setEventDate(e.target.value)}
            />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.field}>
            <label className={styles.label}>Location</label>
            <input className={styles.input} value={location} onChange={(e) => setLocation(e.target.value)} />
          </div>
          <div className={styles.field}>
            <label className={styles.label}>Partner name</label>
            <input
              className={styles.input}
              value={partnerName}
              onChange={(e) => setPartnerName(e.target.value)}
            />
          </div>
        </div>

      </div>

      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Hero</h3>
        <div className={styles.field}>
          <label className={styles.label}>Eyebrow</label>
          <input className={styles.input} value={heroEyebrow} onChange={(e) => setHeroEyebrow(e.target.value)} />
        </div>
        <div className={styles.row}>
          <div className={styles.field}>
            <label className={styles.label}>Headline *</label>
            <input
              className={styles.input}
              value={heroHeadline}
              onChange={(e) => setHeroHeadline(e.target.value)}
              required
            />
          </div>
          <div className={styles.field}>
            <label className={styles.label}>Headline accent (gold span)</label>
            <input
              className={styles.input}
              value={heroHeadlineAccent}
              onChange={(e) => setHeroHeadlineAccent(e.target.value)}
            />
          </div>
        </div>
        <div className={styles.field}>
          <label className={styles.label}>Subcopy (use **bold** for emphasis)</label>
          <textarea
            className={styles.textarea}
            value={heroSubcopy}
            onChange={(e) => setHeroSubcopy(e.target.value)}
          />
        </div>
        <StringListEditor label="Hero badges" values={heroBadges} onChange={setHeroBadges} />
        <StringListEditor label="Trust bar items" values={trustBarItems} onChange={setTrustBarItems} />
      </div>

      <OfferListEditor offers={offers} onChange={setOffers} />
      <PackagePartListEditor parts={packageParts} onChange={setPackageParts} />
      <StepListEditor steps={howItWorks} onChange={setHowItWorks} />

      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Support Contact</h3>
        <div className={styles.row}>
          <div className={styles.field}>
            <label className={styles.label}>Phone</label>
            <input className={styles.input} value={helpPhone} onChange={(e) => setHelpPhone(e.target.value)} />
          </div>
          <div className={styles.field}>
            <label className={styles.label}>Email</label>
            <input className={styles.input} value={helpEmail} onChange={(e) => setHelpEmail(e.target.value)} />
          </div>
        </div>
      </div>

      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>SEO</h3>
        <div className={styles.field}>
          <label className={styles.label}>Meta title</label>
          <input className={styles.input} value={metaTitle} onChange={(e) => setMetaTitle(e.target.value)} />
        </div>
        <div className={styles.field}>
          <label className={styles.label}>Meta description</label>
          <textarea
            className={styles.textarea}
            value={metaDescription}
            onChange={(e) => setMetaDescription(e.target.value)}
          />
        </div>
        <div className={styles.field}>
          <label className={styles.label}>OG image URL</label>
          <input className={styles.input} value={ogImageUrl} onChange={(e) => setOgImageUrl(e.target.value)} />
        </div>
      </div>

      {mode === 'edit' && initialEvent && (
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>Media</h3>
          <p className={styles.helpText}>Upload images for this event. You can select one to be the main thumbnail and one to be the partner logo.</p>
          <MediaUploader 
            eventId={initialEvent.id} 
            media={media} 
            onMediaChange={setMedia}
            mainImageUrl={ogImageUrl}
            onMainImageSelect={setOgImageUrl}
            partnerLogoUrl={partnerLogoUrl}
            onPartnerLogoSelect={setPartnerLogoUrl}
          />
        </div>
      )}

      {message && <p className={`${styles.statusMessage} ${styles[message.type]}`}>{message.text}</p>}

      <div className={styles.actions}>
        <button type="submit" className={styles.saveBtn} disabled={saving}>
          {saving ? 'Saving…' : mode === 'create' ? 'Create event' : 'Save changes'}
        </button>
        {mode === 'edit' && (
          <button type="button" className={styles.removeBtn} onClick={handleDelete} disabled={saving}>
            Delete event
          </button>
        )}
      </div>
    </form>
  );
}
