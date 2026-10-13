'use client';

import { useEffect, useState } from 'react';
import styles from './page.module.css';

// Mobile-only bar that keeps "RSVP Now" in reach until the form is on screen.
export function StickyRsvpBar() {
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    const target = document.getElementById('rsvp');
    if (!target) return;

    const onScroll = () => {
      const pastHero = window.scrollY > 400;
      const formVisible = target.getBoundingClientRect().top < window.innerHeight;
      setHidden(!pastHero || formVisible);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className={`${styles.stickyBar} ${hidden ? styles.stickyHidden : ''}`}>
      <a href="#rsvp" className={styles.primaryBtn}>Save My Seat</a>
    </div>
  );
}
