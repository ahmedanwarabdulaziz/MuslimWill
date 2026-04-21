import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Top Layout */}
        <div className={styles.topRow}>
          {/* Column 1: Brand */}
          <div className={styles.column}>
            <div className={styles.brandName}>Muslim Will</div>
            <p className={styles.brandDesc}>
              A guided pathway for Muslim families in Canada to prepare wills with legal structure, Islamic inheritance guidance, and clearer next steps.
            </p>
            <div className={styles.trustLine}>
              "A will is a trust we fulfill before Allah, and a mercy we leave for our families after us."
            </div>
          </div>

          {/* Column 2: Explore */}
          <div className={styles.column}>
            <div className={styles.colHeading}>Explore</div>
            <div className={styles.linkList}>
              <Link href="/how-it-works" className={styles.footerLink}>How It Works</Link>
              <Link href="/charitable-legacy" className={styles.footerLink}>Charitable Legacy</Link>
              <Link href="/faq" className={styles.footerLink}>FAQ</Link>
              <Link href="/for-charities" className={styles.footerLink}>For Charities</Link>
              <Link href="/about" className={styles.footerLink}>About Muslim Will</Link>
            </div>
          </div>

          {/* Column 3: Experts & Trust */}
          <div className={styles.column}>
            <div className={styles.colHeading}>Experts & Trust</div>
            <div className={styles.linkList}>
              <Link href="/about/ahmed-gohar" className={styles.footerLink}>Ahmed Gohar</Link>
              <Link href="/about/dr-yasser-aboutaha" className={styles.footerLink}>Dr. Yasser Aboutaha</Link>
              <Link href="/compliance" className={styles.footerLink}>Legal & Islamic Compliance</Link>
              <Link href="#contact" className={styles.footerLink}>Contact</Link>
            </div>
          </div>

          {/* Column 4: Contact Options */}
          <div className={styles.column}>
            <div className={styles.colHeading}>Start Planning</div>
            <div className={styles.linkList}>
              <Link href="/start" className={styles.footerLink} style={{ color: 'var(--color-gold)', fontWeight: 'bold' }}>Start Your Will</Link>
              <Link href="#book" className={styles.footerLink}>Book a Call</Link>
              <a href="mailto:info@themuslimwill.com" className={styles.footerLink}>info@themuslimwill.com</a>
              <a href="tel:+18774169455" className={styles.footerLink}>+1-877-416-WILL</a>
            </div>
          </div>
        </div>

        {/* Bottom Legal Layer */}
        <div className={styles.bottomRow}>
          <div className={styles.disclaimer}>
            Muslim Will is a structured planning platform and workflow system. It is not a law firm and does not provide legal advice or religious rulings. Legal validity depends on accurate information, proper review, and correct signing and witnessing under applicable provincial law.
          </div>
          
          <div className={styles.subFooter}>
            <div>&copy; {new Date().getFullYear()} Muslim Will. All rights reserved.</div>
            <div className={styles.legalLinks}>
              <Link href="/privacy">Privacy Policy</Link>
              <Link href="/terms">Terms of Service</Link>
              <Link href="/disclaimer">Disclaimer</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
