import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Armenian Wedding Videographer & Photographer Los Angeles | LifeStory.Film",
  description: "Cinematic Armenian wedding films and photography in Los Angeles and Glendale. Experienced with Armenian wedding traditions — khosk-kap, church ceremonies, and grand receptions. Since 2010.",
  keywords: "Armenian wedding videographer Los Angeles, Armenian wedding photographer Glendale, Armenian Apostolic wedding videographer",
  openGraph: {
    title: "Armenian Wedding Videographer & Photographer Los Angeles | LifeStory.Film",
    description: "Cinematic Armenian wedding films and photography in Los Angeles and Glendale. Experienced with Armenian wedding traditions — khosk-kap, church ceremonies, and grand receptions. Since 2010.",
    images: [{ url: 'https://ext.same-assets.com/613934530/2357869345.webp', width: 1200, height: 800, alt: 'Armenian wedding videography Los Angeles — LifeStory.Film' }],
    siteName: 'LifeStory.Film',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Armenian Wedding Videographer & Photographer Los Angeles | LifeStory.Film",
    images: ['https://ext.same-assets.com/613934530/2357869345.webp'],
  },
  alternates: {
    canonical: 'https://lifestory.film/armenian-wedding-videographer',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
