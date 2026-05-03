import type { Metadata } from 'next';
import { LegalPage } from '@/app/_legal/LegalPage';
import styles from '@/app/_legal/legal.module.css';

const siteUrl = 'https://themuslimwill.com';

export const metadata: Metadata = {
  title: 'Terms of Service | Muslim Will',
  description:
    'Read the terms governing your use of the Muslim Will website, workflow, and related services.',
  alternates: {
    canonical: `${siteUrl}/terms`,
  },
  openGraph: {
    title: 'Terms of Service | Muslim Will',
    description:
      'Read the terms governing your use of the Muslim Will website, workflow, and related services.',
    url: `${siteUrl}/terms`,
  },
};

export default function TermsPage() {
  const sections = [
    {
      id: 'acceptance',
      title: '1. Acceptance of These Terms',
      content: (
        <>
          <p>
            These Terms of Service govern your access to and use of the Muslim Will website,
            intake workflow, booking tools, communications, related software, and services
            provided by or through Patriva Technology Inc. under the Muslim Will brand.
          </p>
          <p>
            By accessing or using the service, creating an account, submitting intake
            information, or purchasing a package, you agree to these terms. If you do not agree,
            do not use the service.
          </p>
        </>
      ),
    },
    {
      id: 'eligibility-jurisdiction',
      title: '2. Eligibility and Jurisdiction',
      content: (
        <>
          <ul>
            <li>You must be at least 18 years old and legally capable of entering into a contract.</li>
            <li>
              You may use the service only for lawful purposes and only in connection with a
              jurisdiction we actually support.
            </li>
            <li>
              The current public website is Canada-first, with Ontario as the clearest supported
              legal workflow. Nothing on the website should be read as a promise that Muslim Will
              provides legally supported service in every Canadian province, every U.S. state, or
              every other jurisdiction.
            </li>
          </ul>
          <div className={styles.note}>
            <p>
              If you are outside a currently supported jurisdiction, some content may be
              educational only and not part of an active document-preparation service.
            </p>
          </div>
        </>
      ),
    },
    {
      id: 'service-nature',
      title: '3. Nature of the Service',
      content: (
        <>
          <p>
            Muslim Will is a structured technology and workflow service. It is not itself a law
            firm, attorney, solicitor, Islamic court, mufti, tax adviser, accounting firm, or
            investment adviser.
          </p>
          <p>
            The service may coordinate or facilitate work involving independent legal
            professionals, licensees, and Islamic scholars, but your use of the website or your
            creation of an account does not by itself create a solicitor-client, attorney-client,
            fiduciary, or scholar-client relationship with Muslim Will.
          </p>
          <p>
            No content on the website is a substitute for personalized legal advice, tax advice,
            accounting advice, investment advice, or a personal fatwa for complex circumstances.
          </p>
        </>
      ),
    },
    {
      id: 'user-responsibilities',
      title: '4. Your Responsibilities',
      content: (
        <>
          <p>You agree to:</p>
          <ul>
            <li>Provide complete, current, and accurate information.</li>
            <li>Update information when your circumstances materially change.</li>
            <li>
              Provide personal information about other people only if you have lawful authority to
              do so.
            </li>
            <li>Review drafts, summaries, and final materials carefully before approving them.</li>
            <li>
              Follow all signing, witnessing, identification, and execution instructions that
              apply to your file.
            </li>
            <li>Seek direct legal or religious advice where your situation is complex or disputed.</li>
            <li>Maintain the confidentiality of your account credentials and devices.</li>
          </ul>
        </>
      ),
    },
    {
      id: 'fees-payments',
      title: '5. Fees, Payments, and Refund Position',
      content: (
        <>
          <p>
            Fees, package scope, and included services will be described on the website, in
            checkout, or in written communications. Taxes and third-party charges may apply where
            required.
          </p>
          <p>
            Unless otherwise stated in writing or required by law, fees attributable to work that
            has already been performed, reserved professional time, completed review, or completed
            administrative processing are not automatically refundable.
          </p>
          <p>
            If a refund, credit, or rescheduling accommodation is offered, it may be subject to
            the specific package, timing, service stage, and circumstances of the file.
          </p>
        </>
      ),
    },
    {
      id: 'communications',
      title: '6. Communications and Consent to Contact',
      content: (
        <>
          <p>
            By using the service, you consent to receive operational and transactional
            communications from us by email, phone, or other channels you provide, including
            notices about your account, intake, scheduling, payment, support, and document status.
          </p>
          <p>
            Marketing communications will be governed by applicable laws, including Canada&rsquo;s
            Anti-Spam Legislation and the U.S. CAN-SPAM Act. You may opt out of marketing
            communications using the unsubscribe method provided or by contacting us directly.
          </p>
        </>
      ),
    },
    {
      id: 'intellectual-property',
      title: '7. Intellectual Property and Site Use',
      content: (
        <>
          <p>
            The website, brand assets, copy, design, workflow logic, software, and related
            materials are owned by Patriva Technology Inc., its licensors, or other rights
            holders, and are protected by intellectual property and other laws.
          </p>
          <p>
            You may use the site for your own lawful personal or internal evaluation purposes. You
            may not reproduce, scrape, reverse engineer, republish, resell, frame, automate
            access to, or exploit the service except as expressly allowed in writing.
          </p>
        </>
      ),
    },
    {
      id: 'acceptable-use',
      title: '8. Prohibited Conduct',
      content: (
        <>
          <p>You may not use the service to:</p>
          <ul>
            <li>Violate law, regulation, court order, or third-party rights.</li>
            <li>Impersonate a person or misrepresent authority, identity, or jurisdiction.</li>
            <li>Upload malicious code, interfere with service security, or probe for vulnerabilities.</li>
            <li>Harvest data, scrape content, or automate access without authorization.</li>
            <li>Use the service in a fraudulent, abusive, defamatory, or misleading manner.</li>
            <li>Submit information you know or reasonably should know is false or incomplete.</li>
          </ul>
        </>
      ),
    },
    {
      id: 'third-party-professionals',
      title: '9. Third-Party Professionals and Services',
      content: (
        <>
          <p>
            Parts of the workflow may involve third-party tools or independent professionals,
            including scheduling providers, payment processors, analytics services, legal
            professionals, and Islamic scholars.
          </p>
          <p>
            Those parties may have their own terms, privacy notices, licensing duties, and
            professional obligations. Muslim Will is not responsible for the policies or actions
            of third-party websites or platforms that we do not control.
          </p>
        </>
      ),
    },
    {
      id: 'no-guarantees',
      title: '10. No Guarantee of Outcome',
      content: (
        <>
          <p>
            Estate planning outcomes depend on facts, changing laws, jurisdiction-specific
            requirements, the completeness and accuracy of information provided, proper execution,
            witness availability, court interpretation, tax circumstances, and future events.
          </p>
          <p>
            For that reason, Muslim Will does not guarantee a specific legal, tax, religious,
            family, probate, or court outcome. We also do not guarantee that a document will be
            uncontested, accepted without challenge, or suitable for every jurisdiction or
            complex scenario.
          </p>
        </>
      ),
    },
    {
      id: 'warranties-liability',
      title: '11. Disclaimer of Warranties and Limitation of Liability',
      content: (
        <>
          <p>
            To the fullest extent permitted by law, the service is provided on an &ldquo;as is&rdquo;
            and &ldquo;as available&rdquo; basis. We disclaim implied warranties, representations,
            and conditions to the extent legally permitted, including implied warranties of
            merchantability, fitness for a particular purpose, and non-infringement.
          </p>
          <p>
            To the fullest extent permitted by law, Muslim Will, Patriva Technology Inc., and
            their officers, employees, contractors, and affiliates will not be liable for any
            indirect, incidental, consequential, special, exemplary, or punitive damages, or for
            lost profits, lost data, lost opportunity, or emotional distress arising from or
            relating to the service.
          </p>
          <p>
            To the fullest extent permitted by law, our aggregate liability for claims arising out
            of the service will not exceed the greater of the amount you paid us for the specific
            service giving rise to the claim or one hundred Canadian dollars (CAD $100).
          </p>
          <p>
            Nothing in these terms excludes liability that cannot lawfully be excluded.
          </p>
        </>
      ),
    },
    {
      id: 'indemnity',
      title: '12. Indemnity',
      content: (
        <>
          <p>
            You agree to indemnify and hold harmless Muslim Will, Patriva Technology Inc., and
            their officers, employees, contractors, and affiliates from claims, losses, damages,
            liabilities, and expenses arising from your misuse of the service, your breach of
            these terms, your violation of law, or your submission of inaccurate or unauthorized
            information.
          </p>
        </>
      ),
    },
    {
      id: 'suspension-termination',
      title: '13. Suspension or Termination',
      content: (
        <>
          <p>
            We may suspend, restrict, or terminate access if we reasonably believe you have
            violated these terms, created legal or security risk, provided false information,
            refused required verification, or used the service outside a supported scope.
          </p>
          <p>
            Termination does not erase obligations that by nature should survive, including
            payment obligations, intellectual property protections, disclaimers, liability limits,
            and dispute provisions.
          </p>
        </>
      ),
    },
    {
      id: 'governing-law',
      title: '14. Governing Law and Disputes',
      content: (
        <>
          <p>
            These terms are governed by the laws of the Province of Ontario and the federal laws
            of Canada applicable there, without regard to conflict-of-law rules, except to the
            extent mandatory consumer-protection laws of your place of residence apply and cannot
            be waived.
          </p>
          <p>
            Unless applicable law requires otherwise, disputes relating to these terms or the
            service will be brought in the courts located in Ontario, Canada, and the parties
            submit to that forum.
          </p>
        </>
      ),
    },
    {
      id: 'changes-contact',
      title: '15. Changes and Contact Information',
      content: (
        <>
          <p>
            We may modify these terms from time to time. The updated version becomes effective
            when posted, unless a later effective date is stated. Your continued use of the
            service after an update means you accept the revised terms.
          </p>
          <div className={styles.contactBox}>
            <p>Questions about these terms can be directed to:</p>
            <ul className={styles.contactList}>
              <li><strong>Muslim Will</strong> c/o Patriva Technology Inc.</li>
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
      eyebrow="Terms of Service"
      title="Terms of Service"
      intro="These terms set the legal ground rules for using the Muslim Will website, workflow, and related services. They are designed to clarify the service scope, the user’s responsibilities, and the limits of what Muslim Will does and does not provide."
      updatedLabel="Last updated: May 3, 2026"
      scopeNote="This version is written for the current public positioning of Muslim Will: a Canada-first workflow with Ontario as the clearest supported legal anchor. If the business later expands active service into additional provinces or U.S. states, these terms should be updated to match the actual licensed footprint."
      sections={sections}
    />
  );
}
