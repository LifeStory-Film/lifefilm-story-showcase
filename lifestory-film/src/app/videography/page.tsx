import { Navigation } from '@/components/Navigation'
import { VideographyHero } from '@/components/videography/VideographyHero'
import { VideographyPortfolio } from '@/components/videography/VideographyPortfolio'
import { VideographyApproach } from '@/components/videography/VideographyApproach'
import { BehindTheScenes } from '@/components/videography/BehindTheScenes'
import { CinemaEquipment } from '@/components/videography/CinemaEquipment'
import { VideographyPackages } from '@/components/videography/VideographyPackages'
import { ContactSection } from '@/components/ContactSection'
import { Footer } from '@/components/Footer'

export const metadata = {
  title: "Wedding Videographer Los Angeles | LifeStory.Film",
  description: "Cinematic wedding films and same-day teasers for couples who want more than a highlight reel. Based in California, serving worldwide since 2010.",
  keywords: "wedding videography, luxury wedding films, wedding cinematography, wedding filmmaker, cinematic wedding videos",
  openGraph: {
    title: "Wedding Videographer Los Angeles | LifeStory.Film",
    description: "Cinematic wedding films and same-day teasers for couples who want more than a highlight reel.",
    images: [{ url: 'https://img.youtube.com/vi/cp3PmoI9nio/maxresdefault.jpg', width: 1280, height: 720, alt: 'LifeStory.Film wedding videography — Ryan & Victoria at Pelican Hill' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Wedding Videographer Los Angeles | LifeStory.Film",
    images: ['https://img.youtube.com/vi/cp3PmoI9nio/maxresdefault.jpg'],
  },
}

export default function VideographyPage() {
  return (
    <main className="min-h-screen bg-[#0f0e0c] text-white">
      <Navigation />
      <VideographyHero />
      <VideographyPortfolio />
      <VideographyApproach />
      <BehindTheScenes />
      <CinemaEquipment />
      <VideographyPackages />
      <ContactSection />
      <Footer />
    </main>
  )
}
