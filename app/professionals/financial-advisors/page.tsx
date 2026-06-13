import type { Metadata } from 'next';
import Link from 'next/link';
import { TrackedButton } from '@/components/analytics/TrackedButton';
import { InquiryForm } from '@/components/forms/InquiryForm';
import styles from './page.module.css';

const siteUrl = 'https://themuslimwill.com';
const pageTitle = 'For Financial Advisors | Islamic Will Referral | The Muslim Will';
const pageDescription = 'A structured referral pathway for financial advisors with Muslim clients — Islamic will preparation that completes the estate planning picture without displacing your relationship.';

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: `${siteUrl}/professionals/financial-advisors` },
};

export default function FinancialAdvisorsPage() {
  return (
    <div className={styles.main}>

      {/* ── HERO ── */}
      <section className={styles.heroSection}>
        <div className={styles.heroOverlay} />
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.heroEyebrow}>Wealth &amp; Planning › For Financial Advisors</div>
            <h1 className={styles.heroH1}>
              Your Muslim clients trust you with their financial future. Islamic estate planning is part of that picture.
            </h1>
            <p className={styles.heroSub}>
              For Muslim clients, a complete wealth strategy includes an Islamic will — one that reflects Faraid inheritance principles and holds up under Canadian law. If that piece is missing, the plan is incomplete. The Muslim Will gives you a structured, professional referral pathway to fill that gap — without stepping outside your scope.
            </p>
            <div className={styles.heroActions}>
              <TrackedButton
                href="#request-demo"
                className={styles.ctaPrimary}
                eventName="hero_demo_click"
                eventParams={{ location: 'financial_advisors_hero' }}
              >
                Request a Demo →
              </TrackedButton>
              <TrackedButton
                href="/legal-islamic-compliance"
                className={styles.ctaSecondary}
                eventName="compliance_click"
                eventParams={{ location: 'financial_advisors_hero' }}
              >
                Our Compliance Framework
              </TrackedButton>
            </div>
          </div>
        </div>
      </section>

      {/* ── STAT STRIP ── */}
      <div className={styles.statStrip}>
        <div className={styles.statStripInner}>
          <div className={styles.stat}>
            <div className={styles.statValue}>Faraid</div>
            <div className={styles.statLabel}>Islamic inheritance shares — built into every will</div>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat}>
            <div className={styles.statValue}>Ontario</div>
            <div className={styles.statLabel}>Legal compliance — provincially valid documents</div>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat}>
            <div className={styles.statValue}>0</div>
            <div className={styles.statLabel}>Additional scope required from your practice</div>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat}>
            <div className={styles.statValue}>1</div>
            <div className={styles.statLabel}>Referral — your client relationship stays with you</div>
          </div>
        </div>
      </div>

      {/* ── SECTION 1: The Gap ── */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.gapLayout}>
            <div className={styles.gapText}>
              <h2 className={styles.sectionH2}>A will that ignores Islamic inheritance is not a complete will</h2>
              <p className={styles.sectionPara}>
                Many Muslim clients have wills. Far fewer have wills that correctly reflect Islamic inheritance principles — the Faraid shares that define how their estate should be distributed according to their faith. When those principles are missing, families face confusion, disputes, and outcomes their loved one never intended.
              </p>
              <p className={styles.sectionPara}>
                As a financial advisor, you cannot prepare that document. But you can be the person who made sure your client got it done — through a structured referral to a platform built specifically for this purpose.
              </p>
            </div>

            <div className={styles.gapCards}>
              <div className={styles.gapCard} data-type="problem">
                <div className={styles.gapCardLabel}>Without Islamic will planning</div>
                <ul className={styles.gapList}>
                  <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                    Estate distributed under provincial intestacy — not Faraid
                  </li>
                  <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                    Family disputes — shares distributed in ways the client never intended
                  </li>
                  <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                    Charitable bequest intentions lost — no Wasiyyah in place
                  </li>
                  <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                    The financial plan is complete. The estate plan is not.
                  </li>
                </ul>
              </div>

              <div className={styles.gapCard} data-type="solution">
                <div className={styles.gapCardLabel}>With a referral to The Muslim Will</div>
                <ul className={styles.gapList}>
                  <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    Faraid shares calculated and documented correctly
                  </li>
                  <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    Legally valid document — compliant under Ontario law
                  </li>
                  <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    Charitable giving structured within the Islamic 1/3 framework
                  </li>
                  <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    The plan is complete. You made it happen.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: Referral Pathway ── */}
      <section className={`${styles.section} ${styles.sectionCream}`}>
        <div className={styles.container}>
          <div className={styles.sectionHeaderCenter}>
            <h2 className={styles.sectionH2}>You refer. We deliver. You stay the trusted advisor.</h2>
          </div>

          <div className={styles.referralSteps}>
            <div className={styles.referralStep}>
              <div className={styles.referralStepNum}>01</div>
              <div className={styles.referralStepIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
                </svg>
              </div>
              <h3 className={styles.referralStepTitle}>You identify the need</h3>
              <p className={styles.referralStepDesc}>
                During a financial planning or estate review conversation with a Muslim client, you identify that Islamic will preparation is part of a complete plan — and introduce The Muslim Will as the right pathway.
              </p>
            </div>

            <div className={styles.referralArrow}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </div>

            <div className={styles.referralStep}>
              <div className={styles.referralStepNum}>02</div>
              <div className={styles.referralStepIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                  <polyline points="14 2 14 8 20 8"/>
                  <line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>
                </svg>
              </div>
              <h3 className={styles.referralStepTitle}>We handle everything</h3>
              <p className={styles.referralStepDesc}>
                The client is guided through a complete Islamic will and private Vault — Faraid calculations, Ontario legal compliance, guardianship, charitable bequests, and executor appointment. You do not need to understand Islamic inheritance law to make this referral.
              </p>
            </div>

            <div className={styles.referralArrow}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </div>

            <div className={styles.referralStep}>
              <div className={styles.referralStepNum}>03</div>
              <div className={styles.referralStepIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <h3 className={styles.referralStepTitle}>You remain their advisor</h3>
              <p className={styles.referralStepDesc}>
                The Muslim Will prepares the Islamic will document. You continue managing the broader wealth strategy. The client's relationship with you is strengthened — not handed off.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: Why This Matters ── */}
      <section className={styles.trustSection}>
        <div className={styles.trustOverlay} />
        <div className={styles.container}>
          <div className={styles.trustContent}>
            <h2 className={styles.trustH2}>Complete advice builds deeper trust</h2>
            <div className={styles.trustBar} />
            <p className={styles.trustPara}>
              Muslim clients who feel their advisor understands their full planning needs — including the faith dimension of their estate — are more likely to stay, refer others, and expand the relationship. A structured Islamic will referral is a small addition to your practice that signals something significant: that you see the whole picture.
            </p>
            <div className={styles.trustPillRow}>
              <div className={styles.trustPill}>Stronger client retention</div>
              <div className={styles.trustPill}>More referrals</div>
              <div className={styles.trustPill}>Deeper trust</div>
              <div className={styles.trustPill}>Complete planning</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA + FORM ── */}
      <section id="request-demo" className={styles.formSection}>
        <div className={styles.container}>
          <div className={styles.formLayout}>
            <div className={styles.formIntro}>
              <h2 className={styles.formH2}>Let us show you how the referral pathway works.</h2>
              <p className={styles.formBody}>
                Our partnerships team will walk you through the referral process and answer any questions about how it fits into your practice.
              </p>
              <p className={styles.formMicrocopy}>
                We work with advisors at all practice sizes — independent planners, small firms, and large institutional teams. The referral pathway is the same regardless of scale.
              </p>
              <div className={styles.formLinks}>
                <div className={styles.formLinksLabel}>Related pages</div>
                <Link href="/professionals/estate-planners" className={styles.formLink}>For Estate Planners &amp; Trustees →</Link>
                <Link href="/legal-islamic-compliance" className={styles.formLink}>Our Compliance Framework →</Link>
                <Link href="/our-scholars" className={styles.formLink}>Meet Our Scholars →</Link>
              </div>
            </div>
            <div className={styles.formWrapper}>
              <InquiryForm variant="partnership" />
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
