'use client';

import { useEffect } from 'react';
import { APP_HOST, ATTRIBUTION_COOKIE, ATTRIBUTION_KEYS, type Attribution } from '@/lib/outbound';

const COOKIE_MAX_AGE = 60 * 60 * 24 * 30;

// Remembers the campaign a visitor arrived from (utm_* / fbclid) and routes every
// click on an app.themuslimwill.com link through /go, which logs it server-side.
export function OutboundLinkTracker() {
  useEffect(() => {
    const search = new URLSearchParams(window.location.search);
    if (ATTRIBUTION_KEYS.some((key) => search.has(key))) {
      const attribution: Attribution = { landing: window.location.pathname };
      for (const key of ATTRIBUTION_KEYS) {
        const value = search.get(key);
        if (value) attribution[key] = value.slice(0, 300);
      }
      document.cookie = `${ATTRIBUTION_COOKIE}=${encodeURIComponent(JSON.stringify(attribution))}; Max-Age=${COOKIE_MAX_AGE}; Path=/; SameSite=Lax`;
    }

    function handleClick(event: MouseEvent) {
      const anchor = (event.target as Element | null)?.closest?.('a[href]') as HTMLAnchorElement | null;
      if (!anchor) return;

      let url: URL;
      try {
        url = new URL(anchor.href);
      } catch {
        return;
      }
      if (url.hostname !== APP_HOST) return;

      const go = new URLSearchParams({
        to: url.pathname + url.search,
        from: window.location.pathname,
        label: (anchor.textContent ?? '').trim().replace(/\s+/g, ' ').slice(0, 80),
      });
      anchor.href = `/go?${go.toString()}`;
    }

    document.addEventListener('click', handleClick, true);
    document.addEventListener('auxclick', handleClick, true);
    return () => {
      document.removeEventListener('click', handleClick, true);
      document.removeEventListener('auxclick', handleClick, true);
    };
  }, []);

  return null;
}
