import Image from 'next/image';
import Link from 'next/link';
import { TrackedButton } from '@/components/analytics/TrackedButton';
import { TrustBar } from '@/components/ui/TrustBar';
import { PiCheckCircleLight, PiPhoneLight, PiEnvelopeSimpleLight } from 'react-icons/pi';
import { PACKAGE_ICON_MAP } from '@/lib/icons';
import { renderBoldText } from '@/lib/richtext';
import type { Offer, PackagePart, Step } from '@/lib/schemas';
import type { Event } from '@/generated/prisma/client';
import styles from './EventDetailView.module.css';

const APP_URL = 'https://app.themuslimwill.com/Account/Register';

export function EventDetailView({ event }: { event: Event }) {
  const cta = (plan?: string) => `${APP_URL}?ref=event&partner=${event.slug}${plan ? `&plan=${plan}` : ''}`;

  const offers = event.offers as unknown as Offer[];
  const packageParts = event.packageParts as unknown as PackagePart[];
  const howItWorks = event.howItWorks as unknown as Step[];

  const featuredOffer = offers.find((o) => o.featured);
  const sideOffers = offers.filter((o) => o !== featuredOffer);

  return (
    <div className={styles.main}>
      {/* ── HERO ── */}
      <section className={styles.heroSection}>
        <div className={styles.heroGlow} />
        <div className={styles.container}>
          {event.partnerLogoUrl && (
            <div className={styles.partnerRow}>
              <Image
                src={event.partnerLogoUrl}
                alt={event.partnerName ?? event.title}
                width={220}
                height={220}
                className={styles.partnerLogoIssc}
                priority
              />
            </div>
          )}

          {event.heroEyebrow && <div className={styles.heroEyebrow}>{event.heroEyebrow}</div>}
          <h1 className={styles.heroH1}>
            {event.heroHeadline}
            {event.heroHeadlineAccent && (
              <>
                {' '}
                <span className={styles.heroH1Gold}>{event.heroHeadlineAccent}</span>
              </>
            )}
          </h1>
          {event.heroSubcopy && <p className={styles.heroSub}>{renderBoldText(event.heroSubcopy)}</p>}

          <div className={styles.heroActions}>
            {featuredOffer && (
              <TrackedButton
                href={cta(featuredOffer.ctaPlan)}
                size="lg"
                variant="secondary"
                className={styles.heroCtaGold}
                eventName="event_cta_click"
                eventParams={{ location: 'event_hero', plan: featuredOffer.ctaPlan }}
              >
                {featuredOffer.ctaLabel}
              </TrackedButton>
            )}
            {offers.length > 0 && (
              <TrackedButton
                href="#offer"
                size="lg"
                variant="outlineLight"
                eventName="event_see_offer_click"
                eventParams={{ location: 'event_hero' }}
              >
                See What&apos;s Included
              </TrackedButton>
            )}
          </div>

          {event.heroBadges.length > 0 && (
            <div className={styles.heroBadges}>
              {event.heroBadges.map((badge) => (
                <span key={badge}>{badge}</span>
              ))}
            </div>
          )}
        </div>
      </section>

      {event.trustBarItems.length > 0 && <TrustBar items={event.trustBarItems} />}

      {/* ── OFFER ── */}
      {offers.length > 0 && (
        <section id="offer" className={styles.offerSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <div className={styles.sectionLabel}>Your Exclusive Event Offer</div>
              <h2 className={styles.sectionH2}>Take the next step today.</h2>
            </div>

            <div className={styles.offerGrid}>
              {featuredOffer && (
                <div className={styles.offerCardFeatured}>
                  {featuredOffer.badge && <div className={styles.offerBadge}>{featuredOffer.badge}</div>}
                  <h3 className={styles.offerName}>{featuredOffer.name}</h3>
                  <p className={styles.offerTagline}>{featuredOffer.tagline}</p>
                  <div className={styles.offerPriceRow}>
                    {featuredOffer.priceWas && (
                      <span className={styles.offerPriceWas}>{featuredOffer.priceWas}</span>
                    )}
                    <span className={styles.offerPriceNow}>{featuredOffer.price}</span>
                    {featuredOffer.priceNote && (
                      <span className={styles.offerPriceNote}>{featuredOffer.priceNote}</span>
                    )}
                  </div>
                  <ul className={styles.offerList}>
                    {featuredOffer.features.map((feature) => (
                      <li key={feature}>
                        <PiCheckCircleLight /> {feature}
                      </li>
                    ))}
                  </ul>
                  <TrackedButton
                    href={cta(featuredOffer.ctaPlan)}
                    size="lg"
                    variant="secondary"
                    className={styles.offerCtaGold}
                    eventName="event_cta_click"
                    eventParams={{ location: 'event_offer', plan: featuredOffer.ctaPlan }}
                  >
                    {featuredOffer.ctaLabel}
                  </TrackedButton>
                  {featuredOffer.micro && <p className={styles.offerMicro}>{featuredOffer.micro}</p>}
                </div>
              )}

              {sideOffers.length > 0 && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                  {sideOffers.map((offer) => (
                    <div key={offer.name} className={styles.offerCardSide} style={{ flex: 1 }}>
                      <h3 className={styles.offerNameSide}>{offer.name}</h3>
                      <p className={styles.offerTaglineSide}>{offer.tagline}</p>
                      <div className={styles.offerPriceRowSide} style={{ marginBottom: '0.25rem' }}>
                        <span className={styles.offerPriceSide}>{offer.price}</span>
                      </div>
                      {offer.priceCompareText && (
                        <p
                          style={{
                            color: 'var(--color-text-muted)',
                            textDecoration: 'line-through',
                            fontSize: '0.85rem',
                            marginBottom: '1rem',
                          }}
                        >
                          {offer.priceCompareText}
                        </p>
                      )}
                      <ul className={styles.offerListSide}>
                        {offer.features.map((feature) => (
                          <li key={feature}>
                            <PiCheckCircleLight /> {feature}
                          </li>
                        ))}
                      </ul>
                      <TrackedButton
                        href={cta(offer.ctaPlan)}
                        size="md"
                        variant="outline"
                        className={styles.offerCtaOutline}
                        eventName="event_cta_click"
                        eventParams={{ location: 'event_offer', plan: offer.ctaPlan }}
                      >
                        {offer.ctaLabel}
                      </TrackedButton>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* ── WHAT'S INCLUDED ── */}
      {packageParts.length > 0 && (
        <section className={styles.packageSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <div className={styles.sectionLabelLight}>As Discussed Today</div>
              <h2 className={styles.sectionH2Light}>Everything in one secure place.</h2>
            </div>
            <div className={styles.packageGrid}>
              {packageParts.map((part) => {
                const Icon = PACKAGE_ICON_MAP[part.icon];
                return (
                  <div key={part.title} className={styles.packageCard}>
                    <div className={styles.packageIcon}>
                      <Icon size={26} />
                    </div>
                    <h4>{part.title}</h4>
                    <p>{part.copy}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ── HOW IT WORKS ── */}
      {howItWorks.length > 0 && (
        <section className={styles.stepsSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <div className={styles.sectionLabel}>How It Works</div>
              <h2 className={styles.sectionH2}>From this table to a signed plan.</h2>
            </div>
            <div className={styles.stepsGrid}>
              {howItWorks.map((step, i) => (
                <div key={step.title} className={styles.stepCard}>
                  <div className={styles.stepHeader}>
                    <div className={styles.stepNumber}>{i + 1}</div>
                    <h3 className={styles.stepTitle}>{step.title}</h3>
                  </div>
                  <p className={styles.stepDesc}>{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── BOOTH SUPPORT ── */}
      {(event.helpPhone || event.helpEmail) && (
        <section className={styles.helpSection}>
          <div className={styles.container}>
            <div className={styles.helpBox}>
              <div>
                <h2 className={styles.helpH2}>Need a hand? We&apos;re right here.</h2>
                <p className={styles.helpCopy}>
                  Ask a member of our team at the table to help you complete this in the next few
                  minutes — or reach us directly.
                </p>
              </div>
              <div className={styles.helpContacts}>
                {event.helpPhone && (
                  <a href={`tel:${event.helpPhone.replace(/[^+\d]/g, '')}`} className={styles.helpContactLink}>
                    <PiPhoneLight /> {event.helpPhone}
                  </a>
                )}
                {event.helpEmail && (
                  <a href={`mailto:${event.helpEmail}`} className={styles.helpContactLink}>
                    <PiEnvelopeSimpleLight /> {event.helpEmail}
                  </a>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── FINAL CTA ── */}
      {featuredOffer && (
        <section className={styles.finalCtaSection}>
          <div className={styles.container}>
            <div className={styles.finalCtaBox}>
              <h2>Give your family the direction they need.</h2>
              <p className={styles.finalCtaText}>
                These exclusive rates are only available while you&apos;re here today. It takes less than 10 minutes to start.
              </p>
              <div className={styles.finalCtaActions}>
                <TrackedButton
                  href={cta(featuredOffer.ctaPlan)}
                  variant="secondary"
                  size="lg"
                  className={styles.heroCtaGold}
                  eventName="event_cta_click"
                  eventParams={{ location: 'event_final_cta', plan: featuredOffer.ctaPlan }}
                >
                  {featuredOffer.ctaLabel}
                </TrackedButton>
                <Link href="#offer" className={styles.finalCtaSecondary}>
                  See Full Premium Options
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
