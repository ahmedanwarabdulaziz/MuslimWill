import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const size = { width: 512, height: 512 }
export const contentType = 'image/png'

export default async function Icon() {
  const logoUrl = new URL('../public/Images/Logo source without background.png', import.meta.url)
  const logoData = await fetch(logoUrl).then((res) => res.arrayBuffer())

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0A2540',
        }}
      >
        <img
          src={logoData as any}
          style={{ width: '350px' }}
        />
      </div>
    ),
    { ...size }
  )
}
