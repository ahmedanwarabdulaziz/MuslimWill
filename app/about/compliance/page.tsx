import type { Metadata } from 'next';
import Link from 'next/link';
import { TrackedButton } from '@/components/analytics/TrackedButton';
import styles from './page.module.css';

const siteUrl = 'https://themuslimwill.com';
const pageTitle = 'Compliance | Our Scope and Professional Boundaries | The Muslim Will';
const pageDescription = 'Understand how The Muslim Will is structured — our scope, our professional boundaries, the role of Islamic scholars and legal professionals, and what legal validity depends on.';

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: `${siteUrl}/about/compliance` },
};

export default function CompliancePage() {
  return (
    <div className={styles.main}>

      {/* ── HERO ── */}
      <section className={styles.heroSection}>
        <div className={styles.heroOverlay} />
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.heroEyebrow}>Trust &amp; Transparency › Compliance</div>
            <h1 className={styles.heroH1}>
              A platform with clear professional boundaries — and a commitment to staying within them.
            </h1>
            <p className={styles.heroSub}>
              The Muslim Will is not a law firm. It does not issue legal advice. It does not issue fatwas. It is a structured estate planning platform that brings the right professional layers together — Islamic scholars, legal professionals, and estate planning workflow — within a clearly defined scope. Understanding what we are — and what we are not — is part of how trust is earned.
            </p>
          </div>
        </div>
      </section>

      {/* ── SCOPE INDICATOR STRIP ── */}
      <div className={styles.scopeStrip}>
        <div className={styles.scopeStripInner}>
          <div className={styles.scopeStripItem} data-yes>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            <span>Structured estate planning platform</span>
          </div>
          <div className={styles.scopeStripItem} data-yes>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            <span>Islamic inheritance review by qualified scholars</span>
          </div>
          <div className={styles.scopeStripItem} data-yes>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            <span>Ontario-compliant document preparation</span>
          </div>
          <div className={styles.scopeStripItem} data-no>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            <span>Not a law firm</span>
          </div>
          <div className={styles.scopeStripItem} data-no>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            <span>Not a fatwa-issuing body</span>
          </div>
        </div>
      </div>

      {/* ── SECTION 1: What We Are ── */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.whatLayout}>
            <div className={styles.whatText}>
              <div className={styles.sectionLabel}>What We Are</div>
              <h2 className={styles.sectionH2}>A structured document generation and workflow platform</h2>
              <p className={styles.sectionPara}>
                The Muslim Will is a technology platform that guides users through a structured estate planning process — collecting information, calculating Islamic inheritance shares, generating documents, coordinating professional review, and managing secure storage through the Vault. Every step of that process is defined, documented, and accountable.
              </p>
              <p className={styles.sectionPara}>
                We are not a law firm. We are not an Islamic jurisprudence body. We are a platform that connects the right expertise to the right people — within a scope that is honest about its boundaries.
              </p>
            </div>

            <div className={styles.whatPlatformCard}>
              <div className={styles.whatPlatformCardAccent} />
              <div className={styles.whatPlatformCardBody}>
                <div className={styles.whatPlatformCardLabel}>Platform scope</div>
                <div className={styles.whatPlatformSteps}>
                  <div className={styles.whatStep}>
                    <div className={styles.whatStepNum}>1</div>
                    <div>
                      <div className={styles.whatStepTitle}>Intake &amp; Information</div>
                      <div className={styles.whatStepDesc}>Structured collection of family, asset, and estate information</div>
                    </div>
                  </div>
                  <div className={styles.whatStepArrow}>↓</div>
                  <div className={styles.whatStep}>
                    <div className={styles.whatStepNum}>2</div>
                    <div>
                      <div className={styles.whatStepTitle}>Faraid Calculation</div>
                      <div className={styles.whatStepDesc}>Islamic inheritance shares calculated from the provided family structure</div>
                    </div>
                  </div>
                  <div className={styles.whatStepArrow}>↓</div>
                  <div className={styles.whatStep}>
                    <div className={styles.whatStepNum}>3</div>
                    <div>
                      <div className={styles.whatStepTitle}>Scholar Review</div>
                      <div className={styles.whatStepDesc}>Inheritance calculation reviewed by a qualified Islamic scholar</div>
                    </div>
                  </div>
                  <div className={styles.whatStepArrow}>↓</div>
                  <div className={styles.whatStep}>
                    <div className={styles.whatStepNum}>4</div>
                    <div>
                      <div className={styles.whatStepTitle}>Document Generation</div>
                      <div className={styles.whatStepDesc}>Ontario-compliant will document prepared for review and execution</div>
                    </div>
                  </div>
                  <div className={styles.whatStepArrow}>↓</div>
                  <div className={styles.whatStep}>
                    <div className={styles.whatStepNum}>5</div>
                    <div>
                      <div className={styles.whatStepTitle}>Secure Vault</div>
                      <div className={styles.whatStepDesc}>Documents and final instructions stored in the private Vault</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: Three Layers ── */}
      <section className={styles.layersSection}>
        <div className={styles.layersOverlay} />
        <div className={styles.container}>
          <div className={styles.layersContent}>
            <h2 className={styles.layersH2}>Each layer has a defined role. No layer overreaches into another.</h2>
            <div className={styles.layersBar} />

            <div className={styles.layersGrid}>
              {/* Layer 1 */}
              <div className={styles.layerCard}>
                <div className={styles.layerCardNum}>01</div>
                <div className={styles.layerCardIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
                  </svg>
                </div>
                <h3 className={styles.layerCardTitle}>The Platform</h3>
                <p className={styles.layerCardDesc}>
                  The Muslim Will manages the intake workflow, Faraid calculations, document generation, secure Vault storage, and the coordination between the client and the professional review layers.
                </p>
                <div className={styles.layerCardBoundary}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                  Does not provide legal advice or issue religious rulings
                </div>
              </div>

              {/* Layer 2 */}
              <div className={styles.layerCard} data-featured>
                <div className={styles.layerCardFeaturedTop} />
                <div className={styles.layerCardNum}>02</div>
                <div className={styles.layerCardIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>
                  </svg>
                </div>
                <h3 className={styles.layerCardTitle}>Islamic Inheritance Review</h3>
                <p className={styles.layerCardDesc}>
                  Qualified Islamic scholars within our network review inheritance calculations for Islamic correctness — verifying Faraid shares and identifying complex situations requiring additional guidance.
                </p>
                <div className={styles.layerCardBoundary}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                  Not a personal fatwa — does not replace personal scholarly consultation
                </div>
              </div>

              {/* Layer 3 */}
              <div className={styles.layerCard}>
                <div className={styles.layerCardNum}>03</div>
                <div className={styles.layerCardIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/>
                  </svg>
                </div>
                <h3 className={styles.layerCardTitle}>Legal Workflow &amp; Document Review</h3>
                <p className={styles.layerCardDesc}>
                  Licensed legal professionals review and oversee the document structure and execution requirements within the Ontario legal framework. Documents are prepared to meet provincial requirements for a valid testamentary instrument.
                </p>
                <div className={styles.layerCardBoundary}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                  Not independent legal advice — complex situations warrant independent counsel
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: Ontario ── */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.ontarioLayout}>
            <div className={styles.ontarioText}>
              <div className={styles.sectionLabel}>Jurisdiction</div>
              <h2 className={styles.sectionH2}>Canada-first. Ontario as the clearest current framework.</h2>
              <p className={styles.sectionPara}>
                The Muslim Will is positioned as a Canada-first platform. Ontario provides the clearest current legal framework for our document preparation and execution workflow. Clients in other provinces should discuss their specific provincial requirements with a qualified legal professional.
              </p>
              <p className={styles.sectionPara}>
                Future expansion to additional provinces — and eventually to the United States — will be handled through dedicated, jurisdiction-specific content and processes. We do not make broad claims that go beyond what we can currently support.
              </p>
            </div>

            <div className={styles.ontarioJurisdictions}>
              <div className={styles.ontarioJurisdiction} data-active>
                <div className={styles.ontarioJurisHeader}>
                  <div className={styles.ontarioJurisBadge}>Current</div>
                  <div className={styles.ontarioJurisTitle}>Ontario, Canada</div>
                </div>
                <div className={styles.ontarioJurisDesc}>Full document preparation and execution workflow. Our primary legal anchor.</div>
                <div className={styles.ontarioJurisStatus}>
                  <div className={styles.ontarioStatusDot} />
                  Active
                </div>
              </div>
              <div className={styles.ontarioJurisdiction}>
                <div className={styles.ontarioJurisHeader}>
                  <div className={styles.ontarioJurisBadge} data-future>Future</div>
                  <div className={styles.ontarioJurisTitle}>Other Canadian Provinces</div>
                </div>
                <div className={styles.ontarioJurisDesc}>Jurisdiction-specific content and processes will be developed. Clients in other provinces should seek independent legal advice.</div>
                <div className={styles.ontarioJurisStatus} data-planned>
                  <div className={styles.ontarioStatusDotPlanned} />
                  Planned
                </div>
              </div>
              <div className={styles.ontarioJurisdiction}>
                <div className={styles.ontarioJurisHeader}>
                  <div className={styles.ontarioJurisBadge} data-future>Future</div>
                  <div className={styles.ontarioJurisTitle}>United States &amp; United Kingdom</div>
                </div>
                <div className={styles.ontarioJurisDesc}>Separate legal frameworks. Will require dedicated jurisdiction-specific workflows before we can serve these markets.</div>
                <div className={styles.ontarioJurisStatus} data-planned>
                  <div className={styles.ontarioStatusDotPlanned} />
                  Planned
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: Legal Validity ── */}
      <section className={`${styles.section} ${styles.sectionCream}`}>
        <div className={styles.container}>
          <div className={styles.validityLayout}>
            <div className={styles.validityText}>
              <div className={styles.sectionLabel}>Legal Validity</div>
              <h2 className={styles.sectionH2}>A clear statement on enforceability</h2>
              <p className={styles.sectionPara}>
                Legal validity of a will in Ontario depends on accurate information provided by the client, correct completion of the document, proper signing, and correct witnessing in accordance with provincial requirements. The Muslim Will is structured to support all of these steps — but the client&apos;s responsibility for accuracy and the correct execution of the document remains essential.
              </p>
              <div className={styles.validityNote}>
                <div className={styles.validityNoteBar} />
                <p className={styles.validityNoteText}>
                  We state this not to diminish confidence in the process — but because honest communication about scope is part of how a trustworthy platform operates.
                </p>
              </div>
            </div>

            <div className={styles.validityFactors}>
              <div className={styles.validityFactorsLabel}>Validity depends on</div>
              <div className={styles.validityFactor}>
                <div className={styles.validityFactorNum}>01</div>
                <div>
                  <div className={styles.validityFactorTitle}>Accurate client information</div>
                  <div className={styles.validityFactorDesc}>The client is responsible for the accuracy of all information provided</div>
                </div>
              </div>
              <div className={styles.validityFactor}>
                <div className={styles.validityFactorNum}>02</div>
                <div>
                  <div className={styles.validityFactorTitle}>Correct document completion</div>
                  <div className={styles.validityFactorDesc}>All required fields and instructions followed precisely</div>
                </div>
              </div>
              <div className={styles.validityFactor}>
                <div className={styles.validityFactorNum}>03</div>
                <div>
                  <div className={styles.validityFactorTitle}>Proper signing &amp; witnessing</div>
                  <div className={styles.validityFactorDesc}>Executed in accordance with Ontario testamentary requirements</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 5: What We Are Not ── */}
      <section className={styles.notSection}>
        <div className={styles.container}>
          <div className={styles.notContent}>
            <h2 className={styles.notH2}>Boundaries stated plainly</h2>
            <p className={styles.notIntro}>These are not disclaimers — they are honest statements about scope. A platform that is clear about what it is not can be trusted to do what it says it does.</p>
            <div className={styles.notGrid}>
              <div className={styles.notItem}>
                <div className={styles.notItemX}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                </div>
                <div>
                  <div className={styles.notItemTitle}>Not a law firm</div>
                  <div className={styles.notItemDesc}>The Muslim Will does not provide legal advice and is not regulated as a legal services provider</div>
                </div>
              </div>
              <div className={styles.notItem}>
                <div className={styles.notItemX}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                </div>
                <div>
                  <div className={styles.notItemTitle}>Not an Islamic jurisprudence body</div>
                  <div className={styles.notItemDesc}>We do not issue fatwas — scholar review is structured professional review within a defined scope</div>
                </div>
              </div>
              <div className={styles.notItem}>
                <div className={styles.notItemX}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                </div>
                <div>
                  <div className={styles.notItemTitle}>Does not guarantee legal validity in every case</div>
                  <div className={styles.notItemDesc}>Validity depends on accurate information and correct execution by the client</div>
                </div>
              </div>
              <div className={styles.notItem}>
                <div className={styles.notItemX}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                </div>
                <div>
                  <div className={styles.notItemTitle}>Does not replace a lawyer for complex situations</div>
                  <div className={styles.notItemDesc}>Clients with complex estate situations are encouraged to seek independent legal counsel</div>
                </div>
              </div>
              <div className={styles.notItem}>
                <div className={styles.notItemX}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                </div>
                <div>
                  <div className={styles.notItemTitle}>Does not replace personal scholarly consultation</div>
                  <div className={styles.notItemDesc}>For complex religious questions, a personal consultation with a scholar of your choice is always appropriate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaH2}>Ready to start? We operate within our scope — and we are very good at it.</h2>
            <p className={styles.ctaTrust}>
              Questions about our compliance framework, scope of service, or professional boundaries are welcome. Our team responds to every enquiry personally.
            </p>
            <div className={styles.ctaActions}>
              <TrackedButton
                href="https://app.themuslimwill.com/Account/Login"
                className={styles.ctaPrimary}
                eventName="compliance_start_application"
                eventParams={{ location: 'compliance_footer' }}
              >
                Start My Application →
              </TrackedButton>
              <TrackedButton
                href="/about/contact"
                className={styles.ctaSecondary}
                eventName="compliance_contact"
                eventParams={{ location: 'compliance_footer' }}
              >
                Contact Our Team →
              </TrackedButton>
            </div>
            <div className={styles.ctaLinks}>
              <Link href="/about/our-scholars" className={styles.ctaInternalLink}>Our Scholars</Link>
              <span>·</span>
              <Link href="/about/our-team" className={styles.ctaInternalLink}>Our Team</Link>
              <span>·</span>
              <Link href="/faq" className={styles.ctaInternalLink}>FAQ</Link>
              <span>·</span>
              <Link href="/about/contact" className={styles.ctaInternalLink}>Contact</Link>
              <span>·</span>
              <Link href="/professionals/lawyers" className={styles.ctaInternalLink}>For Lawyers</Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
