import { Navigation } from '@/components/Navigation'
import { PricingHero } from '@/components/pricing/PricingHero'
import { PricingPackages } from '@/components/pricing/PricingPackages'
import { PricingCalculator } from '@/components/pricing/PricingCalculator'
import { PricingStats } from '@/components/pricing/PricingStats'
import { PricingFAQs } from '@/components/pricing/PricingFAQs'
import { ContactSection } from '@/components/ContactSection'
import { Footer } from '@/components/Footer'

export const metadata = {
  title: "Wedding Photography & Videography Pricing | LifeStory.Film",
  description: "Transparent pricing for luxury wedding photography and videography packages. Professional photo+video coverage starting at $5,200. View our complete package details.",
  keywords: "wedding photography pricing, wedding videography cost, LifeStory.Film packages, luxury wedding packages, photo video pricing",
}

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-[#0f0e0c] text-white">
      <Navigation />
      <PricingHero />
      <PricingPackages />
      <PricingCalculator />
      <PricingStats />
      <PricingFAQs />
      <ContactSection />
      <Footer />
    </main>
  )
}
