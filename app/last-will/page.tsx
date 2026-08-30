import type { Metadata } from 'next';
import { TrustBar } from '@/components/ui/TrustBar';
import Link from 'next/link';
import { TrackedButton } from '@/components/analytics/TrackedButton';
import styles from './page.module.css';
import { PiCheckCircleLight } from 'react-icons/pi';

const siteUrl = 'https://themuslimwill.com';
const pageTitle = 'Islamic Will Ontario | Faraid-Based, Ontario Legal | The Muslim Will';
const pageDescription = 'Prepare an Islamic will in Ontario that reflects Faraid inheritance principles and meets Canadian legal requirements — through a guided application built for Muslim families.';

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: `${siteUrl}/last-will` },
};

export default function LastWillPage() {
  return (
    <div className={styles.main}>
      {/* ── HERO SECTION ── */}
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.heroEyebrow}>My Bridge › Last Will &amp; Testament</div>
            <h1 className={styles.heroH1}>
              Your will is an obligation before Allah — and a protection your family can rely on under Canadian law.
            </h1>
            <p className={styles.heroSub}>
              For many Muslim families, preparing a will is not rejected. It is delayed. The Muslim Will gives you a guided, Faraid-based will — structured to meet Ontario legal requirements and built around your family, your heirs, and your intentions.
            </p>
          </div>
        </div>
      </section>

      {/* ── TRUST ANCHORS ── */}
      <TrustBar items={['Built on Faraid Principles', 'Ontario Legal Compliance', 'Scholar Reviewed', 'Unlimited Updates']} />

      {/* ── SECTION 1: What Your Will Covers ── */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeaderCenter}>
            <h2 className={styles.sectionH2}>What goes into your Islamic will</h2>
            <p className={styles.sectionIntro}>
              Your will is not a generic template. It is built around your family, your assets, and the Islamic inheritance structure that applies to your situation.
            </p>
          </div>

          <div className={styles.grid4}>
            <div className={styles.featureCardPremium}>
              <div className={styles.featureIconWrapper}>⚖️</div>
              <h3 className={styles.featureTitle}>Islamic Inheritance (Faraid)</h3>
              <p className={styles.featureDesc}>
                Your estate is distributed according to the shares defined under Islamic inheritance law — calculated based on your heirs, your family structure, and the assets you leave behind. The platform guides you through this step by step.
              </p>
            </div>
            <div className={styles.featureCardPremium}>
              <div className={styles.featureIconWrapper}>👨‍👩‍👧‍👦</div>
              <h3 className={styles.featureTitle}>Guardianship</h3>
              <p className={styles.featureDesc}>
                If you have minor children, your will documents your preferences for who should care for them if you and your spouse are both unable to. This is one of the most important decisions a Muslim parent can make — and one of the clearest reasons to prepare a will now.
              </p>
            </div>
            <div className={styles.featureCardPremium}>
              <div className={styles.featureIconWrapper}>🌙</div>
              <h3 className={styles.featureTitle}>Charitable Bequest (up to 1/3)</h3>
              <p className={styles.featureDesc}>
                Islamic inheritance law allows you to direct up to one third of your estate to charitable causes of your choosing. Your will can include a Sadaqah Jariyah designation or a specific charity — documented clearly and built into the structure of your estate.
              </p>
              <Link href="/charitable-legacy" className={styles.stepLink} style={{ marginTop: '1.5rem', fontSize: '1rem' }}>Learn about Charitable Legacy →</Link>
            </div>
            <div className={styles.featureCardPremium}>
              <div className={styles.featureIconWrapper}>🤝</div>
              <h3 className={styles.featureTitle}>Executor Appointment</h3>
              <p className={styles.featureDesc}>
                You name a trusted person to carry out your instructions — to manage your estate, settle your debts, and ensure your wishes are followed. Your will makes their role clear and gives them the authority to act.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: Islamic and Legal Compliance ── */}
      <section className={`${styles.section} ${styles.complianceSection}`}>
        <div className={styles.container}>
          <div className={styles.sectionHeaderCenter}>
            <h2 className={styles.sectionH2}>Prepared for both worlds</h2>
            <p className={styles.sectionIntro}>
              An Islamic will in Canada must work within provincial legal rules while reflecting the inheritance intentions of the person creating it. These two things are not in conflict — but they do need to be handled together, not separately.
            </p>
          </div>

          <div className={styles.grid2}>
            <div className={styles.complianceBlock}>
              <div className={styles.complianceHeaderArea}>
                <div className={styles.complianceIcon}>☪️</div>
                <h3 className={styles.complianceTitle}>Islamic Structure</h3>
              </div>
              <p className={styles.complianceDesc}>
                Your will is built around the Faraid inheritance framework — the shares defined under Islamic law for each category of heir. The platform calculates this based on your specific family and estate, and your document reflects those shares clearly.
              </p>
            </div>
            <div className={styles.complianceBlock}>
              <div className={styles.complianceHeaderArea}>
                <div className={styles.complianceIcon}>🍁</div>
                <h3 className={styles.complianceTitle}>Ontario Legal Compliance</h3>
              </div>
              <p className={styles.complianceDesc}>
                Your will is structured to meet Ontario&apos;s legal requirements for a valid testamentary document — including proper execution, witnessing, and the correct treatment of assets under provincial law. The document is not a generic form. It is prepared with the Canadian legal framework as a foundation.
              </p>
              <Link href="/legal-islamic-compliance" className={styles.stepLink} style={{ marginTop: '1.5rem', fontSize: '1rem' }}>Read our compliance framework →</Link>
            </div>
          </div>

          <div className={styles.legalNotePremium}>
            Muslim Will is not a law firm. It is a structured estate planning platform that brings Islamic inheritance principles and the Canadian legal framework together in one guided process. Legal validity depends on accurate information, correct signing, and proper witnessing.
          </div>
        </div>
      </section>

      {/* ── SECTION 3: The Vault ── */}
      <section className={`${styles.section} ${styles.vaultSection}`}>
        <div className={styles.container}>
          <div className={styles.sectionHeaderCenter}>
            <h2 className={styles.sectionH2}>Your will is not a document you file and forget.</h2>
            <p className={styles.sectionIntro}>
              Most wills are signed once, stored in a drawer, and never touched again — until the moment they are needed most, when they are often out of date, incomplete, or impossible to find. The Bridge changes that.
              <br/><br/>
              Your will lives inside your private Vault — secured, up to date, and paired with everything your family will need when the time comes.
            </p>
          </div>

          <div className={styles.vaultGrid}>
            <div className={styles.vaultCardPremium}>
              <h3 className={styles.vaultItemTitle}>Always up to date</h3>
              <p className={styles.vaultItemDesc}>
                Life changes. A new child, a new asset, a change in your family structure. Your will can be updated any time, as many times as you need. No new fees. No starting over. Your document reflects your life as it actually is.
              </p>
            </div>
            <div className={styles.vaultCardPremium}>
              <h3 className={styles.vaultItemTitle}>Secured and released at the right moment</h3>
              <p className={styles.vaultItemDesc}>
                Your will is held privately inside your Vault — not in a drawer, not on a shared drive. When the time comes, your executor is given access through a verified release process. Your wishes reach the right people, in the right order.
              </p>
            </div>
            <div className={styles.vaultCardPremium}>
              <h3 className={styles.vaultItemTitle}>Leave more than a document</h3>
              <p className={styles.vaultItemDesc}>
                The Vault lets you go beyond the written page. Record a voice note or a video message for the people you love — delivered privately after you are gone. A message for your spouse. A message for your children. Words that no written will could carry.
              </p>
            </div>
          </div>

          <div className={styles.bridgeLine}>
            The will documents your intentions. The Vault protects them, keeps them current, and makes sure they reach the people who need them.
          </div>

          <div className={styles.vaultCta}>
            <TrackedButton 
              href="/#included" 
              className={styles.ctaButtonOutlineLight}
              eventName="vault_click" 
              eventParams={{ location: 'last_will_vault_section' }}
            >
              See What&apos;s in the Vault
            </TrackedButton>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: Optional Expert Services ── */}
      <section className={`${styles.section} ${styles.expertServicesSection}`}>
        <div className={styles.container}>
          <div className={styles.sectionHeaderCenter}>
            <h2 className={styles.sectionH2}>When your situation calls for more</h2>
            <p className={styles.sectionIntro}>
              Some estates are more complex. Some families want an individual expert to personally review their case. These optional services are available whenever you need them.
            </p>
          </div>

          <div className={styles.grid3}>
            <div className={styles.pricingCardSidePremium}>
              <div className={styles.pricingHeaderSide}>
                <h3 className={styles.pricingNamePremiumSide}>Scholar Review</h3>
                <div className={styles.pricingPricePremiumSide}>$49</div>
              </div>
              <p className={styles.pricingTaglinePremiumSide}>
                A qualified Islamic scholar personally reviews your inheritance calculation — for large estates, unusual asset structures, or complex family situations that go beyond the standard Faraid framework.
              </p>
              <Link href="/about/our-scholars" className={styles.stepLink} style={{ marginTop: 'auto', paddingTop: '1.5rem', fontSize: '1rem' }}>Meet Our Scholars →</Link>
            </div>
            <div className={styles.pricingCardSidePremium}>
              <div className={styles.pricingHeaderSide}>
                <h3 className={styles.pricingNamePremiumSide}>Admin &amp; Legal Review</h3>
                <div className={styles.pricingPricePremiumSide}>$49</div>
              </div>
              <p className={styles.pricingTaglinePremiumSide}>
                A closer legal review of your document — for clients with multiple properties, business assets, international holdings, or cross-border considerations.
              </p>
            </div>
            <div className={styles.pricingCardSidePremium}>
              <div className={styles.pricingHeaderSide}>
                <h3 className={styles.pricingNamePremiumSide}>Digital Attestation</h3>
                <div className={styles.pricingPricePremiumSide}>$149</div>
              </div>
              <p className={styles.pricingTaglinePremiumSide}>
                Your will formally witnessed and legally certified over a guided Zoom session with a paralegal and witnesses — for those who want or require official legal execution under Ontario law.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 5: How It Works ── */}
      <section className={`${styles.section} ${styles.howItWorksSection}`}>
        <div className={styles.container}>
          <div className={styles.sectionHeaderCenter}>
            <h2 className={styles.sectionH2}>From your details to a signed document</h2>
          </div>

          <div className={styles.stepGrid}>
            <div className={styles.stepCard}>
              <div className={styles.stepNumber}>1</div>
              <h3 className={styles.stepTitle}>Complete the application</h3>
              <p className={styles.stepDesc}>family details, assets, heirs, guardianship, and charitable intentions</p>
            </div>
            <div className={styles.stepCard}>
              <div className={styles.stepNumber}>2</div>
              <h3 className={styles.stepTitle}>Faraid is calculated</h3>
              <p className={styles.stepDesc}>the platform structures your inheritance shares based on Islamic law</p>
            </div>
            <div className={styles.stepCard}>
              <div className={styles.stepNumber}>3</div>
              <h3 className={styles.stepTitle}>Your document is prepared</h3>
              <p className={styles.stepDesc}>structured to meet Ontario legal requirements</p>
            </div>
            <div className={styles.stepCard}>
              <div className={styles.stepNumber}>4</div>
              <h3 className={styles.stepTitle}>Review, sign, and witness</h3>
              <p className={styles.stepDesc}>your will is complete when correctly executed</p>
            </div>
          </div>

          <Link href="/how-it-works" className={styles.stepLink}>
            See the full process →
          </Link>
        </div>
      </section>

      {/* ── SECTION 6: Complete Your Estate Plan (Cross-sell) ── */}
      <section className={`${styles.section} ${styles.crossSellSection}`}>
        <div className={styles.container}>
          <div className={styles.sectionHeaderCenter}>
            <h2 className={styles.sectionH2}>A will is the foundation. Powers of Attorney protect you while you are still here.</h2>
            <p className={styles.sectionIntro}>
              Your will takes effect after you are gone. But what if you are incapacitated — unable to speak, unable to manage your finances? A Power of Attorney ensures the right person can act on your behalf while you are still alive.
            </p>
          </div>

          <div className={styles.grid2}>
            <div className={styles.crossSellCard}>
              <div className={styles.crossSellHeader}>
                <h3 className={styles.crossSellTitle}>Power of Attorney for Personal Care</h3>
                <div className={styles.crossSellPrice}>$99</div>
              </div>
              <p className={styles.crossSellDesc}>
                Designates a trusted person to make healthcare and personal decisions on your behalf if you are ever unable to do so yourself.
              </p>
              <Link href="/poa-personal" className={styles.crossSellLink}>Learn more →</Link>
            </div>

            <div className={styles.crossSellCard}>
              <div className={styles.crossSellHeader}>
                <h3 className={styles.crossSellTitle}>Power of Attorney for Property</h3>
                <div className={styles.crossSellPrice}>$99</div>
              </div>
              <p className={styles.crossSellDesc}>
                Authorises a trusted person to manage your financial affairs and property if you become incapacitated or are otherwise unable to act.
              </p>
              <Link href="/poa-property" className={styles.crossSellLink}>Learn more →</Link>
            </div>
          </div>

          <div className={styles.crossSellNote}>
            <strong>Note:</strong> Both POAs are included in the Full Package ($350) alongside your will, Scholar Review, Admin Review, and Digital Attestation — a combined value of $594.
          </div>
        </div>
      </section>

      {/* ── SECTION 7: Final CTA ── */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaBox}>
            <h2>Your will is one of the most important things you will ever prepare.</h2>
            <p className={styles.ctaText}>
              It is also one of the most deferred. If you have been meaning to do this, this is the place to start — guided, clear, and built for Muslim families in Canada.
            </p>
            
            <div className={styles.ctaActions}>
              <TrackedButton 
                href="https://app.themuslimwill.com/Account/Register" 
                className={styles.ctaButtonGoldFull}
                eventName="final_cta_click" 
                eventParams={{ location: 'last_will_final_cta' }}
              >
                Start My Application
              </TrackedButton>
              <TrackedButton 
                href="/pricing" 
                className={styles.ctaButtonOutlineLight}
                eventName="final_cta_pricing_click" 
                eventParams={{ location: 'last_will_final_cta' }}
              >
                See Pricing
              </TrackedButton>
            </div>
            
            <p className={styles.ctaMicrocopy}>
              The Last Will &amp; Testament is $149 as a standalone — or included in The Bridge from $7.99/month. Full access, unlimited updates, private Vault included.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
