import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQ | Islamic Will Canada | The Muslim Will',
  description:
    'Clear answers to the most common questions about Islamic wills in Canada — Faraid, legal validity, pricing, the Vault, and how The Muslim Will works.',
  alternates: { canonical: 'https://themuslimwill.com/about/faq' },
};

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
