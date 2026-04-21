import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardTitle } from '@/components/ui/Card';
import styles from '../page.module.css';

export const metadata = {
  title: 'Charitable Legacy | Islamic Will Planning | Muslim Will',
  description: 'Understand the 1/3 bequest (Wasiyyah) rule and how to include charitable giving in your Islamic Will without compromising your family’s rights.',
};

export default function CharitableLegacy() {
  return (
    <main>
      <section className={`${styles.section} ${styles.sectionLight}`}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <div className={styles.heroEyebrow}>Charitable Legacy</div>
            <h1 className={styles.heroH1}>The 1/3 Rule and Lasting Charitable Impact</h1>
            <p className={styles.sectionIntro} style={{ maxWidth: '800px', margin: '0 auto' }}>
              In Islamic tradition, your primary responsibility is protecting your family. However, you also have the right to dedicate up to one-third of your estate to charitable causes (Sadaqah Jariyah) or specific individuals who do not already inherit under standard Islamic principles.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.grid3}>
            <Card variant="premium">
              <CardContent>
                <CardTitle>Family First</CardTitle>
                <p>Islamic inheritance logic is designed so that at least two-thirds (2/3) of your estate always goes to your designated legal heirs. Family care remains central and protected by default.</p>
              </CardContent>
            </Card>
            
            <Card variant="premium">
              <CardContent>
                <CardTitle>The Permissible Bequest</CardTitle>
                <p>The remaining one-third (1/3) is yours to assign as you wish. This is the Wasiyyah, frequently used to support charities, community projects, or distant relatives in need.</p>
              </CardContent>
            </Card>

            <Card variant="premium">
              <CardContent>
                <CardTitle>Sadaqah Jariyah</CardTitle>
                <p>When documented legally, your charitable intention turns into a lasting legacy (Sadaqah Jariyah). A structured will ensures these wishes are legally binding and actually fulfilled.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionLight}`}>
        <div className={styles.container} style={{ textAlign: 'center', maxWidth: '800px' }}>
          <h2 className={styles.sectionH2}>How Muslim Will Helps Focus Your Intentions</h2>
          <p className={styles.sectionIntro} style={{ marginBottom: '2rem' }}>
            We bridge the gap between educational hope and legal reality. Our guided workflow asks you directly about your charitable intentions and helps you designate a percentage (up to 33.3%) to the organizations you care about. We ensure these bequests are integrated seamlessly into the legal framework of your Ontario will.
          </p>
          <div style={{ padding: '2rem', background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-lg)' }}>
            <h3 style={{ marginBottom: '1rem', color: 'var(--color-text-main)' }}>Are you a charity?</h3>
            <p style={{ marginBottom: '1.5rem', color: 'var(--color-text-muted)' }}>
              We partner with community organizations to help congregants and supporters prepare their wills while facilitating structured, legally-compliant pathways for legacy giving.
            </p>
            <Button href="/for-charities" variant="outline">Partnership Information</Button>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.ctaBox}>
            <h2 style={{ color: 'var(--color-surface)' }}>Ready to protect your family and your legacy?</h2>
            <p style={{ color: 'var(--color-surface)', opacity: 0.9 }}>
              Begin drafting your will using our guided, scholar-reviewed and lawyer-validated platform.
            </p>
            <div className={styles.ctaActions}>
              <Button size="lg" variant="secondary">Start Your Will</Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
