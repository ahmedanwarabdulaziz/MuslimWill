'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import styles from './AdminNav.module.css';

export function AdminNav() {
  const pathname = usePathname();
  const router = useRouter();

  if (pathname === '/admin/login') return null;

  async function handleLogout() {
    await fetch('/api/admin/logout', { method: 'POST' });
    router.push('/admin/login');
    router.refresh();
  }

  return (
    <nav className={styles.nav}>
      <Link href="/admin" className={styles.brand}>
        Muslim Will Admin
      </Link>
      <div className={styles.links}>
        <Link href="/admin">Events</Link>
        <Link href="/admin/rsvps">RSVPs</Link>
        <Link href="/admin/clicks">Clicks</Link>
        <Link href="/" target="_blank">
          View site
        </Link>
        <button type="button" className={styles.logoutBtn} onClick={handleLogout}>
          Log out
        </button>
      </div>
    </nav>
  );
}
