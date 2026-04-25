import type { Metadata } from 'next';
import { TrackedButton } from '@/components/analytics/TrackedButton';
import { Card, CardContent, CardTitle } from '@/components/ui/Card';
import { Accordion } from '@/components/ui/Accordion';
import sharedStyles from '../page.module.css';
import styles from './pricing.module.css';

const siteUrl = 'https://themuslimwill.com';
const pageTitle = 'Pricing | Islamic Will Package In Ontario | Muslim Will';
const pageDescription = 'See Muslim Will\'s transparent $350 CAD flat-fee package, including an Islamic Last Will, guardianship directions, Powers of Attorney, scholar review, Ontario legal workflow support, and guided attestation.';

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: `${siteUrl}/pricing`,
  },
  openGraph: {
    title: 'One Transparent Flat-Fee Islamic Will Package | Muslim Will',
    description: 'A complete 4-document estate protection package for Muslim families in Ontario, with scholar review, legal workflow support, and guided final attestation.',
    url: `${siteUrl}/pricing`,
  },
};

const pricingFaqItems = [
  {
    question: 'How much does Muslim Will cost?',
    answer: 'The complete Muslim Will estate protection package is $350 CAD for one individual. It includes your Islamic Last Will, minor guardianship directions, Power of Attorney for Property, Power of Attorney for Personal Care, scholar review for inheritance considerations, Ontario legal workflow support, guided preparation, final attestation support, and final document delivery.'
  },
  {
    question: 'Does the $350 CAD package cover both husband and wife?',
    answer: 'No. The $350 CAD package is for one individual. Each spouse needs their own will and supporting documents. Muslim Will offers a dedicated couples package for $550 CAD so spouses can complete their planning together while still receiving individual documents.'
  },
  {
    question: 'Do spouses receive one joint will?',
    answer: 'No. A husband and wife each receive their own documents. The couples package coordinates shared family information where appropriate, but each spouse has an individual will and supporting documents.'
  },
  {
    question: 'Are all four documents included?',
    answer: 'Yes. The four core documents are always included: Islamic Last Will & Testament, minor guardianship directions, Power of Attorney for Property, and Power of Attorney for Personal Care.'
  },
  {
    question: 'Are there hidden hourly lawyer fees?',
    answer: 'No. The package is presented as a transparent flat fee. Future update fees may apply only when changes are requested and confirmed.'
  },
  {
    question: 'What payment methods are accepted?',
    answer: 'Muslim Will accepts standard secure online payment methods, including major credit cards and debit where available. Any additional payment options will be shown at checkout.'
  },
  {
    question: 'Is Islamic scholar review included?',
    answer: 'Yes. The inheritance structure is reviewed by qualified Islamic scholars for inheritance considerations. This supports faith-conscious planning and does not replace a personal fatwa for complex individual circumstances.'
  },
  {
    question: 'Is legal review included?',
    answer: 'The package includes Ontario legal workflow support and document review within the Muslim Will process. Legal validity depends on accurate information, proper review, and correct signing and witnessing.'
  },
  {
    question: 'Does this include the final Zoom attestation?',
    answer: 'Yes. The package includes guided final Zoom attestation support, where the required parties complete signing and witnessing according to Ontario remote execution requirements.'
  },
  {
    question: 'Are future updates included?',
    answer: 'The initial package covers the completed document package. Future update fees may apply if you later request changes because of life events, asset changes, or changes in your wishes.'
  },
  {
    question: 'Why not use a free template?',
    answer: 'Free templates may help with general preparation, but they usually do not include qualified Islamic scholar review, Ontario legal workflow support, Powers of Attorney, guided attestation, or final document coordination.'
  },
  {
    question: 'When should I use a traditional law firm instead?',
    answer: 'A traditional law firm may be the right path for complex tax planning, disputes, corporate holdings, trusts, international assets, or unusual family circumstances. Muslim Will is designed for families seeking a guided Islamic estate protection package with clear pricing.'
  }
];

function CheckIcon() {
  return (
    <svg className={styles.checkIcon} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  );
}

export default function PricingPage() {
  return (
    <main className={sharedStyles.main}>
      {/* 1. Hero Section */}
      <section className={`${sharedStyles.section} ${sharedStyles.heroSection}`}>
        <div className={`${sharedStyles.container} ${sharedStyles.heroContent}`}>
          <div className={sharedStyles.heroTextWrapper}>
             <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '0.5rem', marginBottom: '1rem' }}>
               <div className={`${sharedStyles.heroEyebrow} ${sharedStyles.fadeUp}`} style={{ marginBottom: 0, opacity: 0.85, fontSize: '0.75rem' }}>Transparent Pricing</div>
               <div className={`${sharedStyles.heroEyebrow} ${sharedStyles.fadeUp}`} style={{ marginBottom: 0 }}>Islamic Will Package In Ontario</div>
             </div>
             <h1 className={`${sharedStyles.heroH1} ${sharedStyles.fadeUp} ${sharedStyles.delay1}`}>
               One flat-fee package for complete Islamic estate protection.
             </h1>
             <p className={`${sharedStyles.heroCopy} ${sharedStyles.fadeUp} ${sharedStyles.delay2}`}>
               Muslim Will gives families a clear, guided pathway to prepare a complete 4-document estate protection package without hidden hourly lawyer fees or unclear add-ons.
             </p>
             <div className={`${sharedStyles.heroTrustLine} ${sharedStyles.fadeUp} ${sharedStyles.delay3}`}>
               Includes your Islamic Last Will, guardianship directions, both Powers of Attorney, scholar review, and attestation support.
             </div>
             
             <div className={`${sharedStyles.heroActions} ${sharedStyles.fadeUp} ${sharedStyles.delay4}`} style={{ marginBottom: '0.5rem' }}>
                <TrackedButton size="lg" variant="primary" className={sharedStyles.heroPrimaryBtn} eventName="start_your_will_click" eventParams={{ location: 'pricing_hero' }}>Start Your Will</TrackedButton>
                <TrackedButton href="#included" size="lg" variant="outline" className={sharedStyles.invertedOutline} eventName="pricing_whats_included_click" eventParams={{ location: 'pricing_hero' }}>See What Is Included</TrackedButton>
             </div>
             
             <div className={`${sharedStyles.fadeUp} ${sharedStyles.delay4} ${sharedStyles.heroMicrocopy}`} style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
               <span style={{ fontWeight: 600, color: 'var(--color-gold)', fontSize: '1.25rem' }}>$350 CAD Individual / $550 CAD Couples</span>
               <span>One-time flat fee. No hidden hourly lawyer fees.</span>
             </div>
             
             <div className={`${sharedStyles.fadeUp} ${sharedStyles.delay5} ${sharedStyles.heroEmotionalIntro}`}>
               Future update fees apply only when changes are explicitly requested.
             </div>
          </div>
        </div>
      </section>

      {/* 2. What Is Included Grid */}
      <section id="included" className={`${sharedStyles.section} ${sharedStyles.sectionLight}`}>
        <div className={sharedStyles.container}>
          <div className={sharedStyles.sectionHeader}>
            <h2 className={sharedStyles.sectionH2}>Everything your family needs in one complete package.</h2>
            <p className={sharedStyles.sectionIntro}>
              This is more than a single will document. Every Muslim Will package includes the four core estate protection documents families commonly need, plus the review and guidance required to move from intention to proper execution.
            </p>
          </div>
          
          <div className={styles.ledgerWrapper}>
            
            {/* Ledger Row 1 */}
            <div className={styles.ledgerRow}>
               <div className={styles.ledgerColLeft}>
                 <div className={styles.ledgerNumber}>01</div>
                 <div className={styles.ledgerTitleHeader}>
                   <span className={styles.ledgerEyebrow}>Hard Assets</span>
                   <h3 className={styles.ledgerTitle}>The Four Core Legal Documents</h3>
                   <p className={styles.ledgerIntro}>
                     Comprehensive protection for your family, your health, and your assets.
                   </p>
                 </div>
               </div>
               <div className={styles.ledgerColRight}>
                  <div className={styles.ledgerItem}>
                    <h4 className={styles.ledgerItemTitle}>Islamic Last Will &amp; Testament</h4>
                    <p className={styles.ledgerItemDesc}>Document your final wishes, inheritance intentions, charitable bequests, executor choices, and family instructions through a will pathway designed for Muslim families in Ontario.</p>
                  </div>
                  <div className={styles.ledgerItem}>
                    <h4 className={styles.ledgerItemTitle}>Minor Guardianship Directions</h4>
                    <p className={styles.ledgerItemDesc}>Document who you would want to care for your minor children if both parents were no longer able to do so, helping reduce uncertainty for your family.</p>
                  </div>
                  <div className={styles.ledgerItem}>
                    <h4 className={styles.ledgerItemTitle}>Power of Attorney for Property</h4>
                    <p className={styles.ledgerItemDesc}>Appoint a trusted person to manage financial, property, banking, and business matters if you become unable to manage them yourself.</p>
                  </div>
                  <div className={styles.ledgerItem}>
                    <h4 className={styles.ledgerItemTitle}>Power of Attorney for Personal Care</h4>
                    <p className={styles.ledgerItemDesc}>Appoint a trusted person to make healthcare and personal-care decisions if you are unable to communicate or decide for yourself.</p>
                  </div>
               </div>
            </div>

            {/* Ledger Row 2 */}
            <div className={styles.ledgerRow}>
               <div className={styles.ledgerColLeft}>
                 <div className={styles.ledgerNumber}>02</div>
                 <div className={styles.ledgerTitleHeader}>
                   <span className={styles.ledgerEyebrow}>Validation</span>
                   <h3 className={styles.ledgerTitle}>The Review &amp; Compliance Layer</h3>
                   <p className={styles.ledgerIntro}>
                     Expert checks to ensure your documents meet faith principles and secular laws.
                   </p>
                 </div>
               </div>
               <div className={styles.ledgerColRight}>
                  <div className={styles.ledgerItem}>
                    <h4 className={styles.ledgerItemTitle}>Qualified Islamic Scholar Review</h4>
                    <p className={styles.ledgerItemDesc}>Reviewed by qualified Islamic scholars for inheritance considerations. This review supports faith-conscious planning and does not replace a personal fatwa for complex individual circumstances.</p>
                  </div>
                  <div className={styles.ledgerItem}>
                    <h4 className={styles.ledgerItemTitle}>Ontario Legal Workflow Support</h4>
                    <p className={styles.ledgerItemDesc}>Your documents move through a workflow designed around Ontario legal requirements, with legal review and execution support built into the process.</p>
                  </div>
               </div>
            </div>

            {/* Ledger Row 3 */}
            <div className={styles.ledgerRow}>
               <div className={styles.ledgerColLeft}>
                 <div className={styles.ledgerNumber}>03</div>
                 <div className={styles.ledgerTitleHeader}>
                   <span className={styles.ledgerEyebrow}>Completion</span>
                   <h3 className={styles.ledgerTitle}>The Guided Execution</h3>
                   <p className={styles.ledgerIntro}>
                     Remote coordination to successfully sign your documents from home.
                   </p>
                 </div>
               </div>
               <div className={styles.ledgerColRight}>
                  <div className={styles.ledgerItem}>
                    <h4 className={styles.ledgerItemTitle}>Pre-Attestation Briefing</h4>
                    <p className={styles.ledgerItemDesc}>Before final signing, our team helps you understand what is needed for the attestation session, including witnesses, ID, signing steps, and readiness.</p>
                  </div>
                  <div className={styles.ledgerItem}>
                    <h4 className={styles.ledgerItemTitle}>Guided Final Zoom Attestation</h4>
                    <p className={styles.ledgerItemDesc}>Attend a guided final Zoom attestation session where the required parties complete the signing and witnessing process according to Ontario remote execution requirements.</p>
                  </div>
                  <div className={styles.ledgerItem}>
                    <h4 className={styles.ledgerItemTitle}>Final Document Delivery</h4>
                    <p className={styles.ledgerItemDesc}>Once properly signed and witnessed, your completed package is delivered with the relevant final documents and completion guidance.</p>
                  </div>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Pricing Cards Section */}
      <section className={`${sharedStyles.section} ${sharedStyles.sectionCream}`}>
        <div className={sharedStyles.container}>
          <div className={sharedStyles.sectionHeader}>
            <h2 className={sharedStyles.sectionH2}>Choose the package that matches your household.</h2>
            <p className={sharedStyles.sectionIntro}>
              Clear pricing makes it obvious that the individual package is priced per person, while married couples can choose a dedicated couples package so both spouses complete their documents through a coordinated process.
            </p>
          </div>
          
          <div className={styles.pricingCardsContainer}>
            {/* Individual Card */}
            <div className={styles.priceCard}>
              <div className={styles.cardLabel}>Complete Islamic Estate Protection Package</div>
              <div className={styles.priceAmount}>$350 <span style={{fontSize: '1.25rem'}}>CAD</span></div>
              <div className={styles.paymentNote}>One-time flat fee for one individual</div>
              
              <ul className={styles.checklist}>
                <li className={styles.checklistItem}><CheckIcon/> <span>Islamic Last Will &amp; Testament</span></li>
                <li className={styles.checklistItem}><CheckIcon/> <span>Minor guardianship directions</span></li>
                <li className={styles.checklistItem}><CheckIcon/> <span>Power of Attorney for Property</span></li>
                <li className={styles.checklistItem}><CheckIcon/> <span>Power of Attorney for Personal Care</span></li>
                <li className={styles.checklistItem}><CheckIcon/> <span>Qualified Islamic scholar review for inheritance considerations</span></li>
                <li className={styles.checklistItem}><CheckIcon/> <span>Ontario legal workflow support</span></li>
                <li className={styles.checklistItem}><CheckIcon/> <span>Pre-attestation briefing</span></li>
                <li className={styles.checklistItem}><CheckIcon/> <span>Guided final Zoom attestation</span></li>
                <li className={styles.checklistItem}><CheckIcon/> <span>Final document delivery</span></li>
              </ul>
              
              <TrackedButton variant="outline" size="lg" style={{ width: '100%' }} eventName="start_will_individual_click" eventParams={{ location: 'pricing_cards' }}>Start Your Will</TrackedButton>
            </div>

            {/* Couples Card (Recommended) */}
            <div className={`${styles.priceCard} ${styles.priceCardRecommended}`}>
              <div className={styles.cardLabel}>Couples Estate Protection Package</div>
              <div className={styles.priceAmount}>$550 <span style={{fontSize: '1.25rem'}}>CAD</span></div>
              <div className={styles.paymentNote}>One-time flat fee for two spouses</div>
              
              <ul className={styles.checklist}>
                <li className={styles.checklistItem}><CheckIcon/> <span><strong>Two individual</strong> Islamic Last Will &amp; Testament documents</span></li>
                <li className={styles.checklistItem}><CheckIcon/> <span>Minor guardianship directions coordinated for the household</span></li>
                <li className={styles.checklistItem}><CheckIcon/> <span>Power of Attorney for Property for <strong>each spouse</strong></span></li>
                <li className={styles.checklistItem}><CheckIcon/> <span>Power of Attorney for Personal Care for <strong>each spouse</strong></span></li>
                <li className={styles.checklistItem}><CheckIcon/> <span>Qualified Islamic scholar review for inheritance considerations</span></li>
                <li className={styles.checklistItem}><CheckIcon/> <span>Ontario legal workflow support</span></li>
                <li className={styles.checklistItem}><CheckIcon/> <span>Pre-attestation briefing</span></li>
                <li className={styles.checklistItem}><CheckIcon/> <span>Guided final Zoom attestation support</span></li>
                <li className={styles.checklistItem}><CheckIcon/> <span>Final document delivery for both spouses</span></li>
              </ul>
              
              <TrackedButton variant="primary" size="lg" style={{ width: '100%' }} eventName="start_will_couples_click" eventParams={{ location: 'pricing_cards' }}>Start As A Couple</TrackedButton>
            </div>
          </div>
          
          <div className={styles.pricingFootnote}>
            <p style={{marginBottom: '0.5rem'}}>Legal validity depends on accurate information, appropriate review, and correct signing and witnessing under applicable Ontario requirements.</p>
            <p><strong>Couples Legal Note:</strong> Each spouse needs their own will and supporting documents. A couples package coordinates shared family information where appropriate, but it should not imply that spouses receive one joint will.</p>
          </div>
        </div>
      </section>

      {/* 4. Comparison Table Section */}
      <section className={`${sharedStyles.section} ${sharedStyles.sectionLight}`}>
        <div className={sharedStyles.container}>
          <div className={sharedStyles.sectionHeader}>
            <h2 className={sharedStyles.sectionH2}>Compare the package, not just the price.</h2>
            <p className={sharedStyles.sectionIntro}>
              Most families are not comparing one document to one document. They are comparing how much clarity, review, and support they receive before signing. Muslim Will is designed to combine the core documents, Islamic inheritance review, legal workflow support, and guided final attestation in one clear package.
            </p>
          </div>
          
          <div className={styles.tableWrapper}>
            <table className={styles.comparisonTable}>
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Free / DIY Template</th>
                  <th>Traditional Law Firm</th>
                  <th className={styles.highlightColHeader}>Muslim Will</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Islamic Last Will</td>
                  <td>Generic or self-managed</td>
                  <td>Depends on lawyer/instructions</td>
                  <td className={styles.highlightCol}><div className={styles.highlightColCenter}><CheckIcon /></div></td>
                </tr>
                <tr>
                  <td>Minor guardianship</td>
                  <td>May be missing or self-managed</td>
                  <td>Often available, depends on scope</td>
                  <td className={styles.highlightCol}><div className={styles.highlightColCenter}><CheckIcon /></div></td>
                </tr>
                <tr>
                  <td>PoA for Property</td>
                  <td>Usually not included</td>
                  <td>Often priced or scoped separately</td>
                  <td className={styles.highlightCol}><div className={styles.highlightColCenter}><CheckIcon /></div></td>
                </tr>
                <tr>
                  <td>PoA for Personal Care</td>
                  <td>Usually not included</td>
                  <td>Often priced or scoped separately</td>
                  <td className={styles.highlightCol}><div className={styles.highlightColCenter}><CheckIcon /></div></td>
                </tr>
                <tr>
                  <td>Islamic inheritance review</td>
                  <td>No</td>
                  <td>Usually requires separate scholar</td>
                  <td className={styles.highlightCol}><div className={styles.highlightColCenter}><CheckIcon /></div></td>
                </tr>
                <tr>
                  <td>Qualified scholar review</td>
                  <td>No</td>
                  <td>Usually not included by default</td>
                  <td className={styles.highlightCol}><div className={styles.highlightColCenter}><CheckIcon /></div></td>
                </tr>
                <tr>
                  <td>Ontario legal workflow support</td>
                  <td>No / self-managed</td>
                  <td>Yes, depending on engagement</td>
                  <td className={styles.highlightCol}><div className={styles.highlightColCenter}><CheckIcon /></div></td>
                </tr>
                <tr>
                  <td>Guided final attestation</td>
                  <td>No / self-managed</td>
                  <td>Depends on the firm</td>
                  <td className={styles.highlightCol}><div className={styles.highlightColCenter}><CheckIcon /></div></td>
                </tr>
                <tr>
                  <td>Couples / spousal planning</td>
                  <td>Self-managed separately</td>
                  <td>Priced as two wills or custom</td>
                  <td className={styles.highlightCol} style={{ fontSize: '0.85rem' }}>Dedicated package recommended</td>
                </tr>
                <tr>
                  <td>Clear flat fee</td>
                  <td>Free or low cost, but limited</td>
                  <td>Often hourly or custom quote</td>
                  <td className={`${styles.highlightCol} ${styles.highlightColLast}`} style={{ fontSize: '0.9rem' }}>$350 CAD individual<br/>$550 CAD couples</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div style={{ marginTop: '1.5rem', fontSize: '0.85rem', color: 'var(--color-text-muted)', textAlign: 'center' }}>
            Traditional law firms remain important for complex estates, disputes, tax planning, corporate structures, or unusual legal needs. Muslim Will is designed as a guided Islamic estate protection package for families who need a clearer, more complete pathway.
          </div>
        </div>
      </section>

      {/* 5. Information Grids (Why Flat Fee / Future Changes / Tools) */}
      <section className={sharedStyles.section}>
        <div className={sharedStyles.container}>
          <div className={styles.policyGrid}>
            {/* Why Flat Fee */}
            <div className={styles.policyItem}>
              <h3 className={styles.policyTitle}>Clear pricing helps families stop delaying.</h3>
              <p className={styles.policyIntro}>Many families delay estate planning because they are unsure what the process will cost, what documents are needed, or whether Islamic inheritance review is included.</p>
              <ul className={styles.policyList}>
                <li><strong>No hourly lawyer-fee anxiety:</strong> You know the package price before you begin.</li>
                <li><strong>No surprise add-ons:</strong> The will, guardianship directions, and both Powers of Attorney are included.</li>
                <li><strong>No guessing:</strong> Includes guided intake, review, preparation, attestation support, and delivery.</li>
              </ul>
            </div>

            {/* Future Changes */}
            <div className={styles.policyItem}>
              <h3 className={styles.policyTitle}>Future changes are handled separately.</h3>
              <p className={styles.policyIntro}>Your package covers the complete initial estate protection setup. If your life changes later and you request updates, amendment or update fees may apply only when confirmed.</p>
              <ul className={styles.policyList}>
                <li>Marriage or divorce</li>
                <li>Birth or adoption of a child</li>
                <li>Property purchase or major asset changes</li>
                <li>Change of executor, guardian, or charity</li>
              </ul>
              <div style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', marginTop: '1.5rem', fontStyle: 'italic' }}>Any future update cost should be explained before additional work begins.</div>
            </div>

            {/* Free Tools */}
            <div className={styles.policyItem}>
              <h3 className={styles.policyTitle}>Free tools vs Completed package.</h3>
              <p className={styles.policyIntro}>Educational tools, checklists, and calculators can help you understand the basics before you begin, but they do not replace a completed will package.</p>
              <ul className={styles.policyList}>
                <li>Islamic inheritance education</li>
                <li>Readiness checklists</li>
                <li>Future inheritance calculators</li>
              </ul>
              <div className={styles.noticeBox} style={{ marginTop: '1.5rem', background: 'transparent', padding: '0 0 0 1.5rem', fontSize: '0.85rem' }}>
                Free tools are for education and preparation only. They do not create a legal will and do not replace professional legal or Islamic review.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FAQ Preview */}
      <section className={`${sharedStyles.section} ${sharedStyles.sectionLight}`}>
        <div className={sharedStyles.container}>
          <div className={sharedStyles.sectionHeader}>
            <h2 className={sharedStyles.sectionH2}>Pricing questions, answered clearly.</h2>
          </div>
          
          <div className={sharedStyles.faqContainer}>
            <Accordion items={pricingFaqItems} />
          </div>
        </div>
      </section>

      {/* 7. Final CTA */}
      <section className={`${sharedStyles.section} ${sharedStyles.ctaSectionPadding}`}>
        <div className={sharedStyles.container}>
          <div className={sharedStyles.ctaBox}>
            <h2>Start with a clear price and a complete package.</h2>
            <p className={sharedStyles.ctaText}>
              If you have delayed your will because the process felt expensive, unclear, or incomplete, Muslim Will gives you a guided pathway with transparent pricing and the four core documents included.
            </p>
            <div className={sharedStyles.ctaActions}>
              <TrackedButton size="lg" className={sharedStyles.ctaButtonPrimary} eventName="start_your_will_click" eventParams={{ location: 'pricing_final_cta' }}>Start Your Will</TrackedButton>
              <TrackedButton size="lg" variant="outlineLight" className={sharedStyles.ctaButtonOutline} eventName="book_call_click" eventParams={{ location: 'pricing_final_cta' }}>See How It Works</TrackedButton>
            </div>
            <div style={{ marginTop: '1.25rem', fontSize: '1rem', color: '#ffffff', display: 'flex', flexDirection: 'column', gap: '0.25rem', position: 'relative', zIndex: 1 }}>
              <span style={{ opacity: 0.9 }}>Your family comes first. Your planning can begin clearly.</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
