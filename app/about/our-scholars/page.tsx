import type { Metadata } from 'next';
import Link from 'next/link';
import { TrackedButton } from '@/components/analytics/TrackedButton';
import styles from './page.module.css';

const siteUrl = 'https://themuslimwill.com';
const pageTitle = 'Our Scholars | Islamic Inheritance Review | The Muslim Will';
const pageDescription = 'Meet the qualified Islamic scholars who review every application at The Muslim Will — Ijazah-certified, Fiqh al-Mawarith expertise, representing multiple madhabs across Canada.';

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: `${siteUrl}/about/our-scholars` },
};

/* ── placeholder scholar profiles (to be replaced when network is confirmed) ── */
const SCHOLAR_PLACEHOLDERS = [
  {
    initials: 'SH',
    name: 'Scholar Name',
    title: 'Islamic Inheritance Scholar',
    madhab: 'Madhab',
    languages: 'Arabic, English',
    community: 'Canada',
  },
  {
    initials: 'SH',
    name: 'Scholar Name',
    title: 'Fiqh al-Mawarith Specialist',
    madhab: 'Madhab',
    languages: 'Arabic, French, English',
    community: 'Canada',
  },
  {
    initials: 'SH',
    name: 'Scholar Name',
    title: 'Islamic Inheritance Scholar',
    madhab: 'Madhab',
    languages: 'Arabic, Urdu, English',
    community: 'Canada',
  },
];

export default function OurScholarsPage() {
  return (
    <div className={styles.main}>

      {/* ── HERO ── */}
      <section className={styles.heroSection}>
        <div className={styles.heroOverlay} />
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.heroEyebrow}>Our Company › Our Scholars</div>
            <h1 className={styles.heroH1}>
              Every application is reviewed by a qualified Islamic scholar. Here is who they are and what they do.
            </h1>
            <p className={styles.heroSub}>
              Islamic inheritance review is not a feature — it is a responsibility. The Muslim Will works with a network of Ijazah-certified scholars with expertise in Fiqh al-Mawarith to ensure every inheritance calculation is reviewed by someone with the knowledge to get it right.
            </p>
          </div>
        </div>
      </section>

      {/* ── TRUST STRIP ── */}
      <div className={styles.trustStrip}>
        <div className={styles.trustStripInner}>
          <div className={styles.trustStripItem}>
            <div className={styles.trustStripIcon}>📜</div>
            <div>
              <div className={styles.trustStripTitle}>Ijazah-certified</div>
              <div className={styles.trustStripDesc}>Formal scholarly certification required</div>
            </div>
          </div>
          <div className={styles.trustStripDivider} />
          <div className={styles.trustStripItem}>
            <div className={styles.trustStripIcon}>⚖️</div>
            <div>
              <div className={styles.trustStripTitle}>Fiqh al-Mawarith</div>
              <div className={styles.trustStripDesc}>Specialised Islamic inheritance law expertise</div>
            </div>
          </div>
          <div className={styles.trustStripDivider} />
          <div className={styles.trustStripItem}>
            <div className={styles.trustStripIcon}>🕌</div>
            <div>
              <div className={styles.trustStripTitle}>Multiple madhabs</div>
              <div className={styles.trustStripDesc}>All traditions and community backgrounds represented</div>
            </div>
          </div>
          <div className={styles.trustStripDivider} />
          <div className={styles.trustStripItem}>
            <div className={styles.trustStripIcon}>✓</div>
            <div>
              <div className={styles.trustStripTitle}>Every application</div>
              <div className={styles.trustStripDesc}>No will completed without documented scholarly review</div>
            </div>
          </div>
        </div>
      </div>

      {/* ── SECTION 1: Why Scholar Review Matters ── */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.whyLayout}>
            <div className={styles.whyText}>
              <div className={styles.sectionLabel}>Why It Matters</div>
              <h2 className={styles.sectionH2}>A Faraid calculation is only as reliable as the person who reviewed it</h2>
              <p className={styles.sectionPara}>
                Islamic inheritance law — Faraid — is precise, structured, and unforgiving of errors. The shares allocated to each heir depend on the exact family structure of the deceased, the nature of the assets, and the specific relationships involved. A calculation that looks correct can still be wrong if the underlying assumptions are misunderstood.
              </p>
              <p className={styles.sectionPara}>
                This is why every application prepared through The Muslim Will is available for scholar review. A qualified Islamic scholar with expertise in inheritance law reviews the calculation, verifies the shares, and flags any situation that requires additional guidance. The result is a will that can be trusted — Islamically and legally.
              </p>
            </div>

            <div className={styles.whyCallout}>
              <div className={styles.whyCalloutTop} />
              <div className={styles.whyCalloutBody}>
                <div className={styles.whyCalloutIcon}>🔍</div>
                <h3 className={styles.whyCalloutTitle}>What the review catches</h3>
                <ul className={styles.whyCalloutList}>
                  <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    Incorrect Faraid share allocations
                  </li>
                  <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    Complex family structures requiring specialist guidance
                  </li>
                  <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    Unusual asset arrangements that affect distribution
                  </li>
                  <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    Wasiyyah and charitable bequest structuring issues
                  </li>
                  <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    Madhab-specific inheritance rulings that affect the calculation
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: Scholar Network ── */}
      <section className={`${styles.section} ${styles.sectionCream}`}>
        <div className={styles.container}>
          <div className={styles.sectionHeaderCenter}>
            <div className={styles.sectionLabelCenter}>Our Scholar Network</div>
            <h2 className={styles.sectionH2Center}>Qualified, diverse, and rooted in the Canadian Muslim community</h2>
            <p className={styles.sectionIntro}>
              Our scholar network includes Ijazah-certified scholars with formal qualifications in Fiqh al-Mawarith — the Islamic law of inheritance. They represent multiple madhabs and diverse community backgrounds, ensuring that Muslim families from all traditions and origins can find a scholar whose knowledge reflects their own.
            </p>
            <p className={styles.sectionIntro}>
              All scholars in our network are verified through a rigorous qualification review. Their credentials, their madhab, and their scope of review are documented — and available on request.
            </p>
          </div>

          {/* Scholar Profile Cards */}
          <div className={styles.scholarsGrid}>
            {SCHOLAR_PLACEHOLDERS.map((scholar, i) => (
              <div key={i} className={styles.scholarCard}>
                <div className={styles.scholarCardHeader}>
                  <div className={styles.scholarAvatar}>
                    <span>{scholar.initials}</span>
                  </div>
                  <div className={styles.scholarHeaderMeta}>
                    <div className={styles.scholarBadge}>Ijazah Certified</div>
                    <div className={styles.scholarMadhab}>{scholar.madhab}</div>
                  </div>
                </div>
                <div className={styles.scholarCardBody}>
                  <div className={styles.scholarPlaceholderTag}>Profile to be confirmed</div>
                  <div className={styles.scholarName}>{scholar.name}</div>
                  <div className={styles.scholarTitle}>{scholar.title}</div>
                  <div className={styles.scholarDetails}>
                    <div className={styles.scholarDetail}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                      </svg>
                      {scholar.community}
                    </div>
                    <div className={styles.scholarDetail}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                      </svg>
                      {scholar.languages}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className={styles.profilesNote}>
            Scholar profiles are published as our network is formally confirmed. Contact us to request documentation of scholar credentials for a specific review.
          </p>
        </div>
      </section>

      {/* ── SECTION 3: Scope ── */}
      <section className={styles.scopeSection}>
        <div className={styles.scopeOverlay} />
        <div className={styles.container}>
          <div className={styles.scopeContent}>
            <h2 className={styles.scopeH2}>A clearly defined role — and a clear boundary</h2>
            <div className={styles.scopeBar} />

            <div className={styles.scopeGrid}>
              <div className={styles.scopeCard} data-does>
                <div className={styles.scopeCardLabel}>What our scholars review</div>
                <ul className={styles.scopeList}>
                  <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    Faraid share calculations — verified against the client&apos;s family structure
                  </li>
                  <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    Complex situations flagged for additional guidance
                  </li>
                  <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    Documented scholarly review included in the client&apos;s file
                  </li>
                  <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    Confirmation that the inheritance structure reflects sound Islamic principles
                  </li>
                </ul>
              </div>

              <div className={styles.scopeCard} data-does-not>
                <div className={styles.scopeCardLabel}>What this is not</div>
                <ul className={styles.scopeList}>
                  <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                    A personal fatwa for your individual circumstances
                  </li>
                  <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                    Legal advice — scholars do not review legal documents
                  </li>
                  <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                    A substitute for personal scholarly consultation on contested matters
                  </li>
                </ul>
                <p className={styles.scopeNote}>
                  For complex individual circumstances, a personal consultation with a scholar of your choice is always appropriate in addition to the review provided through our platform.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: Join the Network ── */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.joinLayout}>
            <div className={styles.joinText}>
              <div className={styles.sectionLabel}>For Scholars</div>
              <h2 className={styles.sectionH2}>Are you a qualified Islamic scholar? Join our network.</h2>
              <p className={styles.sectionPara}>
                If you hold recognised qualifications in Fiqh al-Mawarith and want to serve Muslim families in Canada through a structured, professionally managed platform — we want to hear from you.
              </p>
              <Link href="/professionals/for-scholars" className={styles.joinLink}>
                Learn more about joining our scholar network →
              </Link>
            </div>
            <div className={styles.joinCard}>
              <div className={styles.joinCardAccent} />
              <div className={styles.joinCardBody}>
                <div className={styles.joinCardIcon}>🎓</div>
                <div className={styles.joinCardTitle}>Scholar Network Programme</div>
                <div className={styles.joinCardDesc}>Clear scope, fair compensation, and a meaningful role in protecting Muslim families across Canada.</div>
                <div className={styles.joinCardItems}>
                  <div className={styles.joinCardItem}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    All madhabs welcome
                  </div>
                  <div className={styles.joinCardItem}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    Professionally compensated
                  </div>
                  <div className={styles.joinCardItem}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    Clearly defined scope
                  </div>
                </div>
                <Link href="/professionals/for-scholars" className={styles.joinCardLink}>
                  See the full programme →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaH2}>Start your application — scholar review included.</h2>
            <div className={styles.ctaActions}>
              <TrackedButton
                href="/apply"
                className={styles.ctaPrimary}
                eventName="scholars_start_application"
                eventParams={{ location: 'our_scholars_footer' }}
              >
                Start My Application →
              </TrackedButton>
              <TrackedButton
                href="/legal-islamic-compliance"
                className={styles.ctaSecondary}
                eventName="scholars_compliance"
                eventParams={{ location: 'our_scholars_footer' }}
              >
                See Our Compliance Framework →
              </TrackedButton>
            </div>
            <div className={styles.ctaLinks}>
              <Link href="/professionals/for-scholars" className={styles.ctaInternalLink}>For Scholars</Link>
              <span>·</span>
              <Link href="/legal-islamic-compliance" className={styles.ctaInternalLink}>Compliance</Link>
              <span>·</span>
              <Link href="/about/our-team" className={styles.ctaInternalLink}>Our Team</Link>
              <span>·</span>
              <Link href="/vault/last-will-testament" className={styles.ctaInternalLink}>The Will Document</Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
