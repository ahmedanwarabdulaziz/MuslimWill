import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../DigitalCard.module.css';

export const metadata: Metadata = {
  title: "Ahmed Gohar | Muslim Will",
  description: "Connect directly with Ahmed Gohar, Founder & CEO of Patriva and Creator of The Muslim Will. Save contact details, book a call, or start your Shariah-compliant estate plan.",
  openGraph: {
    title: "Ahmed Gohar | Founder & CEO",
    description: "Connect directly with Ahmed Gohar, Founder & CEO of Patriva and Creator of The Muslim Will.",
    url: "https://themuslimwill.com/c/ahmed",
    siteName: "Muslim Will",
    images: [
      {
        url: "/Images/05.jpeg",
        width: 1200,
        height: 630,
        alt: "Ahmed Gohar - Muslim Will",
      },
    ],
    locale: "en_CA",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ahmed Gohar | Founder & CEO",
    description: "Connect directly with Ahmed Gohar, Founder & CEO of Patriva and Creator of The Muslim Will.",
    images: ["/Images/05.jpeg"],
  },
};

export default function AhmedPremiumCardPage() {
  return (
    <div className={styles.pageWrapper}>
      <main className={styles.cardContainer}>
        
        {/* 1. Hero Section (Full bleed image with gradient overlay) */}
        <section className={styles.heroImageWrapper}>
          <Image 
            src="/Images/11.jpeg" 
            alt="Ahmed Gohar" 
            fill
            className={styles.heroImage}
            priority
          />
          <div className={styles.heroOverlay}>
            <h1 className={styles.greeting}>Great connecting with you.</h1>
            <p className={styles.nameTitle}>Ahmed Gohar — Founder & CEO, Patriva</p>
          </div>
        </section>

        {/* 2. Primary Micro-Conversion (Save Contact) */}
        <div className={styles.actionArea}>
          <a href="/contacts/ahmed-gohar.vcf" className={styles.saveContactBtn} download>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path>
              <polyline points="17 21 17 13 7 13 7 21"></polyline>
              <polyline points="7 3 7 8 15 8"></polyline>
            </svg>
            Save to Contacts
          </a>
        </div>

        {/* 3. The Reminder */}
        <div className={styles.reminderText}>
          <p>
            I build technology that helps Muslim families secure their future with Shariah-conscious, legally enforceable estate planning across Canada.
          </p>
        </div>

        {/* 4. Action Grid */}
        <div className={styles.actionGrid}>
          {/* WhatsApp */}
          <a href="https://wa.me/18774169455" target="_blank" rel="noopener noreferrer" className={styles.gridTile}>
            <svg className={styles.tileIcon} width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
            </svg>
            <span className={styles.tileTitle}>Message on WhatsApp</span>
          </a>

          {/* Book Call */}
          <a href="https://calendly.com" target="_blank" rel="noopener noreferrer" className={styles.gridTile}>
            <svg className={styles.tileIcon} width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
            <span className={styles.tileTitle}>Book a<br />15-Min Call</span>
          </a>

          {/* How It Works */}
          <Link href="/how-it-works" className={styles.gridTile}>
            <svg className={styles.tileIcon} width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="16" x2="12" y2="12"></line>
              <line x1="12" y1="8" x2="12.01" y2="8"></line>
            </svg>
            <span className={styles.tileTitle}>See How<br />Platform Works</span>
          </Link>

          {/* Start Will */}
          <Link href="/start" className={styles.gridTile}>
            <svg className={styles.tileIcon} width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
              <line x1="16" y1="13" x2="8" y2="13"></line>
              <line x1="16" y1="17" x2="8" y2="17"></line>
              <polyline points="10 9 9 9 8 9"></polyline>
            </svg>
            <span className={styles.tileTitle}>Start Your<br />Estate Plan</span>
          </Link>

          {/* Email */}
          <a href="mailto:info@themuslimwill.com" className={styles.gridTile}>
            <svg className={styles.tileIcon} width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
            <span className={styles.tileTitle}>Send a Direct<br />Email</span>
          </a>

          {/* Direct Call */}
          <a href="tel:+18774169455" className={styles.gridTile}>
            <svg className={styles.tileIcon} width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            <span className={styles.tileTitle}>Call Direct<br />Line</span>
          </a>
        </div>

        {/* 5. The Patriva Ecosystem */}
        <div className={styles.ecosystemSection}>
          <h3 className={styles.ecosystemTitle}>The Patriva Ecosystem</h3>
          <div className={styles.ecosystemGrid}>
            <a href="https://patriva.com" target="_blank" rel="noopener noreferrer" className={styles.ecosystemItem}>
              <div className={styles.ecosystemIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                  <line x1="12" y1="22.08" x2="12" y2="12"></line>
                </svg>
              </div>
              <div className={styles.ecosystemText}>
                <div className={styles.ecosystemName}>Patriva Technology</div>
                <p className={styles.ecosystemDesc}>Parent company building workflow systems for regulated environments.</p>
              </div>
            </a>
            <Link href="/" className={styles.ecosystemItem}>
              <div className={styles.ecosystemIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
              </div>
              <div className={styles.ecosystemText}>
                <div className={styles.ecosystemName}>Muslim Will</div>
                <p className={styles.ecosystemDesc}>Structured, Shariah-conscious estate planning across Canada.</p>
              </div>
            </Link>
          </div>
        </div>

        {/* 6. Office Location */}
        <div className={styles.locationSection}>
          <h3 className={styles.locationTitle}>Headquarters</h3>
          <div className={styles.locationAddress}>
            201-1315 Pickering Pkwy<br />
            Pickering, ON L1V 7G5<br />
            Canada
          </div>
          <a href="https://maps.google.com/?q=1315+Pickering+Pkwy+Pickering,+ON+L1V+7G5" target="_blank" rel="noopener noreferrer" className={styles.locationButton}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            Get Directions
          </a>
        </div>

        {/* Footer */}
        <div className={styles.cardFooter}>
          <div className={styles.footerDivider}></div>
          <Image src="/Images/logooo.png" alt="Muslim Will" width={180} height={36} className={styles.footerLogoImage} />
          <p className={styles.footerCopyright}>
            &copy; {new Date().getFullYear()} Patriva Technology Inc.<br />
            All rights reserved.
          </p>
          <div className={styles.footerLinks}>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
          </div>
        </div>

      </main>
    </div>
  );
}
