import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Muslim Will'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function OpenGraphImage() {
  const logoUrl = new URL('../public/Images/Logo source without background.png', import.meta.url)
  const logoData = await fetch(logoUrl).then((res) => res.arrayBuffer())

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
          src={logoData as any}
          style={{ width: '600px' }}
        />
      </div>
    ),
    { ...size }
  )
}
