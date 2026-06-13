import type { Metadata } from 'next';
import Link from 'next/link';
import { TrackedButton } from '@/components/analytics/TrackedButton';
import { InquiryForm } from '@/components/forms/InquiryForm';
import styles from './page.module.css';

const siteUrl = 'https://themuslimwill.com';
const pageTitle = 'For Paralegals | Islamic Will Platform | The Muslim Will';
const pageDescription = 'Support your supervising lawyer\'s Muslim estate clients with a structured platform for Islamic will preparation — guided intake, Faraid calculations, and Ontario-compliant documents.';

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: `${siteUrl}/professionals/paralegals` },
};

export default function ParalegalsPage() {
  return (
    <div className={styles.main}>

      {/* ── HERO ── */}
      <section className={styles.heroSection}>
        <div className={styles.heroOverlay} />
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.heroEyebrow}>Legal › For Paralegals</div>
            <h1 className={styles.heroH1}>
              A platform built for clean, compliant Islamic will document preparation — so your work is easier and your clients are better served.
            </h1>
            <p className={styles.heroSub}>
              When your supervising lawyer has Muslim estate clients who need Islamic will preparation, The Muslim Will gives you a structured platform to support that work — guided intake, Faraid calculations, document generation, and Ontario-compliant output. Clean, documented, and built for professional use.
            </p>
            <div className={styles.heroActions}>
              <TrackedButton
                href="#request-demo"
                className={styles.ctaPrimary}
                eventName="hero_demo_click"
                eventParams={{ location: 'paralegals_hero' }}
              >
                Request a Demo →
              </TrackedButton>
              <TrackedButton
                href="/legal-islamic-compliance"
                className={styles.ctaSecondary}
                eventName="compliance_click"
                eventParams={{ location: 'paralegals_hero' }}
              >
                Our Compliance Framework
              </TrackedButton>
            </div>
          </div>
        </div>
      </section>

      {/* ── WORKFLOW STRIP ── */}
      <div className={styles.workflowStrip}>
        <div className={styles.workflowStripInner}>
          <div className={styles.workflowStep}>
            <div className={styles.workflowStepNum}>1</div>
            <div className={styles.workflowStepLabel}>Client intake</div>
          </div>
          <div className={styles.workflowArrow}>→</div>
          <div className={styles.workflowStep}>
            <div className={styles.workflowStepNum}>2</div>
            <div className={styles.workflowStepLabel}>Faraid calculation</div>
          </div>
          <div className={styles.workflowArrow}>→</div>
          <div className={styles.workflowStep}>
            <div className={styles.workflowStepNum}>3</div>
            <div className={styles.workflowStepLabel}>Document generation</div>
          </div>
          <div className={styles.workflowArrow}>→</div>
          <div className={styles.workflowStep}>
            <div className={styles.workflowStepNum}>4</div>
            <div className={styles.workflowStepLabel}>Ontario-compliant output</div>
          </div>
          <div className={styles.workflowArrow}>→</div>
          <div className={styles.workflowStep} data-final>
            <div className={styles.workflowStepNum}>✓</div>
            <div className={styles.workflowStepLabel}>Clean file. Ready to execute.</div>
          </div>
        </div>
      </div>

      {/* ── SECTION 1: What The Muslim Will Provides ── */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeaderCenter}>
            <h2 className={styles.sectionH2}>Everything you need to support Islamic will preparation</h2>
            <p className={styles.sectionIntro}>
              Four platform features — designed to reduce back-and-forth, minimise errors, and produce documents ready for professional review.
            </p>
          </div>

          <div className={styles.featuresGrid}>

            <div className={styles.featureCard}>
              <div className={styles.featureCardInner}>
                <div className={styles.featureIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 11l3 3L22 4"/>
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
                  </svg>
                </div>
                <div className={styles.featureTag}>Intake</div>
                <h3 className={styles.featureTitle}>Guided intake workflow</h3>
                <p className={styles.featureDesc}>
                  A structured client intake process — family details, assets, heirs, guardianship preferences, and charitable intentions — collected through a guided application that reduces back-and-forth and ensures nothing is missed.
                </p>
              </div>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureCardInner}>
                <div className={styles.featureIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2"/>
                    <path d="M3 9h18"/><path d="M9 21V9"/>
                  </svg>
                </div>
                <div className={styles.featureTag}>Calculation</div>
                <h3 className={styles.featureTitle}>Faraid calculation</h3>
                <p className={styles.featureDesc}>
                  Islamic inheritance shares are calculated automatically based on the client&apos;s family structure — with full documentation of the calculation so your supervising lawyer can review and confirm.
                </p>
              </div>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureCardInner}>
                <div className={styles.featureIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                    <polyline points="14 2 14 8 20 8"/>
                    <polyline points="16 13 12 17 8 13"/>
                    <line x1="12" y1="17" x2="12" y2="7"/>
                  </svg>
                </div>
                <div className={styles.featureTag}>Documents</div>
                <h3 className={styles.featureTitle}>Ontario-compliant document output</h3>
                <p className={styles.featureDesc}>
                  Every will document is structured to meet Ontario&apos;s legal requirements — ready for review, execution, and administration through your office.
                </p>
              </div>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureCardInner}>
                <div className={styles.featureIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                  </svg>
                </div>
                <div className={styles.featureTag}>Records</div>
                <h3 className={styles.featureTitle}>Secure client records</h3>
                <p className={styles.featureDesc}>
                  Client documents are held securely within the platform and can be accessed through the professional workflow — no loose files, no email attachments, no version confusion.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── SECTION 2: Less Chasing ── */}
      <section className={styles.chasingSection}>
        <div className={styles.chasingOverlay} />
        <div className={styles.container}>
          <div className={styles.chasingContent}>
            <h2 className={styles.chasingH2}>Less chasing. More completing.</h2>
            <div className={styles.chasingBar} />

            <div className={styles.chasingCompare}>
              <div className={styles.chasingCol} data-before>
                <div className={styles.chasingColLabel}>Without a structured platform</div>
                <ul className={styles.chasingList}>
                  <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                    Multiple rounds of clarification with the client
                  </li>
                  <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                    Inheritance share questions bounced between client and lawyer
                  </li>
                  <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                    Loose files, email chains, version confusion
                  </li>
                  <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                    Missing details discovered late in the process
                  </li>
                </ul>
              </div>

              <div className={styles.chasingVsDivider}>
                <div className={styles.chasingVsLine} />
                <div className={styles.chasingVsBadge}>vs</div>
                <div className={styles.chasingVsLine} />
              </div>

              <div className={styles.chasingCol} data-after>
                <div className={styles.chasingColLabel}>With The Muslim Will</div>
                <ul className={styles.chasingList}>
                  <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    Structured intake collects everything upfront
                  </li>
                  <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    Faraid shares calculated automatically — documented for review
                  </li>
                  <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    All records held securely in one place
                  </li>
                  <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    Clean file — ready for your lawyer&apos;s review from day one
                  </li>
                </ul>
              </div>
            </div>

            <p className={styles.chasingConclusion}>
              Islamic will preparation often involves multiple rounds of clarification — family structures, asset details, inheritance share questions. The Muslim Will&apos;s guided intake process collects the right information upfront. The result is a cleaner file, a faster process, and a better experience for your client.
            </p>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA + FORM ── */}
      <section id="request-demo" className={styles.formSection}>
        <div className={styles.container}>
          <div className={styles.formLayout}>
            <div className={styles.formIntro}>
              <h2 className={styles.formH2}>See how it fits into your workflow.</h2>
              <p className={styles.formBody}>
                Our team will walk you through the platform and show you exactly how it supports your work as a paralegal on estate files.
              </p>
              <p className={styles.formMicrocopy}>
                The demo is practical — we will walk through the intake flow, show you the Faraid calculation output, and show you what the final document looks like before it reaches your lawyer for review.
              </p>
              <div className={styles.formLinks}>
                <div className={styles.formLinksLabel}>Related pages</div>
                <Link href="/professionals/lawyers" className={styles.formLink}>For Lawyers →</Link>
                <Link href="/legal-islamic-compliance" className={styles.formLink}>Our Compliance Framework →</Link>
                <Link href="/professionals/estate-planners" className={styles.formLink}>For Estate Planners &amp; Trustees →</Link>
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
