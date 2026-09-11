import { revalidatePath } from 'next/cache';
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { deleteMedia } from '@/lib/cloudinary';
import { EventUpdateSchema } from '@/lib/schemas';
import { slugify } from '@/lib/slug';

type RouteContext = { params: Promise<{ id: string }> };

export async function GET(_req: Request, { params }: RouteContext) {
  try {
    const { id } = await params;
    const event = await prisma.event.findUnique({
      where: { id },
      include: { media: { orderBy: { order: 'asc' } } },
    });
    if (!event) return NextResponse.json({ error: 'Event not found' }, { status: 404 });
    return NextResponse.json({ event }, { status: 200 });
  } catch (err) {
    console.error('Failed to load event:', err);
    return NextResponse.json({ error: 'Failed to load event.' }, { status: 500 });
  }
}

export async function PUT(req: Request, { params }: RouteContext) {
  try {
    const { id } = await params;
    const body = await req.json();
    const parsed = EventUpdateSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ error: parsed.error.issues[0]?.message ?? 'Invalid event data' }, { status: 400 });
    }

    const { slug: requestedSlug, ...data } = parsed.data;
    let slug: string | undefined;
    if (requestedSlug) {
      const normalized = slugify(requestedSlug);
      const existing = await prisma.event.findUnique({ where: { slug: normalized } });
      if (existing && existing.id !== id) {
        return NextResponse.json({ error: 'That slug is already in use by another event.' }, { status: 400 });
      }
      slug = normalized;
    }

    const event = await prisma.event.update({
      where: { id },
      data: { ...data, ...(slug ? { slug } : {}) },
    });

    revalidatePath('/events');
    revalidatePath(`/events/${event.slug}`);
    revalidatePath('/');
    return NextResponse.json({ event }, { status: 200 });
  } catch (err) {
    console.error('Failed to update event:', err);
    return NextResponse.json({ error: 'Failed to update event.' }, { status: 500 });
  }
}

export async function DELETE(_req: Request, { params }: RouteContext) {
  try {
    const { id } = await params;
    const event = await prisma.event.findUnique({ where: { id }, include: { media: true } });
    if (!event) return NextResponse.json({ error: 'Event not found' }, { status: 404 });

    for (const item of event.media) {
      try {
        await deleteMedia(item.publicId, item.type === 'VIDEO' ? 'video' : 'image');
      } catch (mediaErr) {
        console.error(`Failed to delete Cloudinary asset ${item.publicId}:`, mediaErr);
      }
    }

    await prisma.event.delete({ where: { id } });
    revalidatePath('/events');
    revalidatePath(`/events/${event.slug}`);
    revalidatePath('/gallery');
    revalidatePath('/');
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error('Failed to delete event:', err);
    return NextResponse.json({ error: 'Failed to delete event.' }, { status: 500 });
  }
}
