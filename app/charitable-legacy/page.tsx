import type { Metadata } from 'next';
import { TrustBar } from '@/components/ui/TrustBar';
import Link from 'next/link';
import { TrackedButton } from '@/components/analytics/TrackedButton';
import styles from './page.module.css';

const siteUrl = 'https://themuslimwill.com';
const pageTitle = 'Charitable Legacy in an Islamic Will | Sadaqah Jariyah | The Muslim Will';
const pageDescription = 'Document your charitable intentions as a legally structured bequest in your Islamic will — Sadaqah Jariyah, Waqf, and the 1/3 rule, built into The Bridge from $5.99/month.';

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: `${siteUrl}/charitable-legacy` },
};

export default function CharitableLegacyPage() {
  return (
    <div className={styles.main}>
      {/* ── HERO SECTION ── */}
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.heroEyebrow}>My Bridge › Charitable Legacy</div>
            <h1 className={styles.heroH1}>
              Legacy giving does not need to compete with family responsibility.
            </h1>
            <p className={styles.heroSub}>
              Islamic inheritance law already made room for your generosity. Up to one third of your estate can be directed to the causes you care about — while your family&apos;s shares remain protected. The Muslim Will helps you document that intention clearly, correctly, and as a permanent part of your estate.
            </p>
          </div>
        </div>
      </section>

      {/* ── TRUST ANCHORS ── */}
      <TrustBar items={['Built around the Islamic 1/3 bequest framework', 'Family inheritance shares remain fully protected', 'Sadaqah Jariyah documented and legally structured', 'Stored securely in your Vault — your intention protected']} />

      {/* ── SECTION 1: How Charitable Legacy Works in Islamic Law ── */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeaderCenter}>
            <h2 className={styles.sectionH2}>Islam already made room for your generosity</h2>
            <p className={styles.sectionIntro}>
              You do not have to choose between your family and your faith. Islamic inheritance law defines both — and keeps them separate.
            </p>
          </div>

          <div className={styles.grid4}>
            <div className={styles.featureCardPremium}>
              <div className={styles.featureIconWrapper}>⚖️</div>
              <h3 className={styles.featureTitle}>The 1/3 Rule</h3>
              <p className={styles.featureDesc}>
                Under Islamic inheritance principles, up to one third of your estate may be directed outside the Faraid shares — to charitable causes, non-heirs, or specific purposes you have chosen. Your family&apos;s shares are calculated from the remaining two thirds. The two intentions do not conflict. They coexist by design.
              </p>
            </div>
            <div className={styles.featureCardPremium}>
              <div className={styles.featureIconWrapper}>🛡️</div>
              <h3 className={styles.featureTitle}>Faraid Stays Protected</h3>
              <p className={styles.featureDesc}>
                Your heirs receive what Islamic law designates for them. The charitable bequest does not reduce those shares — it sits alongside them, within the permitted boundary. Your family is not diminished by your generosity.
              </p>
            </div>
            <div className={styles.featureCardPremium}>
              <div className={styles.featureIconWrapper}>💧</div>
              <h3 className={styles.featureTitle}>Sadaqah Jariyah</h3>
              <p className={styles.featureDesc}>
                The most valued form of ongoing charity in Islam — knowledge shared, a well dug, a child taught — continues to benefit the giver even after death. A charitable bequest in your will can fund causes that carry on in your name, with the intention documented and the direction clear.
              </p>
            </div>
            <div className={styles.featureCardPremium}>
              <div className={styles.featureIconWrapper}>🏛️</div>
              <h3 className={styles.featureTitle}>Waqf (Islamic Endowment)</h3>
              <p className={styles.featureDesc}>
                For those who want to establish a permanent charitable endowment, a Waqf designation can be included in your estate plan — directing assets toward an ongoing charitable purpose in perpetuity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: Why Documentation Matters ── */}
      <section className={styles.section} style={{ backgroundColor: 'var(--color-cream-light)' }}>
        <div className={styles.container}>
          <div className={styles.sectionHeaderCenter} style={{ maxWidth: '900px' }}>
            <h2 className={styles.sectionH2}>A good intention without a document is just a hope.</h2>
            <div style={{ textAlign: 'left', marginTop: '2.5rem' }}>
              <p className={styles.sectionIntro} style={{ marginBottom: '1.5rem', color: 'var(--color-navy)' }}>
                Many Muslim families intend to leave something for charity. Few document it clearly enough for an executor to act on it. Without a written, properly structured charitable bequest in your will, your intention may not survive the estate administration process — regardless of how clearly you expressed it in life.
              </p>
              <p className={styles.sectionIntro} style={{ color: 'var(--color-navy)' }}>
                The Muslim Will builds your charitable bequest into the legal structure of your will — not as a note in the margin, but as a documented, enforceable designation. Your executor knows exactly what to do, and your intention stands.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: The Vault ── */}
      <section className={`${styles.section} ${styles.vaultSection}`}>
        <div className={styles.container}>
          <div className={styles.sectionHeaderCenter}>
            <h2 className={styles.sectionH2}>Your will documents the gift. Your Vault carries the meaning behind it.</h2>
            <p className={styles.sectionIntro}>
              A legal document can say who receives what. It cannot carry the story of why. The Vault lets you go further.
            </p>
          </div>

          <div className={styles.vaultGrid}>
            <div className={styles.vaultCardPremium}>
              <h3 className={styles.vaultItemTitle}>Your Charitable Designation, Secured</h3>
              <p className={styles.vaultItemDesc}>
                Your chosen charity, the amount or percentage, and any specific instructions are stored in your Vault — so your executor has clarity at the moment it matters most, alongside the rest of your estate records.
              </p>
            </div>
            <div className={styles.vaultCardPremium}>
              <h3 className={styles.vaultItemTitle}>A Message for Your Charity</h3>
              <p className={styles.vaultItemDesc}>
                Leave a private message for the organisation you have chosen to support — your reasons, your connection to their work, your hopes for what the gift will do. Delivered by your executor after you are gone.
              </p>
            </div>
            <div className={styles.vaultCardPremium}>
              <h3 className={styles.vaultItemTitle}>A Message for Your Family</h3>
              <p className={styles.vaultItemDesc}>
                Some families may not understand why you chose to give as generously as you did. A voice note or letter stored in your Vault gives you the chance to explain — in your own words, in your own time — before they ever need to read it.
              </p>
            </div>
          </div>

          <div className={styles.bridgeLine}>
            Your will makes the gift legal. Your Vault makes it personal.
          </div>

          <div className={styles.vaultCta}>
            <TrackedButton 
              href="/vault" 
              className={styles.ctaButtonOutlineLight}
              eventName="charity_vault_click" 
              eventParams={{ location: 'charitable_legacy_vault' }}
            >
              See What&apos;s in the Vault →
            </TrackedButton>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: Which Charities Can I Include? ── */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeaderCenter}>
            <h2 className={styles.sectionH2}>Your giving, your direction</h2>
            <p className={styles.sectionIntro} style={{ maxWidth: '800px', margin: '0 auto', marginBottom: '1.5rem' }}>
              Any registered charity, Islamic organisation, or charitable cause can be named in your bequest — as long as the gift falls within the permitted one third and is clearly documented. The Muslim Will does not restrict your choice of charity.
            </p>
            <p className={styles.sectionIntro} style={{ maxWidth: '800px', margin: '0 auto' }}>
              If you are connected to a charity or masjid that has partnered with The Muslim Will, your bequest can be structured to direct giving to their specific programmes — clearly documented, correctly positioned within your estate.
            </p>
          </div>

          <div className={styles.legalNotePremium} style={{ borderLeftColor: 'var(--color-gold)' }}>
            <strong>Are you a charity or mosque</strong> looking to help your community plan their estates and bequests? See our partnership programmes.
            <div style={{ marginTop: '1.5rem' }}>
              <Link href="/community/charity-partnership" className={styles.stepLink}>Explore Community &amp; Giving →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 5: Optional Expert Services ── */}
      <section className={`${styles.section} ${styles.expertServicesSection}`}>
        <div className={styles.container}>
          <div className={styles.sectionHeaderCenter}>
            <h2 className={styles.sectionH2}>When your situation calls for more</h2>
          </div>

          <div className={styles.grid2} style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <div className={styles.pricingCardSidePremium}>
              <div className={styles.pricingHeaderSide}>
                <h3 className={styles.pricingNamePremiumSide}>Scholar Review</h3>
                <div className={styles.pricingPricePremiumSide}>$49</div>
              </div>
              <p className={styles.pricingTaglinePremiumSide}>
                Recommended for charitable bequests that involve complex structures, Waqf designations, large percentages of the estate, or situations where the Islamic permissibility of a specific giving arrangement needs personal scholarly review.
              </p>
              <Link href="/about/our-scholars" className={styles.stepLink} style={{ marginTop: 'auto', paddingTop: '1.5rem', fontSize: '1rem' }}>Meet Our Scholars →</Link>
            </div>
            <div className={styles.pricingCardSidePremium}>
              <div className={styles.pricingHeaderSide}>
                <h3 className={styles.pricingNamePremiumSide}>Digital Attestation</h3>
                <div className={styles.pricingPricePremiumSide}>$149</div>
              </div>
              <p className={styles.pricingTaglinePremiumSide}>
                Your will — including the charitable bequest — formally witnessed and legally certified over a guided Zoom session with a paralegal and witnesses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 6: Complete Your Estate Plan (Cross-sell) ── */}
      <section className={`${styles.section} ${styles.crossSellSection}`}>
        <div className={styles.container}>
          <div className={styles.sectionHeaderCenter}>
            <h2 className={styles.sectionH2}>Your charitable legacy is part of your will — make sure the whole picture is in place.</h2>
            <p className={styles.sectionIntro}>
              A charitable bequest is a section of your Last Will &amp; Testament — not a standalone document. If you have not yet prepared your full Islamic will, this is the place to start.
            </p>
          </div>

          <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <div className={styles.crossSellCard}>
              <div className={styles.crossSellHeader}>
                <h3 className={styles.crossSellTitle}>Last Will &amp; Testament</h3>
                <div className={styles.crossSellPrice} style={{ fontSize: '1.25rem', color: 'var(--color-navy)' }}>Included in The Bridge</div>
              </div>
              <p className={styles.crossSellDesc}>
                Your complete Islamic will — built on Faraid inheritance principles, Ontario-compliant, and including your charitable bequest, guardianship, and executor appointment.
              </p>
              <Link href="/last-will" className={styles.crossSellLink}>Learn more →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 7: Final CTA ── */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaBox}>
            <h2>Your generosity deserves to outlast you.</h2>
            <p className={styles.ctaText}>
              A will is a trust we fulfil before Allah, and a mercy we leave for our families after us. Charitable giving is the part of that legacy that keeps giving — documented clearly, legally structured, and protected in your Vault until the moment it is needed.
            </p>
            
            <div className={styles.ctaActions}>
              <TrackedButton 
                href="https://app.themuslimwill.com/Account/Login" 
                className={styles.ctaButtonGoldFull}
                eventName="final_cta_click" 
                eventParams={{ location: 'charitable_legacy_final_cta' }}
              >
                Start My Application
              </TrackedButton>
              <TrackedButton 
                href="/pricing" 
                className={styles.ctaButtonOutlineLight}
                eventName="final_cta_pricing_click" 
                eventParams={{ location: 'charitable_legacy_final_cta' }}
              >
                See Pricing
              </TrackedButton>
              <TrackedButton 
                href="/how-it-works" 
                className={styles.ctaButtonOutlineLight}
                eventName="final_cta_howitworks_click" 
                eventParams={{ location: 'charitable_legacy_final_cta' }}
                style={{ borderColor: 'transparent' }}
              >
                How It Works
              </TrackedButton>
            </div>
            
            <p className={styles.ctaMicrocopy}>
              Charitable Legacy is built into every will prepared through The Bridge — from $5.99/month. Your giving is part of the plan from the start.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
