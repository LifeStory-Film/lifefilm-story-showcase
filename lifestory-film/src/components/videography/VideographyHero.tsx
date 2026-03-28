'use client'

import { useEffect, useState } from 'react'
import { OptimizedYouTubeEmbed } from '../OptimizedYouTubeEmbed'

export function VideographyHero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* YouTube Video Background - Optimized */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <OptimizedYouTubeEmbed
          videoId="YzK1dHhkZTU"
          title="LifeStory.Film Wedding Videography Background"
          autoplay={true}
          muted={true}
          loop={true}
          controls={false}
          placeholderQuality="maxres"
        />

        {/* Video Overlay for Better Text Readability */}
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />
        {/* Top gradient for nav readability */}
        <div className="absolute top-0 left-0 right-0 h-[120px] pointer-events-none" style={{ background: 'linear-gradient(to bottom, rgba(15,14,12,0.75) 0%, transparent 100%)' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <div className={`transition-all duration-1000 ${isLoaded ? 'fade-in-up' : 'opacity-0'}`}>
          <p className="text-[#BFA181] text-[11px] tracking-widest uppercase mb-6 font-light">Our Films</p>
          <h1
            className="font-extrabold text-white leading-tight mb-6 text-shadow"
            style={{ fontSize: 'clamp(48px, 7vw, 80px)', letterSpacing: '-0.02em' }}
          >
            Wedding Videography
          </h1>

          <p className="font-light text-white/75 mb-10 max-w-[600px] mx-auto" style={{ fontSize: '20px' }}>
            Cinematic wedding films that tell your story — not just document it.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => document.getElementById('films')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 rounded-full font-semibold text-base transition-all duration-300 hover:scale-105"
              style={{ backgroundColor: '#BFA181', color: '#0f0e0c' }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#d4b896')}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#BFA181')}
            >
              View Our Films
            </button>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 rounded-full font-semibold text-base transition-all duration-300 hover:scale-105"
              style={{ background: 'transparent', border: '1px solid #BFA181', color: '#BFA181' }}
              onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#BFA181'; e.currentTarget.style.color = '#0f0e0c' }}
              onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#BFA181' }}
            >
              Check Date Availability
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
