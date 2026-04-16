import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://lifestory.film', lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: 'https://lifestory.film/photography', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: 'https://lifestory.film/videography', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: 'https://lifestory.film/pricing', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: 'https://lifestory.film/reviews', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: 'https://lifestory.film/faq', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: 'https://lifestory.film/south-asian-wedding-videographer', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://lifestory.film/persian-wedding-videographer', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://lifestory.film/jewish-wedding-videographer', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://lifestory.film/chinese-wedding-videographer', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://lifestory.film/african-wedding-videographer', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://lifestory.film/armenian-wedding-videographer', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://lifestory.film/filipino-wedding-videographer', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://lifestory.film/pelican-hill-wedding-videographer', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://lifestory.film/malibu-wedding-videographer', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://lifestory.film/four-seasons-wedding-videographer', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://lifestory.film/films/ryan-and-victoria', lastModified: new Date(), changeFrequency: 'yearly', priority: 0.6 },
    { url: 'https://lifestory.film/films/katherine-and-harsh', lastModified: new Date(), changeFrequency: 'yearly', priority: 0.6 },
    { url: 'https://lifestory.film/films/josh-and-whitney', lastModified: new Date(), changeFrequency: 'yearly', priority: 0.6 },
    { url: 'https://lifestory.film/films/ayaka-and-kyan', lastModified: new Date(), changeFrequency: 'yearly', priority: 0.6 },
    { url: 'https://lifestory.film/films/michelle-and-jason', lastModified: new Date(), changeFrequency: 'yearly', priority: 0.6 },
    { url: 'https://lifestory.film/films/jazza-and-naim', lastModified: new Date(), changeFrequency: 'yearly', priority: 0.6 },
    { url: 'https://lifestory.film/films/charlotte-and-john', lastModified: new Date(), changeFrequency: 'yearly', priority: 0.6 },
    { url: 'https://lifestory.film/films/carrie-and-grant', lastModified: new Date(), changeFrequency: 'yearly', priority: 0.6 },
    { url: 'https://lifestory.film/films/serena-and-daniel', lastModified: new Date(), changeFrequency: 'yearly', priority: 0.6 },
  ]
}
