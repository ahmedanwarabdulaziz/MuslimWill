import React from 'react';
import type { Metadata } from 'next';
import sharedStyles from '../page.module.css';
import styles from './charitable-legacy.module.css';
import { TrackedButton } from '@/components/analytics/TrackedButton';
import { Accordion } from '@/components/ui/Accordion';

export const metadata: Metadata = {
  title: 'Charitable Legacy In An Islamic Will | Muslim Will Canada',
  description: 'Learn how charitable bequests can fit within Islamic will planning in Canada while keeping family responsibility central and intentions clearly documented.',
  openGraph: {
    title: 'Charitable Legacy In An Islamic Will | Muslim Will Canada',
    description: 'Learn how charitable bequests can fit within Islamic will planning in Canada while keeping family responsibility central and intentions clearly documented.',
  }
};

export default function CharitableLegacyPage() {
  
  const faqs = [
    {
      question: "Can I give charity through my Islamic will?",
      answer: "Yes. An Islamic will allows you to direct up to one-third (1/3) of your estate to charitable causes (Sadaqah Jariyah) or individuals who do not automatically inherit under Islamic inheritance structures."
    },
    {
      question: "What is the 1/3 rule in an Islamic will?",
      answer: "The 'Wasiyyah' (permissible bequest) rule allows you to leave a maximum of one-third of your estate to anyone who is not an automatic heir, including charities, community organizations, or distant relatives. The remaining two-rdhirs is secured for your primary family and heirs."
    },
    {
      question: "Can charitable giving sit alongside family responsibility?",
      answer: "Absolutely. The very structure of the Wasiyyah (up to 1/3) ensures that your charitable legacy never competes with or deprives your immediate family members of what they are entitled to."
    },
    {
      question: "What happens if my estate value changes?",
      answer: "Charitable bequests are typically stated as a percentage of your total estate (up to 33.3%) rather than a fixed dollar amount, ensuring that the charity receives a proportionately fair amount regardless of how your estate value changes over time."
    },
    {
      question: "Can I change the charity later?",
      answer: "Yes. You can update your will to change your selected charity, adjust the percentage, or remove the bequest entirely if your financial circumstances change."
    }
  ];

  return (
    <main>
      {/* 1. Hero Section (Patriva Style) */}
      <section className={`${sharedStyles.section} ${sharedStyles.heroSection}`}>
        <div className={`${sharedStyles.container} ${sharedStyles.heroContent}`}>
          <div className={sharedStyles.heroTextWrapper}>
             <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '0.5rem', marginBottom: '1rem' }}>
               <div className={`${sharedStyles.heroEyebrow} ${sharedStyles.fadeUp}`} style={{ marginBottom: 0 }}>
                 Charitable Legacy
               </div>
             </div>
             
             <h1 className={`${sharedStyles.heroH1} ${sharedStyles.fadeUp} ${sharedStyles.delay1}`}>
               Legacy giving does not need to compete with family responsibility.
             </h1>
             
             <p className={`${sharedStyles.heroCopy} ${sharedStyles.fadeUp} ${sharedStyles.delay2}`}>
               Learn how charitable bequests can fit seamlessly within your Islamic will planning in Canada. Support ongoing charity (Sadaqah Jariyah) while keeping your family obligations fully secure.
             </p>
             
             <div className={`${sharedStyles.heroActions} ${sharedStyles.fadeUp} ${sharedStyles.delay3}`} style={{ marginBottom: '1.5rem' }}>
               <TrackedButton variant="primary" size="lg" eventName="start_will_hero_click" eventParams={{ location: 'charitable_legacy' }}>Start Your Will</TrackedButton>
               <TrackedButton variant="outline" size="lg" className={sharedStyles.invertedOutline} href="/pricing" eventName="view_pricing_hero_click" eventParams={{ location: 'charitable_legacy' }}>View Pricing</TrackedButton>
             </div>

             <div className={`${sharedStyles.fadeUp} ${sharedStyles.delay4}`} style={{ fontSize: '0.85rem', opacity: 0.8, maxWidth: '600px', lineHeight: 1.5, marginTop: '2rem' }}>
               "When a person dies, their deeds come to an end except for three: Sadaqah Jariyah (a continuous charity), knowledge from which benefit is gained, or a righteous child who prays for them." 
             </div>
          </div>
        </div>
      </section>

      {/* 2. Family First vs The 1/3 Rule Split */}
      <section className={sharedStyles.section}>
        <div className={sharedStyles.container}>
          <div className={sharedStyles.sectionHeader} style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 className={sharedStyles.sectionH2} style={{ textAlign: 'center' }}>The framework for responsible giving.</h2>
            <p className={sharedStyles.sectionIntro} style={{ textAlign: 'center' }}>
              Often, individuals feel they must choose between securing their family's future and leaving a meaningful charitable legacy. The Islamic framework explicitly balances both.
            </p>
          </div>

          <div className={styles.splitPane}>
            <div className={styles.paneHalf}>
              <h3 className={styles.paneTitle}>Family-First Principle</h3>
              <p className={styles.paneText}>
                The core priority of an Islamic will is to ensure that your dependents and primary heirs are not left unsupported. Two-thirds of your estate (or more) is rigidly protected by Islamic inheritance mandates intended to distribute wealth fairly among your spouse, children, and parents.
                <br/><br/>
                Your charitable intentions cannot encroach upon this protected majority.
              </p>
            </div>
            <div className={`${styles.paneHalf} ${styles.glossyGreenCard}`} style={{ padding: '3rem', border: 'none' }}>
              <h3 className={styles.paneTitle} style={{ color: 'white' }}>The Permissible Bequest (Wasiyyah)</h3>
              <p className={styles.paneText} style={{ color: 'rgba(255,255,255,0.85)' }}>
                You are granted explicit permission to allocate up to <strong>one-third (33.3%)</strong> of your estate to any individuals who do not inherit automatically, or to charitable causes of your choice.
                <br/><br/>
                This is your opportunity to fund masajid, orphanages, water projects, or local community initiatives through an ongoing charity (Sadaqah Jariyah) that benefits you after passing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Sadaqah Jariyah Examples (Ledger) */}
      <section className={`${sharedStyles.section} ${sharedStyles.sectionLight}`}>
        <div className={sharedStyles.container}>
          <div className={styles.ledgerWrapper} style={{ marginTop: 0, borderTop: 'none' }}>
            <div className={styles.ledgerRow}>
               <div className={styles.ledgerColLeft}>
                 <div className={styles.ledgerTitleHeader}>
                   <h2 className={styles.ledgerTitle}>Examples of Charitable Intention</h2>
                   <p className={styles.ledgerIntro}>
                     Our guided workflow helps you document your exact charitable objectives clearly within the legal scope of the Wasiyyah.
                   </p>
                 </div>
               </div>
               <div className={styles.ledgerColRight}>
                  <div className={styles.ledgerItem}>
                    <div className={styles.ledgerItemNum}>01</div>
                    <div className={styles.ledgerItemContent}>
                      <h4 className={styles.ledgerItemTitle}>Educational Endowments</h4>
                      <p className={styles.ledgerItemDesc}>Allocate a percentage of your estate to fund scholarships, Islamic schools, or institutions that spread beneficial knowledge.</p>
                    </div>
                  </div>
                  <div className={styles.ledgerItem}>
                    <div className={styles.ledgerItemNum}>02</div>
                    <div className={styles.ledgerItemContent}>
                      <h4 className={styles.ledgerItemTitle}>Community Development</h4>
                      <p className={styles.ledgerItemDesc}>Direct funds toward the construction or maintenance of a local Masjid, ensuring continuous reward for every prayer performed.</p>
                    </div>
                  </div>
                  <div className={styles.ledgerItem}>
                    <div className={styles.ledgerItemNum}>03</div>
                    <div className={styles.ledgerItemContent}>
                      <h4 className={styles.ledgerItemTitle}>Emergency Relief &amp; Healthcare</h4>
                      <p className={styles.ledgerItemDesc}>Support orphan sponsorships, medical clinics, or the construction of sustainable water wells in developing regions.</p>
                    </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FAQ */}
      <section className={`${sharedStyles.section}`} id="faq">
        <div className={sharedStyles.container} style={{ maxWidth: '800px' }}>
          <div className={sharedStyles.sectionHeader}>
            <h2 className={sharedStyles.sectionH2}>Charitable bequest questions, answered.</h2>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <Accordion items={faqs.map(faq => ({
              question: faq.question,
              answer: <p style={{ margin: 0 }}>{faq.answer}</p>
            }))} />
          </div>
        </div>
      </section>

      {/* 5. Partnership Bridge */}
      <section className={sharedStyles.section}>
        <div className={sharedStyles.container}>
          <div className={styles.partnershipBanner}>
            <div className={styles.partnershipLeft}>
               <span className={styles.partnershipEyebrow}>For Organizations</span>
               <h3>Are you a charity or community organization?</h3>
            </div>
            <div className={styles.partnershipRight}>
               <p>
                 We partner with prominent foundations and masajid to help their donors structure legacy giving responsibly. Muslim Will provides a dedicated pathway for your community to fulfill their Islamic will obligations without transferring any legal or advisory risk to your organization.
               </p>
               <div>
                 <TrackedButton variant="primary" size="lg" style={{ backgroundColor: 'white', color: 'var(--color-green)' }} href="/for-charities" eventName="view_charity_partnerships" eventParams={{ location: 'charitable_legacy' }}>
                   Request Partnership Info
                 </TrackedButton>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Final CTA */}
      <section className={`${sharedStyles.section} ${sharedStyles.sectionDark}`} style={{ padding: '6rem 0' }}>
        <div className={sharedStyles.container}>
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ fontSize: '3rem', fontFamily: 'var(--font-heading)', color: 'var(--color-gold)', marginBottom: '1.5rem', lineHeight: '1.1', fontWeight: 700 }}>
              Protect your family and leave room for lasting impact.
            </h2>
            <p style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.9)', marginBottom: '1rem', lineHeight: '1.6' }}>
              Document your charitable intentions with clarity, while keeping family care at the heart of your planning.
            </p>
            <div style={{ fontSize: '1.125rem', color: 'rgba(255,255,255,0.8)', marginBottom: '2rem' }}>
              A clearer legacy begins with a written plan.
            </div>
            <div className={sharedStyles.ctaButtonGroup} style={{ justifyContent: 'center' }}>
              <TrackedButton variant="primary" size="lg" eventName="start_will_footer_click" eventParams={{ location: 'charitable_legacy' }}>Start Your Will</TrackedButton>
              <TrackedButton variant="outline" size="lg" className={sharedStyles.invertedOutline} href="/pricing" eventName="view_pricing_footer_click" eventParams={{ location: 'charitable_legacy' }}>View Pricing</TrackedButton>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
