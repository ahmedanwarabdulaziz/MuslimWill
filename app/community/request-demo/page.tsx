'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import styles from './page.module.css';

export default function RequestDemoPage() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    
    // Map form fields to what route.ts expects for partnership
    const payload = {
      type: 'partnership',
      organizationName: data.organizationName,
      contactName: data.contactName,
      role: data.role,
      email: data.email,
      phone: data.phone || 'Not provided',
      orgType: data.orgType,
      interestType: data.interest, // Mapping 'interest' from form to 'interestType'
      message: data.referral ? `Referral: ${data.referral}` : 'No additional message',
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const result = await res.json();
        throw new Error(result.error || 'Failed to submit form');
      }

      setStatus('success');
      (e.target as HTMLFormElement).reset();
    } catch (err: any) {
      console.error('Demo request error:', err);
      setStatus('error');
      setErrorMessage(err.message || 'An unexpected error occurred. Please try again.');
    }
  };

  return (
    <div className={styles.main}>

      {/* ── HERO ── */}
      <section className={styles.heroSection}>
        <div className={styles.heroOverlay} />
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.heroEyebrow}>Partner With Us</div>
            <h1 className={styles.heroH1}>
              Let&apos;s talk about what we can build for your community.
            </h1>
            <p className={styles.heroSub}>
              Every partnership is shaped around the organisation, its community, and its goals. The best place to start is a conversation — tell us who you are and what you are trying to do, and we will come prepared.
            </p>
          </div>
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <section className={styles.mainSection}>
        <div className={styles.container}>
          <div className={styles.pageLayout}>

            {/* ── LEFT: Process + Explore ── */}
            <div className={styles.leftCol}>

              {/* Process steps */}
              <div className={styles.processBlock}>
                <h2 className={styles.processH2}>A real conversation. No sales pressure.</h2>

                <div className={styles.processSteps}>
                  <div className={styles.processStep}>
                    <div className={styles.processStepNum}>1</div>
                    <div className={styles.processStepBody}>
                      <div className={styles.processStepTitle}>Tell us about yourself</div>
                      <div className={styles.processStepDesc}>
                        Fill in the short form — your name, your organisation, and what you are interested in. Takes less than two minutes.
                      </div>
                    </div>
                  </div>

                  <div className={styles.processConnector} />

                  <div className={styles.processStep}>
                    <div className={styles.processStepNum}>2</div>
                    <div className={styles.processStepBody}>
                      <div className={styles.processStepTitle}>We will be in touch within one business day</div>
                      <div className={styles.processStepDesc}>
                        Our partnerships team reviews every request personally. We will reach out to schedule a time that works — a call, a video walkthrough, or a visit if you are in the area.
                      </div>
                    </div>
                  </div>

                  <div className={styles.processConnector} />

                  <div className={styles.processStep}>
                    <div className={styles.processStepNum}>3</div>
                    <div className={styles.processStepBody}>
                      <div className={styles.processStepTitle}>We come prepared</div>
                      <div className={styles.processStepDesc}>
                        We will already know who you are and what you do. The conversation will be specific to your organisation — not a generic product pitch.
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Trust note */}
              <div className={styles.trustNote}>
                <div className={styles.trustNoteIcon}>🤝</div>
                <p>
                  The Muslim Will is built on community trust. Every conversation with our partnerships team is private, pressure-free, and genuinely aimed at finding what works for your organisation and the people you serve.
                </p>
              </div>

              {/* Explore links */}
              <div className={styles.exploreBlock}>
                <div className={styles.exploreLabel}>Not ready for a demo? Explore at your own pace</div>
                <div className={styles.exploreLinks}>
                  <Link href="/community/charity-partnership" className={styles.exploreLink}>
                    <div className={styles.exploreLinkTitle}>Charity Partnership</div>
                    <div className={styles.exploreLinkDesc}>Co-branded will planning for charities and nonprofits</div>
                    <span className={styles.exploreLinkArrow}>→</span>
                  </Link>
                  <Link href="/community/mosque-ambassador" className={styles.exploreLink}>
                    <div className={styles.exploreLinkTitle}>Mosque Ambassador Programme</div>
                    <div className={styles.exploreLinkDesc}>Community partnership for masjids and Islamic centres</div>
                    <span className={styles.exploreLinkArrow}>→</span>
                  </Link>
                  <Link href="/community/sponsored-seats" className={styles.exploreLink}>
                    <div className={styles.exploreLinkTitle}>Sponsored Seats</div>
                    <div className={styles.exploreLinkDesc}>Fund will preparation for families who need it</div>
                    <span className={styles.exploreLinkArrow}>→</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* ── RIGHT: Form ── */}
            <div className={styles.formCol}>
              <div className={styles.formCard}>

                {status === 'success' ? (
                  <div className={styles.successState}>
                    <div className={styles.successIcon}>✓</div>
                    <h3 className={styles.successTitle}>Request received</h3>
                    <p className={styles.successBody}>
                      Thank you — a member of our partnerships team will be in touch within one business day. We look forward to the conversation.
                    </p>
                    <button
                      onClick={() => setStatus('idle')}
                      className={styles.successReset}
                    >
                      Submit another request
                    </button>
                  </div>
                ) : (
                  <>
                    <div className={styles.formCardHeader}>
                      <h2 className={styles.formCardTitle}>Request a Demo</h2>
                      <p className={styles.formCardSub}>We read every message personally. You will hear from us within one business day.</p>
                    </div>

                    {status === 'error' && (
                      <div className={styles.errorBanner}>
                        {errorMessage || 'Something went wrong. Please try again.'}
                      </div>
                    )}

                    <form onSubmit={handleSubmit} className={styles.form}>

                      <div className={styles.formRow}>
                        <div className={styles.field}>
                          <label className={styles.label} htmlFor="contactName">Your name *</label>
                          <input required type="text" id="contactName" name="contactName" className={styles.input} />
                        </div>
                        <div className={styles.field}>
                          <label className={styles.label} htmlFor="role">Your role / title *</label>
                          <input required type="text" id="role" name="role" className={styles.input} />
                        </div>
                      </div>

                      <div className={styles.field}>
                        <label className={styles.label} htmlFor="organizationName">Organisation name *</label>
                        <input required type="text" id="organizationName" name="organizationName" className={styles.input} />
                      </div>

                      <div className={styles.formRow}>
                        <div className={styles.field}>
                          <label className={styles.label} htmlFor="email">Email address *</label>
                          <input required type="email" id="email" name="email" className={styles.input} />
                        </div>
                        <div className={styles.field}>
                          <label className={styles.label} htmlFor="phone">Phone (optional)</label>
                          <input type="tel" id="phone" name="phone" className={styles.input} />
                        </div>
                      </div>

                      <div className={styles.field}>
                        <label className={styles.label} htmlFor="orgType">What best describes your organisation? *</label>
                        <select required id="orgType" name="orgType" className={styles.select}>
                          <option value="">Select one</option>
                          <option value="Islamic charity or nonprofit">Islamic charity or nonprofit</option>
                          <option value="Masjid or Islamic centre">Masjid or Islamic centre</option>
                          <option value="Financial advisor or estate planner">Financial advisor or estate planner</option>
                          <option value="Law firm or paralegal practice">Law firm or paralegal practice</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>

                      <div className={styles.field}>
                        <label className={styles.label} htmlFor="interest">What are you most interested in? *</label>
                        <textarea
                          required
                          id="interest"
                          name="interest"
                          className={styles.textarea}
                          rows={3}
                          placeholder="e.g. co-branded partnership, sponsored seats, referral programme..."
                        />
                      </div>

                      <div className={styles.field}>
                        <label className={styles.label} htmlFor="referral">How did you hear about us? (optional)</label>
                        <input type="text" id="referral" name="referral" className={styles.input} />
                      </div>

                      {/* Honeypot */}
                      <input type="text" name="_gotcha" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

                      <button
                        type="submit"
                        disabled={status === 'submitting'}
                        className={styles.submitBtn}
                      >
                        {status === 'submitting' ? 'Sending...' : 'Request a Demo →'}
                      </button>

                      <p className={styles.formNote}>
                        We read every message personally. You will hear from us within one business day.
                      </p>
                    </form>
                  </>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
