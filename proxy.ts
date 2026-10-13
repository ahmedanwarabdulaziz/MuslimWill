import { NextResponse, type NextRequest } from 'next/server';
import { ADMIN_COOKIE_NAME, verifyAdminSessionToken } from '@/lib/auth';

const PUBLIC_ADMIN_PATHS = ['/admin/login', '/api/admin/login'];

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // The flyer prints /RSVP; send anyone who types it in lowercase to the same page.
  if (pathname === '/rsvp') {
    return NextResponse.redirect(new URL('/RSVP' + request.nextUrl.search, request.url));
  }
  if (!pathname.startsWith('/admin') && !pathname.startsWith('/api/admin')) {
    return NextResponse.next();
  }

  if (PUBLIC_ADMIN_PATHS.some((path) => pathname === path)) {
    return NextResponse.next();
  }

  const token = request.cookies.get(ADMIN_COOKIE_NAME)?.value;
  const isAuthenticated = await verifyAdminSessionToken(token);

  if (isAuthenticated) {
    return NextResponse.next();
  }

  if (pathname.startsWith('/api/admin')) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const loginUrl = new URL('/admin/login', request.url);
  return NextResponse.redirect(loginUrl);
}

export const config = {
  matcher: ['/admin/:path*', '/api/admin/:path*', '/rsvp'],
};
