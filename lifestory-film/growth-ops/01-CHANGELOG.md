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

### Still pending
- **Task #5:** owner inputs — GSC/GA4 access, target cities, confirm claims (1,500+/7x/78 reviews),
  Rich vs Rick name. Once GSC is granted: resubmit sitemap + request indexing (~10/day).
- Later: blog→landing-page interlinking; city landing pages; email capture (LeadMagnet exists);
  the "Best…" articles are how-to essays, not ranked "10 companies" lists — decide if we convert.
