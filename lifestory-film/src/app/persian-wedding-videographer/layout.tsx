import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Persian Wedding Videographer & Photographer Los Angeles | LifeStory.Film",
  description: "Cinematic Persian wedding films and photography in Los Angeles. Experienced with Iranian wedding traditions — sofreh aghd, korsi, and multi-day celebrations. Since 2010.",
  keywords: "Persian wedding videographer Los Angeles, Iranian wedding videographer, sofreh aghd videographer Los Angeles",
  openGraph: {
    title: "Persian Wedding Videographer & Photographer Los Angeles | LifeStory.Film",
    description: "Cinematic Persian wedding films and photography in Los Angeles. Experienced with Iranian wedding traditions — sofreh aghd, korsi, and multi-day celebrations. Since 2010.",
    images: [{ url: 'https://ext.same-assets.com/613934530/2357869345.webp', width: 1200, height: 800, alt: 'Persian wedding videography Los Angeles — LifeStory.Film' }],
    siteName: 'LifeStory.Film',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Persian Wedding Videographer & Photographer Los Angeles | LifeStory.Film",
    images: ['https://ext.same-assets.com/613934530/2357869345.webp'],
  },
  alternates: {
    canonical: 'https://lifestory.film/persian-wedding-videographer',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
