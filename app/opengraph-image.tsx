import { ImageResponse } from 'next/og'
import { readFile } from 'node:fs/promises'
import { join } from 'node:path'

export const alt = 'The Muslim Will'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

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
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${size.width}" height="${size.height}"><path d="${paths}" fill="none" stroke="#ffffff" stroke-opacity="0.04" stroke-width="1.2"/></svg>`
  return `data:image/svg+xml;base64,${Buffer.from(svg).toString('base64')}`
}

// Logo and name are kept inside the centre square: WhatsApp and other
// messengers crop the card to a centred square thumbnail, while Facebook,
// LinkedIn and X show the full wide card.
export default async function OpenGraphImage() {
  const [logo, interBold] = await Promise.all([
    readFile(join(process.cwd(), 'public/Images/logo-mark.png'), 'base64'),
    readFile(join(process.cwd(), 'node_modules/@fontsource/inter/files/inter-latin-700-normal.woff')),
  ])

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          position: 'relative',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0B1F3A',
          backgroundImage: 'radial-gradient(circle at 50% 45%, #14305A 0%, #0B1F3A 55%, #081629 100%)',
          fontFamily: 'Inter',
        }}
      >
        <img
          src={diamondPattern()}
          width={size.width}
          height={size.height}
          style={{ position: 'absolute', top: 0, left: 0 }}
        />
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: 6, backgroundColor: GOLD }} />
        <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: 6, backgroundColor: GOLD }} />

        <img src={`data:image/png;base64,${logo}`} width={254} height={270} />
        <div
          style={{
            marginTop: 34,
            fontSize: 44,
            fontWeight: 700,
            color: '#FFFFFF',
            letterSpacing: '0.03em',
            whiteSpace: 'nowrap',
          }}
        >
          THE MUSLIM WILL
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [{ name: 'Inter', data: interBold, weight: 700, style: 'normal' }],
    }
  )
}
