import type { Metadata } from 'next';
import Link from 'next/link';
import { TrackedButton } from '@/components/analytics/TrackedButton';
import { InquiryForm } from '@/components/forms/InquiryForm';
import styles from './page.module.css';

const siteUrl = 'https://themuslimwill.com';
const pageTitle = 'Planned Giving | Islamic Charitable Bequests | The Muslim Will';
const pageDescription = 'Help your donors include your organisation in their Islamic will — a structured, Islamically grounded planned giving pathway built for Canadian Muslim charities.';

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: `${siteUrl}/community/planned-giving` },
};

export default function PlannedGivingPage() {
  return (
    <div className={styles.main}>

      {/* ── HERO ── */}
      <section className={styles.heroSection}>
        <div className={styles.heroOverlay} />
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.heroEyebrow}>For Charities &amp; Nonprofits › Planned Giving</div>
            <h1 className={styles.heroH1}>
              The most significant gift your donors will ever make is the one they plan for — not the one they make in the moment.
            </h1>
            <p className={styles.heroSub}>
              Estate giving — a charitable bequest included in a donor&apos;s Islamic will — can represent a lifetime of giving in a single act. The Muslim Will gives your donors a clear, Islamically grounded pathway to include your organisation in their legacy, within the 1/3 bequest framework, as a natural part of their estate plan.
            </p>
            <div className={styles.heroActions}>
              <TrackedButton
                href="#request-demo"
                className={styles.ctaButtonGoldFull}
                eventName="hero_demo_click"
                eventParams={{ location: 'planned_giving_hero' }}
              >
                Request a Demo →
              </TrackedButton>
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST ANCHORS ── */}
      <div className={styles.trustBar}>
        <div className={styles.trustAnchors}>
          <div className={styles.trustAnchor}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
            Built around the Islamic 1/3 bequest framework
          </div>
          <div className={styles.trustAnchor}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
            Donors receive a complete Islamic will — the bequest is part of a proper plan
          </div>
          <div className={styles.trustAnchor}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
            Your organisation presented as a natural choice — not a pressured ask
          </div>
          <div className={styles.trustAnchor}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
            No legal or religious complexity for your team to manage
          </div>
        </div>
      </div>

      {/* ── SECTION 1: What Planned Giving Through Muslim Will Looks Like ── */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeaderCenter}>
            <h2 className={styles.sectionH2}>A structured bequest. Properly documented. Islamically grounded.</h2>
            <p className={styles.sectionIntro}>
              Planned giving through The Muslim Will is not a separate product — it is built into every will we prepare. When a donor completes their Islamic will through your partnership page, they are guided through the charitable bequest section as a natural part of the process. Your organisation is presented as an option. Their giving intention is documented clearly, legally structured, and held within the proper Islamic framework.
            </p>
          </div>

          <div className={styles.bequestGrid}>
            <div className={styles.bequestCard}>
              <div className={styles.bequestAccent} />
              <div className={styles.bequestIconArea}>
                <span className={styles.bequestFraction}>⅓</span>
              </div>
              <h3 className={styles.bequestTitle}>The 1/3 Bequest Framework</h3>
              <p className={styles.bequestDesc}>
                Islamic inheritance law permits up to one third of an estate to be directed outside the Faraid shares — to charitable causes the donor chooses. Muslim Will builds this into every will, so donors understand their options and can act on them clearly.
              </p>
            </div>

            <div className={styles.bequestCard}>
              <div className={styles.bequestAccent} />
              <div className={styles.bequestIconArea}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <h3 className={styles.bequestTitle}>Family First, Always</h3>
              <p className={styles.bequestDesc}>
                One of the most common hesitations around charitable bequests is the concern that giving to charity means taking from family. The Muslim Will addresses this directly — family shares under Faraid are protected first. The charitable bequest comes from the permitted portion. Donors never have to choose between generosity and responsibility.
              </p>
            </div>

            <div className={styles.bequestCard}>
              <div className={styles.bequestAccent} />
              <div className={styles.bequestIconArea}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                  <polyline points="14 2 14 8 20 8"/>
                  <line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>
                  <polyline points="10 9 9 9 8 9"/>
                </svg>
              </div>
              <h3 className={styles.bequestTitle}>A Documented, Legally Structured Gift</h3>
              <p className={styles.bequestDesc}>
                An informal promise to give is not a bequest. A properly documented charitable gift — written into a legally structured Islamic will — is. The Muslim Will ensures your donors&apos; intentions are recorded in a form that their executor can act on, and that will hold up through the estate administration process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: Why This Moment Matters ── */}
      <section className={styles.momentSection}>
        <div className={styles.momentOverlay} />
        <div className={styles.container}>
          <div className={styles.momentContent}>
            <h2 className={styles.momentH2}>Legacy giving is the most underdeveloped channel in Islamic philanthropy</h2>
            <div className={styles.momentBar} />
            <p className={styles.momentPara}>
              Annual appeals, Ramadan campaigns, and zakat collection are the foundation of Islamic charitable fundraising. Estate giving — the channel that can deliver a donor&apos;s most significant contribution — is almost entirely untapped in the Muslim community.
            </p>
            <p className={styles.momentPara}>
              Not because donors don&apos;t want to give. Because no one has made it easy, accessible, and Islamically grounded enough to act on.
            </p>
            <p className={styles.momentPara}>
              The Muslim Will changes that. A Planned Giving partnership positions your organisation to cultivate the channel before it becomes competitive — and gives your donors a pathway that honours both their faith and their family.
            </p>

            <div className={styles.momentStatRow}>
              <div className={styles.momentStat}>
                <div className={styles.momentStatValue}>1/3</div>
                <div className={styles.momentStatLabel}>of every estate may be given to charity under Islamic law</div>
              </div>
              <div className={styles.momentStatDivider} />
              <div className={styles.momentStat}>
                <div className={styles.momentStatValue}>~0%</div>
                <div className={styles.momentStatLabel}>of Muslim donors in Canada currently have a structured bequest in place</div>
              </div>
              <div className={styles.momentStatDivider} />
              <div className={styles.momentStat}>
                <div className={styles.momentStatValue}>1×</div>
                <div className={styles.momentStatLabel}>a single planned gift can equal a lifetime of annual donations</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: What Your Organisation Needs to Do ── */}
      <section className={styles.section} style={{ backgroundColor: 'var(--color-cream-light)', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
        <div className={styles.container}>
          <div className={styles.splitLayout}>
            <div className={styles.splitText}>
              <h2 className={styles.sectionH2}>You introduce the conversation. We do everything else.</h2>
              <p className={styles.sectionIntro} style={{ marginBottom: '1.5rem' }}>
                Your role in a Planned Giving partnership is simple — introduce the concept to your donors and point them toward the pathway. You do not need to explain Islamic inheritance rules, prepare documents, or provide legal guidance. That is what we are here for.
              </p>
              <p className={styles.sectionIntro}>
                We provide messaging, talking points, and materials to help you introduce planned giving naturally — in your newsletters, at your events, through your donor communications. The conversation starts with you. The process is entirely with us.
              </p>
            </div>

            <div className={styles.divisionCard}>
              <div className={styles.divisionRow} data-yours>
                <div className={styles.divisionLabel}>Your role</div>
                <ul className={styles.divisionList}>
                  <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    Introduce the concept to your donors
                  </li>
                  <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    Share the partnership pathway
                  </li>
                  <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    Use our materials in your communications
                  </li>
                </ul>
              </div>
              <div className={styles.divisionDivider} />
              <div className={styles.divisionRow}>
                <div className={styles.divisionLabel}>Our role</div>
                <ul className={styles.divisionList}>
                  <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    Guide donors through the full Islamic will process
                  </li>
                  <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    Present your organisation in the bequest section
                  </li>
                  <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    Handle all Islamic and legal documentation
                  </li>
                  <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    Provide your team with outreach materials and talking points
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: Final CTA + Form ── */}
      <section id="request-demo" className={styles.formSection}>
        <div className={styles.container}>
          <div className={styles.formLayout}>
            <div className={styles.formIntro}>
              <h2 className={styles.formH2}>Your donors want to leave something lasting. Give them the pathway to do it.</h2>
              <p className={styles.formBody}>
                Every planned giving programme is built around the organisation, its donors, and its community. Start with a conversation — we will show you exactly how it works and what it could look like for your organisation.
              </p>
              <p className={styles.formMicrocopy}>
                Our partnerships team works with charities of all sizes — from national organisations to local community funds. Tell us about your donors and we will design a programme that fits.
              </p>

              <div className={styles.formLinks}>
                <div className={styles.formLinksLabel}>Related pages</div>
                <Link href="/community/charity-partnership" className={styles.formLink}>Charity Partnership →</Link>
                <Link href="/community/sponsored-seats" className={styles.formLink}>Sponsored Seats →</Link>
                <Link href="/charitable-legacy" className={styles.formLink}>Charitable Legacy →</Link>
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
