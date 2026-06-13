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

## Summary

| # | File | Change |
|---|---|---|
| 1 | `/app/faq/page.tsx` | Replace with redirect → `/about/faq` |
| 1 | `/app/contact/page.tsx` | Replace with redirect → `/about/contact` |
| 2 | `/app/page.tsx` | "POA vault" → "incapacity vault" in Section 7 |
