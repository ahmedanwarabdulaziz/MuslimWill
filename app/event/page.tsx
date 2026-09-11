import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { prisma } from '@/lib/db';
import { EventDetailView } from '@/components/events/EventDetailView';

export const revalidate = 60;

async function getCurrentEvent() {
  return prisma.event.findFirst({ where: { isCurrent: true } });
}

export async function generateMetadata(): Promise<Metadata> {
  const event = await getCurrentEvent();
  if (!event) return {};

  return {
    title: event.metaTitle || `${event.title} | Muslim Will`,
    description: event.metaDescription || event.heroSubcopy || undefined,
    robots: { index: false, follow: false },
    openGraph: event.ogImageUrl ? { images: [event.ogImageUrl] } : undefined,
  };
}

export default async function CurrentEventPage() {
  const event = await getCurrentEvent();
  if (!event) notFound();

  return <EventDetailView event={event} />;
}
