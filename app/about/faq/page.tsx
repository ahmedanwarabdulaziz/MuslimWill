'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './page.module.css';

/* ── FAQ DATA ── */
const FAQ_GROUPS = [
  {
    id: 'islamic-wills',
    label: 'About Islamic Wills',
    icon: '📜',
    questions: [
      {
        q: 'Is an Islamic will legally valid in Canada?',
        a: 'An Islamic will can be legally valid in Canada when it is properly prepared, signed, and witnessed in accordance with provincial requirements. The Muslim Will structures every document to meet Ontario\'s legal requirements. Legal validity depends on accurate information, correct document execution, and proper witnessing — the process is designed to support all of these steps.',
      },
      {
        q: 'How does an Islamic will work in Canada?',
        a: 'An Islamic will in Canada must work within provincial legal rules while reflecting the inheritance intentions of the person creating it. That means the legal structure and the Islamic inheritance structure — Faraid — must be addressed together, not separately. The Muslim Will is designed to do exactly that.',
      },
      {
        q: 'What is Faraid?',
        a: 'Faraid is the Islamic law of inheritance — a precise system that defines the share of the estate allocated to each category of heir based on the deceased\'s family structure. It is not optional for Muslims: distributing an estate without reference to Faraid is considered an Islamic obligation unfulfilled. The Muslim Will builds Faraid calculations into every will it prepares.',
      },
      {
        q: 'Can I include charity in my Islamic will?',
        a: 'Yes. Islamic inheritance law permits up to one third of your estate to be directed to charitable causes outside the Faraid shares. Your family\'s inheritance shares are calculated from the remaining portion. The Muslim Will guides you through this clearly and builds the charitable bequest into your will document.',
      },
      {
        q: 'What happens if a Muslim dies without a will in Canada?',
        a: 'If someone dies without a will, provincial intestacy rules determine how the estate is handled — and those rules do not reflect Islamic inheritance principles. Families may be left without clear documentation for guardianship, inheritance intentions, or charitable wishes, and the estate may be distributed in ways the deceased never intended.',
      },
    ],
  },
  {
    id: 'platform',
    label: 'About The Muslim Will Platform',
    icon: '🖥️',
    questions: [
      {
        q: 'Is Muslim Will a law firm?',
        a: 'No. The Muslim Will is a structured technology platform and workflow system. It is not a law firm and does not provide legal advice. Legal document review and execution oversight is handled by licensed legal professionals within our workflow — but this is not independent legal advice. Clients with complex legal situations are encouraged to seek independent counsel.',
      },
      {
        q: 'Does Muslim Will issue fatwas?',
        a: 'No. Islamic inheritance review is handled by qualified scholars within our network — but this is a structured review of inheritance calculations, not a personal fatwa. For complex individual religious questions, we encourage clients to consult a scholar of their own choosing in addition to our review.',
      },
      {
        q: 'Does this only work in Ontario?',
        a: 'The Muslim Will is positioned Canada-first, with Ontario as the clearest current legal framework. Clients in other provinces should discuss their specific provincial requirements with a qualified legal professional. We do not make broad claims that go beyond what we can currently support.',
      },
      {
        q: 'Can I start and finish later?',
        a: 'Yes. Your application is saved as you go. You can return to it at any time, make changes, and continue from where you left off. Your will can also be updated any time your circumstances change — at no extra cost within your subscription.',
      },
      {
        q: 'What is The Bridge?',
        a: 'The Bridge is The Muslim Will\'s core subscription product — a complete Islamic will and a private secure Vault, together, from $5.99/month. The will covers Faraid inheritance, guardianship, charitable bequests, and executor appointment. The Vault stores your private records, obligations, estate inventory, sealed disclosures, and personal messages — released to the right people at the right moment.',
      },
    ],
  },
  {
    id: 'pricing',
    label: 'About Pricing',
    icon: '💳',
    questions: [
      {
        q: 'How much does an Islamic will cost?',
        a: 'The Bridge — a complete Islamic will and private Vault — is available from $5.99/month. The Last Will & Testament document is also available as a standalone for $149. The Full Package, which includes the will, both Powers of Attorney, scholar review, admin review, and digital attestation, is available for $350 — a combined value of $594.',
      },
      {
        q: 'What is the difference between The Bridge and the Full Package?',
        a: 'The Bridge ($5.99/month) gives you a complete Islamic will and private Vault — everything most Muslim families need, with unlimited updates. The Full Package ($350 one-time) adds individual expert review layers — a qualified Islamic scholar reviewing your specific case, an admin and legal review, and digital attestation through a Zoom session with a paralegal. It is the right choice for complex estates or those who want individual expert attention on their case.',
      },
      {
        q: 'Is there a family package?',
        a: 'Yes. The Family Package offers The Bridge at a reduced per-person rate for families who want to plan together — husband, wife, and adult children — while keeping each account fully private and independent.',
      },
    ],
  },
  {
    id: 'vault',
    label: 'About the Vault',
    icon: '🔐',
    questions: [
      {
        q: 'What is the Muslim Will Vault?',
        a: 'The Vault is a private, secure repository where you store everything your family and executor will need — your obligations register, estate inventory, sealed disclosures, and personal messages. It is held privately while you are alive and released to the right people after your passing through a verified release process.',
      },
      {
        q: 'Who can access my Vault?',
        a: 'Only you can access your Vault while you are alive. After your passing is verified, your executor is granted access through our release process. Each item in your Vault can be assigned to a specific recipient — ensuring the right people receive only what you intended for them.',
      },
      {
        q: 'What happens to my Vault if I cancel my subscription?',
        a: 'This is an important question we will address clearly in our terms and conditions before launch. Our commitment is that your estate documents and Vault contents are never deleted without a clear, documented process and adequate notice.',
      },
    ],
  },
  {
    id: 'professionals',
    label: 'For Professionals & Organisations',
    icon: '🤝',
    questions: [
      {
        q: 'Can charities partner with The Muslim Will?',
        a: 'Yes. We offer Charity Partnership, Sponsored Seats, and Planned Giving programmes for Islamic charities and nonprofits. See the Community & Giving section for more detail, or request a demo to speak with our partnerships team.',
      },
      {
        q: 'Can lawyers refer clients to Muslim Will?',
        a: 'Yes. We have a structured referral pathway for estate and family lawyers whose Muslim clients need Islamic will preparation. The Muslim Will handles the Islamic document — your client relationship stays with you. Contact us to learn more.',
      },
      {
        q: 'Can scholars join the review network?',
        a: 'Yes. We are always looking for qualified scholars with expertise in Fiqh al-Mawarith. See our For Scholars page for more detail.',
      },
    ],
  },
];

/* ── FAQ JSON-LD for AEO/AI search ── */
const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_GROUPS.flatMap((g) =>
    g.questions.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    }))
  ),
};

/* ── Accordion Item ── */
function AccordionItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`${styles.accordionItem} ${open ? styles.accordionItemOpen : ''}`}>
      <button
        className={styles.accordionButton}
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        id={`faq-q-${index}`}
      >
        <span className={styles.accordionQ}>{q}</span>
        <span className={`${styles.accordionChevron} ${open ? styles.chevronOpen : ''}`}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </span>
      </button>
      <div
        className={styles.accordionBody}
        style={{ maxHeight: open ? '600px' : '0px' }}
        aria-hidden={!open}
      >
        <p className={styles.accordionA}>{a}</p>
      </div>
    </div>
  );
}

/* ── FAQ Group ── */
function FaqGroup({ group, activeGroup, onSelect }: {
  group: typeof FAQ_GROUPS[0];
  activeGroup: string;
  onSelect: (id: string) => void;
}) {
  const isActive = activeGroup === group.id;
  return (
    <div className={`${styles.faqGroup} ${isActive ? styles.faqGroupActive : ''}`}>
      <button
        className={styles.faqGroupHeader}
        onClick={() => onSelect(isActive ? '' : group.id)}
        aria-expanded={isActive}
      >
        <div className={styles.faqGroupHeaderLeft}>
          <span className={styles.faqGroupIcon}>{group.icon}</span>
          <span className={styles.faqGroupLabel}>{group.label}</span>
          <span className={styles.faqGroupCount}>{group.questions.length}</span>
        </div>
        <span className={`${styles.faqGroupChevron} ${isActive ? styles.chevronOpen : ''}`}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </span>
      </button>

      <div
        className={styles.faqGroupBody}
        style={{ maxHeight: isActive ? '3000px' : '0px' }}
        aria-hidden={!isActive}
      >
        <div className={styles.faqGroupItems}>
          {group.questions.map((item, i) => (
            <AccordionItem
              key={i}
              q={item.q}
              a={item.a}
              index={parseInt(group.id.slice(0, 2), 36) * 10 + i}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── PAGE ── */
export default function FAQPage() {
  const [activeGroup, setActiveGroup] = useState('islamic-wills');

  const totalQuestions = FAQ_GROUPS.reduce((sum, g) => sum + g.questions.length, 0);

  return (
    <>
      {/* JSON-LD for AEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className={styles.main}>

        {/* ── HERO ── */}
        <section className={styles.heroSection}>
          <div className={styles.heroOverlay} />
          <div className={styles.container}>
            <div className={styles.heroContent}>
              <div className={styles.heroEyebrow}>Trust &amp; Transparency › FAQ</div>
              <h1 className={styles.heroH1}>Common questions, answered clearly.</h1>
              <p className={styles.heroSub}>
                Whether you are a Muslim family preparing your first will, a professional considering a referral, or an organisation exploring a partnership — these are the questions we hear most. We have answered them as clearly as we can.
              </p>
              <div className={styles.heroMeta}>
                <span className={styles.heroMetaItem}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
                  </svg>
                  {totalQuestions} questions answered
                </span>
                <span className={styles.heroMetaItem}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
                  </svg>
                  {FAQ_GROUPS.length} topic groups
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ── MAIN FAQ ── */}
        <section className={styles.faqSection}>
          <div className={styles.faqContainer}>

            {/* Sidebar nav */}
            <nav className={styles.faqNav} aria-label="FAQ categories">
              <div className={styles.faqNavLabel}>Jump to section</div>
              {FAQ_GROUPS.map((group) => (
                <button
                  key={group.id}
                  className={`${styles.faqNavItem} ${activeGroup === group.id ? styles.faqNavItemActive : ''}`}
                  onClick={() => setActiveGroup(group.id)}
                >
                  <span className={styles.faqNavIcon}>{group.icon}</span>
                  <span className={styles.faqNavText}>{group.label}</span>
                  <span className={styles.faqNavCount}>{group.questions.length}</span>
                </button>
              ))}

              <div className={styles.faqNavDivider} />

              <div className={styles.faqNavCard}>
                <div className={styles.faqNavCardTitle}>Can&apos;t find your answer?</div>
                <div className={styles.faqNavCardDesc}>Our team responds to every question personally.</div>
                <Link href="/contact" className={styles.faqNavCardLink}>Contact us →</Link>
              </div>
            </nav>

            {/* Accordion groups */}
            <div className={styles.faqContent}>
              {FAQ_GROUPS.map((group) => (
                <FaqGroup
                  key={group.id}
                  group={group}
                  activeGroup={activeGroup}
                  onSelect={setActiveGroup}
                />
              ))}
            </div>

          </div>
        </section>

        {/* ── RELATED LINKS ── */}
        <section className={styles.linksSection}>
          <div className={styles.container}>
            <div className={styles.linksGrid}>
              <Link href="/about/compliance" className={styles.linkCard}>
                <div className={styles.linkCardIcon}>🛡️</div>
                <div className={styles.linkCardTitle}>Compliance Framework</div>
                <div className={styles.linkCardDesc}>Our scope, professional boundaries, and what we are and are not →</div>
              </Link>
              <Link href="/pricing" className={styles.linkCard}>
                <div className={styles.linkCardIcon}>💳</div>
                <div className={styles.linkCardTitle}>Pricing</div>
                <div className={styles.linkCardDesc}>The Bridge, Full Package, and Family Package — all options →</div>
              </Link>
              <Link href="/how-it-works" className={styles.linkCard}>
                <div className={styles.linkCardIcon}>🔄</div>
                <div className={styles.linkCardTitle}>How It Works</div>
                <div className={styles.linkCardDesc}>The step-by-step process from application to completed will →</div>
              </Link>
              <Link href="/about/our-scholars" className={styles.linkCard}>
                <div className={styles.linkCardIcon}>📜</div>
                <div className={styles.linkCardTitle}>Our Scholars</div>
                <div className={styles.linkCardDesc}>The qualified Islamic scholars who review every application →</div>
              </Link>
            </div>
          </div>
        </section>

        {/* ── FINAL CTA ── */}
        <section className={styles.ctaSection}>
          <div className={styles.container}>
            <div className={styles.ctaContent}>
              <h2 className={styles.ctaH2}>Ready to start?</h2>
              <p className={styles.ctaSub}>Can&apos;t find your answer here? Our team responds to every question personally.</p>
              <div className={styles.ctaActions}>
                <Link href="/apply" className={styles.ctaPrimary}>
                  Start My Application →
                </Link>
                <Link href="/contact" className={styles.ctaSecondary}>
                  Contact Us →
                </Link>
              </div>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
