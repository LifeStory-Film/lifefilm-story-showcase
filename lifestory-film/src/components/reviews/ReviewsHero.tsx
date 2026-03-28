'use client'

import { useEffect, useState } from 'react'

export function ReviewsHero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="py-20 bg-[#0f0e0c]">
      {/* Content */}
      <div className="text-center px-6 max-w-6xl mx-auto">
        <div className={`transition-all duration-1000 ${isLoaded ? 'fade-in-up' : 'opacity-0'}`}>
          <p className="text-[#BFA181] text-[11px] tracking-widest uppercase mb-5 font-light">Client Love</p>
          <h1
            className="font-extrabold text-white leading-tight mb-6"
            style={{ fontSize: 'clamp(48px, 6vw, 72px)', letterSpacing: '-0.02em' }}
          >
            What Couples Say
          </h1>
          <p className="font-light text-white/55 max-w-[600px] mx-auto" style={{ fontSize: '18px' }}>
            Authentic testimonials from couples who trusted us to capture their most precious moments.
          </p>
        </div>
      </div>
    </section>
  )
}
