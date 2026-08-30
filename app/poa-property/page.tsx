import type { Metadata } from 'next';
import { TrustBar } from '@/components/ui/TrustBar';
import Link from 'next/link';
import { TrackedButton } from '@/components/analytics/TrackedButton';
import styles from './page.module.css';

const siteUrl = 'https://themuslimwill.com';
const pageTitle = 'Power of Attorney for Property | Ontario | The Muslim Will';
const pageDescription = 'Give a trusted person legal authority to manage your finances and property — a legally valid Power of Attorney for Property built for Muslim families in Ontario.';

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: `${siteUrl}/poa-property` },
};

export default function POAPropertyPage() {
  return (
    <div className={styles.main}>
      {/* ── HERO SECTION ── */}
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.heroEyebrow}>My Bridge › Power of Attorney for Property</div>
            <h1 className={styles.heroH1}>
              If you were incapacitated tomorrow, who has the legal authority to manage your finances, pay your bills, and protect what you have built?
            </h1>
            <p className={styles.heroSub}>
              A Power of Attorney for Property gives a trusted person the legal authority to manage your financial affairs and property on your behalf — if you are ever unable to do so yourself. Without one, your family may be unable to access accounts, pay your mortgage, or act on your behalf without a court order.
            </p>
          </div>
        </div>
      </section>

      {/* ── TRUST ANCHORS ── */}
      <TrustBar items={['Legally valid under Ontario law', 'Covers accounts, property, investments, and financial decisions', 'Appoint the person you trust to manage your wealth', 'Paired with your private Vault for financial instructions and asset details']} />

      {/* ── SECTION 1: What a POA Covers ── */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeaderCenter}>
            <h2 className={styles.sectionH2}>Financial authority when your family needs it most</h2>
            <p className={styles.sectionIntro}>
              A Power of Attorney for Property does not take effect when you die — your will handles that. It takes effect when you are alive but unable to manage your own financial affairs. That distinction matters more than most people realise.
            </p>
          </div>

          <div className={styles.grid4}>
            <div className={styles.featureCardPremium}>
              <div className={styles.featureIconWrapper}>🏦</div>
              <h3 className={styles.featureTitle}>Bank Accounts and Finances</h3>
              <p className={styles.featureDesc}>
                Your appointed person can access your accounts, manage day-to-day banking, pay bills, and ensure your household continues to function financially. Without this authority, even a spouse may face significant obstacles accessing joint or individual accounts during a medical emergency.
              </p>
            </div>
            <div className={styles.featureCardPremium}>
              <div className={styles.featureIconWrapper}>🏡</div>
              <h3 className={styles.featureTitle}>Property and Real Estate</h3>
              <p className={styles.featureDesc}>
                Your POA holder can manage, maintain, or make decisions about your property — including paying a mortgage, dealing with a landlord or tenant, or handling a property transaction if required.
              </p>
            </div>
            <div className={styles.featureCardPremium}>
              <div className={styles.featureIconWrapper}>📈</div>
              <h3 className={styles.featureTitle}>Investments and Assets</h3>
              <p className={styles.featureDesc}>
                Your POA holder can manage your investment accounts, respond to financial institutions, and take necessary steps to protect your portfolio — acting strictly within the scope you define in the document.
              </p>
            </div>
            <div className={styles.featureCardPremium}>
              <div className={styles.featureIconWrapper}>💼</div>
              <h3 className={styles.featureTitle}>Business Interests</h3>
              <p className={styles.featureDesc}>
                If you own or co-own a business, a POA for Property can ensure your interests are protected and your operational obligations can be met while you are unable to act.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: Why This Matters for Muslim Families ── */}
      <section className={styles.section} style={{ backgroundColor: 'var(--color-cream-light)' }}>
        <div className={styles.container}>
          <div className={styles.sectionHeaderCenter} style={{ maxWidth: '900px' }}>
            <h2 className={styles.sectionH2}>Wealth in Islam is an Amanah — a trust. Protect it with the right person.</h2>
            <div style={{ textAlign: 'left', marginTop: '2.5rem' }}>
              <p className={styles.sectionIntro} style={{ marginBottom: '1.5rem', color: 'var(--color-navy)' }}>
                In Islam, wealth is not yours alone — it carries obligations to your family, your creditors, and those who depend on you. If you are incapacitated and no one has legal authority to manage your finances, those obligations may go unmet through no fault of your own.
              </p>
              <p className={styles.sectionIntro} style={{ marginBottom: '1.5rem', color: 'var(--color-navy)' }}>
                A Power of Attorney for Property is the Islamic act of appointing a trusted steward — someone with the legal authority to protect what you have, fulfil your obligations, and manage your affairs according to your values and instructions.
              </p>
              <p className={styles.sectionIntro} style={{ color: 'var(--color-navy)' }}>
                It also protects your family from the painful and expensive process of applying to court for authority to manage your finances — a process that can take months, cost significantly, and create conflict at exactly the wrong moment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: The Vault ── */}
      <section className={`${styles.section} ${styles.vaultSection}`}>
        <div className={styles.container}>
          <div className={styles.sectionHeaderCenter}>
            <h2 className={styles.sectionH2}>Your POA gives them authority. Your Vault tells them where everything is.</h2>
            <p className={styles.sectionIntro}>
              A Power of Attorney gives your appointed person the legal right to act. But they still need to know where your accounts are, what your assets are, and what your instructions are for specific financial decisions. That is what the Vault is for.
            </p>
          </div>

          <div className={styles.vaultGrid}>
            <div className={styles.vaultCardPremium}>
              <h3 className={styles.vaultItemTitle}>Estate Inventory</h3>
              <p className={styles.vaultItemDesc}>
                Store a complete record of your accounts, assets, property, and financial holdings — so the person acting on your behalf can find everything they need without searching, guessing, or losing time during a crisis.
              </p>
              <Link href="/vault" className={styles.stepLink} style={{ marginTop: '1.5rem', fontSize: '1rem', color: 'var(--color-gold)' }}>Explore Estate Inventory →</Link>
            </div>
            <div className={styles.vaultCardPremium}>
              <h3 className={styles.vaultItemTitle}>Financial Instructions</h3>
              <p className={styles.vaultItemDesc}>
                Record specific guidance for your POA holder — which accounts to prioritise, how your business should be managed, what debts need attention, and any preferences that should guide their decisions.
              </p>
            </div>
            <div className={styles.vaultCardPremium}>
              <h3 className={styles.vaultItemTitle}>Obligations Register</h3>
              <p className={styles.vaultItemDesc}>
                Document the debts and financial obligations your estate will need to settle — so nothing is missed and no creditor is left without clarity. In Islam, unpaid debts are among the most serious matters to resolve.
              </p>
              <Link href="/vault" className={styles.stepLink} style={{ marginTop: '1.5rem', fontSize: '1rem', color: 'var(--color-gold)' }}>Explore Obligations Register →</Link>
            </div>
          </div>

          <div className={styles.bridgeLine}>
            The POA gives them the authority to act. The Vault gives them everything they need to act well.
          </div>

          <div className={styles.vaultCta}>
            <TrackedButton 
              href="/vault" 
              className={styles.ctaButtonOutlineLight}
              eventName="poa_vault_click" 
              eventParams={{ location: 'poa_property_vault' }}
            >
              See What&apos;s in the Vault →
            </TrackedButton>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: Legal Compliance ── */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeaderCenter}>
            <h2 className={styles.sectionH2}>Legally valid under Ontario law</h2>
            <p className={styles.sectionIntro} style={{ maxWidth: '800px', margin: '0 auto' }}>
              Your Power of Attorney for Property is structured to meet Ontario&apos;s legal requirements — including proper execution, the scope of authority granted, and the conditions under which it takes effect. It is not a generic template. It is prepared with the Canadian legal framework as the foundation.
            </p>
          </div>

          <div className={styles.legalNotePremium}>
            <strong>Note:</strong> Muslim Will is not a law firm. For complex situations — significant business interests, multiple properties, cross-border assets, or contested family arrangements — additional legal counsel may be appropriate.
            <div style={{ marginTop: '1.5rem' }}>
              <Link href="/legal-islamic-compliance" className={styles.stepLink}>Read our compliance framework →</Link>
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
                <h3 className={styles.pricingNamePremiumSide}>Admin &amp; Legal Review</h3>
                <div className={styles.pricingPricePremiumSide}>$49</div>
              </div>
              <p className={styles.pricingTaglinePremiumSide}>
                A closer review of your POA for Property — recommended for clients with multiple properties, business interests, investment portfolios, or cross-border financial considerations.
              </p>
            </div>
            <div className={styles.pricingCardSidePremium}>
              <div className={styles.pricingHeaderSide}>
                <h3 className={styles.pricingNamePremiumSide}>Digital Attestation</h3>
                <div className={styles.pricingPricePremiumSide}>$149</div>
              </div>
              <p className={styles.pricingTaglinePremiumSide}>
                Your POA formally witnessed and legally certified over a guided Zoom session with a paralegal and witnesses — for those who want or require official legal execution under Ontario law.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 6: Complete Your Estate Plan (Cross-sell) ── */}
      <section className={`${styles.section} ${styles.crossSellSection}`}>
        <div className={styles.container}>
          <div className={styles.sectionHeaderCenter}>
            <h2 className={styles.sectionH2}>Property is one half. Personal care decisions need protection too.</h2>
            <p className={styles.sectionIntro}>
              A Power of Attorney for Property covers your finances and assets. It does not cover healthcare or personal decisions. A Power of Attorney for Personal Care ensures someone trusted can make medical and personal decisions on your behalf if you are ever unable to.
            </p>
          </div>

          <div style={{ maxWidth: '600px', margin: '0 auto' }}>
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
          </div>

          <div className={styles.crossSellNote} style={{ maxWidth: '800px', margin: '3rem auto 0' }}>
            <strong>Note:</strong> Both Powers of Attorney are included in the Full Package ($350) alongside your Islamic Will, Scholar Review, Admin Review, and Digital Attestation — a combined value of $594.
          </div>
        </div>
      </section>

      {/* ── SECTION 7: Final CTA ── */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaBox}>
            <h2>The people who depend on you deserve more than uncertainty.</h2>
            <p className={styles.ctaText}>
              A Power of Attorney for Property is one of the simplest protections you can put in place — and one of the most consequential to leave missing. If your finances matter to your family, this document matters too.
            </p>
            
            <div className={styles.ctaActions}>
              <TrackedButton 
                href="https://app.themuslimwill.com/Account/Register" 
                className={styles.ctaButtonGoldFull}
                eventName="final_cta_click" 
                eventParams={{ location: 'poa_property_final_cta' }}
              >
                Start My Application
              </TrackedButton>
              <TrackedButton 
                href="/pricing" 
                className={styles.ctaButtonOutlineLight}
                eventName="final_cta_pricing_click" 
                eventParams={{ location: 'poa_property_final_cta' }}
              >
                See Pricing
              </TrackedButton>
              <TrackedButton 
                href="/how-it-works" 
                className={styles.ctaButtonOutlineLight}
                eventName="final_cta_howitworks_click" 
                eventParams={{ location: 'poa_property_final_cta' }}
                style={{ borderColor: 'transparent' }}
              >
                How It Works
              </TrackedButton>
            </div>
            
            <p className={styles.ctaMicrocopy}>
              POA for Property is $99 as a standalone — or included in the Full Package ($350) alongside your Islamic Will, both POAs, Scholar Review, Admin Review, and Digital Attestation.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
