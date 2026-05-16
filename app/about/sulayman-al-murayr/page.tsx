import React from 'react';
import type { Metadata } from 'next';
import sharedStyles from '../../page.module.css';
import styles from '../landing-bio.module.css';
import { TrackedButton } from '@/components/analytics/TrackedButton';

export const metadata: Metadata = {
  title: 'Sulayman Hasan Muhammad Al-Murayr | Islamic Scholar | Muslim Will',
  description: 'Learn about Sulayman Hasan Muhammad Al-Murayr, the Islamic scholar and educator anchoring the Islamic review framework for Muslim Will.',
};

export default function SulaymanAlMurayrPage() {
  return (
    <main style={{ backgroundColor: '#f5f8f6' }}>
      
      {/* 1. Custom Hero Section */}
      <section className={styles.hero} aria-label="Sulayman Hasan Muhammad Al-Murayr">
        <img className={styles.heroPhoto} src="/Images/Dr.Soliman.png" alt="Sulayman Hasan Muhammad Al-Murayr" />
        
        <div className={styles.heroInner}>
          <div className={`${styles.eyebrow} ${sharedStyles.fadeUp}`}>Islamic Scholar & Academic Instructor</div>
          <h1 className={`${styles.heroTitle} ${sharedStyles.fadeUp} ${sharedStyles.delay1}`} style={{ color: '#ffffff' }}>Sulayman Hasan Muhammad Al-Murayr</h1>
          <p className={`${styles.heroLede} ${sharedStyles.fadeUp} ${sharedStyles.delay2}`}>
            Anchoring the faith-conscious trust layer and scholarly review for Muslim Will's inheritance framework.
          </p>
          <div className={`${styles.heroActions} ${sharedStyles.fadeUp} ${sharedStyles.delay3}`}>
             <TrackedButton href="https://app.themuslimwill.com/Account/Login" variant="secondary" size="lg" eventName="start_will_hero_click" eventParams={{ location: 'sulayman_landing' }} style={{ backgroundColor: 'var(--color-gold)', color: 'var(--color-green)' }}>
               Start Your Will
             </TrackedButton>
             <TrackedButton variant="outline" size="lg" className={sharedStyles.invertedOutline} href="/legal-islamic-compliance" eventName="back_to_compliance" eventParams={{ location: 'sulayman_landing' }}>
               Back to Compliance
             </TrackedButton>
          </div>
          <div className={`${styles.heroFacts} ${sharedStyles.fadeUp} ${sharedStyles.delay4}`} aria-label="Profile highlights">
            <div className={styles.heroFact}>
              <strong>Primary Role</strong>
              <span>Islamic Review Authority</span>
            </div>
            <div className={styles.heroFact}>
              <strong>Background</strong>
              <span>Quran, Tafsir, and Hadith Sciences</span>
            </div>
            <div className={styles.heroFact}>
              <strong>Experience</strong>
              <span>Academic Instructor & Educator</span>
            </div>
            <div className={styles.heroFact}>
              <strong>Core Focus</strong>
              <span>Scholarly oversight for inheritance</span>
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
                <h2>A foundation in classical scholarship and modern educational delivery.</h2>
                <p style={{ fontSize: '1.2rem', color: 'var(--color-text-main)', marginTop: '1rem' }}>
                  Sulayman Hasan Muhammad Al-Murayr is an Islamic scholar, Quran teacher, and academic instructor with experience across Saudi Arabia, Malaysia, Canada, and the United States. His background bridges classical Islamic sciences with community education, ensuring that structured inheritance planning is grounded in authentic faith principles.
                </p>
              </div>

              <p>
                His educational journey is deeply rooted in the transmission of Islamic knowledge. Since 1999, he has been dedicated to teaching the Quran in memorization and recitation. This commitment to primary sources expanded into broader academic instruction, where he has served at Sharia institutes in Saudi Arabia and as an academic instructor at Al-Madinah International University, the University of Minnesota, and the American Open University.
              </p>
              <p>
                In North America, his work has included teaching Arabic to non-native speakers in Canada and serving as a khateeb and lecturer in several mosques. This direct community engagement informs his understanding of the practical challenges Muslim families face when attempting to align their legal affairs with their religious values.
              </p>
              <p>
                His scholarly authority is established through multiple traditional ijazat (authorizations). He holds ijazah in the Quran and its riwayah, as well as in major works of Tafsir, including Tafsir Ibn Kathir, Tafsir al-Baydawi, and Tafsir al-Jalalayn. Furthermore, he holds ijazah in major hadith collections, including Sahih al-Bukhari, Sahih Muslim, and the Sunan collections, providing a robust classical foundation for his scholarly review work.
              </p>
              <p>
                Within the Muslim Will framework, his role is specific and focused: he provides the scholarly anchor for the Islamic review of inheritance structures. He ensures the platform's considerations align with established Islamic principles. It is important to note that this structural review supports the platform's methodology and does not replace the need for a personal fatwa in highly complex or exceptional family cases.
              </p>
            </div>

            <aside className={styles.detailPanel} aria-label="Profile details">
              <div className={styles.detailHead}>
                <h3>Profile at a glance</h3>
                <p>Grounded in Quranic education, academic instruction, and traditional transmission of knowledge.</p>
              </div>
              <div className={styles.detailList}>
                <div className={styles.detailItem}>
                  <strong>Primary role</strong>
                  <span>Islamic Review Authority for Muslim Will</span>
                </div>
                <div className={styles.detailItem}>
                  <strong>Educational background</strong>
                  <span>Quran teaching since 1999; Academic instruction across multiple international universities.</span>
                </div>
                <div className={styles.detailItem}>
                  <strong>Scholarly credentials</strong>
                  <span>Holds traditional ijazat in Quran, Tafsir, and major Hadith collections.</span>
                </div>
                <div className={styles.detailItem}>
                  <strong>Community focus</strong>
                  <span>Mosque lecturer, khateeb, and Arabic instructor for non-native speakers.</span>
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
              Anchoring trust through knowledge and review.
            </h2>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '1.15rem' }}>
              Bringing rigorous classical scholarship to the structured review of modern inheritance planning.
            </p>
          </div>

          <div className={styles.benefitGrid}>
            <article className={styles.benefitCard}>
              <div className={styles.pill}>Quran & Tafsir</div>
              <h3>Textual Foundation</h3>
              <p>Authorized in the recitation of the Quran and the transmission of foundational Tafsir texts, ensuring a firm grounding in primary sources.</p>
            </article>
            <article className={styles.benefitCard}>
              <div className={styles.pill}>Hadith Sciences</div>
              <h3>Prophetic Tradition</h3>
              <p>Holds ijazat in the major collections of Hadith, providing the necessary depth for understanding the application of Islamic jurisprudence.</p>
            </article>
            <article className={styles.benefitCard}>
              <div className={styles.pill}>Academic Instruction</div>
              <h3>Educational Delivery</h3>
              <p>Extensive experience teaching in structured academic environments and e-learning platforms globally.</p>
            </article>
            <article className={styles.benefitCard}>
              <div className={styles.pill}>Review Boundary</div>
              <h3>Clear Authority</h3>
              <p>Provides critical oversight for the platform's inheritance structures, distinctly separated from legal execution or individualized fatwas.</p>
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
              <TrackedButton href="https://app.themuslimwill.com/Account/Login" variant="secondary" size="lg" eventName="start_will_footer_click" eventParams={{ location: 'sulayman_landing' }}>Start Your Will</TrackedButton>
              <TrackedButton variant="outline" size="lg" className={sharedStyles.invertedOutline} href="/legal-islamic-compliance" eventName="view_compliance_footer_click" eventParams={{ location: 'sulayman_landing' }}>Learn About Compliance</TrackedButton>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
