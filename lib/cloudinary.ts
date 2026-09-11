import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const UPLOAD_FOLDER = 'muslimwill-events';

/**
 * Signs an upload request so the browser can upload the file directly to
 * Cloudinary (bypassing our serverless function's request-body size limit,
 * which is far too small for event videos). The signature proves the
 * request was issued by an authenticated admin session.
 */
export function getUploadSignature() {
  const timestamp = Math.round(Date.now() / 1000);
  const paramsToSign = { timestamp, folder: UPLOAD_FOLDER };
  const signature = cloudinary.utils.api_sign_request(paramsToSign, process.env.CLOUDINARY_API_SECRET as string);

  return {
    signature,
    timestamp,
    apiKey: process.env.CLOUDINARY_API_KEY,
    cloudName: process.env.CLOUDINARY_CLOUD_NAME,
    folder: UPLOAD_FOLDER,
  };
}

export async function deleteMedia(publicId: string, resourceType: 'image' | 'video') {
  await cloudinary.uploader.destroy(publicId, { resource_type: resourceType });
}
