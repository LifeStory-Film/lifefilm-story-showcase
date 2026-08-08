# Pricing Audit — LifeStory.Film

Date: 2026-08-08 (session 3). Trigger: owner flagged $1,999 as a price that does not exist.
Owner confirmed: **real floor is $2,499 for BOTH photography-only and videography-only.**
$1,999 and $2,199 are fabricated. **Multi Day package to be removed entirely.**

---

## 1. Source of truth (real package prices)

Authoritative package data lives in `src/components/pricing/PricingPackages.tsx`
(`COMBO_PACKAGES`, `PHOTO_PACKAGES`, `VIDEO_PACKAGES`). After this session's edits:

| Tier | Combined (photo+video) | Photography-only | Videography-only |
|------|-----------------------|------------------|------------------|
| Essential | $3,959 (5 hrs, 1+1) | $2,499 (5 hrs) | $2,499 (5 hrs) |
| 8 Hours Photo | — | $2,999 | — |
| Signature | $6,928 (8 hrs, 2+2) | $3,999 | $3,999 |
| ~~Multi Day~~ | ~~$12,869~~ REMOVED | ~~$6,999~~ REMOVED | ~~$6,999~~ REMOVED |

Weekend combo prices (`COMBO_WEEKEND_PRICES`): Essential $4,399, Signature $7,698
(Multi Day $14,299 REMOVED). Add-ons unchanged: extra hour $300, second shooter $800,
raw footage $400, same-day edit $1,200, engagement $600, premium album $450, livestream $800.
Fine-art album (`FineArtAlbums.tsx`): $1,000. Location factors: peak ×1.2, holiday ×1.3,
destination ×1.4, weekday ×0.9, NorCal +$1,000, last-minute ×1.1.

Corroboration that **$2,499 is the true floor** (5 independent places): VIDEO/PHOTO Essential
basePrice=2499; `VideographyPackages.tsx` & `PhotographyPackages.tsx` headers "packages from
$2,499"; `/videography` & `/photography` page metadata "Packages from $2,499".

## 2. Phantom prices found (the actual bug)

| Price | Where | Reality | Origin |
|-------|-------|---------|--------|
| **$1,999** | `src/app/pricing/page.tsx:39` ("videography-only from $1,999") | No such package; real min $2,499 | commit `ddd0fee` (Rich Lyke, 2026-04-03, "design,seo") — **manual** commit, not autopublisher; unchanged since |
| **$2,199** | `src/app/pricing/page.tsx:37` ("photography-only from $2,199") | No such package; real min $2,499 | same file/era |

- Both existed in **exactly one file** (`/pricing/page.tsx`). The "Also available…" line is
  **NOT** in the conversion-block template — the CTA (`BlogConversionCTA.tsx`) already said
  "$2,499", so the 87 posts were never affected. (Corrects the assumption that it was templated.)
- The site contradicted itself: `/videography` & `/photography` said "$2,499" while `/pricing`
  linked to them saying "$1,999 / $2,199".

## 3. JSON-LD / schema (Step 4)

- No numeric Offer/Product schema anywhere exposed $1,999 / $2,199. `priceRange` is a symbol
  (`$$$` in layout/home & pricing; `$$$$` in blog LocalBusiness — cosmetic inconsistency, no
  numbers). `services.ts` `pricingRange` = `$$$$` (explicit "PHASE 1 placeholder", rendered via
  services/[slug] `priceRange`).
- The **only** numeric prices in schema were in the FAQ JSON-LD (`src/app/faq/page.tsx`):
  "$3,959 to $12,869" and Multi Day mentions — these fed rich results. **Fixed** (see below).

## 4. Fixes applied this session (deployed + verified live)

**Task 1 — floor unified to $2,499** (`src/app/pricing/page.tsx`): 2 occurrences replaced.
New copy: "photography-only packages from $2,499 and videography-only packages from $2,499,
depending on date and location."

**Task 2 — Multi Day package removed** from all package UI + FAQ:
- `PricingPackages.tsx` — removed multi-day from COMBO/PHOTO/VIDEO arrays + weekend map.
- `PackagesSection.tsx` (homepage) — removed 3 multi-day tiers.
- `PricingCalculator.tsx` — removed multi-day base package (default is Signature; safe).
- `PricingFAQs.tsx` — reworded "dedicated multi-day packages" → "quoted individually".
- `FAQPage.tsx` + `faq/page.tsx` (JSON-LD) — 6 answers each: removed "Multi Day package"
  mentions and the $12,869 range ceiling (now $3,959–$6,928; "multi-day/destination quoted
  individually"). Kept generic "multi-day wedding" as an event type.
- Landing pages: `south-asian` link label "multi-day packages" → "packages and pricing";
  `african` heading "Full day and multi-day packages" → "…coverage".
- **Dead conditionals left in place (harmless, render nothing):** `pkg.id === 'multi-day'` and
  `pkg.limited` blocks in `PricingPackages.tsx` (~527-530) and `PackagesSection.tsx` (~561-564).

**No dedicated `/multi-day` route exists** — nothing to 301/404. Navigation had no multi-day link.

## 5. Verified on live URLs after build + `pm2 restart`

- `grep` of live HTML on home, /pricing, /photography, /videography, /faq, + 3 posts:
  `1,999`=0, `2,199`=0, `multiday`=0, `Multi Day`=0, `12,869`=0 everywhere.
- `/pricing`: shows Essential + Signature only, `$2,499` present, no Multi Day.
- `/faq` JSON-LD: 2 blocks (LocalBusiness + FAQPage), both parse valid, no phantom tokens.
- Internal links (/pricing, /photography, /videography, /faq, landing pages): all 200.

## 6. ⚠️ Residual multi-day / stale-price references in BLOG PROSE — NOT yet touched

Out of scope for package removal (these are prose/market ranges, and bulk content-price editing
was deferred to a single pass with real numbers). **~20 posts** still cite `$12,869` and/or
`$14,299` as a price-range ceiling, and **~27 posts** use "multi-day" as prose. The hyphenated
"multi-day" and those numbers will NOT trip the owner's live checks (which grep "multiday",
"1,999", "2,199"), but they reference a tier that no longer exists.

Recommend a **content pricing pass** (one commit, once owner confirms final public ranges):
replace `$12,869`/`$14,299` range ceilings in blog posts, and audit each post's stated LifeStory
"from"/range so nothing quotes below $2,499 or references the removed Multi Day tier. Full file
list is reproducible via:
`grep -rln -e "12,869" -e "14,299" -e "multi-day" src/app/blog/posts/`

## 7. Files changed this session
`src/app/pricing/page.tsx`, `src/components/pricing/PricingPackages.tsx`,
`src/components/PackagesSection.tsx`, `src/components/pricing/PricingCalculator.tsx`,
`src/components/pricing/PricingFAQs.tsx`, `src/components/faq/FAQPage.tsx`,
`src/app/faq/page.tsx`, `src/app/south-asian-wedding-videographer/page.tsx`,
`src/app/african-wedding-videographer/page.tsx`.
