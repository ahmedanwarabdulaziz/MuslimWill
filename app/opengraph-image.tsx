import { ImageResponse } from 'next/og'
import { readFile } from 'node:fs/promises'
import { join } from 'node:path'

export const alt = 'The Muslim Will'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

// Logo only, centred: WhatsApp and other messengers crop the card to a
// centred square thumbnail, so everything important sits in the middle.
export default async function OpenGraphImage() {
  const logo = await readFile(join(process.cwd(), 'public/Images/logo-mark.png'), 'base64')

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0B1F3A',
          backgroundImage: 'radial-gradient(circle at 50% 50%, #14305A 0%, #0B1F3A 55%, #081629 100%)',
        }}
      >
        <img src={`data:image/png;base64,${logo}`} width={320} height={340} />
      </div>
    ),
    { ...size }
  )
}
