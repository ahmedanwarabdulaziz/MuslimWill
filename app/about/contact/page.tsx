'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './page.module.css';

const PATHWAYS = [
  {
    id: 'families',
    icon: '🏠',
    title: 'For Families and Individuals',
    desc: 'Have questions about the process, pricing, or your specific situation before starting?',
    ctas: [
      { label: 'Book a call →', href: '/apply', primary: true },
      { label: 'Email us →', href: 'mailto:hello@themuslimwill.com', primary: false },
    ],
  },
  {
    id: 'organisations',
    icon: '🏛️',
    title: 'For Organisations and Partners',
    desc: 'Charities, masjids, and community organisations interested in a partnership, sponsored seats, or a co-branded programme.',
    ctas: [
      { label: 'Request a Demo →', href: '/community/request-demo', primary: true },
    ],
  },
  {
    id: 'professionals',
    icon: '💼',
    title: 'For Professionals',
    desc: 'Financial advisors, estate planners, lawyers, paralegals, and scholars interested in a referral relationship or joining our network.',
    ctas: [
      { label: 'Request a Demo →', href: '/community/request-demo', primary: true },
    ],
  },
  {
    id: 'press',
    icon: '📰',
    title: 'For Press and Media',
    desc: 'Journalists and media covering Islamic estate planning, Muslim family finance, or community innovation in Canada.',
    ctas: [
      { label: 'Press enquiries →', href: 'mailto:press@themuslimwill.com', primary: true },
    ],
  },
];

type FormState = 'idle' | 'submitting' | 'success' | 'error';

function ContactForm() {
  const [formState, setFormState] = useState<FormState>('idle');
  const [form, setForm] = useState({ name: '', email: '', type: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    await new Promise((r) => setTimeout(r, 1200));
    setFormState('success');
  };

  if (formState === 'success') {
    return (
      <div className={styles.formSuccess}>
        <div className={styles.formSuccessIcon}>✓</div>
        <h3 className={styles.formSuccessTitle}>Message received.</h3>
        <p className={styles.formSuccessDesc}>
          A member of our team will read your message and reply within one business day. We do not use automated responses.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form} noValidate>
      <div className={styles.formRow}>
        <div className={styles.formField}>
          <label className={styles.formLabel} htmlFor="contact-name">Full name</label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            placeholder="Your name"
            className={styles.formInput}
            value={form.name}
            onChange={handleChange}
          />
        </div>
        <div className={styles.formField}>
          <label className={styles.formLabel} htmlFor="contact-email">Email address</label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            placeholder="you@example.com"
            className={styles.formInput}
            value={form.email}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className={styles.formField}>
        <label className={styles.formLabel} htmlFor="contact-type">I am reaching out as</label>
        <select
          id="contact-type"
          name="type"
          required
          className={styles.formSelect}
          value={form.type}
          onChange={handleChange}
        >
          <option value="" disabled>Select your category</option>
          <option value="family">A Muslim family or individual</option>
          <option value="organisation">A charity, masjid, or organisation</option>
          <option value="professional">A professional (advisor, lawyer, paralegal, scholar)</option>
          <option value="press">Press or media</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div className={styles.formField}>
        <label className={styles.formLabel} htmlFor="contact-message">Your message</label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={5}
          placeholder="Tell us what you need — we will make sure the right person responds."
          className={styles.formTextarea}
          value={form.message}
          onChange={handleChange}
        />
      </div>

      <button
        type="submit"
        className={styles.formSubmit}
        disabled={formState === 'submitting'}
      >
        {formState === 'submitting' ? 'Sending…' : 'Send Message →'}
      </button>

      <p className={styles.formDisclaimer}>
        Every message reaches a real person. We respond within one business day.
      </p>
    </form>
  );
}

export default function ContactPage() {
  return (
    <div className={styles.main}>

      {/* ── HERO ── */}
      <section className={styles.heroSection}>
        <div className={styles.heroOverlay} />
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.heroEyebrow}>Trust &amp; Transparency › Contact Us</div>
            <h1 className={styles.heroH1}>Reach the right team — we are here for you.</h1>
            <p className={styles.heroSub}>
              Whether you are a family getting started, an organisation exploring a partnership, a professional considering a referral, or a journalist covering Islamic estate planning — there is a team member ready to speak with you.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 1: Pathway Cards ── */}
      <section className={styles.pathwaySection}>
        <div className={styles.container}>
          <h2 className={styles.pathwayH2}>Choose your pathway</h2>
          <div className={styles.pathwayGrid}>
            {PATHWAYS.map((p) => (
              <div key={p.id} className={styles.pathwayCard}>
                <div className={styles.pathwayCardIcon}>{p.icon}</div>
                <div className={styles.pathwayCardTitle}>{p.title}</div>
                <div className={styles.pathwayCardDesc}>{p.desc}</div>
                <div className={styles.pathwayCtas}>
                  {p.ctas.map((cta) => (
                    <Link
                      key={cta.label}
                      href={cta.href}
                      className={cta.primary ? styles.pathwayCtaPrimary : styles.pathwayCtaSecondary}
                    >
                      {cta.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 2: Form + Details ── */}
      <section className={styles.formSection}>
        <div className={styles.container}>
          <div className={styles.formLayout}>

            {/* Left: form */}
            <div className={styles.formLeft}>
              <div className={styles.sectionLabel}>Send a message</div>
              <h2 className={styles.formH2}>Not sure which pathway fits? Write to us directly.</h2>
              <p className={styles.formIntro}>
                We route every message to the right person on our team. You do not need to know exactly who you are looking for.
              </p>
              <ContactForm />
            </div>

            {/* Right: contact details */}
            <div className={styles.formRight}>
              <div className={styles.detailsCard}>
                <div className={styles.detailsCardAccent} />
                <div className={styles.detailsCardBody}>
                  <div className={styles.detailsSection}>
                    <div className={styles.detailsSectionLabel}>Email</div>
                    <a href="mailto:hello@themuslimwill.com" className={styles.detailsEmail}>
                      hello@themuslimwill.com
                    </a>
                    <div className={styles.detailsSectionNote}>To be confirmed before launch</div>
                  </div>

                  <div className={styles.detailsDivider} />

                  <div className={styles.detailsSection}>
                    <div className={styles.detailsSectionLabel}>Response time</div>
                    <div className={styles.detailsValue}>Within one business day</div>
                    <div className={styles.detailsSectionNote}>Every message read and replied to personally</div>
                  </div>

                  <div className={styles.detailsDivider} />

                  <div className={styles.detailsSection}>
                    <div className={styles.detailsSectionLabel}>Phone</div>
                    <div className={styles.detailsValue}>By appointment only</div>
                    <div className={styles.detailsSectionNote}>We do not operate a public line — book a call through the form above</div>
                  </div>

                  <div className={styles.detailsDivider} />

                  <div className={styles.detailsSection}>
                    <div className={styles.detailsSectionLabel}>Location</div>
                    <div className={styles.detailsValue}>Canada</div>
                    <div className={styles.detailsSectionNote}>Remote and in-person across Canada. Partnership meetings can be arranged where possible.</div>
                  </div>

                  <div className={styles.detailsDivider} />

                  <div className={styles.detailsTrustNote}>
                    <div className={styles.detailsTrustNoteBar} />
                    <p className={styles.detailsTrustNoteText}>
                      Every message reaches a real person on our team. We do not use automated responses for enquiries. If you have reached out, someone will read it and reply.
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick links */}
              <div className={styles.quickLinks}>
                <div className={styles.quickLinksLabel}>Helpful pages</div>
                <Link href="/about/faq" className={styles.quickLink}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
                  FAQ — Common questions answered
                </Link>
                <Link href="/community/request-demo" className={styles.quickLink}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
                  Request a Demo — for organisations and professionals
                </Link>
                <Link href="/about/compliance" className={styles.quickLink}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                  Compliance — our scope and professional boundaries
                </Link>
                <Link href="/professionals/for-scholars" className={styles.quickLink}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>
                  For Scholars — join our review network
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
