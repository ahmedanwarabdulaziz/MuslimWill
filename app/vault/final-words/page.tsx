import type { Metadata } from 'next';
import { TrustBar } from '@/components/ui/TrustBar';
import Link from 'next/link';
import { TrackedButton } from '@/components/analytics/TrackedButton';
import styles from './page.module.css';

const siteUrl = 'https://themuslimwill.com';
const pageTitle = 'Final Words | Personal Messages for Your Loved Ones | The Muslim Will';
const pageDescription = 'Leave a written letter, voice note, or video message for the people you love — private, encrypted, and delivered only after your passing through The Muslim Will Vault.';

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: `${siteUrl}/vault/final-words` },
};

export default function FinalWordsPage() {
  return (
    <div className={styles.main}>
      {/* ── HERO SECTION ── */}
      <section className={styles.heroSection}>
        <div className={styles.heroOverlay} />
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.heroEyebrow}>My Vault › Final Words</div>
            <h1 className={styles.heroH1}>
              The words you always meant to say. Leave them where they will be found.
            </h1>
            <p className={styles.heroSub}>
              A will documents what you own. Final Words carries what you feel. Leave a written letter, a voice note, or a video message for the people who matter most — private, protected, and delivered only after you are gone.
            </p>
          </div>
        </div>
      </section>

      {/* ── TRUST ANCHORS ── */}
      <TrustBar items={['Written letters, voice notes, and video messages', 'Each message assigned to one specific person', 'Delivered privately — not shared with the broader family', 'Part of The Bridge — included from $5.99/month']} />

      {/* ── SECTION 1: What You Can Leave ── */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeaderCenter}>
            <h2 className={styles.sectionH2}>More than words on a page</h2>
            <p className={styles.sectionIntro}>
              A written will can say who receives what. It cannot say why you loved them. It cannot carry the sound of your voice, the way you said their name, the things you wanted them to know and never found the right moment to say.
            </p>
          </div>

          <div className={styles.formatGrid}>
            <div className={styles.formatCard}>
              <div className={styles.formatIconRing}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
              </div>
              <h3 className={styles.formatTitle}>A Written Letter</h3>
              <p className={styles.formatDesc}>
                A personal letter — private, addressed to one person, written in your own words. For the things you want them to read quietly, alone, in their own time.
              </p>
            </div>

            <div className={styles.formatCard}>
              <div className={styles.formatIconRing}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
                  <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                  <line x1="12" y1="19" x2="12" y2="23"></line>
                  <line x1="8" y1="23" x2="16" y2="23"></line>
                </svg>
              </div>
              <h3 className={styles.formatTitle}>A Voice Note</h3>
              <p className={styles.formatDesc}>
                Your voice. The way you say their name. Words delivered in the tone only you can carry — warmth, humour, seriousness, love. A voice note they can return to, again and again, long after you are gone.
              </p>
            </div>

            <div className={styles.formatCard}>
              <div className={styles.formatIconRing}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="23 7 16 12 23 17 23 7"></polygon>
                  <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
                </svg>
              </div>
              <h3 className={styles.formatTitle}>A Video Message</h3>
              <p className={styles.formatDesc}>
                Your face. Your presence. A message that lets them see you one more time — speaking directly to them, for them, with everything you wanted to say. A gift no legal document could ever replace.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: Who Can You Leave a Message For ── */}
      <section className={styles.section} style={{ backgroundColor: 'var(--color-cream-light)' }}>
        <div className={styles.container}>
          <div className={styles.twoColLayout}>
            <div className={styles.twoColText}>
              <h2 className={styles.sectionH2}>One message. One person. Total privacy.</h2>
              <p className={styles.sectionIntro} style={{ marginBottom: '1.5rem' }}>
                Every Final Words message is addressed to one specific person — by name, by relationship, by your choice. Your spouse receives only theirs. Your children receive only theirs. A close friend, a business partner, a parent — each receives exactly what you intended for them, and nothing else.
              </p>
              <p className={styles.sectionIntro}>
                Your executor is instructed to deliver each message to its recipient. They are not meant to open the messages themselves — and if they do, the system records it. Every access event carries a timestamp and a record. The trust you place in this process is protected by a visible audit trail.
              </p>
            </div>
            <div className={styles.recipientList}>
              <div className={styles.recipientListLabel}>People leave messages for</div>
              <ul className={styles.recipientItems}>
                <li className={styles.recipientItem}>
                  <span className={styles.recipientDot}></span>
                  <div>
                    <strong>A spouse</strong>
                    <span> — for everything that was understood but never said out loud</span>
                  </div>
                </li>
                <li className={styles.recipientItem}>
                  <span className={styles.recipientDot}></span>
                  <div>
                    <strong>Children</strong>
                    <span> — your hopes for them, your pride in them, your guidance for the life ahead</span>
                  </div>
                </li>
                <li className={styles.recipientItem}>
                  <span className={styles.recipientDot}></span>
                  <div>
                    <strong>A parent</strong>
                    <span> — gratitude, love, the things a child carries quietly for a lifetime</span>
                  </div>
                </li>
                <li className={styles.recipientItem}>
                  <span className={styles.recipientDot}></span>
                  <div>
                    <strong>A sibling</strong>
                    <span> — the history only the two of you share</span>
                  </div>
                </li>
                <li className={styles.recipientItem}>
                  <span className={styles.recipientDot}></span>
                  <div>
                    <strong>A close friend</strong>
                    <span> — acknowledgement of what their friendship meant</span>
                  </div>
                </li>
                <li className={styles.recipientItem}>
                  <span className={styles.recipientDot}></span>
                  <div>
                    <strong>A business partner</strong>
                    <span> — the private context behind decisions you made together</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: The Islamic Weight of Final Words ── */}
      <section className={styles.islamicSection}>
        <div className={styles.islamicOverlay} />
        <div className={styles.container}>
          <div className={styles.islamicContent}>
            <h2 className={styles.islamicH2}>The last thing you say to someone matters</h2>
            <div className={styles.islamicQuoteBar} />
            <p className={styles.islamicPara}>
              The Prophet ﷺ used his final moments to leave clarity, mercy, and guidance for those who would carry on after him. His farewell was not an administrative act — it was an act of profound love and responsibility.
            </p>
            <p className={styles.islamicPara}>
              We are not asked to match that. But we are asked to leave our affairs in order — our debts settled, our obligations documented, our families protected. Final Words goes one step further. It gives you the chance to leave the part of your legacy that no legal document can carry — your voice, your heart, your love, addressed to the people who will miss you most.
            </p>
            <p className={styles.islamicPara}>
              For many Muslims, there are words they have meant to say for years. To a parent who sacrificed everything. To a child who struggled. To a spouse who was loved more than they knew. These words do not need to wait. Leave them now — sealed, private, and waiting for the moment they are needed most.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: How It Works ── */}
      <section className={`${styles.section} ${styles.vaultSection}`}>
        <div className={styles.container}>
          <div className={styles.sectionHeaderCenter}>
            <h2 className={styles.sectionH2}>Private while you are alive. Delivered when the time comes.</h2>
            <p className={styles.sectionIntro}>
              Your messages are sealed in your Vault from the moment you create them. Nothing leaves until the verified release process is triggered.
            </p>
          </div>

          <div className={styles.vaultGrid}>
            <div className={styles.vaultCardPremium}>
              <div className={styles.vaultStepNum}>01</div>
              <h3 className={styles.vaultItemTitle}>Record your message</h3>
              <p className={styles.vaultItemDesc}>
                Write a letter, record a voice note, or film a video — directly through the platform. Assign it to one specific recipient. Add as many messages as you need, for as many people as you choose.
              </p>
            </div>
            <div className={styles.vaultCardPremium}>
              <div className={styles.vaultStepNum}>02</div>
              <h3 className={styles.vaultItemTitle}>It is sealed in your Vault</h3>
              <p className={styles.vaultItemDesc}>
                Your messages are encrypted and held privately. No one can access them — not your family, not your executor, not anyone — until your passing is verified and the release process is triggered.
              </p>
            </div>
            <div className={styles.vaultCardPremium}>
              <div className={styles.vaultStepNum}>03</div>
              <h3 className={styles.vaultItemTitle}>It is delivered with care</h3>
              <p className={styles.vaultItemDesc}>
                Your executor is notified of each message and its intended recipient. The delivery is private — each person receives only their message. Access is logged, timestamped, and audited. What you intended to be private stays private.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaBox}>
            <h2>Some things are too important to leave unsaid.</h2>
            <p className={styles.ctaText}>
              You do not have to wait for a perfect moment. There is no perfect moment. There is only the time you have now — and the people you love who will one day need to hear from you when you can no longer speak. Leave them something. They will carry it for the rest of their lives.
            </p>

            <div className={styles.ctaActions}>
              <TrackedButton
                href="https://app.themuslimwill.com/Account/Login"
                className={styles.ctaButtonGoldFull}
                eventName="final_cta_click"
                eventParams={{ location: 'final_words_final_cta' }}
              >
                Start My Application
              </TrackedButton>
              <TrackedButton
                href="/vault"
                className={styles.ctaButtonOutlineLight}
                eventName="final_cta_vault_click"
                eventParams={{ location: 'final_words_final_cta' }}
              >
                See What&apos;s in the Vault
              </TrackedButton>
              <TrackedButton
                href="/pricing"
                className={styles.ctaButtonOutlineLight}
                eventName="final_cta_pricing_click"
                eventParams={{ location: 'final_words_final_cta' }}
                style={{ borderColor: 'transparent' }}
              >
                Pricing
              </TrackedButton>
            </div>

            <p className={styles.ctaMicrocopy}>
              Final Words is included in The Bridge from $5.99/month — written, voice, and video messages, private, encrypted, and delivered only after your passing.
            </p>

            <div style={{ marginTop: '2rem', display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/vault/sealed-disclosures" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'underline' }}>Sealed Disclosures</Link>
              <Link href="/vault/estate-inventory" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'underline' }}>Estate Inventory</Link>
              <Link href="/vault/obligations-register" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'underline' }}>Obligations Register</Link>
              <Link href="/last-will" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'underline' }}>Last Will &amp; Testament</Link>
              <Link href="/vault" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'underline' }}>My Vault Overview</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
