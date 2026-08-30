import type { Metadata } from 'next';
import { TrustBar } from '@/components/ui/TrustBar';
import Link from 'next/link';
import { TrackedButton } from '@/components/analytics/TrackedButton';
import styles from './page.module.css';

const siteUrl = 'https://themuslimwill.com';
const pageTitle = 'Estate Inventory | Document Your Assets for Your Executor | The Muslim Will';
const pageDescription = 'Store a complete record of your accounts, property, investments, and assets in your private Vault — so your executor can find everything your family is owed.';

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: `${siteUrl}/vault/estate-inventory` },
};

export default function EstateInventoryPage() {
  return (
    <div className={styles.main}>
      {/* ── HERO SECTION ── */}
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.heroEyebrow}>My Vault › Estate Inventory</div>
            <h1 className={styles.heroH1}>
              Your family will inherit what they can find. Help them find everything.
            </h1>
            <p className={styles.heroSub}>
              Billions in assets go unclaimed every year — not because families are dishonest, but because no one knew where to look. Bank accounts, insurance policies, safety deposit boxes, investment holdings — they disappear into administrative processes when there is no record. The Estate Inventory gives your executor a complete picture of everything you own, stored privately and released when they need it most.
            </p>
          </div>
        </div>
      </section>

      {/* ── TRUST ANCHORS ── */}
      <TrustBar items={['Private — only you can access it while you are alive', 'Covers accounts, property, investments, insurance, and physical assets', 'Gives your executor a complete picture — not a guessing game', 'Part of The Bridge — included from $7.99/month']} />

      {/* ── SECTION 1: The Problem No One Talks About ── */}
      <section className={styles.section} style={{ backgroundColor: 'var(--color-cream-light)' }}>
        <div className={styles.container}>
          <div className={styles.sectionHeaderCenter} style={{ maxWidth: '900px' }}>
            <h2 className={styles.sectionH2}>Most estates lose assets before they are ever distributed</h2>
            <div style={{ textAlign: 'left', marginTop: '2.5rem' }}>
              <p className={styles.sectionIntro} style={{ marginBottom: '1.5rem', color: 'var(--color-navy)' }}>
                When someone passes away, their executor has a legal and moral obligation to locate every asset and distribute it according to the will. But if they do not know an account exists, they cannot claim it. If they do not know where a property document is stored, they may miss a critical deadline. If they do not know about a safety deposit box, its contents may sit unclaimed for years.
              </p>
              <p className={styles.sectionIntro} style={{ color: 'var(--color-navy)' }}>
                In Islamic inheritance law, your heirs have a right to everything in your estate — not just what is easy to find. Documenting your assets is not a bureaucratic formality. It is an act of justice toward the people who will carry on after you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: What the Estate Inventory Covers ── */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeaderCenter}>
            <h2 className={styles.sectionH2}>Everything your executor needs to find what is yours</h2>
            <p className={styles.sectionIntro}>
              Record your assets once. Update them any time. Your executor receives a complete, organised inventory — ready to act on from the first day they need it.
            </p>
          </div>

          <div className={styles.grid4} style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
            <div className={styles.featureCardPremium}>
              <div className={styles.featureIconWrapper}>🏦</div>
              <h3 className={styles.featureTitle}>Bank Accounts and Financial Holdings</h3>
              <p className={styles.featureDesc}>
                Every bank account, savings account, and financial institution you hold funds with — account references, branch details, and any relevant access information your executor will need to make contact and begin the claims process.
              </p>
            </div>
            <div className={styles.featureCardPremium}>
              <div className={styles.featureIconWrapper}>🏠</div>
              <h3 className={styles.featureTitle}>Property and Real Estate</h3>
              <p className={styles.featureDesc}>
                Your home, any additional properties, land, or real estate interests — including where the relevant documents are stored and any details your executor will need to manage or transfer ownership.
              </p>
            </div>
            <div className={styles.featureCardPremium}>
              <div className={styles.featureIconWrapper}>📈</div>
              <h3 className={styles.featureTitle}>Investment Accounts</h3>
              <p className={styles.featureDesc}>
                Stocks, bonds, mutual funds, RRSPs, TFSAs, pension entitlements, and any other investment or retirement holdings — with enough detail for your executor to locate and claim each one.
              </p>
            </div>
            <div className={styles.featureCardPremium}>
              <div className={styles.featureIconWrapper}>📋</div>
              <h3 className={styles.featureTitle}>Insurance Policies</h3>
              <p className={styles.featureDesc}>
                Life insurance, mortgage insurance, and any other active policies — including the insurer, policy number, and any instructions for how to make a claim. Many life insurance payouts go unclaimed simply because no one knew the policy existed.
              </p>
            </div>
            <div className={styles.featureCardPremium}>
              <div className={styles.featureIconWrapper}>🏢</div>
              <h3 className={styles.featureTitle}>Business Interests</h3>
              <p className={styles.featureDesc}>
                Your ownership stake in any business, partnership, or commercial venture — the relevant documents, your co-owners, and any instructions for how your interest should be handled.
              </p>
            </div>
            <div className={styles.featureCardPremium}>
              <div className={styles.featureIconWrapper}>💎</div>
              <h3 className={styles.featureTitle}>Physical Assets and Valuables</h3>
              <p className={styles.featureDesc}>
                Safety deposit boxes and their location. Jewellery, valuables, and significant physical assets. Physical keys and what they open. Items stored in locations your family may not know to look.
              </p>
            </div>
            <div className={styles.featureCardPremium}>
              <div className={styles.featureIconWrapper}>💻</div>
              <h3 className={styles.featureTitle}>Digital Assets</h3>
              <p className={styles.featureDesc}>
                Online accounts, digital subscriptions, cryptocurrency holdings, domain names, and any other digital assets with monetary value — including where to find access credentials through your Vault.
              </p>
            </div>
            <div className={styles.featureCardPremium}>
              <div className={styles.featureIconWrapper}>🤝</div>
              <h3 className={styles.featureTitle}>Money Owed to You</h3>
              <p className={styles.featureDesc}>
                Loans you have given to others, business receivables, informal arrangements where someone owes you money — recorded so your executor knows to collect what belongs to your estate before distributing to heirs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: How It Works in the Vault ── */}
      <section className={`${styles.section} ${styles.vaultSection}`}>
        <div className={styles.container}>
          <div className={styles.sectionHeaderCenter}>
            <h2 className={styles.sectionH2}>Complete, private, and ready when it is needed</h2>
            <p className={styles.sectionIntro}>
              Your Estate Inventory is stored privately in your Vault. Your family cannot see it while you are alive — only you can access and manage your records. When you pass away, your executor is given access through the Vault&apos;s verified release process.
            </p>
          </div>

          <div className={styles.vaultGrid}>
            <div className={styles.vaultCardPremium}>
              <h3 className={styles.vaultItemTitle}>You build it privately</h3>
              <p className={styles.vaultItemDesc}>
                Add entries one by one — each asset, account, or holding with as much detail as you want to provide. Upload supporting documents where relevant. Update any time your circumstances change.
              </p>
            </div>
            <div className={styles.vaultCardPremium}>
              <h3 className={styles.vaultItemTitle}>It is held securely</h3>
              <p className={styles.vaultItemDesc}>
                Your inventory is encrypted and stored separately from your will. Your family cannot see it while you are alive. Only you can access and manage your records.
              </p>
            </div>
            <div className={styles.vaultCardPremium}>
              <h3 className={styles.vaultItemTitle}>Your executor receives it at the right moment</h3>
              <p className={styles.vaultItemDesc}>
                After your passing is verified, your executor is granted access through the Vault&apos;s release process — with a complete, organised inventory ready to work from on day one.
              </p>
            </div>
          </div>

          <div className={styles.vaultCta}>
            <TrackedButton
              href="/vault"
              className={styles.ctaButtonOutlineLight}
              eventName="vault_overview_click"
              eventParams={{ location: 'estate_inventory' }}
            >
              See What&apos;s in the Vault →
            </TrackedButton>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: The Other Side (Cross-sell) ── */}
      <section className={`${styles.section} ${styles.crossSellSection}`}>
        <div className={styles.container}>
          <div className={styles.sectionHeaderCenter}>
            <h2 className={styles.sectionH2}>A complete picture includes both sides</h2>
            <p className={styles.sectionIntro}>
              An estate inventory is not complete without knowing what needs to be settled first. Debts must be paid before your assets can be distributed to your heirs — that is both an Islamic requirement and a legal one.
            </p>
          </div>

          <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <div className={styles.crossSellCard}>
              <div className={styles.crossSellHeader}>
                <h3 className={styles.crossSellTitle}>Obligations Register</h3>
                <div className={styles.crossSellPrice} style={{ fontSize: '1.25rem', color: 'var(--color-navy)' }}>Included in The Bridge</div>
              </div>
              <p className={styles.crossSellDesc}>
                Record every debt, personal loan, Maher obligation, and financial commitment your estate will need to settle — so nothing is missed and no creditor is left without clarity.
              </p>
              <Link href="/vault/obligations-register" className={styles.crossSellLink}>See the Obligations Register →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 5: Final CTA ── */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaBox}>
            <h2>Everything you have built deserves to reach the people it was meant for.</h2>
            <p className={styles.ctaText}>
              Your assets do not distribute themselves. They need to be found, claimed, and passed on — by someone who knows where to look. The Estate Inventory makes that possible. It is one of the most practical things you can do for the people who come after you.
            </p>

            <div className={styles.ctaActions}>
              <TrackedButton
                href="https://app.themuslimwill.com/Account/Login"
                className={styles.ctaButtonGoldFull}
                eventName="final_cta_click"
                eventParams={{ location: 'estate_inventory_final_cta' }}
              >
                Start My Application
              </TrackedButton>
              <TrackedButton
                href="/vault"
                className={styles.ctaButtonOutlineLight}
                eventName="final_cta_vault_click"
                eventParams={{ location: 'estate_inventory_final_cta' }}
              >
                See What&apos;s in the Vault
              </TrackedButton>
              <TrackedButton
                href="/pricing"
                className={styles.ctaButtonOutlineLight}
                eventName="final_cta_pricing_click"
                eventParams={{ location: 'estate_inventory_final_cta' }}
                style={{ borderColor: 'transparent' }}
              >
                Pricing
              </TrackedButton>
              <TrackedButton
                href="/how-it-works"
                className={styles.ctaButtonOutlineLight}
                eventName="final_cta_howitworks_click"
                eventParams={{ location: 'estate_inventory_final_cta' }}
                style={{ borderColor: 'transparent' }}
              >
                How It Works
              </TrackedButton>
            </div>

            <p className={styles.ctaMicrocopy}>
              The Estate Inventory is included in The Bridge from $7.99/month — private, unlimited entries, updated any time.
            </p>

            <div style={{ marginTop: '2rem', display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
              <Link href="/last-will" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'underline' }}>Last Will &amp; Testament</Link>
              <Link href="/vault" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'underline' }}>My Vault Overview</Link>
              <Link href="/vault/obligations-register" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'underline' }}>Obligations Register</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
