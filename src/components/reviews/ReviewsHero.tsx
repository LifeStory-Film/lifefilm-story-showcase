'use client'

import { useEffect, useState } from 'react'

export function ReviewsHero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="relative py-32 flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-black to-zinc-800" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <div className={`transition-all duration-1000 ${isLoaded ? 'fade-in-up' : 'opacity-0'}`}>
          <h1 className="section-text text-white mb-6">
            reviews
          </h1>

          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto font-light leading-relaxed">
            Authentic testimonials from couples who trusted us to capture their most precious moments.
            Every review reflects our commitment to excellence and timeless storytelling.
          </p>
        </div>
      </div>
    </section>
  )
}
