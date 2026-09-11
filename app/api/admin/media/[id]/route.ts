import { revalidatePath } from 'next/cache';
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { deleteMedia } from '@/lib/cloudinary';
import { MediaUpdateSchema } from '@/lib/schemas';

type RouteContext = { params: Promise<{ id: string }> };

export async function PATCH(req: Request, { params }: RouteContext) {
  try {
    const { id } = await params;
    const body = await req.json();
    const parsed = MediaUpdateSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ error: 'Invalid media update' }, { status: 400 });
    }

    const media = await prisma.media.update({ where: { id }, data: parsed.data });
    return NextResponse.json({ media }, { status: 200 });
  } catch (err) {
    console.error('Failed to update media:', err);
    return NextResponse.json({ error: 'Failed to update media.' }, { status: 500 });
  }
}

export async function DELETE(_req: Request, { params }: RouteContext) {
  try {
    const { id } = await params;
    const media = await prisma.media.findUnique({ where: { id }, include: { event: true } });
    if (!media) return NextResponse.json({ error: 'Media not found' }, { status: 404 });

    await deleteMedia(media.publicId, media.type === 'VIDEO' ? 'video' : 'image');
    await prisma.media.delete({ where: { id } });

    revalidatePath(`/events/${media.event.slug}`);
    revalidatePath('/gallery');
    revalidatePath('/');
    revalidatePath('/event');
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error('Failed to delete media:', err);
    return NextResponse.json({ error: 'Failed to delete media.' }, { status: 500 });
  }
}
