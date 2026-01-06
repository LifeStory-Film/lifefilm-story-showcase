import { Navigation } from '@/components/Navigation'
import { HeroSection } from '@/components/HeroSection'
import { FeaturedFilms } from '@/components/FeaturedFilms'
import { BehindTheScenes } from '@/components/BehindTheScenes'

import { TestimonialsSection } from '@/components/TestimonialsSection'
import { SocialProofSection } from '@/components/SocialProofSection'
import { TrustSection } from '@/components/TrustSection'
import { PackagesSection } from '@/components/PackagesSection'
import { LeadMagnet } from '@/components/LeadMagnet'
import { ContactSection } from '@/components/ContactSection'
import { Footer } from '@/components/Footer'
import { DeferredScripts, CriticalCSS } from '@/components/DeferredScripts'

export default function Home() {
  return (
    <>
      <CriticalCSS />
      <main className="min-h-screen bg-black text-white">
        <Navigation />

        {/* 1. Hero with CTA and trust badges */}
        <HeroSection />

        {/* 2. Portfolio section (films/photos) */}
        <FeaturedFilms />

        {/* 3. Packages with booking CTA */}
        <PackagesSection />

        {/* 4. Testimonials and trust metrics */}
        <TestimonialsSection />
        <TrustSection />

        {/* 5. Behind-the-scenes and philosophy */}
        <BehindTheScenes />

        {/* 6. Instagram feed or blog teasers */}
        <SocialProofSection />

        {/* 6.5 Soft lead capture for non-ready visitors */}
        <LeadMagnet />

        {/* 7. Inquiry form */}
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
      <DeferredScripts />
    </>
  )
}
