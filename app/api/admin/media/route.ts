import { revalidatePath } from 'next/cache';
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { MediaCreateSchema } from '@/lib/schemas';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = MediaCreateSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ error: parsed.error.issues[0]?.message ?? 'Invalid media data' }, { status: 400 });
    }

    const event = await prisma.event.findUnique({ where: { id: parsed.data.eventId } });
    if (!event) {
      return NextResponse.json({ error: 'Event not found' }, { status: 404 });
    }

    const maxOrder = await prisma.media.aggregate({
      where: { eventId: parsed.data.eventId },
      _max: { order: true },
    });

    const media = await prisma.media.create({
      data: { ...parsed.data, order: (maxOrder._max.order ?? -1) + 1 },
    });

    revalidatePath(`/events/${event.slug}`);
    revalidatePath('/gallery');
    revalidatePath('/');
    revalidatePath('/event');
    return NextResponse.json({ media }, { status: 201 });
  } catch (err) {
    console.error('Failed to save media:', err);
    return NextResponse.json({ error: 'Failed to save media.' }, { status: 500 });
  }
}
