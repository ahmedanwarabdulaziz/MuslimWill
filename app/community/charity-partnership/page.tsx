import type { Metadata } from 'next';
import Link from 'next/link';
import { TrackedButton } from '@/components/analytics/TrackedButton';
import { InquiryForm } from '@/components/forms/InquiryForm';
import styles from './page.module.css';

const siteUrl = 'https://themuslimwill.com';
const pageTitle = 'Charity Partnership | Islamic Legacy Giving | The Muslim Will';
const pageDescription = 'Help your donors plan their estates and include your organisation in their legacy — a co-branded Islamic will planning partnership built for Canadian charities and nonprofits.';

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: `${siteUrl}/community/charity-partnership` },
};

export default function CharityPartnershipPage() {
  return (
    <div className={styles.main}>

      {/* ── HERO SECTION ── */}
      <section className={styles.heroSection}>
        <div className={styles.heroOverlay} />
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.heroEyebrow}>For Charities &amp; Nonprofits › Charity Partnership</div>
            <h1 className={styles.heroH1}>
              Your donors already trust you. Help them make that trust part of their legacy.
            </h1>
            <p className={styles.heroSub}>
              Your supporters care about your mission. Many of them have meant to include your organisation in their will for years — but the process has felt unclear, complicated, or simply never made it to the top of the list. A Charity Partnership with The Muslim Will gives them a clear, guided pathway — co-branded with your name, built around your community, and designed to make estate giving as simple as possible.
            </p>
            <div className={styles.heroActions}>
              <TrackedButton
                href="#request-demo"
                className={styles.ctaButtonGoldFull}
                eventName="hero_demo_click"
                eventParams={{ location: 'charity_partnership_hero' }}
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
            Co-branded will planning page — your name, your mission
          </div>
          <div className={styles.trustAnchor}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
            Donors guided through a complete Islamic will — not just a bequest form
          </div>
          <div className={styles.trustAnchor}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
            You lead with trust. We provide the platform.
          </div>
          <div className={styles.trustAnchor}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
            No legal or religious liability transfers to your organisation
          </div>
        </div>
      </div>

      {/* ── SECTION 1: What a Charity Partnership Looks Like ── */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeaderCenter}>
            <h2 className={styles.sectionH2}>Your mission. Our platform. One seamless experience for your donors.</h2>
            <p className={styles.sectionIntro}>
              A Charity Partnership is not a referral link. It is a co-branded will planning experience built around your organisation — your identity, your donors, your community language.
            </p>
          </div>

          <div className={styles.partnershipGrid}>
            <div className={styles.partnershipCard}>
              <div className={styles.partnershipIconWrapper}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/>
                </svg>
              </div>
              <h3 className={styles.partnershipTitle}>A Dedicated Co-Branded Page</h3>
              <p className={styles.partnershipDesc}>
                Your donors visit a will planning page that carries your name, your mission, and your voice. The Muslim Will handles the guided application, the Islamic inheritance structure, the legal workflow, and the Vault. Your organisation is the trusted gateway that brought them there.
              </p>
            </div>

            <div className={styles.partnershipCard}>
              <div className={styles.partnershipIconWrapper}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                </svg>
              </div>
              <h3 className={styles.partnershipTitle}>Charitable Bequest Integration</h3>
              <p className={styles.partnershipDesc}>
                Every will prepared through your partnership page includes a clear, guided opportunity for your donor to include your organisation as a beneficiary — within the Islamic 1/3 bequest framework, presented naturally as part of their estate plan, not as a separate ask.
              </p>
            </div>

            <div className={styles.partnershipCard}>
              <div className={styles.partnershipIconWrapper}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <h3 className={styles.partnershipTitle}>Outreach and Awareness Support</h3>
              <p className={styles.partnershipDesc}>
                We provide materials, messaging, and guidance to help you introduce the partnership to your community — through your newsletter, your events, your social channels, or your existing donor communications. You bring the relationship. We support the message.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: What Your Organisation Does Not Need to Do ── */}
      <section className={`${styles.section} ${styles.splitSection}`}>
        <div className={styles.container}>
          <div className={styles.sectionHeaderCenter}>
            <h2 className={styles.sectionH2}>You bring the trust. We handle everything else.</h2>
            <p className={styles.sectionIntro}>
              Many charities hesitate around estate planning partnerships because they worry about legal liability, religious complexity, or operational burden. A Charity Partnership with The Muslim Will removes all of that.
            </p>
          </div>

          <div className={styles.responsibilitySplit}>
            <div className={styles.responsibilityCard} data-side="theirs">
              <div className={styles.responsibilityLabel}>Stays with us</div>
              <ul className={styles.responsibilityList}>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  Islamic inheritance review and Faraid calculations
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  Legal document preparation and compliance
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  The guided application workflow
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  Attestation and execution support
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  Secure Vault management and executor release
                </li>
              </ul>
            </div>

            <div className={styles.splitDivider}>
              <div className={styles.splitDividerLine} />
              <div className={styles.splitDividerPill}>+</div>
              <div className={styles.splitDividerLine} />
            </div>

            <div className={styles.responsibilityCard} data-side="yours">
              <div className={styles.responsibilityLabel}>Stays with you</div>
              <ul className={styles.responsibilityList}>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  Your relationship with your donors
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  Your co-branded page and messaging
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  Your community trust
                </li>
              </ul>
            </div>
          </div>

          <p className={styles.splitTagline}>
            The charity leads with trust. The Muslim Will provides the planning pathway.
          </p>
        </div>
      </section>

      {/* ── SECTION 3: Why Now ── */}
      <section className={`${styles.section} ${styles.whyNowSection}`}>
        <div className={styles.whyNowOverlay} />
        <div className={styles.container}>
          <div className={styles.whyNowContent}>
            <h2 className={styles.whyNowH2}>Legacy giving is the most underdeveloped opportunity in Islamic philanthropy</h2>
            <div className={styles.whyNowBar} />
            <p className={styles.whyNowPara}>
              Most Islamic charities depend heavily on annual Zakat and Sadaqah. Estate giving — bequests that continue to give long after the donor is gone — remains largely untapped in the Muslim community, not because donors don&apos;t want to give, but because no one has made it easy enough to act.
            </p>
            <p className={styles.whyNowPara}>
              The Muslim Will is built specifically for this moment. A Charity Partnership positions your organisation at the front of a giving channel that will only grow — and gives your donors a dignified, Islamically grounded way to include your mission in their final legacy.
            </p>
            <TrackedButton
              href="#request-demo"
              className={styles.whyNowCta}
              eventName="why_now_demo_click"
              eventParams={{ location: 'charity_partnership_why_now' }}
            >
              Request a Demo →
            </TrackedButton>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: Final CTA + Form ── */}
      <section id="request-demo" className={styles.formSection}>
        <div className={styles.container}>
          <div className={styles.formLayout}>
            <div className={styles.formIntro}>
              <h2 className={styles.formH2}>Let&apos;s build something for your community together.</h2>
              <p className={styles.formBody}>
                Every partnership is shaped around the needs of the organisation, its donors, and its community. The best place to start is a conversation.
              </p>
              <p className={styles.formMicrocopy}>
                Book a walkthrough with our partnerships team. We will come to you — whether that is a call, a visit, or a presentation for your leadership team.
              </p>

              <div className={styles.formLinks}>
                <div className={styles.formLinksLabel}>Related pages</div>
                <Link href="/charitable-legacy" className={styles.formLink}>Charitable Legacy →</Link>
                <Link href="/for-charities" className={styles.formLink}>For Charities &amp; Nonprofits →</Link>
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
