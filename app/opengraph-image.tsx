import { ImageResponse } from 'next/og'
import { readFile } from 'node:fs/promises'
import { join } from 'node:path'

export const alt = "Canadian law has a plan for your estate. It isn't the Islamic one."
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

const NAVY = '#0B1F3A'
const FRAME = '#07243F'
const GOLD = '#C8A063'
const GOLD_DARK = '#A8742F'
const CREAM = '#FBF7EE'

const file = (p: string) => readFile(join(process.cwd(), p))

// Share card for the homepage, carrying the hero message in the same
// navy-frame / cream-panel style as the RSVP card.
export default async function OpenGraphImage() {
  const [logo, photo, serif, inter, interSemi] = await Promise.all([
    file('public/Images/logo-mark.png'),
    file('public/Images/share/family-room.jpg'),
    file('node_modules/@fontsource/playfair-display/files/playfair-display-latin-800-normal.woff'),
    file('node_modules/@fontsource/inter/files/inter-latin-400-normal.woff'),
    file('node_modules/@fontsource/inter/files/inter-latin-600-normal.woff'),
  ])

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: FRAME,
          fontFamily: 'Inter',
        }}
      >
        {/* Header: brand + Will + Vault */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 104 }}>
          <img src={`data:image/png;base64,${logo.toString('base64')}`} width={48} height={51} />
          <div style={{ marginLeft: 14, fontFamily: 'Playfair', fontSize: 30, color: '#FFFFFF', letterSpacing: '0.02em' }}>
            THE MUSLIM WILL
          </div>
          <div style={{ display: 'flex', width: 2, height: 54, margin: '0 34px', backgroundColor: GOLD }} />
          <div style={{ fontFamily: 'Playfair', fontSize: 30, color: GOLD, letterSpacing: '0.04em' }}>WILL + VAULT</div>
        </div>

        {/* Cream panel */}
        <div
          style={{
            display: 'flex',
            flex: 1,
            margin: '0 36px',
            padding: '28px 28px 28px 40px',
            borderRadius: 22,
            border: `3px solid ${GOLD}`,
            backgroundColor: CREAM,
            alignItems: 'center',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', width: 500 }}>
            <div style={{ fontSize: 17, fontWeight: 600, color: GOLD_DARK, letterSpacing: '0.08em' }}>
              ISLAMIC WILLS FOR MUSLIM FAMILIES IN CANADA
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', marginTop: 16, fontFamily: 'Playfair', fontSize: 46, lineHeight: 1.12 }}>
              <span style={{ color: NAVY }}>Canadian law has a plan for your estate.</span>
              <span style={{ marginTop: 8, color: GOLD_DARK }}>It isn&apos;t the Islamic one.</span>
            </div>
            <div style={{ display: 'flex', height: 2, width: 120, marginTop: 22, backgroundColor: GOLD }} />
            <div style={{ marginTop: 18, fontSize: 21, lineHeight: 1.4, color: '#4A5466' }}>
              Ontario&apos;s default rules don&apos;t follow Faraid. Your will can make both work together.
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              flex: 1,
              height: '100%',
              marginLeft: 24,
              borderRadius: 16,
              border: `3px solid ${GOLD}`,
              overflow: 'hidden',
            }}
          >
            <img
              src={`data:image/jpeg;base64,${photo.toString('base64')}`}
              width={520}
              height={380}
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '50% 40%' }}
            />
          </div>
        </div>

        {/* Footer call to action, matching the hero button */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 92 }}>
          <div style={{ fontFamily: 'Playfair', fontSize: 32, color: GOLD, letterSpacing: '0.02em' }}>
            Check the difference for your family
          </div>
          <div style={{ marginLeft: 26, fontSize: 21, color: '#E8E1D3' }}>
            Free  •  about 3 minutes  •  no names or assets needed
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: 'Playfair', data: serif, weight: 800, style: 'normal' },
        { name: 'Inter', data: inter, weight: 400, style: 'normal' },
        { name: 'Inter', data: interSemi, weight: 600, style: 'normal' },
      ],
    }
  )
}
