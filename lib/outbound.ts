export const APP_HOST = 'app.themuslimwill.com';
export const ATTRIBUTION_COOKIE = 'mw_attr';

export const ATTRIBUTION_KEYS = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_content',
  'utm_term',
  'fbclid',
] as const;

export type Attribution = Partial<Record<(typeof ATTRIBUTION_KEYS)[number] | 'landing', string>>;
