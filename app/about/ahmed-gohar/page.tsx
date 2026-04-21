import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import styles from '../../page.module.css';

export const metadata = {
  title: 'Ahmed Gohar - Founder & CEO | Muslim Will',
  description: 'Learn about Ahmed Gohar, Founder & CEO of Muslim Will, architecting making Shariah-conscious estate planning accessible through structured technology.',
};

export default function AhmedGoharBio() {
  return (
    <main>
      <section className={`${styles.section} ${styles.sectionLight}`}>
        <div className={styles.container} style={{ maxWidth: '800px' }}>
          <div className={styles.heroEyebrow}>Founder & CEO, Patriva / The Muslim Will</div>
          <h1 className={styles.heroH1} style={{ marginBottom: '1rem' }}>Ahmed Gohar</h1>
          
          <div style={{ fontSize: '1.25rem', color: 'var(--color-text-muted)', marginBottom: '3rem', fontStyle: 'italic' }}>
            He does not just architect ideas; he builds infrastructure.
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', fontSize: '1.125rem' }}>
            <p>
              Ahmed Gohar built The Muslim Will to solve one of the most overlooked gaps facing Muslim families in the West: the absence of wills that are both Shariah-conscious and legally enforceable. Muslim families should not have to choose between a generic legal will and no will at all.
            </p>
            <p>
              Rather than approaching this gap as a traditional legal or advisory problem, Ahmed approached it as a systems and platform challenge. As the founder of The Agile Group, his background lies in building complex SaaS platforms, mobile applications, and solving regulated workflows in operationally sensitive sectors like healthcare.
            </p>
            <p>
              The Muslim Will is the convergence of technical capability and a real community need. Ahmed designed a workflow built precisely around four layers: user input, scholar-validated inheritance logic, independent legal review, and guided execution oversight. By structurally separating these layers, no single layer overreaches into another. The platform itself acts as the secure infrastructure, not as a law firm issuing fatwas or providing direct legal counsel.
            </p>
            <p>
              His goal is clear: to standardize Shariah-conscious estate planning across the West, elevating it beyond fragmented solutions and making it accessible to families of all backgrounds, not just those with high resources.
            </p>
          </div>

          <div style={{ marginTop: '4rem', padding: '2rem', background: 'var(--color-surface)', borderTop: '1px solid var(--color-border)', textAlign: 'center', borderRadius: 'var(--radius-lg)' }}>
            <h3 style={{ marginBottom: '1rem' }}>Start Your Journey</h3>
            <p style={{ marginBottom: '1.5rem', color: 'var(--color-text-muted)' }}>
              Experience the structured pathway Ahmed and the team have built.
            </p>
            <div className={styles.heroActions} style={{ justifyContent: 'center' }}>
              <Button variant="primary">Start Your Will</Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
