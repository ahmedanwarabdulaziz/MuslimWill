import { ImageResponse } from 'next/og'
import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import { CURRENT_RSVP_EVENT } from '@/lib/rsvp'

export const alt = 'Wasiyyah Workshop at MAC Islamic Centre of Waterloo'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

const NAVY = '#0B1F3A'
const FRAME = '#07243F' // matches the MAC logo's background so it sits seamlessly
const GOLD = '#C8A063'
const GOLD_DARK = '#A8742F'
const CREAM = '#FBF7EE'

const file = (p: string) => readFile(join(process.cwd(), p))

// Share card for /RSVP, styled after the Waterloo workshop flyer:
// navy frame, cream panel, both logos, title, date and venue, family photo.
export default async function OpenGraphImage() {
  const event = CURRENT_RSVP_EVENT
  const [logo, mac, photo, serif, inter, interSemi] = await Promise.all([
    file('public/Images/logo-mark.png'),
    file('public/Images/share/mac-waterloo.jpg'),
    file('public/Images/share/family-table.jpg'),
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
        {/* Header: both logos */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 104 }}>
          <img src={`data:image/png;base64,${logo.toString('base64')}`} width={48} height={51} />
          <div style={{ marginLeft: 14, fontFamily: 'Playfair', fontSize: 30, color: '#FFFFFF', letterSpacing: '0.02em' }}>
            THE MUSLIM WILL
          </div>
          <div style={{ display: 'flex', width: 2, height: 54, margin: '0 34px', backgroundColor: GOLD }} />
          <img src={`data:image/jpeg;base64,${mac.toString('base64')}`} width={246} height={56} />
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
          <div style={{ display: 'flex', flexDirection: 'column', width: 480 }}>
            <div style={{ display: 'flex', flexDirection: 'column', fontFamily: 'Playfair', fontSize: 74, lineHeight: 1.02 }}>
              <span style={{ color: NAVY }}>Wasiyyah</span>
              <span style={{ color: GOLD_DARK }}>Workshop</span>
            </div>
            <div style={{ marginTop: 16, fontSize: 22, fontWeight: 600, color: NAVY }}>
              Write yours in one evening with our team.
            </div>
            <div style={{ display: 'flex', height: 2, width: 120, marginTop: 22, backgroundColor: GOLD }} />
            <div style={{ marginTop: 20, fontSize: 26, fontWeight: 600, color: NAVY }}>{event.dateLabel}</div>
            <div style={{ marginTop: 4, fontSize: 21, color: '#4A5466' }}>{event.timeLabel}</div>
            <div style={{ marginTop: 14, fontSize: 22, fontWeight: 600, color: NAVY }}>{event.venue}</div>
            <div style={{ marginTop: 2, fontSize: 19, color: '#4A5466' }}>{event.address}</div>
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

        {/* Footer call to action */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 92 }}>
          <div style={{ fontFamily: 'Playfair', fontSize: 36, color: GOLD, letterSpacing: '0.03em' }}>RSVP IN ADVANCE</div>
          <div style={{ marginLeft: 26, fontSize: 21, color: '#E8E1D3' }}>
            Priority access to our team  •  Skip the line  •  Start your Wasiyyah first
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
