'use client'

import { AnimatedSection } from '../AnimatedSection'

export function VideographyPackages() {
  return (
    <section className="py-32 bg-[#1a1916]">
      <div className="container mx-auto px-6">
        <AnimatedSection direction="fade" className="text-center max-w-3xl mx-auto">
          <p className="text-[#BFA181] text-[11px] tracking-widest uppercase mb-5 font-light">
            Investment
          </p>
          <h2
            className="font-extrabold text-white leading-tight mb-6"
            style={{ fontSize: 'clamp(40px, 4.5vw, 56px)', letterSpacing: '-0.02em' }}
          >
            Videography packages from $2,499
          </h2>
          <p className="text-xl text-gray-300 font-light mb-10">
            Every package includes professional editing, color correction, and online delivery.
            Pricing varies by date, location, and coverage hours.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="https://lifestory.film/pricing"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full font-medium text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              style={{ backgroundColor: '#BFA181', color: '#0f0e0c' }}
            >
              View Full Pricing &amp; Build Your Package →
            </a>
            <a
              href="#contact"
              className="text-base transition-colors"
              style={{ color: '#BFA181' }}
              onMouseEnter={e => { e.currentTarget.style.color = '#d4b896' }}
              onMouseLeave={e => { e.currentTarget.style.color = '#BFA181' }}
            >
              Or contact us directly →
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
