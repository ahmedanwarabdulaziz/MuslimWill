import { revalidatePath } from 'next/cache';
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { EventCreateSchema } from '@/lib/schemas';
import { slugify } from '@/lib/slug';

export async function GET() {
  try {
    const events = await prisma.event.findMany({
      orderBy: { createdAt: 'desc' },
      include: { _count: { select: { media: true } } },
    });
    return NextResponse.json({ events }, { status: 200 });
  } catch (err) {
    console.error('Failed to list events:', err);
    return NextResponse.json({ error: 'Failed to load events.' }, { status: 500 });
  }
}

async function uniqueSlug(base: string): Promise<string> {
  const baseSlug = slugify(base) || 'event';
  let candidate = baseSlug;
  let suffix = 2;
  while (await prisma.event.findUnique({ where: { slug: candidate } })) {
    candidate = `${baseSlug}-${suffix}`;
    suffix += 1;
  }
  return candidate;
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = EventCreateSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ error: parsed.error.issues[0]?.message ?? 'Invalid event data' }, { status: 400 });
    }

    const { slug: requestedSlug, ...data } = parsed.data;
    const slug = requestedSlug ? await uniqueSlug(requestedSlug) : await uniqueSlug(data.title);

    const event = await prisma.event.create({ data: { ...data, slug } });
    revalidatePath('/events');
    revalidatePath('/');
    return NextResponse.json({ event }, { status: 201 });
  } catch (err) {
    console.error('Failed to create event:', err);
    return NextResponse.json({ error: 'Failed to create event.' }, { status: 500 });
  }
}
