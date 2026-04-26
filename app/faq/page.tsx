import React from 'react';
import type { Metadata } from 'next';
import sharedStyles from '../page.module.css';
import styles from './faq.module.css';
import { TrackedButton } from '@/components/analytics/TrackedButton';
import { Accordion } from '@/components/ui/Accordion';

export const metadata: Metadata = {
  title: 'Islamic Will FAQ Canada | Common Questions Answered | Muslim Will',
  description: 'Get clear answers to common questions about Islamic wills in Canada, guardianship, charitable bequests, legal workflow, and Muslim Will\'s role.',
  openGraph: {
    title: 'Muslim Will FAQ | Common Questions Answered',
    description: 'Get clear answers to common questions about Islamic wills in Canada, guardianship, charitable bequests, legal workflow, and Muslim Will\'s role.',
  }
};

export default function FAQPage() {
  
  const legalFaqs = [
    {
      question: "Is an Islamic will legally valid in Ontario?",
      answer: "Yes, provided it is properly signed and witnessed according to provincial requirements. Islamic inheritance mandates do not inherently violate Canadian law. The challenge is usually ensuring the document is properly drafted so that a Canadian court clearly understands the executor's instructions. Muslim Will utilizes an Ontario legal workflow to ensure your intentions are structurally sound."
    },
    {
      question: "Does this work outside Ontario?",
      answer: "Currently, our platform is optimized for Ontario residents. Each province in Canada has different requirements for substitute decision-makers (Powers of Attorney) and witnessing rules. We strictly operate where our legal workflow is fully supported."
    },
    {
      question: "What happens if a Muslim dies without a will in Canada?",
      answer: "If you die without a will (intestate), the province will distribute your assets according to a rigid statutory formula. This formula rarely aligns with Islamic inheritance mandates. Additionally, the court will appoint an executor and guardian for your minor children, rather than relying on your chosen preferences."
    }
  ];

  const familyFaqs = [
    {
      question: "How do I protect my minor children in a Muslim will?",
      answer: "A complete estate plan must include Minor Guardianship Directions. This is a separate instruction within your planning package that explicitly names who you wish to take care of your minor children if both parents pass away, ensuring the court is guided by your deeply held preferences."
    },
    {
      question: "Do my spouse and I need separate wills?",
      answer: "Yes. In Canada, there is no such thing as a 'joint will'. Each spouse must have their own individual Last Will and Testament, as well as their own Powers of Attorney. Our Couples Package helps you coordinate shared family information but ultimately generates comprehensive, individual documents for both of you."
    }
  ];

  const charityFaqs = [
    {
      question: "Can I include charity in my Islamic will?",
      answer: "Yes. Islamic law allows you to allocate up to one-third (33.3%) of your estate to individuals who do not inherit automatically or to charitable causes (Sadaqah Jariyah), via a 'Wasiyyah' (permissible bequest)."
    },
    {
      question: "Is the charity bequest a fixed dollar amount?",
      answer: "It is structurally better to assign a percentage of your estate (up to the 1/3 limit) rather than a fixed dollar amount. This ensures that the charity receives a fair proportion regardless of whether your estate's value grows or shrinks over your lifetime."
    }
  ];

  const processFaqs = [
    {
      question: "How does an Islamic will work in Canada?",
      answer: "You cannot simply write 'distribute my wealth according to Shariah' on a piece of paper. Canadian courts require specific instructions. Making an Islamic will involves calculating the required inheritance shares and securely structuring those directives within a legally recognized Last Will & Testament format."
    },
    {
      question: "Can I start now and finish later?",
      answer: "Yes. Once you begin your intake, you can save your progress and return to it later. The review and legal workflow will not begin until your intake is fully submitted."
    },
    {
      question: "What happens during the final Zoom attestation?",
      answer: "Ontario law permits documents to be commissioned and witnessed remotely. You and your required witnesses will join a guided video session hosted by a legal professional/licensee to properly sign, initial, and witness the documents step-by-step."
    }
  ];

  const platformFaqs = [
    {
      question: "Is Muslim Will a law firm?",
      answer: "No. Muslim Will is a technology platform designed to streamline estate planning for Muslim families. We provide the workflow, coordinate Islamic scholar review, and utilize an independent Ontario legal workflow to review and arrange for the execution of your documents. We do not provide direct legal advice."
    },
    {
      question: "Do you issue personal fatwas?",
      answer: "No. Our Islamic scholar review ensures that the standard inheritance structure conforms to general Islamic inheritance considerations. For highly complex assets, multi-generational trusts, or severe family disputes, you should seek a direct organizational fatwa and specialized legal counsel."
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
                 Frequently Asked Questions
               </div>
             </div>
             
             <h1 className={`${sharedStyles.heroH1} ${sharedStyles.fadeUp} ${sharedStyles.delay1}`}>
               Common questions, answered clearly.
             </h1>
             
             <p className={`${sharedStyles.heroCopy} ${sharedStyles.fadeUp} ${sharedStyles.delay2}`}>
               Estate planning involves both legal and religious requirements. It is normal to have questions before you begin. Explore our most common inquiries regarding validity, process, and family protection.
             </p>
             
             <div className={`${sharedStyles.heroActions} ${sharedStyles.fadeUp} ${sharedStyles.delay3}`} style={{ marginBottom: '1.5rem' }}>
               <TrackedButton variant="primary" size="lg" eventName="start_will_hero_click" eventParams={{ location: 'faq' }}>Start Your Will</TrackedButton>
             </div>
          </div>
        </div>
      </section>

      {/* 2. Compartmentalized FAQ Grid */}
      <section className={`${sharedStyles.section} ${sharedStyles.sectionLight}`}>
        <div className={sharedStyles.container}>
          <div className={styles.faqContainer}>
            
            {/* Legal Validity Category */}
            <div className={styles.faqCategoryGroup}>
              <div className={styles.faqCategoryHeader}>
                <div className={styles.stickyHeader}>
                  <h2 className={styles.faqCategoryTitle}>Legal Validity</h2>
                  <p className={styles.faqCategoryDesc}>Understanding how an Islamic will operates within the Canadian legal system.</p>
                </div>
              </div>
              <div className={styles.faqList}>
                <Accordion items={legalFaqs.map(faq => ({ question: faq.question, answer: <p style={{ margin: 0 }}>{faq.answer}</p> }))} />
              </div>
            </div>

            {/* Family & Guardianship Category */}
            <div className={styles.faqCategoryGroup}>
              <div className={styles.faqCategoryHeader}>
                <div className={styles.stickyHeader}>
                  <h2 className={styles.faqCategoryTitle}>Family & Guardianship</h2>
                  <p className={styles.faqCategoryDesc}>Protecting your minor children and coordinating with your spouse.</p>
                </div>
              </div>
              <div className={styles.faqList}>
                <Accordion items={familyFaqs.map(faq => ({ question: faq.question, answer: <p style={{ margin: 0 }}>{faq.answer}</p> }))} />
              </div>
            </div>

            {/* Charity & Bequests */}
            <div className={styles.faqCategoryGroup}>
              <div className={styles.faqCategoryHeader}>
                <div className={styles.stickyHeader}>
                  <h2 className={styles.faqCategoryTitle}>Charity & Bequests</h2>
                  <p className={styles.faqCategoryDesc}>Funding Sadaqah Jariyah and navigating the permissible bequest rule.</p>
                </div>
              </div>
              <div className={styles.faqList}>
                <Accordion items={charityFaqs.map(faq => ({ question: faq.question, answer: <p style={{ margin: 0 }}>{faq.answer}</p> }))} />
              </div>
            </div>

            {/* Process & Timing */}
            <div className={styles.faqCategoryGroup}>
              <div className={styles.faqCategoryHeader}>
                <div className={styles.stickyHeader}>
                  <h2 className={styles.faqCategoryTitle}>Process & Timing</h2>
                  <p className={styles.faqCategoryDesc}>What to expect during intake, review, and the final signing session.</p>
                </div>
              </div>
              <div className={styles.faqList}>
                <Accordion items={processFaqs.map(faq => ({ question: faq.question, answer: <p style={{ margin: 0 }}>{faq.answer}</p> }))} />
              </div>
            </div>

            {/* Platform Boundaries */}
            <div className={styles.faqCategoryGroup}>
              <div className={styles.faqCategoryHeader}>
                <div className={styles.stickyHeader}>
                  <h2 className={styles.faqCategoryTitle}>Platform Boundaries</h2>
                  <p className={styles.faqCategoryDesc}>Understanding the role of Muslim Will as a technology and workflow platform.</p>
                </div>
              </div>
              <div className={styles.faqList}>
                <Accordion items={platformFaqs.map(faq => ({ question: faq.question, answer: <p style={{ margin: 0 }}>{faq.answer}</p> }))} />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Final Massive CTA */}
      <section className={`${sharedStyles.section} ${sharedStyles.sectionDark}`} style={{ padding: '6rem 0' }}>
        <div className={sharedStyles.container}>
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ fontSize: '3rem', fontFamily: 'var(--font-heading)', color: 'var(--color-gold)', marginBottom: '1.5rem', lineHeight: '1.1', fontWeight: 700 }}>
              Have the answers you need. Start with confidence.
            </h2>
            <p style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.9)', marginBottom: '1rem', lineHeight: '1.6' }}>
              When the process is clear, it becomes easier to protect your family and document your intentions properly.
            </p>
            <div style={{ fontSize: '1.125rem', color: 'rgba(255,255,255,0.8)', marginBottom: '2rem' }}>
              Clarity should make action easier.
            </div>
            <div className={sharedStyles.ctaButtonGroup} style={{ justifyContent: 'center' }}>
              <TrackedButton variant="primary" size="lg" eventName="start_will_footer_click" eventParams={{ location: 'faq' }}>Start Your Will</TrackedButton>
              <TrackedButton variant="outline" size="lg" className={sharedStyles.invertedOutline} href="/pricing" eventName="view_pricing_footer_click" eventParams={{ location: 'faq' }}>View Pricing</TrackedButton>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
