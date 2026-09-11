import { NextResponse } from 'next/server';
import { getUploadSignature } from '@/lib/cloudinary';

export async function POST() {
  try {
    const signature = getUploadSignature();
    return NextResponse.json(signature, { status: 200 });
  } catch (err) {
    console.error('Failed to sign upload:', err);
    return NextResponse.json({ error: 'Failed to prepare upload.' }, { status: 500 });
  }
}
