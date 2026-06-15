import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { TrackedButton } from '@/components/analytics/TrackedButton';
import styles from './page.module.css';

const siteUrl = 'https://themuslimwill.com';
const pageTitle = 'Our Team | The People Behind The Muslim Will';
const pageDescription = 'Meet the founder, advisers, scholars, and professionals behind The Muslim Will — estate planning specialists and community leaders serving Muslim families across Canada.';

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: `${siteUrl}/about/our-team` },
};

export default function OurTeamPage() {
  return (
    <div className={styles.main}>

      {/* ── HERO ── */}
      <section className={styles.heroSection}>
        <div className={styles.heroOverlay} />
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.heroEyebrow}>Our Company › Our Team</div>
            <h1 className={styles.heroH1}>
              The people behind the platform — and the mission behind the people.
            </h1>
            <p className={styles.heroSub}>
              The Muslim Will is built by estate planning specialists, technology builders, and community-focused professionals working together to serve Muslim families across Canada. Every person on our team is here because this problem matters — and because they have the expertise to help solve it.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 1: Leadership ── */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionLabel}>Leadership</div>

          {/* Ahmed Gohar */}
          <div className={styles.leaderCard}>
            <div className={styles.leaderAvatarCol}>
              <div className={styles.leaderAvatar}>
                <Image src="/Images/05.jpeg" alt="Ahmed Gohar" fill />
              </div>
              <div className={styles.leaderMeta}>
                <div className={styles.leaderMetaItem}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                  </svg>
                  Toronto, Canada
                </div>
                <div className={styles.leaderMetaItem}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
                  </svg>
                  Technology &amp; Systems Design
                </div>
              </div>
            </div>

            <div className={styles.leaderBody}>
              <div className={styles.leaderRole}>Founder &amp; CEO, Patriva / The Muslim Will</div>
              <h2 className={styles.leaderName}>Ahmed Gohar</h2>
              <p className={styles.leaderBio}>
                Ahmed Gohar is the founder of Patriva and The Muslim Will, where he builds structured technology systems for Shariah-conscious estate planning. His work is focused on making legally grounded, professionally coordinated Islamic will planning accessible to Muslim families across Canada — and eventually across the West.
              </p>
              <p className={styles.leaderBio}>
                Ahmed&apos;s background is in technology and systems design. His approach to The Muslim Will is the same as his approach to every platform he builds: identify the real gap, design a structure that closes it responsibly, and build the professional relationships that make it trustworthy.
              </p>
              <Link href="/about/ahmed-gohar" className={styles.leaderBioLink}>
                Read Ahmed&apos;s full bio →
              </Link>
            </div>
          </div>

          {/* Dr. Yasser Aboutaha */}
          <div className={styles.leaderCard} data-reverse>
            <div className={styles.leaderAvatarCol}>
              <div className={styles.leaderAvatar}>
                <Image src="/Images/04.jpeg" alt="Dr. Yasser Aboutaha" fill />
              </div>
              <div className={styles.leaderMeta}>
                <div className={styles.leaderMetaItem}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                  </svg>
                  Canada
                </div>
                <div className={styles.leaderMetaItem}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                  Community &amp; Relationships
                </div>
              </div>
            </div>

            <div className={styles.leaderBody}>
              <div className={styles.leaderRole}>Executive Adviser</div>
              <h2 className={styles.leaderName}>Dr. Yasser Aboutaha</h2>
              <p className={styles.leaderBio}>
                Dr. Yasser Aboutaha is Executive Adviser at The Muslim Will, where he builds the community relationships that the platform depends on. His work connects the professional planning service with the families, masajid, charities, and community leaders who need it most — bridging trust, communication, and accessibility across Muslim communities in Canada.
              </p>
              <p className={styles.leaderBio}>
                Dr. Yasser&apos;s role is not operational — it is relational. He is the bridge between what The Muslim Will has built and the community it was built for.
              </p>
              <Link href="/about/yasser-aboutaha" className={styles.leaderBioLink}>
                Read Dr. Yasser&apos;s full bio →
              </Link>
            </div>
          </div>

          {/* Mohamed Aly */}
          <div className={styles.leaderCard}>
            <div className={styles.leaderAvatarCol}>
              <div className={styles.leaderAvatar}>
                <Image src="/Images/15.jpeg" alt="Mohamed Aly" fill />
              </div>
              <div className={styles.leaderMeta}>
                <div className={styles.leaderMetaItem}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                  </svg>
                  Canada
                </div>
                <div className={styles.leaderMetaItem}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                  </svg>
                  Finance &amp; Operations
                </div>
              </div>
            </div>

            <div className={styles.leaderBody}>
              <div className={styles.leaderRole}>Chief Financial Officer</div>
              <h2 className={styles.leaderName}>Mohamed Aly</h2>
              <p className={styles.leaderBio}>
                Mohamed brings over 18 years of corporate finance, strategic planning, controllership, and M&amp;A experience. With a background bridging Computer Science and an MBA in Finance, he oversees the platform&apos;s fiscal strategy and operational growth.
              </p>
              <Link href="/about/mohamed-aly" className={styles.leaderBioLink}>
                Read Mohamed&apos;s full bio →
              </Link>
            </div>
          </div>

          {/* Dr. Sulayman Al-Murayr */}
          <div className={styles.leaderCard} data-reverse>
            <div className={styles.leaderAvatarCol}>
              <div className={styles.leaderAvatar}>
                <Image src="/Images/Dr.Soliman.png" alt="Dr. Sulayman Al-Murayr" fill />
              </div>
              <div className={styles.leaderMeta}>
                <div className={styles.leaderMetaItem}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                  </svg>
                  Canada
                </div>
                <div className={styles.leaderMetaItem}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
                  </svg>
                  Islamic Review
                </div>
              </div>
            </div>

            <div className={styles.leaderBody}>
              <div className={styles.leaderRole}>Islamic Review Authority</div>
              <h2 className={styles.leaderName}>Dr. Sulayman Al-Murayr</h2>
              <p className={styles.leaderBio}>
                Sulayman Al-Murayr provides the scholarly anchor for the Islamic review of inheritance structures at Muslim Will. He holds traditional ijazat and ensures the platform&apos;s standard logic aligns with established Islamic principles.
              </p>
              <Link href="/about/sulayman-al-murayr" className={styles.leaderBioLink}>
                Read Dr. Sulayman&apos;s full bio →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: Our Scholars ── */}
      <section className={styles.scholarsSection}>
        <div className={styles.scholarsOverlay} />
        <div className={styles.container}>
          <div className={styles.scholarsContent}>
            <div className={styles.scholarsLeft}>
              <div className={styles.sectionLabelLight}>Islamic Review</div>
              <h2 className={styles.scholarsH2}>Islamic inheritance review — handled by qualified scholars</h2>
              <p className={styles.scholarsPara}>
                Every application prepared through The Muslim Will includes access to qualified Islamic scholars who review inheritance calculations and provide guidance on complex estate situations. Our scholar network includes Ijazah-certified scholars with expertise in Fiqh al-Mawarith, representing multiple madhabs and diverse community backgrounds across Canada.
              </p>
              <Link href="/about/our-scholars" className={styles.scholarsLink}>
                Meet our scholars →
              </Link>
            </div>

            <div className={styles.scholarsRight}>
              <div className={styles.scholarsCard}>
                <div className={styles.scholarsCardIcon}>📜</div>
                <div className={styles.scholarsCardTitle}>Ijazah-certified</div>
                <div className={styles.scholarsCardDesc}>Formal scholarly certification in Fiqh al-Mawarith required of every scholar in our network</div>
              </div>
              <div className={styles.scholarsCard}>
                <div className={styles.scholarsCardIcon}>🕌</div>
                <div className={styles.scholarsCardTitle}>All madhabs represented</div>
                <div className={styles.scholarsCardDesc}>Our scholar network reflects the full diversity of the Muslim community in Canada</div>
              </div>
              <div className={styles.scholarsCard}>
                <div className={styles.scholarsCardIcon}>🔍</div>
                <div className={styles.scholarsCardTitle}>Every application reviewed</div>
                <div className={styles.scholarsCardDesc}>No will is completed through our platform without a documented scholarly review</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: Professional Network ── */}
      <section className={styles.section} style={{ backgroundColor: 'var(--color-cream-light)', borderTop: '1px solid var(--color-border)' }}>
        <div className={styles.container}>
          <div className={styles.networkLayout}>
            <div className={styles.networkText}>
              <div className={styles.sectionLabel}>Professional Network</div>
              <h2 className={styles.sectionH2}>Legal, estate planning, and operational expertise</h2>
              <p className={styles.sectionPara}>
                Behind the platform is a network of licensed legal professionals, estate planning specialists, and operational staff who manage the compliance, document review, and administrative workflow that makes The Muslim Will function at a professional standard.
              </p>
              <p className={styles.sectionPara}>
                We do not publish every name. But we operate with transparency — our compliance framework, our scope of service, and our professional boundaries are available for anyone who wants to understand how we work.
              </p>
              <Link href="/legal-islamic-compliance" className={styles.networkLink}>
                See our compliance framework →
              </Link>
            </div>

            <div className={styles.networkPillars}>
              <div className={styles.networkPillar}>
                <div className={styles.networkPillarIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                    <polyline points="14 2 14 8 20 8"/>
                  </svg>
                </div>
                <div className={styles.networkPillarTitle}>Licensed legal professionals</div>
                <div className={styles.networkPillarDesc}>Document compliance and legal structure</div>
              </div>
              <div className={styles.networkPillar}>
                <div className={styles.networkPillarIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                    <polyline points="9 22 9 12 15 12 15 22"/>
                  </svg>
                </div>
                <div className={styles.networkPillarTitle}>Estate planning specialists</div>
                <div className={styles.networkPillarDesc}>Structural review and workflow management</div>
              </div>
              <div className={styles.networkPillar}>
                <div className={styles.networkPillarIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                  </svg>
                </div>
                <div className={styles.networkPillarTitle}>Operational &amp; admin staff</div>
                <div className={styles.networkPillarDesc}>Secure records, client communications, platform integrity</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaH2}>Ready to protect your family?</h2>
            <p className={styles.ctaSub}>Start your Islamic will application — guided by our platform, reviewed by our scholars, and built to last.</p>
            <div className={styles.ctaActions}>
              <TrackedButton
                href="https://app.themuslimwill.com/Account/Login"
                className={styles.ctaPrimary}
                eventName="team_start_application"
                eventParams={{ location: 'our_team_footer' }}
              >
                Start My Application →
              </TrackedButton>
              <TrackedButton
                href="/about/our-story"
                className={styles.ctaSecondary}
                eventName="team_our_story"
                eventParams={{ location: 'our_team_footer' }}
              >
                Our Story →
              </TrackedButton>
            </div>
            <div className={styles.ctaLinks}>
              <Link href="/about/our-story" className={styles.ctaInternalLink}>Our Story</Link>
              <span>·</span>
              <Link href="/about/our-scholars" className={styles.ctaInternalLink}>Our Scholars</Link>
              <span>·</span>
              <Link href="/legal-islamic-compliance" className={styles.ctaInternalLink}>Compliance</Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
