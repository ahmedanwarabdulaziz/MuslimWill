'use client';

import type { Offer } from '@/lib/schemas';
import { StringListEditor } from './StringListEditor';
import styles from './EventForm.module.css';

const EMPTY_OFFER: Offer = {
  name: '',
  tagline: '',
  featured: false,
  price: '',
  features: [''],
  ctaLabel: '',
  ctaPlan: '',
};

interface OfferListEditorProps {
  offers: Offer[];
  onChange: (offers: Offer[]) => void;
}

export function OfferListEditor({ offers, onChange }: OfferListEditorProps) {
  function updateAt(index: number, patch: Partial<Offer>) {
    const next = [...offers];
    next[index] = { ...next[index], ...patch };
    onChange(next);
  }

  function removeAt(index: number) {
    onChange(offers.filter((_, i) => i !== index));
  }

  return (
    <div className={styles.section}>
      <h3 className={styles.sectionTitle}>Pricing Offers</h3>
      {offers.map((offer, i) => (
        <div key={i} className={styles.card}>
          <div className={styles.cardHeader}>
            <strong>Offer {i + 1}</strong>
            <button type="button" className={styles.removeBtn} onClick={() => removeAt(i)}>
              Remove offer
            </button>
          </div>

          <div className={styles.row}>
            <div className={styles.field}>
              <label className={styles.label}>Name *</label>
              <input
                className={styles.input}
                value={offer.name}
                onChange={(e) => updateAt(i, { name: e.target.value })}
              />
            </div>
            <div className={styles.field}>
              <label className={styles.checkboxLabel}>
                <input
                  type="checkbox"
                  checked={offer.featured}
                  onChange={(e) => updateAt(i, { featured: e.target.checked })}
                />
                Featured card
              </label>
            </div>
          </div>

          <div className={styles.field}>
            <label className={styles.label}>Tagline *</label>
            <textarea
              className={styles.textarea}
              value={offer.tagline}
              onChange={(e) => updateAt(i, { tagline: e.target.value })}
            />
          </div>

          <div className={styles.row}>
            <div className={styles.field}>
              <label className={styles.label}>Badge (e.g. &quot;Saturday Only&quot;)</label>
              <input
                className={styles.input}
                value={offer.badge ?? ''}
                onChange={(e) => updateAt(i, { badge: e.target.value })}
              />
            </div>
            <div className={styles.field}>
              <label className={styles.label}>Price *</label>
              <input
                className={styles.input}
                value={offer.price}
                placeholder="$275"
                onChange={(e) => updateAt(i, { price: e.target.value })}
              />
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.field}>
              <label className={styles.label}>Was price (strike-through)</label>
              <input
                className={styles.input}
                value={offer.priceWas ?? ''}
                placeholder="$8/mo"
                onChange={(e) => updateAt(i, { priceWas: e.target.value })}
              />
            </div>
            <div className={styles.field}>
              <label className={styles.label}>Price note</label>
              <input
                className={styles.input}
                value={offer.priceNote ?? ''}
                placeholder="/month"
                onChange={(e) => updateAt(i, { priceNote: e.target.value })}
              />
            </div>
          </div>

          <div className={styles.field}>
            <label className={styles.label}>Price compare text</label>
            <input
              className={styles.input}
              value={offer.priceCompareText ?? ''}
              placeholder="instead of $350"
              onChange={(e) => updateAt(i, { priceCompareText: e.target.value })}
            />
          </div>

          <StringListEditor
            label="Features"
            values={offer.features}
            onChange={(features) => updateAt(i, { features })}
          />

          <div className={styles.row}>
            <div className={styles.field}>
              <label className={styles.label}>CTA button label *</label>
              <input
                className={styles.input}
                value={offer.ctaLabel}
                onChange={(e) => updateAt(i, { ctaLabel: e.target.value })}
              />
            </div>
            <div className={styles.field}>
              <label className={styles.label}>CTA plan code *</label>
              <input
                className={styles.input}
                value={offer.ctaPlan}
                placeholder="full / bridge / family"
                onChange={(e) => updateAt(i, { ctaPlan: e.target.value })}
              />
            </div>
          </div>

          <div className={styles.field}>
            <label className={styles.label}>Micro text (below CTA)</label>
            <input
              className={styles.input}
              value={offer.micro ?? ''}
              placeholder="Cancel anytime."
              onChange={(e) => updateAt(i, { micro: e.target.value })}
            />
          </div>
        </div>
      ))}
      <button type="button" className={styles.addBtn} onClick={() => onChange([...offers, { ...EMPTY_OFFER }])}>
        + Add offer
      </button>
    </div>
  );
}
