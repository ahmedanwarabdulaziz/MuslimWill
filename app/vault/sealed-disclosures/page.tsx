import type { Metadata } from 'next';
import { TrustBar } from '@/components/ui/TrustBar';
import Link from 'next/link';
import { TrackedButton } from '@/components/analytics/TrackedButton';
import styles from './page.module.css';

const siteUrl = 'https://themuslimwill.com';
const pageTitle = 'Sealed Disclosures | Private Documents Released After Death | The Muslim Will';
const pageDescription = 'Store sensitive documents and private disclosures in your Vault — assigned to specific recipients and released only after your passing, with a full audit trail.';

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: `${siteUrl}/vault/sealed-disclosures` },
};

export default function SealedDisclosuresPage() {
  return (
    <div className={styles.main}>
      {/* ── HERO SECTION ── */}
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.heroEyebrow}>My Vault › Sealed Disclosures</div>
            <h1 className={styles.heroH1}>
              Some things can only be said at the right moment — to the right person.
            </h1>
            <p className={styles.heroSub}>
              Not everything should be known while you are alive. Some documents, some disclosures, some private arrangements belong only to the person you have chosen — and only at the moment you have decided. Sealed Disclosures lets you hold them securely and release them with precision, long after you are gone.
            </p>
          </div>
        </div>
      </section>

      {/* ── TRUST ANCHORS ── */}
      <TrustBar items={['Each disclosure assigned to a specific recipient — not shared broadly', 'Released only after your passing is verified', 'Full audit trail — who accessed what, and when', 'Encrypted and held privately — inaccessible to anyone until the moment arrives']} />

      {/* ── SECTION 1: What Sealed Disclosures Are For ── */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeaderCenter}>
            <h2 className={styles.sectionH2}>The things that are too important to leave to chance — and too private to share too soon</h2>
            <p className={styles.sectionIntro}>
              Some information carries weight that most people never speak about openly. A private arrangement with a business partner. A document that affects one child but not the others. A matter between you and one specific person that should never become a family conversation. A disclosure that would cause harm if revealed at the wrong time — but that must be known at the right one.
            </p>
          </div>

          <div className={styles.grid3}>
            <div className={styles.featureCardPremium}>
              <div className={styles.featureIconWrapper}>📄</div>
              <h3 className={styles.featureTitle}>Private Documents for Specific Recipients</h3>
              <p className={styles.featureDesc}>
                Legal documents, contracts, signed agreements, or personal papers that belong to one person and no one else — delivered directly to them after your passing, without passing through the broader estate.
              </p>
            </div>
            <div className={styles.featureCardPremium}>
              <div className={styles.featureIconWrapper}>🤝</div>
              <h3 className={styles.featureTitle}>Personal Arrangements and Private Matters</h3>
              <p className={styles.featureDesc}>
                Some arrangements are made privately — financial understandings, personal commitments, matters between two people that were never meant to be public. A Sealed Disclosure ensures they reach the right person in a dignified, controlled way.
              </p>
            </div>
            <div className={styles.featureCardPremium}>
              <div className={styles.featureIconWrapper}>👨‍👩‍👧‍👦</div>
              <h3 className={styles.featureTitle}>Sensitive Family Information</h3>
              <p className={styles.featureDesc}>
                Information that could cause conflict if shared too broadly — or that one family member needs to know while others do not. A Sealed Disclosure lets you choose exactly who receives what, without forcing everything into a single conversation.
              </p>
            </div>
            <div className={styles.featureCardPremium}>
              <div className={styles.featureIconWrapper}>🤲</div>
              <h3 className={styles.featureTitle}>Religious and Personal Confessions</h3>
              <p className={styles.featureDesc}>
                Private matters between you and Allah that others may need to act on — unfulfilled obligations, private commitments, matters of conscience that you want addressed after your passing but never discussed while you were alive.
              </p>
            </div>
            <div className={styles.featureCardPremium}>
              <div className={styles.featureIconWrapper}>🔒</div>
              <h3 className={styles.featureTitle}>Documents That Protect a Specific Person</h3>
              <p className={styles.featureDesc}>
                A document that safeguards one person&apos;s interest — an acknowledgement of a debt, a private letter of instruction, a record that one specific person may need to protect their rights. Held securely, released only to them.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: The Islamic Principle ── */}
      <section className={styles.section} style={{ backgroundColor: 'var(--color-cream-light)' }}>
        <div className={styles.container}>
          <div className={styles.sectionHeaderCenter} style={{ maxWidth: '900px' }}>
            <h2 className={styles.sectionH2}>Privacy is an Islamic value. So is ensuring the right people know what they need to know.</h2>
            <div style={{ textAlign: 'left', marginTop: '2.5rem' }}>
              <p className={styles.sectionIntro} style={{ marginBottom: '1.5rem', color: 'var(--color-navy)' }}>
                Islam places a high value on Sitr — covering what does not need to be shared. Private matters between people, personal failures, sensitive family dynamics — these are not for general disclosure. They belong between the people they concern.
              </p>
              <p className={styles.sectionIntro} style={{ marginBottom: '1.5rem', color: 'var(--color-navy)' }}>
                At the same time, there are matters that must be known when the time comes — obligations that need to be fulfilled, rights that need to be protected, disclosures that only one person should receive. The question is not whether to disclose, but how and when.
              </p>
              <p className={styles.sectionIntro} style={{ color: 'var(--color-navy)' }}>
                Sealed Disclosures honours both of these principles. Your private matters stay private. The right person receives what they need. Everything else remains closed.
              </p>
            </div>
          </div>

          <div className={styles.sitrPill}>
            <span className={styles.sitrLabel}>Sitr</span>
            <span className={styles.sitrText}>The Islamic principle of protecting what is private — covering what does not need to be seen</span>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: How It Works in the Vault ── */}
      <section className={`${styles.section} ${styles.vaultSection}`}>
        <div className={styles.container}>
          <div className={styles.sectionHeaderCenter}>
            <h2 className={styles.sectionH2}>Held securely. Released precisely.</h2>
            <p className={styles.sectionIntro}>
              Every sealed disclosure is encrypted and stored in your Vault — inaccessible to everyone until your passing is verified and the release process is triggered.
            </p>
          </div>

          <div className={styles.vaultGrid}>
            <div className={styles.vaultCardPremium}>
              <h3 className={styles.vaultItemTitle}>You seal it privately</h3>
              <p className={styles.vaultItemDesc}>
                Upload a document, write a disclosure, or record a private instruction. Assign it to a specific recipient — one person, by name. Set any conditions or notes for your executor. No one else can see it.
              </p>
            </div>
            <div className={styles.vaultCardPremium}>
              <h3 className={styles.vaultItemTitle}>It is held until the moment arrives</h3>
              <p className={styles.vaultItemDesc}>
                Your sealed disclosure is encrypted and stored in your Vault. It is inaccessible to everyone — including your family, your executor, and anyone else — until your passing is verified and the release process is triggered.
              </p>
            </div>
            <div className={styles.vaultCardPremium}>
              <h3 className={styles.vaultItemTitle}>It reaches the right person — and only them</h3>
              <p className={styles.vaultItemDesc}>
                Your executor is instructed to deliver the disclosure to the designated recipient. Every access event is logged with a timestamp — who opened what, when, and from where. If a disclosure is opened by anyone other than the intended recipient, that event is recorded and flagged.
              </p>
            </div>
          </div>

          <div className={styles.trustNote}>
            The audit trail is not there to create suspicion. It is there to create accountability — so that the trust your family places in the process is backed by a visible record of how that trust was kept.
          </div>
        </div>
      </section>

      {/* ── SECTION 4: What This Is Not ── */}
      <section className={`${styles.section} ${styles.boundariesSection}`}>
        <div className={styles.container}>
          <div className={styles.sectionHeaderCenter} style={{ maxWidth: '900px' }}>
            <h2 className={styles.sectionH2}>A few important boundaries</h2>
            <div style={{ textAlign: 'left', marginTop: '2.5rem' }}>
              <p className={styles.sectionIntro} style={{ marginBottom: '1.5rem', color: 'var(--color-navy)' }}>
                Sealed Disclosures are private records stored in your Vault — they are not legal amendments to your will. If a disclosure contains information that affects your estate distribution, that information should be reflected in your will itself, not only in a sealed document.
              </p>
              <p className={styles.sectionIntro} style={{ color: 'var(--color-navy)' }}>
                If you are unsure whether a specific disclosure should be part of your will or held separately, the Scholar Review or Admin Review add-on can help you think through the right approach.
              </p>
            </div>
          </div>

          <div className={styles.addOnGrid}>
            <div className={styles.addOnCard}>
              <div className={styles.addOnHeader}>
                <h3 className={styles.addOnTitle}>Scholar Review</h3>
                <div className={styles.addOnPrice}>$49</div>
              </div>
              <p className={styles.addOnDesc}>
                For disclosures that involve religious obligations, private Islamic matters, or arrangements where you want scholarly guidance on how to handle them correctly.
              </p>
              <Link href="/last-will#scholar-review" className={styles.addOnLink}>Learn about Scholar Review →</Link>
            </div>
            <div className={styles.addOnCard}>
              <div className={styles.addOnHeader}>
                <h3 className={styles.addOnTitle}>Admin &amp; Legal Review</h3>
                <div className={styles.addOnPrice}>$49</div>
              </div>
              <p className={styles.addOnDesc}>
                For disclosures that may interact with your estate documents or that involve legal considerations you want reviewed before sealing.
              </p>
              <Link href="/last-will#admin-review" className={styles.addOnLink}>Learn about Admin Review →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaBox}>
            <h2>Some things deserve a safe place. This is it.</h2>
            <p className={styles.ctaText}>
              You have spent a lifetime making decisions, keeping confidences, and carrying things that were not for everyone to know. The Sealed Disclosures feature gives those things a dignified destination — private while you are alive, precise when the moment comes.
            </p>

            <div className={styles.ctaActions}>
              <TrackedButton
                href="https://app.themuslimwill.com/Account/Register"
                className={styles.ctaButtonGoldFull}
                eventName="final_cta_click"
                eventParams={{ location: 'sealed_disclosures_final_cta' }}
              >
                Start My Application
              </TrackedButton>
              <TrackedButton
                href="/vault"
                className={styles.ctaButtonOutlineLight}
                eventName="final_cta_vault_click"
                eventParams={{ location: 'sealed_disclosures_final_cta' }}
              >
                See What&apos;s in the Vault
              </TrackedButton>
              <TrackedButton
                href="/pricing"
                className={styles.ctaButtonOutlineLight}
                eventName="final_cta_pricing_click"
                eventParams={{ location: 'sealed_disclosures_final_cta' }}
                style={{ borderColor: 'transparent' }}
              >
                Pricing
              </TrackedButton>
              <TrackedButton
                href="/how-it-works"
                className={styles.ctaButtonOutlineLight}
                eventName="final_cta_howitworks_click"
                eventParams={{ location: 'sealed_disclosures_final_cta' }}
                style={{ borderColor: 'transparent' }}
              >
                How It Works
              </TrackedButton>
            </div>

            <p className={styles.ctaMicrocopy}>
              Sealed Disclosures are included in The Bridge from $7.99/month — encrypted, audited, and released only to the people you choose.
            </p>

            <div style={{ marginTop: '2rem', display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/vault/final-words" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'underline' }}>Final Words</Link>
              <Link href="/vault/obligations-register" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'underline' }}>Obligations Register</Link>
              <Link href="/vault/estate-inventory" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'underline' }}>Estate Inventory</Link>
              <Link href="/last-will" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'underline' }}>Last Will &amp; Testament</Link>
              <Link href="/vault" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'underline' }}>My Vault Overview</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
