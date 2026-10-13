'use client';

import { useEffect, useState } from 'react';
import styles from './page.module.css';

function partsUntil(target: number) {
  const ms = Math.max(0, target - Date.now());
  return {
    ms,
    days: Math.floor(ms / 86_400_000),
    hours: Math.floor((ms % 86_400_000) / 3_600_000),
    minutes: Math.floor((ms % 3_600_000) / 60_000),
    seconds: Math.floor((ms % 60_000) / 1000),
  };
}

// Live countdown to the session start. Renders placeholders until mounted so
// the server HTML and first client render match.
export function Countdown({ startsAt }: { startsAt: string }) {
  const target = new Date(startsAt).getTime();
  const [parts, setParts] = useState<ReturnType<typeof partsUntil> | null>(null);

  useEffect(() => {
    const tick = () => setParts(partsUntil(target));
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, [target]);

  if (parts && parts.ms === 0) {
    return <div className={styles.countdownLive}>The session is underway. See you inside, in sha Allah.</div>;
  }

  const units: [string, number | undefined][] = [
    ['Days', parts?.days],
    ['Hours', parts?.hours],
    ['Min', parts?.minutes],
    ['Sec', parts?.seconds],
  ];

  return (
    <div className={styles.countdown} aria-label="Time until the session starts">
      <div className={styles.countdownLabel}>
        {parts && parts.days === 0 ? 'Happening tonight · starts in' : 'Session starts in'}
      </div>
      <div className={styles.countdownTiles}>
        {units.map(([label, value]) => (
          <div key={label} className={styles.countdownTile}>
            <span className={styles.countdownNum}>{value === undefined ? '--' : String(value).padStart(2, '0')}</span>
            <span className={styles.countdownUnit}>{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
