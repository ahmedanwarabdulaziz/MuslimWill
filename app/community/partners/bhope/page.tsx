import type { Metadata } from 'next';
import { TrustBar } from '@/components/ui/TrustBar';
import Link from 'next/link';
import { TrackedButton } from '@/components/analytics/TrackedButton';
import { InquiryForm } from '@/components/forms/InquiryForm';
import styles from './page.module.css';

const siteUrl = 'https://themuslimwill.com';
const pageTitle = 'BHOPE × The Muslim Will | Build Your Islamic Legacy with Building Hope International';
const pageDescription = 'A co-branded Islamic will planning partnership between The Muslim Will and Building Hope International (BHOPE). Plan a complete, Shariah-compliant will and include BHOPE’s medical and educational aid programmes in your legacy.';

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: `${siteUrl}/community/partners/bhope` },
};

export default function BhopePartnerPage() {
  return (
    <div className={styles.main}>

      {/* ── HERO SECTION ── */}
      <section className={styles.heroSection}>
        <div className={styles.heroOverlay} />
        <div className={styles.container}>
          <div className={styles.heroContent}>

            <div className={styles.cobrand}>
              <span className={styles.cobrandName}>
                The Muslim Will
                <span className={styles.cobrandSub}>Islamic Estate Planning</span>
              </span>
              <span className={styles.cobrandX}>&times;</span>
              <img src="https://irp.cdn-website.com/45d9c0f0/dms3rep/multi/BHope+Logo+Main.svg" alt="Building Hope International" className={styles.bhopeLogo} />
            </div>

            <div className={styles.heroEyebrow}>In Partnership · Legacy Giving</div>
            <h1 className={styles.heroH1}>
              A complete Islamic will — Building Hope International's gift to their community.
            </h1>
            <p className={styles.heroSub}>
              BHope has reserved sponsored seats for their members — covering the cost of a complete Islamic will and private Vault through The Muslim Will. As a BHope member or supporter, yours may be free.
            </p>
            <div className={styles.heroActions}>
              <TrackedButton
                href="https://www.bhope.ca/contact-us"
                className={styles.ctaButtonGoldFull}
                eventName="bhope_start_click"
                eventParams={{ location: 'bhope_hero' }}
              >
                Get Your Code From BHope &rarr;
              </TrackedButton>
              <TrackedButton
                href="https://app.themuslimwill.com/Account/Login"
                className={styles.ctaButtonOutline}
                eventName="bhope_learn_click"
                eventParams={{ location: 'bhope_hero' }}
              >
                Already have a code? Start here &rarr;
              </TrackedButton>
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST ANCHORS ── */}
      <TrustBar items={[
        'Complete Islamic will — reviewed for Faraid compliance',
        'Family provided for first, always',
        'Optional bequest to BHOPE within the Islamic 1/3',
        'BHOPE is a registered Canadian charity — official tax receipts',
        'Secure digital Vault for your documents',
      ]} />

      {/* ── SPONSORED SEATS ── */}
      <section className={`${styles.section} ${styles.sponsoredSection}`}>
        <div className={styles.container}>
          <div className={styles.sectionLabel}>What BHope Has Reserved For You</div>
          <h2 className={styles.sectionH2}>Two options. Both covered by BHope.</h2>
          <p className={styles.sectionIntro} style={{ marginBottom: '3rem' }}>
            Building Hope International has purchased sponsored seats across both our subscription plans. Here is what is available to their community.
          </p>

          <div className={styles.sponsoredGrid}>
            <div className={styles.sponsoredCard}>
              <div className={styles.sponsoredBadge}>✓ Sponsored by BHope</div>
              <h3 className={styles.sponsoredTitle}>The Bridge</h3>
              <div className={styles.sponsoredPrice}><span className={styles.strikethrough}>$7.99/month</span> <strong>Free or discounted — see BHope for your code</strong></div>
              <ul className={styles.sponsoredIncludes}>
                <li>Complete Islamic Will & Testament (Faraid-based, Ontario-compliant)</li>
                <li>Muslim Will Vault — all 4 branches (Obligations, Estate Inventory, Sealed Disclosures, Final Words)</li>
                <li>Unlimited updates</li>
                <li>Executor release process</li>
              </ul>
              <div className={styles.sponsoredNote}>Limited sponsored seats available — contact BHope to check your eligibility</div>
              <TrackedButton href="https://www.bhope.ca/contact-us" className={styles.ctaButtonGoldFull} eventName="bhope_bridge_click" eventParams={{ location: 'sponsored_cards' }}>
                Contact BHope for Your Code &rarr;
              </TrackedButton>
            </div>

            <div className={styles.sponsoredCard}>
              <div className={styles.sponsoredBadge}>✓ Sponsored by BHope</div>
              <h3 className={styles.sponsoredTitle}>Full Package</h3>
              <div className={styles.sponsoredPrice}><span className={styles.strikethrough}>$350</span> <strong>Free or discounted — see BHope for your code</strong></div>
              <ul className={styles.sponsoredIncludes}>
                <li>Everything in The Bridge</li>
                <li>Both Powers of Attorney (Personal Care + Property)</li>
                <li>Individual Scholar Review</li>
                <li>Admin & Legal Review</li>
                <li>Digital Attestation</li>
              </ul>
              <div className={styles.sponsoredNote}>30 Full Package spots reserved — limited availability</div>
              <TrackedButton href="https://www.bhope.ca/contact-us" className={styles.ctaButtonGoldFull} eventName="bhope_full_package_click" eventParams={{ location: 'sponsored_cards' }}>
                Contact BHope for Your Code &rarr;
              </TrackedButton>
            </div>
          </div>

          <div className={styles.claimSteps}>
            <div className={styles.claimStep}><strong>Step 1</strong> — Contact BHope at info@bhope.ca or +1 (647) 818-8086 to receive your personal discount code.</div>
            <div className={styles.claimStep}><strong>Step 2</strong> — Register at Muslim Will and apply your code at checkout. Your sponsored seat will be activated.</div>
            <div className={styles.claimStep}><strong>Step 3</strong> — Complete your will. When prompted, choose to include Building Hope International as your Sadaqah Jariyah beneficiary.</div>
          </div>
        </div>
      </section>

      {/* ── ABOUT BHOPE ── */}
      <section id="learn-more" className={styles.section + ' ' + styles.aboutSection}>
        <div className={styles.container}>
          <div className={styles.aboutLayout}>
            <div className={styles.aboutBody}>
              <div className={styles.sectionLabel}>About Our Partner</div>
              <h2 className={styles.sectionH2}>Building Hope International</h2>
              <p>
                Building Hope International (BHOPE) is a humanitarian organisation dedicated to transforming lives by addressing critical global needs. It supports programmes that provide medical aid to individuals without access to adequate healthcare, and educational aid to students who lack the means to pursue their studies.
              </p>
              <p>
                Guided by compassion, equality, and integrity, BHOPE channels the majority of every contribution directly to its programmes &mdash; helping families, students, and communities build a future of hope and opportunity.
              </p>
              <div className={styles.charityNote}>
                Building Hope International is a registered Canadian charity (CRA No. 799140561 RR 0001) and can issue official donation receipts for income tax purposes.
              </div>
            </div>
            <div className={styles.aboutImage} role="img" aria-label="Building Hope International aid programmes" />
          </div>
        </div>
      </section>

      {/* ── IMPACT / WHAT YOUR LEGACY SUPPORTS ── */}
      <section className={styles.section + ' ' + styles.impactSection}>
        <div className={styles.impactOverlay} />
        <div className={styles.container}>
          <div className={styles.sectionHeaderCenter}>
            <h2 className={styles.sectionH2}>What your legacy supports</h2>
            <p className={styles.sectionIntro}>
              A bequest to BHOPE through your Islamic will keeps giving on your behalf &mdash; a Sadaqah Jariyah that continues to earn reward after your lifetime.
            </p>
          </div>

          <div className={styles.impactGrid}>
            <div className={styles.impactCard}>
              <div className={styles.impactIconWrapper}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7Z"/>
                </svg>
              </div>
              <h3 className={styles.impactTitle}>Medical Aid</h3>
              <p className={styles.impactDesc}>
                Life-saving medical care for individuals and communities who lack access to adequate healthcare.
              </p>
            </div>

            <div className={styles.impactCard}>
              <div className={styles.impactIconWrapper}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>
                </svg>
              </div>
              <h3 className={styles.impactTitle}>Educational Aid</h3>
              <p className={styles.impactDesc}>
                The opportunity to learn, grow, and succeed for students who cannot afford the cost of schooling.
              </p>
            </div>

            <div className={styles.impactCard}>
              <div className={styles.impactIconWrapper}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/>
                </svg>
              </div>
              <h3 className={styles.impactTitle}>Emergency Response</h3>
              <p className={styles.impactDesc}>
                Immediate relief when disasters strike, so that aid reaches those affected without delay.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY BHOPE DID THIS ── */}
      <section className={`${styles.section} ${styles.editorialSection}`}>
        <div className={styles.containerNarrow}>
          <div className={styles.sectionLabel}>From Building Hope International</div>
          <h2 className={styles.editorialH2}>We serve people in need around the world. We also serve the community closest to us.</h2>
          <p className={styles.editorialBody}>
            For years, Building Hope International has worked to ensure that people without access to healthcare or education are not forgotten. We believe the same should be true for our own community — that no Muslim should be without a will because of the cost.
          </p>
          <p className={styles.editorialBody}>
            By partnering with The Muslim Will, we have ensured that members of our community can fulfil their Islamic obligation without financial barriers. Some seats are entirely free. Some are offered at a discount. Because we believe in removing every obstacle to doing what is right. And for those who choose to include BHope in their lasting legacy, the work continues long after any of us are gone. That is what we are building — hope that outlasts us all.
          </p>
          <div className={styles.editorialAttribution}>
            Building Hope International · Registered Canadian Charity 799140561 RR 0001
          </div>
          <Link href="https://www.bhope.ca" className={styles.editorialLink}>
            Visit bhope.ca &rarr;
          </Link>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className={styles.section + ' ' + styles.stepsSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeaderCenter}>
            <h2 className={styles.sectionH2}>How the partnership works</h2>
            <p className={styles.sectionIntro}>
              Your will is prepared the right way &mdash; Islamically and legally &mdash; with the option to include BHOPE handled naturally inside the process.
            </p>
          </div>

          <div className={styles.stepsGrid}>
            <div className={styles.stepCard}>
              <div className={styles.stepNum}>1</div>
              <h3 className={styles.stepTitle}>Plan your Islamic will</h3>
              <p className={styles.stepDesc}>
                A guided application walks you through your estate. Fixed shares for your heirs are calculated according to Faraid &mdash; your family is always provided for first.
              </p>
            </div>
            <div className={styles.stepCard}>
              <div className={styles.stepNum}>2</div>
              <h3 className={styles.stepTitle}>Add BHOPE within the 1/3</h3>
              <p className={styles.stepDesc}>
                Islam permits up to one third of your estate as a bequest (Wasiyyah). You can dedicate part of that third to Building Hope International &mdash; presented as a natural step, never a separate ask.
              </p>
            </div>
            <div className={styles.stepCard}>
              <div className={styles.stepNum}>3</div>
              <h3 className={styles.stepTitle}>Review &amp; finalise</h3>
              <p className={styles.stepDesc}>
                We handle the inheritance review, legal document preparation, and attestation support, so your will is valid both Islamically and under Canadian law.
              </p>
            </div>
            <div className={styles.stepCard}>
              <div className={styles.stepNum}>4</div>
              <h3 className={styles.stepTitle}>Secure it in your Vault</h3>
              <p className={styles.stepDesc}>
                Your completed will and supporting documents are stored in a private digital Vault, released to your executor when the time comes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY NOW ── */}
      <section className={styles.section + ' ' + styles.whyNowSection}>
        <div className={styles.whyNowOverlay} />
        <div className={styles.container}>
          <div className={styles.whyNowContent}>
            <h2 className={styles.whyNowH2}>A will you are obligated to write &mdash; and a legacy you choose to leave</h2>
            <div className={styles.whyNowBar} />
            <p className={styles.whyNowPara}>
              The Prophet &#65018; said it is not permissible for a Muslim who has something to bequeath to sleep two nights without a written will. Yet most Muslim families across Canada still have none &mdash; leaving heirs, debts, and guardianship undocumented.
            </p>
            <p className={styles.whyNowPara}>
              This partnership makes the obligation simple to fulfil, and turns it into something more: a chance to let your giving continue. Through Building Hope International, the help you extend in this life can keep reaching those in need long after it.
            </p>
            <TrackedButton
              href="https://www.bhope.ca/contact-us"
              className={styles.whyNowCta}
              eventName="bhope_whynow_start_click"
              eventParams={{ location: 'bhope_why_now' }}
            >
              Get Your Code From BHope &rarr;
            </TrackedButton>
          </div>
        </div>
      </section>

      {/* ── FOR OTHER CHARITIES ── */}
      <section className={`${styles.section} ${styles.charitySection}`}>
        <div className={styles.container}>
          <div className={styles.sectionHeaderCenter}>
            <div className={styles.sectionLabel}>For Charities & Islamic Organisations</div>
            <h2 className={styles.sectionH2}>This is what a Muslim Will charity partnership looks like.</h2>
            <p className={styles.sectionIntro}>
              Building Hope International is one of our founding charity partners. Their members receive free and discounted Islamic wills. BHope's mission is featured as a suggested legacy beneficiary in every member will.
            </p>
            <p className={styles.sectionIntro} style={{ marginTop: '1rem' }}>
              This is the model — and it is open to any registered Canadian charity or Islamic organisation that wants to invest in their community's spiritual and estate planning.
            </p>
          </div>

          <div className={styles.charityGrid}>
            <div className={styles.charityCol}>
              <h3>What your members get:</h3>
              <ul className={styles.charityList}>
                <li>Free or discounted Islamic will and private Vault</li>
                <li>Scholar-reviewed, Ontario-compliant document</li>
                <li>A complete Islamic estate plan — fulfilled</li>
              </ul>
            </div>
            <div className={styles.charityCol}>
              <h3>What your organisation gets:</h3>
              <ul className={styles.charityList}>
                <li>Named as a suggested Sadaqah Jariyah beneficiary in every member's will</li>
                <li>Long-term legacy donation stream built into member estates</li>
                <li>A meaningful benefit that deepens member loyalty</li>
                <li>A co-branded partner page — like this one</li>
              </ul>
            </div>
          </div>

          <div className={styles.charityActions} style={{ justifyContent: 'center' }}>
            <TrackedButton href="/community/charity-partnership" className={styles.ctaButtonGoldFull} eventName="bhope_charity_model_click" eventParams={{ location: 'bhope_charity' }}>
              See How Charity Partnerships Work &rarr;
            </TrackedButton>
            <TrackedButton href="/community/request-demo" className={styles.ctaButtonOutline} eventName="bhope_charity_demo_click" eventParams={{ location: 'bhope_charity' }}>
              Request a Conversation &rarr;
            </TrackedButton>
          </div>
        </div>
      </section>

      {/* ── FORM SECTION ── */}
      <section id="contact" className={styles.formSection}>
        <div className={styles.container}>
          <div className={styles.formLayout}>
            <div className={styles.formIntro}>
              <h2 className={styles.formH2}>Questions about the BHOPE partnership?</h2>
              <p className={styles.formBody}>
                Whether you are a supporter of Building Hope International exploring how to include it in your will, or an organisation interested in a partnership of your own, our team is here to help.
              </p>
              <p className={styles.formMicrocopy}>
                Send your details below and a member of The Muslim Will team will follow up &mdash; by call, visit, or a presentation for your community.
              </p>

              <div className={styles.formLinks}>
                <div className={styles.formLinksLabel}>Related pages</div>
                <Link href="/charitable-legacy" className={styles.formLink}>Charitable Legacy &rarr;</Link>
                <Link href="/community/charity-partnership" className={styles.formLink}>Charity Partnership Programme &rarr;</Link>
                <Link href="/community" className={styles.formLink}>Community &amp; Giving &rarr;</Link>
              </div>
            </div>

            <div className={styles.formWrapper}>
              <InquiryForm variant="partnership" />
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
