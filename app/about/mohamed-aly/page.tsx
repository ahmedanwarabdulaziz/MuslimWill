import React from 'react';
import type { Metadata } from 'next';
import sharedStyles from '../../page.module.css';
import styles from '../landing-bio.module.css';
import { TrackedButton } from '@/components/analytics/TrackedButton';

export const metadata: Metadata = {
  title: 'Mohamed Mahmoud Aly | Chief Financial Officer | Muslim Will',
  description: 'Learn about Mohamed Mahmoud Aly, Chief Financial Officer at Muslim Will, bringing 18+ years of finance and tech leadership to scale Shariah-conscious estate planning.',
};

export default function MohamedAlyPage() {
  return (
    <main style={{ backgroundColor: '#f5f8f6' }}>
      
      {/* 1. Custom Hero Section */}
      <section className={styles.hero} aria-label="Mohamed Mahmoud Aly">
        {/* Note: We use a standard img here to preserve the exact object-position logic from the CSS */}
        <img className={styles.heroPhoto} src="/Images/14.jpeg" alt="Mohamed Mahmoud Aly" />
        
        <div className={styles.heroInner}>
          <div className={`${styles.eyebrow} ${sharedStyles.fadeUp}`}>Chief Financial Officer | Muslim Will</div>
          <h1 className={`${styles.heroTitle} ${sharedStyles.fadeUp} ${sharedStyles.delay1}`} style={{ color: '#ffffff' }}>Mohamed Mahmoud Aly</h1>
          <p className={`${styles.heroLede} ${sharedStyles.fadeUp} ${sharedStyles.delay2}`}>
            A seasoned executive bridging computer science and financial strategy, bringing 18+ years of expertise in corporate finance, M&A, and controllership to scale faith-conscious financial workflows.
          </p>
          <div className={`${styles.heroActions} ${sharedStyles.fadeUp} ${sharedStyles.delay3}`}>
             <TrackedButton href="https://app.themuslimwill.com/Account/Login" variant="secondary" size="lg" eventName="start_will_hero_click" eventParams={{ location: 'mohamed_landing' }} style={{ backgroundColor: 'var(--color-gold)', color: 'var(--color-green)' }}>
                Start Your Will
             </TrackedButton>
             <TrackedButton variant="outline" size="lg" className={sharedStyles.invertedOutline} href="/about" eventName="back_to_leadership" eventParams={{ location: 'mohamed_landing' }}>
                Back to Leadership
             </TrackedButton>
          </div>
          <div className={`${styles.heroFacts} ${sharedStyles.fadeUp} ${sharedStyles.delay4}`} aria-label="Profile highlights">
            <div className={styles.heroFact}>
              <strong>18+ Years Experience</strong>
              <span>Corporate finance & strategic planning</span>
            </div>
            <div className={styles.heroFact}>
              <strong>Dual Expertise</strong>
              <span>Computer Science & MBA in Finance</span>
            </div>
            <div className={styles.heroFact}>
              <strong>Core Strengths</strong>
              <span>M&A, audit, and controllership</span>
            </div>
            <div className={styles.heroFact}>
              <strong>Mission</strong>
              <span>Scaling sustainable faith-conscious workflows</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Split Bio Grid */}
      <section className={sharedStyles.section} id="bio" style={{ background: '#f5f8f6', paddingTop: '6rem' }}>
        <div className={sharedStyles.container}>
          <div className={styles.bioGrid}>
            <div className={styles.bioCopy}>
              <div style={{ marginBottom: '2rem' }}>
                <div className={styles.tag}>Biography</div>
                <h2>Driving financial strategy and governance at the intersection of technology and compliance.</h2>
                <p style={{ fontSize: '1.2rem', color: 'var(--color-text-main)', marginTop: '1rem' }}>
                  Mohamed Mahmoud Aly is a multi-disciplinary finance leader with a unique background that spans software engineering, information technology, and corporate finance. With over 18 years of professional experience, he brings deep expertise in strategic planning, business partnering, management reform, mergers and acquisitions (M&A), audit, and controllership.
                </p>
              </div>

              <p>
                Mohamed holds a Bachelor's degree in Computer Science, which provides him with a foundational understanding of systems architecture, data integrity, and automated workflows. Recognizing the critical importance of financial stewardship in scaling technology platforms, he went on to earn an MBA in Finance. This rare combination allows him to act as a powerful translator between complex software engineering pipelines and rigorous corporate finance structures.
              </p>
              <p>
                Throughout his career, Mohamed has managed diverse financial operations, driving change and reform in organizations undergoing rapid growth or restructuring. His background in audit and controllership ensures that Muslim Will's financial architecture is built on absolute transparency, compliance, and risk mitigation. His strategic vision directs M&A processes, ensuring long-term fiscal health as the platform expands.
              </p>
              <p>
                As the Chief Financial Officer of Muslim Will, Mohamed leads the platform's financial strategy, ensuring that operational growth is matched with robust compliance and cost-effective scaling. His technology background ensures he understands the infrastructure cost-structures of Patriva, enabling him to build sustainable business models that keep Shariah-conscious estate planning accessible to families across North America.
              </p>
            </div>

            <aside className={styles.detailPanel} aria-label="Profile details">
              <div className={styles.detailHead}>
                <h3>Profile at a glance</h3>
                <p>Grounded in corporate finance, technology systems, and strategic management.</p>
              </div>
              <div className={styles.detailList}>
                <div className={styles.detailItem}>
                  <strong>Primary role</strong>
                  <span>Chief Financial Officer at Muslim Will</span>
                </div>
                <div className={styles.detailItem}>
                  <strong>Educational background</strong>
                  <span>Bachelor of Science in Computer Science; Master of Business Administration (MBA) in Finance.</span>
                </div>
                <div className={styles.detailItem}>
                  <strong>Professional background</strong>
                  <span>Over 18 years of experience in corporate finance, auditing, M&A, controllership, and IT management.</span>
                </div>
                <div className={styles.detailItem}>
                  <strong>Core specialization</strong>
                  <span>Strategic planning, business partnering, management reform, financial reporting, and compliance.</span>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* 3. Strengths Grid */}
      <section className={sharedStyles.section} id="strengths" style={{ background: 'white' }}>
        <div className={sharedStyles.container}>
          <div style={{ maxWidth: '760px', marginBottom: '34px' }}>
            <div className={styles.tag}>Financial Perspective</div>
            <h2 style={{ fontSize: '2.65rem', lineHeight: '1.08', marginBottom: '14px', color: 'var(--color-text-main)', fontFamily: 'var(--font-heading)', fontWeight: 700 }}>
              Bridging engineering precision and fiscal strategy.
            </h2>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '1.15rem' }}>
              Ensuring the financial backbone of Muslim Will is as structured, scalable, and resilient as the technology engine itself.
            </p>
          </div>

          <div className={styles.benefitGrid}>
            <article className={styles.benefitCard}>
              <div className={styles.pill}>Technology Background</div>
              <h3>Systems-driven financial modeling</h3>
              <p>Approach to budgeting and forecasting is built like a software architecture: rigorous, automated, and designed to perform under scale.</p>
            </article>
            <article className={styles.benefitCard}>
              <div className={styles.pill}>Strategic Finance</div>
              <h3>Strategic planning & M&A</h3>
              <p>Leveraging 18+ years of transactional experience to identify growth opportunities, structure corporate partnerships, and manage expansions.</p>
            </article>
            <article className={styles.benefitCard}>
              <div className={styles.pill}>Governance</div>
              <h3>Controllership & Audit</h3>
              <p>Ensuring complete integrity of financial records, strict regulatory compliance, and transparent financial reporting across all operations.</p>
            </article>
            <article className={styles.benefitCard}>
              <div className={styles.pill}>Leadership</div>
              <h3>Management Reform</h3>
              <p>Designing modern financial departments, leading organizational change, and aligning internal workflows with strategic business goals.</p>
            </article>
          </div>
        </div>
      </section>

      {/* 4. Final Massive CTA */}
      <section className={`${sharedStyles.section} ${sharedStyles.sectionDark}`} style={{ padding: '6rem 0' }}>
        <div className={sharedStyles.container}>
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ fontSize: '3rem', fontFamily: 'var(--font-heading)', color: 'var(--color-gold)', marginBottom: '1.5rem', lineHeight: '1.1', fontWeight: 700 }}>
              Build your legacy with complete clarity.
            </h2>
            <p style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.9)', marginBottom: '3rem', lineHeight: '1.6' }}>
              Start your Shariah-conscious estate plan today with a process designed for stability and professional standards.
            </p>
            <div className={sharedStyles.ctaButtonGroup} style={{ justifyContent: 'center' }}>
              <TrackedButton href="https://app.themuslimwill.com/Account/Login" variant="secondary" size="lg" eventName="start_will_footer_click" eventParams={{ location: 'mohamed_landing' }}>Start Your Will</TrackedButton>
              <TrackedButton variant="outline" size="lg" className={sharedStyles.invertedOutline} href="/about" eventName="view_about_footer_click" eventParams={{ location: 'mohamed_landing' }}>Back to About</TrackedButton>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
