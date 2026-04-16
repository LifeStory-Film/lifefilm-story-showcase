import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Jewish Wedding Videographer & Photographer Los Angeles | LifeStory.Film",
  description: "Cinematic Jewish wedding films and photography in Los Angeles. Experienced with Jewish traditions — ketubah, chuppah, glass breaking, hora. Since 2010.",
  keywords: "Jewish wedding videographer Los Angeles, Jewish wedding photographer, chuppah wedding videographer Los Angeles",
  openGraph: {
    title: "Jewish Wedding Videographer & Photographer Los Angeles | LifeStory.Film",
    description: "Cinematic Jewish wedding films and photography in Los Angeles. Experienced with Jewish traditions — ketubah, chuppah, glass breaking, hora. Since 2010.",
    images: [{ url: 'https://ext.same-assets.com/613934530/2159466363.jpeg', width: 1200, height: 800, alt: 'Jewish wedding videography Los Angeles — LifeStory.Film' }],
    siteName: 'LifeStory.Film',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Jewish Wedding Videographer & Photographer Los Angeles | LifeStory.Film",
    images: ['https://ext.same-assets.com/613934530/2159466363.jpeg'],
  },
  alternates: {
    canonical: 'https://lifestory.film/jewish-wedding-videographer',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
