'use client'

import { useEffect, useState } from 'react'
import { OptimizedYouTubeEmbed } from '@/components/OptimizedYouTubeEmbed'

export function VideographyHero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="vid-hero relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background video */}
      <div className="absolute inset-0">
        <OptimizedYouTubeEmbed
          videoId="YzK1dHhkZTU"
          title="LifeStory.Film Wedding Videography"
          autoplay={true}
          muted={true}
          loop={true}
          controls={false}
          placeholderQuality="maxres"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent pointer-events-none" />
        {/* Top gradient for nav readability */}
        <div className="absolute top-0 left-0 right-0 h-[120px] pointer-events-none" style={{ background: 'linear-gradient(to bottom, rgba(15,14,12,0.75) 0%, transparent 100%)' }} />
      </div>

      {/* Content — text uses inline color so light-mode CSS overrides don't apply here */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <div className={`transition-all duration-1000 ${isLoaded ? 'fade-in-up' : 'opacity-0'}`}>
          <p className="text-[#BFA181] text-[11px] tracking-widest uppercase mb-6 font-light">Wedding Videography</p>
          <h1
            className="font-extrabold leading-tight mb-6 text-shadow"
            style={{ fontSize: 'clamp(48px, 7vw, 80px)', letterSpacing: '-0.02em', color: 'white' }}
          >
            Films That Feel Like Memory
          </h1>

          <p className="font-light mb-10 max-w-[600px] mx-auto" style={{ fontSize: '20px', color: 'rgba(255,255,255,0.75)' }}>
            Cinematic wedding films and same-day teasers for couples who want more than a highlight reel.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => document.getElementById('films')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 rounded-full font-semibold text-base transition-all duration-300 hover:scale-105"
              style={{ backgroundColor: '#BFA181', color: '#0f0e0c' }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#d4b896')}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#BFA181')}
            >
              Watch Our Films
            </button>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-sm tracking-wide transition-colors duration-200 flex items-center gap-1.5"
              style={{ color: 'rgba(255,255,255,0.6)' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'white')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')}
            >
              Check Date Availability →
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
