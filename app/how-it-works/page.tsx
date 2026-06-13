import type { Metadata } from 'next';
import Link from 'next/link';
import { TrackedButton } from '@/components/analytics/TrackedButton';
import styles from './page.module.css';

const siteUrl = 'https://themuslimwill.com';
const pageTitle = 'How It Works | Islamic Will Planning in Canada | The Muslim Will';
const pageDescription =
  'See the guided process behind The Muslim Will — from guided intake to Faraid calculation, document preparation, Vault setup, and signing. Built for Muslim families in Canada.';

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: `${siteUrl}/how-it-works` },
};

/* ── data ── */
const STEPS = [
  {
    num: '01',
    tag: 'Intake',
    time: '30–60 min',
    title: 'Complete your application',
    desc: "You work through a guided intake process — your family details, your assets, your heirs, your guardianship preferences, your charitable intentions. The platform is designed to ask the right questions in the right order, so nothing important is missed.",
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
    num: '02',
    tag: 'Faraid',
    time: 'Automated',
    title: 'Your Faraid inheritance structure is calculated',
    desc: "Based on your family details, the platform calculates the Islamic inheritance shares that apply to your situation — the Faraid distribution that defines how your estate should be divided under Islamic law. You review this calculation before anything is finalised.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
        <line x1="9" y1="9" x2="9.01" y2="9"/>
        <line x1="15" y1="9" x2="15.01" y2="9"/>
      </svg>
    ),
  },
  {
    num: '03',
    tag: 'Documents',
    time: 'Generated for you',
    title: 'Your documents are prepared',
    desc: "Your Islamic will is generated — structured to meet Ontario's legal requirements and built around the Faraid calculation and the personal details you provided. Your Powers of Attorney are prepared if you have included them. All documents are available for your review before any expert review or execution steps.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 11l3 3L22 4"/>
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
      </svg>
    ),
  },
  {
    num: '04',
    tag: 'Vault',
    time: 'Ongoing',
    title: 'Your Vault is set up',
    desc: "Your private Vault is activated — ready for you to begin adding your obligations register, estate inventory, sealed disclosures, and personal messages for the people you love. This is not a one-time step — your Vault is a living record you build and update over time.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
        <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
      </svg>
    ),
  },
  {
    num: '05',
    tag: 'Execution',
    time: 'Final step',
    title: 'Review, sign, and witness',
    desc: "You review your completed will, confirm your intentions, and complete the signing and witnessing process. If you have selected Digital Attestation, this is conducted over a guided Zoom session with a paralegal and two witnesses. Without attestation, the signing guidance is provided clearly for you to complete independently.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12"/>
      </svg>
    ),
  },
];

const AFTER_CARDS = [
  {
    icon: '👤',
    title: 'Tell your executor',
    desc: "Your executor needs to know that your will exists and where it is. Consider telling them you are a Muslim Will member — so they know how to access your Vault when the time comes.",
  },
  {
    icon: '🔄',
    title: 'Update your Vault regularly',
    desc: 'Your obligations register, estate inventory, and sealed disclosures are only useful if they are current. Set a reminder to review them once a year — or whenever your circumstances change significantly.',
  },
  {
    icon: '📋',
    title: 'Review your will when your family changes',
    desc: 'A new child, a marriage, a bereavement — any significant change in your family structure may affect your Faraid calculation and your will. The platform makes updates straightforward.',
  },
];

const ADD_ONS = [
  {
    price: '$49',
    title: 'Scholar Review',
    desc: 'A qualified Islamic scholar personally reviews your Faraid calculation — recommended for complex family structures, large estates, or anyone who wants individual scholarly attention on their case.',
    icon: '📜',
    href: '/about/our-scholars',
    linkLabel: 'Meet our scholars →',
  },
  {
    price: '$49',
    title: 'Admin & Legal Review',
    desc: 'A closer review of your documents — for multiple properties, business assets, or cross-border situations.',
    icon: '⚖️',
    href: '/about/compliance',
    linkLabel: 'About our compliance →',
  },
  {
    price: '$149',
    title: 'Digital Attestation',
    desc: 'Your will formally witnessed and legally certified over Zoom with a paralegal — for those who want or require official legal execution under Ontario law.',
    icon: '✅',
    href: '/pricing',
    linkLabel: 'See full pricing →',
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
            <div className={styles.heroEyebrow}>Individuals &amp; Families › How It Works</div>
            <h1 className={styles.heroH1}>
              From your first question to a signed will and a secure Vault — here is the journey.
            </h1>
            <p className={styles.heroSub}>
              The Muslim Will is designed to make a sensitive process easier to begin. The pathway is guided, professionally managed, and built around your family&apos;s specific situation — not a generic template. Here is what to expect, from start to finish.
            </p>
            <div className={styles.heroStats}>
              <div className={styles.heroStat}>
                <div className={styles.heroStatNum}>5</div>
                <div className={styles.heroStatLabel}>guided steps</div>
              </div>
              <div className={styles.heroStatDivider} />
              <div className={styles.heroStat}>
                <div className={styles.heroStatNum}>30–60</div>
                <div className={styles.heroStatLabel}>min to complete</div>
              </div>
              <div className={styles.heroStatDivider} />
              <div className={styles.heroStat}>
                <div className={styles.heroStatNum}>$5.99</div>
                <div className={styles.heroStatLabel}>per month from</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 1: Before You Start ── */}
      <section className={styles.beforeSection}>
        <div className={styles.container}>
          <div className={styles.beforeLayout}>
            <div className={styles.beforeText}>
              <div className={styles.sectionLabel}>Before You Start</div>
              <h2 className={styles.sectionH2}>What you will need</h2>
              <p className={styles.sectionPara}>
                The application takes most families between 30 and 60 minutes to complete — though you can save and return at any point. Before you begin, it helps to have a rough picture of:
              </p>
              <p className={styles.sectionParaNote}>
                You do not need exact figures or legal documents to start. The application guides you through what is needed, one step at a time.
              </p>
              <TrackedButton
                href="/apply"
                className={styles.beforeCta}
                eventName="hiw_start_before"
                eventParams={{ location: 'how_it_works_before' }}
              >
                Start My Application →
              </TrackedButton>
            </div>

            <div className={styles.beforeChecklist}>
              {[
                'Your family structure — spouse, children, parents, and other close relatives',
                'A general sense of your assets — property, accounts, investments',
                'Who you would want as guardian for any minor children',
                'Who you trust as your executor',
                'Any charitable intentions you want to include',
              ].map((item, i) => (
                <div key={i} className={styles.beforeCheckItem}>
                  <div className={styles.beforeCheckNum}>{i + 1}</div>
                  <div className={styles.beforeCheckText}>{item}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: The Five Steps (Full Bleed) ── */}
      <section className={styles.stepsSection}>
        <div className={styles.stepsOverlay} />
        <div className={styles.container}>
          <div className={styles.stepsHeader}>
            <h2 className={styles.stepsH2}>The guided pathway, step by step</h2>
            <div className={styles.stepsBar} />
          </div>

          <div className={styles.timeline}>
            {STEPS.map((step, i) => (
              <div key={i} className={styles.timelineRow}>
                {/* Dot + line column */}
                <div className={styles.timelineSpine}>
                  <div className={styles.timelineDot}>
                    <div className={styles.timelineDotSvg}>{step.icon}</div>
                  </div>
                  {i < STEPS.length - 1 && <div className={styles.timelineLine} />}
                </div>

                {/* Content */}
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

          {/* Process note */}
          <div className={styles.processNote}>
            <div className={styles.processNoteIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
              </svg>
            </div>
            <p className={styles.processNoteText}>
              Legal validity depends on accurate information, correct document completion, and proper signing and witnessing. The Muslim Will is designed to support every step — but the client&apos;s responsibility for accuracy and correct execution is essential.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: After Your Will Is Done ── */}
      <section className={styles.afterSection}>
        <div className={styles.container}>
          <div className={styles.afterHeader}>
            <div className={styles.sectionLabel}>After Your Will Is Done</div>
            <h2 className={styles.sectionH2}>Your will is done. Your Vault is open. What now?</h2>
            <div className={styles.afterIntroBlock}>
              <p className={styles.sectionPara}>
                Your signed will is your document — keep a copy in a safe place and let your executor know it exists. Your Vault is your ongoing responsibility — the more you add to it, the more useful it becomes for the people who will need it.
              </p>
              <p className={styles.sectionPara}>
                Life changes. When it does — a new child, a new asset, a change in your family structure — update your will. There is no limit on updates within your subscription, and no extra cost to make changes.
              </p>
            </div>
          </div>

          <div className={styles.afterGrid}>
            {AFTER_CARDS.map((card, i) => (
              <div key={i} className={styles.afterCard}>
                <div className={styles.afterCardIcon}>{card.icon}</div>
                <h3 className={styles.afterCardTitle}>{card.title}</h3>
                <p className={styles.afterCardDesc}>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 4: Optional Expert Steps ── */}
      <section className={styles.addOnsSection}>
        <div className={styles.container}>
          <div className={styles.addOnsHeader}>
            <div className={styles.sectionLabel}>Optional Expert Steps</div>
            <h2 className={styles.sectionH2}>Add expert review at any point</h2>
            <p className={styles.addOnsIntro}>
              The core process covers everything most Muslim families need. For complex situations or those who want individual expert attention — these add-ons can be included at any stage.
            </p>
          </div>
          <div className={styles.addOnsGrid}>
            {ADD_ONS.map((addon, i) => (
              <div key={i} className={styles.addOnCard}>
                <div className={styles.addOnCardTop}>
                  <div className={styles.addOnCardAccent} />
                  <div className={styles.addOnTopRow}>
                    <span className={styles.addOnIcon}>{addon.icon}</span>
                    <span className={styles.addOnPrice}>{addon.price}</span>
                  </div>
                  <h3 className={styles.addOnTitle}>{addon.title}</h3>
                </div>
                <p className={styles.addOnDesc}>{addon.desc}</p>
                <Link href={addon.href} className={styles.addOnLink}>{addon.linkLabel}</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaH2}>Ready to start?</h2>
            <p className={styles.ctaMicro}>
              Free to register. Full access from $5.99/month. Save and return at any point.
            </p>
            <div className={styles.ctaActions}>
              <TrackedButton
                href="/apply"
                className={styles.ctaPrimary}
                eventName="hiw_start_application_footer"
                eventParams={{ location: 'how_it_works_footer' }}
              >
                Start My Application →
              </TrackedButton>
              <TrackedButton
                href="/pricing"
                className={styles.ctaSecondary}
                eventName="hiw_see_pricing"
                eventParams={{ location: 'how_it_works_footer' }}
              >
                See Pricing →
              </TrackedButton>
            </div>
            <div className={styles.ctaLinks}>
              <Link href="/vault/last-will-testament" className={styles.ctaInternalLink}>Last Will &amp; Testament</Link>
              <span>·</span>
              <Link href="/vault/estate-inventory" className={styles.ctaInternalLink}>The Vault</Link>
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
