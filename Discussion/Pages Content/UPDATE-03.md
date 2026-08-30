# Update 03
**Date:** 2026-06-13

---

## 🔴 Critical — Fix Before Launch

### 1. Redirect `/faq` and `/contact` to canonical URLs
**Affected files:** `/app/faq/page.tsx`, `/app/contact/page.tsx`

Both `/faq` and `/contact` pages exist as duplicate routes alongside `/about/faq` and `/about/contact`. The nav uses `/about/faq` and `/about/contact` — those are canonical. Having two separate pages for the same content causes SEO issues (duplicate content, split link equity).

**Fix:** Replace `/app/faq/page.tsx` and `/app/contact/page.tsx` with redirect files pointing to the canonical routes.

```tsx
// /app/faq/page.tsx
import { redirect } from 'next/navigation';
export default function FaqRedirect() {
  redirect('/about/faq');
}

// /app/contact/page.tsx
import { redirect } from 'next/navigation';
export default function ContactRedirect() {
  redirect('/about/contact');
}
```

This ensures any old links or bookmarks to `/faq` or `/contact` still work — they just forward to the canonical URL.

---

## 🟡 Minor — Clean Up

### 2. "POA vault" language — Homepage POA section
**File:** `/app/page.tsx` — Section 7 (POA / Incapacity), line ~378

Current text:
> "The Bridge includes a private **POA vault** — where you store your instructions, appoint your decision-makers, and leave private guidance for the people who may need to act on your behalf."

"POA vault" still implies a legal Power of Attorney document is included in The Bridge. It isn't — the Bridge includes a vault section for storing incapacity *instructions*, not legal POA documents (those are add-ons at $99 each).

**Fix:** Change `POA vault` to `incapacity vault`:
> "The Bridge includes a private **incapacity vault** — where you store your instructions, appoint your decision-makers, and leave private guidance for the people who may need to act on your behalf."

---

### 3. New page — My Bridge Overview (`/my-bridge`)
**Brief:** `Discussion/Pages Content/33-my-bridge-overview.md`

Create a new file at `/app/my-bridge/page.tsx`. This is the hub/entry page for the My Bridge section — mirroring what `/vault` does for the Vault. Presents all 4 document types (Last Will, Charitable Legacy, POA Personal Care, POA Property) in one place with clear included vs add-on distinction.

**Key points:**
- Last Will and Charitable Legacy: "✓ Included in The Bridge" badge
- POA Personal Care and POA Property: "Available as add-on" badge
- Short POA framing block explaining when POAs are relevant — not as a missing feature
- Final CTA anchored to The Bridge
- Read the full brief for all copy and design details

---

### 4. Header navigation — My Bridge and My Vault now link to hub pages
**File:** `/components/ui/Header.tsx` ✅ ALREADY UPDATED

The "My Bridge" and "My Vault" section labels in the Individuals & Families dropdown are now clickable links:
- **Desktop:** "🌉 My Bridge" label → `/my-bridge`, "🔒 My Vault" label → `/vault`
- **Mobile:** Same labels now navigate to hub pages (with `›` arrow added for clarity)

This change has already been applied directly to `Header.tsx` — no action needed from Antigravity for item 4.

---

### 5. New page — BHope Partner Page (`/community/partners/bhope`)
**Brief:** `Discussion/Pages Content/34-bhope-partner-page.md`

Create a new file at `/app/community/partners/bhope/page.tsx`. This is the co-branded partner page for Building Hope International — a dual-audience page serving BHope members (to claim their sponsored seat) and other charities (to see the partnership model as a live example).

**Key points:**
- Co-branded hero: BHope logo + Muslim Will wordmark, "in partnership with"
- BHope logo SVG: `https://irp.cdn-website.com/45d9c0f0/dms3rep/multi/BHope+Logo+Main.svg`
- Use BHope's real images from their CDN (URLs in the brief) for the emotional Section 3 background
- Two sponsored plan cards (Bridge + Full Package) with strikethrough pricing and "Sponsored by BHope" badge
- 3-step redemption: get code from BHope → register → complete will
- Emotional legacy section (Section 3) using BHope's imagery — full-width with dark overlay
- "Why BHope did this" section (Section 4) written in BHope's voice — links to bhope.ca
- Charity CTA section (Section 6) with dark/navy background — visually separated from member content
- Read the full brief for all copy, images, and design details

**External links on this page:**
- `https://www.bhope.ca/contact-us` — for members to get their code
- `https://www.bhope.ca` — BHope attribution link
- `https://app.themuslimwill.com/Account/Register` — to start after getting code
- `/community/charity-partnership` — charity CTA
- `/community/request-demo` — charity secondary CTA

---

## Summary

| # | File | Change |
|---|---|---|
| 1 | `/app/faq/page.tsx` | Replace with redirect → `/about/faq` |
| 1 | `/app/contact/page.tsx` | Replace with redirect → `/about/contact` |
| 2 | `/app/page.tsx` | "POA vault" → "incapacity vault" in Section 7 |
| 3 | `/app/my-bridge/page.tsx` | New page — My Bridge hub (see brief 33) |
| 4 | `/components/ui/Header.tsx` | ✅ Done — My Bridge and My Vault labels are now nav links |
| 5 | `/app/community/partners/bhope/page.tsx` | New page — BHope co-branded partner page (see brief 34) |
