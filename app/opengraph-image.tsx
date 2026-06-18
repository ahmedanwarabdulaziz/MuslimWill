import { ImageResponse } from 'next/og'
import { promises as fs } from 'fs'
import path from 'path'

export const runtime = 'nodejs'

export const alt = 'Muslim Will'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function OpenGraphImage() {
  const logoPath = path.join(process.cwd(), 'public/Images/Logo source without background.png')
  const logoData = await fs.readFile(logoPath)
  const base64Logo = Buffer.from(logoData).toString('base64')

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0A2540',
        }}
      >
        <img
          src={`data:image/png;base64,${base64Logo}`}
          style={{ width: '600px' }}
        />
      </div>
    ),
    { ...size }
  )
}
