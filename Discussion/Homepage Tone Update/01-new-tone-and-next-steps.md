# Homepage Tone Update — Decisions & Next Steps

## Status
Homepage and How It Works rebuilt (October 13, 2026). This file covers the decisions behind them and the work that sits outside the website codebase.

---

## 1. The Problem

Google organic and paid search bring the right people to the site, but they close the homepage.

Diagnosis: they searched for an Islamic will and expected answers and reassurance. They landed on "Start for $7.99/month" and bundles, a buying decision they were not ready to make.

## 2. Confirmed Decisions

- **Main hook:** Canadian default rules don't follow Islam. Show the gap, then show that a will makes both work together.
- **Hero H1:** "Canadian law has a plan for your estate. It isn't the Islamic one."
- **Primary CTA:** "Check the difference for your family" → https://app.themuslimwill.com/calculator
- **Secondary CTA:** "How it works" → /how-it-works
- **Product label:** "Will + Vault" — with "Your Islamic Will, always up to date"
- **Never say "living will"** (in Canada it means a medical directive)
- **Update claim:** the will refers to appendices kept in the Vault (debts, assets, documents). Updating them needs no redrafting and costs nothing extra. Confirmed with the lawyer.
- **Example numbers** ($600k estate, wife + 2 sons + 1 daughter): Ontario $433,333 / $55,556 each; Faraid $75,000 / $210,000 / $210,000 / $105,000. Confirmed.
- **No pricing block on the homepage.** Price first appears on How It Works, after the value is understood.
- **Header "Get Started"** → https://app.themuslimwill.com/Account/Login
- **Other pages** (/pricing, /my-bridge, header menu "Start My Application") stay as they are for now and get updated later.

---

## 3. Calculator App — Required Changes (app.themuslimwill.com)

The homepage now sends most visitors to the calculator, so the calculator is now the real conversion point.

### 3.1 Add Google Analytics (critical)
The calculator currently loads **only Microsoft Clarity, no GA4.** GA4 and Google Ads cannot see anyone who uses it.

- Add GA4 with the **same Measurement ID as the website: `G-F4G0TKGB86`**
- Same root domain means GA shares the session cookie automatically. No cross-domain linker needed.
- Fire these events:

| Event | When |
|---|---|
| `calculator_start` | Step 1 answered |
| `calculator_complete` | Results shown |
| `calculator_results_emailed` | Visitor submits email for results |
| `calculator_start_will_click` | Clicks to register from results |
| `sign_up` | Registration completed |

- In GA4, mark `calculator_complete`, `calculator_results_emailed` and `sign_up` as **key events**, then import them into Google Ads as conversions.

### 3.2 Results page hand-off
Visitors who are not ready to pay need a middle step. Otherwise they leave again, just one page later.

1. **Show the gap clearly:** the Ontario vs Faraid table for their family, same style as the homepage.
2. **Bridge line:** "Your will can make both work together."
3. **Primary CTA:** "Start my will" → register.
4. **Secondary CTA:** "Email me my results." Capture the email, send the results, then a short nurture sequence (3–4 emails: why it matters → how Will + Vault works → scholars & legal trust → start).
5. **Brand:** change page title from "Free Faraid Calculator · Patriva" to Muslim Will branding.

### 3.3 Results page copy (ready to paste)

Place this block directly under the visitor's Ontario vs Faraid results:

> **Will + Vault**
> **Your Islamic Will, always up to date**
>
> Your will can make Ontario law follow the shares you just saw. And once it is written, your Vault keeps it current: your debts, assets and documents are kept as appendices to your will, so you update them any time, with no redrafting and no extra cost.
>
> **[Start my will]**  **[Email me my results]**
>
> *Built with Islamic scholars · Prepared for Ontario legal requirements · From $7.99/month*

Notes:
- This is the first place the price appears in the funnel, and only as a small line, not a button.
- "Email me my results" should send the comparison table plus a link back to the results, then start the nurture sequence.

---

## 4. Google Ads — Message Match

Ads that promise "$7.99/month" now land on a page about Ontario vs Faraid. Test at least one ad group with the new hook.

**Headlines (≤30 characters)**
- Ontario Law Isn't Faraid
- Is Your Will Islamic?
- See Your Family's Difference
- Free 3-Minute Faraid Check
- Islamic Will for Ontario
- Will + Vault, Always Current

**Descriptions (≤90 characters)**
- Without an Islamic will, Ontario's default rules decide who inherits. See the difference.
- Free 3-minute check, no names needed. See how Ontario and Faraid divide your estate.
- Islamic will built with scholars, prepared for Ontario law, kept current by your Vault.

Run against the current ads and compare conversion to `calculator_complete`, not just clicks.

---

## 5. Measure Before / After

Before deploying, record for the last 2–4 weeks (GA4, homepage, paid traffic):
- Bounce / engagement rate on `/`
- Average engagement time on `/`
- Registrations from paid traffic

Recheck 2–3 weeks after launch. Use `/admin/clicks` (outbound click log) to see homepage → calculator click volume by campaign.

---

## 6. Done in the Website Codebase

- Homepage rewritten around the new hook (`app/page.tsx`)
- How It Works rebuilt in the new tone (`app/how-it-works/page.tsx`)
- Header "Get Started" → Login
- Hero background images compressed: `12.jpeg` 1.5 MB → 56 KB, `07.jpeg` 620 KB → 75 KB (faster load on mobile for paid traffic)

## 7. Later

- Update /my-bridge and header menu CTAs to the new tone (/pricing and FAQ renamed to "Will + Vault" on October 13, 2026)
- Keyword landing pages ("Islamic will Ontario", "Muslim will Canada") using the same hook and comparison
- Decide the family package price
