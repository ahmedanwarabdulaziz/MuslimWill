export type AnalyticsValue = string | number | boolean;
export type AnalyticsParams = Record<string, AnalyticsValue | undefined>;

declare global {
  interface Window {
    clarity?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

function sanitizeParams(params?: AnalyticsParams) {
  if (!params) {
    return {};
  }

  return Object.fromEntries(
    Object.entries(params).filter(([, value]) => value !== undefined)
  );
}

export function trackEvent(eventName: string, params?: AnalyticsParams) {
  if (typeof window === 'undefined') {
    return;
  }

  const cleanParams = sanitizeParams(params);

  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, cleanParams);
  }

  if (typeof window.clarity === 'function') {
    window.clarity('event', eventName);
  }
}

export function trackStartYourWillClick(location: string) {
  trackEvent('start_your_will_click', { location });
}

export function trackBookCallClick(location: string) {
  trackEvent('book_call_click', { location });
}

export function trackNavigateClick(target: string, location: string) {
  trackEvent('navigation_click', { target, location });
}
