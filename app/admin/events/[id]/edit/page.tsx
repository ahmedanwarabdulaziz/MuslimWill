import { notFound } from 'next/navigation';
import { z } from 'zod';
import { prisma } from '@/lib/db';
import { EventForm, type EventFormInitialData } from '@/components/admin/EventForm';
import { OfferSchema, PackagePartSchema, StepSchema } from '@/lib/schemas';

function parseArray<T>(schema: z.ZodType<T>, value: unknown): T[] {
  const result = z.array(schema).safeParse(value);
  return result.success ? result.data : [];
}

export default async function EditEventPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const event = await prisma.event.findUnique({
    where: { id },
    include: { media: { orderBy: { order: 'asc' } } },
  });
  if (!event) notFound();

  const initialEvent: EventFormInitialData = {
    id: event.id,
    slug: event.slug,
    status: event.status,
    title: event.title,
    eventDate: event.eventDate ? event.eventDate.toISOString() : null,
    location: event.location,
    partnerName: event.partnerName,
    partnerLogoUrl: event.partnerLogoUrl,
    heroEyebrow: event.heroEyebrow,
    heroHeadline: event.heroHeadline,
    heroHeadlineAccent: event.heroHeadlineAccent,
    heroSubcopy: event.heroSubcopy,
    heroBadges: event.heroBadges,
    trustBarItems: event.trustBarItems,
    offers: parseArray(OfferSchema, event.offers),
    packageParts: parseArray(PackagePartSchema, event.packageParts),
    howItWorks: parseArray(StepSchema, event.howItWorks),
    helpPhone: event.helpPhone,
    helpEmail: event.helpEmail,
    metaTitle: event.metaTitle,
    metaDescription: event.metaDescription,
    ogImageUrl: event.ogImageUrl,
    media: event.media.map((m) => ({
      id: m.id,
      type: m.type,
      url: m.url,
      thumbnailUrl: m.thumbnailUrl,
      caption: m.caption,
    })),
  };

  return (
    <div>
      <h1>Edit: {event.title}</h1>
      <EventForm mode="edit" initialEvent={initialEvent} />
    </div>
  );
}
