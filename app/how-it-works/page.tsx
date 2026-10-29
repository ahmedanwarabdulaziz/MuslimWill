import type { Metadata } from 'next';
import Link from 'next/link';
import { TrackedButton } from '@/components/analytics/TrackedButton';
import styles from './page.module.css';

const siteUrl = 'https://themuslimwill.com';
const calculatorUrl = 'https://app.themuslimwill.com/calculator';
const registerUrl = 'https://app.themuslimwill.com/Account/Register';
const pageTitle = 'How It Works | Islamic Will That Stays Up to Date | The Muslim Will';
const pageDescription =
  'How The Muslim Will makes Islamic inheritance and Ontario law work together: check the difference, build your will, keep it current through your Vault, and sign it properly.';

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: `${siteUrl}/how-it-works` },
};

/* ── data ── */
const DIFFERENCES = [
  'Your spouse receives the first $350,000, then a formula share of the rest, not the Qur’anic share.',
  'Sons and daughters receive equal amounts, regardless of Islamic inheritance rules.',
  'Your parents receive nothing if you leave a spouse or children, although Islam gives them fixed shares.',
  'There is no charitable bequest. Sadaqah Jariyah of up to one third is only possible through a will.',
  'No guardian is named for your minor children, so a court decides.',
];

const STEPS = [
  {
    num: '01',
    tag: 'Check',
    time: 'About 3 minutes · free',
    title: 'See the difference for your family',
    desc: "Answer a few questions about who is in your family — no names, no assets. The calculator shows how Ontario's default rules would divide your estate, and how Islamic inheritance would. Most families are surprised by the gap.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="2" width="16" height="20" rx="2"/>
        <line x1="8" y1="6" x2="16" y2="6"/>
        <line x1="8" y1="11" x2="8.01" y2="11"/><line x1="12" y1="11" x2="12.01" y2="11"/><line x1="16" y1="11" x2="16.01" y2="11"/>
        <line x1="8" y1="15" x2="8.01" y2="15"/><line x1="12" y1="15" x2="12.01" y2="15"/><line x1="16" y1="15" x2="16.01" y2="15"/>
      </svg>
    ),
  },
  {
    num: '02',
    tag: 'Build',
    time: '30–60 min',
    title: 'Build your will in a guided process',
    desc: "Your family, your executor, guardians for minor children, any charitable bequest. The platform asks the right questions in the right order, calculates your Islamic inheritance shares, and lets you save and return at any point.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <line x1="16" y1="13" x2="8" y2="13"/>
        <line x1="16" y1="17" x2="8" y2="17"/>
      </svg>
    ),
  },
  {
    num: '03',
    tag: 'Vault',
    time: 'At your own pace',
    title: 'Fill in your Vault',
    desc: "Your will refers to appendices kept in your private Vault: your debts, money owed to you, your assets and your important documents. You can also leave messages for the people you love, and instructions in case you cannot speak for yourself.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2"/>
        <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
      </svg>
    ),
  },
  {
    num: '04',
    tag: 'Sign',
    time: 'One session',
    title: 'Sign it properly',
    desc: "A will is only valid in Ontario when it is signed and witnessed correctly. You receive clear signing guidance, or you can choose Digital Attestation: a guided Zoom session with a paralegal and two witnesses.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9"/>
        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
      </svg>
    ),
  },
  {
    num: '05',
    tag: 'Keep current',
    time: 'Anytime',
    title: 'Keep it up to date, at no extra cost',
    desc: "A new loan paid off, a new account, a new property — update your Vault and your will's appendices stay current. No redrafting, no new lawyer fees. If your family itself changes, the platform guides you through updating the will.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 4 23 10 17 10"/>
        <polyline points="1 20 1 14 7 14"/>
        <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/>
      </svg>
    ),
  },
];

const VAULT_CARDS = [
  {
    icon: '📜',
    title: 'The will holds your decisions',
    desc: 'Who inherits and in what shares, your executor, guardians for your children, and your charitable bequest. These are the decisions that rarely change.',
  },
  {
    icon: '🔒',
    title: 'The Vault holds the details',
    desc: 'Debts, money owed to you, accounts, property, documents. The things that change every year, kept current as appendices to your will.',
  },
  {
    icon: '👤',
    title: 'Your family gets answers',
    desc: 'After official verification, your executor receives everything in one place. Every access is logged, and private messages reach only the people they are addressed to.',
  },
];

const PLANS = [
  {
    price: '$7.99/mo',
    title: 'Will + Vault',
    desc: 'Your Islamic will, your private Vault, incapacity instructions and messages, with unlimited updates. Everything most Muslim families need.',
    icon: '🕌',
    href: '/pricing',
    linkLabel: 'See what is included →',
  },
  {
    price: '$275 + monthly',
    title: 'Fully Fledged (Notarized)',
    desc: '$275 one-time on top of your Will + Vault subscription. Adds Personal Scholar Review, Conformity Verification, Notarization / Digital Attestation, Notarized POAs and Will Directory registration.',
    icon: '✅',
    href: '/pricing',
    linkLabel: 'Compare plans →',
  },
  {
    price: 'from $99',
    title: 'Optional reviews',
    desc: 'For complex situations: a Personal Scholar Review of your own inheritance table, or Conformity Verification for multiple properties, business assets or cross-border matters.',
    icon: '📋',
    href: '/about/our-scholars',
    linkLabel: 'Meet our scholars →',
  },
];

export default function HowItWorksPage() {
  return (
    <div className={styles.main}>

      {/* ── HERO ── */}
      <section className={styles.heroSection}>
        <div className={styles.heroOverlay} />
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.heroEyebrow}>How It Works</div>
            <h1 className={styles.heroH1}>
              An Islamic will that works under Canadian law, and stays up to date.
            </h1>
            <p className={styles.heroSub}>
              Ontario has its own default rules for dividing your estate, and they do not follow Islamic inheritance law. A properly prepared Islamic will lets both work together. Your Vault keeps it current as your life changes.
            </p>
            <div className={styles.ctaActions} style={{ justifyContent: 'flex-start', marginBottom: '2.5rem' }}>
              <TrackedButton
                href={calculatorUrl}
                className={styles.ctaPrimary}
                eventName="calculator_click"
                eventParams={{ location: 'how_it_works_hero' }}
              >
                Check the difference for your family
              </TrackedButton>
            </div>
            <div className={styles.heroStats}>
              <div className={styles.heroStat}>
                <div className={styles.heroStatNum}>3 min</div>
                <div className={styles.heroStatLabel}>free difference check</div>
              </div>
              <div className={styles.heroStatDivider} />
              <div className={styles.heroStat}>
                <div className={styles.heroStatNum}>30–60</div>
                <div className={styles.heroStatLabel}>min to build your will</div>
              </div>
              <div className={styles.heroStatDivider} />
              <div className={styles.heroStat}>
                <div className={styles.heroStatNum}>∞</div>
                <div className={styles.heroStatLabel}>updates at no extra cost</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 1: The gap ── */}
      <section className={styles.beforeSection}>
        <div className={styles.container}>
          <div className={styles.beforeLayout}>
            <div className={styles.beforeText}>
              <div className={styles.sectionLabel}>Why It Matters</div>
              <h2 className={styles.sectionH2}>Without an Islamic will, Ontario decides</h2>
              <p className={styles.sectionPara}>
                If you pass away without a will, Ontario&apos;s default inheritance rules apply. They are fair by their own standard, but they were not written for Muslim families. Here is what they mean in practice:
              </p>
              <p className={styles.sectionParaNote}>
                A standard Canadian will does not fix this on its own either. Your will needs to be written to follow Islamic inheritance.
              </p>
              <TrackedButton
                href={calculatorUrl}
                className={styles.beforeCta}
                eventName="calculator_click"
                eventParams={{ location: 'how_it_works_gap' }}
              >
                See your family&apos;s numbers →
              </TrackedButton>
            </div>

            <div className={styles.beforeChecklist}>
              {DIFFERENCES.map((item, i) => (
                <div key={i} className={styles.beforeCheckItem}>
                  <div className={styles.beforeCheckNum}>{i + 1}</div>
                  <div className={styles.beforeCheckText}>{item}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: The steps ── */}
      <section className={styles.stepsSection}>
        <div className={styles.stepsOverlay} />
        <div className={styles.container}>
          <div className={styles.stepsHeader}>
            <h2 className={styles.stepsH2}>Five steps from intention to a will that lasts</h2>
            <div className={styles.stepsBar} />
          </div>

          <div className={styles.timeline}>
            {STEPS.map((step, i) => (
              <div key={i} className={styles.timelineRow}>
                <div className={styles.timelineSpine}>
                  <div className={styles.timelineDot}>
                    <div className={styles.timelineDotSvg}>{step.icon}</div>
                  </div>
                  {i < STEPS.length - 1 && <div className={styles.timelineLine} />}
                </div>

                <div className={styles.timelineCard}>
                  <div className={styles.timelineCardHeader}>
                    <span className={styles.timelineNum}>{step.num}</span>
                    <span className={styles.timelineTag}>{step.tag}</span>
                    <span className={styles.timelineTime}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{width:12,height:12,display:'inline',marginRight:'0.3rem'}}>
                        <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                      </svg>
                      {step.time}
                    </span>
                  </div>
                  <h3 className={styles.timelineTitle}>{step.title}</h3>
                  <p className={styles.timelineDesc}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.processNote}>
            <div className={styles.processNoteIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
              </svg>
            </div>
            <p className={styles.processNoteText}>
              Legal validity depends on accurate information, correct document completion, and proper signing and witnessing. The Muslim Will supports every step, but accuracy and correct execution remain the client&apos;s responsibility.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: Will + Vault ── */}
      <section className={styles.afterSection}>
        <div className={styles.container}>
          <div className={styles.afterHeader}>
            <div className={styles.sectionLabel}>Will + Vault</div>
            <h2 className={styles.sectionH2}>Your Islamic Will, always up to date</h2>
            <div className={styles.afterIntroBlock}>
              <p className={styles.sectionPara}>
                Most wills are signed once and forgotten. Within a few years the debts, accounts and property they describe have changed, and the family is left guessing.
              </p>
              <p className={styles.sectionPara}>
                Your Muslim Will is built differently. The will holds your decisions. Your Vault holds the details as appendices to the will, and you update them whenever your life changes, with no redrafting and no extra cost.
              </p>
            </div>
          </div>

          <div className={styles.afterGrid}>
            {VAULT_CARDS.map((card, i) => (
              <div key={i} className={styles.afterCard}>
                <div className={styles.afterCardIcon}>{card.icon}</div>
                <h3 className={styles.afterCardTitle}>{card.title}</h3>
                <p className={styles.afterCardDesc}>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 4: Plans ── */}
      <section className={styles.addOnsSection}>
        <div className={styles.container}>
          <div className={styles.addOnsHeader}>
            <div className={styles.sectionLabel}>When You Are Ready</div>
            <h2 className={styles.sectionH2}>Simple, transparent pricing</h2>
            <p className={styles.addOnsIntro}>
              Checking the difference is free. When you decide to build your will, choose the option that fits your situation.
            </p>
          </div>
          <div className={styles.addOnsGrid}>
            {PLANS.map((plan, i) => (
              <div key={i} className={styles.addOnCard}>
                <div className={styles.addOnCardTop}>
                  <div className={styles.addOnCardAccent} />
                  <div className={styles.addOnTopRow}>
                    <span className={styles.addOnIcon}>{plan.icon}</span>
                    <span className={styles.addOnPrice}>{plan.price}</span>
                  </div>
                  <h3 className={styles.addOnTitle}>{plan.title}</h3>
                </div>
                <p className={styles.addOnDesc}>{plan.desc}</p>
                <Link href={plan.href} className={styles.addOnLink}>{plan.linkLabel}</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaH2}>Start with the difference.</h2>
            <p className={styles.ctaMicro}>
              Free · about 3 minutes · no names or assets needed
            </p>
            <div className={styles.ctaActions}>
              <TrackedButton
                href={calculatorUrl}
                className={styles.ctaPrimary}
                eventName="calculator_click"
                eventParams={{ location: 'how_it_works_footer' }}
              >
                Check the difference →
              </TrackedButton>
              <TrackedButton
                href={registerUrl}
                className={styles.ctaSecondary}
                eventName="hiw_start_application_footer"
                eventParams={{ location: 'how_it_works_footer' }}
              >
                Start my will →
              </TrackedButton>
            </div>
            <div className={styles.ctaLinks}>
              <Link href="/last-will" className={styles.ctaInternalLink}>Last Will &amp; Testament</Link>
              <span>·</span>
              <Link href="/vault" className={styles.ctaInternalLink}>The Vault</Link>
              <span>·</span>
              <Link href="/about/compliance" className={styles.ctaInternalLink}>Compliance</Link>
              <span>·</span>
              <Link href="/about/faq" className={styles.ctaInternalLink}>FAQ</Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
