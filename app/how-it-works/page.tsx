import React from 'react';
import type { Metadata } from 'next';
import sharedStyles from '../page.module.css';
import styles from './how-it-works.module.css';
import { TrackedButton } from '@/components/analytics/TrackedButton';
import { Accordion } from '@/components/ui/Accordion';

export const metadata: Metadata = {
  title: 'How Islamic Will Planning Works In Ontario | Muslim Will',
  description: 'See the guided Muslim Will process from intake to qualified Islamic scholar review, Ontario legal workflow support, pre-attestation briefing, final Zoom attestation, and document delivery.',
  openGraph: {
    title: 'A Guided Islamic Will Planning Process | Muslim Will',
    description: 'Move from family details to final document delivery through a structured Muslim Will process built for Muslim families in Ontario.',
  }
};

export default function HowItWorksPage() {
  
  const faqs = [
    {
      question: "How long does the process take?",
      answer: "Timing depends on file complexity, completeness of information, customer responsiveness, and scheduling availability. Straightforward files can move through the process more quickly when intake, documents, witnesses, and required parties are ready."
    },
    {
      question: "Do I speak with a real person?",
      answer: "Yes. The process includes human review, preparation support, and final attestation coordination. Muslim Will should not feel like a template generator."
    },
    {
      question: "Who reviews the Islamic inheritance structure?",
      answer: "The inheritance structure is reviewed by qualified Islamic scholars for inheritance considerations. This supports faith-conscious planning and does not replace a personal fatwa for complex individual circumstances."
    },
    {
      question: "Is the legal workflow Ontario-specific?",
      answer: "The current workflow is strongest and clearest in Ontario. Any broader Canadian or future regional expansion should be handled through distinct jurisdiction-aware content."
    },
    {
      question: "What happens in the pre-attestation briefing?",
      answer: "The team helps you prepare for the final signing session, including witness readiness, ID requirements, signing order, and what each required party needs to do."
    },
    {
      question: "What happens in the final Zoom attestation?",
      answer: "The required parties complete signing and witnessing according to Ontario remote execution requirements. The process is designed to include proper witness coordination, wet-signature/counterpart handling where applicable, and the involvement of the required Ontario legal professional or licensee where applicable."
    },
    {
      question: "Can spouses complete the process together?",
      answer: "Yes. Couples can complete planning together through a couples package. Each spouse still receives individual documents, while shared family information can be coordinated where appropriate."
    },
    {
      question: "What if my situation is complex?",
      answer: "Complex estates, disputes, tax planning, corporate holdings, international assets, trusts, or unusual family circumstances may require additional legal guidance."
    },
    {
      question: "Does Muslim Will guarantee legal validity?",
      answer: "No service should guarantee legal validity in every circumstance. Legal validity depends on accurate information, appropriate review, and correct signing and witnessing under the requirements that apply."
    }
  ];

  return (
    <main>
      {/* 1. Hero Section (Patriva Style) */}
      <section className={`${sharedStyles.section} ${sharedStyles.heroSection}`}>
        <div className={`${sharedStyles.container} ${sharedStyles.heroContent}`}>
          <div className={sharedStyles.heroTextWrapper}>
             <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '0.5rem', marginBottom: '1rem' }}>
               <div className={`${sharedStyles.heroEyebrow} ${sharedStyles.fadeUp}`} style={{ marginBottom: 0 }}>
                 How It Works
               </div>
             </div>
             
             <h1 className={`${sharedStyles.heroH1} ${sharedStyles.fadeUp} ${sharedStyles.delay1}`}>
               A guided pathway from family details to final execution.
             </h1>
             
             <p className={`${sharedStyles.heroCopy} ${sharedStyles.fadeUp} ${sharedStyles.delay2}`}>
               Muslim Will is designed to make Islamic estate planning easier to begin and clearer to complete. From guided intake to qualified Islamic scholar review, Ontario legal workflow support, final Zoom attestation, and document delivery, each step has a defined role.
             </p>
             
             <div className={`${sharedStyles.heroActions} ${sharedStyles.fadeUp} ${sharedStyles.delay3}`} style={{ marginBottom: '1.5rem' }}>
               <TrackedButton variant="primary" size="lg" eventName="start_will_hero_click" eventParams={{ location: 'how_it_works' }}>Start Your Will</TrackedButton>
               <TrackedButton variant="outline" size="lg" className={sharedStyles.invertedOutline} href="/pricing" eventName="view_pricing_hero_click" eventParams={{ location: 'how_it_works' }}>View Pricing</TrackedButton>
             </div>

             <div className={`${sharedStyles.heroTrustPoints} ${sharedStyles.fadeUp} ${sharedStyles.delay4}`} style={{ marginTop: '3rem' }}>
               <span className={sharedStyles.heroTrustPoint}>4 core documents included</span>
               <span className={sharedStyles.heroTrustPoint}>Qualified Islamic scholar review</span>
               <span className={sharedStyles.heroTrustPoint}>Ontario legal workflow support</span>
               <span className={sharedStyles.heroTrustPoint}>Guided final attestation</span>
             </div>

             <div className={`${sharedStyles.fadeUp} ${sharedStyles.delay5}`} style={{ fontSize: '0.85rem', opacity: 0.6, maxWidth: '600px', lineHeight: 1.5, marginTop: '2rem' }}>
               Legal validity depends on accurate information, appropriate review, and correct signing and witnessing under the requirements that apply to your jurisdiction.
             </div>
          </div>
        </div>
      </section>

      {/* 2. Process Overview */}
      <section className={`${sharedStyles.section} ${sharedStyles.sectionLight}`}>
        <div className={sharedStyles.container}>
          <div className={sharedStyles.sectionHeader}>
            <h2 className={sharedStyles.sectionH2}>The process is structured so you are never left guessing.</h2>
            <p className={sharedStyles.sectionIntro}>
              Many families delay will planning because they do not know what happens next. Muslim Will is built around clear stages, status updates, human review, and a guided final signing process.
            </p>
          </div>

          <div className={styles.indexGrid}>
            <div className={styles.indexTile}>
              <div className={styles.indexNumber}>01</div>
              <h4 className={styles.indexTitle}>Choose your package</h4>
              <p className={styles.indexText}>Individual or couples options</p>
            </div>
            <div className={styles.indexTile}>
              <div className={styles.indexNumber}>02</div>
              <h4 className={styles.indexTitle}>Complete intake</h4>
              <p className={styles.indexText}>Family and guardian details</p>
            </div>
            <div className={styles.indexTile}>
              <div className={styles.indexNumber}>03</div>
              <h4 className={styles.indexTitle}>Submit details</h4>
              <p className={styles.indexText}>Into the secure workflow</p>
            </div>
            <div className={styles.indexTile}>
              <div className={styles.indexNumber}>04</div>
              <h4 className={styles.indexTitle}>Scholar review</h4>
              <p className={styles.indexText}>For inheritance considerations</p>
            </div>
            <div className={styles.indexTile}>
              <div className={styles.indexNumber}>05</div>
              <h4 className={styles.indexTitle}>Legal workflow review</h4>
              <p className={styles.indexText}>For structural oversight</p>
            </div>
            <div className={styles.indexTile}>
              <div className={styles.indexNumber}>06</div>
              <h4 className={styles.indexTitle}>Briefing call</h4>
              <p className={styles.indexText}>To prepare your witnesses</p>
            </div>
            <div className={styles.indexTile}>
              <div className={styles.indexNumber}>07</div>
              <h4 className={styles.indexTitle}>Zoom attestation</h4>
              <p className={styles.indexText}>With the required Ontario legal professional/licensee where applicable</p>
            </div>
            <div className={styles.indexTile}>
              <div className={styles.indexNumber}>08</div>
              <h4 className={styles.indexTitle}>Final delivery</h4>
              <p className={styles.indexText}>And future review reminders</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. The 8-Step Prestige Vertical Timeline */}
      <section className={sharedStyles.section}>
        <div className={sharedStyles.container}>
          <div className={sharedStyles.sectionHeader}>
            <h2 className={sharedStyles.sectionH2}>From first step to completed documents.</h2>
            <p className={sharedStyles.sectionIntro}>A detailed look at exactly what happens when you start your will.</p>
          </div>

          <div className={styles.timelineWrapper}>
            
            {/* Step 1 */}
            <div className={styles.timelineNode}>
              <div className={styles.timelineNumber}>Step 1</div>
              <h3 className={styles.timelineTitle}>Choose your package</h3>
              <p className={styles.timelineText}>
                Start by choosing the individual package or the couples package. The individual package is designed for one person, while the couples package helps spouses complete their planning together while still receiving individual documents.
              </p>
              <div className={styles.customerActionBox}>
                <div className={styles.customerActionLabel}>Customer Action</div>
                <p className={styles.customerActionText}>Select your package and create your secure account.</p>
              </div>
              <div className={styles.trustNote}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
                The four core documents are included in every package.
              </div>
            </div>

            {/* Step 2 */}
            <div className={styles.timelineNode}>
              <div className={styles.timelineNumber}>Step 2</div>
              <h3 className={styles.timelineTitle}>Complete guided intake</h3>
              <p className={styles.timelineText}>
                Use the guided intake to provide your key family information, executor choices, guardian preferences, charitable intentions, and supporting details. The intake is designed to reduce confusion and help you organize information before review begins.
              </p>
              <div className={styles.customerActionBox}>
                <div className={styles.customerActionLabel}>Customer Action</div>
                <p className={styles.customerActionText}>Enter your family, guardian, executor, bequest, and document information.</p>
              </div>
              <div className={styles.trustNote}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
                For couples, shared family information can be coordinated where appropriate, but each spouse still receives individual documents.
              </div>
            </div>

            {/* Step 3 */}
            <div className={styles.timelineNode}>
              <div className={styles.timelineNumber}>Step 3</div>
              <h3 className={styles.timelineTitle}>Submit details and required documents</h3>
              <p className={styles.timelineText}>
                Once your intake is ready, your information is submitted into the review workflow. Any required identity, witness, or supporting document details should be provided through the official secure submission method.
              </p>
              <div className={styles.customerActionBox}>
                <div className={styles.customerActionLabel}>Customer Action</div>
                <p className={styles.customerActionText}>Submit your intake and any required supporting materials.</p>
              </div>
              <div className={styles.trustNote}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
                Sensitive documents should be handled through approved secure channels, not informal message threads.
              </div>
            </div>

            {/* Step 4 */}
            <div className={styles.timelineNode}>
              <div className={styles.timelineNumber}>Step 4</div>
              <h3 className={styles.timelineTitle}>Qualified Islamic scholar review</h3>
              <p className={styles.timelineText}>
                Your inheritance structure is reviewed by qualified Islamic scholars for inheritance considerations. This review supports faith-conscious planning and helps ensure that the inheritance structure is considered through an Islamic lens.
              </p>
              <div className={styles.customerActionBox}>
                <div className={styles.customerActionLabel}>Customer Action</div>
                <p className={styles.customerActionText}>No action is usually needed unless the review team requests clarification.</p>
              </div>
              <div className={styles.trustNote}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
                This review supports faith-conscious planning and does not replace a personal fatwa for complex individual circumstances.
              </div>
            </div>

            {/* Step 5 */}
            <div className={styles.timelineNode}>
              <div className={styles.timelineNumber}>Step 5</div>
              <h3 className={styles.timelineTitle}>Ontario legal workflow review</h3>
              <p className={styles.timelineText}>
                Your documents move through a workflow designed around Ontario legal requirements, with legal review and execution-related requirements handled within the Muslim Will process.
              </p>
              <div className={styles.customerActionBox}>
                <div className={styles.customerActionLabel}>Customer Action</div>
                <p className={styles.customerActionText}>Respond if the legal workflow team asks for clarification or correction.</p>
              </div>
              <div className={styles.trustNote}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
                Legal validity depends on accurate information, proper review, and correct signing and witnessing.
              </div>
            </div>

            {/* Step 6 */}
            <div className={styles.timelineNode}>
              <div className={styles.timelineNumber}>Step 6</div>
              <h3 className={styles.timelineTitle}>Pre-attestation briefing</h3>
              <p className={styles.timelineText}>
                Before the final signing session, the team walks you through what is needed for final attestation. This may include witness readiness, ID requirements, camera/session readiness, signing order, and what each required party needs to do.
              </p>
              <div className={styles.customerActionBox}>
                <div className={styles.customerActionLabel}>Customer Action</div>
                <p className={styles.customerActionText}>Attend the preparation call and confirm that all required parties and materials are ready.</p>
              </div>
              <div className={styles.trustNote}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
                This step helps the final session stay smooth, focused, and properly coordinated.
              </div>
            </div>

            {/* Step 7 */}
            <div className={styles.timelineNode}>
              <div className={styles.timelineNumber}>Step 7</div>
              <h3 className={styles.timelineTitle}>Guided final Zoom attestation</h3>
              <p className={styles.timelineText}>
                Attend a guided final Zoom attestation session where the required parties complete the signing and witnessing process according to Ontario remote execution requirements.
              </p>
              <div className={styles.customerActionBox}>
                <div className={styles.customerActionLabel}>Customer Action</div>
                <p className={styles.customerActionText}>Join the final session with the required parties, documents, IDs, and signing readiness.</p>
              </div>
              <div className={styles.trustNote}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
                The process is designed to include proper witness coordination, wet-signature/counterpart handling where applicable, and the involvement of the required Ontario legal professional or licensee where applicable.
              </div>
            </div>

            {/* Step 8 */}
            <div className={styles.timelineNode}>
              <div className={styles.timelineNumber}>Step 8</div>
              <h3 className={styles.timelineTitle}>Final delivery and future review reminders</h3>
              <p className={styles.timelineText}>
                Once properly signed and witnessed, your completed package is delivered with the relevant final documents and completion guidance. You may also receive future reminders to review your documents after major life changes.
              </p>
              <div className={styles.customerActionBox}>
                <div className={styles.customerActionLabel}>Customer Action</div>
                <p className={styles.customerActionText}>Store your completed documents safely and review them when major life events occur.</p>
              </div>
              <div className={styles.trustNote}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
                Future update fees may apply only when changes are requested and confirmed.
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. What You Receive (Ledger Layout) */}
      <section className={`${sharedStyles.section} ${sharedStyles.sectionLight}`}>
        <div className={sharedStyles.container}>
          <div className={styles.ledgerWrapper} style={{ marginTop: 0, borderTop: 'none' }}>
            <div className={styles.ledgerRow}>
               <div className={styles.ledgerColLeft}>
                 <div className={`${styles.ledgerTitleHeader} ${styles.glossyGreenCard}`}>
                   <h2 className={styles.ledgerTitle}>Every package includes the four core documents.</h2>
                   <p className={styles.ledgerIntro}>
                     Muslim Will is not only a single will document. Every package includes a complete estate protection set designed to support your family while you are alive and after you pass.
                   </p>
                   <TrackedButton variant="outline" size="lg" className={sharedStyles.invertedOutline} style={{ marginTop: '2rem' }} href="/pricing" eventName="view_pricing_documents_click" eventParams={{ location: 'how_it_works' }}>View Pricing</TrackedButton>
                 </div>
               </div>
               <div className={styles.ledgerColRight}>
                  <div className={styles.ledgerItem}>
                    <div className={styles.ledgerItemNum}>01</div>
                    <div className={styles.ledgerItemContent}>
                      <h4 className={styles.ledgerItemTitle}>Islamic Last Will &amp; Testament</h4>
                      <p className={styles.ledgerItemDesc}>Documents inheritance intentions, executor choices, charitable bequests, final wishes, and related family instructions.</p>
                    </div>
                  </div>
                  <div className={styles.ledgerItem}>
                    <div className={styles.ledgerItemNum}>02</div>
                    <div className={styles.ledgerItemContent}>
                      <h4 className={styles.ledgerItemTitle}>Minor Guardianship Directions</h4>
                      <p className={styles.ledgerItemDesc}>Documents who you would want to care for your minor children if both parents were no longer able to do so.</p>
                    </div>
                  </div>
                  <div className={styles.ledgerItem}>
                    <div className={styles.ledgerItemNum}>03</div>
                    <div className={styles.ledgerItemContent}>
                      <h4 className={styles.ledgerItemTitle}>Power of Attorney for Property</h4>
                      <p className={styles.ledgerItemDesc}>Appoints a trusted person to manage financial, property, banking, and business matters if you become unable to manage them yourself.</p>
                    </div>
                  </div>
                  <div className={styles.ledgerItem}>
                    <div className={styles.ledgerItemNum}>04</div>
                    <div className={styles.ledgerItemContent}>
                      <h4 className={styles.ledgerItemTitle}>Power of Attorney for Personal Care</h4>
                      <p className={styles.ledgerItemDesc}>Appoints a trusted person to make healthcare and personal-care decisions if you cannot communicate or decide for yourself.</p>
                    </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Individual vs Couples Split */}
      <section className={sharedStyles.section}>
        <div className={sharedStyles.container}>
          <div className={sharedStyles.sectionHeader} style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 className={sharedStyles.sectionH2} style={{ textAlign: 'center' }}>Individual and couples planning are handled clearly.</h2>
            <p className={sharedStyles.sectionIntro} style={{ textAlign: 'center' }}>
              Each spouse needs their own will and supporting documents. The couples package simply makes the household process clearer and more cost-effective.
            </p>
          </div>

          <div className={styles.splitPane}>
            <div className={styles.paneHalf}>
              <h3 className={styles.paneTitle}>The Individual Workflow</h3>
              <p className={styles.paneText}>The individual package is for one person and includes one full 4-document estate protection package.</p>
            </div>
            <div className={styles.paneHalf}>
              <h3 className={`${styles.paneTitle} ${styles.green}`}>The Couples Workflow</h3>
              <p className={styles.paneText}>The couples package is for spouses who want to complete their planning together. Each spouse still receives individual documents. Shared family information can be coordinated where appropriate, but spouses should not be presented as receiving one joint will.</p>
              <TrackedButton variant="outline" size="md" href="/pricing" eventName="view_pricing_couples_click" eventParams={{ location: 'how_it_works' }}>View Couples Pricing</TrackedButton>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Timeline and Communication */}
      <section className={`${sharedStyles.section} ${sharedStyles.sectionLight}`}>
        <div className={sharedStyles.container}>
          <div className={sharedStyles.sectionHeader}>
            <h2 className={sharedStyles.sectionH2}>You should know where your file stands.</h2>
            <p className={sharedStyles.sectionIntro}>
              A major part of the Muslim Will process is communication. Families should not wonder whether their file is waiting, under review, ready for briefing, or ready for attestation.
            </p>
          </div>
          
          <div className={styles.commList}>
            <div className={styles.commItem}><span>1. Confirmation</span> after intake submission</div>
            <div className={styles.commItem}><span>2. Status update</span> when scholar review moves</div>
            <div className={styles.commItem}><span>3. Status update</span> when legal review moves</div>
            <div className={styles.commItem}><span>4. Booking prompt</span> for pre-attestation briefing</div>
            <div className={styles.commItem}><span>5. Preparation instructions</span> for final attestation</div>
            <div className={styles.commItem}><span>6. Delivery confirmation</span> when complete</div>
          </div>

          <div style={{ textAlign: 'center', fontSize: '0.95rem', color: 'var(--color-text-muted)', maxWidth: '800px', margin: '0 auto', fontStyle: 'italic' }}>
            Review timing depends on file completeness, complexity, reviewer availability, and scheduling. Most straightforward files move efficiently within our guided workflow.
          </div>
        </div>
      </section>

      {/* 7. Professional Boundaries */}
      <section className={sharedStyles.section}>
        <div className={sharedStyles.container}>
          <div className={sharedStyles.sectionHeader}>
            <h2 className={sharedStyles.sectionH2}>Each layer has a defined role.</h2>
            <p className={sharedStyles.sectionIntro}>
              The strength of Muslim Will is that the process separates platform guidance, Islamic inheritance review, legal workflow support, and final execution coordination. No layer should be presented as replacing another.
            </p>
          </div>

          <div className={styles.policyGrid}>
            <div className={styles.policyItem}>
              <h3 className={styles.policyTitle}>The platform</h3>
              <p className={styles.policyIntro}>Muslim Will guides intake, workflow coordination, document preparation steps, communication, and process clarity.</p>
            </div>
            
            <div className={styles.policyItem}>
              <h3 className={styles.policyTitle}>Qualified scholars</h3>
              <p className={styles.policyIntro}>Qualified Islamic scholars review the inheritance structure for inheritance considerations. This supports faith-conscious planning and does not replace a personal fatwa for complex individual circumstances.</p>
            </div>

            <div className={styles.policyItem}>
              <h3 className={styles.policyTitle}>Ontario legal workflow</h3>
              <p className={styles.policyIntro}>The legal workflow supports document review, execution requirements, and final attestation coordination within the Ontario process.</p>
            </div>

            <div className={styles.policyItem}>
              <h3 className={styles.policyTitle}>Professional Limits</h3>
              <p className={styles.policyIntro}>Muslim Will is not a law firm and does not issue legal advice or fatwas. It provides a structured planning pathway designed to bring the right layers together responsibly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FAQ */}
      <section className={`${sharedStyles.section} ${sharedStyles.sectionLight}`} id="faq">
        <div className={sharedStyles.container} style={{ maxWidth: '800px' }}>
          <div className={sharedStyles.sectionHeader}>
            <h2 className={sharedStyles.sectionH2}>Process questions, answered clearly.</h2>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <Accordion items={faqs.map(faq => ({
              question: faq.question,
              answer: <p style={{ margin: 0 }}>{faq.answer}</p>
            }))} />
          </div>
        </div>
      </section>

      {/* 9. Final CTA */}
      <section className={`${sharedStyles.section} ${sharedStyles.sectionDark}`}>
        <div className={sharedStyles.container}>
          <div className={sharedStyles.ctaCentered}>
            <h2 className={sharedStyles.sectionH2} style={{ color: 'white' }}>A clear process makes it easier to begin.</h2>
            <p className={sharedStyles.sectionIntro} style={{ color: 'rgba(255,255,255,0.8)' }}>
              From guided intake to final execution, Muslim Will helps your family move forward with clarity, care, and confidence.
            </p>
            <div style={{ marginBottom: '1.5rem', fontSize: '1.125rem', color: 'rgba(255,255,255,0.9)', textAlign: 'center' }}>
              Know the next step, then take it.
            </div>
            <div className={sharedStyles.ctaButtonGroup}>
              <TrackedButton variant="primary" size="lg" eventName="start_will_footer_click" eventParams={{ location: 'how_it_works' }}>Start Your Will</TrackedButton>
              <TrackedButton variant="outline" size="lg" className={sharedStyles.invertedOutline} href="/pricing" eventName="view_pricing_footer_click" eventParams={{ location: 'how_it_works' }}>View Pricing</TrackedButton>
            </div>
            <p style={{ marginTop: '2rem', fontSize: '0.9rem', color: 'var(--color-gold)' }}>Your family comes first. Your planning can begin clearly.</p>
          </div>
        </div>
      </section>
      
    </main>
  );
}
