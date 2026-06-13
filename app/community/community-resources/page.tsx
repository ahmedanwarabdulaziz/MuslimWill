import type { Metadata } from 'next';
import Link from 'next/link';
import { TrackedButton } from '@/components/analytics/TrackedButton';
import { InquiryForm } from '@/components/forms/InquiryForm';
import styles from './page.module.css';

const siteUrl = 'https://themuslimwill.com';
const pageTitle = 'Community Resources | Islamic Estate Planning for Mosques | The Muslim Will';
const pageDescription = 'Khutbah outlines, community announcements, and awareness guides to help imams and Islamic centres introduce estate planning to their congregation.';

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: `${siteUrl}/community/community-resources` },
};

export default function CommunityResourcesPage() {
  return (
    <div className={styles.main}>

      {/* ── HERO ── */}
      <section className={styles.heroSection}>
        <div className={styles.heroOverlay} />
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.heroEyebrow}>For Masjids &amp; Islamic Centres › Community Resources</div>
            <h1 className={styles.heroH1}>
              Everything you need to introduce Islamic estate planning to your community — ready to use.
            </h1>
            <p className={styles.heroSub}>
              You do not need to become an estate planning expert to help your congregation protect their families. We have prepared the materials — khutbah outlines, community announcements, awareness guides, and talking points — so you can introduce the conversation in a way that feels natural, grounded, and true to your community&apos;s voice.
            </p>
            <div className={styles.heroActions}>
              <TrackedButton
                href="#request-pack"
                className={styles.ctaButtonGoldFull}
                eventName="hero_resources_click"
                eventParams={{ location: 'community_resources_hero' }}
              >
                Request the Resource Pack →
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
            Khutbah outlines — ready to deliver, Islamically grounded
          </div>
          <div className={styles.trustAnchor}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
            Community announcement templates — newsletters, WhatsApp, notice boards
          </div>
          <div className={styles.trustAnchor}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
            Awareness guides — plain language, family-friendly
          </div>
          <div className={styles.trustAnchor}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
            All materials in English — Arabic coming soon
          </div>
        </div>
      </div>

      {/* ── SECTION 1: Available Resources ── */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeaderCenter}>
            <h2 className={styles.sectionH2}>What is included</h2>
            <p className={styles.sectionIntro}>
              Four ready-to-use resources — designed for Islamic centres of any size, requiring no preparation from your team.
            </p>
          </div>

          <div className={styles.resourceGrid}>

            <div className={styles.resourceCard}>
              <div className={styles.resourceCardTop}>
                <div className={styles.resourceTag}>Khutbah</div>
                <div className={styles.resourceIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                </div>
              </div>
              <h3 className={styles.resourceTitle}>Khutbah Outline — Islamic Estate Planning</h3>
              <p className={styles.resourceDesc}>
                A ready-to-use Friday khutbah outline on the Islamic obligation of preparing a will — grounded in Quran and Sunnah, written with the Muslim community in Canada in mind. Adapt it to your own voice, your community&apos;s context, and the needs of your congregation.
              </p>
              <div className={styles.resourceFooter}>
                <span className={styles.resourceFormat}>PDF outline · English</span>
                <TrackedButton
                  href="#request-pack"
                  className={styles.resourceCta}
                  eventName="resource_khutbah_click"
                  eventParams={{ location: 'community_resources' }}
                >
                  Request →
                </TrackedButton>
              </div>
            </div>

            <div className={styles.resourceCard}>
              <div className={styles.resourceCardTop}>
                <div className={styles.resourceTag}>Templates</div>
                <div className={styles.resourceIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                  </svg>
                </div>
              </div>
              <h3 className={styles.resourceTitle}>Community Announcement Templates</h3>
              <p className={styles.resourceDesc}>
                Short, clear announcements introducing The Muslim Will to your congregation — formatted for Friday notices, community newsletters, WhatsApp groups, and social media. Ready to send with your masjid&apos;s name attached.
              </p>
              <div className={styles.resourceFooter}>
                <span className={styles.resourceFormat}>Word &amp; PDF · English</span>
                <TrackedButton
                  href="#request-pack"
                  className={styles.resourceCta}
                  eventName="resource_announcements_click"
                  eventParams={{ location: 'community_resources' }}
                >
                  Request →
                </TrackedButton>
              </div>
            </div>

            <div className={styles.resourceCard}>
              <div className={styles.resourceCardTop}>
                <div className={styles.resourceTag}>Awareness</div>
                <div className={styles.resourceIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                    <polyline points="14 2 14 8 20 8"/>
                    <line x1="16" y1="13" x2="8" y2="13"/>
                    <line x1="16" y1="17" x2="8" y2="17"/>
                    <polyline points="10 9 9 9 8 9"/>
                  </svg>
                </div>
              </div>
              <h3 className={styles.resourceTitle}>Awareness Guide — What Every Muslim Family Should Know</h3>
              <p className={styles.resourceDesc}>
                A plain-language guide explaining what an Islamic will is, why it matters, and what happens without one — written for families, not legal professionals. Share it digitally or print it for your community centre.
              </p>
              <div className={styles.resourceFooter}>
                <span className={styles.resourceFormat}>PDF · Print-ready · English</span>
                <TrackedButton
                  href="#request-pack"
                  className={styles.resourceCta}
                  eventName="resource_guide_click"
                  eventParams={{ location: 'community_resources' }}
                >
                  Request →
                </TrackedButton>
              </div>
            </div>

            <div className={styles.resourceCard}>
              <div className={styles.resourceCardTop}>
                <div className={styles.resourceTag}>Leadership</div>
                <div className={styles.resourceIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/>
                    <line x1="12" y1="8" x2="12" y2="12"/>
                    <line x1="12" y1="16" x2="12.01" y2="16"/>
                  </svg>
                </div>
              </div>
              <h3 className={styles.resourceTitle}>Talking Points for Community Leaders</h3>
              <p className={styles.resourceDesc}>
                A short reference document for imams, board members, and community coordinators — covering the most common questions families ask, and the answers that help them take the next step.
              </p>
              <div className={styles.resourceFooter}>
                <span className={styles.resourceFormat}>PDF · 1 page · English</span>
                <TrackedButton
                  href="#request-pack"
                  className={styles.resourceCta}
                  eventName="resource_talking_points_click"
                  eventParams={{ location: 'community_resources' }}
                >
                  Request →
                </TrackedButton>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── SECTION 2: How to Use These Resources ── */}
      <section className={styles.section} style={{ backgroundColor: 'var(--color-cream-light)', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
        <div className={styles.container}>
          <div className={styles.howLayout}>
            <div className={styles.howText}>
              <h2 className={styles.sectionH2}>Start with one conversation. The rest follows.</h2>
              <p className={styles.sectionIntro} style={{ marginBottom: '1.5rem' }}>
                The most effective way to introduce Islamic estate planning to a community is through a trusted voice — someone the congregation already knows and respects. You do not need a formal programme or a dedicated event. A single mention from the minbar, a link in the weekly newsletter, or a conversation after Jumu&apos;ah can be enough to start.
              </p>
              <p className={styles.sectionIntro}>
                These resources are designed to make that first step as easy as possible. Take what works for your community. Adapt it to your voice. And know that The Muslim Will team is available to support you every step of the way.
              </p>
            </div>

            <div className={styles.howCards}>
              <div className={styles.howCard}>
                <div className={styles.howCardNum}>1</div>
                <div>
                  <div className={styles.howCardTitle}>Choose your entry point</div>
                  <div className={styles.howCardDesc}>The khutbah, a newsletter link, a WhatsApp message — whatever fits your community&apos;s rhythm</div>
                </div>
              </div>
              <div className={styles.howCard}>
                <div className={styles.howCardNum}>2</div>
                <div>
                  <div className={styles.howCardTitle}>Use our materials as-is or adapt them</div>
                  <div className={styles.howCardDesc}>Every resource is written to be used directly or tailored to your community&apos;s voice</div>
                </div>
              </div>
              <div className={styles.howCard}>
                <div className={styles.howCardNum}>3</div>
                <div>
                  <div className={styles.howCardTitle}>Point your community toward the pathway</div>
                  <div className={styles.howCardDesc}>Your co-branded page is waiting — The Muslim Will handles everything from there</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: Want to Go Further? ── */}
      <section className={`${styles.section} ${styles.furtherSection}`}>
        <div className={styles.container}>
          <div className={styles.sectionHeaderCenter} style={{ maxWidth: '700px' }}>
            <h2 className={styles.sectionH2}>Resources are the beginning. A partnership goes further.</h2>
            <p className={styles.sectionIntro}>
              If you want to do more than share materials — a co-branded programme, a community dashboard, or a structured relationship between your masjid and The Muslim Will — the Mosque Ambassador Programme is the next step.
            </p>
          </div>

          <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <div className={styles.ambassadorCard}>
              <div className={styles.ambassadorCardHeader}>
                <div>
                  <div className={styles.ambassadorIcon}>🕌</div>
                  <h3 className={styles.ambassadorTitle}>Mosque Ambassador Programme</h3>
                </div>
                <div className={styles.ambassadorBadge}>Full partnership</div>
              </div>
              <p className={styles.ambassadorDesc}>
                A full partnership built around your masjid — co-branded page, outreach support, and a community dashboard to track the families you are helping. No cost, no complexity, no liability for your team.
              </p>
              <Link href="/community/mosque-ambassador" className={styles.ambassadorLink}>
                Learn more about the Mosque Ambassador Programme →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: Final CTA + Form ── */}
      <section id="request-pack" className={styles.formSection}>
        <div className={styles.container}>
          <div className={styles.formLayout}>
            <div className={styles.formIntro}>
              <h2 className={styles.formH2}>Request the full resource pack for your community.</h2>
              <p className={styles.formBody}>
                Tell us about your masjid and we will send you the complete resource pack — tailored to your community&apos;s size and context.
              </p>
              <p className={styles.formMicrocopy}>
                All resources are free for masjids and Islamic centres in the Mosque Ambassador Programme. Contact our team to get started.
              </p>

              <div className={styles.formLinks}>
                <div className={styles.formLinksLabel}>Related pages</div>
                <Link href="/community/mosque-ambassador" className={styles.formLink}>Mosque Ambassador Programme →</Link>
                <Link href="/community/charity-partnership" className={styles.formLink}>Charity Partnership →</Link>
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
