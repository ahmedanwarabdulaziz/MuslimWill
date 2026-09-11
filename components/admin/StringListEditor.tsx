'use client';

import styles from './EventForm.module.css';

interface StringListEditorProps {
  label: string;
  values: string[];
  onChange: (values: string[]) => void;
  placeholder?: string;
}

export function StringListEditor({ label, values, onChange, placeholder }: StringListEditorProps) {
  function updateAt(index: number, value: string) {
    const next = [...values];
    next[index] = value;
    onChange(next);
  }

  function removeAt(index: number) {
    onChange(values.filter((_, i) => i !== index));
  }

  return (
    <div className={styles.field}>
      <label className={styles.label}>{label}</label>
      {values.map((value, i) => (
        <div key={i} className={styles.listRow}>
          <input
            type="text"
            className={styles.input}
            value={value}
            placeholder={placeholder}
            onChange={(e) => updateAt(i, e.target.value)}
          />
          <button type="button" className={styles.removeBtn} onClick={() => removeAt(i)}>
            Remove
          </button>
        </div>
      ))}
      <button type="button" className={styles.addBtn} onClick={() => onChange([...values, ''])}>
        + Add {label}
      </button>
    </div>
  );
}
