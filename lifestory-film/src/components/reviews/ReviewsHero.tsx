'use client'

import { useEffect, useState } from 'react'
import { AnimatedSection } from '../AnimatedSection'

export function ReviewsHero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="py-20 bg-[#0f0e0c]">
      <div className="text-center px-6 max-w-6xl mx-auto">
        <div className={`transition-all duration-1000 ${isLoaded ? 'fade-in-up' : 'opacity-0'}`}>
          <p className="text-[#BFA181] text-[11px] tracking-widest uppercase mb-5 font-light">Client Love</p>
          <h1
            className="font-extrabold text-white leading-tight mb-6"
            style={{ fontSize: 'clamp(48px, 6vw, 72px)', letterSpacing: '-0.02em' }}
          >
            What Couples Say
          </h1>
          <p className="font-light text-white/55 max-w-[600px] mx-auto mb-10" style={{ fontSize: '18px' }}>
            Authentic testimonials from couples who trusted us to capture their most precious moments.
          </p>

          {/* Best of Weddings award callout */}
          <AnimatedSection direction="fade" delay={0.3}>
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-[#BFA181]/40 bg-[#BFA181]/10">
              <svg className="w-5 h-5 text-[#BFA181] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="text-[#BFA181] font-semibold text-sm tracking-wide">
                Best of Weddings Winner — 7 Consecutive Years · The Knot
              </span>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
