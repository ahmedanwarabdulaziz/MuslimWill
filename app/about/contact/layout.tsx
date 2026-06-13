import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | The Muslim Will',
  description:
    'Reach the right team at The Muslim Will — for families, organisations, professionals, and press. We respond to every message personally within one business day.',
  alternates: { canonical: 'https://themuslimwill.com/about/contact' },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
