import { after, NextResponse, type NextRequest } from 'next/server';
import { prisma } from '@/lib/db';
import { APP_HOST, ATTRIBUTION_COOKIE, ATTRIBUTION_KEYS, type Attribution } from '@/lib/outbound';

// Logs a click on a link to the app and redirects there. Links are rewritten to
// /go by OutboundLinkTracker at click time, so the click is recorded on our
// server even when the visitor leaves before client analytics can flush.

const BOT_UA = /bot|crawl|spider|slurp|facebookexternalhit|preview|headless/i;

function clip(value: string | null | undefined, max = 500) {
  return value ? value.slice(0, max) : null;
}

function readAttribution(request: NextRequest): Attribution {
  const raw = request.cookies.get(ATTRIBUTION_COOKIE)?.value;
  if (!raw) return {};
  try {
    return JSON.parse(raw) as Attribution;
  } catch {
    return {};
  }
}

export function GET(request: NextRequest) {
  const params = request.nextUrl.searchParams;
  const to = params.get('to') ?? '/Account/Register';

  // Only ever redirect to a path on the app host.
  const path = to.startsWith('/') && !to.startsWith('//') ? to : '/Account/Register';
  const destination = new URL(path, `https://${APP_HOST}`);

  const attribution = readAttribution(request);
  for (const key of ATTRIBUTION_KEYS) {
    if (key.startsWith('utm_') && attribution[key] && !destination.searchParams.has(key)) {
      destination.searchParams.set(key, attribution[key]);
    }
  }

  const userAgent = request.headers.get('user-agent') ?? '';
  if (!BOT_UA.test(userAgent)) {
    const clarityUserId = request.cookies.get('_clck')?.value.split('|')[0];
    after(async () => {
      try {
        await prisma.outboundClick.create({
          data: {
            destination: clip(path)!,
            sourcePage: clip(params.get('from')),
            linkText: clip(params.get('label'), 120),
            utmSource: clip(attribution.utm_source),
            utmMedium: clip(attribution.utm_medium),
            utmCampaign: clip(attribution.utm_campaign),
            utmContent: clip(attribution.utm_content),
            utmTerm: clip(attribution.utm_term),
            fbclid: clip(attribution.fbclid),
            landingPage: clip(attribution.landing),
            clarityUserId: clip(clarityUserId, 64),
            device: /mobile|android|iphone|ipad/i.test(userAgent) ? 'Mobile' : 'Desktop',
            country: clip(request.headers.get('x-vercel-ip-country'), 8),
            userAgent: clip(userAgent),
          },
        });
      } catch (err) {
        console.error('Failed to log outbound click:', err);
      }
    });
  }

  const response = NextResponse.redirect(destination, 302);
  response.headers.set('Cache-Control', 'no-store');
  response.headers.set('X-Robots-Tag', 'noindex');
  return response;
}
