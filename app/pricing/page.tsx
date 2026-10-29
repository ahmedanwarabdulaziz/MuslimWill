'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './page.module.css';

/* ── ADD-ONS TABLE DATA ── */
const ADD_ONS = [
  { name: 'Last Will & Testament', context: 'Standalone — no subscription required', price: '$149' },
  { name: 'Notarized POA — Personal Care', context: 'Draft POA included in Will + Vault; this adds notarization', price: '$99' },
  { name: 'Notarized POA — Property', context: 'Draft POA included in Will + Vault; this adds notarization', price: '$99' },
  { name: 'Personal Scholar Review', context: 'A scholar reviews your own family\'s inheritance table', price: '$99' },
  { name: 'Conformity Verification', context: 'Multiple properties, business assets, cross-border', price: '$148' },
  { name: 'Notarization / Digital Attestation', context: 'Formal legal execution under Ontario law', price: '$149' },
];

/* ── PRICING FAQ ── */
const PRICING_FAQ = [
  {
    q: 'Is Will + Vault really complete — or will I need add-ons?',
    a: 'For the vast majority of Muslim families, Will + Vault is everything you need. The add-ons exist for specific situations — a complex estate, an unusual inheritance structure, or a family that wants individual expert review. If you are unsure whether your situation calls for an add-on, start with Will + Vault and add what you need as the process progresses.',
  },
  {
    q: 'What is included in Fully Fledged (Notarized)?',
    a: 'Fully Fledged (Notarized) is $275 one-time, on top of your monthly Will + Vault subscription ($7.99/month individual, or $6.99/month per person on a family plan). It includes Personal Scholar Review, Conformity Verification, Notarization / Digital Attestation, and Notarized Powers of Attorney for both Property and Personal Care — a combined value of $594.',
  },
  {
    q: 'Are Powers of Attorney included in Will + Vault?',
    a: 'Yes. Draft Powers of Attorney for Property and Personal Care are included in Will + Vault. Notarization is available separately ($99 each) or bundled in Fully Fledged.',
  },
  {
    q: 'Is there an annual billing option?',
    a: 'Yes — annual billing is available at a discounted rate. Details available at checkout.',
  },
  {
    q: 'Can I upgrade from Will + Vault to Fully Fledged later?',
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
                <div className={styles.bridgeName}>Will + Vault</div>
                <div className={styles.bridgeSubName}>Your Islamic Will, always up to date</div>
                <div className={styles.bridgePriceRow}>
                  <span className={styles.bridgePrice}>$7.99</span>
                  <span className={styles.bridgePricePer}> / month</span>
                </div>
                <p className={styles.bridgeTagline}>
                  Everything your family needs. Your will holds your decisions; your Vault keeps the details current as appendices to it — debts, assets, documents. Update any time, with no redrafting and no extra cost.
                </p>
                <Link href="https://app.themuslimwill.com/Account/Register?plan=bridge" className={styles.bridgeCta}>
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
                    'Last Will & Testament — built on Islamic inheritance principles, Ontario-compliant',
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
                    'Always up to date — update your Vault any time, no redrafting, no extra cost',
                    'Secure executor release process with full audit trail',
                    'Draft Powers of Attorney for Property and Personal Care included. Notarization available separately ($99 each) or bundled in Fully Fledged.',
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

          {/* ── FAMILY + FULLY FLEDGED (two-column below) ── */}
          <div className={styles.secondaryCards}>

            {/* Family Package */}
            <div className={styles.secondaryCard}>
              <div className={styles.secondaryCardInner}>
                <div className={styles.secondaryBadge} data-family>👨‍👩‍👧‍👦 Family Package</div>
                <div className={styles.secondaryPriceRow}>
                  <span className={styles.secondaryPrice}>$6.99</span>
                  <span className={styles.secondaryPricePer}> / person / month</span>
                </div>
                <div className={styles.secondarySavings}>Save about 12% per person with a family plan</div>
                <p className={styles.secondaryTagline}>
                  One subscription for every member of your family. Every account private and independent.
                </p>
                <div className={styles.secondaryFeatures}>
                  {[
                    'Will + Vault for each family member',
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
                <Link href="https://app.themuslimwill.com/Account/Register?plan=family" className={styles.secondaryCta}>
                  Protect Your Family →
                </Link>
                <p className={styles.secondaryMicro}>Billed per person. Minimum 2 members. Each account stays private.</p>
              </div>
            </div>

            {/* Fully Fledged (Notarized) */}
            <div className={styles.secondaryCard} data-full>
              <div className={styles.secondaryCardInner}>
                <div className={styles.secondaryBadge} data-full>🎯 Fully Fledged (Notarized)</div>
                <div className={styles.secondaryPriceRow}>
                  <span className={styles.secondaryPrice}>$275</span>
                  <span className={styles.secondaryPricePer}> one-time + monthly</span>
                </div>
                <div className={styles.secondarySavings}>Combined value: $594</div>
                <p className={styles.secondaryTagline}>
                  For specific situations that call for individual expert attention — complex estates, multiple assets, or those who want a dedicated professional reviewing their case from start to finish.
                </p>
                <div className={styles.secondaryFeatures}>
                  {[
                    'Everything in Will + Vault, with your ongoing monthly subscription',
                    'Personal Scholar Review — a scholar reviews your own inheritance table ($99)',
                    'Conformity Verification ($148)',
                    'Notarization / Digital Attestation — Zoom signing session with paralegal ($149)',
                    'Notarized POA — Property ($99)',
                    'Notarized POA — Personal Care ($99)',
                  ].map((f) => (
                    <div key={f} className={styles.secondaryFeatureItem}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {f}
                    </div>
                  ))}
                </div>
                <Link href="https://app.themuslimwill.com/Account/Register?plan=full" className={styles.secondaryCtaFull}>
                  Get Fully Fledged →
                </Link>
                <p className={styles.secondaryMicro}>$275 one-time, plus Will + Vault at $7.99/month ($6.99/person on a family plan).</p>
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
            <h2 className={styles.sectionH2}>For specific situations — not to complete Will + Vault.</h2>
            <p className={styles.addOnsIntro}>
              Will + Vault gives you everything most Muslim families need. These add-ons exist for specific legal, religious, or personal circumstances — not because Will + Vault is missing anything.
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
              <Link href="https://app.themuslimwill.com/Account/Register" className={styles.ctaPrimary}>
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
