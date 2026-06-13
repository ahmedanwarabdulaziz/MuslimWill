import type { Metadata } from 'next';
import Link from 'next/link';
import { TrackedButton } from '@/components/analytics/TrackedButton';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Community & Giving | Islamic Estate Planning for Organisations | The Muslim Will',
  description: 'Muslim Will works with mosques, Islamic charities, and community organisations across Canada — from mosque ambassador programmes to charity partnerships and planned giving.',
  alternates: { canonical: 'https://themuslimwill.com/community' },
};

export default function CommunityOverview() {
  return (
    <div className={styles.main}>
      {/* 1. Hero Section */}
      <section className={`${styles.section} ${styles.heroSection}`}>
        <div className={styles.container}>
          <div className={styles.heroEyebrow}>Community &amp; Giving</div>
          <h1 className={styles.heroH1}>
            Islamic estate planning is a community obligation — not just a personal one.
          </h1>
          <p className={styles.heroIntro}>
            The Prophet ﷺ described the will as an obligation no Muslim should delay. But most Muslim families delay anyway — because no one brought it to them. Muslim Will works with mosques, charities, and community organisations to change that.
          </p>
        </div>
      </section>

      {/* 2. The programmes */}
      <section className={`${styles.section} ${styles.grayBg}`}>
        <div className={styles.container}>
          <div className={styles.sectionLabel}>What We Offer</div>
          <h2 className={styles.sectionH2}>Choose the right programme for your organisation.</h2>
          <p className={styles.sectionSub}>
            Whether you lead a masjid, run a charity, or want to include a cause in your will — there is a pathway built for your situation.
          </p>
          
          <div className={styles.programGrid}>
            {/* Card 1 */}
            <div className={styles.programCard}>
              <div className={styles.programIcon}>🕌</div>
              <h3 className={styles.programTitle}>Mosque Ambassador Programme</h3>
              <div className={styles.programWho}><strong>Who it&apos;s for:</strong> Imams and Islamic centres who want to offer will planning to their congregation</div>
              <p className={styles.programDesc}>
                Bring a complete Islamic will planning service to your community — co-branded with your masjid, supported with outreach materials, and built around the trust your congregation already places in you.
              </p>
              <Link href="/community/mosque-ambassador" className={styles.programLink}>
                Learn More &rarr;
              </Link>
            </div>
            
            {/* Card 2 */}
            <div className={styles.programCard}>
              <div className={styles.programIcon}>🤝</div>
              <h3 className={styles.programTitle}>Charity Partnership</h3>
              <div className={styles.programWho}><strong>Who it&apos;s for:</strong> Canadian Islamic charities and nonprofits</div>
              <p className={styles.programDesc}>
                Help your donors plan their estates and include your organisation in their legacy — a co-branded Islamic will planning partnership that deepens donor relationships and generates sustainable income.
              </p>
              <Link href="/community/charity-partnership" className={styles.programLink}>
                Learn More &rarr;
              </Link>
            </div>
            
            {/* Card 3 */}
            <div className={styles.programCard}>
              <div className={styles.programIcon}>📜</div>
              <h3 className={styles.programTitle}>Planned Giving</h3>
              <div className={styles.programWho}><strong>Who it&apos;s for:</strong> Organisations wanting to build a structured legacy giving programme</div>
              <p className={styles.programDesc}>
                Give your donors an Islamically grounded pathway to include your cause in their will — framed around Sadaqah Jariyah, the 1/3 bequest rule, and lasting impact.
              </p>
              <Link href="/community/planned-giving" className={styles.programLink}>
                Learn More &rarr;
              </Link>
            </div>
            
            {/* Card 4 */}
            <div className={styles.programCard}>
              <div className={styles.programIcon}>🎓</div>
              <h3 className={styles.programTitle}>Sponsored Seats</h3>
              <div className={styles.programWho}><strong>Who it&apos;s for:</strong> Organisations that want to fund will planning for families in their community</div>
              <p className={styles.programDesc}>
                Your organisation covers the cost. The Muslim Will handles everything. Every family receives a complete Islamic will and private Vault — as a gift from your community.
              </p>
              <Link href="/community/sponsored-seats" className={styles.programLink}>
                Learn More &rarr;
              </Link>
            </div>
            
            {/* Card 5 */}
            <div className={styles.programCard}>
              <div className={styles.programIcon}>📚</div>
              <h3 className={styles.programTitle}>Community Resources</h3>
              <div className={styles.programWho}><strong>Who it&apos;s for:</strong> Imams, educators, and community leaders</div>
              <p className={styles.programDesc}>
                Khutbah outlines, community announcements, and awareness guides to help introduce Islamic estate planning to your congregation — available to download and use freely.
              </p>
              <Link href="/community/community-resources" className={styles.programLink}>
                Access Resources &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. The Islamic case */}
      <section className={`${styles.section} ${styles.editorialSection}`}>
        <div className={styles.containerNarrow}>
          <h2 className={styles.sectionH2}>Why this matters for your community</h2>
          <div className={styles.editorialBody}>
            <p>
              The Prophet ﷺ said it is not permissible for a Muslim who has something to bequeath to sleep two nights without a written will. Yet in most Muslim communities across Canada, the majority of families have no will at all — and no plan for what happens to their debts, their assets, or their children.
            </p>
            <p>
              When a Muslim passes away without a will, the consequences fall on the community. Families seek guidance from the imam. Disputes arise between heirs. Debts go unresolved. Children&apos;s guardianship goes undocumented. Community organisations lose years of planned donations. The Muslim Will gives your organisation the tools to change this — before it becomes a crisis.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Request a demo */}
      <section className={`${styles.section} ${styles.ctaSection}`}>
        <div className={styles.containerNarrow}>
          <h2 className={styles.sectionH2}>Not sure which programme fits your organisation?</h2>
          <p className={styles.ctaBody}>
            Reach out and we will walk you through the right option for your masjid, charity, or community initiative. Every partnership is discussed personally — we do not run automated onboarding for community organisations.
          </p>
          
          <div className={styles.ctaActions}>
            <TrackedButton href="/community/request-demo" size="lg" variant="primary" className={styles.primaryBtn} eventName="community_request_demo_click" eventParams={{ location: 'community_hub' }}>
              Request a Conversation &rarr;
            </TrackedButton>
          </div>
          <div className={styles.ctaMicro}>
            We respond to every enquiry within one business day.
          </div>
        </div>
      </section>

      {/* 5. Individual redirect */}
      <section className={styles.redirectSection}>
        <div className={styles.container}>
          <p className={styles.redirectText}>
            Looking to set up your own Islamic will and private Vault?{' '}
            <Link href="/start" className={styles.redirectLink}>
              Start your application &rarr;
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}
