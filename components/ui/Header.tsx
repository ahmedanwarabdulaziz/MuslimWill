"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import {
  trackBookCallClick,
  trackNavigateClick,
  trackStartYourWillClick,
} from '@/lib/analytics';
import styles from './Header.module.css';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeMobileTab, setActiveMobileTab] = useState<string | null>(null);
  const pathname = usePathname();
  const headerRef = useRef<HTMLDivElement>(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  const toggleDropdown = (id: string) => {
    if (activeDropdown === id) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(id);
    }
  };

  const toggleMobileTab = (id: string) => {
    if (activeMobileTab === id) {
      setActiveMobileTab(null);
    } else {
      setActiveMobileTab(id);
    }
  };

  return (
    <div className={styles.headerWrapper} ref={headerRef}>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <Link href="/" className={styles.logo}>
            <Image src="/Images/Logo source without background.png" alt="Muslim Will Logo" width={160} height={56} className={styles.logoImage} priority />
          </Link>
          
          <nav className={styles.desktopNav}>
            <button 
              className={`${styles.navTab} ${activeDropdown === 'd1' ? styles.active : ''} ${activeDropdown === 'd1' ? styles.open : ''}`} 
              onClick={() => toggleDropdown('d1')}
            >
              Individuals &amp; Families <span className={styles.chevron}>▾</span>
            </button>
            <button 
              className={`${styles.navTab} ${activeDropdown === 'd2' ? styles.active : ''} ${activeDropdown === 'd2' ? styles.open : ''}`} 
              onClick={() => toggleDropdown('d2')}
            >
              Community &amp; Giving <span className={styles.chevron}>▾</span>
            </button>
            <button 
              className={`${styles.navTab} ${activeDropdown === 'd3' ? styles.active : ''} ${activeDropdown === 'd3' ? styles.open : ''}`} 
              onClick={() => toggleDropdown('d3')}
            >
              Professionals <span className={styles.chevron}>▾</span>
            </button>
            <button 
              className={`${styles.navTab} ${activeDropdown === 'd4' ? styles.active : ''} ${activeDropdown === 'd4' ? styles.open : ''}`} 
              onClick={() => toggleDropdown('d4')}
            >
              About <span className={styles.chevron}>▾</span>
            </button>
          </nav>

          <div className={styles.headerRight}>
            <Link 
              href="https://app.themuslimwill.com/Account/Login" 
              className={styles.navCta}
              onClick={() => trackStartYourWillClick('header_desktop')}
            >
              Get Started
            </Link>
            <button 
              className={`${styles.hamburger} ${mobileMenuOpen ? styles.open : ''}`} 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation"
            >
              <span></span><span></span><span></span>
            </button>
          </div>
        </div>
      </header>

      {/* D1: Individuals & Families */}
      <div className={`${styles.dropdown} ${styles.dropdownTriple} ${activeDropdown === 'd1' ? styles.open : ''}`} style={{ left: 'max(0px, calc(50% - 600px + 230px))' }}>
        <div className={styles.dropCol}>
          <div className={styles.dropColHeader}>
            <div className={styles.dropColLabel}><span className={styles.dropColLabelIcon}>🌉</span> My Bridge</div>
            <div className={styles.dropColSub}>Your will, powers of attorney, and charitable legacy</div>
          </div>
          <Link href="/last-will" className={styles.dropItem} onClick={() => { setActiveDropdown(null); trackNavigateClick('last_will', 'header_mega'); }}>
            <span className={styles.dropItemTitle}>Last Will &amp; Testament</span>
            <span className={styles.dropItemDesc}>Your documented wishes for how your estate is distributed</span>
          </Link>
          <Link href="/poa-personal" className={styles.dropItem} onClick={() => { setActiveDropdown(null); trackNavigateClick('poa_personal', 'header_mega'); }}>
            <span className={styles.dropItemTitle}>Power of Attorney for Personal Care</span>
            <span className={styles.dropItemDesc}>Designates a trusted person to make healthcare decisions</span>
          </Link>
          <Link href="/poa-property" className={styles.dropItem} onClick={() => { setActiveDropdown(null); trackNavigateClick('poa_property', 'header_mega'); }}>
            <span className={styles.dropItemTitle}>Power of Attorney for Property</span>
            <span className={styles.dropItemDesc}>Authorises a trusted person to manage financial affairs</span>
          </Link>
          <Link href="/charitable-legacy" className={styles.dropItem} onClick={() => { setActiveDropdown(null); trackNavigateClick('charitable_legacy', 'header_mega'); }}>
            <span className={styles.dropItemTitle}>Charitable Legacy</span>
            <span className={styles.dropItemDesc}>A lasting act of giving — Waqf or ongoing Sadaqah Jariyah</span>
          </Link>
        </div>
        <div className={`${styles.dropCol} ${styles.dropColBorderLeft}`}>
          <div className={styles.dropColHeader}>
            <div className={styles.dropColLabel}><span className={styles.dropColLabelIcon}>🔒</span> My Vault</div>
            <div className={styles.dropColSub}>Private records, documents, and messages</div>
          </div>
          <Link href="/vault/obligations-register" className={styles.dropItem} onClick={() => { setActiveDropdown(null); trackNavigateClick('obligations', 'header_mega'); }}>
            <span className={styles.dropItemTitle}>Obligations Register</span>
            <span className={styles.dropItemDesc}>Debts, loans, and personal obligations</span>
          </Link>
          <Link href="/vault/estate-inventory" className={styles.dropItem} onClick={() => { setActiveDropdown(null); trackNavigateClick('inventory', 'header_mega'); }}>
            <span className={styles.dropItemTitle}>Estate Inventory</span>
            <span className={styles.dropItemDesc}>Your accounts, assets, and holdings</span>
          </Link>
          <Link href="/vault/sealed-disclosures" className={styles.dropItem} onClick={() => { setActiveDropdown(null); trackNavigateClick('sealed', 'header_mega'); }}>
            <span className={styles.dropItemTitle}>Sealed Disclosures</span>
            <span className={styles.dropItemDesc}>Documents released to designated recipients upon passing</span>
          </Link>
          <Link href="/vault/final-words" className={styles.dropItem} onClick={() => { setActiveDropdown(null); trackNavigateClick('final_words', 'header_mega'); }}>
            <span className={styles.dropItemTitle}>Final Words</span>
            <span className={styles.dropItemDesc}>Personal voice messages for your loved ones</span>
          </Link>
        </div>
        <div className={styles.dropColCta}>
          <div className={styles.ctaTop}>
            <div className={styles.ctaEyebrow}>✦ Begin Your Journey</div>
            <div className={styles.ctaHeadline}>Protect your family.<br/>Honour your faith.</div>
            <div className={styles.ctaBody}>A guided, professionally managed process — from first question to signed document.</div>
            <Link href="https://app.themuslimwill.com/Account/Login" className={styles.ctaBtn} onClick={() => { setActiveDropdown(null); trackStartYourWillClick('header_mega'); }}>Start My Application →</Link>
          </div>
          <div className={styles.ctaLinks}>
            <Link href="/how-it-works" className={styles.ctaLink} onClick={() => { setActiveDropdown(null); trackNavigateClick('how_it_works', 'header_mega'); }}><span>How It Works</span><span className={styles.ctaLinkArrow}>›</span></Link>
            <Link href="/pricing" className={styles.ctaLink} onClick={() => { setActiveDropdown(null); trackNavigateClick('pricing', 'header_mega'); }}><span>Pricing</span><span className={styles.ctaLinkArrow}>›</span></Link>
            <Link href="/help" className={styles.ctaLink} onClick={() => { setActiveDropdown(null); trackNavigateClick('help', 'header_mega'); }}><span>Help Centre &amp; Blog</span><span className={styles.ctaLinkArrow}>›</span></Link>
          </div>
        </div>
      </div>

      {/* D2: Community & Giving */}
      <div className={`${styles.dropdown} ${styles.dropdownDouble} ${activeDropdown === 'd2' ? styles.open : ''}`} style={{ left: 'max(0px, calc(50% - 600px + 400px))' }}>
        <div className={styles.dropCol}>
          <div className={styles.dropColHeader}>
            <div className={styles.dropColLabel}><span className={styles.dropColLabelIcon}>🤝</span> For Charities &amp; Nonprofits</div>
            <div className={styles.dropColSub}>Institutional giving and donor estate planning</div>
          </div>
          <Link href="/community/charity-partnership" className={styles.dropItem} onClick={() => setActiveDropdown(null)}>
            <span className={styles.dropItemTitle}>Charity Partnership</span>
            <span className={styles.dropItemDesc}>Co-brand a dedicated will planning page</span>
          </Link>
          <Link href="/community/sponsored-seats" className={styles.dropItem} onClick={() => setActiveDropdown(null)}>
            <span className={styles.dropItemTitle}>Sponsored Seats</span>
            <span className={styles.dropItemDesc}>Fund will preparation for families who need it</span>
          </Link>
          <Link href="/community/planned-giving" className={styles.dropItem} onClick={() => setActiveDropdown(null)}>
            <span className={styles.dropItemTitle}>Planned Giving</span>
            <span className={styles.dropItemDesc}>Help your donors structure meaningful bequests</span>
          </Link>
        </div>
        <div className={`${styles.dropCol} ${styles.dropColBorderLeft}`} style={{ justifyContent: 'space-between', paddingBottom: 0 }}>
          <div>
            <div className={styles.dropColHeader}>
              <div className={styles.dropColLabel}><span className={styles.dropColLabelIcon}>🕌</span> For Masjids &amp; Islamic Centres</div>
              <div className={styles.dropColSub}>Community-rooted partnerships</div>
            </div>
            <Link href="/community/mosque-ambassador" className={styles.dropItem} onClick={() => setActiveDropdown(null)}>
              <span className={styles.dropItemTitle}>Mosque Ambassador Programme</span>
              <span className={styles.dropItemDesc}>Bring a trusted will planning service to your congregation</span>
            </Link>
            <Link href="/community/community-resources" className={styles.dropItem} onClick={() => setActiveDropdown(null)}>
              <span className={styles.dropItemTitle}>Community Resources</span>
              <span className={styles.dropItemDesc}>Khutbah guides and awareness materials</span>
            </Link>
          </div>
          <div className={styles.smallCtaBlock}>
            <div className={styles.ctaEyebrow}>✦ Partner With Us</div>
            <div className={styles.ctaBody}>Book a walkthrough with our partnerships team.</div>
            <Link href="/community/request-demo" className={styles.ctaBtn} style={{ marginTop: '4px', padding: '10px 0' }} onClick={() => setActiveDropdown(null)}>Request a Demo →</Link>
          </div>
        </div>
      </div>

      {/* D3: Professionals */}
      <div className={`${styles.dropdown} ${styles.dropdownProfessionals} ${activeDropdown === 'd3' ? styles.open : ''}`} style={{ left: 'max(0px, calc(50% - 600px + 450px))' }}>
        <div className={styles.dropProfessionalsCols}>
          <div className={styles.dropCol}>
            <div className={styles.dropColHeader}>
              <div className={styles.dropColLabel}><span className={styles.dropColLabelIcon}>📊</span> Wealth &amp; Planning</div>
              <div className={styles.dropColSub}>For advisors managing the broader financial picture</div>
            </div>
            <Link href="/professionals/financial-advisors" className={styles.dropItem} onClick={() => setActiveDropdown(null)}>
              <span className={styles.dropItemTitle}>For Financial Advisors</span>
              <span className={styles.dropItemDesc}>Help clients complete the estate planning picture</span>
            </Link>
            <Link href="/professionals/estate-planners" className={styles.dropItem} onClick={() => setActiveDropdown(null)}>
              <span className={styles.dropItemTitle}>For Estate Planners &amp; Trustees</span>
              <span className={styles.dropItemDesc}>Integrate Islamic inheritance compliance</span>
            </Link>
          </div>
          <div className={`${styles.dropCol} ${styles.dropColBorderLeft}`}>
            <div className={styles.dropColHeader}>
              <div className={styles.dropColLabel}><span className={styles.dropColLabelIcon}>⚖️</span> Legal</div>
              <div className={styles.dropColSub}>For practitioners who work with estate documents</div>
            </div>
            <Link href="/professionals/lawyers" className={styles.dropItem} onClick={() => setActiveDropdown(null)}>
              <span className={styles.dropItemTitle}>For Lawyers</span>
              <span className={styles.dropItemDesc}>A structured referral pathway for clients</span>
            </Link>
            <Link href="/professionals/paralegals" className={styles.dropItem} onClick={() => setActiveDropdown(null)}>
              <span className={styles.dropItemTitle}>For Paralegals</span>
              <span className={styles.dropItemDesc}>Support your supervising lawyer's estate clients</span>
            </Link>
          </div>
          <div className={`${styles.dropCol} ${styles.dropColBorderLeft}`}>
            <div className={styles.dropColHeader}>
              <div className={styles.dropColLabel}><span className={styles.dropColLabelIcon}>🕌</span> Community &amp; Faith</div>
              <div className={styles.dropColSub}>For those who serve Muslim communities</div>
            </div>
            <Link href="/professionals/for-imams" className={styles.dropItem} onClick={() => setActiveDropdown(null)}>
              <span className={styles.dropItemTitle}>For Imams</span>
              <span className={styles.dropItemDesc}>Mosque Ambassador Programme</span>
            </Link>
            <Link href="/professionals/for-scholars" className={styles.dropItem} onClick={() => setActiveDropdown(null)}>
              <span className={styles.dropItemTitle}>For Scholars</span>
              <span className={styles.dropItemDesc}>Join our network of qualified Islamic scholars</span>
            </Link>
          </div>
        </div>
        <div className={styles.dropFooterBar}>
          <div className={styles.dropFooterTop}>
            <span className={styles.dropFooterEyebrow}>✦ Partner With Us</span>
            <span className={styles.dropFooterText}>A structured referral and partnership programme.</span>
          </div>
          <div className={styles.dropFooterBottom}>
            <div className={styles.dropFooterLinks}>
              <Link href="/about/compliance" className={styles.dropFooterLink} onClick={() => setActiveDropdown(null)}>Our Compliance Framework ›</Link>
              <Link href="/about/our-scholars" className={styles.dropFooterLink} onClick={() => setActiveDropdown(null)}>Meet Our Scholars ›</Link>
              <Link href="/about/contact" className={styles.dropFooterLink} onClick={() => setActiveDropdown(null)}>Contact Our Team ›</Link>
            </div>
            <Link href="/community/request-demo" className={`${styles.ctaBtn} ${styles.dropFooterCta}`} onClick={() => setActiveDropdown(null)}>Request a Demo →</Link>
          </div>
        </div>
      </div>

      {/* D4: About */}
      <div className={`${styles.dropdown} ${styles.dropdownDouble} ${activeDropdown === 'd4' ? styles.open : ''}`} style={{ left: 'max(0px, calc(50% - 600px + 600px))' }}>
        <div className={styles.dropCol}>
          <div className={styles.dropColHeader}>
            <div className={styles.dropColLabel}><span className={styles.dropColLabelIcon}>✨</span> Our Company</div>
            <div className={styles.dropColSub}>The people, mission, and principles</div>
          </div>
          <Link href="/about/our-story" className={styles.dropItem} onClick={() => { setActiveDropdown(null); trackNavigateClick('about', 'header_mega'); }}>
            <span className={styles.dropItemTitle}>Our Story</span>
            <span className={styles.dropItemDesc}>How The Muslim Will came to be</span>
          </Link>
          <Link href="/about/our-team" className={styles.dropItem} onClick={() => setActiveDropdown(null)}>
            <span className={styles.dropItemTitle}>Our Team</span>
            <span className={styles.dropItemDesc}>Estate planning specialists and experts</span>
          </Link>
          <Link href="/about/our-scholars" className={styles.dropItem} onClick={() => setActiveDropdown(null)}>
            <span className={styles.dropItemTitle}>Our Scholars</span>
            <span className={styles.dropItemDesc}>Meet the qualified Islamic scholars who review every application</span>
          </Link>
        </div>
        <div className={`${styles.dropCol} ${styles.dropColBorderLeft}`} style={{ justifyContent: 'space-between', paddingBottom: 0 }}>
          <div>
            <div className={styles.dropColHeader}>
              <div className={styles.dropColLabel}><span className={styles.dropColLabelIcon}>🛡️</span> Trust &amp; Transparency</div>
              <div className={styles.dropColSub}>How we are structured and how we operate</div>
            </div>
            <Link href="/about/compliance" className={styles.dropItem} onClick={() => { setActiveDropdown(null); trackNavigateClick('compliance', 'header_mega'); }}>
              <span className={styles.dropItemTitle}>Compliance</span>
              <span className={styles.dropItemDesc}>How The Muslim Will is structured to meet provincial requirements</span>
            </Link>
            <Link href="/about/faq" className={styles.dropItem} onClick={() => { setActiveDropdown(null); trackNavigateClick('faq', 'header_mega'); }}>
              <span className={styles.dropItemTitle}>FAQ</span>
              <span className={styles.dropItemDesc}>Clear answers to the questions families ask most</span>
            </Link>
          </div>
          <div className={styles.smallCtaBlock}>
            <div className={styles.ctaEyebrow}>✦ Get In Touch</div>
            <div className={styles.ctaBody}>Reach the right team — whether you are a prospective client, an organisation, or a professional.</div>
            <Link href="/about/contact" className={styles.ctaBtn} style={{ marginTop: '4px', padding: '10px 0' }} onClick={() => setActiveDropdown(null)}>Contact Us →</Link>
          </div>
        </div>
      </div>

      {/* MOBILE DRAWER */}
      <div className={`${styles.mobileDrawer} ${mobileMenuOpen ? styles.open : ''}`}>
        <div className={styles.mobileTabHeader} onClick={() => toggleMobileTab('mt1')}>
          Individuals &amp; Families <span className={styles.mChevron}>▶</span>
        </div>
        <div className={`${styles.mobileTabBody} ${activeMobileTab === 'mt1' ? styles.open : ''}`}>
          <div className={styles.mobileCtaBlock}>
            <div className={styles.mobileCtaEyebrow}>✦ Begin Your Journey</div>
            <div className={styles.mobileCtaTitle}>Protect your family.<br/>Honour your faith.</div>
            <div className={styles.mobileCtaBody}>A guided, professionally managed process — from first question to signed document.</div>
            <Link href="https://app.themuslimwill.com/Account/Login" className={styles.mobileCtaBtn} onClick={() => { setMobileMenuOpen(false); trackStartYourWillClick('header_mobile'); }}>Start My Application →</Link>
          </div>
          
          <div className={styles.mobileSubgroupLabel}>🌉 My Bridge</div>
          <Link href="/last-will" className={styles.mobileItem} onClick={() => setMobileMenuOpen(false)}>
            <div className={styles.mobileItemTitle}>Last Will &amp; Testament</div>
            <div className={styles.mobileItemDesc}>Your documented wishes for how your estate is distributed</div>
          </Link>
          <Link href="/poa-personal" className={styles.mobileItem} onClick={() => setMobileMenuOpen(false)}>
            <div className={styles.mobileItemTitle}>POA for Personal Care</div>
            <div className={styles.mobileItemDesc}>Healthcare and personal decision-making authority</div>
          </Link>
          <Link href="/poa-property" className={styles.mobileItem} onClick={() => setMobileMenuOpen(false)}>
            <div className={styles.mobileItemTitle}>POA for Property</div>
            <div className={styles.mobileItemDesc}>Financial affairs and property management</div>
          </Link>
          <Link href="/charitable-legacy" className={styles.mobileItem} onClick={() => setMobileMenuOpen(false)}>
            <div className={styles.mobileItemTitle}>Charitable Legacy</div>
            <div className={styles.mobileItemDesc}>Waqf and Sadaqah Jariyah designations</div>
          </Link>

          <div className={styles.mobileSubgroupLabel}>🔒 My Vault</div>
          <Link href="/vault/obligations-register" className={styles.mobileItem} onClick={() => setMobileMenuOpen(false)}>
            <div className={styles.mobileItemTitle}>Obligations Register</div>
            <div className={styles.mobileItemDesc}>Debts, loans, and personal obligations</div>
          </Link>
          <Link href="/vault/estate-inventory" className={styles.mobileItem} onClick={() => setMobileMenuOpen(false)}>
            <div className={styles.mobileItemTitle}>Estate Inventory</div>
            <div className={styles.mobileItemDesc}>Your accounts, assets, and holdings</div>
          </Link>
          <Link href="/vault/sealed-disclosures" className={styles.mobileItem} onClick={() => setMobileMenuOpen(false)}>
            <div className={styles.mobileItemTitle}>Sealed Disclosures</div>
            <div className={styles.mobileItemDesc}>Released to designated recipients upon passing</div>
          </Link>
          <Link href="/vault/final-words" className={styles.mobileItem} onClick={() => setMobileMenuOpen(false)}>
            <div className={styles.mobileItemTitle}>Final Words</div>
            <div className={styles.mobileItemDesc}>Personal voice messages for your loved ones</div>
          </Link>

          <div className={styles.mobileSectionLabel}>More</div>
          <Link href="/how-it-works" className={styles.mobileItem} onClick={() => setMobileMenuOpen(false)}>
            <div className={styles.mobileItemTitle}>How It Works</div>
          </Link>
          <Link href="/pricing" className={styles.mobileItem} onClick={() => setMobileMenuOpen(false)}>
            <div className={styles.mobileItemTitle}>Pricing</div>
          </Link>
          <Link href="/help" className={styles.mobileItem} onClick={() => setMobileMenuOpen(false)}>
            <div className={styles.mobileItemTitle}>Help Centre &amp; Blog</div>
          </Link>
        </div>

        <div className={styles.mobileTabHeader} onClick={() => toggleMobileTab('mt2')}>
          Community &amp; Giving <span className={styles.mChevron}>▶</span>
        </div>
        <div className={`${styles.mobileTabBody} ${activeMobileTab === 'mt2' ? styles.open : ''}`}>
          <div className={styles.mobileCtaBlock}>
            <div className={styles.mobileCtaEyebrow}>✦ Partner With Us</div>
            <div className={styles.mobileCtaTitle}>Protect the families you serve.</div>
            <div className={styles.mobileCtaBody}>Co-branded programmes, sponsored seats, and community outreach tools.</div>
            <Link href="/community/request-demo" className={styles.mobileCtaBtn} onClick={() => setMobileMenuOpen(false)}>Request a Demo →</Link>
          </div>
          
          <div className={styles.mobileSubgroupLabel}>🤝 For Charities &amp; Nonprofits</div>
          <Link href="/community/charity-partnership" className={styles.mobileItem} onClick={() => setMobileMenuOpen(false)}>
            <div className={styles.mobileItemTitle}>Charity Partnership</div>
            <div className={styles.mobileItemDesc}>Co-brand a dedicated will planning page for your community</div>
          </Link>
          <Link href="/community/sponsored-seats" className={styles.mobileItem} onClick={() => setMobileMenuOpen(false)}>
            <div className={styles.mobileItemTitle}>Sponsored Seats</div>
            <div className={styles.mobileItemDesc}>Fund will preparation for families who need it</div>
          </Link>
          <Link href="/community/planned-giving" className={styles.mobileItem} onClick={() => setMobileMenuOpen(false)}>
            <div className={styles.mobileItemTitle}>Planned Giving</div>
            <div className={styles.mobileItemDesc}>Help your donors structure meaningful bequests</div>
          </Link>

          <div className={styles.mobileSubgroupLabel}>🕌 For Masjids &amp; Islamic Centres</div>
          <Link href="/community/mosque-ambassador" className={styles.mobileItem} onClick={() => setMobileMenuOpen(false)}>
            <div className={styles.mobileItemTitle}>Mosque Ambassador Programme</div>
            <div className={styles.mobileItemDesc}>Bring a trusted service to your congregation</div>
          </Link>
          <Link href="/community/community-resources" className={styles.mobileItem} onClick={() => setMobileMenuOpen(false)}>
            <div className={styles.mobileItemTitle}>Community Resources</div>
            <div className={styles.mobileItemDesc}>Khutbah guides and outreach materials</div>
          </Link>
        </div>

        <div className={styles.mobileTabHeader} onClick={() => toggleMobileTab('mt3')}>
          Professionals <span className={styles.mChevron}>▶</span>
        </div>
        <div className={`${styles.mobileTabBody} ${activeMobileTab === 'mt3' ? styles.open : ''}`}>
          <div className={styles.mobileCtaBlock}>
            <div className={styles.mobileCtaEyebrow}>✦ Partner With Us</div>
            <div className={styles.mobileCtaTitle}>Serve your clients better.</div>
            <div className={styles.mobileCtaBody}>A structured referral and partnership programme built for professionals in estate planning, law, and community leadership.</div>
            <Link href="/community/request-demo" className={styles.mobileCtaBtn} onClick={() => setMobileMenuOpen(false)}>Request a Demo →</Link>
          </div>
          
          <div className={styles.mobileSubgroupLabel}>📊 Wealth &amp; Planning</div>
          <Link href="/professionals/financial-advisors" className={styles.mobileItem} onClick={() => setMobileMenuOpen(false)}>
            <div className={styles.mobileItemTitle}>For Financial Advisors</div>
          </Link>
          <Link href="/professionals/estate-planners" className={styles.mobileItem} onClick={() => setMobileMenuOpen(false)}>
            <div className={styles.mobileItemTitle}>For Estate Planners &amp; Trustees</div>
          </Link>

          <div className={styles.mobileSubgroupLabel}>⚖️ Legal</div>
          <Link href="/professionals/lawyers" className={styles.mobileItem} onClick={() => setMobileMenuOpen(false)}>
            <div className={styles.mobileItemTitle}>For Lawyers</div>
          </Link>
          <Link href="/professionals/paralegals" className={styles.mobileItem} onClick={() => setMobileMenuOpen(false)}>
            <div className={styles.mobileItemTitle}>For Paralegals</div>
          </Link>

          <div className={styles.mobileSubgroupLabel}>🕌 Community &amp; Faith</div>
          <Link href="/professionals/for-imams" className={styles.mobileItem} onClick={() => setMobileMenuOpen(false)}>
            <div className={styles.mobileItemTitle}>For Imams — Mosque Ambassador Programme</div>
          </Link>
          <Link href="/professionals/for-scholars" className={styles.mobileItem} onClick={() => setMobileMenuOpen(false)}>
            <div className={styles.mobileItemTitle}>For Scholars</div>
          </Link>
        </div>

        <div className={styles.mobileTabHeader} onClick={() => toggleMobileTab('mt4')}>
          About <span className={styles.mChevron}>▶</span>
        </div>
        <div className={`${styles.mobileTabBody} ${activeMobileTab === 'mt4' ? styles.open : ''}`}>
          <div className={styles.mobileSubgroupLabel}>✨ Our Company</div>
          <Link href="/about/our-story" className={styles.mobileItem} onClick={() => setMobileMenuOpen(false)}>
            <div className={styles.mobileItemTitle}>Our Story</div>
          </Link>
          <Link href="/about/our-team" className={styles.mobileItem} onClick={() => setMobileMenuOpen(false)}>
            <div className={styles.mobileItemTitle}>Our Team</div>
          </Link>
          <Link href="/about/our-scholars" className={styles.mobileItem} onClick={() => setMobileMenuOpen(false)}>
            <div className={styles.mobileItemTitle}>Our Scholars</div>
          </Link>
          
          <div className={styles.mobileSubgroupLabel}>🛡️ Trust &amp; Transparency</div>
          <Link href="/about/compliance" className={styles.mobileItem} onClick={() => setMobileMenuOpen(false)}>
            <div className={styles.mobileItemTitle}>Compliance</div>
          </Link>
          <Link href="/about/faq" className={styles.mobileItem} onClick={() => setMobileMenuOpen(false)}>
            <div className={styles.mobileItemTitle}>FAQ</div>
          </Link>
          <Link href="/about/contact" className={styles.mobileItem} onClick={() => setMobileMenuOpen(false)}>
            <div className={styles.mobileItemTitle}>Contact Us</div>
          </Link>
        </div>
      </div>
    </div>
  );
}
