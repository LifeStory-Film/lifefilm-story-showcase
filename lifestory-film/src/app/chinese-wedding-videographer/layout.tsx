import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Chinese Wedding Videographer & Photographer Los Angeles | LifeStory.Film",
  description: "Cinematic Chinese wedding films and photography in Los Angeles. Experienced with Chinese wedding traditions — tea ceremony, traditional dress, multi-outfit celebrations. Since 2010.",
  keywords: "Chinese wedding videographer Los Angeles, Chinese wedding photographer, tea ceremony wedding videographer Los Angeles",
  openGraph: {
    title: "Chinese Wedding Videographer & Photographer Los Angeles | LifeStory.Film",
    description: "Cinematic Chinese wedding films and photography in Los Angeles. Experienced with Chinese wedding traditions — tea ceremony, traditional dress, multi-outfit celebrations. Since 2010.",
    images: [{ url: 'https://ext.same-assets.com/613934530/2202004677.jpeg', width: 1200, height: 800, alt: 'Chinese wedding videography Los Angeles — LifeStory.Film' }],
    siteName: 'LifeStory.Film',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Chinese Wedding Videographer & Photographer Los Angeles | LifeStory.Film",
    images: ['https://ext.same-assets.com/613934530/2202004677.jpeg'],
  },
  alternates: {
    canonical: 'https://lifestory.film/chinese-wedding-videographer',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
