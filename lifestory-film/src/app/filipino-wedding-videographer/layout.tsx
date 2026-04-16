import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Filipino Wedding Videographer & Photographer Los Angeles | LifeStory.Film",
  description: "Cinematic Filipino wedding films and photography in Los Angeles. Experienced with Filipino wedding traditions — church ceremonies, cord and veil, money dance, and grand receptions. Since 2010.",
  keywords: "Filipino wedding videographer Los Angeles, Filipino wedding photographer, Catholic Filipino wedding videographer Los Angeles",
  openGraph: {
    title: "Filipino Wedding Videographer & Photographer Los Angeles | LifeStory.Film",
    description: "Cinematic Filipino wedding films and photography in Los Angeles. Experienced with Filipino wedding traditions — church ceremonies, cord and veil, money dance, and grand receptions. Since 2010.",
    images: [{ url: 'https://ext.same-assets.com/613934530/2202004677.jpeg', width: 1200, height: 800, alt: 'Filipino wedding videography Los Angeles — LifeStory.Film' }],
    siteName: 'LifeStory.Film',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Filipino Wedding Videographer & Photographer Los Angeles | LifeStory.Film",
    images: ['https://ext.same-assets.com/613934530/2202004677.jpeg'],
  },
  alternates: {
    canonical: 'https://lifestory.film/filipino-wedding-videographer',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
