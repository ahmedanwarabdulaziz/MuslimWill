import type { Metadata } from 'next';
import Link from 'next/link';
import { TrackedButton } from '@/components/analytics/TrackedButton';
import styles from './page.module.css';

const siteUrl = 'https://themuslimwill.com';
const pageTitle = 'Our Story | Why The Muslim Will Was Built | The Muslim Will';
const pageDescription = 'The Muslim Will was built to close the gap between Islamic inheritance law and Canadian legal requirements — a structured pathway for Muslim families who deserve better than confusion.';

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: `${siteUrl}/about/our-story` },
};

export default function OurStoryPage() {
  return (
    <div className={styles.main}>

      {/* ── HERO — narrative, not sales ── */}
      <section className={styles.heroSection}>
        <div className={styles.heroOverlay} />
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.heroEyebrow}>Our Company › Our Story</div>
            <h1 className={styles.heroH1}>
              Built to close a gap Muslim families should not have to navigate alone.
            </h1>
            <p className={styles.heroSub}>
              For too long, preparing an Islamic will in Canada meant navigating two separate worlds — Islamic inheritance law and provincial legal requirements — without a clear, professional pathway that understood both. The Muslim Will was built to change that.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 1: The Problem ── */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.narrativeLayout}>

            <div className={styles.narrativeSide}>
              <div className={styles.sectionMarker}>01</div>
            </div>

            <div className={styles.narrativeBody}>
              <h2 className={styles.sectionH2}>A gap between obligation and access</h2>

              <p className={styles.sectionPara}>
                The Islamic obligation to prepare a will is clear. The Prophet ﷺ said it is not permissible for a Muslim who has something to bequeath to sleep two nights without a will written and ready. And yet, in Muslim communities across Canada, the majority of families have no will at all.
              </p>

              <p className={styles.sectionPara}>
                The reason is rarely indifference. It is the absence of a clear pathway. Islamic will preparation sits at the intersection of two complex systems — Faraid inheritance law and Canadian provincial requirements. Most families do not know where to start. Most legal professionals do not have the Islamic expertise to guide them. Most Islamic scholars are not equipped to handle the legal side. The two worlds rarely meet.
              </p>

              <div className={styles.consequenceGrid}>
                <div className={styles.consequenceItem}>
                  <div className={styles.consequenceIcon}>📜</div>
                  <div>
                    <div className={styles.consequenceTitle}>Estates distributed incorrectly</div>
                    <div className={styles.consequenceDesc}>Without Faraid, provincial intestacy rules apply — not the deceased&apos;s wishes</div>
                  </div>
                </div>
                <div className={styles.consequenceItem}>
                  <div className={styles.consequenceIcon}>🏦</div>
                  <div>
                    <div className={styles.consequenceTitle}>Debts left unsettled</div>
                    <div className={styles.consequenceDesc}>Islamic obligations around estate debts are rarely documented or honoured</div>
                  </div>
                </div>
                <div className={styles.consequenceItem}>
                  <div className={styles.consequenceIcon}>👶</div>
                  <div>
                    <div className={styles.consequenceTitle}>Children&apos;s guardianship undocumented</div>
                    <div className={styles.consequenceDesc}>Without a will, the court decides — not the family</div>
                  </div>
                </div>
                <div className={styles.consequenceItem}>
                  <div className={styles.consequenceIcon}>🤲</div>
                  <div>
                    <div className={styles.consequenceTitle}>Private wishes never delivered</div>
                    <div className={styles.consequenceDesc}>Final instructions, charitable intentions, and personal messages — lost</div>
                  </div>
                </div>
              </div>

              <div className={styles.closingStatement}>
                <div className={styles.closingStatementBar} />
                <p className={styles.closingStatementText}>
                  The Muslim Will was built to close that gap.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── DIVIDER ── */}
      <div className={styles.sectionDivider} />

      {/* ── SECTION 2: What We Built ── */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.narrativeLayout}>

            <div className={styles.narrativeSide}>
              <div className={styles.sectionMarker}>02</div>
            </div>

            <div className={styles.narrativeBody}>
              <h2 className={styles.sectionH2}>A structured pathway — not a form, not a template, not a promise</h2>

              <p className={styles.sectionPara}>
                The Muslim Will is a structured estate planning platform that brings the Islamic inheritance framework and the Canadian legal framework together in one guided process. It is not a generic will generator. It is not an Islamic fatwa service. It is a purposefully designed system that connects the right expertise — Islamic scholars, legal professionals, and estate planning specialists — within a clear, accountable workflow.
              </p>

              <p className={styles.sectionPara}>
                Every will prepared through The Muslim Will is built on Faraid calculations, structured to meet Ontario legal requirements, reviewed by qualified Islamic scholars, and supported by a private Vault that gives families the tools to protect and communicate their legacy beyond the document itself.
              </p>

              <div className={styles.platformPillars}>
                <div className={styles.platformPillar}>
                  <div className={styles.platformPillarDot} />
                  <div>
                    <div className={styles.platformPillarTitle}>Faraid-grounded</div>
                    <div className={styles.platformPillarDesc}>Every calculation reflects Islamic inheritance law — not approximation</div>
                  </div>
                </div>
                <div className={styles.platformPillar}>
                  <div className={styles.platformPillarDot} />
                  <div>
                    <div className={styles.platformPillarTitle}>Ontario-compliant</div>
                    <div className={styles.platformPillarDesc}>Legally structured documents — valid, executable, professionally prepared</div>
                  </div>
                </div>
                <div className={styles.platformPillar}>
                  <div className={styles.platformPillarDot} />
                  <div>
                    <div className={styles.platformPillarTitle}>Scholar-reviewed</div>
                    <div className={styles.platformPillarDesc}>Every application reviewed by a qualified Islamic inheritance scholar</div>
                  </div>
                </div>
                <div className={styles.platformPillar}>
                  <div className={styles.platformPillarDot} />
                  <div>
                    <div className={styles.platformPillarTitle}>Private Vault</div>
                    <div className={styles.platformPillarDesc}>A secure space for the full estate — documents, wishes, and final instructions</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── DIVIDER ── */}
      <div className={styles.sectionDivider} />

      {/* ── SECTION 3: The Families We Serve ── */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.narrativeLayout}>

            <div className={styles.narrativeSide}>
              <div className={styles.sectionMarker}>03</div>
            </div>

            <div className={styles.narrativeBody}>
              <h2 className={styles.sectionH2}>Muslim families in Canada who deserve better than a gap</h2>

              <p className={styles.sectionPara}>
                We serve Muslim families across Canada — parents who want to protect their children, spouses who want to protect each other, individuals who want their estate handled correctly, and families who want their charitable intentions to outlast them.
              </p>

              <p className={styles.sectionPara}>
                We also serve the organisations, professionals, and community leaders who work alongside those families — charities, masjids, financial advisors, lawyers, and scholars who want a trusted partner to fill the gap their own work cannot reach.
              </p>

              <div className={styles.familyRow}>
                <div className={styles.familyCard}>
                  <div className={styles.familyCardLabel}>Muslim families</div>
                  <div className={styles.familyCardItems}>
                    <span>Parents protecting children</span>
                    <span>Spouses protecting each other</span>
                    <span>Individuals securing their estate</span>
                    <span>Families honouring charitable intentions</span>
                  </div>
                </div>
                <div className={styles.familyCardPlus}>+</div>
                <div className={styles.familyCard} data-partners>
                  <div className={styles.familyCardLabel}>Community partners</div>
                  <div className={styles.familyCardItems}>
                    <span>Charities &amp; masjids</span>
                    <span>Financial advisors</span>
                    <span>Lawyers &amp; estate planners</span>
                    <span>Islamic scholars</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: Where We Are Going — full bleed ── */}
      <section className={styles.visionSection}>
        <div className={styles.visionOverlay} />
        <div className={styles.container}>
          <div className={styles.visionContent}>
            <div className={styles.visionMarker}>04</div>
            <h2 className={styles.visionH2}>Canada first. Built for what comes next.</h2>
            <div className={styles.visionBar} />
            <p className={styles.visionPara}>
              The Muslim Will is a Canada-first platform, with Ontario as the clearest current legal anchor. But the gap we are closing is not unique to Canada. Muslim families in the United Kingdom, the United States, and across the West face the same challenge — two frameworks that rarely meet, and a community that deserves better.
            </p>
            <p className={styles.visionPara}>
              We are building the platform that can serve that need — carefully, professionally, and with the community trust that this kind of service demands.
            </p>
            <div className={styles.visionRegions}>
              <div className={styles.visionRegion} data-active>
                <div className={styles.visionRegionDot} />
                <span>Canada</span>
                <div className={styles.visionRegionBadge}>Active</div>
              </div>
              <div className={styles.visionRegionArrow}>→</div>
              <div className={styles.visionRegion}>
                <div className={`${styles.visionRegionDot} ${styles.visionRegionDotFuture}`} />
                <span>United Kingdom</span>
              </div>
              <div className={styles.visionRegionArrow}>→</div>
              <div className={styles.visionRegion}>
                <div className={`${styles.visionRegionDot} ${styles.visionRegionDotFuture}`} />
                <span>United States</span>
              </div>
              <div className={styles.visionRegionArrow}>→</div>
              <div className={styles.visionRegion}>
                <div className={`${styles.visionRegionDot} ${styles.visionRegionDotFuture}`} />
                <span>The West</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaH2}>The gap is closing. Start here.</h2>
            <div className={styles.ctaActions}>
              <TrackedButton
                href="/apply"
                className={styles.ctaPrimary}
                eventName="story_start_application"
                eventParams={{ location: 'our_story_footer' }}
              >
                Start My Application →
              </TrackedButton>
              <TrackedButton
                href="/about/our-team"
                className={styles.ctaSecondaryLink}
                eventName="story_meet_team"
                eventParams={{ location: 'our_story_footer' }}
              >
                Meet Our Team →
              </TrackedButton>
            </div>
            <div className={styles.ctaLinks}>
              <Link href="/about/our-team" className={styles.ctaInternalLink}>Our Team</Link>
              <span>·</span>
              <Link href="/our-scholars" className={styles.ctaInternalLink}>Our Scholars</Link>
              <span>·</span>
              <Link href="/legal-islamic-compliance" className={styles.ctaInternalLink}>Compliance</Link>
              <span>·</span>
              <Link href="/how-it-works" className={styles.ctaInternalLink}>How It Works</Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
