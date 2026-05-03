import React from 'react';
import sharedStyles from '@/app/page.module.css';
import styles from './legal.module.css';

type LegalSection = {
  id: string;
  title: string;
  content: React.ReactNode;
};

type LegalPageProps = {
  eyebrow: string;
  title: string;
  intro: string;
  updatedLabel: string;
  scopeNote: string;
  sections: LegalSection[];
};

export function LegalPage({
  eyebrow,
  title,
  intro,
  updatedLabel,
  scopeNote,
  sections,
}: LegalPageProps) {
  return (
    <main>
      <section className={styles.hero}>
        <div className={sharedStyles.container}>
          <div className={styles.heroInner}>
            <div className={styles.eyebrow}>{eyebrow}</div>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.intro}>{intro}</p>
            <div className={styles.meta}>
              <span>{updatedLabel}</span>
              <span>Current service footprint: Canada-first, with Ontario as the clearest supported legal workflow.</span>
            </div>
          </div>
        </div>
      </section>

      <section className={`${sharedStyles.section} ${styles.band}`}>
        <div className={sharedStyles.container}>
          <div className={styles.bandInner}>
            <p className={styles.bandCopy}>{scopeNote}</p>
            <ul className={styles.bandList}>
              {sections.map((section) => (
                <li key={section.id}>
                  <a href={`#${section.id}`}>{section.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className={sharedStyles.section}>
        <div className={sharedStyles.container}>
          <article className={styles.article}>
            {sections.map((section) => (
              <section key={section.id} id={section.id} className={styles.section}>
                <h2>{section.title}</h2>
                {section.content}
              </section>
            ))}
          </article>
        </div>
      </section>
    </main>
  );
}
