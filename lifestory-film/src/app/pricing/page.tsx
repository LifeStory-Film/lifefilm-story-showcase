import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { PricingHero } from '@/components/pricing/PricingHero'
import { PricingPackages } from '@/components/pricing/PricingPackages'
import { PricingCalculator } from '@/components/pricing/PricingCalculator'
import { PricingStats } from '@/components/pricing/PricingStats'
import { PricingFAQs } from '@/components/pricing/PricingFAQs'
import { ContactSection } from '@/components/ContactSection'
import { Footer } from '@/components/Footer'

export const metadata = {
  title: "Wedding Photography & Video Pricing | LifeStory.Film",
  description: "Transparent wedding photography and videography pricing. Combined photo+video packages from $3,959. 30-month payment plans available. Based in Los Angeles.",
  keywords: "wedding photography pricing, wedding videography cost, LifeStory.Film packages, luxury wedding packages, photo video pricing",
  openGraph: {
    title: "Wedding Photography & Video Pricing | LifeStory.Film",
    description: "Transparent pricing for luxury wedding photo + video packages. 0% interest payment plans available.",
    images: [{ url: 'https://photos.smugmug.com/LifeStoryFilm-Production/Desert-Wedding/Desert-Wedding-Day-2/i-HSB4Rp7/0/NT95vfXC9T5RscjGdcpLWvDKmt4d4BmVzgvdrQw28/L/Life.Film-100-L.jpg', width: 1200, height: 800, alt: 'LifeStory.Film team' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Wedding Photography & Video Pricing | LifeStory.Film",
    images: ['https://photos.smugmug.com/LifeStoryFilm-Production/Desert-Wedding/Desert-Wedding-Day-2/i-HSB4Rp7/0/NT95vfXC9T5RscjGdcpLWvDKmt4d4BmVzgvdrQw28/L/Life.Film-100-L.jpg'],
  },
}

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-[#0f0e0c] text-white">
      <Navigation />
      <PricingHero />
      <PricingPackages />
      <div className="bg-[#0f0e0c] py-4 text-center">
        <p className="text-white/35 text-sm">
          Also available:{' '}
          <Link href="/photography" className="text-[#BFA181] hover:text-white transition-colors duration-200">photography-only packages</Link>
          {' '}from $2,199 and{' '}
          <Link href="/videography" className="text-[#BFA181] hover:text-white transition-colors duration-200">videography-only packages</Link>
          {' '}from $1,999.
        </p>
      </div>
      <PricingCalculator />
      <PricingStats />
      <PricingFAQs />
      <ContactSection />
      <Footer />
    </main>
  )
}
