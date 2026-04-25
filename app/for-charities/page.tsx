import React from 'react';
import type { Metadata } from 'next';
import sharedStyles from '../page.module.css';
import styles from './charities.module.css';
import { TrackedButton } from '@/components/analytics/TrackedButton';

export const metadata: Metadata = {
  title: 'For Charities And Partnerships | Muslim Will',
  description: 'See how Muslim Will can work with charities and community organizations to support responsible legacy giving without transferring legal responsibility.',
};

export default function ForCharitiesPage() {
  return (
    <main>
      {/* 1. Hero Section (Patriva Style) */}
      <section className={`${sharedStyles.section} ${sharedStyles.heroSection}`}>
        <div className={`${sharedStyles.container} ${sharedStyles.heroContent}`}>
          <div className={sharedStyles.heroTextWrapper}>
             <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '0.5rem', marginBottom: '1rem' }}>
               <div className={`${sharedStyles.heroEyebrow} ${sharedStyles.fadeUp}`} style={{ marginBottom: 0 }}>
                 B2B &amp; Partnerships
               </div>
             </div>
             
             <h1 className={`${sharedStyles.heroH1} ${sharedStyles.fadeUp} ${sharedStyles.delay1}`}>
               A responsible pathway for charities to support legacy giving.
             </h1>
             
             <p className={`${sharedStyles.heroCopy} ${sharedStyles.fadeUp} ${sharedStyles.delay2}`}>
               See how Muslim Will can work with charities and community organizations to support responsible legacy giving without transferring legal responsibility or forcing you into the awkward position of drafting legal documents.
             </p>
             
             <div className={`${sharedStyles.heroActions} ${sharedStyles.fadeUp} ${sharedStyles.delay3}`} style={{ marginBottom: '1.5rem' }}>
               <TrackedButton variant="primary" size="lg" href="/contact" eventName="request_partnership_hero_click" eventParams={{ location: 'for_charities' }}>Request Partnership Info</TrackedButton>
             </div>
          </div>
        </div>
      </section>

      {/* 2. The Opportunity vs The Problem (Split Pane) */}
      <section className={`${sharedStyles.section} ${sharedStyles.sectionLight}`}>
        <div className={sharedStyles.container}>
          <div className={sharedStyles.sectionHeader} style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 className={sharedStyles.sectionH2} style={{ textAlign: 'center' }}>The Legacy Giving Bottleneck.</h2>
            <p className={sharedStyles.sectionIntro} style={{ textAlign: 'center' }}>
              We know why legacy giving is difficult for organizations to capture. The intention is there, but the execution hits a wall.
            </p>
          </div>

          <div className={styles.splitPane}>
            <div className={`${styles.paneHalf} ${styles.glossyGreenCard}`} style={{ padding: '3rem', border: 'none' }}>
              <h3 className={styles.paneTitle}>The Opportunity</h3>
              <p className={styles.paneText}>
                <strong>The 1/3 Wasiyyah.</strong>
                <br/>
                Islamic tradition allows for up to one-third of an estate to be bequeathed to charity as Sadaqah Jariyah. Donors and community members deeply want to support their local Masajid and international relief organizations. The capital exists and the intention is pure.
              </p>
            </div>

            <div className={`${styles.paneHalf} ${styles.warningPane}`}>
              <h3 className={styles.paneTitle}>The Bottleneck</h3>
              <p className={styles.paneText}>
                <strong>The Execution Gap.</strong>
                <br/>
                Charities cannot act as law firms. You cannot legally draft wills for your donors without incurring tremendous liability and conflict of interest. Because donors often lack a formal, legally enforceable will, their charitable intentions (the Wasiyyah) die with them, lost in provincial intestacy laws.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. The Solution Matrix (Policy Grid) */}
      <section className={sharedStyles.section}>
        <div className={sharedStyles.container}>
          <div className={sharedStyles.sectionHeader}>
            <h2 className={sharedStyles.sectionH2}>How the partnership model works.</h2>
            <p className={sharedStyles.sectionIntro}>
              We bridge the gap. We provide the structured software-to-lawyer pipeline so you can safely encourage legacy giving without taking on legal liability.
            </p>
          </div>

          <div className={styles.policyGrid}>
            <div className={styles.policyItem}>
              <h3 className={styles.policyTitle}>What We Provide</h3>
              <p className={styles.policyIntro}>A co-branded pathway or referral architecture where your donors are guided through a legally secure workflow, explicitly presented with the option to allocate their 1/3 Wasiyyah toward your specific organization.</p>
            </div>
            
            <div className={styles.policyItem}>
              <h3 className={styles.policyTitle}>What You Don't Do</h3>
              <p className={styles.policyIntro}>Your organization takes on precisely zero legal liability. You do not draft documents, you do not distribute tax advice, and you do not evaluate family disputes. You simply provide the pathway; the platform and our independent legal workflow do the rest.</p>
            </div>

            <div className={styles.policyItem}>
              <h3 className={styles.policyTitle}>The Partnership Benefit</h3>
              <p className={styles.policyIntro}>You unlock long-term, structural funding via planned giving. We provide the operational infrastructure, educational support, and organizational landing pages to make the donor experience seamless and legally sound under Ontario law.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Educational & Community Support */}
      <section className={`${sharedStyles.section} ${sharedStyles.sectionLight}`} style={{ paddingTop: 0 }}>
        <div className={sharedStyles.container}>
          <div className={styles.execBlock}>
            <div className={styles.execContent}>
              <h3>Educational &amp; Speaking Support</h3>
              <p>
                Legacy marketing cannot be robotic. It requires trust, empathy, and deep community understanding. 
                Our Executive Adviser, <strong>Dr. Yasser Aboutaha</strong>, brings over 15 years of direct experience in Masjid fundraising, community leadership, and public speaking. We don't just provide a software link—we actively support your organization through tailored educational sessions, Jumaa lectures, and community workshops to humanize the importance of estate planning.
              </p>
            </div>
            <div style={{ flexShrink: 0, marginTop: '1.5rem', alignSelf: 'flex-start' }}>
              <TrackedButton variant="outline" size="md" href="/about/dr-yasser-aboutaha" eventName="view_yasser_bio_click" eventParams={{ location: 'for_charities' }}>
                View Dr. Yasser's Bio &rarr;
              </TrackedButton>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Final CTA */}
      <section className={`${sharedStyles.section} ${sharedStyles.sectionDark}`} style={{ padding: '6rem 0' }}>
        <div className={sharedStyles.container}>
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ fontSize: '3rem', fontFamily: 'var(--font-heading)', color: 'var(--color-gold)', marginBottom: '1.5rem', lineHeight: '1.1', fontWeight: 700 }}>
              Partner with clarity.
            </h2>
            <p style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.9)', marginBottom: '3rem', lineHeight: '1.6' }}>
              Protect your community's intentions and build long-term legacy funding without inheriting legal risk.
            </p>
            <div className={sharedStyles.ctaButtonGroup} style={{ justifyContent: 'center' }}>
               <TrackedButton variant="primary" size="lg" href="/contact" eventName="request_partnership_footer_click" eventParams={{ location: 'for_charities' }}>Request Partnership Info</TrackedButton>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
