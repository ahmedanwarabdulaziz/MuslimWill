# Muslim Will Website Redesign Plan

## Project Intent

Rebuild Muslim Will as a premium, trust-first, conversion-focused Next.js website that feels credible, modern, and community-aware.

The new site should:
- make legal + Islamic trust visible within the first screen
- feel calm, elevated, and professional rather than generic
- clearly explain the process, benefits, and charitable legacy option
- support future SEO, educational content, and partnership pages
- include dedicated sections for charities and expert/team biographies

## High-Level Direction

### Brand Positioning
Muslim Will should feel like:
- a premium guided service
- professionally accountable
- faith-conscious without looking old-fashioned
- family-first, not fear-first
- clear enough for regular families and credible enough for partners, lawyers, and scholars

### Visual Direction
Working direction: **Antigravity**

Meaning:
- lighter, cleaner, more spacious layouts
- elegant typography
- restrained motion
- premium trust cues
- soft depth, layered backgrounds, and refined contrast

This should feel more like a modern professional service brand than a WordPress brochure or template site.

## What Is Wrong With The Current Site

Based on the live site review, the current website has useful raw content but weak presentation.

Main issues:
- the homepage feels repetitive and templated
- trust signals are present but not prioritized well
- the page hierarchy is unclear and too text-heavy
- visual quality does not match the seriousness of wills, law, and Islamic compliance
- the footer and lower sections look broken and reduce credibility
- there is no strong narrative for families, charities, or community partners
- biographies and experts are not framed in a premium, confidence-building way

## Recommended Site Architecture

### Core Pages
1. Home
2. How It Works
3. Pricing
4. FAQ
5. Legal & Islamic Compliance
6. Charitable Legacy
7. For Charities / Partnerships
8. About
9. Expert Bios
10. Contact / Book a Call

### Expert Bio Pages
- Ahmed Gohar
- Dr. Yasser Aboutaha
- optional future expert pages for scholars and legal advisers

### Future SEO / Content Hub
- Islamic Will in Canada
- Guardianship for Muslim Parents
- The 1/3 Rule and Charitable Bequests
- What Happens If You Die Without a Will in Canada?
- Wasiyyah vs Legal Will

## Homepage Strategy

The homepage should not try to say everything.

Its job is to:
- establish trust fast
- explain the value clearly
- show the process simply
- introduce experts and compliance
- open two clear pathways:
  - protect your family
  - include charitable legacy

### Proposed Homepage Sections
1. Hero
   Focus: family protection, legal validity, Islamic inheritance alignment
2. Trust Bar
   Focus: lawyer-reviewed, scholar-guided, Canada-focused, confidential
3. Why This Matters
   Focus: family clarity, guardianship, inheritance, reduced disputes
4. How It Works
   Focus: 4-5 clean steps
5. Legal + Islamic Accountability
   Focus: explain credibility without sounding defensive
6. Charitable Legacy Preview
   Focus: small section introducing sadaqah jariyah / charitable bequests
7. Meet the Experts
   Focus: premium cards leading to bio pages
8. FAQ Preview
   Focus: 4-6 strongest questions
9. Final CTA
   Focus: start your will / speak to us

## New Priority Section: Charitable Legacy

This should become a real part of the brand, not a small mention.

### Goal
Position Muslim Will as the bridge between:
- protecting loved ones
- documenting Islamic intentions
- enabling charitable bequests within the permissible bequest structure

### Recommended Pages
- `Charitable Legacy`
- `For Charities / Partnerships`

### Content Focus
- why charitable giving in a will matters
- how the 1/3 bequest portion works at a high level
- how charities can partner without taking legal responsibility
- examples of impact without sounding pushy
- a clear distinction between education and legal advice

## Bios and Authority Pages

### Dr. Yasser Aboutaha
Use him as a community-trust bridge:
- fundraising
- community leadership
- speaking
- charity and masjid relationships

### Ahmed Gohar
This page should likely position him as:
- founder / strategic lead / executive lead
- the business and mission builder behind Muslim Will
- someone who connects professionalism, product vision, and community need

Note:
- I found source content for Dr. Yasser in the current workspace
- I did **not** find source content for Ahmed Gohar yet
- we should draft Ahmed's page after you share key facts, or after we find source material

## Messaging Shift

The new copy should move away from generic statements and toward sharper messaging.

### Current Tone Problems
- repetitive
- too broad
- not premium enough
- sounds more assembled than authored

### New Tone
- calm
- executive
- warm
- precise
- faith-conscious
- reassuring without sounding weak

### Messaging Pillars
- Protect your family with clarity
- Prepare your will with professional guidance
- Align legal structure with Islamic inheritance principles
- Make room for lasting charitable impact

## SEO and Content Strategy

The site should be built so every key page can rank for search and also perform well in AI answers.

### Priority Search Themes
- Islamic will Canada
- Muslim will Canada
- Islamic inheritance will
- charitable bequest Islamic will
- Muslim estate planning Canada
- guardianship in Muslim will

### Structural SEO Needs
- one clear keyword focus per page
- strong H1/H2 hierarchy
- FAQ schema later
- rich internal linking between Home, FAQ, Charitable Legacy, and Bios
- content hub for long-tail educational search

## Technical Build Plan

### Stack
- Next.js
- React
- TypeScript
- App Router
- modular component-based page sections

### Recommended Setup
- `app/` for routes
- `components/` for reusable sections
- `content/` or structured data files for bios, FAQs, and charity content
- clean CMS-ready structure later if needed

### Phase 1 Build
- create Next.js site shell
- global design system
- homepage
- charities page
- Dr. Yasser bio
- Ahmed Gohar bio placeholder or first draft

### Phase 2 Build
- process page
- FAQ page
- compliance page
- pricing page
- contact / booking page

### Phase 3 Build
- blog / insights hub
- partnership landing pages
- SEO schema and analytics

## Design System Notes

### Keep
- deep green / cream / gold family from existing brand

### Improve
- typography sophistication
- spacing rhythm
- card system
- visual hierarchy
- mobile polish
- section transitions
- CTA clarity

### Avoid
- template-style icons everywhere
- dense text blocks
- duplicate sections
- fake corporate stock feel
- cluttered footer
- generic gradients with no discipline

## Suggested First Build Order

1. lock the homepage story and section order
2. define design system and visual direction
3. write premium homepage copy
4. build homepage in Next.js
5. build charitable legacy page
6. build Dr. Yasser bio page
7. draft Ahmed Gohar bio page
8. expand into process, FAQ, and compliance pages

## Current Strategic Decisions

These are the working decisions for the first version unless changed later.

### Ahmed Gohar Bio Direction
Use Ahmed as the founder authority behind the system, not as a lawyer or scholar figure.

Approved content direction:
- Founder & CEO of Patriva / The Muslim Will
- technology founder solving the gap between generic wills and Shariah-conscious estate planning
- builder of a structured document generation platform, not a law firm or legal advisory practice
- creator of a multi-layer workflow: user input, inheritance logic, legal review, and guided execution
- founder of The Agile Group with experience delivering SaaS platforms, mobile applications, and regulated workflows
- experienced in building systems that combine software, operations, and third-party integrations
- focused on making Shariah-conscious estate planning accessible to Muslim families in the West at scale

### Pricing Model
Recommendation for phase 1: keep pricing `soft`.

Why:
- trust and positioning are more urgent than price comparison at this stage
- the service still needs premium framing before hard-price anchoring
- soft pricing gives room to refine packaging after the new site and funnel are live

Recommended homepage approach:
- mention guided plans or pathways
- emphasize clarity, review, and professional workflow
- route detailed pricing to a dedicated page or consultation flow later

### Target Audience
Recommendation for phase 1: launch the website `Canada first`, with `Ontario` used as the strongest current legal proof point.

Why:
- current legal messaging is strongest and safest in Ontario
- SEO is stronger when the homepage targets Canada but the compliance detail is specific
- AEO works better when the page gives a broad answer first and then a concrete legal anchor

Working positioning:
- homepage = Canada-first
- trust and compliance copy = Ontario is the clearest current legal workflow
- architecture = North-America-ready

### Future U.S. Strategy
The site should be built now so it can expand into the United States later without rewriting the whole structure.

Future direction:
- architect the content structure so `Canada + US` expansion can be added later
- do not dilute the first launch message with dual-country complexity
- do not make broad U.S. legal claims before there is real state-by-state readiness

Recommended rollout:
- phase 1: Canada-first site
- phase 2: add a real `/us/` section when operationally ready
- phase 3: add state-level pages only where the service genuinely supports those states

Recommended URL direction later:
- `/` = main brand and current dominant market
- `/ca/` = Canada-specific version if needed later
- `/us/` = United States version when ready

Important note:
- U.S. wills and probate are governed by state law, so a future U.S. rollout should be state-aware
- avoid thin state pages created only for SEO
- each regional page should have unique legal, process, and FAQ value

### Primary CTA Strategy
Recommendation:
- primary CTA: `Start Your Will`
- secondary CTA: `Book a Call`

Why:
- the brand should feel product-led and process-led, not consultation-led
- users ready to act should be moved into the intake flow immediately
- users with uncertainty still need a low-friction human path

Meaning:
- do not give both equal visual weight
- the intake form should be the main conversion path
- the call booking path should support hesitant or complex-case users

### CSS Approach
Recommendation: use `Vanilla CSS with CSS Modules`.

Agreed rationale:
- maximum design control
- easiest way to avoid template-looking output
- better fit for a premium custom brand language
- keeps component-level styling clean in Next.js
- avoids forcing the design into utility-class patterns

Implementation direction:
- CSS Modules for page and component styling
- one small global stylesheet for tokens, resets, typography, and layout primitives
- define brand variables for green, cream, gold, spacing, radius, shadow, and type scale

Tailwind is not the right default for this project unless the team already depends on it.

## Immediate Recommendation

Start with a strong homepage redesign plus the two authority areas:
- Charitable Legacy
- Expert Bios

That combination will improve:
- brand perception
- conversion clarity
- community trust
- future partnership readiness
