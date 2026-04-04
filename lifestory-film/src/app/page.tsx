import type { Metadata } from 'next'
import { Navigation } from '@/components/Navigation'

export const metadata: Metadata = {
  title: "Wedding Photography & Videography Los Angeles | LifeStory.Film",
  description: "Luxury wedding photography and videography in Los Angeles. Cinematic films and fine art photos for couples who want more than a highlight reel. Serving California and worldwide since 2010.",
  openGraph: {
    title: "Wedding Photography & Videography Los Angeles | LifeStory.Film",
    description: "Luxury wedding photography and videography in Los Angeles. Cinematic films and fine art photos for couples who want more than a highlight reel. Serving California and worldwide since 2010.",
    images: [{ url: 'https://img.youtube.com/vi/cp3PmoI9nio/maxresdefault.jpg', width: 1280, height: 720, alt: 'LifeStory.Film — luxury wedding photography and videography Los Angeles' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Wedding Photography & Videography Los Angeles | LifeStory.Film",
    images: ['https://img.youtube.com/vi/cp3PmoI9nio/maxresdefault.jpg'],
  },
}
import { HeroSection } from '@/components/HeroSection'
import { FeaturedFilms } from '@/components/FeaturedFilms'
import { BehindTheScenes } from '@/components/BehindTheScenes'
import { TestimonialsSection } from '@/components/TestimonialsSection'
import { SocialProofSection } from '@/components/SocialProofSection'
import { TrustSection } from '@/components/TrustSection'
import { TeamSection } from '@/components/TeamSection'
import { PhotoShowcase } from '@/components/PhotoShowcase'
import { EngagementSection } from '@/components/EngagementSection'
import { PackagesSection } from '@/components/PackagesSection'
import { CinematicBreak } from '@/components/CinematicBreak'
import { StickyMobileBar } from '@/components/StickyMobileBar'
import { LeadMagnet } from '@/components/LeadMagnet'
import { ContactSection } from '@/components/ContactSection'
import { Footer } from '@/components/Footer'
import { DeferredScripts, CriticalCSS } from '@/components/DeferredScripts'

export default function Home() {
  return (
    <>
      <CriticalCSS />
      <main className="min-h-screen bg-[#0f0e0c] text-white">
        <Navigation />

        {/* 1. Hero */}
        <HeroSection />

        {/* 2. Film portfolio */}
        <FeaturedFilms />

        {/* 3. Photography showcase */}
        <PhotoShowcase />

        {/* 3b. Engagement sessions */}
        <EngagementSection />

        {/* 4. Testimonials + trust metrics */}
        <TestimonialsSection />
        <TrustSection />

        {/* 4. Director bio */}
        <TeamSection />

        {/* 5. Recent work (Instagram grid) */}
        <SocialProofSection />

        {/* 6. Cinematic visual break */}
        <CinematicBreak />

        {/* 7. Packages */}
        <PackagesSection />

        {/* 8. Behind the scenes / philosophy */}
        <BehindTheScenes />

        {/* 9. Lead magnet */}
        <LeadMagnet />

        {/* 10. Inquiry form */}
        <ContactSection />

        <Footer />

        {/* Hidden form for Netlify detection */}
        <form
          name="wedding-inquiry"
          method="POST"
          data-netlify="true"
          className="hidden"
          action="mailto:rick@lifestory.film"
        >
          <input name="form-name" value="wedding-inquiry" readOnly />
          <input name="subject" value="New Wedding Inquiry from LifeStory.Film" readOnly />
          <input name="firstName" />
          <input name="lastName" />
          <input name="email" />
          <input name="phone" />
          <input name="weddingDate" />
          <input name="venue" />
          <textarea name="message"></textarea>
          <input type="checkbox" name="droneFootage" />
        </form>
      </main>

      {/* Sticky mobile CTA — client component, outside main */}
      <StickyMobileBar />

      <DeferredScripts />
    </>
  )
}
