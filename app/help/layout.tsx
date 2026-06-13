import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Help Centre & Blog | Islamic Estate Planning | The Muslim Will',
  description:
    'Guides, articles, and answers for Muslim families in Canada — Islamic inheritance, Faraid, estate planning, the Vault, and how The Muslim Will works.',
  alternates: { canonical: 'https://themuslimwill.com/help' },
};

export default function HelpLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
