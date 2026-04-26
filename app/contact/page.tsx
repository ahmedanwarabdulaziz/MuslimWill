import React from 'react';
import type { Metadata } from 'next';
import sharedStyles from '../page.module.css';
import styles from './contact.module.css';
import { TrackedButton } from '@/components/analytics/TrackedButton';

export const metadata: Metadata = {
  title: 'Contact Muslim Will | Book A Call',
  description: 'Book a call with Muslim Will or start your will through a guided pathway designed for Muslim families in Canada.',
};

export default function ContactPage() {
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
               Book a call with our team or begin your state-specific legal and Islamic workflow directly.
             </p>
             
             <div className={`${sharedStyles.heroActions} ${sharedStyles.fadeUp} ${sharedStyles.delay3}`}>
               <TrackedButton variant="primary" size="lg" eventName="start_will_hero_click" eventParams={{ location: 'contact_page' }}>Start Your Will</TrackedButton>
               <TrackedButton variant="outline" size="lg" className={sharedStyles.invertedOutline} href="#book" eventName="book_call_hero_click" eventParams={{ location: 'contact_page' }}>Book A Call</TrackedButton>
             </div>
          </div>
        </div>
      </section>

      {/* 2. When to do what (Split Pane) */}
      <section className={sharedStyles.section}>
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
                &bull; You are looking for a complete, legally executed Ontario document without the friction of hourly law firm billing.
              </p>
              <div style={{ marginBottom: '1.25rem', fontWeight: 500 }}>
                If you are ready to begin, you can start your will today.
              </div>
              <div>
                <TrackedButton variant="primary" size="md" eventName="start_will_pane_click" eventParams={{ location: 'contact_page' }} style={{ backgroundColor: 'white', color: 'var(--color-green)' }}>
                  Start Your Will
                </TrackedButton>
              </div>
            </div>

            {/* The Booking Path */}
            <div className={`${styles.paneHalf} ${styles.bookingPane}`} id="book">
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
                <TrackedButton variant="primary" size="md" eventName="book_call_pane_click" eventParams={{ location: 'contact_page' }}>
                  Book a Call
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

      {/* 3. Direct Contact Details */}
      <section className={`${sharedStyles.section} ${sharedStyles.sectionLight}`} style={{ paddingTop: 0 }}>
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
