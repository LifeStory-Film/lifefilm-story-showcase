'use client'

import { useEffect, useState } from 'react'
import { PhotoSlider } from '../PhotoSlider'

export function PhotographyHero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Photo Slider Background */}
      <div className="absolute inset-0">
        <PhotoSlider
          autoPlay={true}
          autoPlayInterval={6000}
          showThumbnails={false}
          className="h-full"
        />
      </div>

      {/* Enhanced Cinematic Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/60" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <div className={`transition-all duration-1000 ${isLoaded ? 'fade-in-up' : 'opacity-0'}`}>
          <p className="text-[#BFA181] text-[11px] tracking-widest uppercase mb-6 font-light">The Gallery</p>
          <h1
            className="font-extrabold text-white leading-tight mb-6 text-shadow"
            style={{ fontSize: 'clamp(48px, 7vw, 80px)', letterSpacing: '-0.02em' }}
          >
            Wedding Photography
          </h1>

          <p className="font-light text-white/75 mb-10 max-w-[600px] mx-auto" style={{ fontSize: '20px' }}>
            Fine art photography with a documentary soul — every frame composed with intention.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 rounded-full font-semibold text-base transition-all duration-300 hover:scale-105"
              style={{ backgroundColor: '#BFA181', color: '#0f0e0c' }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#d4b896')}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#BFA181')}
            >
              View Our Work
            </button>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 rounded-full font-semibold text-base transition-all duration-300 hover:scale-105"
              style={{ background: 'transparent', border: '1px solid #BFA181', color: '#BFA181' }}
              onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#BFA181'; e.currentTarget.style.color = '#0f0e0c' }}
              onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#BFA181' }}
            >
              Book Your Session
            </button>
          </div>
        </div>
      </div>


    </section>
  )
}
