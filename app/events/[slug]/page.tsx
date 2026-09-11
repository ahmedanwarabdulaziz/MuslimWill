import type { Metadata } from 'next';
import { cookies } from 'next/headers';
import { notFound } from 'next/navigation';
import { prisma } from '@/lib/db';
import { ADMIN_COOKIE_NAME, verifyAdminSessionToken } from '@/lib/auth';
import { EventDetailView } from '@/components/events/EventDetailView';

export const revalidate = 60;

async function getEvent(slug: string) {
  const event = await prisma.event.findUnique({ where: { slug } });
  if (!event) return null;

  if (event.status === 'DRAFT') {
    const token = (await cookies()).get(ADMIN_COOKIE_NAME)?.value;
    const isAdmin = await verifyAdminSessionToken(token);
    if (!isAdmin) return null;
  }

  return event;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const event = await getEvent(slug);
  if (!event) return {};

  return {
    title: event.metaTitle || `${event.title} | Muslim Will`,
    description: event.metaDescription || event.heroSubcopy || undefined,
    robots: { index: event.status !== 'DRAFT', follow: event.status !== 'DRAFT' },
    alternates: { canonical: `https://www.themuslimwill.com/events/${event.slug}` },
    openGraph: event.ogImageUrl ? { images: [event.ogImageUrl] } : undefined,
  };
}

export default async function EventDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const event = await getEvent(slug);
  if (!event) notFound();

  return <EventDetailView event={event} />;
}
