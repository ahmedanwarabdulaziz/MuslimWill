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

## Summary

| # | File | Change |
|---|---|---|
| 1 | `/app/faq/page.tsx` | Replace with redirect → `/about/faq` |
| 1 | `/app/contact/page.tsx` | Replace with redirect → `/about/contact` |
| 2 | `/app/page.tsx` | "POA vault" → "incapacity vault" in Section 7 |
| 3 | `/app/my-bridge/page.tsx` | New page — My Bridge hub (see brief 33) |
| 4 | `/components/ui/Header.tsx` | ✅ Done — My Bridge and My Vault labels are now nav links |
