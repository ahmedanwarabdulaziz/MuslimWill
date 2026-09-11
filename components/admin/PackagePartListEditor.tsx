'use client';

import { PACKAGE_ICON_KEYS, type PackagePart } from '@/lib/schemas';
import styles from './EventForm.module.css';

const EMPTY_PART: PackagePart = { icon: 'checkCircle', title: '', copy: '' };

interface PackagePartListEditorProps {
  parts: PackagePart[];
  onChange: (parts: PackagePart[]) => void;
}

export function PackagePartListEditor({ parts, onChange }: PackagePartListEditorProps) {
  function updateAt(index: number, patch: Partial<PackagePart>) {
    const next = [...parts];
    next[index] = { ...next[index], ...patch };
    onChange(next);
  }

  function removeAt(index: number) {
    onChange(parts.filter((_, i) => i !== index));
  }

  return (
    <div className={styles.section}>
      <h3 className={styles.sectionTitle}>What&apos;s Included</h3>
      {parts.map((part, i) => (
        <div key={i} className={styles.card}>
          <div className={styles.cardHeader}>
            <strong>Item {i + 1}</strong>
            <button type="button" className={styles.removeBtn} onClick={() => removeAt(i)}>
              Remove
            </button>
          </div>
          <div className={styles.row}>
            <div className={styles.field}>
              <label className={styles.label}>Icon</label>
              <select
                className={styles.select}
                value={part.icon}
                onChange={(e) => updateAt(i, { icon: e.target.value as PackagePart['icon'] })}
              >
                {PACKAGE_ICON_KEYS.map((key) => (
                  <option key={key} value={key}>
                    {key}
                  </option>
                ))}
              </select>
            </div>
            <div className={styles.field}>
              <label className={styles.label}>Title *</label>
              <input
                className={styles.input}
                value={part.title}
                onChange={(e) => updateAt(i, { title: e.target.value })}
              />
            </div>
          </div>
          <div className={styles.field}>
            <label className={styles.label}>Copy *</label>
            <textarea
              className={styles.textarea}
              value={part.copy}
              onChange={(e) => updateAt(i, { copy: e.target.value })}
            />
          </div>
        </div>
      ))}
      <button type="button" className={styles.addBtn} onClick={() => onChange([...parts, { ...EMPTY_PART }])}>
        + Add item
      </button>
    </div>
  );
}
