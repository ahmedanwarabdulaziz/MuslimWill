import React from 'react';
import type { Metadata } from 'next';
import sharedStyles from '../../page.module.css';
import styles from '../landing-bio.module.css';
import { TrackedButton } from '@/components/analytics/TrackedButton';

export const metadata: Metadata = {
  title: 'Ehab Kelani | Islamic Scholar | Muslim Will',
  description: 'Learn about Ehab Kelani, an academic, researcher, and published author with over three decades of experience in Qur\'anic Sciences, Islamic Studies, and Islamic Digital Programs.',
};

export default function EhabKelaniPage() {
  return (
    <main style={{ backgroundColor: '#f5f8f6' }}>
      
      {/* 1. Custom Hero Section */}
      <section className={styles.hero} aria-label="Ehab Kelani">
        <img className={styles.heroPhoto} src="/Images/x24.png" alt="Ehab Kelani" />
        
        <div className={styles.heroInner}>
          <div className={`${styles.eyebrow} ${sharedStyles.fadeUp}`}>Islamic Scholar & Academic</div>
          <h1 className={`${styles.heroTitle} ${sharedStyles.fadeUp} ${sharedStyles.delay1}`} style={{ color: '#ffffff' }}>Ehab Kelani</h1>
          <p className={`${styles.heroLede} ${sharedStyles.fadeUp} ${sharedStyles.delay2}`}>
            An academic, researcher, and published author with over three decades of experience in Qur'anic Sciences, Islamic Studies, and Islamic Digital Programs.
          </p>
          <div className={`${styles.heroActions} ${sharedStyles.fadeUp} ${sharedStyles.delay3}`}>
             <TrackedButton href="https://app.themuslimwill.com/Account/Register" variant="secondary" size="lg" eventName="start_will_hero_click" eventParams={{ location: 'ehab_landing' }} style={{ backgroundColor: 'var(--color-gold)', color: 'var(--color-navy)' }}>
               Start Your Will
             </TrackedButton>
             <TrackedButton variant="outline" size="lg" className={sharedStyles.invertedOutline} href="/legal-islamic-compliance" eventName="back_to_compliance" eventParams={{ location: 'ehab_landing' }}>
               Back to Compliance
             </TrackedButton>
          </div>
          <div className={`${styles.heroFacts} ${sharedStyles.fadeUp} ${sharedStyles.delay4}`} aria-label="Profile highlights">
            <div className={styles.heroFact}>
              <strong>Primary Role</strong>
              <span>Imam, Lecturer & Family Counselor</span>
            </div>
            <div className={styles.heroFact}>
              <strong>Background</strong>
              <span>Qur'anic Sciences, Fiqh, and Usul al-Fiqh</span>
            </div>
            <div className={styles.heroFact}>
              <strong>Experience</strong>
              <span>Over three decades in Islamic Studies</span>
            </div>
            <div className={styles.heroFact}>
              <strong>Core Focus</strong>
              <span>Curriculum Development & Text Editing</span>
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
                <h2>A foundation in classical scholarship and Islamic digital programs.</h2>
                <p style={{ fontSize: '1.2rem', color: 'var(--color-text-main)', marginTop: '1rem' }}>
                  Ehab Kelani is an academic, researcher, and published author with over three decades of experience in Qur'anic Sciences, Islamic Studies, and Islamic Digital Programs. He graduated from Al-Azhar Al-Sharif and specializes in Usul al-Fiqh, Tafsir, and Qira'at.
                </p>
              </div>

              <p>
                He serves as an experienced Imam and Khateeb in Islamic institutions in Egypt and Canada, a university lecturer, and a religious and family counselor providing fatwas and family guidance. He is currently an Imam, Lecturer & Family Counselor at the Islamic Society of North America (ISNA) in Mississauga, Canada.
              </p>
              <p>
                His scholarly journey includes comprehensive knowledge of foundational texts in Usul al-Fiqh, complementary sciences like Kalam and Logic, and mastery of Al-Azhar's methodologies. He has an extensive background in comparative jurisprudence and classical text editing, having verified and edited dozens of scholarly books.
              </p>
              <p>
                He has actively participated in developing research projects that bridge traditional studies with modern technologies. As Executive Director & Senior Researcher at Arabia IT in Cairo, he managed projects for the development of Islamic software and digital publications, including The Qur'anic Recitations Encyclopedia and The Simplified Qur'an Encyclopedia.
              </p>
              <p>
                His scholarly authority is established through multiple traditional ijazat (authorizations). He holds Ijazah in Tajweed, the Ten Qur'anic Recitations with an unbroken chain of narration back to the Prophet (PBUH), and Manuscript Verification.
              </p>
            </div>

            <aside className={styles.detailPanel} aria-label="Profile details">
              <div className={styles.detailHead}>
                <h3>Profile at a glance</h3>
                <p>Grounded in Qur'anic Sciences, Usul al-Fiqh, and Islamic Digital Programs.</p>
              </div>
              <div className={styles.detailList}>
                <div className={styles.detailItem}>
                  <strong>Primary role</strong>
                  <span>Imam, Lecturer & Family Counselor</span>
                </div>
                <div className={styles.detailItem}>
                  <strong>Educational background</strong>
                  <span>Master's in Islamic Studies (Benha University); Bachelor's in Qur'anic Sciences (Al-Azhar).</span>
                </div>
                <div className={styles.detailItem}>
                  <strong>Scholarly credentials</strong>
                  <span>Holds Ijazat in Tajweed, the Ten Qur'anic Recitations, and Manuscript Verification.</span>
                </div>
                <div className={styles.detailItem}>
                  <strong>Community focus</strong>
                  <span>Family counseling, mediation, lectures, and religious inquiries.</span>
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
            <div className={styles.tag}>Scholarly Depth</div>
            <h2 style={{ fontSize: '2.65rem', lineHeight: '1.08', marginBottom: '14px', color: 'var(--color-text-main)', fontFamily: 'var(--font-heading)', fontWeight: 700 }}>
              Bridging traditional studies with modern technologies.
            </h2>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '1.15rem' }}>
              Bringing rigorous classical scholarship and innovative digital solutions to Islamic education.
            </p>
          </div>

          <div className={styles.benefitGrid}>
            <article className={styles.benefitCard}>
              <div className={styles.pill}>Usul al-Fiqh & Fiqh</div>
              <h3>Jurisprudential Expertise</h3>
              <p>Extensive expertise in the Principles of Islamic Jurisprudence, Comparative Fiqh, and foundational methodologies.</p>
            </article>
            <article className={styles.benefitCard}>
              <div className={styles.pill}>Qur'anic Sciences</div>
              <h3>Textual Foundation</h3>
              <p>Specialized in Tafsir and Qira'at with certified qualifications and Ijazat in the Ten Qur'anic Recitations.</p>
            </article>
            <article className={styles.benefitCard}>
              <div className={styles.pill}>Digital Programs</div>
              <h3>Technological Innovation</h3>
              <p>Managed the development of pioneering Qur'anic software, digital Islamic encyclopedias, and research databases.</p>
            </article>
            <article className={styles.benefitCard}>
              <div className={styles.pill}>Research & Editing</div>
              <h3>Classical Verification</h3>
              <p>Vast experience in manuscript verification, classical text research, and editing seminal Islamic works.</p>
            </article>
          </div>
        </div>
      </section>

      {/* 4. Final Massive CTA */}
      <section className={`${sharedStyles.section} ${sharedStyles.sectionDark}`} style={{ padding: '6rem 0' }}>
        <div className={sharedStyles.container}>
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ fontSize: '3rem', fontFamily: 'var(--font-heading)', color: 'var(--color-gold)', marginBottom: '1.5rem', lineHeight: '1.1', fontWeight: 700 }}>
              Build your will on a foundation of trust.
            </h2>
            <p style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.9)', marginBottom: '3rem', lineHeight: '1.6' }}>
              Proceed with confidence, knowing the Islamic structure is backed by qualified scholarly review.
            </p>
            <div className={sharedStyles.ctaButtonGroup} style={{ justifyContent: 'center' }}>
              <TrackedButton href="https://app.themuslimwill.com/Account/Register" variant="secondary" size="lg" eventName="start_will_footer_click" eventParams={{ location: 'ehab_landing' }}>Start Your Will</TrackedButton>
              <TrackedButton variant="outline" size="lg" className={sharedStyles.invertedOutline} href="/legal-islamic-compliance" eventName="view_compliance_footer_click" eventParams={{ location: 'ehab_landing' }}>Learn About Compliance</TrackedButton>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
