import React from 'react';
import type { Metadata } from 'next';
import sharedStyles from '../page.module.css';
import styles from './about.module.css';
import { TrackedButton } from '@/components/analytics/TrackedButton';

export const metadata: Metadata = {
  title: 'About Muslim Will | Islamic Will Planning In Canada',
  description: 'Learn why Muslim Will was built, who it serves, and how its Canada-first platform brings legal structure, Islamic inheritance awareness, and family clarity together.',
  openGraph: {
    title: 'About Muslim Will | Our Mission and Origin',
    description: 'Learn why Muslim Will was built, who it serves, and how its Canada-first platform brings legal structure, Islamic inheritance awareness, and family clarity together.',
  }
};

export default function AboutPage() {
  return (
    <main>
      {/* 1. Hero Section (Patriva Style) */}
      <section className={`${sharedStyles.section} ${sharedStyles.heroSection}`}>
        <div className={`${sharedStyles.container} ${sharedStyles.heroContent}`}>
          <div className={sharedStyles.heroTextWrapper}>
             <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '0.5rem', marginBottom: '1rem' }}>
               <div className={`${sharedStyles.heroEyebrow} ${sharedStyles.fadeUp}`} style={{ marginBottom: 0 }}>
                 Our Mission
               </div>
             </div>
             
             <h1 className={`${sharedStyles.heroH1} ${sharedStyles.fadeUp} ${sharedStyles.delay1}`}>
               Built to close a gap Muslim families should not have to navigate alone.
             </h1>
             
             <p className={`${sharedStyles.heroCopy} ${sharedStyles.fadeUp} ${sharedStyles.delay2}`}>
               For decades, Muslim families in Canada have been forced to choose: use a standard template that ignores Islamic inheritance, or pay exorbitant hourly legal fees to draft a custom solution. Muslim Will was built to bridge this disconnect securely and professionally.
             </p>
             
             <div className={`${sharedStyles.heroActions} ${sharedStyles.fadeUp} ${sharedStyles.delay3}`} style={{ marginBottom: '1.5rem' }}>
               <TrackedButton variant="primary" size="lg" eventName="start_will_hero_click" eventParams={{ location: 'about' }}>Start Your Will</TrackedButton>
               <TrackedButton variant="outline" size="lg" className={sharedStyles.invertedOutline} href="/charitable-legacy" eventName="view_charity_hero_click" eventParams={{ location: 'about' }}>The 1/3 Rule</TrackedButton>
             </div>
          </div>
        </div>
      </section>

      {/* 2. The Solution Framework (Policy Pillars) */}
      <section className={sharedStyles.section}>
        <div className={sharedStyles.container}>
          <div className={sharedStyles.sectionHeader}>
            <h2 className={sharedStyles.sectionH2}>A platform designed with clear professional boundaries.</h2>
            <p className={sharedStyles.sectionIntro}>
              We believe families are best served when technology, Islamic scholarship, and legal professionals execute their intended roles without overstepping. Our process separates these layers cleanly.
            </p>
          </div>

          <div className={styles.policyGrid}>
            <div className={styles.policyItem}>
              <h3 className={styles.policyTitle}>The Technology Platform</h3>
              <p className={styles.policyIntro}>Muslim Will acts as the foundational workflow. It guides families through secure intake, coordinates communication, simplifies document preparation scheduling, and maintains complete process clarity.</p>
            </div>
            
            <div className={styles.policyItem}>
              <h3 className={styles.policyTitle}>Qualified Scholar Review</h3>
              <p className={styles.policyIntro}>Your inheritance structure is reviewed by qualified Islamic scholars for inheritance considerations. This provides necessary faith-conscious oversight before documents are ever finalized.</p>
            </div>

            <div className={styles.policyItem}>
              <h3 className={styles.policyTitle}>Ontario Legal Workflow</h3>
              <p className={styles.policyIntro}>The legal workflow supports document review and coordinates the execution requirements. You finalize your documents through a guided Zoom session hosted by the required legal professional or licensee.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2.5 The Technology Engine (Patriva) */}
      <section className={`${sharedStyles.section} ${sharedStyles.sectionLight}`} style={{ paddingBottom: 0 }}>
        <div className={sharedStyles.container}>
          <div style={{ background: 'white', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-lg)', padding: '4rem', textAlign: 'center', maxWidth: '900px', margin: '0 auto', boxShadow: '0 10px 30px rgba(0,0,0,0.02)' }}>
            <div style={{ color: 'var(--color-gold)', fontFamily: 'var(--font-heading)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem', fontWeight: 700, fontSize: '0.85rem' }}>The Technology Engine</div>
            <h3 style={{ fontSize: '2.25rem', fontFamily: 'var(--font-heading)', color: 'var(--color-green)', marginBottom: '1.5rem', fontWeight: 700 }}>Powered by Patriva</h3>
            <p style={{ fontSize: '1.1rem', color: 'var(--color-text-main)', lineHeight: '1.6', margin: '0 auto', maxWidth: '700px' }}>
              Muslim Will is powered by <strong>Patriva</strong>, a structured document generation and workflow platform. Patriva builds systems that sit at the intersection of software architecture and regulated real-world processes. It handles the secure intake, logic structuring, and document engineering so that legal professionals and Islamic scholars can focus purely on review and execution without system friction.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Meet the Team */}
      <section className={`${sharedStyles.section} ${sharedStyles.sectionLight}`}>
        <div className={sharedStyles.container}>
          <div className={sharedStyles.sectionHeader} style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <h2 className={sharedStyles.sectionH2}>Leadership and Islamic Advisory</h2>
            <p className={sharedStyles.sectionIntro} style={{ textAlign: 'center' }}>
              Muslim Will functions securely because of the distinct expertise anchoring the technology and the religious guidance evaluating the structures.
            </p>
          </div>

          <div className={styles.teamGrid}>
            {/* Ahmed Gohar */}
            <div className={styles.teamCard}>
              <div className={styles.teamHeader}>
                <h3 className={styles.teamName}>Ahmed Gohar</h3>
                <div className={styles.teamRole}>Founder and CEO</div>
              </div>
              <p className={styles.teamBioSummary}>
                Ahmed brings extensive expertise in technology, enterprise systems, and operational workflow. He built Muslim Will (and the Patriva platform behind it) to organize, simplify, and secure the estate planning process for the community at scale.
              </p>
              <div className={styles.teamFooter}>
                <TrackedButton variant="outline" size="md" href="/about/ahmed-gohar" eventName="view_bio_gohar_click" eventParams={{ location: 'about' }}>Read Biography</TrackedButton>
              </div>
            </div>

            {/* Dr. Yasser Aboutaha */}
            <div className={styles.teamCard}>
              <div className={styles.teamHeader}>
                <h3 className={styles.teamName}>Dr. Yasser Aboutaha</h3>
                <div className={styles.teamRole}>Executive Adviser</div>
              </div>
              <p className={styles.teamBioSummary}>
                Dr. Yasser is a prominent community leader and Islamic scholar who bridges the gap between Islamic inheritance mandates and the realities Canadian families face. He ensures that Muslim Will serves as a responsible, faith-conscious tool.
              </p>
              <div className={styles.teamFooter}>
                <TrackedButton variant="outline" size="md" href="/about/dr-yasser-aboutaha" eventName="view_bio_aboutaha_click" eventParams={{ location: 'about' }}>Read Biography</TrackedButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Final Massive CTA */}
      <section className={`${sharedStyles.section} ${sharedStyles.sectionDark}`} style={{ padding: '6rem 0' }}>
        <div className={sharedStyles.container}>
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ fontSize: '3rem', fontFamily: 'var(--font-heading)', color: 'var(--color-gold)', marginBottom: '1.5rem', lineHeight: '1.1', fontWeight: 700 }}>
              Built with care so families can plan with confidence.
            </h2>
            <p style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.9)', marginBottom: '1rem', lineHeight: '1.6' }}>
              Muslim Will brings technology, Islamic review, and legal workflow together to help families move forward with clarity.
            </p>
            <div style={{ fontSize: '1.125rem', color: 'rgba(255,255,255,0.8)', marginBottom: '2rem' }}>
              A better process for an important responsibility.
            </div>
            <div className={sharedStyles.ctaButtonGroup} style={{ justifyContent: 'center' }}>
              <TrackedButton variant="primary" size="lg" eventName="start_will_footer_click" eventParams={{ location: 'about' }}>Start Your Will</TrackedButton>
              <TrackedButton variant="outline" size="lg" className={sharedStyles.invertedOutline} href="/pricing" eventName="view_pricing_footer_click" eventParams={{ location: 'about' }}>View Pricing</TrackedButton>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
