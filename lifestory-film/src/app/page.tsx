import { Navigation } from '@/components/Navigation'
import { HeroSection } from '@/components/HeroSection'
import { FeaturedFilms } from '@/components/FeaturedFilms'
import { BehindTheScenes } from '@/components/BehindTheScenes'
import { TestimonialsSection } from '@/components/TestimonialsSection'
import { SocialProofSection } from '@/components/SocialProofSection'
import { TrustSection } from '@/components/TrustSection'
import { TeamSection } from '@/components/TeamSection'
import { PhotoShowcase } from '@/components/PhotoShowcase'
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
      <main className="min-h-screen bg-black text-white">
        <Navigation />

        {/* 1. Hero */}
        <HeroSection />

        {/* 2. Film portfolio */}
        <FeaturedFilms />

        {/* 3. Photography showcase */}
        <PhotoShowcase />

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
