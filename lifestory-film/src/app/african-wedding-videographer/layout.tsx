import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "African Wedding Videographer & Photographer Los Angeles | LifeStory.Film",
  description: "Cinematic African wedding films and photography in Los Angeles. Experienced with West African, East African and South African wedding traditions. Since 2010.",
  keywords: "African wedding videographer Los Angeles, Nigerian wedding videographer, Ghanaian wedding videographer, African wedding photography Los Angeles",
  openGraph: {
    title: "African Wedding Videographer & Photographer Los Angeles | LifeStory.Film",
    description: "Cinematic African wedding films and photography in Los Angeles. Experienced with West African, East African and South African wedding traditions. Since 2010.",
    images: [{ url: 'https://ext.same-assets.com/613934530/2180482571.webp', width: 1200, height: 800, alt: 'African wedding videography Los Angeles — LifeStory.Film' }],
    siteName: 'LifeStory.Film',
  },
  twitter: {
    card: 'summary_large_image',
    title: "African Wedding Videographer & Photographer Los Angeles | LifeStory.Film",
    images: ['https://ext.same-assets.com/613934530/2180482571.webp'],
  },
  alternates: {
    canonical: 'https://lifestory.film/african-wedding-videographer',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
