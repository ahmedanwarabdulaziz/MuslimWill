'use client';

import { useState, type FormEvent } from 'react';
import { trackEvent } from '@/lib/analytics';
import { MARKETING_CONSENT_TEXT } from '@/lib/rsvp-copy';
import styles from './page.module.css';

type Result = { pass: string; priority: boolean; alreadyRegistered?: boolean; email: string };

type IcsInfo = { slug: string; startsAt: string; endsAt: string; location: string };

function icsDate(iso: string) {
  return new Date(iso).toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '');
}

function downloadIcs(ics: IcsInfo, pass: string) {
  const body = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//The Muslim Will//RSVP//EN',
    'BEGIN:VEVENT',
    `UID:${ics.slug}-${pass}@themuslimwill.com`,
    `DTSTAMP:${icsDate(new Date().toISOString())}`,
    `DTSTART:${icsDate(ics.startsAt)}`,
    `DTEND:${icsDate(ics.endsAt)}`,
    'SUMMARY:Islamic Will Session — The Muslim Will',
    `LOCATION:${ics.location.replace(/,/g, '\\,')}`,
    `DESCRIPTION:After Maghrib prayer. Your pass: ${pass}`,
    'END:VEVENT',
    'END:VCALENDAR',
  ].join('\r\n');
  const url = URL.createObjectURL(new Blob([body], { type: 'text/calendar' }));
  const a = document.createElement('a');
  a.href = url;
  a.download = 'muslim-will-session.ics';
  a.click();
  URL.revokeObjectURL(url);
}

export function RsvpForm({ dateLabel, ics }: { dateLabel: string; ics: IcsInfo }) {
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [result, setResult] = useState<Result | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError('');
    setSubmitting(true);

    const form = new FormData(e.currentTarget);
    const params = new URLSearchParams(window.location.search);
    const email = String(form.get('email') ?? '');

    try {
      const res = await fetch('/api/rsvp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.get('name'),
          phone: form.get('phone'),
          email,
          partySize: form.get('partySize'),
          marketingConsent: form.get('marketingConsent') === 'on',
          _gotcha: form.get('_gotcha'),
          utmSource: params.get('utm_source'),
          utmMedium: params.get('utm_medium'),
          utmCampaign: params.get('utm_campaign'),
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || 'Something went wrong. Please try again.');
        return;
      }
      trackEvent('rsvp_submit', { priority: data.priority, already_registered: Boolean(data.alreadyRegistered) });
      setResult({ ...data, email });
      document.getElementById('rsvp')?.scrollIntoView({ behavior: 'smooth' });
    } catch {
      setError('Could not reach the server. Please check your connection and try again.');
    } finally {
      setSubmitting(false);
    }
  }

  if (result) {
    return (
      <div className={styles.confirm} role="status">
        <div className={styles.confirmCheck} aria-hidden>✓</div>
        <h2>{result.alreadyRegistered ? "You're already on the list." : "You're on the list."}</h2>
        <div className={styles.passCard}>
          <div className={styles.passLabel}>Your pass</div>
          <div className={styles.passNumber}>{result.pass}</div>
          <p>
            {result.priority
              ? 'You have priority access. Show this pass when you arrive and our team will see you first.'
              : 'Priority seats were full, but your seat is saved. Show this pass when you arrive to check in.'}
          </p>
        </div>
        <p className={styles.confirmText}>
          Your confirmation and calendar invite are on their way to <strong>{result.email}</strong>. See you {dateLabel.replace(/, \d{4}$/, '')}, after Maghrib.
        </p>
        <div className={styles.confirmActions}>
          <button type="button" className={styles.outlineBtn} onClick={() => downloadIcs(ics, result.pass)}>
            Add to calendar
          </button>
          <a
            href="https://app.themuslimwill.com/calculator?utm_source=rsvp_page&utm_medium=referral&utm_campaign=mac-waterloo-2026-10-23"
            className={styles.primaryBtn}
            onClick={() => trackEvent('calculator_click', { location: 'rsvp_confirmation' })}
          >
            Get ahead: check your family&apos;s difference
          </a>
        </div>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate={false}>
      <div className={styles.formHead}>
        <h2>Save your seat</h2>
        <p>Takes 30 seconds. Your pass arrives by email.</p>
      </div>

      <label className={styles.field}>
        <span>Full name</span>
        <input name="name" type="text" autoComplete="name" required minLength={2} maxLength={100} />
      </label>

      <label className={styles.field}>
        <span>Phone</span>
        <input name="phone" type="tel" autoComplete="tel" inputMode="tel" required minLength={10} maxLength={30} placeholder="(519) 555-0123" />
      </label>

      <label className={styles.field}>
        <span>Email</span>
        <input name="email" type="email" autoComplete="email" required maxLength={200} />
      </label>

      <label className={styles.field}>
        <span>Number attending <em>(optional)</em></span>
        <select name="partySize" defaultValue="1">
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <option key={n} value={n}>{n === 6 ? '6 or more' : n}</option>
          ))}
        </select>
      </label>

      {/* Honeypot: hidden from people, filled by bots */}
      <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className={styles.honeypot} aria-hidden="true" />

      <label className={styles.consent}>
        <input type="checkbox" name="marketingConsent" />
        <span>{MARKETING_CONSENT_TEXT}</span>
      </label>

      {error && <p className={styles.error} role="alert">{error}</p>}

      <button type="submit" className={styles.submitBtn} disabled={submitting}>
        {submitting ? 'Saving your seat…' : 'Save My Seat'}
      </button>

      <p className={styles.privacy}>
        We use your details to save your seat and send your pass. See our <a href="/privacy">privacy policy</a>.
      </p>
    </form>
  );
}
