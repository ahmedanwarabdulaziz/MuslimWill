import type { Metadata } from 'next';
import { TrustBar } from '@/components/ui/TrustBar';
import Link from 'next/link';
import Image from 'next/image';
import { TrackedButton } from '@/components/analytics/TrackedButton';
import { Card, CardContent, CardTitle } from '@/components/ui/Card';
import { PiReceiptLight, PiBankLight, PiUsersLight, PiShieldWarningLight, PiQuotesLight, PiScrollLight, PiVaultLight } from 'react-icons/pi';
import styles from './page.module.css';

const siteUrl = 'https://themuslimwill.com';
const homepageTitle = 'The Bridge | Complete Islamic Will & Vault | Muslim Will';
const homepageDescription = 'Muslim Will gives you a complete Islamic will and a private secure vault — reviewed by verified scholars and compliant with Canadian law.';

export const metadata: Metadata = {
  title: homepageTitle,
  description: homepageDescription,
  alternates: { canonical: siteUrl },
};

export default function Home() {
  return (
    <div className={styles.main}>
      {/* 1. Hero Section */}
      <section className={`${styles.section} ${styles.heroSection}`}>
        <div className={`${styles.container} ${styles.heroContent}`}>
          <div className={styles.heroTextWrapper}>
             <h1 className={`${styles.heroH1} ${styles.fadeUp} ${styles.delay1}`}>
               Fear of leaving chaos
             </h1>
             <h2 className={`${styles.heroSubH1} ${styles.fadeUp} ${styles.delay1}`}>
               If something happened to you today, would your family know what to do?
             </h2>
             <p className={`${styles.heroCopy} ${styles.fadeUp} ${styles.delay2}`}>
               Muslim Will gives you a complete Islamic will and a private secure vault — reviewed by verified scholars and compliant with Canadian law — so your family is never left without answers.
             </p>
             
             <div className={`${styles.heroActions} ${styles.fadeUp} ${styles.delay4}`} style={{ marginTop: '3rem' }}>
                <TrackedButton href="https://app.themuslimwill.com/Account/Login" size="lg" variant="secondary" className={styles.heroPrimaryBtn} eventName="start_your_will_click" eventParams={{ location: 'home_hero' }}>Start For $7.99/month</TrackedButton>
                <TrackedButton href="#included" size="lg" variant="outline" className={styles.invertedOutline} eventName="see_whats_included_click" eventParams={{ location: 'home_hero' }}>See What&apos;s Included</TrackedButton>
             </div>
             
             <div className={`${styles.fadeUp} ${styles.delay5} ${styles.heroMicrocopy}`}>
               Free to register. Full access from $7.99/month. No hidden fees.
             </div>
          </div>
        </div>
      </section>

      {/* ── TRUST ANCHORS ── */}
      <TrustBar items={['Reviewed by verified Islamic scholars', 'Compliant with Canadian law', 'Secure private vault', 'From $7.99/month — Complete Islamic Will & Vault']} />

      {/* 2. The Problem - REDESIGNED */}
      <section className={`${styles.section} ${styles.problemSection}`}>
        <div className={styles.container}>
          <div className={styles.problemLayout}>
            <div className={styles.problemLeft}>
              <h2>Most Muslim families are left <span>unprepared.</span></h2>
              <p>When a Muslim passes away without a clear will and proper records, the consequences are immediate and severe:</p>
            </div>
            
            <div className={styles.problemRight}>
              <div className={styles.problemGrid}>
                 <div className={styles.problemCardPremium}>
                    <div className={styles.problemCardHeader}>
                       <div className={styles.problemIconWrapper}>
                          <PiReceiptLight size={28} />
                       </div>
                       <h3>Debts may go unpaid</h3>
                    </div>
                    <p>A major sin in Islam, often left unresolved due to lack of documentation.</p>
                 </div>
                 <div className={styles.problemCardPremium}>
                    <div className={styles.problemCardHeader}>
                       <div className={styles.problemIconWrapper}>
                          <PiBankLight size={28} />
                       </div>
                       <h3>Assets go missing</h3>
                    </div>
                    <p>Hidden accounts or properties are lost, leaving families in financial distress.</p>
                 </div>
                 <div className={styles.problemCardPremium}>
                    <div className={styles.problemCardHeader}>
                       <div className={styles.problemIconWrapper}>
                          <PiUsersLight size={28} />
                       </div>
                       <h3>Family members fight</h3>
                    </div>
                    <p>Without clear legal instruction, inheritance becomes a source of deep conflict.</p>
                 </div>
                 <div className={styles.problemCardPremium}>
                    <div className={styles.problemCardHeader}>
                       <div className={styles.problemIconWrapper}>
                          <PiShieldWarningLight size={28} />
                       </div>
                       <h3>Unclear guardianship</h3>
                    </div>
                    <p>The courts may decide who raises your minor children, ignoring your values.</p>
                 </div>
              </div>
            </div>
          </div>
          
          <div className={styles.hadithPremiumBlock}>
             <PiQuotesLight className={styles.hadithQuoteMarkIcon} />
             <p className={styles.hadithTextPremium}>
               "It is not permissible for any Muslim who has something to bequeath to sleep two nights without having his last will and testament written and kept ready with him."
             </p>
             <div className={styles.hadithDivider}></div>
             <span className={styles.hadithSourcePremium}>The Prophet ﷺ — Sahih al-Bukhari, Sahih Muslim</span>
          </div>

          <div className={styles.transitionContainer}>
             <p className={styles.transitionLinePremium}>A will is not just legal protection. It is an Islamic obligation.</p>
             <div className={styles.transitionHighlightPremium}>The Bridge gives you both — in one complete subscription, built specifically for Muslim families in Canada.</div>
          </div>
        </div>
      </section>

      {/* 3. Introduce The Bridge - REDESIGNED */}
      <section id="included" className={`${styles.section} ${styles.sectionNavyGradient}`}>
        <div className={styles.container}>
          <div className={styles.sectionHeader} style={{ maxWidth: '800px', color: 'var(--color-surface)' }}>
            <div className={styles.heroEyebrow} style={{ background: 'rgba(212, 175, 55, 0.15)', color: 'var(--color-gold)' }}>Introducing The Bridge</div>
            <h2 className={styles.sectionH2} style={{ color: 'var(--color-surface)', fontSize: '3rem', marginBottom: '1.5rem' }}>One complete package.</h2>
            <p className={styles.sectionIntro} style={{ color: 'rgba(255,255,255,0.85)' }}>A complete Islamic will. A private secure vault. One subscription.</p>
          </div>

          <div className={styles.bridgeColumnsPremium}>
            <div className={styles.bridgeCardPremium}>
              <div className={styles.bridgeCardHeader}>
                <div className={styles.bridgeIconPremium}>
                  <PiScrollLight size={36} color="var(--color-gold)" />
                </div>
                <h3 className={styles.bridgeCardTitle}>The Will</h3>
              </div>
              <ul className={styles.checkListPremium}>
                <li><span>Built with verified Islamic scholars</span></li>
                <li><span>Compliant with Canadian law</span></li>
                <li><span>Covers inheritance, guardianship, charitable bequests</span></li>
                <li><span>Auto-generated and always up to date</span></li>
              </ul>
            </div>

            <div className={styles.bridgeCardPremium}>
              <div className={styles.bridgeCardHeader}>
                <div className={styles.bridgeIconPremium}>
                  <PiVaultLight size={36} color="var(--color-gold)" />
                </div>
                <h3 className={styles.bridgeCardTitle}>The Vault</h3>
              </div>
              <ul className={styles.checkListPremium}>
                <li><span>4 private branches (debts, assets, documents, messages)</span></li>
                <li><span>Secure audio and video messages delivered after death</span></li>
                <li><span>Private incapacity instructions stored in your Vault</span></li>
                <li><span>Executor access triggered only by official verification</span></li>
                <li><span>Audit trail on every access event</span></li>
              </ul>
            </div>
          </div>
          
          <div style={{ textAlign: 'center', marginTop: '4rem' }}>
            <TrackedButton href="https://app.themuslimwill.com/Account/Login" size="lg" className={styles.ctaButtonGold} eventName="start_bridge_click" eventParams={{ location: 'home_bridge' }}>Start For $7.99/month</TrackedButton>
          </div>
        </div>
      </section>

      {/* 4. The Vault Branches - REDESIGNED */}
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
              <p>Record who you owe and how much. When the time comes, Muslim Will passes this to your executor with the documents attached. Your debts are settled. Your account with Allah is clear.</p>
            </div>
            
            <div className={styles.branchCardPremium}>
              <div className={styles.branchHeaderContainer}>
                <div className={styles.branchIconWrapper}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>
                </div>
                <div className={styles.branchNumberStylish}>02</div>
              </div>
              <h4>My Assets</h4>
              <p>Tell your family where everything is — bank accounts, property, safety deposit boxes, business records, physical keys. No more searching. No more guessing.</p>
            </div>
            
            <div className={styles.branchCardPremium}>
              <div className={styles.branchHeaderContainer}>
                <div className={styles.branchIconWrapper}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
                </div>
                <div className={styles.branchNumberStylish}>03</div>
              </div>
              <h4>My Documents</h4>
              <p>Upload the documents your family will need — insurance, ID, property, contracts. Everything in one secure place, released to the right people at the right time.</p>
            </div>
            
            <div className={styles.branchCardPremium}>
              <div className={styles.branchHeaderContainer}>
                <div className={styles.branchIconWrapper}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </div>
                <div className={styles.branchNumberStylish}>04</div>
              </div>
              <h4>My Messages</h4>
              <p>Leave a written letter, a voice note, or a video clip for the people who matter most. Delivered only after you are gone.</p>
            </div>
          </div>
          
          <div className={styles.emotionalClosingPremium}>
            &ldquo;This is not just a will. This is everything you would want your family to know — protected, organized, and waiting for them.&rdquo;
          </div>
        </div>
      </section>

      {/* 5. Islamic Compliance & Legal Trust */}
      <section className={`${styles.section} ${styles.trustSectionPremium}`}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionH2}>Verified by scholars.<br/>Protected by Canadian law.</h2>
          </div>
          
          <div className={styles.trustGridPremium}>
            <div className={styles.trustBlockPremium}>
               <div className={styles.trustHeaderArea}>
                 <div className={styles.trustBlockIcon}>☪️</div>
                 <h3 className={styles.trustBlockTitlePremium}>Islamic Compliance</h3>
               </div>
               <ul className={styles.checkListPremiumDark}>
                 <li><span>Reviewed and built with verified Islamic scholars</span></li>
                 <li><span>Follows Islamic inheritance principles (faraid)</span></li>
                 <li><span>Covers the 1/3 bequest rule for charitable giving</span></li>
                 <li><span>Includes guidance on debts, which must be settled before distribution</span></li>
               </ul>
            </div>
            
            <div className={styles.trustBlockPremium}>
               <div className={styles.trustHeaderArea}>
                 <div className={styles.trustBlockIcon}>🍁</div>
                 <h3 className={styles.trustBlockTitlePremium}>Canadian Legal Compliance</h3>
               </div>
               <ul className={styles.checkListPremiumDark}>
                 <li><span>Compliant with Ontario legal requirements</span></li>
                 <li><span>Lawyer-reviewed document structure</span></li>
                 <li><span>Digital attestation & notarization available (Zoom, paralegal-facilitated)</span></li>
               </ul>
            </div>
          </div>
          
          <div className={styles.legalNoteLayoutPremium}>
             <p>Muslim Will is not a law firm. It is a guided Islamic estate planning service built with verified scholars and legal professionals. For complex estates, we recommend additional legal counsel.</p>
          </div>
        </div>
      </section>

      {/* 6. Pricing - REDESIGNED */}
      <section className={`${styles.section} ${styles.pricingSectionPremium}`}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionH2} style={{ color: 'var(--color-navy)' }}>The right option for your situation.</h2>
          </div>
          
          <div className={styles.pricingGridPremium}>
            
            <div className={`${styles.pricingCardPremium} ${styles.pricingCardHero}`}>
               <div className={styles.popularBadge}>Most Chosen</div>
               <div className={styles.pricingHeader}>
                 <h3 className={styles.pricingNamePremium}>The Bridge</h3>
                 <p className={styles.pricingTaglinePremium}>Everything your family needs. One complete Islamic will. One private secure vault.</p>
               </div>
               <div className={styles.pricingPriceArea}>
                 <div className={styles.pricingPricePremium}>$7.99<span>/month</span></div>
               </div>
               <ul className={styles.checkListPricingPrimary}>
                 <li>
                   <span>
                     Islamic Last Will &amp; Testament
                     <span style={{ display: 'block', fontSize: '0.85em', opacity: 0.75, fontWeight: 'normal', marginTop: '2px' }}>Built by Islamic scholars and structured to meet Canadian legal requirements</span>
                   </span>
                 </li>
                 <li><span>Muslim Will Vault (all 4 branches)</span></li>
                 <li><span>Private incapacity instructions stored in your Vault</span></li>
                 <li><span>Secure audio & video messages</span></li>
                 <li><span>Executor access workflow</span></li>
                 <li><span>Unlimited updates anytime</span></li>
               </ul>
               <div className={styles.pricingAction}>
                 <TrackedButton href="https://app.themuslimwill.com/Account/Login" size="lg" className={styles.ctaButtonGoldFull} eventName="pricing_bridge_click" eventParams={{ location: 'pricing' }}>Start For $7.99/month</TrackedButton>
                 <div className={styles.pricingMicrocopyPremium}>Free to register. Full access from $7.99/month. Cancel anytime.</div>
               </div>
            </div>
            
            <div className={styles.pricingCardSecondaryContainerPremium}>
              <div className={styles.pricingCardPremiumSide}>
                 <div className={styles.pricingHeaderSide}>
                   <h3 className={styles.pricingNamePremiumSide}>Full Package</h3>
                   <div className={styles.pricingPricePremiumSide}>$350</div>
                 </div>
                 <p className={styles.pricingTaglinePremiumSide}>For specific situations that need a dedicated expert personally reviewing your case.</p>
                 <ul className={styles.checkListPricingSecondary}>
                   <li><span>Everything in The Bridge</span></li>
                   <li><span>12 months vault access included</span></li>
                   <li><span>Case-by-case Islamic & Legal review</span></li>
                   <li><span>Digital attestation & Will Directory registration</span></li>
                 </ul>
                 <div className={styles.pricingActionSide}>
                   <TrackedButton href="https://app.themuslimwill.com/Account/Login" variant="outline" size="md" className={styles.ctaButtonOutlineNavy} eventName="pricing_full_click" eventParams={{ location: 'pricing' }}>Get The Full Package</TrackedButton>
                   <div className={styles.pricingMicrocopyPremiumSide}>One-time payment. Value: $594.</div>
                 </div>
              </div>
              
              <div className={styles.pricingCardPremiumSide}>
                 <div className={styles.pricingHeaderSide}>
                   <h3 className={styles.pricingNamePremiumSide}>Family Package</h3>
                   <div className={styles.pricingPricePremiumSide}>$4.19<span>/mo</span></div>
                 </div>
                 <p className={styles.pricingTaglinePremiumSide}>One subscription. Every member protected. Every account private.</p>
                 <ul className={styles.checkListPricingSecondary}>
                   <li><span>The Bridge for each family member</span></li>
                   <li><span>Fully private and independent accounts</span></li>
                   <li><span>Shared billing, individual vaults</span></li>
                 </ul>
                 <div className={styles.pricingActionSide}>
                   <TrackedButton href="https://app.themuslimwill.com/Account/Login" variant="outline" size="md" className={styles.ctaButtonOutlineNavy} eventName="pricing_family_click" eventParams={{ location: 'pricing' }}>Protect Your Family</TrackedButton>
                   <div className={styles.pricingMicrocopyPremiumSide}>Minimum 2 members. 30% off individual price.</div>
                 </div>
              </div>
            </div>
          </div>
          
          {/* Add-ons */}
          <div className={styles.addonsSectionPremium}>
             <h3 className={styles.addonsTitlePremium}>For specific situations, not everyday needs.</h3>
             <p className={styles.addonsIntroPremium}>Most families get everything they need with The Bridge. These add-ons exist for specific legal or personal circumstances — not because The Bridge is incomplete.</p>
             
             <div className={styles.tableResponsivePremium}>
               <table className={styles.addonsTablePremium}>
                 <thead>
                   <tr>
                     <th>Add-On</th>
                     <th>Who It&apos;s For</th>
                     <th>Price</th>
                   </tr>
                 </thead>
                 <tbody>
                   <tr>
                     <td><strong>Scholar Review</strong></td>
                     <td>Complex estates, unusual inheritance situations, or large assets</td>
                     <td>$49</td>
                   </tr>
                   <tr>
                     <td><strong>Admin & Legal Review</strong></td>
                     <td>Multiple properties, business assets, or cross-border considerations</td>
                     <td>$49</td>
                   </tr>
                   <tr>
                     <td><strong>Digital Attestation</strong></td>
                     <td>Those who need their will formally witnessed and legally certified under Ontario law</td>
                     <td>$149</td>
                   </tr>
                 </tbody>
               </table>
             </div>
          </div>
        </div>
      </section>

      {/* 7. POA / Incapacity - REDESIGNED */}
      <section className={`${styles.section} ${styles.poaSectionPremium}`}>
        <div className={styles.container}>
           <div className={styles.poaBoxPremium}>
             <div className={styles.poaIcon}>
               <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
             </div>
             <h2 className={styles.sectionH2}>What if you can&apos;t speak for yourself?</h2>
             <div className={styles.poaContentGrid}>
               <div className={styles.poaTextColumn}>
                 <p className={styles.poaLeadText}>A coma. A serious accident. A medical emergency. If you could not communicate, does someone know what you want?</p>
                 <p>Who should make medical decisions for you? Who should manage your finances? What do you want your family to do?</p>
               </div>
               <div className={styles.poaTextColumn}>
                 <p>The Bridge includes a private <strong>incapacity vault</strong> — where you store your instructions, appoint your decision-makers, and leave private guidance for the people who may need to act on your behalf.</p>
                 <p className={styles.poaHighlightText}>Because planning for life matters as much as planning for death.</p>
               </div>
             </div>
             <div style={{ marginTop: '3rem', textAlign: 'center' }}>
                <TrackedButton href="https://app.themuslimwill.com/Account/Login" size="lg" className={styles.ctaButtonGold} eventName="poa_start_click" eventParams={{ location: 'home_poa' }}>Start For $7.99/month</TrackedButton>
             </div>
           </div>
        </div>
      </section>

      {/* 8. Trust Bar & Social Proof */}
      <TrustBar items={['Trusted by hundreds of Muslim families across Canada', 'Scholar Verified', 'Ontario Compliant', 'Bank-Level Encryption']} />

      {/* 9. Final CTA */}
      <section className={`${styles.section} ${styles.ctaSectionPadding}`}>
        <div className={styles.container}>
          <div className={styles.ctaBox}>
            <h2>Your family is waiting for the clarity only you can give them.</h2>
            <p className={styles.ctaText}>
              It takes less than 10 minutes to start. It lasts a lifetime.
            </p>
            <div className={styles.ctaActions}>
              <TrackedButton href="https://app.themuslimwill.com/Account/Login" variant="secondary" size="lg" className={styles.heroPrimaryBtn} eventName="final_cta_click" eventParams={{ location: 'home_final_cta' }}>Start For $7.99/month</TrackedButton>
              <TrackedButton href="/how-it-works" size="lg" variant="outlineLight" className={styles.ctaButtonOutline} eventName="final_cta_how_it_works_click" eventParams={{ location: 'home_final_cta' }}>See How It Works</TrackedButton>
            </div>
            <div style={{ marginTop: '1.25rem', fontSize: '0.95rem', color: '#ffffff', opacity: 0.9, position: 'relative', zIndex: 1 }}>
              Free to register. Full access from $7.99/month. Islamic will and private vault included.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
