'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './page.module.css';

/* ── Email subscribe state component ── */
function BlogSubscribe() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    await new Promise((r) => setTimeout(r, 800));
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className={styles.subscribeSuccess}>
        <span className={styles.subscribeSuccessIcon}>✓</span>
        You&apos;re on the list — we&apos;ll notify you when articles are published.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={styles.subscribeForm}>
      <input
        id="blog-subscribe-email"
        type="email"
        required
        placeholder="Your email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className={styles.subscribeInput}
        aria-label="Subscribe for blog updates"
      />
      <button type="submit" className={styles.subscribeBtn}>Notify me →</button>
    </form>
  );
}

/* ── HELP CATEGORIES ── */
const HELP_CATEGORIES = [
  {
    icon: '🚀',
    title: 'Getting Started',
    desc: 'New to The Muslim Will? Start here — what to expect, what you will need, and how the process works.',
    href: '/help/getting-started',
    count: 6,
  },
  {
    icon: '⚖️',
    title: 'Islamic Inheritance & Faraid',
    desc: 'Understanding how Islamic inheritance law works, what Faraid means for your family, and how your shares are calculated.',
    href: '/help/faraid',
    count: 8,
  },
  {
    icon: '📋',
    title: 'Your Will',
    desc: 'Questions about guardianship, charitable bequests, executor roles, and how your will document is structured.',
    href: '/help/your-will',
    count: 7,
  },
  {
    icon: '🔐',
    title: 'Your Vault',
    desc: 'How to use your Obligations Register, Estate Inventory, Sealed Disclosures, and Final Words — and how the release process works.',
    href: '/help/your-vault',
    count: 5,
  },
  {
    icon: '🛡️',
    title: 'Legal & Compliance',
    desc: 'Understanding Ontario legal requirements, what digital attestation involves, and what legal validity depends on.',
    href: '/help/legal-compliance',
    count: 6,
  },
  {
    icon: '💳',
    title: 'Pricing & Account',
    desc: 'Questions about The Bridge, the Full Package, add-ons, billing, and your account settings.',
    href: '/help/pricing-account',
    count: 5,
  },
];

/* ── FAQ PREVIEW (top 4) ── */
const FAQ_PREVIEW = [
  {
    q: 'Is an Islamic will legally valid in Canada?',
    a: 'An Islamic will can be legally valid in Canada when it is properly prepared, signed, and witnessed in accordance with provincial requirements. The Muslim Will structures every document to meet Ontario\'s legal requirements.',
  },
  {
    q: 'What is Faraid?',
    a: 'Faraid is the Islamic law of inheritance — a precise system that defines the share of the estate allocated to each category of heir based on the deceased\'s family structure. The Muslim Will builds Faraid calculations into every will it prepares.',
  },
  {
    q: 'Is The Bridge really complete — or will I need add-ons?',
    a: 'For the vast majority of Muslim families, The Bridge is everything you need. The add-ons exist for specific situations — a complex estate, an unusual inheritance structure, or a family that wants individual expert review.',
  },
  {
    q: 'Who can access my Vault?',
    a: 'Only you can access your Vault while you are alive. After your passing is verified, your executor is granted access through our release process. Each item in your Vault can be assigned to a specific recipient.',
  },
];

/* ── BLOG CATEGORIES (inactive at launch) ── */
const BLOG_CATS = [
  'All',
  'Islamic Inheritance',
  'Estate Planning Basics',
  'Charitable Legacy',
  'The Vault',
  'For Professionals',
  'Community & Giving',
];

/* ── FAQ accordion item ── */
function FaqPreviewItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`${styles.faqItem} ${open ? styles.faqItemOpen : ''}`}>
      <button
        className={styles.faqBtn}
        onClick={() => setOpen((p) => !p)}
        aria-expanded={open}
        id={`help-faq-${index}`}
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

export default function HelpPage() {
  return (
    <div className={styles.main}>

      {/* ── HERO ── */}
      <section className={styles.heroSection}>
        <div className={styles.heroOverlay} />
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.heroEyebrow}>Individuals &amp; Families › Help Centre &amp; Blog</div>
            <h1 className={styles.heroH1}>Answers, guides, and resources — whatever stage you are at.</h1>
            <p className={styles.heroSub}>
              Whether you are thinking about starting, working through your application, or looking to understand Islamic estate planning more deeply — this is where to find what you need.
            </p>

            {/* Search bar placeholder */}
            <div className={styles.searchBar}>
              <svg className={styles.searchIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
              </svg>
              <input
                type="search"
                placeholder="Search guides and articles…"
                className={styles.searchInput}
                aria-label="Search help articles"
                id="help-search"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 1: Help Categories ── */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionLabel}>Help Topics</div>
            <h2 className={styles.sectionH2}>Get help with your application</h2>
          </div>

          {/* Launch note */}
          <div className={styles.launchNote}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
            </svg>
            <span>
              We are building out our guide library. In the meantime, our team answers every question personally —{' '}
              <Link href="/about/contact" className={styles.launchNoteLink}>reach out via the Contact page</Link>
              {' '}and we will get back to you within one business day.
            </span>
          </div>

          <div className={styles.categoriesGrid}>
            {HELP_CATEGORIES.map((cat) => (
              <div key={cat.title} className={`${styles.categoryCard} ${styles.categoryCardDisabled}`}>
                <div className={styles.categoryCardTop}>
                  <div className={styles.categoryIcon}>{cat.icon}</div>
                  <div className={styles.categoryComingSoon}>Coming soon</div>
                </div>
                <div className={styles.categoryTitle}>{cat.title}</div>
                <div className={styles.categoryDesc}>{cat.desc}</div>
                <div className={styles.categoryLinkDisabled}>
                  Coming soon
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 2: FAQ Preview ── */}
      <section className={styles.faqSection}>
        <div className={styles.container}>
          <div className={styles.faqLayout}>
            <div className={styles.faqLeft}>
              <div className={styles.sectionLabel}>Quick Answers</div>
              <h2 className={styles.sectionH2}>The most common questions, answered directly.</h2>
              <p className={styles.faqIntro}>
                These are the questions we hear most from families before they start. If your question isn&apos;t here, the full FAQ has more detail.
              </p>
              <Link href="/about/faq" className={styles.faqFullLink}>
                See the full FAQ →
              </Link>
            </div>
            <div className={styles.faqRight}>
              <div className={styles.faqList}>
                {FAQ_PREVIEW.map((item, i) => (
                  <FaqPreviewItem key={i} q={item.q} a={item.a} index={i} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: Blog & Guides ── */}
      <section className={styles.blogSection}>
        <div className={styles.container}>
          <div className={styles.blogHeader}>
            <div className={styles.sectionLabel}>Blog &amp; Guides</div>
            <h2 className={styles.sectionH2}>Understand Islamic estate planning more deeply</h2>
            <p className={styles.blogIntro}>
              Articles, guides, and resources for Muslim families in Canada — on Islamic inheritance law, estate planning, charitable giving, and protecting the people you love.
            </p>
          </div>

          {/* Category filter — greyed out / inactive at launch */}
          <div className={styles.blogFiltersInactive} role="group" aria-label="Blog categories — coming soon" aria-disabled="true">
            {BLOG_CATS.map((cat) => (
              <span key={cat} className={styles.blogFilterBtnInactive}>{cat}</span>
            ))}
          </div>

          {/* Coming soon state */}
          <div className={styles.blogComingSoon}>
            <div className={styles.blogComingSoonIcon}>✏️</div>
            <div className={styles.blogComingSoonTitle}>Articles coming soon</div>
            <div className={styles.blogComingSoonDesc}>
              We are publishing guides regularly — subscribe to be notified when new articles are live.
            </div>
            <BlogSubscribe />
          </div>
        </div>
      </section>

      {/* ── SECTION 4: Still Need Help? ── */}
      <section className={styles.stillNeedSection}>
        <div className={styles.stillNeedOverlay} />
        <div className={styles.container}>
          <div className={styles.stillNeedContent}>
            <div className={styles.stillNeedIcon}>💬</div>
            <h2 className={styles.stillNeedH2}>Speak to our team</h2>
            <p className={styles.stillNeedDesc}>
              Our team responds to every question personally. If you cannot find what you are looking for here, reach out — we will get back to you within one business day.
            </p>
            <Link href="/about/contact" className={styles.stillNeedCta}>
              Contact Us →
            </Link>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaH2}>Ready to protect your family?</h2>
            <div className={styles.ctaActions}>
              <Link href="/start" className={styles.ctaPrimary}>
                Start My Application →
              </Link>
              <Link href="/pricing" className={styles.ctaSecondary}>
                See Pricing →
              </Link>
            </div>
            <div className={styles.ctaLinks}>
              <Link href="/about/faq" className={styles.ctaLink}>FAQ</Link>
              <span>·</span>
              <Link href="/how-it-works" className={styles.ctaLink}>How It Works</Link>
              <span>·</span>
              <Link href="/about/contact" className={styles.ctaLink}>Contact Us</Link>
              <span>·</span>
              <Link href="/about/compliance" className={styles.ctaLink}>Compliance</Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
