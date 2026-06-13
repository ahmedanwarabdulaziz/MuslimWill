import type { Metadata } from 'next';
import Link from 'next/link';
import { TrackedButton } from '@/components/analytics/TrackedButton';
import { InquiryForm } from '@/components/forms/InquiryForm';
import styles from './page.module.css';

const siteUrl = 'https://themuslimwill.com';
const pageTitle = 'For Estate Planners & Trustees | Islamic Inheritance | The Muslim Will';
const pageDescription = 'Integrate Islamic inheritance compliance into your estate planning workflow — The Muslim Will prepares the Islamic will document, you manage the broader estate strategy.';

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: `${siteUrl}/professionals/estate-planners` },
};

export default function EstatePlannersPage() {
  return (
    <div className={styles.main}>

      {/* ── HERO ── */}
      <section className={styles.heroSection}>
        <div className={styles.heroOverlay} />
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.heroEyebrow}>Wealth &amp; Planning › For Estate Planners &amp; Trustees</div>
            <h1 className={styles.heroH1}>
              You manage the estate strategy. We handle the Islamic inheritance structure.
            </h1>
            <p className={styles.heroSub}>
              For Muslim clients, estate planning requires two things to work together — the legal framework and the Islamic inheritance framework. You handle one with expertise. The Muslim Will handles the other. Together, the client gets a complete, professionally managed plan.
            </p>
            <div className={styles.heroActions}>
              <TrackedButton
                href="#request-demo"
                className={styles.ctaPrimary}
                eventName="hero_demo_click"
                eventParams={{ location: 'estate_planners_hero' }}
              >
                Request a Demo →
              </TrackedButton>
              <TrackedButton
                href="/legal-islamic-compliance"
                className={styles.ctaSecondary}
                eventName="compliance_click"
                eventParams={{ location: 'estate_planners_hero' }}
              >
                Our Compliance Framework
              </TrackedButton>
            </div>
          </div>
        </div>
      </section>

      {/* ── SCOPE STRIP ── */}
      <div className={styles.scopeStrip}>
        <div className={styles.scopeStripInner}>
          <div className={styles.scopeCol} data-yours>
            <div className={styles.scopeColLabel}>Your scope</div>
            <div className={styles.scopeItems}>
              <div className={styles.scopeItem}>Legal estate strategy</div>
              <div className={styles.scopeItem}>Asset distribution planning</div>
              <div className={styles.scopeItem}>Probate and administration</div>
              <div className={styles.scopeItem}>Trustee management</div>
            </div>
          </div>
          <div className={styles.scopeDivider}>
            <div className={styles.scopeDividerLine} />
            <div className={styles.scopeDividerPlus}>+</div>
            <div className={styles.scopeDividerLine} />
          </div>
          <div className={styles.scopeCol} data-ours>
            <div className={styles.scopeColLabel}>Our scope</div>
            <div className={styles.scopeItems}>
              <div className={styles.scopeItem}>Faraid calculation and documentation</div>
              <div className={styles.scopeItem}>Islamic will preparation</div>
              <div className={styles.scopeItem}>Scholar review and attestation</div>
              <div className={styles.scopeItem}>Private Vault and executor release</div>
            </div>
          </div>
          <div className={styles.scopeResult}>
            <div className={styles.scopeResultLabel}>Result</div>
            <div className={styles.scopeResultText}>A complete, professionally managed plan for your Muslim client</div>
          </div>
        </div>
      </div>

      {/* ── SECTION 1: Where Islamic Inheritance Fits ── */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.faiqLayout}>
            <div className={styles.faraidExplainer}>
              <div className={styles.faraidPill}>Faraid — Islamic Inheritance Law</div>
              <h2 className={styles.sectionH2}>Faraid is not a complication. It is a structure you can build around.</h2>
              <p className={styles.sectionPara}>
                Islamic inheritance law — Faraid — defines specific shares for each category of heir based on the deceased&apos;s family structure. It is a precise, structured system. When it is handled correctly alongside the legal estate plan, the two frameworks coexist cleanly. When it is ignored or mishandled, it creates conflict.
              </p>
              <p className={styles.sectionPara}>
                The Muslim Will calculates Faraid accurately, integrates it into a legally structured Ontario will, and provides a documented basis for your work as the estate planner or trustee. You always know what the Islamic inheritance structure looks like — and you can build your broader strategy around it.
              </p>
            </div>

            <div className={styles.faraidStructure}>
              <div className={styles.faraidStructureLabel}>How Faraid and the legal plan coexist</div>
              <div className={styles.faraidRow}>
                <div className={styles.faraidBlock} data-type="faraid">
                  <div className={styles.faraidBlockTitle}>Faraid shares</div>
                  <div className={styles.faraidBlockDesc}>Calculated by The Muslim Will — Islamically correct, legally documented</div>
                </div>
                <div className={styles.faraidPlus}>+</div>
                <div className={styles.faraidBlock} data-type="legal">
                  <div className={styles.faraidBlockTitle}>Legal estate plan</div>
                  <div className={styles.faraidBlockDesc}>Managed by your team — provincial compliance, administration, probate</div>
                </div>
              </div>
              <div className={styles.faraidResult}>
                <div className={styles.faraidResultText}>One complete plan. Clear scope. No conflict.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: How the Partnership Works ── */}
      <section className={`${styles.section} ${styles.sectionCream}`}>
        <div className={styles.container}>
          <div className={styles.sectionHeaderCenter}>
            <h2 className={styles.sectionH2}>A clean integration into your existing workflow</h2>
          </div>

          <div className={styles.integrationGrid}>
            <div className={styles.integrationCard}>
              <div className={styles.integrationBadge}>Option A</div>
              <h3 className={styles.integrationTitle}>Referral</h3>
              <p className={styles.integrationDesc}>
                You refer your Muslim client to The Muslim Will for Islamic will preparation. We prepare the document. You manage the broader estate strategy with full visibility into the Islamic inheritance structure we have documented.
              </p>
              <div className={styles.integrationMeta}>
                <div className={styles.integrationMetaItem}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  Minimal workflow change
                </div>
                <div className={styles.integrationMetaItem}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  Full Faraid documentation provided to your team
                </div>
                <div className={styles.integrationMetaItem}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  Best for straightforward estates
                </div>
              </div>
            </div>

            <div className={styles.integrationCard} data-featured>
              <div className={styles.integrationBadge} data-featured>Option B</div>
              <h3 className={styles.integrationTitle}>Parallel Engagement</h3>
              <p className={styles.integrationDesc}>
                For complex estates, we can work in parallel — your team managing the legal and financial planning, our team handling the Islamic will and Vault. Clear scope, no overlap, no confusion about who is responsible for what.
              </p>
              <div className={styles.integrationMeta}>
                <div className={styles.integrationMetaItem}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  Structured co-engagement — clear boundaries
                </div>
                <div className={styles.integrationMetaItem}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  Ongoing communication between teams
                </div>
                <div className={styles.integrationMetaItem}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  Best for complex or high-value estates
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: What You Can Tell Your Clients ── */}
      <section className={styles.clientAnswerSection}>
        <div className={styles.clientAnswerOverlay} />
        <div className={styles.container}>
          <div className={styles.clientAnswerContent}>
            <h2 className={styles.clientAnswerH2}>A clear, professional answer to a question clients often ask</h2>
            <div className={styles.clientAnswerBar} />
            <div className={styles.clientAnswerQuote}>
              <div className={styles.clientAnswerQuoteMark}>&ldquo;</div>
              <p className={styles.clientAnswerQuoteText}>
                Can my will reflect Islamic inheritance principles?
              </p>
            </div>
            <p className={styles.clientAnswerResponse}>
              The answer is <strong>yes</strong> — with the right specialist involved. The Muslim Will gives you a structured, credible answer to that question and a professional pathway to deliver it. Muslim clients frequently ask their estate planner about Islamic inheritance. Now you have a complete response.
            </p>
            <TrackedButton
              href="#request-demo"
              className={styles.clientAnswerCta}
              eventName="client_answer_demo_click"
              eventParams={{ location: 'estate_planners_client_answer' }}
            >
              Request a Demo →
            </TrackedButton>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA + FORM ── */}
      <section id="request-demo" className={styles.formSection}>
        <div className={styles.container}>
          <div className={styles.formLayout}>
            <div className={styles.formIntro}>
              <h2 className={styles.formH2}>Let&apos;s talk about how this fits your practice.</h2>
              <p className={styles.formBody}>
                Our team includes professionals who understand estate planning workflows. We will show you exactly how the integration works.
              </p>
              <p className={styles.formMicrocopy}>
                Whether you are a sole practitioner or part of a larger firm, the integration model is the same — clear scope, documented handoffs, and a complete plan for your client.
              </p>
              <div className={styles.formLinks}>
                <div className={styles.formLinksLabel}>Related pages</div>
                <Link href="/professionals/financial-advisors" className={styles.formLink}>For Financial Advisors →</Link>
                <Link href="/professionals/lawyers" className={styles.formLink}>For Lawyers →</Link>
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
