import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardTitle } from '@/components/ui/Card';
import { Accordion } from '@/components/ui/Accordion';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.main}>
      {/* 1. Hero Section */}
      <section className={`${styles.section} ${styles.heroSection}`}>
        <div className={`${styles.container} ${styles.heroContent}`}>
          <div className={styles.heroTextWrapper}>
             <div className={`${styles.heroEyebrow} ${styles.fadeUp}`}>Islamic Will Planning For Muslim Families In Canada</div>
             <h1 className={`${styles.heroH1} ${styles.fadeUp} ${styles.delay1}`}>
               Protect your family with a will prepared with legal care and Islamic clarity.
             </h1>
             <p className={`${styles.heroCopy} ${styles.fadeUp} ${styles.delay2}`}>
               Muslim Will helps you move from intention to a properly prepared and executed will through a guided pathway for Muslim families in Canada, with Ontario as the clearest current legal workflow and Islamic inheritance principles built into the planning structure.
             </p>
             <div className={`${styles.heroTrustLine} ${styles.fadeUp} ${styles.delay3}`}>
               Built for Muslim families in Canada, with Ontario as the clearest current legal workflow.
             </div>
             
            <div className={`${styles.heroActions} ${styles.fadeUp} ${styles.delay4}`}>
               <Button size="lg" variant="primary" className={styles.heroPrimaryBtn}>Start Your Will</Button>
               <Button size="lg" variant="outline" className={styles.invertedOutline}>See How It Works</Button>
             </div>
             
             <div className={`${styles.heroTrustPoints} ${styles.fadeUp} ${styles.delay5}`}>
               <span className={styles.heroTrustPoint}>Canada-first</span>
               <span className={styles.heroTrustPoint}>Lawyer-reviewed workflow</span>
               <span className={styles.heroTrustPoint}>Faith-conscious planning</span>
               <span className={styles.heroTrustPoint}>Confidential process</span>
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
                <span>Structured with Islamic inheritance logic</span>
              </div>
              
              <div className={styles.trustBarItem}>
                <div className={styles.trustIconWrapper}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>
                </div>
                <span>Reviewed within a professional legal workflow</span>
              </div>
              
              <div className={styles.trustBarItem}>
                <div className={styles.trustIconWrapper}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <span>Canada-first pathway with Ontario as the strongest current legal anchor</span>
              </div>
              
              <div className={styles.trustBarItem}>
                <div className={styles.trustIconWrapper}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                </div>
                <span>Built for family clarity, guardianship, and bequests</span>
              </div>

            </div>
            <div className={styles.trustBarSupport}>
              "A will is a trust we fulfill before Allah, and a mercy we leave for our families after us."
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
              The concern is usually not whether a will matters. It is whether the process feels clear enough to begin. When a will is missing or out of date, important decisions around family protection, guardianship, inheritance, and charitable intentions can be left uncertain.
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
                <CardTitle>Reduce legal and family uncertainty</CardTitle>
                <p>A clearer will-planning pathway helps reduce confusion, avoid preventable disputes, and protect what should not be left vague.</p>
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

      {/* 4. How It Works */}
      <section className={`${styles.section} ${styles.sectionLight}`}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionH2}>A guided pathway from family details to final execution.</h2>
            <p className={styles.sectionIntro}>
               Muslim Will is designed to make a sensitive process easier to begin without blurring professional boundaries.
            </p>
          </div>
          
          <div className={styles.grid4}>
            <div className={styles.stepCard}>
              <div className={styles.stepNumber}>01</div>
              <CardTitle>Provide your details</CardTitle>
              <p>Enter family, asset, guardian, and bequest information through a guided intake process built for clarity.</p>
            </div>
            
            <div className={styles.stepCard}>
              <div className={styles.stepNumber}>02</div>
              <CardTitle>Inheritance structure is organized</CardTitle>
              <p>Your information is organized around Islamic inheritance logic so the planning pathway begins with the right foundation.</p>
            </div>
            
            <div className={styles.stepCard}>
              <div className={styles.stepNumber}>03</div>
              <CardTitle>Legal review and document preparation</CardTitle>
              <p>The will moves through an independent legal workflow designed for Canadian users, with Ontario as the clearest current framework for review and execution considerations.</p>
            </div>
            
            <div className={styles.stepCard}>
              <div className={styles.stepNumber}>04</div>
              <CardTitle>Guided review and completion</CardTitle>
              <p>You review the document, confirm your intentions, and complete signing and witnessing properly.</p>
            </div>
          </div>
          
          <div className={styles.legalNoteLayout}>
            Note: Legal validity depends on accurate information, proper review, and correct signing and witnessing.
          </div>
        </div>
      </section>

      {/* 5. Legal and Islamic Accountability */}
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
                <p>Inheritance logic is organized with attention to Islamic principles so the pathway reflects a faith-conscious starting point.</p>
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

      {/* 6. Charitable Legacy Preview */}
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
                <Button href="/charitable-legacy" variant="primary" size="lg">Explore Charitable Legacy</Button>
              </div>
            </div>
            {/* The Image Side */}
            <div className={styles.legacyImage}></div>
          </div>
        </div>
      </section>

      {/* 7. Meet The Experts */}
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

      {/* 8. FAQ Preview */}
      <section className={`${styles.section} ${styles.sectionLight}`}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionH2}>Common questions, answered clearly.</h2>
          </div>
          
          <div className={styles.faqContainer}>
            <Accordion items={[
              {
                question: "Is an Islamic will legally valid in Ontario?",
                answer: "An Islamic will can be recognized under Ontario law when it is properly prepared, reviewed, signed, and witnessed according to applicable legal requirements. Muslim Will is designed to support that process with a structured legal workflow."
              },
              {
                question: "How does an Islamic will work in Canada?",
                answer: "An Islamic will in Canada must work within provincial legal rules while reflecting the inheritance intentions of the person creating it. That means the legal structure and the Islamic inheritance structure must be approached together, not separately."
              },
              {
                question: "Can I include charity in my Islamic will?",
                answer: "Yes. Charitable bequests can be included as part of a will, and Muslim Will helps families think through that intention clearly within the permissible bequest framework."
              },
              {
                question: "How do I protect my minor children in a Muslim will?",
                answer: "A will can help parents document guardianship preferences and related family instructions before a crisis. This is one of the most important reasons many Muslim parents begin the process."
              },
              {
                question: "What happens if a Muslim dies without a will in Canada?",
                answer: "If someone dies without a will, provincial intestacy rules may determine how the estate is handled. That can leave families without clear documentation for guardianship, inheritance intentions, or charitable wishes."
              },
              {
                question: "Is Muslim Will a law firm?",
                answer: "No. Muslim Will is a structured technology platform and workflow system. It is not a law firm and does not replace legal advice or religious rulings."
              },
              {
                question: "Does this only work in Ontario?",
                answer: "No. The Muslim Will platform speaks to Muslim families in Canada more broadly. Ontario is used as the clearest current legal reference point, while deeper regional handling will expand over time."
              },
              {
                question: "Will Muslim Will expand to the United States?",
                answer: "That is a future direction. When U.S. expansion happens, it will be handled through dedicated U.S. and state-aware content rather than broad generic claims, because estate law in the United States is shaped by state-level rules."
              }
            ]} />
          </div>
          
          <div className={styles.faqButtonContainer}>
            <Button variant="primary" size="lg">View Full FAQ</Button>
          </div>
        </div>
      </section>

      {/* 9. Final CTA */}
      <section className={`${styles.section} ${styles.ctaSectionPadding}`}>
        <div className={styles.container}>
          <div className={styles.ctaBox}>
            <h2>A clearer pathway makes responsible planning easier to begin.</h2>
            <p className={styles.ctaText}>
              If you have been meaning to prepare your will but the process has felt unclear, this is the place to start. Protect your family, document your intentions, and move forward with greater confidence.
            </p>
            <div className={styles.ctaActions}>
              <Button size="lg" className={styles.ctaButtonPrimary}>Start Your Will</Button>
              <Button size="lg" variant="outlineLight" className={styles.ctaButtonOutline}>Book a Call</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
