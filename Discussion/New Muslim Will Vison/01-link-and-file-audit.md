# Link And File Audit

Reviewed on `2026-04-22`.

## Files checked

### Strategy and planning files

- `Patriva/Patriva_Brand_Messaging_Framework.docx`
- `MW website/website plan/PLAN.md`
- `MW website/website plan/HOME_PAGE.md`
- `MW website/website plan/3-pages-content-seo-aeo.md`

### Current coded website files

- `MW website/app/page.tsx`
- `MW website/app/page.module.css`
- `MW website/app/layout.tsx`
- `MW website/components/ui/Header.tsx`
- `MW website/components/ui/Footer.tsx`
- `MW website/components/analytics/TrackedButton.tsx`
- `MW website/components/ui/Button.tsx`

## External link checked

- `https://www.freewill.com/`

## Key findings from the Patriva file

- The document has no embedded external hyperlinks.
- The document is a messaging framework, not a technical spec.
- Its main instruction is clear: lead with family milestones, not only difficult moments.
- Patriva is framed as the master brand over four services:
  - `Muslim Will`
  - `Mizan`
  - `Sakina`
  - `Ikram`

## Current app routes that exist

These routes are present in `MW website/app`:

- `/`
- `/charitable-legacy`
- `/about/ahmed-gohar`
- `/about/dr-yasser-aboutaha`

## Current links that point to pages not yet built

The navigation and footer currently reference several routes that do not exist yet in the app directory:

- `/how-it-works`
- `/faq`
- `/about`
- `/compliance`
- `/for-charities`
- `/start`
- `/privacy`
- `/terms`
- `/disclaimer`

## Current links that point to anchors without visible target sections

- `#contact`
- `#book`

These appear in the header and footer, but there is no matching contact or booking section in the current homepage layout.

## Current CTA behavior issue

Several important buttons track analytics but do not navigate anywhere because no `href` is passed:

- homepage hero `Start Your Will`
- homepage hero `See How It Works`
- homepage final CTA `Start Your Will`
- homepage final CTA `Book a Call`
- header desktop `Start Your Will`
- header mobile `Start Your Will`
- header mobile `Book a Call`
- charitable legacy final CTA `Start Your Will`

This matters because the site currently looks more complete than it behaves.

## Strategic implication

Before we test the new Patriva umbrella story on the live site, we should decide whether phase 1 is:

- a messaging test only
- a messaging plus navigation repair
- or a full homepage and information-architecture change

My recommendation is to do messaging plus navigation repair together so the live test is credible.
