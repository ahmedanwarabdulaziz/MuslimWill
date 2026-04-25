import React from 'react';
import type { Metadata } from 'next';
import sharedStyles from '../../page.module.css';
import styles from '../landing-bio.module.css';
import { TrackedButton } from '@/components/analytics/TrackedButton';

export const metadata: Metadata = {
  title: 'Ahmed Gohar | Founder And CEO | Muslim Will',
  description: 'Learn about Ahmed Gohar, founder of Muslim Will and Patriva, and how he built the platform structure behind Shariah-conscious estate planning at scale.',
};

export default function AhmedGoharPage() {
  return (
    <main style={{ backgroundColor: '#f5f8f6' }}>
      
      {/* 1. Custom Hero Section */}
      <section className={styles.hero} aria-label="Ahmed Gohar" style={{ background: 'var(--color-green)' }}>
        {/* Transparent grid overlay instead of a photo since no photo is provided yet */}
        <div style={{ position: 'absolute', inset: 0, opacity: 0.1, backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />
        
        <div className={styles.heroInner}>
          <div className={`${styles.eyebrow} ${sharedStyles.fadeUp}`}>Founder & CEO | Patriva / Muslim Will</div>
          <h1 className={`${styles.heroTitle} ${sharedStyles.fadeUp} ${sharedStyles.delay1}`}>Ahmed Gohar</h1>
          <p className={`${styles.heroLede} ${sharedStyles.fadeUp} ${sharedStyles.delay2}`}>
            Technology founder on a mission to build structured, scalable systems for Shariah-conscious and legally enforceable estate planning across the West.
          </p>
          <div className={`${styles.heroActions} ${sharedStyles.fadeUp} ${sharedStyles.delay3}`}>
             <TrackedButton variant="primary" size="lg" eventName="start_will_hero_click" eventParams={{ location: 'ahmed_landing' }} style={{ backgroundColor: 'var(--color-gold)', color: 'var(--color-green)' }}>
               Start Your Will
             </TrackedButton>
             <TrackedButton variant="outline" size="lg" className={sharedStyles.invertedOutline} href="/about" eventName="back_to_leadership" eventParams={{ location: 'ahmed_landing' }}>
               Back to Leadership
             </TrackedButton>
          </div>
          <div className={`${styles.heroFacts} ${sharedStyles.fadeUp} ${sharedStyles.delay4}`} aria-label="Profile highlights">
            <div className={styles.heroFact}>
              <strong>Founder & CEO</strong>
              <span>Patriva / Muslim Will, The Agile Group</span>
            </div>
            <div className={styles.heroFact}>
              <strong>Background</strong>
              <span>SaaS platforms & Regulated Workflows</span>
            </div>
            <div className={styles.heroFact}>
              <strong>Infrastructure</strong>
              <span>Medical & Operationally Sensitive Systems</span>
            </div>
            <div className={styles.heroFact}>
              <strong>Core Mission</strong>
              <span>Standardizing faith-conscious planning at scale</span>
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
                <h2>Building systems that function in the real world, under pressure, with clarity.</h2>
                <p style={{ fontSize: '1.2rem', color: 'var(--color-text-main)', marginTop: '1rem' }}>
                  Ahmed Gohar is a technology founder on a mission to solve one of the most overlooked gaps facing Muslim families in the West: the absence of wills that are both Shariah-conscious and legally enforceable. For many Muslim families, the standard options have long been either a generic will that does not reflect Islamic inheritance principles, or no will at all.
                </p>
              </div>

              <p>
                When that gap is left unaddressed, the burden does not fall on systems. It falls on families, often at the most difficult moment possible, through legal uncertainty, religious discomfort, and avoidable confusion around inheritance, guardianship, and final wishes.
              </p>
              <p>
                To address that problem, Ahmed built Muslim Will through Patriva as a structured document generation platform. It is not positioned as a law firm and not as a legal advisory service. It is a technology system designed to guide users through a deliberate multi-layer workflow that brings the right functions together responsibly: user input, scholar-informed inheritance logic, independent legal review, and guided execution oversight. Each layer exists for a reason: scholars do not replace lawyers, lawyers do not replace the platform, and the platform does not overreach into legal or religious authority.
              </p>
              <p>
                Ahmed's background is in building and operating complex technology products. As the founder of The Agile Group, he has spent years designing and delivering SaaS platforms, mobile applications, and regulated workflows across operationally sensitive environments, including the medical sector. His work has consistently sat at the intersection of software architecture, real-world process design, and third-party integration.
              </p>
              <p>
                His goal is direct: to standardize Shariah-conscious estate planning across the West and make it accessible to Muslim families at scale, not only to those with unusual resources, legal connections, or specialist knowledge. Through Muslim Will, Ahmed is building a pathway that is more structured, more responsible, and more accessible for the families it is meant to serve.
              </p>
            </div>

            <aside className={styles.detailPanel} aria-label="Profile details">
              <div className={styles.detailHead}>
                <h3>Profile at a glance</h3>
                <p>Grounded in technology architecture, workflow design, and process accountability.</p>
              </div>
              <div className={styles.detailList}>
                <div className={styles.detailItem}>
                  <strong>Primary role</strong>
                  <span>Founder & CEO at Patriva / Muslim Will</span>
                </div>
                <div className={styles.detailItem}>
                  <strong>Professional background</strong>
                  <span>Building complex technology products, SaaS platforms, and regulated workflows.</span>
                </div>
                <div className={styles.detailItem}>
                  <strong>Product specialization</strong>
                  <span>Document generation, workflow architecture, and third-party process integrations.</span>
                </div>
                <div className={styles.detailItem}>
                  <strong>Core focus</strong>
                  <span>Scaling accessible, Shariah-conscious estate planning systems for families across the West.</span>
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
            <div className={styles.tag}>Architectural Perspective</div>
            <h2 style={{ fontSize: '2.65rem', lineHeight: '1.08', marginBottom: '14px', color: 'var(--color-text-main)', fontFamily: 'var(--font-heading)', fontWeight: 700 }}>
              Bridging faith, law, and technology.
            </h2>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '1.15rem' }}>
              The Patriva engine ensures each domain operates independently so that no single part overreaches into another.
            </p>
          </div>

          <div className={styles.benefitGrid}>
            <article className={styles.benefitCard}>
              <div className={styles.pill}>Technology Engine</div>
              <h3>Systems built for the real world</h3>
              <p>Approach to product building is never a concept exercise. Systems are built to function securely under pressure with complete accountability.</p>
            </article>
            <article className={styles.benefitCard}>
              <div className={styles.pill}>Regulated Workflows</div>
              <h3>Bridging compliance and scale</h3>
              <p>Experience derived from building operationally sensitive environments, including the medical sector, ensuring secure data handling.</p>
            </article>
            <article className={styles.benefitCard}>
              <div className={styles.pill}>Workflow Design</div>
              <h3>Intentionally separated roles</h3>
              <p>A multi-layered structure where user input, scholar logic, and independent legal review remain distinct and professionally isolated.</p>
            </article>
            <article className={styles.benefitCard}>
              <div className={styles.pill}>Scale</div>
              <h3>Accessible to families everywhere</h3>
              <p>Eradicating the friction of expensive hourly legal fees, standardizing the process for families without need for specialist knowledge.</p>
            </article>
          </div>
        </div>
      </section>

      {/* 4. Final Massive CTA */}
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
              <TrackedButton variant="primary" size="lg" eventName="start_will_footer_click" eventParams={{ location: 'ahmed_landing' }}>Start Your Will</TrackedButton>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
