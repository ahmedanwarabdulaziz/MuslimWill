'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './page.module.css';

/* ── ADD-ONS TABLE DATA ── */
const ADD_ONS = [
  { name: 'Last Will & Testament', context: 'Standalone — no subscription required', price: '$149' },
  { name: 'Power of Attorney for Personal Care', context: 'Standalone', price: '$99' },
  { name: 'Power of Attorney for Property', context: 'Standalone', price: '$99' },
  { name: 'Scholar Review', context: 'Complex estates, unusual inheritance situations', price: '$49' },
  { name: 'Admin & Legal Review', context: 'Multiple properties, business assets, cross-border', price: '$49' },
  { name: 'Digital Attestation', context: 'Formal legal execution under Ontario law', price: '$149' },
];

/* ── PRICING FAQ ── */
const PRICING_FAQ = [
  {
    q: 'Is The Bridge really complete — or will I need add-ons?',
    a: 'For the vast majority of Muslim families, The Bridge is everything you need. The add-ons exist for specific situations — a complex estate, an unusual inheritance structure, or a family that wants individual expert review. If you are unsure whether your situation calls for an add-on, start with The Bridge and add what you need as the process progresses.',
  },
  {
    q: 'What is included in the $350 Full Package?',
    a: 'The Full Package includes everything in The Bridge plus 12 months of Vault access, Powers of Attorney for both Personal Care and Property, individual Scholar Review, Admin & Legal Review, and Digital Attestation — a combined value of $594.',
  },
  {
    q: 'Can I add Powers of Attorney to The Bridge?',
    a: 'Yes. POA for Personal Care and POA for Property are each available as add-ons at $99 each — or both are included in the Full Package.',
  },
  {
    q: 'Is there an annual billing option?',
    a: 'Yes — annual billing is available at a discounted rate. Details available at checkout.',
  },
  {
    q: 'Can I upgrade from The Bridge to the Full Package later?',
    a: 'Yes. You can add individual expert services at any point in your journey — they do not need to be purchased upfront.',
  },
];

function PricingFaqItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`${styles.faqItem} ${open ? styles.faqItemOpen : ''}`}>
      <button
        className={styles.faqBtn}
        onClick={() => setOpen((p) => !p)}
        aria-expanded={open}
        id={`pricing-faq-${index}`}
      >
        <span className={styles.faqQ}>{q}</span>
        <span className={`${styles.faqChevron} ${open ? styles.chevronOpen : ''}`}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </span>
      </button>
      <div className={styles.faqBody} style={{ maxHeight: open ? '400px' : '0px' }}>
        <p className={styles.faqA}>{a}</p>
      </div>
    </div>
  );
}

export default function PricingPage() {
  return (
    <div className={styles.main}>

      {/* ── HERO ── */}
      <section className={styles.heroSection}>
        <div className={styles.heroOverlay} />
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.heroEyebrow}>Individuals &amp; Families › Pricing</div>
            <h1 className={styles.heroH1}>Clear options for every Muslim family.</h1>
            <p className={styles.heroSub}>
              Whether you are starting today with everything most families need, or looking for individual expert review from start to finish — there is an option built for your situation.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 1: Main Pricing Cards ── */}
      <section className={styles.plansSection}>
        <div className={styles.container}>

          {/* ── THE BRIDGE (featured — full width top) ── */}
          <div className={styles.bridgeCard}>
            <div className={styles.bridgeAccent} />
            <div className={styles.bridgeLayout}>

              {/* Left: price + badge + CTA */}
              <div className={styles.bridgeLeft}>
                <div className={styles.bridgeBadge}>✦ Most Complete</div>
                <div className={styles.bridgeName}>The Bridge</div>
                <div className={styles.bridgePriceRow}>
                  <span className={styles.bridgePrice}>$7.99</span>
                  <span className={styles.bridgePricePer}> / month</span>
                </div>
                <p className={styles.bridgeTagline}>
                  Everything your family needs. An Islamic will, a private Vault, and the tools to protect your legacy — in one complete subscription.
                </p>
                <Link href="https://app.themuslimwill.com/Account/Login?plan=bridge" className={styles.bridgeCta}>
                  Start For $7.99/month →
                </Link>
                <p className={styles.bridgeMicro}>Free to register. Full access from $7.99/month. Cancel anytime.</p>
              </div>

              {/* Right: feature columns */}
              <div className={styles.bridgeRight}>
                <div className={styles.bridgeFeatureGroup}>
                  <div className={styles.bridgeGroupLabel}>
                    <span className={styles.bridgeGroupIcon}>📋</span> Your Islamic Will
                  </div>
                  {[
                    'Last Will & Testament — built on Faraid inheritance principles, Ontario-compliant',
                    'Guardianship documentation for minor children',
                    'Charitable bequest — up to 1/3 of your estate',
                    'Executor appointment',
                  ].map((f) => (
                    <div key={f} className={styles.bridgeFeatureItem}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {f}
                    </div>
                  ))}
                </div>

                <div className={styles.bridgeFeatureGroup}>
                  <div className={styles.bridgeGroupLabel}>
                    <span className={styles.bridgeGroupIcon}>🔐</span> Your Private Vault
                  </div>
                  {[
                    'Obligations Register — every debt your estate needs to settle',
                    'Estate Inventory — every asset your executor needs to find',
                    'Sealed Disclosures — private documents for specific recipients',
                    'Final Words — written letters, voice notes, and video messages',
                  ].map((f) => (
                    <div key={f} className={styles.bridgeFeatureItem}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {f}
                    </div>
                  ))}
                </div>

                <div className={styles.bridgeFeatureGroup}>
                  <div className={styles.bridgeGroupLabel}>
                    <span className={styles.bridgeGroupIcon}>⚙️</span> Everything Else
                  </div>
                  {[
                    'Unlimited updates — any time, no extra cost',
                    'Secure executor release process with full audit trail',
                    'Powers of Attorney available as add-ons',
                  ].map((f) => (
                    <div key={f} className={styles.bridgeFeatureItem}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {f}
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* ── FAMILY + FULL PACKAGE (two-column below) ── */}
          <div className={styles.secondaryCards}>

            {/* Family Package */}
            <div className={styles.secondaryCard}>
              <div className={styles.secondaryCardInner}>
                <div className={styles.secondaryBadge} data-family>👨‍👩‍👧‍👦 Family Package</div>
                <div className={styles.secondaryPriceRow}>
                  <span className={styles.secondaryPrice}>$4.19</span>
                  <span className={styles.secondaryPricePer}> / person / month</span>
                </div>
                <div className={styles.secondarySavings}>30% off the individual price</div>
                <p className={styles.secondaryTagline}>
                  One subscription for every member of your family. Every account private and independent.
                </p>
                <div className={styles.secondaryFeatures}>
                  {[
                    'The Bridge for each family member',
                    'Husband, wife, adult children — all covered',
                    'Every account fully private — no shared vault, no shared documents',
                    'Shared billing, individual protection',
                  ].map((f) => (
                    <div key={f} className={styles.secondaryFeatureItem}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {f}
                    </div>
                  ))}
                </div>
                <Link href="https://app.themuslimwill.com/Account/Login?plan=family" className={styles.secondaryCta}>
                  Protect Your Family →
                </Link>
                <p className={styles.secondaryMicro}>Billed per person. Minimum 2 members. Each account stays private.</p>
              </div>
            </div>

            {/* Full Package */}
            <div className={styles.secondaryCard} data-full>
              <div className={styles.secondaryCardInner}>
                <div className={styles.secondaryBadge} data-full>🎯 Full Package</div>
                <div className={styles.secondaryPriceRow}>
                  <span className={styles.secondaryPrice}>$350</span>
                  <span className={styles.secondaryPricePer}> one-time</span>
                </div>
                <div className={styles.secondarySavings}>Combined value: $594</div>
                <p className={styles.secondaryTagline}>
                  For specific situations that call for individual expert attention — complex estates, multiple assets, or those who want a dedicated professional reviewing their case from start to finish.
                </p>
                <div className={styles.secondaryFeatures}>
                  {[
                    'Everything in The Bridge',
                    '12 months of Vault access',
                    'Last Will & Testament — individual expert preparation ($149)',
                    'Power of Attorney for Personal Care ($99)',
                    'Power of Attorney for Property ($99)',
                    'Scholar Review — individual Islamic inheritance review ($49)',
                    'Admin & Legal Review ($49)',
                    'Digital Attestation — Zoom signing session with paralegal ($149)',
                  ].map((f) => (
                    <div key={f} className={styles.secondaryFeatureItem}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {f}
                    </div>
                  ))}
                </div>
                <Link href="https://app.themuslimwill.com/Account/Login?plan=full" className={styles.secondaryCtaFull}>
                  Get The Full Package →
                </Link>
                <p className={styles.secondaryMicro}>One-time payment. Includes 12 months of Vault access.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── SECTION 2: Add-Ons ── */}
      <section className={styles.addOnsSection}>
        <div className={styles.container}>
          <div className={styles.addOnsHeader}>
            <div className={styles.sectionLabel}>Add-Ons</div>
            <h2 className={styles.sectionH2}>For specific situations — not to complete The Bridge.</h2>
            <p className={styles.addOnsIntro}>
              The Bridge gives you everything most Muslim families need. These add-ons exist for specific legal, religious, or personal circumstances — not because The Bridge is missing anything.
            </p>
          </div>

          <div className={styles.addOnsTable}>
            <div className={styles.addOnsTableHead}>
              <div>Add-On</div>
              <div>Who it&apos;s for</div>
              <div className={styles.addOnsPriceHead}>Price</div>
            </div>
            {ADD_ONS.map((addon, i) => (
              <div key={i} className={styles.addOnsTableRow}>
                <div className={styles.addOnName}>{addon.name}</div>
                <div className={styles.addOnContext}>{addon.context}</div>
                <div className={styles.addOnPrice}>{addon.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 3: FAQ ── */}
      <section className={styles.faqSection}>
        <div className={styles.container}>
          <div className={styles.faqHeader}>
            <div className={styles.sectionLabel}>Pricing Questions</div>
            <h2 className={styles.sectionH2}>Frequently asked pricing questions</h2>
          </div>
          <div className={styles.faqList}>
            {PRICING_FAQ.map((item, i) => (
              <PricingFaqItem key={i} q={item.q} a={item.a} index={i} />
            ))}
          </div>
          <p className={styles.faqMoreLink}>
            More questions?{' '}
            <Link href="/about/faq" className={styles.faqLink}>See the full FAQ →</Link>
          </p>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaH2}>Start today. Update any time.</h2>
            <p className={styles.ctaTrust}>
              Free to register. Full access from $7.99/month. No hidden fees. Islamic will and private Vault included.
            </p>
            <div className={styles.ctaActions}>
              <Link href="https://app.themuslimwill.com/Account/Login" className={styles.ctaPrimary}>
                Start For $7.99/month →
              </Link>
              <Link href="/how-it-works" className={styles.ctaSecondary}>
                See How It Works →
              </Link>
            </div>
            <div className={styles.ctaLinks}>
              <Link href="/how-it-works" className={styles.ctaInternalLink}>How It Works</Link>
              <span>·</span>
              <Link href="/last-will" className={styles.ctaInternalLink}>The Will</Link>
              <span>·</span>
              <Link href="/about/faq" className={styles.ctaInternalLink}>FAQ</Link>
              <span>·</span>
              <Link href="/about/compliance" className={styles.ctaInternalLink}>Compliance</Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
