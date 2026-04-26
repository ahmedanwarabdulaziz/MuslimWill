import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { TrackedButton } from '@/components/analytics/TrackedButton';
import { Card, CardContent, CardTitle } from '@/components/ui/Card';
import { Accordion } from '@/components/ui/Accordion';
import styles from './page.module.css';

const siteUrl = 'https://themuslimwill.com';
const homepageTitle = 'Islamic Will Canada | Family Planning With Clarity | Muslim Will';
const homepageDescription =
  'Create an Islamic will in Canada with a guided legal workflow, Islamic inheritance guidance, and a clear pathway to protect your family and document your intentions.';

const homepageFaqItems = [
  {
    question: 'Is an Islamic will legally valid in Ontario?',
    answer: 'An Islamic will can be recognized under Ontario law when it is properly prepared, reviewed, signed, and witnessed according to applicable legal requirements.'
  },
  {
    question: 'How does an Islamic will work in Canada?',
    answer: 'An Islamic will in Canada must work within provincial legal rules while reflecting Islamic inheritance intentions. That means the legal structure and the inheritance structure need to be handled together.'
  },
  {
    question: 'Can I include charity in my Islamic will?',
    answer: 'Yes. A charitable bequest can be included in your will, and Muslim Will helps families think through that intention clearly within the permissible bequest framework.'
  },
  {
    question: 'How do I protect my minor children in a Muslim will?',
    answer: 'A will can help parents document guardianship preferences and related family instructions before a crisis. This is one of the most important reasons many Muslim parents begin the process.'
  },
  {
    question: 'What happens if a Muslim dies without a will in Canada?',
    answer: 'If someone dies without a will, provincial intestacy rules may determine how the estate is handled. That can leave families without clear documentation for guardianship, inheritance intentions, or charitable wishes.'
  },
  {
    question: 'Is Muslim Will a law firm?',
    answer: 'No. Muslim Will is a structured technology platform and workflow system. It is not a law firm and does not replace legal advice or religious rulings.'
  }
];

export const metadata: Metadata = {
  title: homepageTitle,
  description: homepageDescription,
  keywords: [
    'Islamic will Canada',
    'Muslim will Canada',
    'Islamic will Ontario',
    'Muslim estate planning Canada',
    'Shariah compliant will Canada',
    'Islamic inheritance will',
    'charitable bequest Islamic will',
    'guardianship Muslim will',
  ],
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: homepageTitle,
    description: homepageDescription,
    url: siteUrl,
    siteName: 'Muslim Will',
    type: 'website',
    locale: 'en_CA',
    images: [
      {
        url: `${siteUrl}/Images/hero-01.jpeg`,
        width: 1600,
        height: 900,
        alt: 'Muslim family reviewing estate planning documents at home',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: homepageTitle,
    description: homepageDescription,
    images: [`${siteUrl}/Images/hero-01.jpeg`],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const homepageSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${siteUrl}/#organization`,
      name: 'Muslim Will',
      url: siteUrl,
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/Images/logooo.png`,
      },
      description: homepageDescription,
      email: 'info@themuslimwill.com',
      telephone: '+1-877-416-WILL',
      areaServed: [
        {
          '@type': 'Country',
          name: 'Canada',
        },
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      url: siteUrl,
      name: 'Muslim Will',
      description: homepageDescription,
      publisher: {
        '@id': `${siteUrl}/#organization`,
      },
      inLanguage: 'en-CA',
    },
    {
      '@type': 'FAQPage',
      '@id': `${siteUrl}/#faq`,
      mainEntity: homepageFaqItems.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer,
        },
      })),
    },
  ],
};

export default function Home() {
  return (
    <div className={styles.main}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageSchema) }}
      />

      {/* 1. Hero Section */}
      <section className={`${styles.section} ${styles.heroSection}`}>
        <div className={`${styles.container} ${styles.heroContent}`}>
          <div className={styles.heroTextWrapper}>
             <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '0.5rem', marginBottom: '1rem' }}>
               <div className={`${styles.heroEyebrow} ${styles.fadeUp}`} style={{ marginBottom: 0, opacity: 0.85, fontSize: '0.75rem' }}>Part of the Patriva family</div>
               <div className={`${styles.heroEyebrow} ${styles.fadeUp}`} style={{ marginBottom: 0 }}>Islamic Will Planning For Muslim Families In Canada</div>
             </div>
             <h1 className={`${styles.heroH1} ${styles.fadeUp} ${styles.delay1}`}>
               Leave your family more than memories.
             </h1>
             <p className={`${styles.heroCopy} ${styles.fadeUp} ${styles.delay2}`}>
               Create your Islamic will through a guided process designed for Muslim families in Canada. Protect loved ones, document your intentions, and move forward with greater clarity and confidence.
             </p>
             <div className={`${styles.heroTrustLine} ${styles.fadeUp} ${styles.delay3}`}>
               Built for Muslim families in Canada, with Ontario as the clearest current legal workflow.
             </div>
             
             <div className={`${styles.heroActions} ${styles.fadeUp} ${styles.delay4}`} style={{ marginBottom: '0.5rem' }}>
                <TrackedButton size="lg" variant="primary" className={styles.heroPrimaryBtn} eventName="start_your_will_click" eventParams={{ location: 'home_hero' }}>Start Your Will</TrackedButton>
                <TrackedButton size="lg" variant="outline" className={styles.invertedOutline} eventName="how_it_works_click" eventParams={{ location: 'home_hero' }}>See How It Works</TrackedButton>
             </div>
             
             <div className={`${styles.fadeUp} ${styles.delay4} ${styles.heroMicrocopy}`} style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
               <span style={{ fontWeight: 600, color: 'var(--color-gold)' }}>Transparent flat-fee pricing.</span>
               <span>Zero hidden costs or hourly lawyer fees.</span>
             </div>
             
             <div className={`${styles.fadeUp} ${styles.delay5} ${styles.heroEmotionalIntro}`}>
               A clearer process is easier to begin when it is trusted, guided, and measurable.
             </div>
             
             <div className={`${styles.heroTrustPoints} ${styles.fadeUp} ${styles.delay5}`}>
               <span className={styles.heroTrustPoint}>340+ Islamic Wills Completed</span>
               <span className={styles.heroTrustPoint}>Reviewed by qualified Islamic scholars for inheritance considerations</span>
               <span className={styles.heroTrustPoint}>Ontario Lawyer Verified</span>
               <span className={styles.heroTrustPoint}>15-Minute Guided Intake</span>
             </div>
          </div>
        </div>
      </section>

      {/* 2. Trust Bar */}
      <section className={styles.trustBar}>
        <div className={styles.container}>
          <div className={styles.trustBarInner}>
            <div className={styles.trustBarItems}>
              
              <div className={styles.trustBarItem}>
                <div className={styles.trustIconWrapper}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>
                </div>
                <span>Islamic inheritance logic built into the workflow</span>
              </div>
              
              <div className={styles.trustBarItem}>
                <div className={styles.trustIconWrapper}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>
                </div>
                <span>Reviewed within a professional legal process</span>
              </div>
              
              <div className={styles.trustBarItem}>
                <div className={styles.trustIconWrapper}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <span>Canada-first pathway with Ontario as the clearest current legal anchor</span>
              </div>
              
              <div className={styles.trustBarItem}>
                <div className={styles.trustIconWrapper}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                </div>
                <span>Designed for family clarity, guardianship, and bequests</span>
              </div>

            </div>
            <div className={styles.trustBarSupport}>
              &ldquo;A will is a trust we fulfill before Allah, and a mercy we leave for our families after us.&rdquo;
            </div>
          </div>
        </div>
      </section>

      {/* 3. Why This Matters */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionH2}>For many Muslim families, preparing a will is not rejected. It is delayed.</h2>
            <p className={styles.sectionIntro}>
              Most Muslim families already want to put these decisions in writing. What often gets in the way is not intention, but knowing where to begin. Muslim Will makes the process clearer, more guided, and easier to start with confidence.
            </p>
          </div>
          
          <div className={styles.grid3}>
            <Card variant="premium" className={styles.featureCard}>
              <CardContent>
                <div className={styles.featureCardNumber}>01</div>
                <CardTitle>Protect the people who depend on you</CardTitle>
                <p>Document key decisions before they are needed, including guardianship, family responsibilities, and final wishes.</p>
              </CardContent>
            </Card>
            
            <Card variant="premium" className={styles.featureCard}>
              <CardContent>
                <div className={styles.featureCardNumber}>02</div>
                <CardTitle>Give your family greater clarity</CardTitle>
                <p>A clearer planning process helps reduce confusion, prevent avoidable tension, and document what matters with care.</p>
              </CardContent>
            </Card>

            <Card variant="premium" className={styles.featureCard}>
              <CardContent>
                <div className={styles.featureCardNumber}>03</div>
                <CardTitle>Align your planning with Islamic intention</CardTitle>
                <p>Prepare your will with a structure designed to reflect Islamic inheritance principles within the Canadian legal context.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 3.5. What's Included */}
      <section className={`${styles.section} ${styles.sectionDark}`}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <div className={styles.heroEyebrow} style={{marginBottom: '1rem'}}>All Four Documents Included</div>
            <h2 className={styles.sectionH2}>More than just a will. A complete protection package.</h2>
            <p className={`${styles.sectionIntro} ${styles.introOpacityMuted}`}>
              When you choose Muslim Will, you receive a comprehensive, 4-part estate protection package that covers your family both while you are alive and after you pass&mdash;all included in your transparent upfront price.
            </p>
            <p className={`${styles.sectionIntro} ${styles.introOpacityMuted}`} style={{ marginTop: '1rem' }}>
              One transparent flat-fee package includes your Islamic Last Will, minor guardianship directions, Power of Attorney for Property, Power of Attorney for Personal Care, qualified Islamic scholar review for inheritance considerations, Ontario legal workflow support, guided preparation, and final attestation support.
            </p>
          </div>
          
          <div className={styles.grid4}>
            <Card className={styles.darkCard}>
              <CardContent>
                <div className={styles.featureCardNumber} style={{fontSize: '1.25rem'}}>01</div>
                <CardTitle>The Islamic Last Will</CardTitle>
                <p>Distribute your wealth according to Shariah, honor charitable intentions, and legally map your final wishes.</p>
              </CardContent>
            </Card>
            
            <Card className={styles.darkCard}>
              <CardContent>
                <div className={styles.featureCardNumber} style={{fontSize: '1.25rem'}}>02</div>
                <CardTitle>Minor Guardianship</CardTitle>
                <p>Ensure your minor children are raised by the people you trust who share your Islamic values.</p>
              </CardContent>
            </Card>
            
            <Card className={styles.darkCard}>
              <CardContent>
                <div className={styles.featureCardNumber} style={{fontSize: '1.25rem'}}>03</div>
                <CardTitle>PoA for Property</CardTitle>
                <p>Designate a trusted person to manage your finances, bank accounts, and business if you become medically incapacitated.</p>
              </CardContent>
            </Card>
            
            <Card className={styles.darkCard}>
              <CardContent>
                <div className={styles.featureCardNumber} style={{fontSize: '1.25rem'}}>04</div>
                <CardTitle>PoA for Personal Care</CardTitle>
                <p>Legally appoint someone to make critical medical, healthcare, and life-support decisions on your behalf if you cannot.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 4. How It Works */}
      <section className={`${styles.section} ${styles.sectionLight}`}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionH2}>A guided pathway from family details to legal execution.</h2>
            <p className={styles.sectionIntro}>
               Muslim Will is designed to make a sensitive process easier to begin without blurring professional boundaries.
            </p>
          </div>
          
          <div className={styles.grid4}>
            <div className={styles.stepCard}>
              <div className={styles.stepNumber}>01</div>
              <CardTitle>Intake & Details</CardTitle>
              <p>Select your plan and use our secure platform to provide all your family information, guardian choices, and necessary documents.</p>
            </div>
            
            <div className={styles.stepCard}>
              <div className={styles.stepNumber}>02</div>
              <CardTitle>Dual Expert Review</CardTitle>
              <p>Your documents are rigorously reviewed by Islamic Scholars for Sharia compliance and by our Legal Team for Ontario legal validity. <strong>We keep you informed with automated email updates at every stage.</strong></p>
            </div>
            
            <div className={styles.stepCard}>
              <div className={styles.stepNumber}>03</div>
              <CardTitle>The Pre-Attestation Briefing</CardTitle>
              <p>A 1-on-1 preparation call with our follow-up team to review exactly what you need for the final signing and ensure everything goes smoothly.</p>
            </div>
            
            <div className={styles.stepCard}>
              <div className={styles.stepNumber}>04</div>
              <CardTitle>Final Attestation & Delivery</CardTitle>
              <p>Attend a guided final Zoom attestation session where the required parties complete the signing and witnessing process according to Ontario remote execution requirements. Once properly signed and witnessed, your completed package is delivered with the relevant final documents.</p>
            </div>
          </div>
          
          <div className={styles.legalNoteLayout}>
            Note: Legal validity depends on accurate information, proper review, and correct signing and witnessing.
          </div>
        </div>
      </section>

      {/* 5. Charitable Legacy Preview */}
      <section className={`${styles.section} ${styles.sectionLight} ${styles.legacySectionPadding}`}>
        <div className={styles.container}>
          <div className={styles.legacyCard}>
            <div className={styles.legacyContent}>
              <div className={`${styles.sectionHeader} ${styles.legacySectionHeader}`}>
                <h2 className={styles.sectionH2}>Legacy giving does not need to compete with family responsibility.</h2>
                <p className={`${styles.sectionIntro} ${styles.legacySectionIntro}`}>
                  A will can protect loved ones first while also making room for documented charitable intention. Muslim Will helps families think clearly about charitable bequests within the permissible bequest framework, so generosity becomes part of a structured legacy rather than an informal hope.
                </p>
              </div>
              
              <div className={styles.legacyList}>
                <div className={styles.legacyItem}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span>Family care remains central</span>
                </div>
                <div className={styles.legacyItem}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span>Charitable intention can be documented clearly</span>
                </div>
                <div className={styles.legacyItem}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span>Sadaqah jariyah becomes part of responsible planning</span>
                </div>
              </div>
              
              <div>
                 <TrackedButton href="/charitable-legacy" variant="outline" size="lg" eventName="charitable_legacy_click" eventParams={{ location: 'home_legacy' }}>Explore Charitable Legacy</TrackedButton>
              </div>
            </div>
            {/* The Image Side */}
            <div className={styles.legacyImage}></div>
          </div>
        </div>
      </section>

      {/* 6. Meet The Experts */}
      <section className={`${styles.section} ${styles.sectionCream}`}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionH2}>Built by people who understand both systems and community trust.</h2>
            <p className={styles.sectionIntro}>
              The Muslim Will story is not only about document preparation. It is also about building a pathway families can trust, and making it accessible at scale.
            </p>
          </div>
          
          <div className={styles.expertGrid}>
            <div className={styles.expertCard}>
              <div className={styles.expertImageWrapper}>
                <Image src="/Images/05.jpeg" width={300} height={300} alt="Ahmed Gohar" className={styles.expertImage} />
              </div>
              <h3 className={styles.expertName}>Ahmed Gohar</h3>
              <div className={styles.expertTitle}>Founder & CEO, Patriva / The Muslim Will</div>
              <p className={styles.expertBio}>
                Ahmed Gohar is the founder of Patriva and The Muslim Will, where he builds structured technology systems for Shariah-conscious estate planning. His work focuses on making legally grounded, professionally coordinated will planning more accessible to Muslim families across the West.
              </p>
              <Link href="/about/ahmed-gohar" className={styles.expertLink}>Read Full Bio &rarr;</Link>
            </div>
            
            <div className={styles.expertCard}>
              <div className={styles.expertImageWrapper}>
                <Image src="/Images/04.jpeg" width={300} height={300} alt="Dr. Yasser Aboutaha" className={styles.expertImage} />
              </div>
              <h3 className={styles.expertName}>Dr. Yasser Aboutaha</h3>
              <div className={styles.expertTitle}>Executive Adviser</div>
              <p className={styles.expertBio}>
                Dr. Yasser Aboutaha is Executive Adviser at Muslim Will, where he helps build trusted relationships with families, masajid, charities, and community leaders. His work brings community credibility, practical communication, and partnership depth to the Muslim Will mission across Canada.
              </p>
              <Link href="/about/dr-yasser-aboutaha" className={styles.expertLink}>Read Full Bio &rarr;</Link>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Legal and Islamic Accountability */}
      <section className={`${styles.section} ${styles.sectionDark}`}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionH2}>A platform with clear professional boundaries.</h2>
            <p className={`${styles.sectionIntro} ${styles.introOpacityMuted}`}>
              What makes Muslim Will distinctive is not a vague promise of compliance. It is the structure of the workflow itself. Each layer has a defined role, and no single layer overreaches into another.
            </p>
          </div>
          
          <div className={styles.grid3}>
            <Card className={styles.darkCard}>
              <CardContent>
                <CardTitle>The platform</CardTitle>
                <p>Muslim Will is a structured technology system that guides user input, workflow coordination, document generation, and review steps.</p>
              </CardContent>
            </Card>
            
            <Card className={styles.darkCard}>
              <CardContent>
                <CardTitle>Islamic inheritance guidance</CardTitle>
                <p>Islamic inheritance review is handled by qualified Islamic scholars who review the inheritance structure for Islamic inheritance considerations. This review supports faith-conscious planning and does not replace a personal fatwa for complex individual circumstances.</p>
              </CardContent>
            </Card>

            <Card className={styles.darkCard}>
              <CardContent>
                <CardTitle>Independent legal review</CardTitle>
                <p>Licensed legal professionals review and oversee the legal document workflow and execution requirements.</p>
              </CardContent>
            </Card>
          </div>
          
          <div className={styles.disclaimerContainer}>
             <p className={styles.disclaimerText}>Muslim Will is not a law firm and does not issue legal advice or fatwas. It provides a structured planning pathway designed to bring the right layers together responsibly.</p>
             <p className={styles.disclaimerSubtext}>The current workflow is positioned Canada-first, with Ontario as the clearest legal reference point. Future regional expansion will be handled through distinct country and state content.</p>
          </div>
        </div>
      </section>

      {/* 8. FAQ Preview */}
      <section className={`${styles.section} ${styles.sectionLight}`}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionH2}>Common questions, answered clearly.</h2>
          </div>
          
          <div className={styles.faqContainer}>
            <Accordion items={homepageFaqItems} />
          </div>
          
          <div className={styles.faqButtonContainer}>
             <TrackedButton variant="primary" size="lg" eventName="faq_click" eventParams={{ location: 'home_faq' }}>View Full FAQ</TrackedButton>
          </div>
        </div>
      </section>

      {/* 8.5 Patriva Ecosystem Bridge */}
      <section className={`${styles.section} ${styles.sectionCream}`} style={{ paddingBottom: '6rem' }}>
        <div className={styles.container}>
          
          <div style={{ background: '#ffffff', borderRadius: '32px', border: '1px solid rgba(212, 175, 55, 0.4)', boxShadow: '0 20px 40px rgba(0, 73, 38, 0.08)', padding: '5rem 3rem', position: 'relative', overflow: 'hidden' }}>
            
            {/* Background Accent */}
            <div style={{ position: 'absolute', top: 0, right: 0, width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(212, 175, 55, 0.1) 0%, rgba(255,255,255,0) 70%)', pointerEvents: 'none' }}></div>
            
            <div className={styles.sectionHeader} style={{ maxWidth: '900px', margin: '0 auto 4rem', position: 'relative', zIndex: 1 }}>
              <div className={styles.heroEyebrow} style={{marginBottom: '1.5rem', padding: '0.5rem 1rem', fontSize: '0.85rem'}}>The Patriva Vision</div>
              <h2 className={styles.sectionH2} style={{ fontSize: '2.5rem', color: 'var(--color-green)' }}>With your family at every milestone.</h2>
              <p className={styles.sectionIntro} style={{ fontSize: '1.25rem', lineHeight: '1.7', color: 'var(--color-text-main)' }}>
                Muslim Will is proud to be the founding service of <strong style={{color: 'var(--color-gold)'}}>Patriva</strong>—a comprehensive framework dedicated to supporting Muslim families securely across life&apos;s most important milestones.
              </p>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2rem', position: 'relative', zIndex: 1 }}>
              
              <div style={{ background: '#fdfbf7', borderTop: '4px solid var(--color-green)', borderRadius: '16px', padding: '2.5rem 2rem', boxShadow: '0 10px 30px rgba(0, 73, 38, 0.06)' }}>
                <div style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--color-green)', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>01. Estate Planning</div>
                <h3 style={{ fontSize: '1.75rem', color: 'var(--color-green)', marginBottom: '1rem', fontFamily: 'var(--font-heading)' }}>Muslim Will</h3>
                <p style={{ color: 'var(--color-text-main)', lineHeight: '1.6' }}>Islamic estate planning, guardianship, and charitable legacy documentation.</p>
              </div>
              
              <div style={{ background: '#ffffff', border: '1px solid var(--color-border)', borderRadius: '16px', padding: '2.5rem 2rem', opacity: 0.65 }}>
                <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--color-text-muted)', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>02. Coming Soon</div>
                <h3 style={{ fontSize: '1.75rem', color: 'var(--color-text-muted)', marginBottom: '1rem', fontFamily: 'var(--font-heading)' }}>Mizan</h3>
                <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.6' }}>Family agreements, mediation, and structured conflict resolution.</p>
              </div>
              
              <div style={{ background: '#ffffff', border: '1px solid var(--color-border)', borderRadius: '16px', padding: '2.5rem 2rem', opacity: 0.65 }}>
                <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--color-text-muted)', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>03. Coming Soon</div>
                <h3 style={{ fontSize: '1.75rem', color: 'var(--color-text-muted)', marginBottom: '1rem', fontFamily: 'var(--font-heading)' }}>Sakina</h3>
                <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.6' }}>Marriage contracts, pre-nuptial agreements, and financial clarity.</p>
              </div>
              
              <div style={{ background: '#ffffff', border: '1px solid var(--color-border)', borderRadius: '16px', padding: '2.5rem 2rem', opacity: 0.65 }}>
                <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--color-text-muted)', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>04. Coming Soon</div>
                <h3 style={{ fontSize: '1.75rem', color: 'var(--color-text-muted)', marginBottom: '1rem', fontFamily: 'var(--font-heading)' }}>Ikram</h3>
                <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.6' }}>Farewell preparation, Janazah logistics, and end-of-life directives.</p>
              </div>
              
            </div>
          </div>
        </div>
      </section>

      {/* 8.5 Emotional Bridge */}
      <section className={`${styles.section} ${styles.emotionalBridgeSection}`}>
        <div className={styles.container}>
          <div className={styles.emotionalBridgeText}>
            &ldquo;A will is not only a legal document. It is clarity for the people you love most.&rdquo;
          </div>
        </div>
      </section>

      {/* 9. Final CTA */}
      <section className={`${styles.section} ${styles.ctaSectionPadding}`}>
        <div className={styles.container}>
          <div className={styles.ctaBox}>
            <h2>Your family deserves clarity. Start your will today.</h2>
            <p className={styles.ctaText}>
              Start your Islamic will through a guided process built for Muslim families in Canada, with legal care, Islamic clarity, and clear next steps.
            </p>
            <div className={styles.ctaSupportLine}>
              Your Bridge to a clearer legacy.
            </div>
            <div className={styles.ctaActions}>
              <TrackedButton size="lg" className={styles.ctaButtonPrimary} eventName="start_your_will_click" eventParams={{ location: 'home_final_cta' }}>Start Your Will</TrackedButton>
              <TrackedButton size="lg" variant="outlineLight" className={styles.ctaButtonOutline} eventName="book_call_click" eventParams={{ location: 'home_final_cta' }}>Book a Call</TrackedButton>
            </div>
            <div style={{ marginTop: '1.25rem', fontSize: '1rem', color: '#ffffff', display: 'flex', flexDirection: 'column', gap: '0.25rem', position: 'relative', zIndex: 1 }}>
              <span style={{ fontWeight: 600, color: 'var(--color-gold)' }}>Transparent flat-fee pricing.</span>
              <span style={{ opacity: 0.9 }}>Zero hidden costs or hourly lawyer fees.</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
