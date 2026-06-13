import type { Metadata } from 'next';
import Link from 'next/link';
import { TrackedButton } from '@/components/analytics/TrackedButton';
import { InquiryForm } from '@/components/forms/InquiryForm';
import styles from './page.module.css';

const siteUrl = 'https://themuslimwill.com';
const pageTitle = 'For Lawyers | Islamic Will Referral Pathway | The Muslim Will';
const pageDescription = 'A structured referral pathway for estate and family lawyers with Muslim clients — Islamic will preparation that complements your legal work without displacing your client relationship.';

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: `${siteUrl}/professionals/lawyers` },
};

export default function LawyersPage() {
  return (
    <div className={styles.main}>

      {/* ── HERO ── */}
      <section className={styles.heroSection}>
        <div className={styles.heroOverlay} />
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.heroEyebrow}>Legal › For Lawyers</div>
            <h1 className={styles.heroH1}>
              Your Muslim clients need Islamic will preparation. You need a partner you can trust with that referral.
            </h1>
            <p className={styles.heroSub}>
              Islamic will preparation sits at the intersection of Faraid inheritance law and Canadian provincial requirements. It is a specialised service — and referring your Muslim clients to the right provider is a mark of professional thoroughness, not a gap. The Muslim Will gives you a structured, professionally managed referral pathway you can stand behind.
            </p>
            <div className={styles.heroActions}>
              <TrackedButton
                href="#request-demo"
                className={styles.ctaPrimary}
                eventName="hero_demo_click"
                eventParams={{ location: 'lawyers_hero' }}
              >
                Request a Demo →
              </TrackedButton>
              <TrackedButton
                href="/legal-islamic-compliance"
                className={styles.ctaSecondary}
                eventName="compliance_click"
                eventParams={{ location: 'lawyers_hero' }}
              >
                Our Compliance Framework
              </TrackedButton>
            </div>
          </div>
        </div>
      </section>

      {/* ── SCOPE CLARITY BAR ── */}
      <div className={styles.clarityBar}>
        <div className={styles.clarityBarInner}>
          <div className={styles.clarityItem}>
            <div className={styles.clarityIcon} data-type="not">✕</div>
            <div>
              <div className={styles.clarityItemTitle}>Not a law firm</div>
              <div className={styles.clarityItemDesc}>We do not provide legal advice</div>
            </div>
          </div>
          <div className={styles.clarityDivider} />
          <div className={styles.clarityItem}>
            <div className={styles.clarityIcon} data-type="not">✕</div>
            <div>
              <div className={styles.clarityItemTitle}>Not a competing service</div>
              <div className={styles.clarityItemDesc}>Your client relationship is never displaced</div>
            </div>
          </div>
          <div className={styles.clarityDivider} />
          <div className={styles.clarityItem}>
            <div className={styles.clarityIcon} data-type="yes">✓</div>
            <div>
              <div className={styles.clarityItemTitle}>A document platform</div>
              <div className={styles.clarityItemDesc}>Limited scope, clearly defined</div>
            </div>
          </div>
          <div className={styles.clarityDivider} />
          <div className={styles.clarityItem}>
            <div className={styles.clarityIcon} data-type="yes">✓</div>
            <div>
              <div className={styles.clarityItemTitle}>Ontario-compliant documents</div>
              <div className={styles.clarityItemDesc}>Structured to work within your legal framework</div>
            </div>
          </div>
        </div>
      </div>

      {/* ── SECTION 1: The Referral Case ── */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.referralCaseLayout}>
            <div className={styles.referralCaseText}>
              <h2 className={styles.sectionH2}>A gap in your scope does not have to be a gap in your client&apos;s plan</h2>
              <p className={styles.sectionPara}>
                Many estate and family lawyers receive requests from Muslim clients for Islamic will preparation — documents that reflect Faraid inheritance principles alongside provincial legal requirements. This is not general will drafting. It requires specific Islamic inheritance expertise that most general practice lawyers do not have and should not claim.
              </p>
              <p className={styles.sectionPara}>
                Referring to The Muslim Will is not losing a client. It is completing their plan — and doing so with a partner whose scope is clearly defined, whose process is professionally managed, and whose documents are structured to work alongside your broader legal work.
              </p>
            </div>

            <div className={styles.referralCaseCallout}>
              <div className={styles.calloutAccent} />
              <div className={styles.calloutTop}>
                <div className={styles.calloutIcon}>⚖️</div>
                <blockquote className={styles.calloutQuote}>
                  Referring to The Muslim Will is not losing a client. It is completing their plan.
                </blockquote>
              </div>
              <div className={styles.calloutBottom}>
                <div className={styles.calloutStat}>
                  <span className={styles.calloutStatValue}>1 referral</span>
                  <span className={styles.calloutStatLabel}>Your client gets a complete, professionally managed Islamic estate plan</span>
                </div>
                <div className={styles.calloutStatDivider} />
                <div className={styles.calloutStat}>
                  <span className={styles.calloutStatValue}>0 displaced</span>
                  <span className={styles.calloutStatLabel}>Your role, your relationship, your broader legal work — unchanged</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: How the Referral Works ── */}
      <section className={`${styles.section} ${styles.sectionCream}`}>
        <div className={styles.container}>
          <div className={styles.sectionHeaderCenter}>
            <h2 className={styles.sectionH2}>Clean, professional, and clearly scoped</h2>
          </div>

          <div className={styles.pointsGrid}>
            <div className={styles.pointCard}>
              <div className={styles.pointNumber}>01</div>
              <div className={styles.pointIconRing}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                  <polyline points="14 2 14 8 20 8"/>
                  <line x1="16" y1="13" x2="8" y2="13"/>
                  <line x1="16" y1="17" x2="8" y2="17"/>
                </svg>
              </div>
              <h3 className={styles.pointTitle}>Clear scope — no overlap</h3>
              <p className={styles.pointDesc}>
                The Muslim Will is a document generation and workflow platform — not a law firm. We do not provide legal advice. We prepare Islamic will documents within a structured process. Your role as the client&apos;s lawyer is never displaced.
              </p>
            </div>

            <div className={styles.pointCard}>
              <div className={styles.pointNumber}>02</div>
              <div className={styles.pointIconRing}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <h3 className={styles.pointTitle}>The client returns to you</h3>
              <p className={styles.pointDesc}>
                After their Islamic will is prepared through The Muslim Will, your client returns to you for execution, estate administration, or any broader legal matters. The relationship stays with you.
              </p>
            </div>

            <div className={styles.pointCard}>
              <div className={styles.pointNumber}>03</div>
              <div className={styles.pointIconRing}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                </svg>
              </div>
              <h3 className={styles.pointTitle}>Professional documentation</h3>
              <p className={styles.pointDesc}>
                Every document prepared through The Muslim Will is structured to work within Ontario&apos;s legal framework — ready to be reviewed, executed, and administered through your office if needed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: Compliance ── */}
      <section className={styles.complianceSection}>
        <div className={styles.complianceOverlay} />
        <div className={styles.container}>
          <div className={styles.complianceContent}>
            <h2 className={styles.complianceH2}>A platform built with professional boundaries in mind</h2>
            <div className={styles.complianceBar} />
            <p className={styles.compliancePara}>
              The Muslim Will operates as a limited scope document generation platform. We are transparent about what we are and what we are not — and our documentation reflects that. For lawyers considering a referral relationship, we are happy to share our compliance framework in full.
            </p>
            <div className={styles.compliancePillRow}>
              <div className={styles.compliancePill}>Limited scope — clearly stated</div>
              <div className={styles.compliancePill}>No legal advice provided</div>
              <div className={styles.compliancePill}>Ontario-structured documents</div>
              <div className={styles.compliancePill}>Scholar-reviewed</div>
            </div>
            <Link href="/legal-islamic-compliance" className={styles.complianceLink}>
              See Our Compliance Framework →
            </Link>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA + FORM ── */}
      <section id="request-demo" className={styles.formSection}>
        <div className={styles.container}>
          <div className={styles.formLayout}>
            <div className={styles.formIntro}>
              <h2 className={styles.formH2}>Let&apos;s talk about how a referral relationship could work.</h2>
              <p className={styles.formBody}>
                Our team will walk you through the referral process, our compliance framework, and the scope of our service — so you can refer with confidence.
              </p>
              <p className={styles.formMicrocopy}>
                We work with sole practitioners, boutique estate firms, and larger legal practices. The referral model is the same regardless of firm size.
              </p>
              <div className={styles.formLinks}>
                <div className={styles.formLinksLabel}>Related pages</div>
                <Link href="/professionals/paralegals" className={styles.formLink}>For Paralegals →</Link>
                <Link href="/professionals/estate-planners" className={styles.formLink}>For Estate Planners &amp; Trustees →</Link>
                <Link href="/legal-islamic-compliance" className={styles.formLink}>Our Compliance Framework →</Link>
                <Link href="/about/our-scholars" className={styles.formLink}>Meet Our Scholars →</Link>
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
