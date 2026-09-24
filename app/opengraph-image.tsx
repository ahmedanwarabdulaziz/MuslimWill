import { ImageResponse } from 'next/og'
import { readFile } from 'node:fs/promises'
import { join } from 'node:path'

export const alt = 'The Muslim Will — Will + Vault'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

const NAVY = '#0B1F3A'
const GOLD = '#C8A063'

// Faint diamond lattice drawn as one SVG so it can sit behind the content.
function diamondPattern() {
  const step = 44
  const r = 11
  let paths = ''
  for (let y = 0; y <= size.height + step; y += step) {
    const offset = (y / step) % 2 === 0 ? 0 : step / 2
    for (let x = -step; x <= size.width + step; x += step) {
      const cx = x + offset
      paths += `M${cx} ${y - r}L${cx + r} ${y}L${cx} ${y + r}L${cx - r} ${y}Z`
    }
  }
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${size.width}" height="${size.height}"><path d="${paths}" fill="none" stroke="#ffffff" stroke-opacity="0.045" stroke-width="1.2"/></svg>`
  return `data:image/svg+xml;base64,${Buffer.from(svg).toString('base64')}`
}

export default async function OpenGraphImage() {
  const [logo, interBold, interExtraBold] = await Promise.all([
    readFile(join(process.cwd(), 'public/Images/logo-mark.png'), 'base64'),
    readFile(join(process.cwd(), 'node_modules/@fontsource/inter/files/inter-latin-700-normal.woff')),
    readFile(join(process.cwd(), 'node_modules/@fontsource/inter/files/inter-latin-800-normal.woff')),
  ])

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          position: 'relative',
          alignItems: 'center',
          backgroundColor: NAVY,
          backgroundImage: 'radial-gradient(circle at 30% 45%, #14305A 0%, #0B1F3A 60%, #081629 100%)',
          fontFamily: 'Inter',
        }}
      >
        <img
          src={diamondPattern()}
          width={size.width}
          height={size.height}
          style={{ position: 'absolute', top: 0, left: 0 }}
        />

        {/* Hairline gold frame accents */}
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: 6, backgroundColor: GOLD }} />
        <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: 6, backgroundColor: GOLD }} />

        {/* Logo block */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: 400,
            marginLeft: 20,
          }}
        >
          <img src={`data:image/png;base64,${logo}`} width={188} height={200} />
          <div
            style={{
              marginTop: 30,
              fontSize: 32,
              fontWeight: 700,
              color: '#FFFFFF',
              letterSpacing: '0.02em',
            }}
          >
            THE MUSLIM WILL
          </div>
        </div>

        {/* Divider */}
        <div
          style={{
            width: 2,
            height: 320,
            backgroundImage: `linear-gradient(to bottom, rgba(200,160,99,0), ${GOLD} 20%, ${GOLD} 80%, rgba(200,160,99,0))`,
          }}
        />

        {/* Headline */}
        <div
          style={{
            display: 'flex',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: 96,
            fontWeight: 800,
            color: GOLD,
            letterSpacing: '0.02em',
            whiteSpace: 'nowrap',
          }}
        >
          WILL + VAULT
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: 'Inter', data: interBold, weight: 700, style: 'normal' },
        { name: 'Inter', data: interExtraBold, weight: 800, style: 'normal' },
      ],
    }
  )
}
