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
  'Answer a guided wizard.',
  'Scholar review for Islamic inheritance alignment.',
  'Drafted & finalized by licensed Canadian lawyers.',
  'Signing instructions to make it legally valid in Canada.',
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
            your full estate protection package is <strong>$300</strong>{' '}
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
              Claim My $300 Event Offer →
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
            <div className={styles.sectionLabel}>Today&apos;s Event Pricing</div>
            <h2 className={styles.sectionH2}>Two ways to get protected today.</h2>
            <p className={styles.sectionIntro}>
              Whether you want everything reviewed by a dedicated expert or want to start now and
              build at your own pace — both options are available at your exclusive event guest rate.
            </p>
          </div>

          <div className={styles.offerGrid}>
            {/* Full Package — featured */}
            <div className={styles.offerCardFeatured}>
              <div className={styles.offerBadge}>Recommended For Today</div>
              <h3 className={styles.offerName}>The Full Package</h3>
              <p className={styles.offerTagline}>
                A dedicated expert reviews your case, start to finish — everything drafted,
                scholar-reviewed, and finalized by licensed Canadian lawyers.
              </p>
              <div className={styles.offerPriceRow}>
                <span className={styles.offerPriceWas}>$350</span>
                <span className={styles.offerPriceNow}>$300</span>
                <span className={styles.offerPriceNote}>Event Subsidy Applied</span>
              </div>
              <ul className={styles.offerList}>
                <li><PiCheckCircleLight /> Islamic Last Will &amp; Testament</li>
                <li><PiCheckCircleLight /> PoA for Property &amp; PoA for Personal Care</li>
                <li><PiCheckCircleLight /> Minor Guardianship designation</li>
                <li><PiCheckCircleLight /> Scholar Review &amp; Admin/Legal Review</li>
                <li><PiCheckCircleLight /> 12 months of Vault access included</li>
              </ul>
              <TrackedButton
                href={cta('full')}
                size="lg"
                variant="secondary"
                className={styles.offerCtaGold}
                eventName="event_cta_click"
                eventParams={{ location: 'event_offer', plan: 'full' }}
              >
                Get The Full Package — $300 →
              </TrackedButton>
              <p className={styles.offerMicro}>One-time payment. Today&apos;s ISSC guest rate — regular price $350.</p>
            </div>

            {/* The Bridge — secondary */}
            <div className={styles.offerCardSide}>
              <h3 className={styles.offerNameSide}>The Bridge</h3>
              <p className={styles.offerTaglineSide}>
                Start today, build your Will and Vault at your own pace — one simple subscription.
              </p>
              <div className={styles.offerPriceRowSide}>
                <span className={styles.offerPriceSide}>$5.99</span>
                <span className={styles.offerPricePerSide}>/month</span>
              </div>
              <ul className={styles.offerListSide}>
                <li><PiCheckCircleLight /> Complete Islamic Will</li>
                <li><PiCheckCircleLight /> Private secure Vault — all 4 branches</li>
                <li><PiCheckCircleLight /> Unlimited updates any time</li>
              </ul>
              <TrackedButton
                href={cta('bridge')}
                size="md"
                variant="outline"
                className={styles.offerCtaOutline}
                eventName="event_cta_click"
                eventParams={{ location: 'event_offer', plan: 'bridge' }}
              >
                Start For $5.99/month →
              </TrackedButton>
              <p className={styles.offerMicroSide}>Free to register. Cancel anytime.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT'S INCLUDED ── */}
      <section className={styles.packageSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionLabelLight}>More Than Just A Will</div>
            <h2 className={styles.sectionH2Light}>A complete protection package.</h2>
            <p className={styles.sectionIntroLight}>
              When you choose Muslim Will, you receive a comprehensive, 4-part estate protection
              package that covers your family both while you are alive and after you pass —
              all included in your transparent upfront price.
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
            {HOW_IT_WORKS.map((step, i) => (
              <div key={step} className={styles.stepCard}>
                <div className={styles.stepNumber}>{i + 1}</div>
                <p>{step}</p>
              </div>
            ))}
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
            <h2>Your family is waiting for the clarity only you can give them.</h2>
            <p className={styles.finalCtaText}>
              This exclusive $300 rate is only available while you&apos;re here today with ISSC. It takes less than 10 minutes to start.
            </p>
            <div className={styles.finalCtaActions}>
              <TrackedButton
                href={cta('full')}
                variant="secondary"
                size="lg"
                className={styles.heroCtaGold}
                eventName="event_cta_click"
                eventParams={{ location: 'event_final_cta', plan: 'full' }}
              >
                Claim My $300 Event Offer →
              </TrackedButton>
              <Link href="/pricing" className={styles.finalCtaSecondary}>
                See Full Pricing Details
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
