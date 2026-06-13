import type { Metadata } from 'next';
import Link from 'next/link';
import { TrackedButton } from '@/components/analytics/TrackedButton';
import { InquiryForm } from '@/components/forms/InquiryForm';
import styles from './page.module.css';

const siteUrl = 'https://themuslimwill.com';
const pageTitle = 'For Imams | Mosque Ambassador Programme | The Muslim Will';
const pageDescription = 'Bring a trusted Islamic will planning service to your congregation — co-branded, professionally managed, and built to stand behind your recommendation as an imam.';

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: `${siteUrl}/professionals/for-imams` },
};

export default function ForImamsPage() {
  return (
    <div className={styles.main}>

      {/* ── HERO — full bleed, deeply personal ── */}
      <section className={styles.heroSection}>
        <div className={styles.heroOverlay} />
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.heroEyebrow}>Community &amp; Faith › For Imams</div>
            <h1 className={styles.heroH1}>
              You remind your congregation of their obligations. This is one of them.
            </h1>
            <p className={styles.heroSub}>
              The obligation to prepare a will is clear in Islamic law. Many of your congregants know this — and have still not acted. As an imam, you are in the most trusted position to change that. The Mosque Ambassador Programme gives you a structured, professional pathway to bring Islamic will planning to your community — with everything provided, and nothing left for you to manage.
            </p>
            <div className={styles.heroActions}>
              <TrackedButton
                href="#request-demo"
                className={styles.ctaPrimary}
                eventName="hero_demo_click"
                eventParams={{ location: 'for_imams_hero' }}
              >
                Request a Demo →
              </TrackedButton>
              <TrackedButton
                href="/community/mosque-ambassador"
                className={styles.ctaSecondary}
                eventName="ambassador_click"
                eventParams={{ location: 'for_imams_hero' }}
              >
                See the Full Programme
              </TrackedButton>
            </div>
          </div>
        </div>
      </section>

      {/* ── HADITH CALLOUT ── */}
      <div className={styles.hadithStrip}>
        <div className={styles.hadithStripInner}>
          <div className={styles.hadithStripQuoteMark}>&ldquo;</div>
          <p className={styles.hadithStripText}>
            It is not permissible for a Muslim who has something to bequeath to sleep two nights without having a will written and ready.
          </p>
          <cite className={styles.hadithStripCite}>— The Prophet ﷺ</cite>
        </div>
      </div>

      {/* ── SECTION 1: Your Unique Position ── */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.positionLayout}>

            <div className={styles.positionText}>
              <h2 className={styles.sectionH2}>No one reaches Muslim families the way you do</h2>
              <p className={styles.sectionPara}>
                A mention from the minbar carries more weight than any advertisement. A recommendation from an imam is trusted in a way that a product launch never can be. You do not need to become an estate planning expert — you need to point your community toward one they can trust.
              </p>
              <p className={styles.sectionPara}>
                The Muslim Will is built to stand behind your recommendation. Professionally managed, Islamically grounded, legally structured, and staffed by people who understand what community trust means — and what it takes to earn it.
              </p>
            </div>

            <div className={styles.positionCards}>
              <div className={styles.positionCard}>
                <div className={styles.positionCardIcon}>🕌</div>
                <div className={styles.positionCardTitle}>The minbar reaches everyone</div>
                <div className={styles.positionCardDesc}>A single mention from Friday prayer can move an entire congregation to act</div>
              </div>
              <div className={styles.positionCard}>
                <div className={styles.positionCardIcon}>🤝</div>
                <div className={styles.positionCardTitle}>Your recommendation is trusted</div>
                <div className={styles.positionCardDesc}>No marketing campaign achieves what a trusted imam's endorsement does</div>
              </div>
              <div className={styles.positionCard}>
                <div className={styles.positionCardIcon}>📋</div>
                <div className={styles.positionCardTitle}>You need a partner, not a product</div>
                <div className={styles.positionCardDesc}>The Muslim Will provides the pathway. You provide the introduction.</div>
              </div>
              <div className={styles.positionCard}>
                <div className={styles.positionCardIcon}>🛡️</div>
                <div className={styles.positionCardTitle}>We stand behind your word</div>
                <div className={styles.positionCardDesc}>Islamically grounded, legally structured, professionally managed</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── SECTION 2: What the Programme Gives You ── */}
      <section className={styles.programmeSection}>
        <div className={styles.programmeOverlay} />
        <div className={styles.container}>
          <div className={styles.programmeContent}>
            <h2 className={styles.programmeH2}>Everything you need. Nothing you have to build.</h2>
            <div className={styles.programmeBar} />

            <div className={styles.programmeList}>
              <div className={styles.programmeItem}>
                <div className={styles.programmeItemCheck}>✓</div>
                <div className={styles.programmeItemBody}>
                  <div className={styles.programmeItemTitle}>A co-branded will planning page</div>
                  <div className={styles.programmeItemDesc}>Your masjid&apos;s name, your community&apos;s gateway — a dedicated page that carries your identity</div>
                </div>
              </div>
              <div className={styles.programmeItem}>
                <div className={styles.programmeItemCheck}>✓</div>
                <div className={styles.programmeItemBody}>
                  <div className={styles.programmeItemTitle}>Khutbah outlines and community materials</div>
                  <div className={styles.programmeItemDesc}>Ready-to-use Friday khutbah outlines, newsletter templates, and announcement content</div>
                </div>
              </div>
              <div className={styles.programmeItem}>
                <div className={styles.programmeItemCheck}>✓</div>
                <div className={styles.programmeItemBody}>
                  <div className={styles.programmeItemTitle}>A community dashboard</div>
                  <div className={styles.programmeItemDesc}>See how many families in your congregation have started and completed their estate plans</div>
                </div>
              </div>
              <div className={styles.programmeItem}>
                <div className={styles.programmeItemCheck}>✓</div>
                <div className={styles.programmeItemBody}>
                  <div className={styles.programmeItemTitle}>A dedicated partnerships team</div>
                  <div className={styles.programmeItemDesc}>We support you at every step — from the first conversation to ongoing community outreach</div>
                </div>
              </div>
              <div className={styles.programmeItem}>
                <div className={styles.programmeItemCheck}>✓</div>
                <div className={styles.programmeItemBody}>
                  <div className={styles.programmeItemTitle}>No liability, no burden, no complexity</div>
                  <div className={styles.programmeItemDesc}>Your office handles nothing beyond the introduction. We manage everything that follows.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: Full Programme Bridge ── */}
      <section className={styles.section} style={{ paddingTop: '5rem', paddingBottom: '5rem' }}>
        <div className={styles.container}>
          <div className={styles.bridgeLayout}>
            <div className={styles.bridgeText}>
              <h2 className={styles.sectionH2}>The complete programme — everything it includes, how it works, and how to get started</h2>
              <p className={styles.sectionPara}>
                The full Mosque Ambassador Programme details — the co-branded page, the outreach materials, the community dashboard, and the partnership model — are all available on the programme page.
              </p>
              <Link href="/community/mosque-ambassador" className={styles.bridgeLink}>
                See the full Mosque Ambassador Programme →
              </Link>
            </div>

            <div className={styles.bridgeCard}>
              <div className={styles.bridgeCardTop} />
              <div className={styles.bridgeCardBody}>
                <div className={styles.bridgeCardIcon}>🕌</div>
                <h3 className={styles.bridgeCardTitle}>Mosque Ambassador Programme</h3>
                <p className={styles.bridgeCardDesc}>
                  A full community partnership — co-branded page, outreach support, community dashboard, and a team that supports you at every stage.
                </p>
                <Link href="/community/mosque-ambassador" className={styles.bridgeCardLink}>
                  See the full programme →
                </Link>
              </div>
              <div className={styles.bridgeCardFooter}>
                <div className={styles.bridgeCardFooterItem}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  Free for masjids
                </div>
                <div className={styles.bridgeCardFooterItem}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  All sizes welcome
                </div>
                <div className={styles.bridgeCardFooterItem}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  Start with a conversation
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA + FORM ── */}
      <section id="request-demo" className={styles.formSection}>
        <div className={styles.container}>
          <div className={styles.formLayout}>
            <div className={styles.formIntro}>
              <h2 className={styles.formH2}>Your community is waiting. Let us support you.</h2>
              <p className={styles.formBody}>
                Tell us about your masjid and your congregation. We will design a programme that fits your community and your schedule.
              </p>
              <p className={styles.formMicrocopy}>
                We can come to you — a call, a visit, or a presentation for your shura. The conversation starts wherever it is easiest for you.
              </p>
              <div className={styles.formLinks}>
                <div className={styles.formLinksLabel}>Related pages</div>
                <Link href="/community/mosque-ambassador" className={styles.formLink}>Mosque Ambassador Programme →</Link>
                <Link href="/community/community-resources" className={styles.formLink}>Community Resources →</Link>
                <Link href="/about/our-scholars" className={styles.formLink}>Our Scholars →</Link>
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
