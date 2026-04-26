import React from 'react';
import type { Metadata } from 'next';
import sharedStyles from '../../page.module.css';
import styles from '../landing-bio.module.css';
import { TrackedButton } from '@/components/analytics/TrackedButton';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Dr. Yasser Aboutaha | Executive Adviser | Muslim Will',
  description: 'Learn more about Dr. Yasser Aboutaha, Executive Adviser at Muslim Will, community fundraiser, public speaker, and trusted bridge between Muslim Will and Muslim communities across Canada.',
};

export default function DrYasserAboutahaPage() {
  return (
    <main style={{ backgroundColor: '#f5f8f6' }}>
      
      {/* 1. Custom Hero Section */}
      <section className={styles.hero} aria-label="Dr. Yasser Aboutaha">
        {/* Note: We use a standard img here to preserve the exact object-position logic from the CSS */}
        <img className={styles.heroPhoto} src="https://i.ibb.co/C3FP3qt6/Make-image-professional-202604201429.jpg" alt="Dr. Yasser Aboutaha" />
        <div className={styles.heroInner}>
          <div className={`${styles.eyebrow} ${sharedStyles.fadeUp}`}>Executive Adviser | Muslim Will</div>
          <h1 className={`${styles.heroTitle} ${sharedStyles.fadeUp} ${sharedStyles.delay1}`}>Dr. Yasser Aboutaha</h1>
          <p className={`${styles.heroLede} ${sharedStyles.fadeUp} ${sharedStyles.delay2}`}>
            Community fundraiser, public speaker, and relationship-builder helping Muslim Will serve families, masajid, charities, and mission-driven organizations across Canada.
          </p>
          <div className={`${styles.heroActions} ${sharedStyles.fadeUp} ${sharedStyles.delay3}`}>
             <TrackedButton variant="primary" size="lg" eventName="start_will_hero_click" eventParams={{ location: 'yasser_landing' }} style={{ backgroundColor: 'var(--color-gold)', color: 'var(--color-green)' }}>
               Start Your Will
             </TrackedButton>
             <TrackedButton variant="outline" size="lg" className={sharedStyles.invertedOutline} href="/about" eventName="back_to_leadership" eventParams={{ location: 'yasser_landing' }}>
               Back to Leadership
             </TrackedButton>
          </div>
          <div className={`${styles.heroFacts} ${sharedStyles.fadeUp} ${sharedStyles.delay4}`} aria-label="Profile highlights">
            <div className={styles.heroFact}>
              <strong>15+ years</strong>
              <span>Serving Muslim communities across Canada</span>
            </div>
            <div className={styles.heroFact}>
              <strong>Since 2009</strong>
              <span>Supporting masajid, charities, and NGO fundraising</span>
            </div>
            <div className={styles.heroFact}>
              <strong>Co-founder</strong>
              <span>Masjid Fundraising</span>
            </div>
            <div className={styles.heroFact}>
              <strong>Community voice</strong>
              <span>Public speaker and Jumaa Khateeb</span>
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
                <h2>A trusted bridge between professional planning and community service.</h2>
                <p style={{ fontSize: '1.2rem', color: 'var(--color-text-main)', marginTop: '1rem' }}>
                  Dr. Yasser Aboutaha brings a rare combination of Muslim community presence and professional experience to Muslim Will. Trained in dentistry, he has spent more than fifteen years working across project management, international marketing, public speaking, event management, mentoring, life coaching, and fundraising in service of Muslim communities and mission-driven organizations across Canada.
                </p>
              </div>

              <p>
                As a co-founder of Masjid Fundraising, Dr. Yasser has worked directly with masajid, charities, and NGOs since 2009, helping organizations reach their goals with clarity, creativity, and strong community trust. His work has included fundraising campaigns, community events, Islamic lectures, youth programs, and family-centered initiatives designed to move people from goodwill to real action.
              </p>
              <p>
                He is known for practical communication, warmth, and follow-through. Whether he is speaking from the mimbar, meeting with community leaders, or supporting a fundraising campaign, Dr. Yasser brings conviction, empathy, and a strong understanding of what communities need in order to respond with confidence.
              </p>
              <p>
                At Muslim Will, he serves as Executive Adviser, helping build meaningful relationships with masajid, charities, NGOs, and community leaders. His role helps translate Muslim Will's mission into trusted community pathways so more families can prepare their wills as an act of care, responsibility, and Islamic intention.
              </p>
            </div>

            <aside className={styles.detailPanel} aria-label="Profile details">
              <div className={styles.detailHead}>
                <h3>Profile at a glance</h3>
                <p>Grounded in community work, partnership building, and family-first legacy conversations.</p>
              </div>
              <div className={styles.detailList}>
                <div className={styles.detailItem}>
                  <strong>Primary role</strong>
                  <span>Executive Adviser at Muslim Will</span>
                </div>
                <div className={styles.detailItem}>
                  <strong>Professional background</strong>
                  <span>Graduate of Dentistry with experience across project management, international marketing, speaking, event leadership, mentoring, and coaching.</span>
                </div>
                <div className={styles.detailItem}>
                  <strong>Community specialization</strong>
                  <span>Fundraising, masjid support, charity partnerships, Islamic lectures, youth programs, and family gatherings.</span>
                </div>
                <div className={styles.detailItem}>
                  <strong>Community leadership</strong>
                  <span>Co-founder of Masjid Fundraising and a longtime community leader serving Muslim institutions across Canada.</span>
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
            <div className={styles.tag}>How he serves</div>
            <h2 style={{ fontSize: '2.65rem', lineHeight: '1.08', marginBottom: '14px', color: 'var(--color-text-main)', fontFamily: 'var(--font-heading)', fontWeight: 700 }}>
              Experience shaped by community work, not theory alone.
            </h2>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '1.15rem' }}>
              Dr. Yasser's value comes from years of direct engagement with Muslim institutions, families, and charitable organizations that need trust, clarity, and momentum.
            </p>
          </div>

          <div className={styles.benefitGrid}>
            <article className={styles.benefitCard}>
              <div className={styles.pill}>Fundraising</div>
              <h3>Campaigns that move people to act</h3>
              <p>He helps masajid and charities frame their message clearly, connect with donors respectfully, and build stronger fundraising outcomes without losing the heart of the mission.</p>
            </article>
            <article className={styles.benefitCard}>
              <div className={styles.pill}>Speaking</div>
              <h3>Words that lead to commitment</h3>
              <p>As a public speaker and Jumaa Khateeb, he knows how to read a room, earn trust quickly, and turn important ideas into practical next steps.</p>
            </article>
            <article className={styles.benefitCard}>
              <div className={styles.pill}>Partnerships</div>
              <h3>Relationships built for long-term service</h3>
              <p>His work connects Muslim Will with leaders, charities, and organizations that want a family-first, faith-conscious planning pathway for the people they serve.</p>
            </article>
            <article className={styles.benefitCard}>
              <div className={styles.pill}>Community care</div>
              <h3>Family, youth, and mentoring perspective</h3>
              <p>He brings experience from youth programs, family events, mentoring, and community gatherings that keeps people and relationships at the center of the work.</p>
            </article>
          </div>
        </div>
      </section>

      {/* 4. Final Massive CTA */}
      <section className={`${sharedStyles.section} ${sharedStyles.sectionDark}`} style={{ padding: '6rem 0' }}>
        <div className={sharedStyles.container}>
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ fontSize: '3rem', fontFamily: 'var(--font-heading)', color: 'var(--color-gold)', marginBottom: '1.5rem', lineHeight: '1.1', fontWeight: 700 }}>
              Move forward with greater trust and clarity.
            </h2>
            <p style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.9)', marginBottom: '3rem', lineHeight: '1.6' }}>
              Start your will through a pathway shaped by community trust, clear guidance, and responsible planning.
            </p>
            <div className={sharedStyles.ctaButtonGroup} style={{ justifyContent: 'center' }}>
              <TrackedButton variant="primary" size="lg" eventName="start_will_footer_click" eventParams={{ location: 'yasser_landing' }}>Start Your Will</TrackedButton>
              <TrackedButton variant="outline" size="lg" className={sharedStyles.invertedOutline} href="/about" eventName="view_about_footer_click" eventParams={{ location: 'yasser_landing' }}>Back to About</TrackedButton>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
