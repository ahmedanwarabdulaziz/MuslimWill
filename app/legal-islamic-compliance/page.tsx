import React from 'react';
import type { Metadata } from 'next';
import sharedStyles from '../page.module.css';
import styles from './compliance.module.css';
import { TrackedButton } from '@/components/analytics/TrackedButton';

export const metadata: Metadata = {
  title: 'Legal And Islamic Compliance | Muslim Will Canada',
  description: 'Understand how Muslim Will separates platform workflow, Islamic inheritance structure, and independent legal review within a Canada-first process.',
  openGraph: {
    title: 'Legal And Islamic Compliance | Clear Professional Boundaries',
    description: 'Understand how Muslim Will separates platform workflow, Islamic inheritance structure, and independent legal review within a Canada-first process.',
  }
};

export default function LegalCompliancePage() {
  return (
    <main>
      {/* 1. Hero Section (Patriva Style) */}
      <section className={`${sharedStyles.section} ${sharedStyles.heroSection}`}>
        <div className={`${sharedStyles.container} ${sharedStyles.heroContent}`}>
          <div className={sharedStyles.heroTextWrapper}>
             <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '0.5rem', marginBottom: '1rem' }}>
               <div className={`${sharedStyles.heroEyebrow} ${sharedStyles.fadeUp}`} style={{ marginBottom: 0 }}>
                 Trust &amp; Boundaries
               </div>
             </div>
             
             <h1 className={`${sharedStyles.heroH1} ${sharedStyles.fadeUp} ${sharedStyles.delay1}`}>
               A platform with clear professional boundaries.
             </h1>
             
             <p className={`${sharedStyles.heroCopy} ${sharedStyles.fadeUp} ${sharedStyles.delay2}`}>
               Understand how Muslim Will separates platform workflow, Islamic inheritance structure, and independent legal review within a Canada-first process.
             </p>
             
             <div className={`${sharedStyles.heroActions} ${sharedStyles.fadeUp} ${sharedStyles.delay3}`} style={{ marginBottom: '1.5rem' }}>
               <TrackedButton variant="primary" size="lg" eventName="start_will_hero_click" eventParams={{ location: 'compliance' }}>Start Your Will</TrackedButton>
             </div>
          </div>
        </div>
      </section>

      {/* 2. Boundary Matrix (Policy Pillars) */}
      <section className={sharedStyles.section}>
        <div className={sharedStyles.container}>
          <div className={sharedStyles.sectionHeader}>
            <h2 className={sharedStyles.sectionH2}>Why boundary separation matters.</h2>
            <p className={sharedStyles.sectionIntro}>
              Software cannot replace a scholar. A scholar cannot replace a lawyer. And a lawyer should not have to manually build software workflows. We protect families by ensuring each layer operates precisely within its mandate.
            </p>
          </div>

          <div className={styles.policyGrid}>
            <div className={styles.policyItem}>
              <h3 className={styles.policyTitle}>1. The Platform Role</h3>
              <p className={styles.policyIntro}>Muslim Will acts as the foundational technology engine. It parses user intent, organizes secure intake data, guides users through complex decisions (like the 1/3 Charity Rule), and coordinates scheduling. It prepares the data so that it is ready for professional evaluation.</p>
            </div>
            
            <div className={styles.policyItem}>
              <h3 className={styles.policyTitle}>2. Islamic Inheritance Structure</h3>
              <p className={styles.policyIntro}>Your primary inheritance breakdown is governed by specific Islamic mandates. The platform utilizes logic reviewed by qualified Islamic scholars to ensure your standard inheritance structures conform to general Shariah inheritance considerations, protecting your faith-based requirements.</p>
            </div>

            <div className={styles.policyItem}>
              <h3 className={styles.policyTitle}>3. Independent Legal Workflow</h3>
              <p className={styles.policyIntro}>A will is only useful if a Canadian court will enforce it. Muslim Will utilizes an independent Ontario legal workflow. Your documents are legally evaluated, and the final attestation and witnessing are hosted remotely by a qualified, practicing legal professional or licensee.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. What We Are NOT (Split Pane) */}
      <section className={`${sharedStyles.section} ${sharedStyles.sectionLight}`}>
        <div className={sharedStyles.container}>
          <div className={sharedStyles.sectionHeader} style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 className={sharedStyles.sectionH2} style={{ textAlign: 'center' }}>Clarity over confusion.</h2>
            <p className={sharedStyles.sectionIntro} style={{ textAlign: 'center' }}>
              We are deliberately transparent about what this platform is built to do, and equally transparent about what it will never attempt to do.
            </p>
          </div>

          <div className={styles.splitPane}>
            <div className={`${styles.paneHalf} ${styles.warningPane}`}>
              <h3 className={styles.paneTitle}>What Muslim Will is NOT</h3>
              <p className={styles.paneText}>
                <strong>Not a Law Firm:</strong> Muslim Will does not provide direct legal advice. We provide the workflow infrastructure that connects you with independent legal execution.
                <br/><br/>
                <strong>No Personal Fatwas:</strong> If your estate involves extreme complexity, undocumented foreign businesses, or severe family disputes, the platform’s standard structure may not suffice. You should seek specialized legal counsel and a dedicated organizational fatwa.
                <br/><br/>
                <strong>No Tax Advice:</strong> We do not provide accounting or tax optimization strategies.
              </p>
            </div>
            <div className={`${styles.paneHalf} ${styles.glossyGreenCard}`} style={{ padding: '3rem', border: 'none' }}>
              <h3 className={styles.paneTitle}>What Muslim Will IS</h3>
              <p className={styles.paneText}>
                <strong>A Comprehensive Pathway:</strong> We are a streamlined, highly-secure process designed to take the friction out of creating a legally sound, Islamically conscious will.
                <br/><br/>
                <strong>Faith-Conscious Integration:</strong> We ensure that your deeply held religious convictions regarding guardianship, inheritance, and Sadaqah Jariyah are structurally integrated into your legal documents.
                <br/><br/>
                <strong>Legally Executed:</strong> By bridging the gap to a formal Ontario legal workflow, we ensure you don’t just get a template—you get a fully executed, witnessed, and reliable Canadian document.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Ontario Legal Anchor */}
      <section className={`${sharedStyles.section} ${sharedStyles.sectionLight}`} style={{ paddingTop: 0 }}>
        <div className={sharedStyles.container}>
          <div className={styles.anchorBox}>
            <h3>The Ontario Legal Anchor</h3>
            <p>
              In Canada, succession and substitute decision-making laws are governed provincially, not federally. An enduring Power of Attorney in one province has different statutory requirements than in another. 
            </p>
            <p style={{ margin: 0 }}>
              To guarantee the highest level of legal enforceability, <strong>Muslim Will's legal workflow is currently anchored specifically to the Province of Ontario</strong> (under the Succession Law Reform Act and the Substitute Decisions Act). We do not provide documents for jurisdictions where our independent legal workflow cannot actively support the final execution.
            </p>
          </div>
        </div>
      </section>

      {/* 5. Final CTA */}
      <section className={`${sharedStyles.section} ${sharedStyles.sectionDark}`} style={{ padding: '6rem 0' }}>
        <div className={sharedStyles.container}>
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ fontSize: '3rem', fontFamily: 'var(--font-heading)', color: 'var(--color-gold)', marginBottom: '1.5rem', lineHeight: '1.1', fontWeight: 700 }}>
              Establish your legacy.
            </h2>
            <p style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.9)', marginBottom: '3rem', lineHeight: '1.6' }}>
              Protect your family, document your charitable intentions, and move forward with greater clarity.
            </p>
            <div className={sharedStyles.ctaButtonGroup} style={{ justifyContent: 'center' }}>
              <TrackedButton variant="primary" size="lg" eventName="start_will_footer_click" eventParams={{ location: 'compliance' }}>Start Your Will</TrackedButton>
              <TrackedButton variant="outline" size="lg" className={sharedStyles.invertedOutline} href="/pricing" eventName="view_pricing_footer_click" eventParams={{ location: 'compliance' }}>View Pricing</TrackedButton>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
