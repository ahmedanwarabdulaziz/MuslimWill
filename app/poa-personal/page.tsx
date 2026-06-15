import type { Metadata } from 'next';
import { TrustBar } from '@/components/ui/TrustBar';
import Link from 'next/link';
import { TrackedButton } from '@/components/analytics/TrackedButton';
import styles from './page.module.css';

const siteUrl = 'https://themuslimwill.com';
const pageTitle = 'Power of Attorney for Personal Care | Ontario | The Muslim Will';
const pageDescription = 'Designate a trusted person to make healthcare and personal decisions on your behalf — a legally valid Power of Attorney for Personal Care built for Muslim families in Ontario.';

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: `${siteUrl}/poa-personal` },
};

export default function POAPersonalPage() {
  return (
    <div className={styles.main}>
      {/* ── HERO SECTION ── */}
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.heroEyebrow}>My Bridge › Power of Attorney for Personal Care</div>
            <h1 className={styles.heroH1}>
              If you could not speak for yourself today, who would make decisions on your behalf?
            </h1>
            <p className={styles.heroSub}>
              A Power of Attorney for Personal Care gives a trusted person the legal authority to make healthcare and personal decisions on your behalf — if you are ever unable to do so yourself. Without one, that authority may fall to people you would not have chosen, or to no one at all.
            </p>
          </div>
        </div>
      </section>

      {/* ── TRUST ANCHORS ── */}
      <TrustBar items={['Legally valid under Ontario law', 'Appoint the person you trust most', 'Covers healthcare, personal care, and living decisions', 'Paired with your private Vault for incapacity instructions']} />

      {/* ── SECTION 1: What a POA Covers ── */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeaderCenter}>
            <h2 className={styles.sectionH2}>The decisions no one should have to guess at</h2>
            <p className={styles.sectionIntro}>
              A Power of Attorney for Personal Care is not only for the elderly. It is for every adult who has a family that depends on them — and who has opinions about how they want to be cared for.
            </p>
          </div>

          <div className={styles.grid4}>
            <div className={styles.featureCardPremium}>
              <div className={styles.featureIconWrapper}>⚕️</div>
              <h3 className={styles.featureTitle}>Healthcare Decisions</h3>
              <p className={styles.featureDesc}>
                Who can authorise or decline medical treatment on your behalf. Who can speak to doctors, review your records, and make decisions when you cannot. Without a POA, hospitals may turn to next of kin in an order you did not choose — or to a government-appointed guardian.
              </p>
            </div>
            <div className={styles.featureCardPremium}>
              <div className={styles.featureIconWrapper}>🍽️</div>
              <h3 className={styles.featureTitle}>Personal Care</h3>
              <p className={styles.featureDesc}>
                Decisions about where you live, what you eat, your daily routine, and how you are cared for if you cannot manage these independently. Your POA holder acts on your instructions — not their assumptions.
              </p>
            </div>
            <div className={styles.featureCardPremium}>
              <div className={styles.featureIconWrapper}>🏠</div>
              <h3 className={styles.featureTitle}>Living Arrangements</h3>
              <p className={styles.featureDesc}>
                If you cannot return home after an illness or accident, your POA holder can make decisions about where you are cared for — a decision that should belong to someone who knows your values, your preferences, and your faith.
              </p>
            </div>
            <div className={styles.featureCardPremium}>
              <div className={styles.featureIconWrapper}>🤲</div>
              <h3 className={styles.featureTitle}>End-of-Life Preferences</h3>
              <p className={styles.featureDesc}>
                Your beliefs about treatment, resuscitation, and end-of-life care can be documented and communicated through your POA. This is especially important for Muslim families, where faith-specific preferences around medical intervention and final care should be known and respected.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: Why This Matters for Muslim Families ── */}
      <section className={styles.section} style={{ backgroundColor: 'var(--color-cream-light)' }}>
        <div className={styles.container}>
          <div className={styles.sectionHeaderCenter} style={{ maxWidth: '900px' }}>
            <h2 className={styles.sectionH2}>Your faith shapes how you want to be treated. Document it.</h2>
            <div style={{ textAlign: 'left', marginTop: '2.5rem' }}>
              <p className={styles.sectionIntro} style={{ marginBottom: '1.5rem', color: 'var(--color-navy)' }}>
                Islamic values around medical care, end-of-life treatment, and personal dignity are specific and important. A generic next-of-kin arrangement may not reflect them. A properly appointed POA holder — someone who knows your values and has clear written instructions — ensures your wishes are followed even when you cannot express them.
              </p>
              <p className={styles.sectionIntro} style={{ color: 'var(--color-navy)' }}>
                The question of who should make medical decisions for you is also not always straightforward within a family. A POA lets you choose clearly and privately — without leaving that weight on the people you love.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: The Vault ── */}
      <section className={`${styles.section} ${styles.vaultSection}`}>
        <div className={styles.container}>
          <div className={styles.sectionHeaderCenter}>
            <h2 className={styles.sectionH2}>A POA names who decides. Your Vault tells them what you want.</h2>
            <p className={styles.sectionIntro}>
              A Power of Attorney gives legal authority. But the person you appoint still needs to know what you actually want — your medical preferences, your values, your private instructions for specific situations. That is what the Vault is for.
            </p>
          </div>

          <div className={styles.vaultGrid}>
            <div className={styles.vaultCardPremium}>
              <h3 className={styles.vaultItemTitle}>Private Incapacity Instructions</h3>
              <p className={styles.vaultItemDesc}>
                Store written instructions for your POA holder — the decisions you have already made, so they do not have to guess. Who should be contacted. Which hospital you prefer. What treatments align with your values. What you do not want.
              </p>
            </div>
            <div className={styles.vaultCardPremium}>
              <h3 className={styles.vaultItemTitle}>Sensitive Guidance You Cannot Say Out Loud</h3>
              <p className={styles.vaultItemDesc}>
                Some instructions are too difficult to discuss while healthy — who you trust to make which decisions, private family preferences, medical wishes that might cause conflict if shared too early. The Vault holds them securely and releases them only when the situation requires it.
              </p>
            </div>
            <div className={styles.vaultCardPremium}>
              <h3 className={styles.vaultItemTitle}>Voice and Video Messages</h3>
              <p className={styles.vaultItemDesc}>
                Leave a personal message for your POA holder — not just instructions, but your voice, your words, your reasons. So when the moment comes, the person acting on your behalf knows exactly who they are acting for.
              </p>
            </div>
          </div>

          <div className={styles.bridgeLine}>
            The POA gives them the authority. The Vault gives them the clarity to use it well.
          </div>

          <div className={styles.vaultCta}>
            <TrackedButton 
              href="/#included" 
              className={styles.ctaButtonOutlineLight}
              eventName="poa_vault_click" 
              eventParams={{ location: 'poa_personal_vault' }}
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
              Your Power of Attorney for Personal Care is structured to meet Ontario&apos;s legal requirements — including proper execution, witnessing, and the scope of authority granted. It is not a generic form. It is prepared with the Canadian legal framework as the foundation.
            </p>
          </div>

          <div className={styles.legalNotePremium}>
            <strong>Note:</strong> Muslim Will is not a law firm. For complex personal care situations — significant medical conditions, contested family arrangements, or cross-provincial considerations — additional legal counsel may be appropriate.
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
                A closer review of your POA document — for situations involving complex family arrangements, significant medical history, or where the scope of authority needs careful consideration.
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
            <h2 className={styles.sectionH2}>Personal care is one half. Your property needs protection too.</h2>
            <p className={styles.sectionIntro}>
              A Power of Attorney for Personal Care covers healthcare and personal decisions. It does not cover your finances or property. If you become incapacitated, a separate Power of Attorney for Property ensures someone trusted can manage your accounts, pay your bills, and protect your assets.
            </p>
          </div>

          <div style={{ maxWidth: '600px', margin: '0 auto' }}>
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

          <div className={styles.crossSellNote} style={{ maxWidth: '800px', margin: '3rem auto 0' }}>
            <strong>Note:</strong> Both Powers of Attorney are included in the Full Package ($350) alongside your Islamic Will, Scholar Review, Admin Review, and Digital Attestation — a combined value of $594.
          </div>
        </div>
      </section>

      {/* ── SECTION 7: Final CTA ── */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaBox}>
            <h2>The people who love you should not have to guess what you want.</h2>
            <p className={styles.ctaText}>
              A Power of Attorney for Personal Care is one of the clearest acts of care you can give your family. It takes the weight of impossible decisions off the people who are already carrying enough.
            </p>
            
            <div className={styles.ctaActions}>
              <TrackedButton 
                href="https://app.themuslimwill.com/Account/Login" 
                className={styles.ctaButtonGoldFull}
                eventName="final_cta_click" 
                eventParams={{ location: 'poa_personal_final_cta' }}
              >
                Start My Application
              </TrackedButton>
              <TrackedButton 
                href="/pricing" 
                className={styles.ctaButtonOutlineLight}
                eventName="final_cta_pricing_click" 
                eventParams={{ location: 'poa_personal_final_cta' }}
              >
                See Pricing
              </TrackedButton>
            </div>
            
            <p className={styles.ctaMicrocopy}>
              POA for Personal Care is $99 as a standalone — or included in the Full Package ($350) alongside your Islamic Will, both POAs, Scholar Review, Admin Review, and Digital Attestation.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
