# Scholar Bio Implementation Plan

## Purpose

This plan turns the scholar-bio recommendation into an execution brief that Antigravity can follow during design and build.

The goal is not to add biography content randomly.
The goal is to place scholar authority exactly where trust, Islamic legitimacy, and conversion reassurance matter most.

## Primary Scholar

- Working source file: [SULAYMAN_AL_MURAYR_BIO_SOURCE.md](./SULAYMAN_AL_MURAYR_BIO_SOURCE.md)
- Working English name: `Sulayman Hasan Muhammad Al-Murayr`
- Arabic name: `سليمان حسن محمد المرير`
- Important: confirm final English spelling and honorific before production copy is published.

## Core Strategy

The current site already mentions:

- qualified Islamic scholars
- Islamic review
- scholar review for inheritance considerations

But in the highest-trust sections, these claims are still mostly generic.

The implementation strategy is:

1. add one full scholar bio page
2. create one reusable compact scholar trust card
3. inject that card into the most trust-sensitive sections
4. add inline links wherever the site currently says `qualified Islamic scholars`
5. keep Ahmed positioned as founder / systems builder, not scholar authority
6. keep legal authority clearly separate from scholarly authority

## Priority Placements

### Priority 1: Homepage

**Why**

The homepage must establish trust in the first screen and within the first few scrolls. Right now it mentions scholar review, but the human authority comes too late.

**Files**

- `app/page.tsx`
- `app/page.module.css`

**Implementation**

1. Add a compact scholar proof block near the hero trust area.
2. Add a named scholar reference inside the `Dual Expert Review` step.
3. Expand the `Legal and Islamic Accountability` section so the Islamic-review card includes a direct scholar link.

**Recommended placements**

- Near hero trust points:
  - `Reviewed with qualified Islamic scholar oversight`
  - scholar name
  - 1-line credential
  - `Read scholar bio`
- In the `Dual Expert Review` card:
  - add a short proof line such as:
    `Islamic inheritance review anchored by scholar oversight.`
- In the accountability section:
  - add a text link from `qualified Islamic scholars` to the scholar bio page

**Design notes for Antigravity**

- Keep this refined and minimal, not a big biography panel in the hero.
- Treat it as a premium trust cue, similar to a “reviewed by” credential strip.
- Use a calm portrait, name, short role, and one disciplined CTA.

## Priority 2: Legal & Islamic Compliance Page

**Why**

This is the most important page for explaining boundaries, authority, and the separation between software, scholar review, and legal workflow.

**Files**

- `app/legal-islamic-compliance/page.tsx`
- `app/legal-islamic-compliance/compliance.module.css`

**Implementation**

1. Add a dedicated section called something like:
   - `Islamic Review Leadership`
   - `Scholar Oversight`
   - `Who Reviews the Islamic Structure`
2. Include:
   - portrait
   - full name
   - short positioning line
   - 2-3 sentence summary
   - credentials highlights
   - CTA to full scholar bio
3. Add one short boundary note:
   - scholar review supports inheritance considerations
   - does not replace a personal fatwa for unusually complex cases

**Content purpose**

This page should answer:

- Who is behind the Islamic review?
- What is the scholar’s role?
- What is the scholar not claiming to do?

**Design notes for Antigravity**

- This can be more substantial than the homepage version.
- It should feel institutional and confidence-building.
- Keep it visually distinct from the legal workflow explanation so the two authorities remain clearly separate.

## Priority 3: Pricing Page

**Why**

Pricing is where users ask: “What exactly am I paying for?” Scholar review is one of the strongest reasons the package feels more valuable than DIY templates.

**Files**

- `app/pricing/page.tsx`
- `app/pricing/pricing.module.css`

**Implementation**

1. Add a scholar trust block near `The Review & Compliance Layer`.
2. Add an inline link in the `Qualified Islamic Scholar Review` item.
3. Optionally add a small side note below pricing cards:
   - `Includes scholar-reviewed inheritance considerations`
   - linked to scholar bio or compliance page

**Best location**

- Directly under or beside Ledger Row 2:
  - `The Review & Compliance Layer`

**Design notes for Antigravity**

- This should feel like proof of value, not a distraction from the pricing decision.
- Use compact formatting.
- Keep the emphasis on package credibility.

## Priority 4: How It Works Page

**Why**

This page explains the process in detail. It is the ideal place to make the scholar-review step feel real, human, and accountable.

**Files**

- `app/how-it-works/page.tsx`
- `app/how-it-works/how-it-works.module.css`

**Implementation**

1. In `Step 2: Dual Expert Review`, add a small scholar identity callout.
2. In the `Qualified scholars` policy item, link directly to the scholar bio.
3. Optionally add a small profile strip between the review section and the policy section.

**Content purpose**

Make the review step feel:

- human
- credible
- structured
- not just algorithmic or generic

**Design notes for Antigravity**

- A slim horizontal card or callout works well here.
- Avoid slowing the page with a large biography block.

## Priority 5: FAQ Page

**Why**

The FAQ already answers scholar-related questions, but it does not yet convert that answer into a deeper trust path.

**Files**

- `app/faq/page.tsx`
- `app/faq/faq.module.css`

**Implementation**

1. Add internal links inside relevant answers:
   - `qualified Islamic scholars`
   - `Islamic scholar review`
2. Add one optional final FAQ support card:
   - `Want to understand who reviews the Islamic structure?`
   - button to scholar bio or compliance page

**Questions most relevant**

- `Do you issue personal fatwas?`
- `How does an Islamic will work in Canada?`
- any scholar-review question added later

## Priority 6: Full Scholar Bio Page

**Why**

All compact placements need a strong destination page.

**Suggested file**

- `app/about/sulayman-al-murayr/page.tsx`

**Suggested supporting styles**

- either reuse existing bio page patterns from:
  - `app/about/ahmed-gohar/page.tsx`
  - `app/about/dr-yasser-aboutaha/page.tsx`
- or create a reusable shared scholar-bio pattern if needed

**Page goals**

1. establish the scholar as a real, credible authority
2. show teaching and scholarly depth
3. show North America relevance where possible
4. explain his role in the Muslim Will trust framework

**Suggested page structure**

1. Hero
   - name
   - role
   - short credibility statement
2. Main biography
   - Quran teaching
   - academic and teaching work
   - Arabic teaching in Canada
   - mosque lecturing / community service
3. Scholarship and ijazat section
   - Quran
   - tafsir
   - hadith
4. Role in Muslim Will
   - what scholar review means
   - how it supports inheritance considerations
5. CTA section
   - start your will
   - back to compliance or about

## Recommended Reusable Content Blocks

Antigravity should design these as repeatable components, not one-off page hacks.

### Block A: Mini Scholar Trust Line

Use in:

- homepage hero area
- pricing highlights
- FAQ support areas

Includes:

- tiny portrait or icon
- scholar name
- 1 credential line
- text link

### Block B: Scholar Trust Card

Use in:

- homepage accountability section
- pricing page
- how-it-works page

Includes:

- portrait
- full name
- short role line
- 2-3 sentence summary
- CTA to bio

### Block C: Full Scholar Feature Section

Use in:

- legal & Islamic compliance page

Includes:

- portrait
- heading
- summary
- credentials bullets
- role boundary note
- CTA to full bio

## Copy Rules

### Do

- position him as scholar authority for Islamic review
- keep claims precise
- emphasize inheritance considerations, Islamic structure, and scholarly oversight
- connect his background to trust, education, and review credibility

### Do Not

- blur him with legal authority
- overstate what he personally guarantees
- imply he replaces individual legal advice
- imply he replaces a personal fatwa in highly unusual cases

## Messaging Framework

### Ahmed Gohar

Use Ahmed as:

- founder
- systems architect
- workflow and platform builder

Do not use Ahmed as:

- legal authority
- scholar authority

### Scholar

Use the scholar as:

- Islamic-review authority
- faith-conscious trust layer
- scholarly anchor for inheritance considerations

### Legal team

Use the legal layer as:

- independent legal workflow
- execution oversight
- document review and final attestation pathway

## Internal Linking Plan

Add links from:

- homepage scholar mentions -> scholar bio
- pricing scholar mentions -> scholar bio or compliance page
- how-it-works review section -> scholar bio
- FAQ scholar answers -> scholar bio
- compliance page -> scholar bio
- about page -> scholar bio if added to team/advisory grid

## Navigation Recommendation

Do not add the scholar directly to the header at first unless the scholar becomes a major public-facing figure.

Recommended first phase:

- link from homepage
- link from compliance
- link from footer `Experts & Trust`

Possible second phase:

- add scholar under `About` dropdown in header

## Footer Recommendation

**File**

- `components/ui/Footer.tsx`

Add scholar link under `Experts & Trust` after the page is live.

## About Page Recommendation

**File**

- `app/about/page.tsx`

Optional but recommended:

Add a third card under `Leadership and Islamic Advisory` for the scholar, especially if the site wants clearer differentiation between:

- founder
- community adviser
- Islamic review authority

## Schema Recommendation

After the page is live, add `Person` schema for the scholar bio page.

Suggested fields:

- name
- alternateName in Arabic if appropriate
- jobTitle
- description
- url
- image
- affiliation
- knowsAbout

## Asset Checklist

Antigravity should request or confirm:

1. final English spelling
2. preferred public title
3. high-quality portrait
4. publishing permission
5. exact relationship to Muslim Will
6. short bio
7. long bio
8. approved credentials summary
9. whether Arabic name should appear on page

## Execution Order

### Phase 1: Content Foundation

1. confirm scholar identity details
2. finalize short bio
3. finalize full bio
4. approve public claims

### Phase 2: Main Trust Placements

1. build full scholar bio page
2. add homepage scholar trust cue
3. add compliance-page scholar section
4. add pricing-page scholar trust card

### Phase 3: Process and Support Placements

1. add scholar callout to how-it-works
2. add FAQ links and support cue
3. add footer link

### Phase 4: Optional Expansion

1. add scholar to about page grid
2. add scholar to header dropdown
3. add structured `Person` schema

## Success Criteria

This implementation is successful if:

1. users can identify a real scholar behind the Islamic review without hunting for it
2. trust improves before the pricing decision
3. the scholar role is clear without legal overclaiming
4. the homepage feels more credible without becoming crowded
5. all scholar mentions point to a strong destination page

## Final Guidance For Antigravity

This should feel like a premium trust system, not a biography dump.

The right execution style is:

- calm
- sparse
- intentional
- credibility-first
- clearly separated from legal authority

The scholar is not filler content.
He is a strategic trust asset and should appear exactly where a visitor asks:

- `Who is reviewing the Islamic side?`
- `Why should I trust this process?`
- `What makes this better than a template?`
