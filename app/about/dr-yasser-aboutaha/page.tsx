import { Button } from '@/components/ui/Button';
import styles from '../../page.module.css';

export const metadata = {
  title: 'Dr. Yasser Aboutaha - Executive Adviser | Muslim Will',
  description: 'Learn about Dr. Yasser Aboutaha, Executive Adviser at Muslim Will, bridging professional estate planning with community trust and leadership.',
};

export default function DrYasserBio() {
  return (
    <main>
      <section className={`${styles.section} ${styles.sectionLight}`}>
        <div className={styles.container} style={{ maxWidth: '800px' }}>
          <div className={styles.heroEyebrow}>Executive Adviser</div>
          <h1 className={styles.heroH1} style={{ marginBottom: '1rem' }}>Dr. Yasser Aboutaha</h1>
          
          <div style={{ fontSize: '1.25rem', color: 'var(--color-text-muted)', marginBottom: '3rem', fontStyle: 'italic' }}>
            Bridging Professional Planning with Community Trust
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', fontSize: '1.125rem' }}>
            <p>
              Dr. Yasser Aboutaha helps Muslim Will meet communities through trust, relationships, and clear communication. His focus is on ensuring that professional estate planning is actually received and understood by the people it is meant to serve.
            </p>
            <p>
              Dr. Yasser brings a rich background spanning fundraising, speaking, masjid engagement, and community leadership. He understands that for many Muslim families, legal matters are intimately tied to faith, and conversations about legacy require both legal precision and pastoral care.
            </p>
            <p>
              As Executive Adviser, he strengthens the bridge between the technical platform of Muslim Will and the real-world needs of the community, helping demystify the will-planning process and encouraging proactive family protection.
            </p>
          </div>

          <div style={{ marginTop: '4rem', padding: '2rem', borderTop: '1px solid var(--color-border)', textAlign: 'center' }}>
            <h3 style={{ marginBottom: '1rem' }}>Take the Next Step</h3>
            <p style={{ marginBottom: '1.5rem', color: 'var(--color-text-muted)' }}>
              Protect your family and establish your legacy with a guided, structured process.
            </p>
            <div className={styles.heroActions} style={{ justifyContent: 'center' }}>
              <Button variant="primary">Start Your Will</Button>
              <Button href="/how-it-works" variant="outline">Learn How It Works</Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
