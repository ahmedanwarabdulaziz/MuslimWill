import type { Metadata } from 'next';
import Link from 'next/link';
import { CURRENT_RSVP_EVENT, getPriorityStatus, isRsvpOpen } from '@/lib/rsvp';
import { RsvpForm } from './RsvpForm';
import { StickyRsvpBar } from './StickyRsvpBar';
import styles from './page.module.css';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'RSVP: Islamic Will Session at MAC Waterloo | The Muslim Will',
  description:
    'Join MAC Islamic Centre of Waterloo on Friday, October 23 after Maghrib. Our team will help you start, and finish, your Islamic will that same evening. RSVP for priority access.',
  alternates: { canonical: 'https://www.themuslimwill.com/RSVP' },
  robots: { index: false, follow: true },
};

const LEARN = [
  'How Ontario law divides an estate when there is no will',
  'How Islamic inheritance differs, and why it matters for your family',
  'How to create your customized Islamic will and secure Vault',
  'Live Q&A with our team',
];

const BRING = [
  'Your family details: spouse, children, parents, siblings',
  'Who you would choose as executor, and as guardian for any minor children',
  'A rough list of your assets: property, accounts, investments',
  'Any charitable bequest you would like to include',
];

export default async function RsvpPage() {
  const event = CURRENT_RSVP_EVENT;
  const open = isRsvpOpen(event);
  const priority = await getPriorityStatus(event);

  return (
    <div className={styles.main}>
      {/* ── HERO ── */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroGrid}>
            <div>
              <div className={styles.eyebrow}>Community Session · {event.partner}</div>
              <h1 className={styles.h1}>Write Your Wassiyah, Start to Finish, In One Evening</h1>
              <p className={styles.heroSub}>
                Join {event.partner} for a community session on Islamic wills and family protection. Our team will be there to help you start, and finish, your Wassiyah that same evening.
              </p>
              {open && (
                <a href="#rsvp" className={styles.primaryBtn}>RSVP Now</a>
              )}
            </div>

            <aside className={styles.eventCard} aria-label="Event details">
              <div className={styles.eventRow}>
                <span className={styles.eventIcon} aria-hidden>📅</span>
                <div>
                  <strong>{event.dateLabel}</strong>
                  <span>{event.timeLabel}</span>
                </div>
              </div>
              <div className={styles.eventRow}>
                <span className={styles.eventIcon} aria-hidden>📍</span>
                <div>
                  <strong>{event.venue}</strong>
                  <a href={event.mapUrl} target="_blank" rel="noopener noreferrer">{event.address}</a>
                </div>
              </div>
              <div className={styles.perk}>
                <div className={styles.perkLabel}>RSVP perk</div>
                <p>RSVP in advance to guarantee priority access to our team that evening, skip the line and start your Wassiyah first.</p>
                {open && (
                  <div className={styles.spots}>
                    {priority.remaining > 0 ? (
                      <><strong>{priority.remaining}</strong> priority {priority.remaining === 1 ? 'spot' : 'spots'} remaining</>
                    ) : (
                      <>Priority spots are full. You can still RSVP, and you&apos;re welcome to join us.</>
                    )}
                  </div>
                )}
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ── WHY THIS MATTERS ── */}
      <section className={`${styles.section} ${styles.cream}`}>
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <div className={styles.label}>Why this matters</div>
            <h2 className={styles.h2}>Most families don&apos;t know this.</h2>
            <p className={styles.intro}>
              Without an Islamic will, an Ontario estate is divided by the province&apos;s default rules, not by Faraid. Take a $600,000 estate left to a wife, two sons and one daughter:
            </p>
          </div>

          <div className={styles.compareGrid}>
            <div className={styles.compareCard}>
              <div className={styles.compareLabel}>Without an Islamic will</div>
              <h3>Ontario&apos;s default rules</h3>
              <ul>
                <li><span>Wife</span><strong>$433,333</strong></li>
                <li><span>Each son</span><strong>$55,556</strong></li>
                <li><span>Daughter</span><strong>$55,556</strong></li>
              </ul>
            </div>
            <div className={`${styles.compareCard} ${styles.compareIslamic}`}>
              <div className={styles.compareLabel}>With an Islamic will</div>
              <h3>Faraid</h3>
              <ul>
                <li><span>Wife</span><strong>$75,000</strong></li>
                <li><span>Each son</span><strong>$210,000</strong></li>
                <li><span>Daughter</span><strong>$105,000</strong></li>
              </ul>
            </div>
          </div>
          <p className={styles.footnote}>
            Illustrative example. Assumes no surviving parents, no debts, and Ontario&apos;s $350,000 spousal preferential share. Every family is different, and that is what we will walk through together.
          </p>
        </div>
      </section>

      {/* ── WHAT YOU'LL LEARN + BRING ── */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.twoCol}>
            <div>
              <div className={styles.label}>At the session</div>
              <h2 className={styles.h2}>What you&apos;ll learn</h2>
              <ol className={styles.numbered}>
                {LEARN.map((item) => <li key={item}>{item}</li>)}
              </ol>
              <div className={styles.bonus}>
                <span className={styles.bonusIcon} aria-hidden>✦</span>
                <p><strong>Session-night bonus.</strong> Subscribe during the session and unlock an exclusive bonus, available only to attendees who join us that evening.</p>
              </div>
            </div>
            <div>
              <div className={styles.label}>Come prepared</div>
              <h2 className={styles.h2}>What to bring</h2>
              <ul className={styles.checks}>
                {BRING.map((item) => <li key={item}>{item}</li>)}
              </ul>
              <p className={styles.note}>Don&apos;t worry if you don&apos;t have everything. Our team will guide you through it.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── RSVP FORM ── */}
      <section id="rsvp" className={`${styles.section} ${styles.navy}`}>
        <div className={styles.container}>
          <div className={styles.formWrap}>
            {open ? (
              <RsvpForm
                dateLabel={event.dateLabel}
                ics={{ slug: event.slug, startsAt: event.startsAt, endsAt: event.endsAt, location: `${event.venue}, ${event.address}` }}
              />
            ) : (
              <div className={styles.closed}>
                <h2>RSVPs for this session are closed.</h2>
                <p>Thank you to everyone who joined us. Follow our events page for upcoming sessions.</p>
                <Link href="/events" className={styles.primaryBtn}>See upcoming events</Link>
              </div>
            )}
          </div>
        </div>
      </section>

      {open && <StickyRsvpBar />}
    </div>
  );
}
