import type { Metadata } from 'next';
import { AdminNav } from '@/components/admin/AdminNav';
import styles from './layout.module.css';

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <AdminNav />
      <div className={styles.content}>{children}</div>
    </div>
  );
}
