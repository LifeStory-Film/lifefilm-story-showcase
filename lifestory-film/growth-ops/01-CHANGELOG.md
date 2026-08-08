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

### Still pending / next
- **Task #5 (owner):** grant GSC + GA4 access → then resubmit sitemap + request indexing (~10/day),
  prioritizing the new LA article + the OC best-of + top landing pages. Reconcile the $2,499 vs
  $1,999 pricing.
- Clone the LA ranked-list format for **Orange County** (owner's #1 geo) — the OC best-of essay
  already exists; convert it to the ranked format next.
- Build commercial **city landing pages** (/orange-county first) — none exist yet.
- Email capture (LeadMagnet component + LEAD_MAGNET_URL PDF already present) — wire it in.
- Deeper blog→landing interlinking once landing pages exist.
