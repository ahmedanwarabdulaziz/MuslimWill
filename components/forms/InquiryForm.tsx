'use client';

import React, { useState } from 'react';
import styles from './InquiryForm.module.css';

interface InquiryFormProps {
  variant: 'general' | 'partnership';
}

export function InquiryForm({ variant }: InquiryFormProps) {
  const isGeneral = variant === 'general';
  
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const heading = isGeneral ? 'Send Us A Message' : 'Request Partnership Information';
  const subheading = isGeneral 
    ? 'If you have a question about Muslim Will, our process, pricing, or whether the service fits your situation, send us a message and our team will get back to you.'
    : 'If you represent a charity, masjid, foundation, or community organization and want to explore a partnership with Muslim Will, send your details below and our team will follow up.';
  
  const submitText = isGeneral ? 'Send Message' : 'Request Partnership Info';
  const successText = isGeneral 
    ? 'Your message has been sent. Our team will review it and get back to you soon.'
    : 'Your partnership inquiry has been received. A member of the Muslim Will team will follow up with you soon.';

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');
    
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    data.type = variant;

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const result = await res.json();
        throw new Error(result.error || 'Failed to submit form');
      }

      setStatus('success');
      (e.target as HTMLFormElement).reset();
    } catch (err: any) {
      console.error('Form submission error:', err);
      setStatus('error');
      setErrorMessage(err.message || 'An unexpected error occurred. Please try again.');
    }
  };

  if (status === 'success') {
    return (
      <div className={styles.formWrapper}>
        <div className={`${styles.messageContainer} ${styles.success}`}>
          <h3 style={{ margin: '0 0 0.5rem 0', fontWeight: 600 }}>Success</h3>
          <p style={{ margin: 0 }}>{successText}</p>
        </div>
        <button onClick={() => setStatus('idle')} className={styles.submitBtn} style={{ marginTop: '1rem', width: 'auto', padding: '0.5rem 1rem', fontSize: '1rem' }}>
          Send another message
        </button>
      </div>
    );
  }

  return (
    <div className={styles.formWrapper}>
      <h2 className={styles.heading}>{heading}</h2>
      <p className={styles.subheading}>{subheading}</p>

      {status === 'error' && (
        <div className={`${styles.messageContainer} ${styles.error}`}>
          <p style={{ margin: 0 }}>{errorMessage}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className={styles.fieldGroup}>
        {isGeneral ? (
          <>
            <div className={styles.field}>
              <label className={styles.label} htmlFor="fullName">Full name *</label>
              <input required type="text" id="fullName" name="fullName" className={styles.input} />
            </div>
            <div className={styles.row}>
              <div className={styles.field}>
                <label className={styles.label} htmlFor="email">Email address *</label>
                <input required type="email" id="email" name="email" className={styles.input} />
              </div>
              <div className={styles.field}>
                <label className={styles.label} htmlFor="phone">Phone number *</label>
                <input required type="tel" id="phone" name="phone" className={styles.input} />
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.field}>
                <label className={styles.label} htmlFor="province">Province / region *</label>
                <input required type="text" id="province" name="province" className={styles.input} />
              </div>
              <div className={styles.field}>
                <label className={styles.label} htmlFor="country">Country *</label>
                <input required type="text" id="country" name="country" className={styles.input} defaultValue="Canada" />
              </div>
            </div>
            <div className={styles.field}>
              <label className={styles.label} htmlFor="reason">Reason for contact *</label>
              <select required id="reason" name="reason" className={styles.select}>
                <option value="">Select a reason</option>
                <option value="General question">General question</option>
                <option value="Pricing question">Pricing question</option>
                <option value="Process question">Process question</option>
                <option value="Legal / jurisdiction question">Legal / jurisdiction question</option>
                <option value="Charity / bequest question">Charity / bequest question</option>
                <option value="Technical issue">Technical issue</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </>
        ) : (
          <>
            <div className={styles.field}>
              <label className={styles.label} htmlFor="organizationName">Organization name *</label>
              <input required type="text" id="organizationName" name="organizationName" className={styles.input} />
            </div>
            <div className={styles.row}>
              <div className={styles.field}>
                <label className={styles.label} htmlFor="contactName">Contact person full name *</label>
                <input required type="text" id="contactName" name="contactName" className={styles.input} />
              </div>
              <div className={styles.field}>
                <label className={styles.label} htmlFor="role">Role / title *</label>
                <input required type="text" id="role" name="role" className={styles.input} />
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.field}>
                <label className={styles.label} htmlFor="email">Email address *</label>
                <input required type="email" id="email" name="email" className={styles.input} />
              </div>
              <div className={styles.field}>
                <label className={styles.label} htmlFor="phone">Phone number *</label>
                <input required type="tel" id="phone" name="phone" className={styles.input} />
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.field}>
                <label className={styles.label} htmlFor="orgType">Organization type *</label>
                <select required id="orgType" name="orgType" className={styles.select}>
                  <option value="">Select type</option>
                  <option value="Charity">Charity</option>
                  <option value="Masjid">Masjid</option>
                  <option value="Foundation">Foundation</option>
                  <option value="Community organization">Community organization</option>
                  <option value="School / institute">School / institute</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className={styles.field}>
                <label className={styles.label} htmlFor="website">Website (optional)</label>
                <input type="url" id="website" name="website" className={styles.input} placeholder="https://" />
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.field}>
                <label className={styles.label} htmlFor="location">City / province / country *</label>
                <input required type="text" id="location" name="location" className={styles.input} />
              </div>
              <div className={styles.field}>
                <label className={styles.label} htmlFor="audienceSize">Estimated audience size *</label>
                <input required type="text" id="audienceSize" name="audienceSize" className={styles.input} />
              </div>
            </div>
            <div className={styles.field}>
              <label className={styles.label} htmlFor="interestType">Partnership interest type *</label>
              <select required id="interestType" name="interestType" className={styles.select}>
                <option value="">Select interest type</option>
                <option value="Legacy giving partnership">Legacy giving partnership</option>
                <option value="Co-branded referral path">Co-branded referral path</option>
                <option value="Community education session">Community education session</option>
                <option value="Jumaa / workshop inquiry">Jumaa / workshop inquiry</option>
                <option value="Strategic partnership">Strategic partnership</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </>
        )}

        <div className={styles.field}>
          <label className={styles.label} htmlFor="message">Message *</label>
          <textarea required id="message" name="message" className={styles.textarea}></textarea>
        </div>
        
        {/* Honeypot field for spam prevention */}
        <input type="text" name="_gotcha" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

        <button type="submit" disabled={status === 'submitting'} className={styles.submitBtn}>
          {status === 'submitting' ? 'Sending...' : submitText}
        </button>

        <p className={styles.privacyText}>
          We use your information only to respond to your inquiry and coordinate next steps.
        </p>
      </form>
    </div>
  );
}
