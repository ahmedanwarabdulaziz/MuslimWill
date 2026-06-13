import type { Metadata } from 'next';
import Link from 'next/link';
import { TrackedButton } from '@/components/analytics/TrackedButton';
import { InquiryForm } from '@/components/forms/InquiryForm';
import styles from './page.module.css';

const siteUrl = 'https://themuslimwill.com';
const pageTitle = 'For Scholars | Islamic Inheritance Review Network | The Muslim Will';
const pageDescription = "Join The Muslim Will's scholar network — a structured, professionally managed role reviewing Islamic inheritance calculations for Muslim families across Canada.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: `${siteUrl}/professionals/for-scholars` },
};

export default function ForScholarsPage() {
  return (
    <div className={styles.main}>

      {/* ── HERO ── */}
      <section className={styles.heroSection}>
        <div className={styles.heroOverlay} />
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.heroEyebrow}>Community &amp; Faith › For Scholars</div>
            <h1 className={styles.heroH1}>
              Your knowledge of Islamic inheritance law protects Muslim families. We provide the structure to apply it at scale.
            </h1>
            <p className={styles.heroSub}>
              The Muslim Will works with a network of qualified Islamic scholars who review inheritance calculations, provide guidance on complex estate situations, and ensure every will prepared through our platform reflects sound Islamic principles. If you have expertise in Fiqh al-Mawarith and a commitment to serving Muslim families in Canada, we want to hear from you.
            </p>
            <div className={styles.heroActions}>
              <TrackedButton
                href="#apply"
                className={styles.ctaPrimary}
                eventName="hero_apply_click"
                eventParams={{ location: 'for_scholars_hero' }}
              >
                Contact Our Team →
              </TrackedButton>
              <TrackedButton
                href="/about/our-scholars"
                className={styles.ctaSecondary}
                eventName="our_scholars_click"
                eventParams={{ location: 'for_scholars_hero' }}
              >
                Meet Our Current Scholars
              </TrackedButton>
            </div>
          </div>
        </div>
      </section>

      {/* ── CREDENTIALS STRIP ── */}
      <div className={styles.credStrip}>
        <div className={styles.credStripInner}>
          <div className={styles.credItem}>
            <div className={styles.credIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>
              </svg>
            </div>
            <div>
              <div className={styles.credTitle}>Fiqh al-Mawarith</div>
              <div className={styles.credDesc}>Recognised expertise in Islamic inheritance law required</div>
            </div>
          </div>
          <div className={styles.credDivider} />
          <div className={styles.credItem}>
            <div className={styles.credIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
            </div>
            <div>
              <div className={styles.credTitle}>All madhabs welcome</div>
              <div className={styles.credDesc}>Our network reflects the full diversity of Muslim Canada</div>
            </div>
          </div>
          <div className={styles.credDivider} />
          <div className={styles.credItem}>
            <div className={styles.credIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
              </svg>
            </div>
            <div>
              <div className={styles.credTitle}>Fairly compensated</div>
              <div className={styles.credDesc}>Professional engagement — we are not looking for volunteers</div>
            </div>
          </div>
          <div className={styles.credDivider} />
          <div className={styles.credItem}>
            <div className={styles.credIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
              </svg>
            </div>
            <div>
              <div className={styles.credTitle}>Canadian context valued</div>
              <div className={styles.credDesc}>Provincial familiarity is a significant advantage</div>
            </div>
          </div>
        </div>
      </div>

      {/* ── SECTION 1: The Scholar's Role ── */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.roleLayout}>
            <div className={styles.roleText}>
              <h2 className={styles.sectionH2}>A defined, professional engagement — not an informal consultation</h2>
              <p className={styles.sectionPara}>
                Every scholar in our network operates within a clearly defined scope. Your role is to review the Islamic inheritance structure of applications referred to you — ensuring Faraid shares are correctly calculated, identifying any complex situations that require additional guidance, and providing a documented scholarly review that families can trust.
              </p>
              <p className={styles.sectionPara}>
                You are not asked to provide legal advice, prepare legal documents, or take on liability outside your expertise. Your role is the Islamic inheritance review — and that is where your knowledge has the greatest impact.
              </p>
            </div>

            <div className={styles.engagementCards}>
              <div className={styles.engagementCard}>
                <div className={styles.engagementCardNum}>01</div>
                <div className={styles.engagementCardIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 11l3 3L22 4"/>
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
                  </svg>
                </div>
                <h3 className={styles.engagementCardTitle}>Application Review</h3>
                <p className={styles.engagementCardDesc}>
                  You review inheritance calculations for applications referred to you — verifying Faraid shares, flagging complex family structures, and providing a documented review that becomes part of the client&apos;s file.
                </p>
              </div>

              <div className={styles.engagementCard}>
                <div className={styles.engagementCardNum}>02</div>
                <div className={styles.engagementCardIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/>
                    <line x1="12" y1="8" x2="12" y2="12"/>
                    <line x1="12" y1="16" x2="12.01" y2="16"/>
                  </svg>
                </div>
                <h3 className={styles.engagementCardTitle}>Complex Case Guidance</h3>
                <p className={styles.engagementCardDesc}>
                  For estates with unusual inheritance situations — multiple marriages, complex family structures, unusual asset arrangements — you provide guidance that goes beyond the standard calculation.
                </p>
              </div>

              <div className={styles.engagementCard}>
                <div className={styles.engagementCardNum}>03</div>
                <div className={styles.engagementCardIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                </div>
                <h3 className={styles.engagementCardTitle}>Scholarly Network</h3>
                <p className={styles.engagementCardDesc}>
                  You join a network of qualified scholars across Canada, representing multiple madhabs and diverse community backgrounds — ensuring our platform can serve the full breadth of the Muslim community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: Qualifications ── */}
      <section className={styles.qualsSection}>
        <div className={styles.qualsOverlay} />
        <div className={styles.container}>
          <div className={styles.qualsContent}>
            <h2 className={styles.qualsH2}>Qualifications and background</h2>
            <div className={styles.qualsBar} />

            <div className={styles.qualsGrid}>
              <div className={styles.qualsCard} data-required>
                <div className={styles.qualsCardBadge}>Required</div>
                <ul className={styles.qualsList}>
                  <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    Recognised qualifications in Fiqh al-Mawarith
                  </li>
                  <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    Formal ijazah or equivalent scholarly certification
                  </li>
                  <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    Commitment to serving Muslim families professionally
                  </li>
                </ul>
              </div>

              <div className={styles.qualsCard} data-valued>
                <div className={styles.qualsCardBadge}>Valued</div>
                <ul className={styles.qualsList}>
                  <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    Community or pastoral experience with Muslim families
                  </li>
                  <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    Familiarity with Canadian provincial legal frameworks
                  </li>
                  <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    Understanding of Muslim life in the Canadian context
                  </li>
                </ul>
              </div>

              <div className={styles.qualsCard} data-welcome>
                <div className={styles.qualsCardBadge}>Welcome</div>
                <p className={styles.qualsWelcomeText}>
                  We welcome scholars from all madhabs and all community backgrounds. The Muslim community in Canada is diverse. Our scholar network should reflect that.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: What We Offer ── */}
      <section className={styles.section} style={{ backgroundColor: 'var(--color-cream-light)', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
        <div className={styles.container}>
          <div className={styles.offerLayout}>
            <div className={styles.offerText}>
              <h2 className={styles.sectionH2}>A structured, fairly compensated professional engagement</h2>
              <p className={styles.sectionPara}>
                We offer a structured partnership — clear scope, fair compensation, and a meaningful role in protecting Muslim families across Canada. Every engagement is managed professionally, with full transparency about the cases you are asked to review and the expectations on your time.
              </p>
              <div className={styles.offerStatement}>
                <div className={styles.offerStatementBar} />
                <p className={styles.offerStatementText}>
                  We are not looking for volunteers. We are looking for partners.
                </p>
              </div>
            </div>

            <div className={styles.offerPillars}>
              <div className={styles.offerPillar}>
                <div className={styles.offerPillarIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
                  </svg>
                </div>
                <div className={styles.offerPillarTitle}>Clear scope</div>
                <div className={styles.offerPillarDesc}>Islamic inheritance review — nothing beyond it, nothing less than it</div>
              </div>
              <div className={styles.offerPillar}>
                <div className={styles.offerPillarIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                  </svg>
                </div>
                <div className={styles.offerPillarTitle}>Fair compensation</div>
                <div className={styles.offerPillarDesc}>Your expertise is valued and compensated accordingly</div>
              </div>
              <div className={styles.offerPillar}>
                <div className={styles.offerPillarIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  </svg>
                </div>
                <div className={styles.offerPillarTitle}>Meaningful impact</div>
                <div className={styles.offerPillarDesc}>Your reviews protect real families — a direct, documented contribution</div>
              </div>
              <div className={styles.offerPillar}>
                <div className={styles.offerPillarIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>
                  </svg>
                </div>
                <div className={styles.offerPillarTitle}>Full transparency</div>
                <div className={styles.offerPillarDesc}>Clear visibility into cases reviewed and expectations on your time</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA + FORM ── */}
      <section id="apply" className={styles.formSection}>
        <div className={styles.container}>
          <div className={styles.formLayout}>
            <div className={styles.formIntro}>
              <h2 className={styles.formH2}>Bring your knowledge where it is needed most.</h2>
              <p className={styles.formBody}>
                If you are a qualified Islamic scholar with expertise in inheritance law and a desire to serve Muslim families in Canada through a structured, professional platform — we want to hear from you.
              </p>
              <p className={styles.formMicrocopy}>
                Send us a brief introduction — your qualifications, your madhab, and your interest in joining the network. We will be in touch within two business days.
              </p>
              <div className={styles.formLinks}>
                <div className={styles.formLinksLabel}>Related pages</div>
                <Link href="/about/our-scholars" className={styles.formLink}>Our Current Scholar Network →</Link>
                <Link href="/professionals/for-imams" className={styles.formLink}>For Imams →</Link>
                <Link href="/legal-islamic-compliance" className={styles.formLink}>Our Compliance Framework →</Link>
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
