"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from './Button';
import {
  trackBookCallClick,
  trackNavigateClick,
  trackStartYourWillClick,
} from '@/lib/analytics';
import styles from './Header.module.css';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle scroll detection for shadow layering
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        {/* Logo */}
        <Link href="/" className={styles.logoArea}>
          <Image src="/Images/logooo.png" alt="Muslim Will Logo" width={200} height={40} className={styles.logoImage} priority />
        </Link>

        {/* Desktop Nav */}
        <nav className={styles.desktopNav}>
          <Link href="/how-it-works" className={styles.navLink} onClick={() => trackNavigateClick('how_it_works', 'header_desktop')}>How It Works</Link>
          <Link href="/pricing" className={styles.navLink} onClick={() => trackNavigateClick('pricing', 'header_desktop')}>Pricing</Link>
          <Link href="/charitable-legacy" className={styles.navLink} onClick={() => trackNavigateClick('charitable_legacy', 'header_desktop')}>Charitable Legacy</Link>
          <Link href="/faq" className={styles.navLink} onClick={() => trackNavigateClick('faq', 'header_desktop')}>FAQ</Link>
          
          <div className={styles.dropdownWrapper}>
            <span className={styles.dropdownTitle}>
              About
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
            </span>
            <div className={styles.dropdownMenu}>
              <Link href="/about" className={styles.dropdownItem} onClick={() => trackNavigateClick('about', 'header_desktop')}>About Muslim Will</Link>
              <Link href="/about/ahmed-gohar" className={styles.dropdownItem} onClick={() => trackNavigateClick('ahmed_gohar_bio', 'header_desktop')}>Ahmed Gohar</Link>
              <Link href="/about/dr-yasser-aboutaha" className={styles.dropdownItem} onClick={() => trackNavigateClick('dr_yasser_bio', 'header_desktop')}>Dr. Yasser Aboutaha</Link>
              <Link href="/legal-islamic-compliance" className={styles.dropdownItem} onClick={() => trackNavigateClick('compliance', 'header_desktop')}>Legal & Islamic Compliance</Link>
            </div>
          </div>
        </nav>

        {/* Desktop CTA */}
        <div className={styles.ctaGroup}>
          <Link href="/contact" className={styles.secondaryCta} onClick={() => trackBookCallClick('header_desktop')}>Book a Call</Link>
          <Button variant="primary" onClick={() => trackStartYourWillClick('header_desktop')}>Start Your Will</Button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className={styles.mobileMenuBtn} 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
          )}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className={styles.mobileDrawer}>
          <div className={styles.mobileCtaBox} style={{ borderTop: 'none', borderBottom: '1px solid var(--color-border)', paddingBottom: '1.5rem', marginBottom: '1rem' }}>
            <Button variant="primary" style={{ width: '100%' }} onClick={() => {
              trackStartYourWillClick('header_mobile');
              setMobileMenuOpen(false);
            }}>Start Your Will</Button>
          </div>
          <nav className={styles.mobileDrawerNav}>
            <Link href="/how-it-works" className={styles.mobileLink} onClick={() => {
              trackNavigateClick('how_it_works', 'header_mobile');
              setMobileMenuOpen(false);
            }}>How It Works</Link>
            <Link href="/pricing" className={styles.mobileLink} onClick={() => {
              trackNavigateClick('pricing', 'header_mobile');
              setMobileMenuOpen(false);
            }}>Pricing</Link>
            <Link href="/charitable-legacy" className={styles.mobileLink} onClick={() => {
              trackNavigateClick('charitable_legacy', 'header_mobile');
              setMobileMenuOpen(false);
            }}>Charitable Legacy</Link>
            <Link href="/faq" className={styles.mobileLink} onClick={() => {
              trackNavigateClick('faq', 'header_mobile');
              setMobileMenuOpen(false);
            }}>FAQ</Link>
            
            <div style={{ margin: '1rem 0' }}>
              <Button variant="outline" style={{ width: '100%' }} onClick={() => {
                trackBookCallClick('header_mobile');
                setMobileMenuOpen(false);
              }}>Book a Call</Button>
            </div>

            <Link href="/about" className={styles.mobileLink} onClick={() => {
              trackNavigateClick('about', 'header_mobile');
              setMobileMenuOpen(false);
            }}>About Muslim Will</Link>
            <Link href="/about/ahmed-gohar" className={styles.mobileLink} onClick={() => {
              trackNavigateClick('ahmed_gohar_bio', 'header_mobile');
              setMobileMenuOpen(false);
            }}>Ahmed Gohar</Link>
            <Link href="/about/dr-yasser-aboutaha" className={styles.mobileLink} onClick={() => {
              trackNavigateClick('dr_yasser_bio', 'header_mobile');
              setMobileMenuOpen(false);
            }}>Dr. Yasser Aboutaha</Link>
            <Link href="/legal-islamic-compliance" className={styles.mobileLink} onClick={() => {
              trackNavigateClick('compliance', 'header_mobile');
              setMobileMenuOpen(false);
            }}>Legal & Islamic Compliance</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
