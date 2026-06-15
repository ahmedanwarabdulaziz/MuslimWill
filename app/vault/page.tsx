import type { Metadata } from 'next';
import { TrustBar } from '@/components/ui/TrustBar';
import Link from 'next/link';
import { TrackedButton } from '@/components/analytics/TrackedButton';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'My Vault | Secure Private Records | The Muslim Will',
  description: 'The Muslim Will Vault is a private, secure space for everything your family will need — your debts, your assets, your documents, and your final messages. Released to your executor only after your passing.',
  alternates: { canonical: 'https://themuslimwill.com/vault' },
};

export default function VaultOverview() {
  return (
    <div className={styles.main}>
      {/* 1. Hero Section */}
      <section className={`${styles.section} ${styles.heroSection}`}>
        <div className={styles.container}>
          <div className={styles.heroEyebrow}>My Bridge &rsaquo; My Vault</div>
          <h1 className={styles.heroH1}>
            Everything your family will need — private, organized, and waiting.
          </h1>
          <p className={styles.heroIntro}>
            Your Vault holds the records, documents, and messages that your executor and your loved ones will need when you are gone. While you are alive, only you can see it. After your passing is officially verified, the right people receive access to exactly what you intended — no more, no less.
          </p>
          
        </div>
      </section>

      {/* ── TRUST ANCHORS ── */}
      <TrustBar items={['Included in The Bridge — $5.99/month', 'Private while you are alive — no one else has access', 'Executor access only after official verification']} />

      {/* 2. What the Vault holds */}
      <section className={`${styles.section} ${styles.grayBg}`}>
        <div className={styles.container}>
          <div className={styles.sectionLabel}>Inside the Vault</div>
          <h2 className={styles.sectionH2}>Four branches. Every obligation covered.</h2>
          <p className={styles.sectionSub}>
            Your Vault is organized into four branches — each one handles a different part of what your executor and family will need.
          </p>
          
          <div className={styles.grid4}>
            {/* Card 1 */}
            <div className={styles.branchCard}>
              <div className={styles.branchIcon}>💰</div>
              <h3 className={styles.branchTitle}>Obligations Register</h3>
              <p className={styles.branchDesc}>
                Record every debt you owe — personal loans, Maher, Zakah, borrowed money. In Islam, debts must be settled before your estate is distributed. Your executor needs to know what you owe, and to whom, to fulfil that obligation.
              </p>
              <Link href="/vault/obligations-register" className={styles.branchLink}>
                View Obligations Register &rarr;
              </Link>
            </div>
            
            {/* Card 2 */}
            <div className={styles.branchCard}>
              <div className={styles.branchIcon}>📦</div>
              <h3 className={styles.branchTitle}>Estate Inventory</h3>
              <p className={styles.branchDesc}>
                Document every asset your executor will need to find — bank accounts, property, insurance policies, investments, safety deposit boxes. Assets that aren't recorded often go unclaimed. This is where you make sure nothing is missed.
              </p>
              <Link href="/vault/estate-inventory" className={styles.branchLink}>
                View Estate Inventory &rarr;
              </Link>
            </div>
            
            {/* Card 3 */}
            <div className={styles.branchCard}>
              <div className={styles.branchIcon}>🔏</div>
              <h3 className={styles.branchTitle}>Sealed Disclosures</h3>
              <p className={styles.branchDesc}>
                Store sensitive documents and private arrangements assigned to a specific person — released only after your passing, with a full audit trail. Some things can only be said at the right moment, to the right person.
              </p>
              <Link href="/vault/sealed-disclosures" className={styles.branchLink}>
                View Sealed Disclosures &rarr;
              </Link>
            </div>
            
            {/* Card 4 */}
            <div className={styles.branchCard}>
              <div className={styles.branchIcon}>✉️</div>
              <h3 className={styles.branchTitle}>Final Words</h3>
              <p className={styles.branchDesc}>
                Leave a written letter, a voice note, or a video message for the people who matter most. Private and protected while you are alive. Delivered only after you are gone.
              </p>
              <Link href="/vault/final-words" className={styles.branchLink}>
                View Final Words &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. The Release Process */}
      <section className={`${styles.section}`}>
        <div className={styles.container}>
          <div className={styles.sectionLabel}>The Release Process</div>
          <h2 className={styles.sectionH2}>Your Vault is sealed until the moment it needs to open.</h2>
          
          <div className={styles.processGrid}>
            <div className={styles.processStep}>
              <div className={styles.stepNum}>1</div>
              <h4 className={styles.stepTitle}>While you are alive</h4>
              <p className={styles.stepDesc}>
                Only you have access to your Vault. No one — not family, not our team — can view what you have stored. You can update it any time.
              </p>
            </div>
            <div className={styles.processStep}>
              <div className={styles.stepNum}>2</div>
              <h4 className={styles.stepTitle}>After your passing is verified</h4>
              <p className={styles.stepDesc}>
                Your executor submits an official verification through Muslim Will. This triggers the release process. We verify the claim before any access is granted.
              </p>
            </div>
            <div className={styles.processStep}>
              <div className={styles.stepNum}>3</div>
              <h4 className={styles.stepTitle}>Access is granted with precision</h4>
              <p className={styles.stepDesc}>
                Each item in your Vault is assigned to a specific recipient. Your executor receives what they need to administer the estate. Sealed Disclosures are delivered to the individuals you named. Every access event is logged in a full audit trail.
              </p>
            </div>
          </div>
          
          <div className={styles.processClosing}>
            You do not lose control. You extend it — beyond your lifetime.
          </div>
        </div>
      </section>

      {/* 4. Islamic framing */}
      <section className={`${styles.section} ${styles.amanahSection}`}>
        <div className={styles.containerNarrow}>
          <h3 className={styles.amanahH2}>Amanah — the trust you carry</h3>
          <div className={styles.amanahBody}>
            <p>
              In Islam, what you possess is not yours alone — it is a trust given to you by Allah. Your debts are a right others hold over your estate. Your assets will pass to heirs whose shares are defined. Your words and documents belong to the people you leave behind.
            </p>
            <p>
              The Vault helps you fulfil that trust — completely, privately, and with precision.
            </p>
          </div>
        </div>
      </section>

      {/* 5. CTA */}
      <section className={`${styles.section} ${styles.ctaSection}`}>
        <div className={styles.containerNarrow}>
          <h2 className={styles.sectionH2}>The Vault is included in The Bridge.</h2>
          <p className={styles.ctaBody}>
            You do not need a separate subscription to access your Vault. It is included in The Bridge — one complete subscription at $5.99/month — alongside your Islamic Will.
          </p>
          
          <div className={styles.ctaActions}>
            <TrackedButton href="https://app.themuslimwill.com/Account/Login" size="lg" variant="primary" className={styles.primaryBtn} eventName="vault_hub_start_click" eventParams={{ location: 'vault_hub_cta' }}>
              Start For $5.99/month &rarr;
            </TrackedButton>
            <TrackedButton href="/how-it-works" size="lg" variant="outline" className={styles.outlineBtn} eventName="vault_hub_how_it_works_click" eventParams={{ location: 'vault_hub_cta' }}>
              See How It Works &rarr;
            </TrackedButton>
          </div>
          <div className={styles.ctaMicro}>
            Free to register. Full access from $5.99/month. Islamic Will and private Vault included.
          </div>
        </div>
      </section>
    </div>
  );
}
