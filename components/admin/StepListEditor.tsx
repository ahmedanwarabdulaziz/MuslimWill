'use client';

import type { Step } from '@/lib/schemas';
import styles from './EventForm.module.css';

const EMPTY_STEP: Step = { title: '', description: '' };

interface StepListEditorProps {
  steps: Step[];
  onChange: (steps: Step[]) => void;
}

export function StepListEditor({ steps, onChange }: StepListEditorProps) {
  function updateAt(index: number, patch: Partial<Step>) {
    const next = [...steps];
    next[index] = { ...next[index], ...patch };
    onChange(next);
  }

  function removeAt(index: number) {
    onChange(steps.filter((_, i) => i !== index));
  }

  return (
    <div className={styles.section}>
      <h3 className={styles.sectionTitle}>How It Works</h3>
      {steps.map((step, i) => (
        <div key={i} className={styles.card}>
          <div className={styles.cardHeader}>
            <strong>Step {i + 1}</strong>
            <button type="button" className={styles.removeBtn} onClick={() => removeAt(i)}>
              Remove
            </button>
          </div>
          <div className={styles.field}>
            <label className={styles.label}>Title *</label>
            <input
              className={styles.input}
              value={step.title}
              onChange={(e) => updateAt(i, { title: e.target.value })}
            />
          </div>
          <div className={styles.field}>
            <label className={styles.label}>Description *</label>
            <textarea
              className={styles.textarea}
              value={step.description}
              onChange={(e) => updateAt(i, { description: e.target.value })}
            />
          </div>
        </div>
      ))}
      <button type="button" className={styles.addBtn} onClick={() => onChange([...steps, { ...EMPTY_STEP }])}>
        + Add step
      </button>
    </div>
  );
}
