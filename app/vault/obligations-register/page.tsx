import type { Metadata } from 'next';
import { TrustBar } from '@/components/ui/TrustBar';
import Link from 'next/link';
import { TrackedButton } from '@/components/analytics/TrackedButton';
import styles from './page.module.css';

const siteUrl = 'https://themuslimwill.com';
const pageTitle = 'Obligations Register | Islamic Debts and Estate | The Muslim Will';
const pageDescription = 'Record your debts, personal loans, Maher, and Zakah obligations privately in your Vault — so your executor can settle every obligation before distributing your estate.';

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: `${siteUrl}/vault/obligations-register` },
};

export default function ObligationsRegisterPage() {
  return (
    <div className={styles.main}>
      {/* ── HERO SECTION ── */}
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.heroEyebrow}>My Vault › Obligations Register</div>
            <h1 className={styles.heroH1}>
              Your debts are a right someone else holds over your estate. Document them now — before the burden falls on those you leave behind.
            </h1>
            <p className={styles.heroSub}>
              In Islam, debts must be settled before anything can be distributed to your heirs. If your executor does not know what you owe — and to whom — those obligations cannot be fulfilled. The Obligations Register gives you a private, secure place to record every debt, every obligation, and every instruction for how it should be settled.
            </p>
          </div>
        </div>
      </section>

      {/* ── TRUST ANCHORS ── */}
      <TrustBar items={['Private and secure — visible only to your executor', 'Covers financial debts, personal loans, and Islamic obligations', 'Gives your executor clear instructions', 'Part of The Bridge — included from $7.99/month']} />

      {/* ── SECTION 1: Why Undocumented Debts Are a Serious Risk ── */}
      <section className={styles.section} style={{ backgroundColor: 'var(--color-cream-light)' }}>
        <div className={styles.container}>
          <div className={styles.sectionHeaderCenter} style={{ maxWidth: '900px' }}>
            <h2 className={styles.sectionH2}>What your executor cannot find, they cannot settle</h2>
            <div style={{ textAlign: 'left', marginTop: '2.5rem' }}>
              <p className={styles.sectionIntro} style={{ marginBottom: '1.5rem', color: 'var(--color-navy)' }}>
                The Prophet ﷺ said that the soul of a believer is held back by their debt until it is settled. This is not a minor matter. An estate that distributes to heirs before debts are paid is an estate that has not fulfilled its Islamic obligations — regardless of how carefully the will was prepared.
              </p>
              <p className={styles.sectionIntro} style={{ color: 'var(--color-navy)' }}>
                The problem is not usually that people intend to leave debts unpaid. It is that they never documented them in a place their executor could find. A personal loan from a friend, an informal arrangement with a family member, a financial obligation no one else knew about — these do not appear in a bank statement. They exist only in memory. And when you are gone, that memory is gone with you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: What the Obligations Register Covers ── */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeaderCenter}>
            <h2 className={styles.sectionH2}>Every obligation, recorded clearly</h2>
            <p className={styles.sectionIntro}>
              The Obligations Register is not a formal legal filing. It is a private, structured record — stored in your Vault and released to your executor when the time comes. Record what you owe, who you owe it to, and how you want it settled.
            </p>
          </div>

          <div className={styles.grid4} style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
            <div className={styles.featureCardPremium}>
              <div className={styles.featureIconWrapper}>💳</div>
              <h3 className={styles.featureTitle}>Financial Debts</h3>
              <p className={styles.featureDesc}>
                Bank loans, credit balances, outstanding mortgage obligations beyond the property value, personal financing arrangements — any financial debt that your estate will need to settle.
              </p>
            </div>
            <div className={styles.featureCardPremium}>
              <div className={styles.featureIconWrapper}>🤝</div>
              <h3 className={styles.featureTitle}>Personal Loans</h3>
              <p className={styles.featureDesc}>
                Money borrowed from family members, friends, or colleagues — often undocumented, always real. Record who you owe, how much, and any relevant context so your executor can approach the right people with clarity and respect.
              </p>
            </div>
            <div className={styles.featureCardPremium}>
              <div className={styles.featureIconWrapper}>💍</div>
              <h3 className={styles.featureTitle}>Maher (Deferred Dowry)</h3>
              <p className={styles.featureDesc}>
                If you have an outstanding Maher obligation to your spouse that has not yet been fulfilled, this is one of the first debts your estate must settle. Document the amount and the terms so there is no confusion or delay.
              </p>
            </div>
            <div className={styles.featureCardPremium}>
              <div className={styles.featureIconWrapper}>🤲</div>
              <h3 className={styles.featureTitle}>Zakah Arrears</h3>
              <p className={styles.featureDesc}>
                If you believe you owe unpaid Zakah from prior years, record it here — the estimated amount, the years in question, and your instruction for how it should be calculated and settled. This is an obligation to Allah that your estate can fulfil on your behalf.
              </p>
            </div>
            <div className={styles.featureCardPremium}>
              <div className={styles.featureIconWrapper}>🏢</div>
              <h3 className={styles.featureTitle}>Business Obligations</h3>
              <p className={styles.featureDesc}>
                Outstanding payments to suppliers, partners, or employees. Guarantees you have personally signed. Financial commitments made in a business context that do not appear in personal accounts.
              </p>
            </div>
            <div className={styles.featureCardPremium}>
              <div className={styles.featureIconWrapper}>🛑</div>
              <h3 className={styles.featureTitle}>Money From Impermissible Sources</h3>
              <p className={styles.featureDesc}>
                If you hold funds that were earned impermissibly and have not yet been given away or returned, record your instruction for how they should be handled. This protects your estate from distributing what should not be distributed — and protects your account with Allah.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: How It Works in the Vault ── */}
      <section className={`${styles.section} ${styles.vaultSection}`}>
        <div className={styles.container}>
          <div className={styles.sectionHeaderCenter}>
            <h2 className={styles.sectionH2}>Private, structured, and released at the right moment</h2>
            <p className={styles.sectionIntro}>
              Your Obligations Register is stored privately in your Vault. Your family cannot see it while you are alive — only you can access and update it. When you pass away, your executor is given access through the Vault&apos;s verified release process.
            </p>
            <p className={styles.sectionIntro} style={{ marginTop: '1rem' }}>
              They receive a clear, organised record of every obligation you have documented — not a pile of paper to search through, not a conversation to reconstruct from memory. A complete picture, ready to act on.
            </p>
          </div>

          <div className={styles.vaultGrid}>
            <div className={styles.vaultCardPremium}>
              <h3 className={styles.vaultItemTitle}>You record it privately</h3>
              <p className={styles.vaultItemDesc}>
                Add obligations one by one — who you owe, how much, any context or supporting documents. Update it any time. There is no limit on entries or changes.
              </p>
            </div>
            <div className={styles.vaultCardPremium}>
              <h3 className={styles.vaultItemTitle}>It is held securely</h3>
              <p className={styles.vaultItemDesc}>
                Your record is encrypted and stored in your Vault, separate from your will and other estate documents. Only you can see it while you are alive.
              </p>
            </div>
            <div className={styles.vaultCardPremium}>
              <h3 className={styles.vaultItemTitle}>Your executor receives it at the right moment</h3>
              <p className={styles.vaultItemDesc}>
                After your passing is verified, your executor is granted access through the Vault&apos;s release process — with a full record of your obligations, ready to act on.
              </p>
            </div>
          </div>

          <div className={styles.vaultCta}>
            <TrackedButton 
              href="/vault/final-words" 
              className={styles.ctaButtonOutlineLight}
              eventName="vault_final_words_click" 
              eventParams={{ location: 'obligations_register' }}
            >
              See Final Words in the Vault →
            </TrackedButton>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: The Other Side (Cross-sell) ── */}
      <section className={`${styles.section} ${styles.crossSellSection}`}>
        <div className={styles.container}>
          <div className={styles.sectionHeaderCenter}>
            <h2 className={styles.sectionH2}>Obligations work in both directions</h2>
            <p className={styles.sectionIntro}>
              You may also be owed money — by family members, business partners, or others. Money that belongs to your estate and should be collected before distribution. Your executor needs to know about this too.
            </p>
          </div>

          <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <div className={styles.crossSellCard}>
              <div className={styles.crossSellHeader}>
                <h3 className={styles.crossSellTitle}>Estate Inventory</h3>
                <div className={styles.crossSellPrice} style={{ fontSize: '1.25rem', color: 'var(--color-navy)' }}>Included in The Bridge</div>
              </div>
              <p className={styles.crossSellDesc}>
                Record the assets, accounts, and money owed to you — so your executor has a complete financial picture of your estate, not just your debts.
              </p>
              <Link href="/vault/estate-inventory" className={styles.crossSellLink}>See the Estate Inventory →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 5: Final CTA ── */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaBox}>
            <h2>Your obligations are part of your legacy — the part that protects your honour.</h2>
            <p className={styles.ctaText}>
              Settling your debts is an act of integrity. It protects your family from unexpected claims, your heirs from distributing what is not yet theirs, and your account with Allah from remaining incomplete. The Obligations Register gives you a private, dignified way to fulfil that responsibility — before the moment arrives when you no longer can.
            </p>
            
            <div className={styles.ctaActions}>
              <TrackedButton 
                href="https://app.themuslimwill.com/Account/Register" 
                className={styles.ctaButtonGoldFull}
                eventName="final_cta_click" 
                eventParams={{ location: 'obligations_register_final_cta' }}
              >
                Start My Application
              </TrackedButton>
              <TrackedButton 
                href="/vault" 
                className={styles.ctaButtonOutlineLight}
                eventName="final_cta_vault_click" 
                eventParams={{ location: 'obligations_register_final_cta' }}
              >
                See What&apos;s in the Vault
              </TrackedButton>
              <TrackedButton 
                href="/pricing" 
                className={styles.ctaButtonOutlineLight}
                eventName="final_cta_pricing_click" 
                eventParams={{ location: 'obligations_register_final_cta' }}
                style={{ borderColor: 'transparent' }}
              >
                Pricing
              </TrackedButton>
              <TrackedButton 
                href="/how-it-works" 
                className={styles.ctaButtonOutlineLight}
                eventName="final_cta_howitworks_click" 
                eventParams={{ location: 'obligations_register_final_cta' }}
                style={{ borderColor: 'transparent' }}
              >
                How It Works
              </TrackedButton>
            </div>
            
            <p className={styles.ctaMicrocopy}>
              The Obligations Register is included in The Bridge from $7.99/month — private, secure, and updated any time your circumstances change.
            </p>
            
            <div style={{ marginTop: '2rem', display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
               <Link href="/last-will" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'underline' }}>Last Will &amp; Testament</Link>
               <Link href="/vault" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'underline' }}>My Vault Overview</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
