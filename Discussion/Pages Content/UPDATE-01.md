# Update 01 — Post-Build Review
**Date:** 2026-06-13
**Pages reviewed:** All 30 website pages
**Overall quality:** Very high. Copy matches briefs faithfully, tone is consistent, Islamic framing is handled with care throughout. The build is solid — what follows are corrections and improvements before launch.

---

## 🔴 Critical — Fix Before Launch

### 1. POA Microcopy — Incorrect Pricing Statement
**Affected pages:** `/poa-personal` and `/poa-property`

The final CTA microcopy on both pages currently reads:
> *"POA for Personal Care is $99 as a standalone — or included in The Bridge from $5.99/month alongside your Islamic Will and private Vault."*

**This is wrong.** POA is NOT included in The Bridge. The Bridge is Will + Vault only.

**Fix to:**
> *"POA for Personal Care is $99 as a standalone — or included in the Full Package ($350) alongside your Islamic Will, both POAs, Scholar Review, Admin Review, and Digital Attestation."*

Same fix needed on `/poa-property`.

---

### 2. Missing `/vault` Overview Page
**Affected pages:** obligations-register, estate-inventory, sealed-disclosures, final-words, poa-property

Multiple pages have `"See What's in the Vault →"` CTAs linking to `/vault`. There is no `/vault/page.tsx` — this will 404.

**Options:**
- A. Create a simple `/vault` overview page (landing page for My Vault section)
- B. Change all `/vault` links to point to `/#included` (the homepage Vault section)

**Recommendation:** Option A — a `/vault` overview page is a natural anchor for the whole Vault section. We don't have a brief for it yet. Let's discuss and write one. *(See Pending at end of file.)*

---

### 3. `/apply` Links — Route Doesn't Exist
**Affected pages:** Our Story, Compliance

Several CTAs link to `/apply` (e.g., "Start My Application →") which is not a valid route. The correct destination is either `/start` or `https://app.themuslimwill.com/Account/Login`.

**Fix:** Replace all `/apply` hrefs with `https://app.themuslimwill.com/Account/Login` (consistent with all other pages that already use this).

---

### 4. Wrong Internal Link — Pricing Page
**Affected page:** `/pricing`

The footer links include:
```
<Link href="/vault/last-will-testament">The Will</Link>
```
Route doesn't exist. The correct path is `/last-will`.

**Fix:** Change to `/last-will`.

---

### 5. `/our-scholars` Links — Wrong Path
**Affected pages:** Our Story, Last Will (Scholar Review card)

Both link to `/our-scholars` — this route doesn't exist. The page is at `/about/our-scholars`.

**Fix:** Change all `/our-scholars` to `/about/our-scholars`.

---

### 6. `/community-and-giving` Link — Route Doesn't Exist
**Affected page:** `/charitable-legacy`

The "Are you a charity or mosque" note links to `/community-and-giving` — no such route exists. Community pages are at `/community/charity-partnership`, `/community/mosque-ambassador`, etc.

**Fix:** Change to `/community/charity-partnership` (most relevant starting point) or create a `/community` landing page. *(See Pending.)*

---

## 🟡 Minor — Review and Clean Up

### 7. Duplicate Routes — `/faq` and `/about/faq`, `/contact` and `/about/contact`
The file structure shows both:
- `/app/faq/page.tsx` and `/app/about/faq/page.tsx`
- `/app/contact/page.tsx` and `/app/about/contact/page.tsx`

If both exist, some pages are being linked to `/faq` (Compliance page footer) while others go to `/about/faq`. This creates two separate pages for the same content.

**Decision needed:** Which URL is canonical? Redirect one to the other. `/about/faq` is in the nav — that should be canonical.

---

### 8. Obligations Register — CTA Links to `/vault#final-words`
**Affected page:** `/vault/obligations-register`

The vault section CTA links to `/vault#final-words` — this will 404 until the `/vault` overview page exists. 

**Interim fix:** Change to `/vault/final-words` directly.

---

### 9. Compliance Page Footer — `/contact` vs `/about/contact`
Links to `/contact` — should be `/about/contact` to be consistent with the nav and other pages.

---

## ✅ Confirmed Good — No Changes Needed

- **Help page** — "Coming soon" implementation is exactly right per Update in brief. The launch note, disabled cards, email capture, and category filter inactive state are all correctly built.
- **Pricing page** — Bridge as largest card, add-on framing ("not to complete The Bridge"), all pricing figures correct throughout.
- **Start page** — Split layout is clean. All three cards and "Already have an account?" row are correct.
- **Final Words page** — The Prophet ﷺ section is handled beautifully — present, meaningful, and restrained. This is the best page on the site emotionally.
- **Sealed Disclosures** — Sitr principle and audit trail framing are both correct and well-executed.
- **Compliance page** — "What We Are Not" section is excellent. The three-layer structure is clear.
- **Our Story** — The four-section narrative structure (gap → what we built → who we serve → where we're going) reads as intended.
- **Charitable Legacy** — H1 is the confirmed brand phrase. The final CTA uses the confirmed closing line. The Waqf section is clean.
- **Islamic framing across all pages** — Consistent tone throughout. No overreach, no underreach. The Hadith on Obligations Register is used once purposefully.

---

## 🔵 Pending — New Pages to Write Briefs For

Based on the build, two new pages need briefs that were not in the original 30:

**1. My Vault Overview (`/vault`)**
- Entry point for the full Vault section
- Links to all 4 Vault features
- Should explain the Vault concept, the executor release process, and the privacy model
- Not a product page — more of a hub/orientation page

**2. Community Overview (`/community`)**
- Entry point for the Community & Giving section
- Links to all 5 community pages (Charity Partnership, Sponsored Seats, Planned Giving, Mosque Ambassador, Community Resources)
- Relevant since `/community-and-giving` is linked from multiple places and there's no landing page

---

## Summary

| Priority | Count | Status |
|---|---|---|
| 🔴 Critical fixes | 6 | Fix before launch |
| 🟡 Minor cleanup | 3 | Fix in next pass |
| ✅ Confirmed good | 10 areas | No action needed |
| 🔵 New briefs needed | 2 pages | Discuss and write |
