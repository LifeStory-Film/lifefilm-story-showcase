import { Navigation } from '@/components/Navigation'
import { PhotographyHero } from '@/components/photography/PhotographyHero'
import { PhotographyPortfolio } from '@/components/photography/PhotographyPortfolio'
import { PhotographyGallery } from '@/components/photography/PhotographyGallery'
import { PhotographyApproach } from '@/components/photography/PhotographyApproach'
import { FineArtAlbums } from '@/components/photography/FineArtAlbums'
import { PhotographyPackages } from '@/components/photography/PhotographyPackages'
import { ContactSection } from '@/components/ContactSection'
import { Footer } from '@/components/Footer'

export const metadata = {
  title: "Wedding Photographer Los Angeles | LifeStory.Film",
  description: "Wedding photographer in Los Angeles with 15+ years of experience. Fine art photography with a documentary soul. Packages from $2,199. Serving California and worldwide.",
  keywords: "wedding photography, luxury wedding photos, wedding photographer, bridal photography, engagement photos",
  openGraph: {
    title: "Wedding Photographer Los Angeles | LifeStory.Film",
    description: "Fine art wedding photography with a documentary soul. Capturing every frame, every feeling since 2010.",
    images: [{ url: 'https://ext.same-assets.com/613934530/2159466363.jpeg', width: 1200, height: 800, alt: 'Luxury wedding photography Los Angeles — LifeStory.Film' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Wedding Photographer Los Angeles | LifeStory.Film",
    images: ['https://ext.same-assets.com/613934530/2159466363.jpeg'],
  },
}

export default function PhotographyPage() {
  return (
    <main className="min-h-screen bg-[#0f0e0c] text-white">
      <Navigation />
      <PhotographyHero />
      <PhotographyPortfolio />
      <PhotographyGallery />
      <PhotographyApproach />
      <FineArtAlbums />
      <PhotographyPackages />
      <ContactSection />
      <Footer />
    </main>
  )
}
