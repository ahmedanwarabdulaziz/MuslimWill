import { revalidatePath } from 'next/cache';
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

type RouteContext = { params: Promise<{ id: string }> };

export async function POST(_req: Request, { params }: RouteContext) {
  try {
    const { id } = await params;

    const event = await prisma.event.findUnique({ where: { id } });
    if (!event) return NextResponse.json({ error: 'Event not found' }, { status: 404 });

    await prisma.$transaction([
      prisma.event.updateMany({ where: { isCurrent: true }, data: { isCurrent: false } }),
      prisma.event.update({ where: { id }, data: { isCurrent: true } }),
    ]);

    revalidatePath('/event');
    revalidatePath('/');
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error('Failed to set current event:', err);
    return NextResponse.json({ error: 'Failed to set current event.' }, { status: 500 });
  }
}
