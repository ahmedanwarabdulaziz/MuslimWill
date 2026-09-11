import { createHash, timingSafeEqual } from 'crypto';
import { NextResponse } from 'next/server';
import { ADMIN_COOKIE_NAME, ADMIN_SESSION_MAX_AGE, createAdminSessionToken } from '@/lib/auth';
import { LoginSchema } from '@/lib/schemas';

function safeCompare(a: string, b: string) {
  const hashA = createHash('sha256').update(a).digest();
  const hashB = createHash('sha256').update(b).digest();
  return timingSafeEqual(hashA, hashB);
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = LoginSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ error: 'Password is required' }, { status: 400 });
    }

    const adminPassword = process.env.ADMIN_PASSWORD;
    if (!adminPassword) {
      console.error('ADMIN_PASSWORD is not set');
      return NextResponse.json({ error: 'Admin login is not configured' }, { status: 500 });
    }

    if (!safeCompare(parsed.data.password, adminPassword)) {
      return NextResponse.json({ error: 'Invalid password' }, { status: 401 });
    }

    const token = await createAdminSessionToken();
    const response = NextResponse.json({ success: true }, { status: 200 });
    response.cookies.set(ADMIN_COOKIE_NAME, token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: ADMIN_SESSION_MAX_AGE,
    });
    return response;
  } catch (err) {
    console.error('Admin login failed:', err);
    return NextResponse.json({ error: 'Failed to log in. Please try again.' }, { status: 500 });
  }
}
