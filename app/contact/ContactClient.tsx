'use client';

import React, { useState } from 'react';
import sharedStyles from '../page.module.css';
import styles from './contact.module.css';
import { TrackedButton } from '@/components/analytics/TrackedButton';
import { InquiryForm } from '@/components/forms/InquiryForm';

export default function ContactClient() {
  const [showCalendar, setShowCalendar] = useState(false);

  const handleShowCalendar = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowCalendar(true);
    // Use setTimeout to allow the DOM to render the calendar section before scrolling
    setTimeout(() => {
      document.getElementById('book')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <main>
      {/* 1. Patriva Hero Section */}
      <section className={`${sharedStyles.section} ${sharedStyles.heroSection}`}>
        <div className={`${sharedStyles.container} ${sharedStyles.heroContent}`}>
          <div className={sharedStyles.heroTextWrapper}>
             <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '0.5rem', marginBottom: '1rem' }}>
               <div className={`${sharedStyles.heroEyebrow} ${sharedStyles.fadeUp}`} style={{ marginBottom: 0 }}>
                 Contact Us
               </div>
             </div>
             
             <h1 className={`${sharedStyles.heroH1} ${sharedStyles.fadeUp} ${sharedStyles.delay1}`}>
               Choose the clearest next step for your family.
             </h1>
             
             <p className={`${sharedStyles.heroCopy} ${sharedStyles.fadeUp} ${sharedStyles.delay2}`}>
               Book a call with our team or begin the current Ontario-focused legal and Islamic workflow directly.
             </p>
             
             <div className={`${sharedStyles.heroActions} ${sharedStyles.fadeUp} ${sharedStyles.delay3}`}>
               <TrackedButton href="https://app.themuslimwill.com/Account/Login" variant="secondary" size="lg" eventName="start_will_hero_click" eventParams={{ location: 'contact_page' }}>Start Your Will</TrackedButton>
               <TrackedButton variant="outline" size="lg" className={sharedStyles.invertedOutline} onClick={handleShowCalendar} eventName="book_call_hero_click" eventParams={{ location: 'contact_page' }}>Book A Call</TrackedButton>
             </div>
          </div>
        </div>
      </section>

      {/* 2. When to do what (Split Pane) */}
      <section className={sharedStyles.section} style={{ paddingBottom: '3rem' }}>
        <div className={sharedStyles.container}>
          
          <div className={styles.splitPane}>
            {/* The Direct Start Path */}
            <div className={`${styles.paneHalf} ${styles.readyPane}`}>
              <h3 className={styles.paneTitle}>When to start directly</h3>
              <p className={styles.paneText}>
                The Muslim Will platform is engineered to handle the vast majority of standard family structures in Canada. You should start the workflow directly if:
                <br/><br/>
                &bull; You are ready to designate guardians for minor children.<br/>
                &bull; You want to allocate your Wasiyyah (up to 1/3) for charity or non-heirs.<br/>
                &bull; You want the bulk of your estate distributed according to Islamic inheritance mandates.<br/>
                &bull; You are looking for an Ontario-focused document pathway with structured execution support and less friction than a traditional hourly-billing process.
              </p>
              <div style={{ marginBottom: '1.25rem', fontWeight: 500 }}>
                If you are ready to begin, you can start your will today.
              </div>
              <div>
                <TrackedButton href="https://app.themuslimwill.com/Account/Login" variant="secondary" size="md" eventName="start_will_pane_click" eventParams={{ location: 'contact_page' }} style={{ backgroundColor: 'white', color: 'var(--color-navy)' }}>
                  Start Your Will
                </TrackedButton>
              </div>
            </div>

            {/* The Booking Path */}
            <div className={`${styles.paneHalf} ${styles.bookingPane}`}>
              <h3 className={styles.paneTitle}>When to book a call</h3>
              <p className={styles.paneText}>
                While our platform bridges software and legal formalization securely, it is not a substitute for high-conflict legal advice. You should book a call with our professional team if:
                <br/><br/>
                &bull; You need to establish complex domestic or foreign corporate trusts.<br/>
                &bull; You are an organization, charity, or Masjid seeking a partnership arrangement for your community.<br/>
                &bull; You have severe, documented family disputes that require bespoke litigation mapping.<br/>
                &bull; You just need to speak with a human to confirm how our independent Ontario legal review is handled.
              </p>
              <div style={{ marginBottom: '1.25rem', fontWeight: 500 }}>
                If you need reassurance first, book a call with our team.
              </div>
              <div>
                <TrackedButton variant="primary" size="md" onClick={handleShowCalendar} eventName="scroll_to_calendar_click" eventParams={{ location: 'contact_page' }}>
                  View Calendar Below &darr;
                </TrackedButton>
              </div>
            </div>
          </div>

          {/* Trust Note */}
          <div className={styles.trustNote}>
            <strong>Note:</strong> All consultations regarding the platform are strictly informational and do not constitute formal legal advice or religious rulings (Fatwas). If your situation requires active legal counsel prior to drafting, we will refer you appropriately.
          </div>

        </div>
      </section>

      {/* 2.5 Zoom Scheduler Section */}
      {showCalendar && (
        <section className={`${sharedStyles.section} ${sharedStyles.sectionLight}`} id="book" style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
          <div className={sharedStyles.container}>
            <div className={sharedStyles.sectionHeader} style={{ marginBottom: '2rem' }}>
              <h2 className={sharedStyles.sectionH2}>Schedule an Introductory Call</h2>
              <p className={sharedStyles.sectionIntro}>Select a time that works for you to discuss your family&apos;s needs with our team.</p>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
              <div style={{ width: '100%', maxWidth: '800px', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 10px 40px rgba(0,0,0,0.08)', backgroundColor: 'white', border: '1px solid var(--color-border)' }}>
                <iframe 
                  src="https://scheduler.zoom.us/ahmed-gohar/muslim-will-introductory-call-?embed=true" 
                  frameBorder="0" 
                  style={{ width: '100%', height: '650px', border: 'none', display: 'block' }}
                  title="Schedule a Call with Muslim Will"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 2.75 Contact Form Section */}
      <section className={sharedStyles.section} style={{ paddingTop: '4rem', paddingBottom: '2rem' }}>
        <div className={sharedStyles.container}>
          <InquiryForm variant="general" />
        </div>
      </section>

      {/* 3. Direct Contact Details */}
      <section className={sharedStyles.section} style={{ paddingTop: '4rem', paddingBottom: '6rem' }}>
        <div className={sharedStyles.container}>
          <div className={styles.contactBlock}>
            <div className={styles.contactItem}>
              <h4>General Inquiries</h4>
              <a href="mailto:info@themuslimwill.com">info@themuslimwill.com</a>
            </div>
            <div className={styles.contactItem}>
              <h4>Phone</h4>
              <a href="tel:+18774169455">+1-877-416-WILL</a>
            </div>
            <div className={styles.contactItem}>
              <h4>Partnerships & Charities</h4>
              <a href="mailto:partnerships@themuslimwill.com">partnerships@themuslimwill.com</a>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
