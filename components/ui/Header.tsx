"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from './Button';
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
          <Link href="/how-it-works" className={styles.navLink}>How It Works</Link>
          <Link href="/charitable-legacy" className={styles.navLink}>Charitable Legacy</Link>
          <Link href="/faq" className={styles.navLink}>FAQ</Link>
          
          <div className={styles.dropdownWrapper}>
            <span className={styles.dropdownTitle}>
              About
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
            </span>
            <div className={styles.dropdownMenu}>
              <Link href="/about" className={styles.dropdownItem}>About Muslim Will</Link>
              <Link href="/about/ahmed-gohar" className={styles.dropdownItem}>Ahmed Gohar</Link>
              <Link href="/about/dr-yasser-aboutaha" className={styles.dropdownItem}>Dr. Yasser Aboutaha</Link>
              <Link href="/compliance" className={styles.dropdownItem}>Legal & Islamic Compliance</Link>
            </div>
          </div>
        </nav>

        {/* Desktop CTA */}
        <div className={styles.ctaGroup}>
          <Link href="#contact" className={styles.secondaryCta}>Book a Call</Link>
          <Button variant="primary">Start Your Will</Button>
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
          <nav className={styles.mobileDrawerNav}>
            <Link href="/how-it-works" className={styles.mobileLink} onClick={() => setMobileMenuOpen(false)}>How It Works</Link>
            <Link href="/charitable-legacy" className={styles.mobileLink} onClick={() => setMobileMenuOpen(false)}>Charitable Legacy</Link>
            <Link href="/faq" className={styles.mobileLink} onClick={() => setMobileMenuOpen(false)}>FAQ</Link>
            <Link href="/about" className={styles.mobileLink} onClick={() => setMobileMenuOpen(false)}>About Muslim Will</Link>
            <Link href="/about/ahmed-gohar" className={styles.mobileLink} onClick={() => setMobileMenuOpen(false)}>Ahmed Gohar</Link>
            <Link href="/about/dr-yasser-aboutaha" className={styles.mobileLink} onClick={() => setMobileMenuOpen(false)}>Dr. Yasser Aboutaha</Link>
            <Link href="/compliance" className={styles.mobileLink} onClick={() => setMobileMenuOpen(false)}>Legal & Islamic Compliance</Link>
          </nav>
          <div className={styles.mobileCtaBox}>
            <Button variant="primary" style={{ width: '100%' }}>Start Your Will</Button>
            <Button variant="outline" style={{ width: '100%' }}>Book a Call</Button>
          </div>
        </div>
      )}
    </header>
  );
}
