import type { Metadata } from 'next';
import { LegalPage } from '@/app/_legal/LegalPage';
import styles from '@/app/_legal/legal.module.css';

const siteUrl = 'https://themuslimwill.com';

export const metadata: Metadata = {
  title: 'Privacy Policy | Muslim Will',
  description:
    'Learn how Muslim Will collects, uses, protects, and shares personal information for its website and estate-planning workflow.',
  alternates: {
    canonical: `${siteUrl}/privacy`,
  },
  openGraph: {
    title: 'Privacy Policy | Muslim Will',
    description:
      'Learn how Muslim Will collects, uses, protects, and shares personal information for its website and estate-planning workflow.',
    url: `${siteUrl}/privacy`,
  },
};

export default function PrivacyPage() {
  const sections = [
    {
      id: 'who-we-are',
      title: '1. Who We Are',
      content: (
        <>
          <p>
            This Privacy Policy describes how Muslim Will, a service operated by Patriva
            Technology Inc. (&ldquo;Muslim Will,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or
            &ldquo;our&rdquo;), collects, uses, discloses, stores, and protects personal
            information.
          </p>
          <p>
            This policy applies to the Muslim Will website, related landing pages, booking
            flows, customer support interactions, intake and document-preparation workflow,
            and other services where this policy is linked or referenced, unless a separate
            privacy notice applies.
          </p>
        </>
      ),
    },
    {
      id: 'information-we-collect',
      title: '2. Information We Collect',
      content: (
        <>
          <p>Depending on how you interact with us, we may collect the following categories of information:</p>
          <ul>
            <li>
              Contact and account details, such as your name, email address, phone number,
              login credentials, and communication preferences.
            </li>
            <li>
              Service and intake details, such as family structure, executor and guardian
              choices, beneficiary information, charitable intentions, school-of-thought
              selections, and other estate-planning instructions you provide.
            </li>
            <li>
              Identity, payment, and transaction details, such as billing information,
              payment confirmations, identity-verification documents, and records of fees paid.
            </li>
            <li>
              Communications, such as emails, support requests, call notes, scheduling data,
              and other correspondence with our team or service partners.
            </li>
            <li>
              Technical and usage information, such as IP address, browser type, device
              identifiers, approximate location, pages visited, referral source, and on-site
              interaction data collected through cookies, analytics, and comparable tools.
            </li>
            <li>
              Information we receive from third parties, such as payment processors, booking
              providers, analytics vendors, independent legal professionals, Islamic scholars,
              or people you authorize to act with or for you.
            </li>
          </ul>
          <div className={styles.note}>
            <p>
              Some information we handle may be sensitive, including family information,
              financial and estate-planning details, identity documents, and religious
              preference information relevant to inheritance planning.
            </p>
          </div>
        </>
      ),
    },
    {
      id: 'how-we-use',
      title: '3. How We Use Personal Information',
      content: (
        <>
          <p>We may use personal information to:</p>
          <ul>
            <li>Provide, manage, and support the Muslim Will service and customer journey.</li>
            <li>Set up accounts, process payments, schedule calls, and coordinate review steps.</li>
            <li>
              Prepare documents, facilitate workflow with independent legal professionals or
              Islamic reviewers, and deliver final materials.
            </li>
            <li>Verify identity, detect fraud, investigate misuse, and maintain platform security.</li>
            <li>Respond to inquiries, provide support, and send service-related updates.</li>
            <li>Improve our website, workflow, communications, and operational processes.</li>
            <li>Comply with legal, regulatory, tax, risk-management, recordkeeping, and audit obligations.</li>
            <li>Protect our rights, users, team members, and business operations.</li>
          </ul>
        </>
      ),
    },
    {
      id: 'legal-basis-consent',
      title: '4. Consent and Legal Basis',
      content: (
        <>
          <p>
            We aim to manage personal information in accordance with applicable Canadian privacy
            laws, including the Personal Information Protection and Electronic Documents Act
            (PIPEDA) and substantially similar provincial laws where they apply.
          </p>
          <p>
            We generally rely on your consent, your request that we provide or administer the
            service, and our legitimate operational interests where permitted by law. Where the
            information is sensitive, outside ordinary expectations, or used for a materially new
            purpose, we expect express consent unless an exception permitted by law applies.
          </p>
          <p>
            You may withdraw consent, subject to legal, contractual, or operational limitations.
            Withdrawal may affect our ability to continue providing the service.
          </p>
        </>
      ),
    },
    {
      id: 'disclosure',
      title: '5. When We Disclose Information',
      content: (
        <>
          <p>We may disclose personal information to the following categories of recipients when reasonably necessary:</p>
          <ul>
            <li>Patriva Technology Inc. personnel and affiliated internal service teams.</li>
            <li>
              Independent legal professionals, licensees, document reviewers, or execution
              coordinators involved in a supported workflow.
            </li>
            <li>
              Qualified Islamic scholars or reviewers involved in inheritance-structure review.
            </li>
            <li>
              Vendors and service providers that support hosting, analytics, scheduling, payment
              processing, communications, security, storage, or administration.
            </li>
            <li>Regulators, courts, law enforcement, insurers, auditors, or advisors where required or appropriate.</li>
            <li>
              A purchaser, investor, successor, or restructuring counterparty in connection with
              a merger, financing, sale, or reorganization, subject to appropriate safeguards.
            </li>
          </ul>
          <p>
            We do not sell personal information for money. We do not rent personal information.
            We do not share personal information for cross-context behavioral advertising unless
            we specifically disclose that practice and provide any choice rights required by law.
          </p>
        </>
      ),
    },
    {
      id: 'analytics-cookies',
      title: '6. Cookies, Analytics, and Similar Technologies',
      content: (
        <>
          <p>
            We use cookies, pixels, session technologies, and similar tools to keep the site
            functioning, understand how visitors use the site, improve performance, and measure
            engagement.
          </p>
          <p>
            Our current website code includes Google Analytics and Microsoft Clarity when the
            corresponding service is enabled. These tools may collect device, browsing, and
            interaction information according to their own terms and settings.
          </p>
          <p>
            You can control cookies through your browser settings and, where we make them
            available, through our site controls. Some site functions may not work properly if
            essential cookies are disabled.
          </p>
        </>
      ),
    },
    {
      id: 'cross-border',
      title: '7. Cross-Border Processing',
      content: (
        <>
          <p>
            We may store or process information in Canada, the United States, or other
            jurisdictions where we or our service providers operate. When information is moved
            across borders, it may be subject to the laws of the receiving jurisdiction.
          </p>
          <p>
            Where appropriate, we use contractual, technical, and organizational safeguards to
            protect information handled on our behalf.
          </p>
        </>
      ),
    },
    {
      id: 'retention-security',
      title: '8. Retention and Security',
      content: (
        <>
          <p>
            We retain personal information only for as long as reasonably necessary for the
            purposes described in this policy, including service delivery, legal compliance,
            dispute handling, recordkeeping, backup, and fraud-prevention needs.
          </p>
          <p>
            We use administrative, technical, and physical safeguards that are appropriate to the
            sensitivity of the information. No method of transmission, storage, or security
            control is completely guaranteed, and we cannot promise absolute security.
          </p>
          <p>
            If a breach of security safeguards occurs, we will assess it under applicable law and
            provide notifications or reports where required.
          </p>
        </>
      ),
    },
    {
      id: 'rights',
      title: '9. Your Privacy Rights',
      content: (
        <>
          <p>Subject to applicable law and certain exceptions, you may have rights to:</p>
          <ul>
            <li>Request access to personal information we hold about you.</li>
            <li>Request correction of inaccurate or incomplete information.</li>
            <li>Withdraw consent to certain uses or disclosures.</li>
            <li>Request deletion where no overriding legal basis for retention applies.</li>
            <li>Ask how we collected, used, or disclosed your information.</li>
            <li>Complain to us or, where applicable, to a privacy regulator.</li>
          </ul>
          <p>
            If an applicable U.S. state privacy law applies to your information, you may also
            have rights such as the right to know, correct, delete, limit certain uses of
            sensitive personal information, opt out of sale or sharing where applicable, and
            receive non-discriminatory treatment for exercising rights.
          </p>
          <p>
            To make a request, contact us using the details below. We may need to verify your
            identity and authority before acting on the request.
          </p>
        </>
      ),
    },
    {
      id: 'children',
      title: '10. Children and Minor Information',
      content: (
        <>
          <p>
            Our service is intended for adults. We do not market the service directly to
            children. However, adults may provide information about minor children for
            guardianship or family-planning purposes.
          </p>
          <p>
            By providing information about another person, including a child, you confirm that
            you have the authority to do so and that the information is accurate to the best of
            your knowledge.
          </p>
        </>
      ),
    },
    {
      id: 'marketing',
      title: '11. Marketing Communications',
      content: (
        <>
          <p>
            We may send service and transactional communications that are necessary to administer
            the relationship, such as account notices, intake reminders, scheduling details,
            payment notices, and delivery updates.
          </p>
          <p>
            Where we send marketing messages, we intend to do so in accordance with applicable
            laws, including Canada&rsquo;s Anti-Spam Legislation and the U.S. CAN-SPAM Act. You can
            unsubscribe from marketing emails using the unsubscribe method in the message or by
            contacting us directly.
          </p>
        </>
      ),
    },
    {
      id: 'changes-contact',
      title: '12. Changes and Contact Details',
      content: (
        <>
          <p>
            We may update this Privacy Policy from time to time. When changes are material, we
            may provide a more prominent notice or seek fresh consent where required.
          </p>
          <div className={styles.contactBox}>
            <p>If you have questions, complaints, or privacy requests, contact:</p>
            <ul className={styles.contactList}>
              <li><strong>Privacy Contact:</strong> Muslim Will c/o Patriva Technology Inc.</li>
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
      eyebrow="Privacy Policy"
      title="Privacy Policy"
      intro="Muslim Will handles highly personal planning information. This policy explains what we collect, why we collect it, how we use it, and the rights and choices available to you."
      updatedLabel="Last updated: May 3, 2026"
      scopeNote="This policy is written to support a Canada-first service with Ontario as the clearest current legal workflow, while also addressing common U.S. privacy expectations where applicable. Final threshold-specific state notices may need to be added if your U.S. operations expand."
      sections={sections}
    />
  );
}
