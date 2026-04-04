import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "South Asian Wedding Videographer Los Angeles | LifeStory.Film",
  description: "South Asian wedding videographer and photographer in Los Angeles. Specialists in Indian, Pakistani, and Sri Lankan multi-day celebrations. 200+ South Asian weddings filmed since 2010.",
  keywords: "South Asian wedding videographer Los Angeles, Indian wedding videographer, Pakistani wedding videographer, multi-day wedding coverage, South Asian wedding photography",
  openGraph: {
    title: "South Asian Wedding Videographer Los Angeles | LifeStory.Film",
    description: "South Asian wedding videographer and photographer in Los Angeles. 200+ South Asian weddings filmed since 2010.",
    images: [{ url: 'https://ext.same-assets.com/613934530/1996507150.webp', width: 1200, height: 800, alt: 'South Asian wedding videography Los Angeles — LifeStory.Film' }],
    siteName: 'LifeStory.Film',
  },
  twitter: {
    card: 'summary_large_image',
    title: "South Asian Wedding Videographer Los Angeles | LifeStory.Film",
    images: ['https://ext.same-assets.com/613934530/1996507150.webp'],
  },
  alternates: {
    canonical: 'https://lifestory.film/south-asian-wedding-videographer',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
