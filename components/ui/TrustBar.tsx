import React from 'react';
import styles from './TrustBar.module.css';

interface TrustBarProps {
  items: string[];
}

export function TrustBar({ items }: TrustBarProps) {
  if (!items || items.length === 0) return null;

  const renderMobileItems = (keyPrefix: string) => (
    <>
      {items.map((item, index) => (
        <React.Fragment key={`${keyPrefix}-${index}`}>
          <div className={styles.trustAnchor}>{item}</div>
          <div className={styles.trustDivider}>•</div>
        </React.Fragment>
      ))}
    </>
  );

  return (
    <div className={styles.trustBar}>
      {/* Universal infinite marquee for both Desktop and Mobile */}
      <div className={styles.marqueeTrack}>
        <div className={styles.marqueeContent}>
          {renderMobileItems('track-1')}
          {renderMobileItems('track-2')}
        </div>
      </div>
    </div>
  );
}
