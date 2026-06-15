import type { Metadata } from 'next';
import { TrustBar } from '@/components/ui/TrustBar';
import Link from 'next/link';
import { TrackedButton } from '@/components/analytics/TrackedButton';
import { InquiryForm } from '@/components/forms/InquiryForm';
import styles from './page.module.css';

const siteUrl = 'https://themuslimwill.com';
const pageTitle = 'Mosque Ambassador Programme | Islamic Will Planning for Your Community | The Muslim Will';
const pageDescription = 'Bring a complete Islamic will planning service to your congregation — co-branded with your masjid, supported with outreach materials, and built around community trust.';

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: `${siteUrl}/community/mosque-ambassador` },
};

export default function MosqueAmbassadorPage() {
  return (
    <div className={styles.main}>

      {/* ── HERO ── */}
      <section className={styles.heroSection}>
        <div className={styles.heroOverlay} />
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.heroEyebrow}>For Masjids &amp; Islamic Centres › Mosque Ambassador Programme</div>
            <h1 className={styles.heroH1}>
              Your congregation trusts you. That trust is the most powerful thing you can give them.
            </h1>
            <p className={styles.heroSub}>
              The Mosque Ambassador Programme brings a complete Islamic will planning service to your community — co-branded with your masjid, supported with outreach materials, and built around the trust your congregation already has in you. You do not need to become an estate planning expert. You just need to point your community toward one.
            </p>
            <div className={styles.heroActions}>
              <TrackedButton
                href="#request-demo"
                className={styles.ctaButtonGoldFull}
                eventName="hero_demo_click"
                eventParams={{ location: 'mosque_ambassador_hero' }}
              >
                Request a Demo →
              </TrackedButton>
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST ANCHORS ── */}
      <TrustBar items={['Co-branded with your masjid — your name, your community', 'Scholars and legal professionals handle everything', 'No liability or complexity for your team', 'Khutbah guides, awareness resources, and outreach materials included']} />

      {/* ── SECTION 1: What the Programme Includes ── */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeaderCenter}>
            <h2 className={styles.sectionH2}>Everything your community needs. Nothing your team has to manage.</h2>
          </div>

          <div className={styles.programmeGrid}>
            <div className={styles.programmeCard}>
              <div className={styles.programmeIconWrapper}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2"/>
                  <path d="M3 9h18"/><path d="M9 21V9"/>
                </svg>
              </div>
              <h3 className={styles.programmeTitle}>A Co-Branded Will Planning Page</h3>
              <p className={styles.programmeDesc}>
                Your congregation accesses The Muslim Will through a dedicated page that carries your masjid&apos;s name and identity. They arrive through a trusted gateway — your community, your name — and receive a complete, guided Islamic estate planning experience on the other side.
              </p>
            </div>

            <div className={styles.programmeCard}>
              <div className={styles.programmeIconWrapper}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                </svg>
              </div>
              <h3 className={styles.programmeTitle}>Outreach and Awareness Materials</h3>
              <p className={styles.programmeDesc}>
                Friday khutbah outlines, community announcement templates, social media content, and talking points for your leadership team. You introduce the conversation in a way that feels natural to your community. We provide the words.
              </p>
            </div>

            <div className={styles.programmeCard}>
              <div className={styles.programmeIconWrapper}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="20" x2="18" y2="10"/>
                  <line x1="12" y1="20" x2="12" y2="4"/>
                  <line x1="6" y1="20" x2="6" y2="14"/>
                </svg>
              </div>
              <h3 className={styles.programmeTitle}>A Community Dashboard</h3>
              <p className={styles.programmeDesc}>
                Track uptake within your congregation — how many families have started their estate plans, how many have completed them, and the overall impact of the programme. No personal data is shared — only aggregate numbers to help you understand the difference you are making.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: The Islamic Case ── */}
      <section className={styles.islamicSection}>
        <div className={styles.islamicOverlay} />
        <div className={styles.container}>
          <div className={styles.islamicContent}>
            <h2 className={styles.islamicH2}>This is a community obligation, not just a personal one</h2>
            <div className={styles.islamicBar} />

            <blockquote className={styles.hadithBlock}>
              <div className={styles.hadithMark}>&ldquo;</div>
              <p className={styles.hadithText}>
                It is not permissible for a Muslim who has something to bequeath to sleep two nights without having a will written and ready.
              </p>
              <cite className={styles.hadithCite}>— The Prophet ﷺ</cite>
            </blockquote>

            <p className={styles.islamicPara}>
              And yet, in most Muslim communities across Canada, the majority of families have no will at all.
            </p>
            <p className={styles.islamicPara}>
              As an imam or community leader, you are in a unique position. When you introduce Islamic estate planning to your congregation — from the minbar, in a community session, through a simple announcement — families listen. They trust your guidance. And they act.
            </p>
            <p className={styles.islamicPara}>
              The Mosque Ambassador Programme gives you a clear, professionally managed pathway to offer your community. You create the awareness. The Muslim Will handles everything that follows.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: Responsibility Split ── */}
      <section className={styles.section} style={{ backgroundColor: 'var(--color-cream-light)', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
        <div className={styles.container}>
          <div className={styles.sectionHeaderCenter} style={{ maxWidth: '700px' }}>
            <h2 className={styles.sectionH2}>You guide. We deliver.</h2>
          </div>

          <div className={styles.splitRow}>
            <div className={styles.splitCard} data-theirs>
              <div className={styles.splitCardLabel}>Stays with us</div>
              <ul className={styles.splitList}>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  Islamic inheritance review and Faraid calculations
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  Legal document preparation and Ontario compliance
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  The guided application workflow
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  Secure Vault management
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  Scholar review and attestation support
                </li>
              </ul>
            </div>

            <div className={styles.splitCentreStatement}>
              <div className={styles.splitCentreIcon}>🕌</div>
              <p className={styles.splitCentreText}>
                Your role is to open the door. Our role is to walk them through it.
              </p>
            </div>

            <div className={styles.splitCard} data-yours>
              <div className={styles.splitCardLabel}>Stays with you</div>
              <ul className={styles.splitList}>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  The relationship and trust of your congregation
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  The introduction and awareness
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  Your co-branded page and community identity
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: Who This Is For ── */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.whoLayout}>
            <div className={styles.whoText}>
              <h2 className={styles.sectionH2}>Any masjid that wants to serve its community more completely</h2>
              <p className={styles.sectionIntro} style={{ marginBottom: '1.5rem' }}>
                The Mosque Ambassador Programme is designed for Islamic centres of all sizes — from large urban masjids serving thousands of families, to smaller community centres with a close-knit congregation. The programme is structured around your community&apos;s needs, your capacity, and the way your masjid works best.
              </p>
              <p className={styles.sectionIntro}>
                You do not need a budget or a dedicated team. You need a commitment to your community — and a trusted partner to make the rest possible.
              </p>
              <div style={{ marginTop: '2.5rem' }}>
                <Link href="/about/our-scholars" className={styles.internalLink}>Meet Our Scholars →</Link>
              </div>
            </div>

            <div className={styles.whoCards}>
              <div className={styles.whoCard}>
                <div className={styles.whoCardIcon}>🕌</div>
                <div>
                  <div className={styles.whoCardTitle}>Large urban masjids</div>
                  <div className={styles.whoCardDesc}>Thousands of families, multiple programmes, high community reach</div>
                </div>
              </div>
              <div className={styles.whoCard}>
                <div className={styles.whoCardIcon}>🤝</div>
                <div>
                  <div className={styles.whoCardTitle}>Community Islamic centres</div>
                  <div className={styles.whoCardDesc}>Close-knit congregation, trusted leadership, personal relationships</div>
                </div>
              </div>
              <div className={styles.whoCard}>
                <div className={styles.whoCardIcon}>📖</div>
                <div>
                  <div className={styles.whoCardTitle}>Islamic schools and institutes</div>
                  <div className={styles.whoCardDesc}>Families already engaged with Islamic education and practice</div>
                </div>
              </div>
              <div className={styles.whoCard}>
                <div className={styles.whoCardIcon}>🌙</div>
                <div>
                  <div className={styles.whoCardTitle}>Ramadan and outreach programmes</div>
                  <div className={styles.whoCardDesc}>Seasonal moments when families are most open to legacy conversations</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 5: Final CTA + Form ── */}
      <section id="request-demo" className={styles.formSection}>
        <div className={styles.container}>
          <div className={styles.formLayout}>
            <div className={styles.formIntro}>
              <h2 className={styles.formH2}>Your community is waiting for this. Let us show you how it works.</h2>
              <p className={styles.formBody}>
                We will come to you — a call, a visit to your masjid, or a presentation for your leadership team and shura. Tell us about your community and we will design a programme that fits.
              </p>
              <p className={styles.formMicrocopy}>
                Our partnerships team includes people who understand Islamic community leadership. We are not here to sell — we are here to serve your congregation alongside you.
              </p>

              <div className={styles.formLinks}>
                <div className={styles.formLinksLabel}>Related pages</div>
                <Link href="/community/charity-partnership" className={styles.formLink}>Charity Partnership →</Link>
                <Link href="/about/our-scholars" className={styles.formLink}>Our Scholars →</Link>
                <Link href="/community/community-resources" className={styles.formLink}>Community Resources →</Link>
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
