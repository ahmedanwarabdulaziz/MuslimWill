# Update 02 — Bridge Positioning Review ✅ COMPLETED 2026-06-13
**Date:** 2026-06-13
**Focus:** Making sure the $7.99 Bridge subscriber feels complete, not entry-level.

## The Core Rule
> The $7.99 subscriber is a normal Muslim family who has everything they need.
> Upgrades exist only for specific, unusual, or complex situations.
> The Bridge must never feel cheap, lite, or like a stepping stone.

---

## 🔴 Critical — Undermines the $7.99 Position

### 1. "As low as $7.99/month" — Homepage Hero Trust Bar
**File:** `/app/page.tsx` — hero section trust points

"As low as" is classic budget/entry-level language. It signals "this is the cheapest option" not "this is the complete option."

**Fix:** Change to simply `$7.99/month — Complete Islamic Will & Vault` or just `From $7.99/month`.

---

### 2. "for less than a coffee per week" — Homepage Problem Section
**File:** `/app/page.tsx` — transition block

> *"The Bridge gives you both — in one place, for less than a coffee per week."*

This is the most damaging line on the entire site. "Less than a coffee" is the language used to sell $2.99 apps and newsletter subscriptions. It signals cheap, trivial, and disposable — the opposite of what we want. A Muslim family does not want to think about their Islamic will and their family's legacy in terms of coffee.

**Fix:** Remove entirely. Replace with something that signals completeness and seriousness:
> *"The Bridge gives you both — in one complete subscription, built specifically for Muslim families in Canada."*

---

### 3. "Full human review available as an add-on" — Homepage Bridge Features
**File:** `/app/page.tsx` — The Will card inside The Bridge section

> *"Full human review available as an add-on"*

This bullet appears inside The Bridge features list — which means a visitor reads the complete list of what they get and the last item tells them something important is NOT included. It makes the $7.99 product feel like it lacks expert human involvement.

**Fix:** Remove this bullet from the Bridge feature list. Add-ons should never be mentioned inside the main product's feature list. The add-on section handles this separately.

---

### 4. "Choose how you want to start" — Homepage Pricing Section Header
**File:** `/app/page.tsx` — pricing section H2

"How you want to start" implies The Bridge is the beginning of a journey toward something bigger. It positions $7.99 as a trial, not a destination.

**Fix:** Change to:
> *"The right option for your situation."*

---

### 5. Two Add-Ons on Homepage That Don't Exist in the Product
**File:** `/app/page.tsx` — add-ons table

The homepage add-ons table includes:
- Canada Will Directory Registration — $29
- Annual Will Review — $49/year

These were removed from the confirmed product list. They should not appear on the site.

**Fix:** Remove both rows. The confirmed add-ons are: Last Will standalone ($149), POA Personal Care ($99), POA Property ($99), Scholar Review ($49), Admin & Legal Review ($49), Digital Attestation ($149).

---

## 🟡 Secondary — Weakens the Complete Feel

### 6. "POA vault for incapacity" — Homepage Bridge Features
**File:** `/app/page.tsx` — The Vault card inside The Bridge section

This phrasing implies a legal POA document is inside The Bridge. It's not — the Vault stores *instructions and guidance* for incapacity, but the legal POA documents are separate add-ons at $99 each. This creates confusion and a potential trust issue if users expect a POA they don't get.

**Fix:** Change to:
> *"Private incapacity instructions stored in your Vault"*

---

### 7. "Scholar & lawyer pre-approved template" — Homepage Bridge Features
**File:** `/app/page.tsx` — The Will card

This implies the will is a template that was pre-approved in general, not reviewed for the user specifically. It could reduce confidence in the product.

**Fix:** Change to:
> *"Built by Islamic scholars and structured to meet Canadian legal requirements"*

---

## ✅ What Is Already Right — Do Not Change

**Product pages (Last Will, POA, Vault pages):**
- "When your situation calls for more" — perfect framing. Keeps add-ons situational.
- "Some estates are more complex. Some families want individual expert review." — correct.
- Trust anchors lead with what's included, not what's missing.

**Pricing page (`/pricing`):**
- Bridge is the largest card with "✦ Most Complete" badge — correct.
- Add-ons section: "For specific situations — not to complete The Bridge." — exactly right.
- Full Package: "For specific situations that call for individual expert attention" — correct.

**Start page (`/start`):**
- Bridge card is primary, Full Package is secondary — correct hierarchy.
- "✦ Most Complete" badge — good.

**About/Compliance, Our Story, FAQ pages:**
- No pricing positioning issues found.

---

## The Correct Mental Model to Communicate

| What the user should feel | What to avoid |
|---|---|
| "I have everything I need." | "I got the basic version." |
| "Upgrades are for unusual situations." | "I should probably get an add-on." |
| "$7.99 is the normal, complete choice." | "$7.99 is the cheap entry point." |
| "The Bridge is a serious product." | "It's less than a coffee." |

---

## Summary of Changes

| # | File | Change |
|---|---|---|
| 1 | `/app/page.tsx` | "As low as $7.99" → remove "as low as" |
| 2 | `/app/page.tsx` | Remove "for less than a coffee per week" |
| 3 | `/app/page.tsx` | Remove "Full human review available as an add-on" from Bridge features |
| 4 | `/app/page.tsx` | Pricing H2: "Choose how you want to start" → "The right option for your situation" |
| 5 | `/app/page.tsx` | Remove Canada Will Directory and Annual Will Review from add-ons table |
| 6 | `/app/page.tsx` | "POA vault for incapacity" → "Private incapacity instructions stored in your Vault" |
| 7 | `/app/page.tsx` | "Scholar & lawyer pre-approved template" → correct description |

**All 7 changes are on the homepage only.** The product pages and pricing page are already correctly positioned.

---

## 🔵 New Pages to Build

### 8. My Vault Overview (`/vault`)
**Brief:** `Discussion/Pages Content/31-vault-overview.md`

Create a new file at `/app/vault/page.tsx`. This is the hub/entry page for the My Vault section. Multiple existing pages link to `/vault` and currently get a 404.

**Key points:**
- 5 sections: hero → 4 branch cards → release process (3 steps) → amanah Islamic framing → CTA
- Each branch card links to its existing feature page (`/vault/obligations-register`, `/vault/estate-inventory`, `/vault/sealed-disclosures`, `/vault/final-words`)
- Nav eyebrow: `My Bridge › My Vault`
- CTA anchored to The Bridge — no add-on mentions, no upgrade prompts
- Read the full brief for all copy and design details

---

### 9. Community & Giving Overview (`/community`)
**Brief:** `Discussion/Pages Content/32-community-overview.md`

Create a new file at `/app/community/page.tsx`. This is the hub/entry page for the Community & Giving section. Currently links to `/community-and-giving` result in 404s.

**Key points:**
- 5 sections: hero → 5 programme cards → Islamic case for community leaders → request a conversation CTA → individual visitor redirect
- Each programme card links to its existing page (`/community/mosque-ambassador`, `/community/charity-partnership`, `/community/planned-giving`, `/community/sponsored-seats`, `/community/community-resources`)
- Nav eyebrow: `Community & Giving`
- Audience is imams and charity leaders — not individual families
- Read the full brief for all copy and design details
