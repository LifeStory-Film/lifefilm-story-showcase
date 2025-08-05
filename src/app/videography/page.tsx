import { Navigation } from '@/components/Navigation'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { VideographyHero } from '@/components/videography/VideographyHero'
import { VideographyPortfolio } from '@/components/videography/VideographyPortfolio'
import { VideographyApproach } from '@/components/videography/VideographyApproach'
import { CinemaEquipment } from '@/components/videography/CinemaEquipment'
import { VideographyPackages } from '@/components/videography/VideographyPackages'
import { ContactSection } from '@/components/ContactSection'
import { Footer } from '@/components/Footer'

export const metadata = {
  title: "Wedding Videography | LifeStory.Film - Luxury Wedding Films",
  description: "Luxury wedding videography that transforms your most precious moments into cinematic art. Professional wedding films with Hollywood-quality production.",
  keywords: "wedding videography, luxury wedding films, wedding cinematography, wedding filmmaker, cinematic wedding videos",
}

export default function VideographyPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />
      <Breadcrumbs />
      <VideographyHero />
      <VideographyPortfolio />
      <VideographyApproach />
      <CinemaEquipment />
      <VideographyPackages />
      <ContactSection />
      <Footer />
    </main>
  )
}
