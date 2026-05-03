import type { Metadata } from 'next';
import { LegalPage } from '@/app/_legal/LegalPage';
import styles from '@/app/_legal/legal.module.css';

const siteUrl = 'https://themuslimwill.com';

export const metadata: Metadata = {
  title: 'Disclaimer | Muslim Will',
  description:
    'Read important disclaimers about the scope of Muslim Will, legal advice, religious advice, and jurisdictional limits.',
  alternates: {
    canonical: `${siteUrl}/disclaimer`,
  },
  openGraph: {
    title: 'Disclaimer | Muslim Will',
    description:
      'Read important disclaimers about the scope of Muslim Will, legal advice, religious advice, and jurisdictional limits.',
    url: `${siteUrl}/disclaimer`,
  },
};

export default function DisclaimerPage() {
  const sections = [
    {
      id: 'general',
      title: '1. General Information Only',
      content: (
        <>
          <p>
            The Muslim Will website, marketing pages, articles, FAQs, guides, examples, and
            related communications are provided for general informational purposes only. They are
            not a substitute for individualized professional advice.
          </p>
          <p>
            Reading this website, creating an account, booking a call, or communicating with our
            team does not by itself create a solicitor-client, attorney-client, fiduciary, or
            scholar-client relationship.
          </p>
        </>
      ),
    },
    {
      id: 'not-law-firm',
      title: '2. Muslim Will Is Not a Law Firm',
      content: (
        <>
          <p>
            Muslim Will is a structured technology and workflow platform operated by Patriva
            Technology Inc. Muslim Will is not itself a law firm and does not hold itself out as
            providing direct legal representation through the website alone.
          </p>
          <p>
            Any legal work, legal review, legal witnessing, or execution-related professional
            steps must be understood within the role of the independent licensed professional or
            legal workflow actually involved in the file.
          </p>
        </>
      ),
    },
    {
      id: 'no-legal-religious-tax',
      title: '3. No Personalized Legal, Religious, Tax, or Investment Advice',
      content: (
        <>
          <p>Unless expressly stated in a separate direct professional engagement, Muslim Will does not provide:</p>
          <ul>
            <li>Personalized legal advice or legal representation.</li>
            <li>Binding religious rulings, fatwas, or individualized religious opinions.</li>
            <li>Tax, accounting, securities, or investment advice.</li>
            <li>Litigation, dispute management, probate litigation, or court strategy.</li>
          </ul>
          <p>
            If your situation involves complexity, conflict, disability concerns, international
            assets, trusts, tax planning, corporate structures, blended families, or disputed
            inheritance issues, you should obtain direct qualified advice.
          </p>
        </>
      ),
    },
    {
      id: 'jurisdiction',
      title: '4. Jurisdictional Limitations Matter',
      content: (
        <>
          <p>
            Wills, powers of attorney, probate administration, witness rules, and substitute
            decision-making laws vary by province, state, and country. The current Muslim Will
            public positioning is Canada-first, with Ontario as the clearest current legal
            workflow.
          </p>
          <p>
            Nothing on this website should be interpreted as a statement that Muslim Will offers
            fully supported legal service in every Canadian province, every U.S. state, or every
            jurisdiction where a user may reside or hold assets.
          </p>
        </>
      ),
    },
    {
      id: 'no-guarantee',
      title: '5. No Guarantee of Legal or Religious Outcome',
      content: (
        <>
          <p>
            No responsible service can guarantee that a particular estate-planning outcome will be
            legally effective, uncontested, tax-efficient, or religiously sufficient in every
            scenario.
          </p>
          <p>Final effectiveness depends on factors such as:</p>
          <ul>
            <li>The accuracy and completeness of the information provided.</li>
            <li>The suitability of the chosen structure for your actual circumstances.</li>
            <li>Changes in law, court interpretation, or regulatory requirements.</li>
            <li>Proper review, signing, witnessing, identification, and storage.</li>
            <li>Facts that emerge only after death, incapacity, dispute, or probate review.</li>
          </ul>
        </>
      ),
    },
    {
      id: 'execution',
      title: '6. Execution and Witnessing Still Matter',
      content: (
        <>
          <p>
            A document is not protected merely because a website, platform, or template exists.
            Execution formalities matter. Where Ontario workflow is involved, signing,
            witnessing, wet-signature requirements, counterpart handling, identification checks,
            and any required involvement of a licensee must still be handled correctly.
          </p>
          <p>
            You remain responsible for following the instructions provided for your file and for
            seeking direct legal help if you are unsure whether formalities have been met.
          </p>
        </>
      ),
    },
    {
      id: 'third-parties',
      title: '7. Third-Party Professionals, Links, and Charities',
      content: (
        <>
          <p>
            The site may reference or link to independent professionals, software providers,
            charities, scheduling tools, payment processors, or external websites. Those parties
            operate independently and may have their own terms, duties, and privacy practices.
          </p>
          <p>
            Reference to a charity, scholar, or external professional does not by itself create a
            sponsorship, endorsement, guarantee, or legal responsibility for that third party’s
            conduct, unless expressly stated in writing.
          </p>
        </>
      ),
    },
    {
      id: 'testimonials-results',
      title: '8. Testimonials, Examples, and Results',
      content: (
        <>
          <p>
            Testimonials, examples, comparisons, or explanatory scenarios on the site are not a
            guarantee that every user will have the same experience or result. Individual files
            differ.
          </p>
          <p>
            Any statistics, completion figures, ratings, or outcome claims should be read together
            with the surrounding context, the service scope, and the limits described in this
            disclaimer and our Terms of Service.
          </p>
        </>
      ),
    },
    {
      id: 'contact',
      title: '9. When to Seek Direct Advice',
      content: (
        <>
          <p>
            If you need advice on your own legal rights, tax position, corporate structure,
            disability planning, family dispute, probate issue, or a religious question requiring
            a personal ruling, do not rely only on the website. Obtain direct advice from a
            qualified professional.
          </p>
          <div className={styles.contactBox}>
            <p>For general questions about the Muslim Will platform, contact:</p>
            <ul className={styles.contactList}>
              <li><strong>Email:</strong> <a href="mailto:info@themuslimwill.com">info@themuslimwill.com</a></li>
              <li><strong>Phone:</strong> <a href="tel:+18774169455">+1-877-416-WILL</a></li>
              <li><strong>Website:</strong> <a href="https://themuslimwill.com">themuslimwill.com</a></li>
            </ul>
          </div>
        </>
      ),
    },
  ];

  return (
    <LegalPage
      eyebrow="Disclaimer"
      title="Disclaimer"
      intro="This page explains the limits of what Muslim Will provides, what the website should and should not be relied on for, and why jurisdiction-specific and case-specific advice still matters."
      updatedLabel="Last updated: May 3, 2026"
      scopeNote="A strong disclaimer does not replace accurate marketing. The website should still avoid broad unsupported claims about legal validity, professional status, jurisdictional reach, or guaranteed outcomes."
      sections={sections}
    />
  );
}
