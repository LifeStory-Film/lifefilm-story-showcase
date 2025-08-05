import { Navigation } from '@/components/Navigation'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { PhotographyHero } from '@/components/photography/PhotographyHero'
import { PhotographyPortfolio } from '@/components/photography/PhotographyPortfolio'
import { PhotographyGallery } from '@/components/photography/PhotographyGallery'
import { PhotographyApproach } from '@/components/photography/PhotographyApproach'
import { FineArtAlbums } from '@/components/photography/FineArtAlbums'
import { PhotographyPackages } from '@/components/photography/PhotographyPackages'
import { ContactSection } from '@/components/ContactSection'
import { Footer } from '@/components/Footer'

export const metadata = {
  title: "Wedding Photography | LifeStory.Film - Luxury Wedding Photography",
  description: "Luxury wedding photography that captures the authentic moments and timeless elegance of your special day. Professional wedding photographers creating artistic, emotional imagery.",
  keywords: "wedding photography, luxury wedding photos, wedding photographer, bridal photography, engagement photos",
}

export default function PhotographyPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />
      <Breadcrumbs />
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
