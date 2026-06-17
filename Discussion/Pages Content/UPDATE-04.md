# Update 04 — BHope Partner Page Corrections
**Date:** 2026-06-17
**File:** `/app/community/partners/bhope/page.tsx`
**Full brief:** `Discussion/Pages Content/34-bhope-partner-page.md`

The page was built but is missing its core sections. The current page covers the "include BHope in your will" angle but completely misses the "BHope is giving you a free will" angle — which is the main reason a member visits this page.

---

## What to keep (already built correctly)

- Co-branded header block (BHope × Muslim Will) — keep, but add actual BHope logo image (see below)
- About BHope section with charity number
- 3 impact cards (Medical Aid, Educational Aid, Emergency Response)
- "Why Now" section with Hadith framing
- Inquiry form at the bottom

---

## 🔴 Critical — Add These Missing Sections

---

### 1. Add BHope logo image to the co-branded hero

The co-brand currently shows text only. Replace or supplement with the actual BHope logo:

**Logo SVG:** `https://irp.cdn-website.com/45d9c0f0/dms3rep/multi/BHope+Logo+Main.svg`
**Logo PNG (white bg):** `https://lirp.cdn-website.com/45d9c0f0/dms3rep/multi/opt/BHOPE+Logo+White+Background-1920w.jpg`

Display both logos side by side in the hero with "in partnership with" between them.

Also update the hero H1 and sub to reflect the sponsored seat offer:

**H1:**
> A complete Islamic will — Building Hope International's gift to their community.

**Subheading:**
> BHope has reserved sponsored seats for their members — covering the cost of a complete Islamic will and private Vault through The Muslim Will. As a BHope member or supporter, yours may be free.

**Hero CTAs (replace current):**
- Primary: `Get Your Code From BHope →` → `https://www.bhope.ca/contact-us`
- Secondary: `Already have a code? Start here →` → `https://app.themuslimwill.com/Account/Login`

---

### 2. Add the sponsored seats section (after the hero / trust bar)

This is the most important missing section. Insert it immediately after the trust bar, before the "About BHope" section.

**Section label:** What BHope Has Reserved For You

**H2:** Two options. Both covered by BHope.

**Intro line:**
> Building Hope International has purchased sponsored seats across both our subscription plans. Here is what is available to their community.

**Two-card layout side by side:**

---

**Card A — The Bridge (Sponsored)**
- Badge: `✓ Sponsored by BHope`
- Title: The Bridge
- Price: ~~$5.99/month~~ → **Free or discounted — see BHope for your code**
- Includes:
  - Complete Islamic Will & Testament (Faraid-based, Ontario-compliant)
  - Muslim Will Vault — all 4 branches (Obligations, Estate Inventory, Sealed Disclosures, Final Words)
  - Unlimited updates
  - Executor release process
- Small note: *Limited sponsored seats available — contact BHope to check your eligibility*
- CTA: `Contact BHope for Your Code →` → `https://www.bhope.ca/contact-us`

---

**Card B — Full Package (Sponsored)**
- Badge: `✓ Sponsored by BHope`
- Title: Full Package
- Price: ~~$350~~ → **Free or discounted — see BHope for your code**
- Includes:
  - Everything in The Bridge
  - Both Powers of Attorney (Personal Care + Property)
  - Individual Scholar Review
  - Admin & Legal Review
  - Digital Attestation
- Small note: *30 Full Package spots reserved — limited availability*
- CTA: `Contact BHope for Your Code →` → `https://www.bhope.ca/contact-us`

---

**Below the two cards — 3-step claim flow:**

> **Step 1** — Contact BHope at info@bhope.ca or +1 (647) 818-8086 to receive your personal discount code.

> **Step 2** — Register at Muslim Will and apply your code at checkout. Your sponsored seat will be activated.

> **Step 3** — Complete your will. When prompted, choose to include Building Hope International as your Sadaqah Jariyah beneficiary.

---

### 3. Add BHope images to the impact / legacy section

The "What your legacy supports" section (3 impact cards) should have visual weight. Use BHope's real images — either as a full-width background with dark overlay on the section, or displayed alongside the cards.

**Available images (use directly from their CDN):**
- `https://lirp.cdn-website.com/45d9c0f0/dms3rep/multi/opt/Volunteer-food-packing-group-1920w.jpg`
- `https://lirp.cdn-website.com/45d9c0f0/dms3rep/multi/opt/Boy-smiling-camp-1920w.jpg`
- `https://lirp.cdn-website.com/45d9c0f0/dms3rep/multi/opt/Volunteer-medical-staff-1920w.jpg`
- `https://lirp.cdn-website.com/45d9c0f0/dms3rep/multi/opt/Mother-holding-child-in-camp-1920w.jpg`

Recommended: use the child at camp or medical staff image as a full-width section background with a dark overlay and white text.

---

### 4. Add "Why BHope Did This" section

Insert after the impact section and before the "How it works" section.

**Section label:** From Building Hope International

**H2:**
> We serve people in need around the world. We also serve the community closest to us.

**Body (2 paragraphs):**

> For years, Building Hope International has worked to ensure that people without access to healthcare or education are not forgotten. We believe the same should be true for our own community — that no Muslim should be without a will because of the cost.

> By partnering with The Muslim Will, we have ensured that members of our community can fulfil their Islamic obligation without financial barriers. Some seats are entirely free. Some are offered at a discount. Because we believe in removing every obstacle to doing what is right. And for those who choose to include BHope in their lasting legacy, the work continues long after any of us are gone. That is what we are building — hope that outlasts us all.

**Attribution line:** Building Hope International · Registered Canadian Charity 799140561 RR 0001

**Link at bottom:** `Visit bhope.ca →` → `https://www.bhope.ca`

Display BHope logo in this section.

---

### 5. Add "For other charities" section

Insert as the last section before the inquiry form. This section must have a **visually distinct dark background (navy or dark charcoal)** so it reads as a separate audience block.

**Eyebrow:** For Charities & Islamic Organisations

**H2:**
> This is what a Muslim Will charity partnership looks like.

**Body:**
> Building Hope International is one of our founding charity partners. Their members receive free and discounted Islamic wills. BHope's mission is featured as a suggested legacy beneficiary in every member will.
>
> This is the model — and it is open to any registered Canadian charity or Islamic organisation that wants to invest in their community's spiritual and estate planning.

**Two-column summary (side by side):**

**What your members get:**
- Free or discounted Islamic will and private Vault
- Scholar-reviewed, Ontario-compliant document
- A complete Islamic estate plan — fulfilled

**What your organisation gets:**
- Named as a suggested Sadaqah Jariyah beneficiary in every member's will
- Long-term legacy donation stream built into member estates
- A meaningful benefit that deepens member loyalty
- A co-branded partner page — like this one

**CTAs:**
- Primary: `See How Charity Partnerships Work →` → `/community/charity-partnership`
- Secondary: `Request a Conversation →` → `/community/request-demo`

---

## 🟡 Minor — Fix Existing CTAs

The current "Start My Will →" buttons point to `/start`. This skips the code step — members who arrive here need a BHope code before they register.

**Fix all primary CTAs on the page:**
- Change `href="/start"` → `href="https://www.bhope.ca/contact-us"` with label `Get Your Code From BHope →`
- Add a secondary CTA alongside: `Already have a code? Start here →` → `https://app.themuslimwill.com/Account/Login`

---

## Summary of Changes

| # | Change | Priority |
|---|---|---|
| 1 | Add BHope logo image to hero + update H1, sub, and CTAs | 🔴 Critical |
| 2 | Add sponsored seats section (2 cards + 3-step claim flow) | 🔴 Critical |
| 3 | Add BHope images to the impact/legacy section | 🔴 Critical |
| 4 | Add "Why BHope Did This" section | 🔴 Critical |
| 5 | Add "For other charities" section (dark background) | 🔴 Critical |
| 6 | Fix all primary CTAs to point to BHope contact first | 🟡 Minor |
