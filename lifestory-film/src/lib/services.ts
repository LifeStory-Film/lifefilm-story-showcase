/**
 * Service catalog for the /services/[slug] routes.
 *
 * Slugs MUST stay in sync with LIFESTORY_SERVICES in the seo-agent repo
 * (agents/content-writer.ts) and the canonical URLs seeded in
 * prompts/02-content-writer.md — those are what the blog articles link to.
 *
 * PHASE 1: infrastructure + stub content only. `fullDescription`, `whatIncluded`,
 * `faqItems`, and `relatedBlogPosts` are intentionally stubbed ("Coming soon")
 * and get filled with real content in Phase 2.
 *
 * Hero images reuse REAL LifeStory film thumbnails (YouTube maxresdefault) —
 * never stock/Pexels. `heroVideoId` must be a video ID that already exists in
 * the `films` object in src/app/films/[slug]/page.tsx.
 */

export interface ServiceFaqItem {
  question: string
  answer: string
}

export interface ServiceRelatedPost {
  title: string
  slug: string
}

export interface ServiceConfig {
  /** H1 / display title */
  title: string
  /** URL slug — matches the seo-agent LIFESTORY_SERVICES catalog */
  slug: string
  /** Meta description / hero subtitle (one line) */
  shortDescription: string
  /** Body copy. PHASE 1: placeholder. */
  fullDescription: string
  /** e.g. "$2,499–$8,200". PHASE 1: placeholder. */
  pricingRange: string
  /** Bullet list of what's included. PHASE 1: empty. */
  whatIncluded: string[]
  /** FAQ block. PHASE 1: empty. */
  faqItems: ServiceFaqItem[]
  /** Internal links to existing blog content. PHASE 1: empty. */
  relatedBlogPosts: ServiceRelatedPost[]
  /** CTA button label */
  ctaText: string
  /** CTA href (existing route or anchor) */
  ctaDestination: string
  /** Real LifeStory film video ID — drives the hero thumbnail. */
  heroVideoId: string
  /** schema.org @type for the JSON-LD block. */
  schemaType: 'Service'
}

const PLACEHOLDER_BODY =
  'Detailed information about this service is coming soon. In the meantime, explore our films and reach out to check your date.'

/**
 * Keyed by slug. Order mirrors LIFESTORY_SERVICES in the seo-agent repo.
 */
export const SERVICES: Record<string, ServiceConfig> = {
  'wedding-film': {
    title: 'Wedding Film',
    slug: 'wedding-film',
    shortDescription:
      'Cinematic full-day wedding films for couples who want their story told, not just documented.',
    fullDescription: PLACEHOLDER_BODY,
    pricingRange: '$$$$',
    whatIncluded: [],
    faqItems: [],
    relatedBlogPosts: [],
    ctaText: 'Check date availability',
    ctaDestination: '/#contact',
    heroVideoId: 'cp3PmoI9nio', // Ryan & Victoria — Pelican Hill, flagship luxury wedding film
    schemaType: 'Service',
  },
  'engagement-film': {
    title: 'Engagement Film',
    slug: 'engagement-film',
    shortDescription:
      'A short, cinematic pre-wedding film that captures the two of you before the big day.',
    fullDescription: PLACEHOLDER_BODY,
    pricingRange: '$$$$',
    whatIncluded: [],
    faqItems: [],
    relatedBlogPosts: [],
    ctaText: 'Check date availability',
    ctaDestination: '/#contact',
    heroVideoId: 'D_vIC41fA4U', // Charlotte & John — intimate; closest match (no dedicated engagement asset)
    schemaType: 'Service',
  },
  'save-the-date-film': {
    title: 'Save-the-Date Film',
    slug: 'save-the-date-film',
    shortDescription:
      'A teaser-length film to announce your wedding date with style.',
    fullDescription: PLACEHOLDER_BODY,
    pricingRange: '$$$$',
    whatIncluded: [],
    faqItems: [],
    relatedBlogPosts: [],
    ctaText: 'Check date availability',
    ctaDestination: '/#contact',
    heroVideoId: 'ETxaM39nn4E', // Jazza & Naim — dramatic/cinematic; closest match (no dedicated STD asset)
    schemaType: 'Service',
  },
  'highlight-reel': {
    title: 'Highlight Reel',
    slug: 'highlight-reel',
    shortDescription:
      'A 3–5 minute cinematic highlight of your wedding day, set to music.',
    fullDescription: PLACEHOLDER_BODY,
    pricingRange: '$$$$',
    whatIncluded: [],
    faqItems: [],
    relatedBlogPosts: [],
    ctaText: 'Check date availability',
    ctaDestination: '/#contact',
    heroVideoId: '17rIApee9B8', // Ayaka & Kyan — Malibu coastal, highlight-style moments
    schemaType: 'Service',
  },
  'full-ceremony-coverage': {
    title: 'Full Ceremony Coverage',
    slug: 'full-ceremony-coverage',
    shortDescription:
      'Complete, multi-camera coverage of your ceremony from start to finish.',
    fullDescription: PLACEHOLDER_BODY,
    pricingRange: '$$$$',
    whatIncluded: [],
    faqItems: [],
    relatedBlogPosts: [],
    ctaText: 'Check date availability',
    ctaDestination: '/#contact',
    heroVideoId: 'vvYnUEuwOGM', // Serena & Daniel — classic, elegant ceremony
    schemaType: 'Service',
  },
  'documentary-photography': {
    title: 'Documentary Photography',
    slug: 'documentary-photography',
    shortDescription:
      'Unposed, real-moment wedding photography that captures the day as it happened.',
    fullDescription: PLACEHOLDER_BODY,
    pricingRange: '$$$$',
    whatIncluded: [],
    faqItems: [],
    relatedBlogPosts: [],
    ctaText: 'Check date availability',
    ctaDestination: '/#contact',
    heroVideoId: 'z_6rqvk2tAs', // Michelle & Jason — candid multi-day; FLAG: film thumb for a photo service
    schemaType: 'Service',
  },
  'editorial-photography': {
    title: 'Editorial Photography',
    slug: 'editorial-photography',
    shortDescription:
      'Polished, magazine-style wedding photography with a refined editorial aesthetic.',
    fullDescription: PLACEHOLDER_BODY,
    pricingRange: '$$$$',
    whatIncluded: [],
    faqItems: [],
    relatedBlogPosts: [],
    ctaText: 'Check date availability',
    ctaDestination: '/#contact',
    heroVideoId: 'SoXEpK1tGYo', // Carrie & Grant — magic-hour editorial; FLAG: film thumb for a photo service
    schemaType: 'Service',
  },
  'destination-wedding-film': {
    title: 'Destination Wedding Film',
    slug: 'destination-wedding-film',
    shortDescription:
      'Cinematic wedding films anywhere in the world — we travel to your celebration.',
    fullDescription: PLACEHOLDER_BODY,
    pricingRange: '$$$$',
    whatIncluded: [],
    faqItems: [],
    relatedBlogPosts: [],
    ctaText: 'Check date availability',
    ctaDestination: '/#contact',
    heroVideoId: 'WCjUi2yqK3U', // Josh & Whitney — New York destination; strong match
    schemaType: 'Service',
  },
  'photo-video-combined-package': {
    title: 'Photo + Video Combined Package',
    slug: 'photo-video-combined-package',
    shortDescription:
      'One coordinated team for both photography and film — complete coverage of your day.',
    fullDescription: PLACEHOLDER_BODY,
    pricingRange: '$$$$',
    whatIncluded: [],
    faqItems: [],
    relatedBlogPosts: [],
    ctaText: 'Check date availability',
    ctaDestination: '/#contact',
    heroVideoId: 'G4Mlon9-iLY', // Katherine & Harsh — full multi-day comprehensive coverage
    schemaType: 'Service',
  },
}

export type ServiceSlug = keyof typeof SERVICES

/** All service slugs (for generateStaticParams + sitemap). */
export function getAllServiceSlugs(): string[] {
  return Object.keys(SERVICES)
}

/** Lookup a service by slug, or undefined if not found. */
export function getService(slug: string): ServiceConfig | undefined {
  return SERVICES[slug]
}

/** Hero thumbnail URL for a service (real LifeStory film, never stock). */
export function serviceHeroImage(service: ServiceConfig): string {
  return `https://img.youtube.com/vi/${service.heroVideoId}/maxresdefault.jpg`
}
