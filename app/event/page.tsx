import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { TrackedButton } from '@/components/analytics/TrackedButton';
import { TrustBar } from '@/components/ui/TrustBar';
import {
  PiScrollLight,
  PiUsersThreeLight,
  PiBankLight,
  PiFirstAidKitLight,
  PiCheckCircleLight,
  PiPhoneLight,
  PiEnvelopeSimpleLight,
} from 'react-icons/pi';
import styles from './page.module.css';

const APP_URL = 'https://app.themuslimwill.com/Account/Login';
const cta = (plan?: string) =>
  `${APP_URL}?ref=event&partner=issc${plan ? `&plan=${plan}` : ''}`;

export const metadata: Metadata = {
  title: 'Exclusive Event Offer — ISSC Guests | Muslim Will',
  description:
    "You're at the Muslim Will table today. Complete your Islamic Will, Vault, and Powers of Attorney with an exclusive event rate — guided, scholar-reviewed, and lawyer-finalized.",
  robots: { index: false, follow: false },
  alternates: { canonical: 'https://www.themuslimwill.com/event' },
};

const PACKAGE_PARTS = [
  {
    icon: PiScrollLight,
    title: 'The Islamic Last Will',
    copy: 'Distribute your wealth according to Shariah, honour charitable intentions, and legally map your final wishes.',
  },
  {
    icon: PiUsersThreeLight,
    title: 'Minor Guardianship',
    copy: 'Ensure your minor children are raised by the people you trust who share your Islamic values.',
  },
  {
    icon: PiBankLight,
    title: 'PoA for Property',
    copy: 'Designate a trusted person to manage your finances, bank accounts, and business if you become medically incapacitated.',
  },
  {
    icon: PiFirstAidKitLight,
    title: 'PoA for Personal Care',
    copy: 'Legally appoint someone to make critical medical, healthcare, and life-support decisions on your behalf if you cannot.',
  },
];

const HOW_IT_WORKS = [
  'Create: Complete your guided application',
  'Review: Move through the review process',
  'Finalize: Your documents are drafted and finalized by Canadian lawyers',
];

export default function EventPage() {
  return (
    <div className={styles.main}>

      {/* ── HERO ── */}
      <section className={styles.heroSection}>
        <div className={styles.heroGlow} />
        <div className={styles.container}>
          <div className={styles.partnerRow}>
            <Image
              src="/Images/Nour Logo.png"
              alt="ISSC"
              width={220}
              height={220}
              className={styles.partnerLogoIssc}
              priority
            />
          </div>

          <div className={styles.heroEyebrow}>✦ Welcome, ISSC Guest — Exclusive Event Offer</div>
          <h1 className={styles.heroH1}>
            Your Will. <span className={styles.heroH1Gold}>Your Vault.</span><br />
            Complete It Today.
          </h1>
          <p className={styles.heroSub}>
            Don&apos;t just leave a Will. Leave a complete plan. Because you&apos;re here with us today,
            your full estate protection package is <strong>$275</strong>{' '}
            instead of $350 — available only while you&apos;re at this event.
          </p>

          <div className={styles.heroActions}>
            <TrackedButton
              href={cta('full')}
              size="lg"
              variant="secondary"
              className={styles.heroCtaGold}
              eventName="event_cta_click"
              eventParams={{ location: 'event_hero', plan: 'full' }}
            >
              Claim My $275 Event Offer →
            </TrackedButton>
            <TrackedButton
              href="#offer"
              size="lg"
              variant="outlineLight"
              eventName="event_see_offer_click"
              eventParams={{ location: 'event_hero' }}
            >
              See What&apos;s Included
            </TrackedButton>
          </div>

          <div className={styles.heroBadges}>
            <span>Update From Your Phone</span>
            <span>Private &amp; Secure</span>
            <span>You Control Who Sees What</span>
          </div>
        </div>
      </section>

      <TrustBar items={['Scholar Verified', 'Licensed Canadian Lawyers', 'Ontario Compliant', 'Bank-Level Encryption']} />

      {/* ── OFFER ── */}
      <section id="offer" className={styles.offerSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionLabel}>Your Exclusive Event Offer</div>
            <h2 className={styles.sectionH2}>Take the next step today.</h2>
            <p className={styles.sectionIntro}>
              You&apos;ve seen why the Will is your foundation. Choose how you want to secure it with our exclusive event guest rates.
            </p>
          </div>

          <div className={styles.offerGrid}>
            {/* Vault Subscription — featured */}
            <div className={styles.offerCardFeatured}>
              <div className={styles.offerBadge}>Saturday Only</div>
              <h3 className={styles.offerName}>Vault Subscription</h3>
              <p className={styles.offerTagline}>
                Start today, organize your assets, and create a basic Will template when ready.
              </p>
              <div className={styles.offerPriceRow}>
                <span className={styles.offerPriceWas}>$8/mo</span>
                <span className={styles.offerPriceNow}>$5.99</span>
                <span className={styles.offerPriceNote}>/month</span>
              </div>
              <ul className={styles.offerList}>
                <li><PiCheckCircleLight /> Basic Will Template (Free)</li>
                <li><PiCheckCircleLight /> Private secure Vault — all 4 branches</li>
                <li><PiCheckCircleLight /> Unlimited updates any time</li>
                <li><PiCheckCircleLight /> 1 bonus month for Saturday attendees</li>
              </ul>
              <TrackedButton
                href={cta('bridge')}
                size="lg"
                variant="secondary"
                className={styles.offerCtaGold}
                eventName="event_cta_click"
                eventParams={{ location: 'event_offer', plan: 'bridge' }}
              >
                Claim Subscription — $5.99/mo →
              </TrackedButton>
              <p className={styles.offerMicro}>Cancel anytime.</p>
            </div>

            {/* Right column for Premium options */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {/* Premium Individual */}
              <div className={styles.offerCardSide} style={{ flex: 1 }}>
                <h3 className={styles.offerNameSide}>Premium Individual</h3>
                <p className={styles.offerTaglineSide}>
                  A dedicated expert reviews your case, start to finish — everything drafted,
                  scholar-reviewed, and finalized by licensed Canadian lawyers.
                </p>
                <div className={styles.offerPriceRowSide} style={{ marginBottom: '0.25rem' }}>
                  <span className={styles.offerPriceSide}>$275</span>
                </div>
                <p style={{ color: 'var(--color-text-muted)', textDecoration: 'line-through', fontSize: '0.85rem', marginBottom: '1rem' }}>instead of $350</p>
                <ul className={styles.offerListSide}>
                  <li><PiCheckCircleLight /> Islamic Last Will &amp; Testament</li>
                  <li><PiCheckCircleLight /> PoAs &amp; Minor Guardianship</li>
                  <li><PiCheckCircleLight /> Scholar &amp; Legal Review</li>
                  <li><PiCheckCircleLight /> 12 months Vault included</li>
                </ul>
                <TrackedButton
                  href={cta('full')}
                  size="md"
                  variant="outline"
                  className={styles.offerCtaOutline}
                  eventName="event_cta_click"
                  eventParams={{ location: 'event_offer', plan: 'full' }}
                >
                  Get Protected — $275 →
                </TrackedButton>
              </div>

              {/* Premium Family */}
              <div className={styles.offerCardSide} style={{ flex: 1 }}>
                <h3 className={styles.offerNameSide}>Premium Family</h3>
                <p className={styles.offerTaglineSide}>
                  Comprehensive protection for both you and your spouse. Two full applications.
                </p>
                <div className={styles.offerPriceRowSide} style={{ marginBottom: '0.25rem' }}>
                  <span className={styles.offerPriceSide}>$500</span>
                </div>
                <p style={{ color: 'var(--color-text-muted)', textDecoration: 'line-through', fontSize: '0.85rem', marginBottom: '1rem' }}>instead of $700</p>
                <ul className={styles.offerListSide}>
                  <li><PiCheckCircleLight /> 2x Islamic Wills &amp; PoAs</li>
                  <li><PiCheckCircleLight /> Minor Guardianship designations</li>
                  <li><PiCheckCircleLight /> Full Expert &amp; Legal Review</li>
                  <li><PiCheckCircleLight /> 12 months Vault for both</li>
                </ul>
                <TrackedButton
                  href={cta('family')}
                  size="md"
                  variant="outline"
                  className={styles.offerCtaOutline}
                  eventName="event_cta_click"
                  eventParams={{ location: 'event_offer', plan: 'family' }}
                >
                  Get Family Plan — $500 →
                </TrackedButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT'S INCLUDED ── */}
      <section className={styles.packageSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionLabelLight}>As Discussed Today</div>
            <h2 className={styles.sectionH2Light}>Everything in one secure place.</h2>
            <p className={styles.sectionIntroLight}>
              Don&apos;t leave your family searching. With Muslim Will and the Vault, everything you own, everything you owe, and all your critical instructions are organized and protected.
            </p>
          </div>

          <div className={styles.packageGrid}>
            {PACKAGE_PARTS.map(({ icon: Icon, title, copy }) => (
              <div key={title} className={styles.packageCard}>
                <div className={styles.packageIcon}><Icon size={26} /></div>
                <h4>{title}</h4>
                <p>{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className={styles.stepsSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionLabel}>How It Works</div>
            <h2 className={styles.sectionH2}>From this table to a signed plan.</h2>
          </div>
          <div className={styles.stepsGrid}>
            {HOW_IT_WORKS.map((step, i) => {
              const [title, ...descParts] = step.split(':');
              return (
                <div key={title} className={styles.stepCard}>
                  <div className={styles.stepHeader}>
                    <div className={styles.stepNumber}>{i + 1}</div>
                    <h3 className={styles.stepTitle}>{title}</h3>
                  </div>
                  <p className={styles.stepDesc}>{descParts.join(':').trim()}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── BOOTH SUPPORT ── */}
      <section className={styles.helpSection}>
        <div className={styles.container}>
          <div className={styles.helpBox}>
            <div>
              <h2 className={styles.helpH2}>Need a hand? We&apos;re right here.</h2>
              <p className={styles.helpCopy}>
                Ask a member of our team at the table to help you complete this in the next few
                minutes — or reach us directly.
              </p>
            </div>
            <div className={styles.helpContacts}>
              <a href="tel:+18774169455" className={styles.helpContactLink}>
                <PiPhoneLight /> +1 (877) 416-9455
              </a>
              <a href="mailto:info@themuslimwill.com" className={styles.helpContactLink}>
                <PiEnvelopeSimpleLight /> info@themuslimwill.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className={styles.finalCtaSection}>
        <div className={styles.container}>
          <div className={styles.finalCtaBox}>
            <h2>Give your family the direction they need.</h2>
            <p className={styles.finalCtaText}>
              These exclusive rates are only available while you&apos;re here today. It takes less than 10 minutes to start.
            </p>
            <div className={styles.finalCtaActions}>
              <TrackedButton
                href={cta('bridge')}
                variant="secondary"
                size="lg"
                className={styles.heroCtaGold}
                eventName="event_cta_click"
                eventParams={{ location: 'event_final_cta', plan: 'bridge' }}
              >
                Start Vault Subscription — $5.99/mo →
              </TrackedButton>
              <Link href="#offer" className={styles.finalCtaSecondary}>
                See Full Premium Options
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
