import type { Metadata } from 'next';
import { TrustBar } from '@/components/ui/TrustBar';
import Link from 'next/link';
import { TrackedButton } from '@/components/analytics/TrackedButton';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'My Bridge | Islamic Will Documents | The Muslim Will',
  description: 'Your Islamic will, charitable legacy, and Powers of Attorney — the complete set of documents that protect your family, built for Muslim families in Canada.',
  alternates: { canonical: 'https://themuslimwill.com/my-bridge' },
};

export default function MyBridgeOverview() {
  return (
    <div className={styles.main}>
      {/* 1. Hero Section */}
      <section className={`${styles.section} ${styles.heroSection}`}>
        <div className={styles.container}>
          <div className={styles.heroEyebrow}>My Bridge</div>
          <h1 className={styles.heroH1}>
            The documents your family will depend on — starting with your will.
          </h1>
          <p className={styles.heroIntro}>
            Your Islamic will is the foundation. It defines how your estate is distributed, who raises your children, and how your charitable intentions are fulfilled. For specific situations, Powers of Attorney extend that protection to cover you while you are still alive.
          </p>
          
        </div>
      </section>

      {/* ── TRUST ANCHORS ── */}
      <TrustBar items={['Islamic will included in The Bridge — from $7.99/month', 'Faraid-based, Ontario-compliant', 'Powers of Attorney available for specific situations']} />

      {/* 2. The documents */}
      <section className={`${styles.section} ${styles.grayBg}`}>
        <div className={styles.container}>
          <div className={styles.sectionLabel}>Your Documents</div>
          <h2 className={styles.sectionH2}>Four documents. Everything covered.</h2>
          
          <div className={styles.grid4}>
            {/* Card 1 */}
            <div className={`${styles.docCard} ${styles.docCardIncluded}`}>
              <div className={styles.cardHeader}>
                <div className={styles.docIcon}>📋</div>
                <div className={`${styles.badge} ${styles.badgeIncluded}`}>✓ Included in The Bridge</div>
              </div>
              <h3 className={styles.docTitle}>Last Will & Testament</h3>
              <p className={styles.docDesc}>
                Your Islamic will — built on Faraid inheritance principles, compliant with Canadian law. Covers who inherits, in what shares, who raises your children, and who manages your estate.
              </p>
              <Link href="/last-will" className={`${styles.docLink} ${styles.linkIncluded}`}>
                View Last Will &rarr;
              </Link>
            </div>
            
            {/* Card 2 */}
            <div className={`${styles.docCard} ${styles.docCardIncluded}`}>
              <div className={styles.cardHeader}>
                <div className={styles.docIcon}>🌙</div>
                <div className={`${styles.badge} ${styles.badgeIncluded}`}>✓ Included in The Bridge</div>
              </div>
              <h3 className={styles.docTitle}>Charitable Legacy</h3>
              <p className={styles.docDesc}>
                Document your charitable intentions as a structured bequest in your will — Sadaqah Jariyah, Waqf, or a named cause. Built into your will within the Islamic 1/3 rule.
              </p>
              <Link href="/charitable-legacy" className={`${styles.docLink} ${styles.linkIncluded}`}>
                View Charitable Legacy &rarr;
              </Link>
            </div>
            
            {/* Card 3 */}
            <div className={`${styles.docCard} ${styles.docCardAddon}`}>
              <div className={styles.cardHeader}>
                <div className={styles.docIcon}>🛡️</div>
                <div className={`${styles.badge} ${styles.badgeAddon}`}>Available as add-on</div>
              </div>
              <h3 className={styles.docTitle}>Power of Attorney for Personal Care</h3>
              <p className={styles.docDesc}>
                Designate someone to make healthcare and personal decisions on your behalf if you cannot. Who should approve medical treatment? Where should you live? What care do you want? Without this document, the courts decide.
              </p>
              <Link href="/poa-personal" className={`${styles.docLink} ${styles.linkAddon}`}>
                View POA Personal Care &rarr;
              </Link>
            </div>
            
            {/* Card 4 */}
            <div className={`${styles.docCard} ${styles.docCardAddon}`}>
              <div className={styles.cardHeader}>
                <div className={styles.docIcon}>🏠</div>
                <div className={`${styles.badge} ${styles.badgeAddon}`}>Available as add-on</div>
              </div>
              <h3 className={styles.docTitle}>Power of Attorney for Property</h3>
              <p className={styles.docDesc}>
                Appoint someone to manage your finances and property if you become incapacitated. Bank accounts, investments, real estate, bill payments — all handled by someone you trust, within the boundaries you set.
              </p>
              <Link href="/poa-property" className={`${styles.docLink} ${styles.linkAddon}`}>
                View POA Property &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. POA framing (short callout block) */}
      <section className={`${styles.section} ${styles.poaSection}`}>
        <div className={styles.containerNarrow}>
          <h3 className={styles.poaH3}>Do I need a Power of Attorney?</h3>
          <div className={styles.poaBody}>
            <p>
              For most Muslim families, The Bridge covers everything that matters — your will, your estate instructions, your Vault. Powers of Attorney are separate legal documents for a different scenario: what happens if you cannot speak for yourself while you are still alive.
            </p>
            <p>
              If you have dependants, significant assets, or a complex family situation — or if you simply want complete coverage — adding one or both POAs is worth considering. They are available as add-ons at $99 each, or both are included in the Full Package.
            </p>
          </div>
          <Link href="/pricing" className={styles.poaLink}>
            See the Full Package &rarr;
          </Link>
        </div>
      </section>

      {/* 4. CTA */}
      <section className={`${styles.section} ${styles.ctaSection}`}>
        <div className={styles.containerNarrow}>
          <h2 className={styles.sectionH2}>Your will is where it starts.</h2>
          <p className={styles.ctaBody}>
            The Bridge gives you a complete Islamic will and a private Vault — reviewed by verified scholars and compliant with Canadian law. Start today and update any time.
          </p>
          
          <div className={styles.ctaActions}>
            <TrackedButton href="https://app.themuslimwill.com/Account/Login" className={styles.primaryBtn} eventName="my_bridge_start_click" eventParams={{ location: 'my_bridge_cta' }}>
              Start For $7.99/month &rarr;
            </TrackedButton>
            <TrackedButton href="/pricing" className={styles.secondaryBtn} eventName="my_bridge_pricing_click" eventParams={{ location: 'my_bridge_cta' }}>
              See Pricing &rarr;
            </TrackedButton>
          </div>
          <div className={styles.ctaMicro}>
            Free to register. Full access from $7.99/month. Cancel anytime.
          </div>
        </div>
      </section>
    </div>
  );
}
