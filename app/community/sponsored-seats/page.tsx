import type { Metadata } from 'next';
import { TrustBar } from '@/components/ui/TrustBar';
import Link from 'next/link';
import { TrackedButton } from '@/components/analytics/TrackedButton';
import { InquiryForm } from '@/components/forms/InquiryForm';
import styles from './page.module.css';

const siteUrl = 'https://themuslimwill.com';
const pageTitle = 'Sponsored Seats | Fund Islamic Will Planning for Your Community | The Muslim Will';
const pageDescription = 'Fund will preparation for families in your community — your organisation covers the cost, The Muslim Will handles everything, every family receives a complete Islamic will and private Vault.';

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: `${siteUrl}/community/sponsored-seats` },
};

export default function SponsoredSeatsPage() {
  return (
    <div className={styles.main}>

      {/* ── HERO ── */}
      <section className={styles.heroSection}>
        <div className={styles.heroOverlay} />
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.heroEyebrow}>For Charities &amp; Nonprofits › Sponsored Seats</div>
            <h1 className={styles.heroH1}>
              Cover the cost. We handle everything. Your community gets the protection they deserve.
            </h1>
            <p className={styles.heroSub}>
              Many Muslim families know they need a will. The cost is the barrier. Sponsored Seats lets your organisation remove that barrier entirely — funding will preparation for families in your community, with The Muslim Will handling every step of the process.
            </p>
            <div className={styles.heroActions}>
              <TrackedButton
                href="#request-demo"
                className={styles.ctaButtonGoldFull}
                eventName="hero_demo_click"
                eventParams={{ location: 'sponsored_seats_hero' }}
              >
                Request a Demo →
              </TrackedButton>
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST ANCHORS ── */}
      <TrustBar items={['Your organisation funds access — families pay nothing', 'Each family receives a complete Islamic will and private Vault', 'You choose who receives sponsored access — and how many', 'Full programme support from our partnerships team']} />

      {/* ── SECTION 1: How Sponsored Seats Work ── */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeaderCenter}>
            <h2 className={styles.sectionH2}>Simple for your organisation. Transformative for your community.</h2>
          </div>

          <div className={styles.stepsGrid}>
            <div className={styles.stepCard}>
              <div className={styles.stepNumber}>01</div>
              <div className={styles.stepBody}>
                <h3 className={styles.stepTitle}>Your organisation sponsors a number of seats</h3>
                <p className={styles.stepDesc}>
                  You decide how many families you want to support — whether that is ten families from your zakat fund, fifty members from your community programme, or an open-ended rolling commitment. We structure the programme around your capacity and your goals.
                </p>
              </div>
            </div>

            <div className={styles.stepConnector}>
              <div className={styles.stepConnectorLine} />
            </div>

            <div className={styles.stepCard}>
              <div className={styles.stepNumber}>02</div>
              <div className={styles.stepBody}>
                <h3 className={styles.stepTitle}>Families receive guided access</h3>
                <p className={styles.stepDesc}>
                  Each sponsored family receives a personalised invitation to The Muslim Will platform — guided through a complete Islamic will, Powers of Attorney, and their private Vault. The experience is identical to a paid subscription. There is no reduced service, no visible sponsorship watermark, and no compromise on quality.
                </p>
              </div>
            </div>

            <div className={styles.stepConnector}>
              <div className={styles.stepConnectorLine} />
            </div>

            <div className={styles.stepCard}>
              <div className={styles.stepNumber}>03</div>
              <div className={styles.stepBody}>
                <h3 className={styles.stepTitle}>You see the impact</h3>
                <p className={styles.stepDesc}>
                  Your organisation receives a clear picture of how many families have completed their estate plans through your programme — so you can measure the impact of your investment and report it to your donors, board, or community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: Who Sponsored Seats Are For ── */}
      <section className={styles.section} style={{ backgroundColor: 'var(--color-cream-light)', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
        <div className={styles.container}>
          <div className={styles.twoColLayout}>
            <div className={styles.twoColText}>
              <h2 className={styles.sectionH2}>The families who need this most are often the ones least likely to pay for it</h2>
              <p className={styles.sectionIntro} style={{ marginBottom: '1.5rem' }}>
                New Canadian families who have not yet thought about estate planning. Older community members who have been meaning to prepare a will for years but never taken the step. Young parents who know they need guardianship documentation but have not found a pathway that feels accessible.
              </p>
              <p className={styles.sectionIntro}>
                Sponsored Seats removes the financial barrier and replaces it with something better — a trusted, guided process, backed by your organisation&apos;s name and delivered by The Muslim Will.
              </p>
            </div>

            <div className={styles.audienceCard}>
              <div className={styles.audienceCardLabel}>Families this programme reaches</div>
              <ul className={styles.audienceList}>
                <li className={styles.audienceItem}>
                  <div className={styles.audienceIcon}>🏠</div>
                  <div>
                    <strong>New Canadians</strong>
                    <span> — who have not yet navigated the local estate planning process</span>
                  </div>
                </li>
                <li className={styles.audienceItem}>
                  <div className={styles.audienceIcon}>👴</div>
                  <div>
                    <strong>Older community members</strong>
                    <span> — who have delayed for years and need a trusted, simple path forward</span>
                  </div>
                </li>
                <li className={styles.audienceItem}>
                  <div className={styles.audienceIcon}>👨‍👩‍👧</div>
                  <div>
                    <strong>Young parents</strong>
                    <span> — who know they need guardianship documentation but face cost barriers</span>
                  </div>
                </li>
                <li className={styles.audienceItem}>
                  <div className={styles.audienceIcon}>🤲</div>
                  <div>
                    <strong>Zakat-eligible families</strong>
                    <span> — receiving a lasting, dignified benefit from your welfare fund</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: How Organisations Are Funding This ── */}
      <section className={styles.zakatSection}>
        <div className={styles.zakatOverlay} />
        <div className={styles.container}>
          <div className={styles.zakatContent}>
            <h2 className={styles.zakatH2}>A natural fit for zakat, sadaqah, and community welfare funds</h2>
            <div className={styles.zakatBar} />
            <p className={styles.zakatPara}>
              Islamic estate planning is a community welfare need. For many organisations, Sponsored Seats fits naturally within existing zakat or sadaqah distribution frameworks — a tangible, lasting benefit delivered to families who need it.
            </p>
            <p className={styles.zakatPara}>
              It also works well as a donor-funded programme — a named giving opportunity for supporters who want their contribution to create something lasting for the community they love.
            </p>
            <p className={styles.zakatPara}>
              We are happy to discuss how a Sponsored Seats programme could be structured within your existing funding model. Every arrangement is shaped around what works for your organisation.
            </p>

            <div className={styles.zakatPillRow}>
              <div className={styles.zakatPill}>Zakat funds</div>
              <div className={styles.zakatPill}>Sadaqah distribution</div>
              <div className={styles.zakatPill}>Community welfare</div>
              <div className={styles.zakatPill}>Donor-named giving</div>
            </div>

            <TrackedButton
              href="#request-demo"
              className={styles.zakatCta}
              eventName="zakat_section_demo_click"
              eventParams={{ location: 'sponsored_seats_zakat' }}
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
              <h2 className={styles.formH2}>Ready to protect more families in your community?</h2>
              <p className={styles.formBody}>
                Tell us about your organisation and the community you serve. We will design a programme that fits your capacity, your funding model, and your goals.
              </p>
              <p className={styles.formMicrocopy}>
                Our partnerships team will walk you through how a Sponsored Seats programme works — and help you think through what it could look like for your community.
              </p>

              <div className={styles.formLinks}>
                <div className={styles.formLinksLabel}>Related pages</div>
                <Link href="/community/charity-partnership" className={styles.formLink}>Charity Partnership →</Link>
                <Link href="/community/planned-giving" className={styles.formLink}>Planned Giving →</Link>
                <Link href="/community/mosque-ambassador" className={styles.formLink}>Mosque Ambassador Programme →</Link>
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
