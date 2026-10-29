import type { Metadata } from 'next';
import { TrustBar } from '@/components/ui/TrustBar';
import Link from 'next/link';
import { TrackedButton } from '@/components/analytics/TrackedButton';
import { EventsHomeSection } from '@/components/home/EventsHomeSection';
import { PiReceiptLight, PiUsersThreeLight, PiShieldCheckLight, PiHandHeartLight, PiQuotesLight, PiScrollLight, PiVaultLight } from 'react-icons/pi';
import styles from './page.module.css';

const siteUrl = 'https://themuslimwill.com';
const calculatorUrl = 'https://app.themuslimwill.com/calculator';
const homepageTitle = 'Islamic Will in Canada | See How Ontario Law Differs From Islamic Inheritance | Muslim Will';
const homepageShareTitle = 'Canadian law has a plan for your estate. It isn’t the Islamic one. | Muslim Will';
const homepageDescription = 'Ontario’s default rules don’t follow Islamic inheritance law. See the difference for your family, free in 3 minutes. Your Islamic will, always up to date through your Vault.';

export const metadata: Metadata = {
  title: homepageTitle,
  description: homepageDescription,
  alternates: { canonical: siteUrl },
  openGraph: {
    title: homepageShareTitle,
    description: homepageDescription,
    url: 'https://www.themuslimwill.com',
    siteName: 'Muslim Will',
    locale: 'en_CA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: homepageShareTitle,
    description: homepageDescription,
  },
};

export const revalidate = 60;

export default function Home() {
  return (
    <div className={styles.main}>
      {/* 1. Hero */}
      <section className={`${styles.section} ${styles.heroSection}`}>
        <div className={`${styles.container} ${styles.heroContent}`}>
          <div className={styles.heroTextWrapper}>
             <div className={`${styles.heroEyebrow} ${styles.fadeUp} ${styles.delay1}`}>Islamic wills for Muslim families in Canada</div>
             <h1 className={`${styles.heroH1} ${styles.fadeUp} ${styles.delay1}`}>
               Canadian law has a plan for your estate.{' '}
               <span className={styles.heroH1Accent}>It isn&apos;t the Islamic one.</span>
             </h1>
             <p className={`${styles.heroTrustLine} ${styles.fadeUp} ${styles.delay2}`}>
               Free to start. Plans from $7.99/month, or $6.99/person on a family plan.
             </p>
             <p className={`${styles.heroCopy} ${styles.fadeUp} ${styles.delay2}`}>
               If you pass away without an Islamic will, Ontario&apos;s default rules decide who inherits, and they don&apos;t follow Islamic inheritance law. Your will can make both work together.
             </p>

             <div className={`${styles.heroActions} ${styles.fadeUp} ${styles.delay4}`} style={{ marginTop: '2.5rem' }}>
                <TrackedButton href={calculatorUrl} size="lg" variant="secondary" className={`${styles.heroPrimaryBtn} ${styles.heroCtaBtn}`} eventName="calculator_click" eventParams={{ location: 'home_hero' }}>Check the difference for your family</TrackedButton>
                <TrackedButton href="/how-it-works" size="lg" variant="outline" className={`${styles.invertedOutline} ${styles.heroCtaBtn}`} eventName="how_it_works_click" eventParams={{ location: 'home_hero' }}>How it works</TrackedButton>
             </div>

             <div className={`${styles.fadeUp} ${styles.delay5} ${styles.heroMicrocopy}`}>
               Free · about 3 minutes · no names or assets needed
             </div>
          </div>
        </div>
      </section>

      {/* Trust anchors */}
      <TrustBar items={['Built with Islamic scholars', 'Prepared for Ontario legal requirements', 'Islamic shares calculated for your family', 'Always up to date through your Vault']} />

      {/* 2. The gap — one worked example */}
      <section className={`${styles.section} ${styles.sectionCream}`}>
        <div className={styles.container}>
          <div className={styles.sectionHeader} style={{ maxWidth: '820px' }}>
            <h2 className={styles.sectionH2} style={{ color: 'var(--color-navy)' }}>Same family. Two very different outcomes.</h2>
            <p className={styles.sectionIntro}>
              A husband leaves a $600,000 estate to his wife, two sons, one daughter and both of his parents. Islamic inheritance applies only if a valid Islamic will directs the estate that way. Without one, Ontario&apos;s default rules follow a completely different logic.
            </p>
          </div>

          <div className={styles.compareGrid}>
            <div className={styles.compareCard}>
              <div className={styles.compareLabel}>Without an Islamic will</div>
              <h3 className={styles.compareTitle}>Ontario&apos;s default rules</h3>
              <ul className={styles.compareList}>
                <li><span>Wife</span><strong>$433,333</strong></li>
                <li><span>Son <em>× 2</em></span><strong>$55,556 <small>each</small></strong></li>
                <li><span>Daughter</span><strong>$55,556</strong></li>
                <li className={styles.compareGapRow}><span>Father</span><strong>$0</strong></li>
                <li className={styles.compareGapRow}><span>Mother</span><strong>$0</strong></li>
              </ul>
              <p className={styles.compareNote}>The wife takes the first $350,000 plus a third of the rest. The children share the remaining two thirds equally. Parents receive nothing.</p>
            </div>

            <div className={`${styles.compareCard} ${styles.compareCardIslamic}`}>
              <div className={styles.compareLabel}>With an Islamic will</div>
              <h3 className={styles.compareTitle}>Islamic inheritance</h3>
              <ul className={styles.compareList}>
                <li><span>Wife</span><strong>$75,000</strong></li>
                <li><span>Son <em>× 2</em></span><strong>$130,000 <small>each</small></strong></li>
                <li><span>Daughter</span><strong>$65,000</strong></li>
                <li className={styles.compareGapRow}><span>Father</span><strong>$100,000</strong></li>
                <li className={styles.compareGapRow}><span>Mother</span><strong>$100,000</strong></li>
              </ul>
              <p className={styles.compareNote}>Shares set by the Qur&apos;an, after debts are settled and any bequest of up to one third is paid.</p>
            </div>
          </div>

          <div className={styles.compareGap}>
            <div className={styles.compareGapLabel}>Biggest gap for this family</div>
            <p>
              <strong>His parents: $200,000 under Islamic inheritance, $0 under Ontario&apos;s default rules.</strong> A third of the estate goes to a completely different place, for the exact same family.
            </p>
          </div>

          <p className={styles.compareFootnote}>
            Illustrative example: $600,000 estate, no debts or bequests, death on or after March 1, 2021 (Ontario spousal preferential share of $350,000). Every family is different.
          </p>

          <div className={styles.compareVault}>
            <h3>The part a will alone doesn&apos;t solve</h3>
            <p>
              Even with a will, your executor still has to find and list everything you own before probate. If an asset turns up after probate is granted, Ontario requires an amended estate filing and possibly more Estate Administration Tax, and if it becomes contested, legal costs to redo the accounting can run from a few thousand dollars to well over ten thousand. A living, always current record of what you own, kept in your Vault instead of written once and left to go stale, closes that gap.
            </p>
            <span>Based on published Ontario Estate Administration Tax rules and typical estate legal fees. Not a quote for any specific estate.</span>
          </div>

          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <TrackedButton href={calculatorUrl} size="lg" className={styles.ctaButtonGold} eventName="calculator_click" eventParams={{ location: 'home_compare' }}>See your own family&apos;s numbers</TrackedButton>
          </div>
        </div>
      </section>

      {/* 3. Both can work together */}
      <section className={`${styles.section} ${styles.problemSection}`}>
        <div className={styles.container}>
          <div className={styles.problemLayout}>
            <div className={styles.problemLeft}>
              <h2>Islam and Canadian law can <span>work together.</span></h2>
              <p>A properly prepared Islamic will is recognized under Ontario law when it is signed and witnessed correctly. It lets you decide, in a way the courts will follow:</p>
            </div>

            <div className={styles.problemRight}>
              <div className={styles.problemGrid}>
                 <div className={styles.problemCardPremium}>
                    <div className={styles.problemCardHeader}>
                       <div className={styles.problemIconWrapper}>
                          <PiUsersThreeLight size={28} />
                       </div>
                       <h3>Islamic inheritance shares</h3>
                    </div>
                    <p>Your estate divided according to the Qur&apos;anic shares for your family.</p>
                 </div>
                 <div className={styles.problemCardPremium}>
                    <div className={styles.problemCardHeader}>
                       <div className={styles.problemIconWrapper}>
                          <PiReceiptLight size={28} />
                       </div>
                       <h3>Debts settled first</h3>
                    </div>
                    <p>What you owe is recorded and paid before anything is distributed.</p>
                 </div>
                 <div className={styles.problemCardPremium}>
                    <div className={styles.problemCardHeader}>
                       <div className={styles.problemIconWrapper}>
                          <PiShieldCheckLight size={28} />
                       </div>
                       <h3>Guardianship</h3>
                    </div>
                    <p>You name who raises your minor children, so the decision is not left to a court.</p>
                 </div>
                 <div className={styles.problemCardPremium}>
                    <div className={styles.problemCardHeader}>
                       <div className={styles.problemIconWrapper}>
                          <PiHandHeartLight size={28} />
                       </div>
                       <h3>Sadaqah Jariyah</h3>
                    </div>
                    <p>A charitable bequest of up to one third, continuing your good deeds after you.</p>
                 </div>
              </div>
            </div>
          </div>

          <div className={styles.hadithPremiumBlock}>
             <PiQuotesLight className={styles.hadithQuoteMarkIcon} />
             <p className={styles.hadithTextPremium}>
               &ldquo;It is not permissible for any Muslim who has something to bequeath to sleep two nights without having his last will and testament written and kept ready with him.&rdquo;
             </p>
             <div className={styles.hadithDivider}></div>
             <span className={styles.hadithSourcePremium}>The Prophet ﷺ — Sahih al-Bukhari, Sahih Muslim</span>
          </div>

          <div className={styles.transitionContainer}>
             <p className={styles.transitionLinePremium}>A will is a trust and a mercy.</p>
             <div className={styles.transitionHighlightPremium}>A trust we fulfill before Allah, and a mercy we leave for our families after us.</div>
          </div>
        </div>
      </section>

      {/* 4. Will + Vault — always up to date */}
      <section id="included" className={`${styles.section} ${styles.sectionNavyGradient}`}>
        <div className={styles.container}>
          <div className={styles.sectionHeader} style={{ maxWidth: '820px', color: 'var(--color-surface)' }}>
            <div className={styles.heroEyebrow} style={{ background: 'rgba(212, 175, 55, 0.15)', color: 'var(--color-gold)' }}>Will + Vault</div>
            <h2 className={styles.sectionH2} style={{ color: 'var(--color-surface)', fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '1.5rem' }}>Your Islamic Will, always up to date.</h2>
            <p className={styles.sectionIntro} style={{ color: 'rgba(255,255,255,0.85)' }}>
              Most wills are out of date within a few years. Yours refers to appendices kept in your private Vault: your debts, assets and documents. Update them anytime, with no redrafting and no extra cost.
            </p>
          </div>

          <div className={styles.bridgeColumnsPremium}>
            <div className={styles.bridgeCardPremium}>
              <div className={styles.bridgeCardHeader}>
                <div className={styles.bridgeIconPremium}>
                  <PiScrollLight size={36} color="var(--color-gold)" />
                </div>
                <h3 className={styles.bridgeCardTitle}>The Will: your decisions</h3>
              </div>
              <ul className={styles.checkListPremium}>
                <li><span>Islamic inheritance shares calculated for your family</span></li>
                <li><span>Executor and guardians for minor children</span></li>
                <li><span>Charitable bequest of up to one third</span></li>
                <li><span>Prepared for Ontario signing and witnessing</span></li>
              </ul>
            </div>

            <div className={styles.bridgeCardPremium}>
              <div className={styles.bridgeCardHeader}>
                <div className={styles.bridgeIconPremium}>
                  <PiVaultLight size={36} color="var(--color-gold)" />
                </div>
                <h3 className={styles.bridgeCardTitle}>The Vault: the details that change</h3>
              </div>
              <ul className={styles.checkListPremium}>
                <li><span>Debts and money owed to you, kept current</span></li>
                <li><span>Accounts, property and where to find them</span></li>
                <li><span>Important documents in one secure place</span></li>
                <li><span>Released only after official verification</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5. What the Vault holds */}
      <section className={`${styles.section} ${styles.sectionCream}`}>
        <div className={styles.container}>
          <div className={styles.sectionHeader} style={{ maxWidth: '900px' }}>
            <h2 className={styles.sectionH2} style={{ color: 'var(--color-navy)' }}>Everything your family will need <br/><span style={{ color: 'var(--color-gold)' }}>Stored privately. Released at the right moment.</span></h2>
          </div>

          <div className={styles.grid4}>
            <div className={styles.branchCardPremium}>
              <div className={styles.branchHeaderContainer}>
                <div className={styles.branchIconWrapper}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                </div>
                <div className={styles.branchNumberStylish}>01</div>
              </div>
              <h4>My Debts</h4>
              <p>Record who you owe and how much. Your executor receives it with the documents attached, so every debt is settled and your account with Allah is clear.</p>
            </div>

            <div className={styles.branchCardPremium}>
              <div className={styles.branchHeaderContainer}>
                <div className={styles.branchIconWrapper}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>
                </div>
                <div className={styles.branchNumberStylish}>02</div>
              </div>
              <h4>My Assets</h4>
              <p>Bank accounts, property, safety deposit boxes, business records, physical keys. Your family knows where everything is.</p>
            </div>

            <div className={styles.branchCardPremium}>
              <div className={styles.branchHeaderContainer}>
                <div className={styles.branchIconWrapper}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
                </div>
                <div className={styles.branchNumberStylish}>03</div>
              </div>
              <h4>My Documents</h4>
              <p>Insurance, ID, property papers, contracts. One secure place, released to the right people at the right time.</p>
            </div>

            <div className={styles.branchCardPremium}>
              <div className={styles.branchHeaderContainer}>
                <div className={styles.branchIconWrapper}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </div>
                <div className={styles.branchNumberStylish}>04</div>
              </div>
              <h4>My Messages</h4>
              <p>A letter, a voice note, or a video for the people who matter most. Delivered only when the time comes.</p>
            </div>
          </div>

          <div className={styles.emotionalClosingPremium}>
            &ldquo;Your will says who receives what. Your Vault tells them everything else.&rdquo;
          </div>
        </div>
      </section>

      {/* 6. Incapacity */}
      <section className={`${styles.section} ${styles.poaSectionPremium}`}>
        <div className={styles.container}>
           <div className={styles.poaBoxPremium}>
             <div className={styles.poaIcon}>
               <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
             </div>
             <h2 className={styles.sectionH2}>And if you can&apos;t speak for yourself?</h2>
             <div className={styles.poaContentGrid}>
               <div className={styles.poaTextColumn}>
                 <p className={styles.poaLeadText}>A serious accident or a medical emergency. If you could not communicate, would someone know what you want?</p>
                 <p>Who makes medical decisions for you? Who manages your finances while you recover?</p>
               </div>
               <div className={styles.poaTextColumn}>
                 <p>Your Vault also holds your <strong>incapacity instructions</strong>: your decision-makers, your wishes, and private guidance for the people who may need to act on your behalf.</p>
                 <p className={styles.poaHighlightText}>Planning for life matters as much as planning for death.</p>
               </div>
             </div>
             <div style={{ marginTop: '3rem', textAlign: 'center' }}>
                <TrackedButton href="/how-it-works" size="lg" className={styles.ctaButtonGold} eventName="how_it_works_click" eventParams={{ location: 'home_poa' }}>See how it works</TrackedButton>
             </div>
           </div>
        </div>
      </section>

      {/* 7. Islamic & legal trust */}
      <section className={`${styles.section} ${styles.trustSectionPremium}`}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionH2}>Built with scholars.<br/>Prepared for Ontario law.</h2>
          </div>

          <div className={styles.trustGridPremium}>
            <div className={styles.trustBlockPremium}>
               <div className={styles.trustHeaderArea}>
                 <div className={styles.trustBlockIcon}>☪️</div>
                 <h3 className={styles.trustBlockTitlePremium}>Islamic principles</h3>
               </div>
               <ul className={styles.checkListPremiumDark}>
                 <li><span>Will structure built with qualified Islamic scholars</span></li>
                 <li><span>Designed to reflect Islamic inheritance principles</span></li>
                 <li><span>Charitable bequests within the one-third limit</span></li>
                 <li><span>Debts settled before distribution</span></li>
               </ul>
            </div>

            <div className={styles.trustBlockPremium}>
               <div className={styles.trustHeaderArea}>
                 <div className={styles.trustBlockIcon}>🍁</div>
                 <h3 className={styles.trustBlockTitlePremium}>Ontario legal requirements</h3>
               </div>
               <ul className={styles.checkListPremiumDark}>
                 <li><span>Designed to be legally valid under Ontario law when properly signed and witnessed</span></li>
                 <li><span>Lawyer-reviewed document structure</span></li>
                 <li><span>Optional digital attestation over Zoom with a paralegal</span></li>
               </ul>
            </div>
          </div>

          <div className={styles.legalNoteLayoutPremium}>
             <p>Muslim Will is not a law firm. It is a guided Islamic estate planning service built with qualified scholars and legal professionals. For complex estates, we recommend additional legal counsel.</p>
          </div>
        </div>
      </section>

      {/* Community events */}
      <EventsHomeSection />

      {/* 8. Final CTA */}
      <section className={`${styles.section} ${styles.ctaSectionPadding}`}>
        <div className={styles.container}>
          <div className={styles.ctaBox}>
            <h2>See the difference you can make for your family.</h2>
            <p className={styles.ctaText}>
              Write your Islamic will once, and your Vault keeps it current for life. Start by seeing how Ontario&apos;s rules and Islamic inheritance would divide your estate.
            </p>
            <div className={styles.ctaActions}>
              <TrackedButton href={calculatorUrl} variant="secondary" size="lg" className={styles.heroPrimaryBtn} eventName="calculator_click" eventParams={{ location: 'home_final_cta' }}>Check the difference</TrackedButton>
              <TrackedButton href="/how-it-works" size="lg" variant="outlineLight" className={styles.ctaButtonOutline} eventName="how_it_works_click" eventParams={{ location: 'home_final_cta' }}>How it works</TrackedButton>
            </div>
            <div style={{ marginTop: '1.25rem', fontSize: '0.95rem', color: '#ffffff', opacity: 0.9, position: 'relative', zIndex: 1 }}>
              Free to start. Plans from $7.99/month, or $6.99/person on a family plan. <Link href="/pricing" style={{ color: 'inherit', textDecoration: 'underline' }}>See plans and pricing</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
