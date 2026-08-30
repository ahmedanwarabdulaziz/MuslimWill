import type { Metadata } from 'next';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Start Your Islamic Will | The Muslim Will',
  description:
    'Begin your Islamic will and private Vault — a guided application built for Muslim families in Canada. Free to register, full access from $7.99/month.',
  alternates: { canonical: 'https://themuslimwill.com/start' },
};

const THREE_THINGS = [
  {
    num: '01',
    title: 'It is guided, not blank',
    desc: 'You will not face a blank form. Every step is a guided question — your family structure, your assets, your wishes. The platform asks what it needs, in the right order. You answer. The rest is handled.',
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
    title: 'You can save and come back',
    desc: 'Nothing is lost if you need to pause. Your application is saved automatically. Return when you are ready — from any device.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/>
        <polyline points="17 21 17 13 7 13 7 21"/>
        <polyline points="7 3 7 8 15 8"/>
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Nothing is final until you sign',
    desc: 'Your will is not active until you review it, confirm your intentions, and complete the signing process. You have full control at every step.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 11l3 3L22 4"/>
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
      </svg>
    ),
  },
];

export default function StartPage() {
  return (
    <div className={styles.main}>

      {/* ── PAGE WRAPPER: split layout ── */}
      <div className={styles.splitLayout}>

        {/* ── LEFT PANEL ── */}
        <div className={styles.leftPanel}>
          <div className={styles.leftInner}>

            {/* Wordmark / return link */}
            <Link href="/" className={styles.backLink}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="19" y1="12" x2="5" y2="12"/>
                <polyline points="12 19 5 12 12 5"/>
              </svg>
              The Muslim Will
            </Link>

            <div className={styles.leftEyebrow}>Begin Your Journey</div>
            <h1 className={styles.leftH1}>You are in the right place. Let&apos;s begin.</h1>
            <p className={styles.leftSub}>
              Your Islamic will and private Vault are waiting. The application takes most families between 30 and 60 minutes — and you can save and return at any point. Start when you are ready.
            </p>

            {/* Three things to know */}
            <div className={styles.threeThings}>
              <div className={styles.threeThingsLabel}>Before you start — three things to know</div>
              {THREE_THINGS.map((item) => (
                <div key={item.num} className={styles.thingRow}>
                  <div className={styles.thingIcon}>{item.icon}</div>
                  <div className={styles.thingBody}>
                    <div className={styles.thingTitle}>{item.title}</div>
                    <div className={styles.thingDesc}>{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Trust notes */}
            <div className={styles.trustNotes}>
              <div className={styles.trustRow}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
                Free to register. No payment required to start. Full access from $7.99/month.
              </div>
              <div className={styles.trustRow}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                </svg>
                Your information is encrypted and stored securely. We do not share your personal data with third parties.
              </div>
            </div>

            {/* Internal nav links */}
            <div className={styles.leftLinks}>
              <Link href="/how-it-works" className={styles.leftLink}>How It Works</Link>
              <span>·</span>
              <Link href="/pricing" className={styles.leftLink}>Pricing</Link>
              <span>·</span>
              <Link href="/about/faq" className={styles.leftLink}>FAQ</Link>
              <span>·</span>
              <Link href="/about/compliance" className={styles.leftLink}>Compliance</Link>
              <span>·</span>
              <Link href="/about/contact" className={styles.leftLink}>Contact</Link>
            </div>

          </div>
        </div>

        {/* ── RIGHT PANEL ── */}
        <div className={styles.rightPanel}>
          <div className={styles.rightInner}>

            <h2 className={styles.rightH2}>Select your option</h2>

            {/* Card 1 — The Bridge (primary) */}
            <div className={styles.planCard} data-primary>
              <div className={styles.planCardAccent} />
              <div className={styles.planCardBody}>
                <div className={styles.planCardTop}>
                  <div className={styles.planBadge}>✦ Most Complete</div>
                </div>
                <div className={styles.planName}>The Bridge</div>
                <div className={styles.planPriceRow}>
                  <span className={styles.planPrice}>$7.99</span>
                  <span className={styles.planPricePer}>/month</span>
                </div>
                <div className={styles.planDesc}>
                  Islamic Will + Private Vault. Everything most Muslim families need. Unlimited updates. Cancel anytime.
                </div>
                <div className={styles.planIncludes}>
                  {[
                    'Last Will & Testament — Faraid-based, Ontario-compliant',
                    'Private Vault — Obligations, Inventory, Disclosures, Final Words',
                    'Unlimited updates at no extra cost',
                    'Secure executor release process',
                  ].map((f) => (
                    <div key={f} className={styles.planIncludeItem}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {f}
                    </div>
                  ))}
                </div>
                <Link href="https://app.themuslimwill.com/Account/Login?plan=bridge" className={styles.planCta} data-primary>
                  Start For $7.99/month →
                </Link>
              </div>
            </div>

            {/* Card 2 — Full Package */}
            <div className={styles.planCard}>
              <div className={styles.planCardBody}>
                <div className={styles.planCardTop}>
                  <div className={styles.planBadge} data-muted>🎯 Full Package</div>
                  <div className={styles.planSavings}>Value: $594</div>
                </div>
                <div className={styles.planName} data-secondary>Full Package</div>
                <div className={styles.planPriceRow}>
                  <span className={styles.planPrice} data-secondary>$350</span>
                  <span className={styles.planPricePer}>one-time</span>
                </div>
                <div className={styles.planDesc}>
                  Will + Both POAs + Scholar Review + Admin Review + Digital Attestation. For complex situations or individual expert attention.
                </div>
                <Link href="https://app.themuslimwill.com/Account/Login?plan=full" className={styles.planCta} data-secondary>
                  Get The Full Package →
                </Link>
              </div>
            </div>

            {/* Card 3 — Not sure */}
            <div className={styles.notSureCard}>
              <div className={styles.notSureLabel}>Not sure yet?</div>
              <div className={styles.notSureDesc}>See what is included and how it works before committing.</div>
              <div className={styles.notSureLinks}>
                <Link href="/how-it-works" className={styles.notSureLink}>See How It Works →</Link>
                <Link href="/pricing" className={styles.notSureLink}>See Pricing →</Link>
              </div>
            </div>

            {/* Already have an account */}
            <div className={styles.signinRow}>
              Already have an account?{' '}
              <Link href="https://app.themuslimwill.com/Account/Login" className={styles.signinLink}>
                Sign in →
              </Link>
            </div>

          </div>
        </div>

      </div>

    </div>
  );
}
