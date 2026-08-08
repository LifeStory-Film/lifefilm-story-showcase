# LifeStory.Film — Growth Audit & Ops Log

> Playbook: replicate the Vogue Rentals SEO→funnel machine ("Best … in [City]" articles → conversion block → commercial landing → email capture). This doc is the shared brain across sessions. Update it as you go.

Last updated: 2026-08-08 (session 1)

---

## 0. Environment (how the site actually runs)

- **This machine IS the production droplet** — hostname `LifeStory`, IP `159.65.110.198`. Not a local checkout.
- **Stack:** Next.js 15 (App Router) + React 18 + Tailwind + shadcn. Package manager **bun** (bun.lock) but PM2 runs `npm start`.
- **Served by:** PM2 process `lifestory` (id 0, fork mode), `npm start` → `next start`, cwd `/var/www/app/lifestory-film`. Behind **nginx** (`/etc/nginx/sites-available/lifestory`).
- **NOT WordPress.** The WordPress half of the playbook (REST API, wpautop, Rank Math, Elementor) does not apply. We edit source, `bun run build` (or `npm run build`), then `pm2 restart lifestory`.
- **Deploy = edit source → build → `pm2 restart lifestory` → verify live.** There are several `.next-broken-*` backups in the dir → builds have failed before. **Always back up `.next` before building, and roll back if the build fails** (running server keeps old `.next` until restart).
- Env (`.env.production`): Resend for email, `LEADS_TO_EMAIL=rick@lifestory.film`, `LEAD_MAGNET_URL` → a wedding PDF under /downloads.

## 1. Business facts (verifiable — from the live site, treat as baseline)

- Luxury **wedding photography + videography**, based in **Los Angeles**, serving **California & worldwide, since 2010**.
- Phone **323.556.4362** (WhatsApp `wa.me/13235564362`). Public email `info@lifestory.film`; leads go to `rick@lifestory.film`.
- **Prices ARE published** on /pricing: packages incl. **$1,999 / $2,199 / $3,959**, deposit "starting at $1,000". Schema priceRange `$$$`.
- Services (9, dynamic `/services/[slug]`): wedding-film, engagement-film, save-the-date-film, highlight-reel, full-ceremony-coverage, documentary-photography, editorial-photography, destination-wedding-film, photo-video-combined-package.
- Films portfolio (9, `/films/[slug]`): ryan-and-victoria, katherine-and-harsh, josh-and-whitney, ayaka-and-kyan, michelle-and-jason, jazza-and-naim, charlotte-and-john, carrie-and-grant, serena-and-daniel.
- Referral funnels (partner pages, intentionally private): `/referral/[planner]` (10 planners), `/referral-venues/[venue]`.

### ⚠️ Claims to CONFIRM with owner before amplifying (already on-site, but unverified by us)
- "**1,500+ Weddings Filmed**", "**15+ Years**", "**7x Best of Weddings**", "**5.0 rating / 78 reviews**" (schema `reviewCount: 78`, `ratingValue: 5.0`).
- **Name inconsistency:** copy/auto-reply signs as "**Rich**, Creative Director" but lead email is `rick@`. Confirm correct name.
- These are already published site-wide, so repeating them is consistent — but do NOT invent NEW specifics (festival screenings, named brand clients, exact counts) until confirmed.

## 2. Existing SEO architecture (already strong — this is NOT a greenfield)

- **~87 blog posts** (`src/app/blog/posts/*.mdx`, rendered by `src/app/blog/[slug]/page.tsx` via `marked`). Rich JSON-LD (Article/LocalBusiness/Service/BreadcrumbList) in frontmatter `schema`.
- Standalone landing pages (top-level routes): 8 ethnic — african/armenian/chinese/filipino/indian/jewish/persian/south-asian `-wedding-videographer`; 3 venue — pelican-hill / malibu / four-seasons `-wedding-videographer`.
- Commercial pages: `/pricing`, `/videography`, `/photography`, `/reviews`, `/faq`. Contact form (`ContactSection`) embedded on 12 routes.
- **Content is largely the Vogue model already** — "Best wedding videographers in [Orange County/...]", venue deep-dives (Pelican Hill, Montage, San Ysidro Ranch, Napa venues, Italy), pricing guides. Prices ($6.5k–$14k) appear inside articles.

## 3. FINDINGS (ranked by value)

### 🔴 F1 — 87 blog posts invisible in sitemap (the Vogue "post-sitemap" bug, exactly)
- `src/app/sitemap.ts` hardcodes ~26 URLs + dynamic services. Live `/sitemap.xml` = **34 URLs, 0 blog posts**, and `/blog` itself is missing. 87 posts on disk → 0 submitted.
- **Impact:** the entire content library depends on Google crawling internal links to be discovered; sitemap gives it nothing. This is the single highest-leverage fix.
- **Fix (F1):** make sitemap pull blog slugs from `getAllSlugs()`, add `/blog`, keep landing/film/service URLs. → Task #1.

### 🟠 F2 — Conversion block sits at the END of articles, not after position #1
- `blog/[slug]/page.tsx` splits on the **last `<hr>`** → trailing content becomes the `.blog-cta` card; a generic footer CTA links to /videography + /pricing.
- Vogue's winning move (3 work previews + social proof + message/call buttons *right after the #1 pick*) is absent. Reader can bounce before reaching the end.
- Also "Best" articles are "how-to-choose" essays, not ranked "10 companies, us #1" lists — decide whether to add ranked format. → Task #2.

### 🟠 F3 — Articles link blog→blog, rarely to commercial pages/form
- Internal links in the OC "Best" article all point to other `/blog/...` posts; none to `/pricing`, landing pages, or a contact anchor. The "door to the store" is weak (milder version of the Vogue gap). → Task #2.

### 🟡 F4 — Conversion tracking is partial
- Form fires `fbq('track','Lead')` ✅ but **no GA4 event** (GA4 `G-SR6XR3NFLZ` only sees PageView). **Phone (`tel:`) and WhatsApp clicks are untracked entirely.** Can't measure what traffic becomes. → Task #3.

### 🟡 F5 — `/contact` is a 404
- Auto-reply email + copy reference `lifestory.film/contact`; route doesn't exist (form lives at homepage `#contact`). Broken promise link. → Task #4.

### Not broken (verified good)
- WhatsApp float button site-wide (message channel ✅). GA4 + Meta Pixel installed. Honeypot on form. Prices published. Rich schema on posts.

## 4. Open questions for owner (see Task #5)
1. Google Search Console + GA4 access (I cannot log in for you).
2. Which cities/venues to target first for new landing pages.
3. Confirm claims in §1 (1,500+, 7x, 78 reviews) and the Rich/Rick name.

## 5. Work order (Vogue sequence)
1. **F1 sitemap** (done/pending — see log) → then request indexing in GSC.
2. F4 tracking + F5 /contact (quick, unblock measurement).
3. F2/F3 batch: in-article conversion block + commercial links across all posts.
4. Then: city landing pages → venue/event pages → email capture. New articles LAST.

## 6. Change log
- 2026-08-08: Audit completed. Tasks #1–#5 created. (Fixes begin below — see 01-CHANGELOG.md)
