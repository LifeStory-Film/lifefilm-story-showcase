# Growth Ops — Change Log

## Session 1 — 2026-08-08

### Deploy process (confirmed working)
```
# edit source under src/
cd /var/www/app/lifestory-film
npm run build            # ESLint runs in build and FAILS on `any` — type globals properly
pm2 restart lifestory --update-env
# then verify on the LIVE url with curl
```
- ESLint (`@typescript-eslint/no-explicit-any`) blocks the build. For window.gtag/fbq use the
  `declare global { interface Window { fbq?: ...; gtag?: ... } }` pattern (already in
  ContactSection.tsx and ConversionTracking.tsx), not `as any`.

### ✅ F1 — Sitemap now exposes the whole content library
- Rewrote `src/app/sitemap.ts`: blog posts pulled dynamically via `getAllSlugs()`, added `/blog`,
  `/contact`, landing pages, services, films.
- **Live result: sitemap went 34 URLs (0 blog) → 124 URLs (87 blog posts).** Verified on
  https://lifestory.film/sitemap.xml.
- NEXT STEP (needs owner GSC access): resubmit sitemap in Search Console and request indexing for
  priority URLs (~10/day quota). Track which get indexed.

### ✅ F4 — Phone / WhatsApp / SMS / email click tracking
- New `src/components/ConversionTracking.tsx` (client, mounted once in layout). Delegated click
  listener fires GA4 `event` + Meta `trackCustom`/`track Contact` for `tel:`, `wa.me`, `sms:`,
  `mailto:` links site-wide.
- Added GA4 `generate_lead` event on contact-form success (Meta `Lead` was already firing).
- Events to watch in GA4: `contact_phone_click`, `contact_whatsapp_click`, `generate_lead`.

### ✅ F5 — /contact page created (was 404)
- New `src/app/contact/page.tsx` renders Navigation + ContactSection + Footer. Auto-reply email
  and footer links now resolve. Live 200, added to sitemap.

### ✅ F2/F3 — In-article conversion block (all 87 posts, one code change)
- New `src/components/blog/BlogConversionCTA.tsx`: 3 film previews (Pelican Hill / Malibu / LA,
  YouTube thumbs linking to /films/[slug]), social-proof line (5.0 on The Knot & Google; filmed at
  Pelican Hill/Four Seasons/Ritz-Carlton/Malibu Rocky Oaks — all verifiable on site), two buttons
  (WhatsApp message + call), and links to /pricing, /videography, /contact.
- Injected via `blog/[slug]/page.tsx` right after the intro (before the first `<h2>`), so every
  post gets the "door to the store" high on the page. Verified live on multiple posts.
- NOTE: existing per-article internal links are still mostly blog→blog. The CTA now guarantees a
  commercial path from every post; deeper blog→landing-page interlinking is a later refinement.

### ✅ F6 (new find) — Duplicate H1 on 83/87 posts, fixed
- Page header renders the title as `<h1>`; markdown starting with `# ...` produced a SECOND `<h1>`.
- Renderer now strips the leading body `<h1>` and demotes any stray `<h1>`→`<h2>`. Verified: 1 H1/post.

## Session 2 — 2026-08-08 (owner directive: LA ranked-list etalon)

### Owner-CONFIRMED facts (use these; nothing else invented)
- Name is **Rich**. First landing-page geo priority = **Orange County**.
- Approved claims: **7-Time Best of Weddings (The Knot; 2025/2024/2022 +4)**, **The Knot Hall of
  Fame**, **5.0 / 78 reviews on The Knot**, **filming since 2010**, **packages from $2,499**.
  Award/review source: https://www.theknot.com/marketplace/lifestoryfilm-los-angeles-ca-2082602
- **NOT confirmed** → do NOT use: "1,500+ weddings". (Removed from the CTA.)
- ⚠️ **Pricing discrepancy to resolve:** owner says "packages from $2,499", but /pricing shows
  $1,999 / $2,199 / $3,959. Likely $2,499 = videography starting package vs a lower photography/
  engagement tier — but the numbers should be reconciled so the article and /pricing agree.

### ✅ New ranked article (the etalon) — /blog/best-wedding-videographers-los-angeles
- Ranked list of 10. #1 = LifeStory on confirmed facts only, with conversion block **right after
  #1** (verified: #1 < CTA < #2). #2–#10 are **real** LA studios with real sites, described only
  from their own positioning, **no invented prices/awards/counts**, all outbound links `nofollow`:
  Lin & Jirsa, Lulan Studio, Symboll®, Shutter & Sound, West Films, EverTwo, Jimmy Shin, Legacy
  Union, A Shot Of Love.
- Internal links → /pricing, /videography, /contact, LA hub post, 3 LA venue posts (all 200).
- Live verified: single H1, in sitemap, 8 JSON-LD blocks.
- NOTE: created as a NEW post (didn't cannibalize the existing `los-angeles-wedding-videographer`
  service post). This is the template to clone for other cities (OC next per owner).

### ✅ CTA placement changed site-wide
- Conversion block now injects **after the first section** (before 2nd `<h2>`) instead of before
  the first — so on ranked posts it sits right after #1, on essays after the first section.

### ✅ Per-article JSON-LD activated (all 87 posts) — was dead
- `schema:` frontmatter existed on posts but `posts.ts` never exposed it and the renderer never
  output it. Now parsed + rendered as `<script type="application/ld+json">`. Verified: OC post
  went from 2 → 10 JSON-LD blocks. Big rich-result win across the whole library.

### ✅ CTA copy → confirmed facts
- "7-Time Best of Weddings & Hall of Fame on The Knot · 5.0 from 78 reviews · Packages from $2,499."

### Deploy
- Two commits pushed to origin/main: `3fc392e` (SEO work) + `1ca38c1` (sync prior auto-published
  content/images that were live but uncommitted). Live site deploys via local `npm build` +
  `pm2 restart` — git is backup, push does not change production.

## Session 3 — 2026-08-08 (pricing integrity: kill phantom prices + Multi Day)

Full findings in **02-PRICING-AUDIT.md**. Summary of fixes (deployed + verified live):
- **$1,999 and $2,199 were fabricated** ("from" lines on `/pricing` only; real floor $2,499,
  corroborated in 5 places). Introduced in manual commit `ddd0fee` (2026-04-03). Both replaced
  with $2,499. NOT in the CTA template — 87 posts were never affected.
- **Multi Day package removed** from all package UI (`PricingPackages`, `PackagesSection`,
  `PricingCalculator`), FAQ (`PricingFAQs`, `FAQPage`, `faq/page.tsx` JSON-LD — $12,869 range
  ceiling was in rich results), and two landing-page labels. No dedicated route existed.
- Verified live: `1,999`/`2,199`/`multiday`/`Multi Day`/`12,869` = 0 on home, /pricing,
  /photography, /videography, /faq + 3 posts. FAQ JSON-LD parses valid. Internal links 200.
- ⚠️ **Still open — blog-prose pass:** ~20 posts cite `$12,869`/`$14,299` and ~27 use "multi-day"
  in prose. Left untouched (bulk content-price editing deferred). Needs one pass once owner
  confirms final public ranges. Reproduce list: `grep -rln -e "12,869" -e "14,299" -e "multi-day" src/app/blog/posts/`.

## Session 4 — 2026-08-08 (blog content price pass)

Owner-confirmed: floor **$2,499**, ceiling **$6,928** (Signature combined), FAQ $6,928 confirmed.
Commit `ff3a8e1`. `$12,869` was already 0 in blog prose; the live stale ceiling was `$14,299`.

**Fixed (LifeStory-attributed only):**
- Vilkas "LifeStory.Film packages range from $3,959 to $14,299" → "$2,499 to $6,928"
  (how-to-choose-wedding-videographer, wedding-videography-packages-california:103, jen-huang range).
- Floor claims ("Packages from $3,959", "coverage/packages starting at $3,959", "video-only
  packages starting at $3,959", "Wedding film packages start at $3,959") → **$2,499**.
- Multi-day/destination start prices ($14,299): number removed → "quoted individually"
  (hotel-du-cap, villa-cetinale, pricing-breakdown ×3 + Tier-4 heading, best-packages, packages-california, santa-barbara).
- 11 files changed, all verified live.

**Left in place = REPORT ONLY (rule 3, market framing — owner decides):** `$14,299` still appears
in market-framed ranges: `wedding-videography-pricing-breakdown-california` (meta/schema/body:17
"pricing in California ranges…"), `wedding-videographer-cost-california` (4/12/16/66),
`wedding-videographer-cost-orange-county` (4/12/16; :32 "$10,000–$14,299"),
`wedding-videographer-orange-county:120`, `los-angeles-wedding-videographer:119`,
`los-angeles-wedding-videography:74`, `luxury-wedding-film-los-angeles-guide:16`,
`best-wedding-videography-packages-california` (4/13/159 "packages in California start at $3,959").

**🔴 NEW FINDING — fabricated LifeStory pricing STRUCTURES (beyond the $12,869/$14,299 scope):**
Some posts state multi-number LifeStory tier prices inconsistent with $2,499–$6,928 and using
numbers we have NOT confirmed — editing one number would contradict the others, so left for a
dedicated pass with real tier numbers:
- `wedding-videographers-like-jen-huang.mdx:54` — "…$14,299+ … most booked $7,500–$10,000".
- `wedding-videography-packages-california.mdx:52` — "Price point: $9,500–$14,299" (full-day combined);
  `:105` — "highlight reel tier starts at $3,959. full-day tier starts at $6,800. Multi-day starts at $11,000."
- `luxury-wedding-videographer-los-angeles.mdx:62` — "photo + video combined package ranges from $9,500 to $14,299".
- Also recurring "average investment $7,500–$10,000" phrasing (exceeds the $6,928 ceiling) across
  several posts — likely fine as *market* context, but confirm.
**Need from owner:** real tier prices (highlight-reel / full-day / photo+video combined) so this
can be fixed in one pass. Reproduce: `grep -rn -e "9,500" -e "6,800" -e "11,000" -e "7,500" src/app/blog/posts/`.

## Session 5 — 2026-08-08 (Orange County)

- **NEW `/orange-county` commercial landing** (commit `6dd55ed`): we/here/how/price/form. Confirmed
  pricing only, embedded ContactSection form, LocalBusiness+Breadcrumb JSON-LD, links to OC venues +
  OC best-of guide + /pricing. In sitemap (priority 0.9). Live 200, single H1, all links 200.
- **OC best-of article → ranked 10-studio list** (commit `81a8705`): converted the essay to the LA
  template. LifeStory #1 (confirmed facts, CTA right after #1), competitors #2–#10 real OC studios
  with real sites + nofollow (Lin & Jirsa, One Story Weddings, Film House, Memory Machine, A Colored
  Mind, Gaspar Film Co., Wallace Wedding Co., Rock This Moment, Shoreline). Interlinked with the
  /orange-county landing, OC venues, and /pricing. Verified: single H1, 0 phantom prices, in sitemap.
- **Interlinking:** /orange-county ⇄ best-wedding-videographers-orange-county ⇄ OC venue posts ⇄ /pricing.

### NEXT (once GSC granted)
- Submit sitemap + request indexing, prioritizing /orange-county, both best-of ranked articles,
  /pricing, /contact. Then clone the city pattern (Santa Barbara/Montecito, Napa) per owner.
- Resolve the fabricated blog pricing structures (Session 4 finding) with confirmed tier numbers.
- Email capture (LeadMagnet + LEAD_MAGNET_URL already in repo) — still not wired in.

## Session 6 — 2026-08-08 (fabricated pricing scrub) — commit `6212923`

Owner: canonical grid still not provided; only $2,499 (floor) and $6,928 (Signature) confirmed.
Applied the authorized fallback — **remove unconfirmed numbers, rewrite as prose** — everywhere
it was safe.

**Fixed (high-visibility, done):**
- 🔴 `ContactSection.tsx` hardcoded "Packages from $3,959" → **$2,499**. This shows on EVERY page
  with the form (home, /pricing, /videography, /photography, all landings) — biggest single fix.
- Fabricated LifeStory price structures rewritten to prose (no figures): jen-huang (l.30/54/64),
  wedding-videography-packages-california (52/103/105), luxury-wedding-videographer-los-angeles:62,
  luxury-wedding-film-los-angeles-guide (16/125), luxury-vs-documentary:106, palm-springs:117,
  wedding-videography-san-ysidro-ranch:104, best-…-packages (NorCal/destination/meta).
- Market ranges ("in California/OC ranges from $3,959 to $14,299" = our old prices as market):
  numbers removed / reformulated across cost-california, cost-orange-county (intro + Entry/Mid/
  Premium tier headings), wedding-videographer-orange-county:120, los-angeles-wedding-videographer:119,
  los-angeles-wedding-videography:74, cost-by-venue:16+meta, pricing-breakdown meta/schema/body.
- 8 "*Packages from $3,959*" CTA lines (ethnic/advice posts) → $2,499.
- /orange-county landing + OC ranked article: removed unconfirmed combined $3,959.

**$3,959 provenance (answered):** it is the real `basePrice` of the COMBO "Essential" package in
`src/components/pricing/PricingPackages.tsx` (and PackagesSection/PricingCalculator), live on
`/pricing` and the home packages UI. NOT fabricated — it's the actual combined photo+video entry
price. Left in the pricing UI pending owner confirm or the canonical grid. Removed only from the
landing/articles per instruction #3.

### 🔴 STILL LIVE — needs the canonical grid (deferred, NOT guessed)
The 5 dedicated cost-guide articles have ~200 $ figures throughout their venue-by-venue / tier
bodies. Headline ranges + metas + intros are fixed, but the deep bodies still contain fabricated
LifeStory/venue prices. Blind-stripping 200 numbers would gut the guides and may contradict the
grid. Remaining token counts in blog: 14,299×2, 9,500×14, 11,000×5, 8,500×7, 9,200×4, 6,800×4,
5,800×2. Files: wedding-videographer-cost-california, wedding-videographer-cost-orange-county,
wedding-videography-cost-by-venue-california, wedding-videography-pricing-breakdown-california,
best-wedding-videography-packages-california (+ wedding-videography-services-orange-county).
**Need:** canonical grid (name = price per real package) → then one reconciliation pass. Or an
explicit "strip all numbers" / "noindex these guides" decision.

### Deferred: Santa Barbara/Montecito + Napa
Prioritized site-wide pricing integrity (actively-misleading fabricated prices) over new city
pages this session. SB is queued next, to be built with confirmed-only pricing like /orange-county.

### Still pending / next
- **Task #5 (owner):** grant GSC + GA4 access → then resubmit sitemap + request indexing (~10/day),
  prioritizing the new LA article + the OC best-of + top landing pages. Reconcile the $2,499 vs
  $1,999 pricing.
- Clone the LA ranked-list format for **Orange County** (owner's #1 geo) — the OC best-of essay
  already exists; convert it to the ranked format next.
- Build commercial **city landing pages** (/orange-county first) — none exist yet.
- Email capture (LeadMagnet component + LEAD_MAGNET_URL PDF already present) — wire it in.
- Deeper blog→landing interlinking once landing pages exist.
