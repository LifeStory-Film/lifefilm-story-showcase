import { MetadataRoute } from 'next'
import { getAllServiceSlugs } from '@/lib/services'
import { getAllSlugs as getAllPostSlugs } from '@/lib/posts'

const BASE = 'https://lifestory.film'

// Standalone landing pages (top-level routes)
const LANDING_SLUGS = [
  'south-asian-wedding-videographer',
  'persian-wedding-videographer',
  'jewish-wedding-videographer',
  'chinese-wedding-videographer',
  'african-wedding-videographer',
  'armenian-wedding-videographer',
  'filipino-wedding-videographer',
  'indian-wedding-videographer',
  'pelican-hill-wedding-videographer',
  'malibu-wedding-videographer',
  'four-seasons-wedding-videographer',
]

// Film case studies (/films/[slug])
const FILM_SLUGS = [
  'ryan-and-victoria',
  'katherine-and-harsh',
  'josh-and-whitney',
  'ayaka-and-kyan',
  'michelle-and-jason',
  'jazza-and-naim',
  'charlotte-and-john',
  'carrie-and-grant',
  'serena-and-daniel',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const core: MetadataRoute.Sitemap = [
    { url: BASE, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${BASE}/photography`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/videography`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/pricing`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE}/reviews`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/faq`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
  ]

  const landing: MetadataRoute.Sitemap = LANDING_SLUGS.map((slug) => ({
    url: `${BASE}/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  const services: MetadataRoute.Sitemap = getAllServiceSlugs().map((slug) => ({
    url: `${BASE}/services/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  const films: MetadataRoute.Sitemap = FILM_SLUGS.map((slug) => ({
    url: `${BASE}/films/${slug}`,
    lastModified: now,
    changeFrequency: 'yearly',
    priority: 0.6,
  }))

  // The whole content library — previously absent from the sitemap entirely.
  const posts: MetadataRoute.Sitemap = getAllPostSlugs().map((slug) => ({
    url: `${BASE}/blog/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  return [...core, ...landing, ...services, ...films, ...posts]
}
