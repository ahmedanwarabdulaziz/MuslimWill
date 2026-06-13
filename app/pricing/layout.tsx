import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing | Islamic Will and Vault | The Muslim Will',
  description:
    'The Bridge from $5.99/month — a complete Islamic will and private Vault. Full Package at $350. Clear pricing, no hidden fees, built for Muslim families in Canada.',
  alternates: { canonical: 'https://themuslimwill.com/pricing' },
};

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
