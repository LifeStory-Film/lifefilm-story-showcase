'use client'

import { useEffect, useState } from 'react'
import { ParallaxContainer } from './ParallaxSection'
import { OptimizedYouTubeEmbed } from './OptimizedYouTubeEmbed'

export function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <ParallaxContainer className="relative min-h-screen flex flex-col justify-end overflow-hidden">
      {/* Full-bleed video background */}
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
        {/* Minimal overlay — dark gradient at bottom only */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent pointer-events-none" />
        {/* Top gradient for nav readability */}
        <div className="absolute top-0 left-0 right-0 h-[120px] pointer-events-none" style={{ background: 'linear-gradient(to bottom, rgba(15,14,12,0.75) 0%, transparent 100%)' }} />
      </div>

      {/* Content — anchored to bottom of viewport */}
      <div
        className={`relative z-10 px-6 md:px-12 lg:px-20 pb-16 md:pb-20 max-w-7xl w-full transition-all duration-1000 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        {/* Eyebrow */}
        <p className="text-white/70 text-xs tracking-[0.25em] uppercase mb-6 font-light" style={{ paddingTop: '100px' }}>
          California &amp; Worldwide · Since 2010
        </p>

        {/* Headline — editorial, oversized */}
        <h1
          className="font-black leading-[0.92] tracking-tight text-white mb-8"
          style={{ fontSize: 'clamp(52px, 9vw, 96px)' }}
        >
          Your wedding film
          <br />
          should make you cry.
          <br />
          <span className="text-white/50 font-light italic" style={{ fontSize: '0.72em' }}>
            Every time you watch it.
          </span>
        </h1>

        {/* Subheadline */}
        <p
          className="text-white/65 font-light leading-relaxed mb-10"
          style={{ fontSize: 'clamp(15px, 1.5vw, 19px)', maxWidth: '560px' }}
        >
          Cinematic wedding films for couples who want more than a highlight reel — made by a team that's been doing this since 2010.
        </p>

        {/* CTA row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 mb-16 md:mb-20">
          <button
            onClick={() => scrollToSection('films')}
            className="bg-white text-black px-8 py-3.5 rounded-full text-sm font-semibold tracking-wide hover:bg-[#BFA181] hover:text-white transition-colors duration-200"
          >
            See Our Films
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="text-white/60 hover:text-white text-sm tracking-wide transition-colors duration-200 flex items-center gap-1.5"
          >
            Check date availability
            <span aria-hidden="true">→</span>
          </button>
        </div>

        {/* Stat row — plain, no cards */}
        <div className="flex flex-wrap gap-10 md:gap-16 mb-10">
          {[
            { number: '1,000+', label: 'Couples Filmed' },
            { number: '15+',    label: 'Years Experience' },
            { number: '5.0',    label: 'Google Rating' },
          ].map((stat) => (
            <div key={stat.label}>
              <div
                className="text-white font-bold leading-none tracking-tight"
                style={{ fontSize: 'clamp(28px, 3.5vw, 40px)' }}
              >
                {stat.number}
              </div>
              <div className="text-white/45 text-[11px] tracking-[0.18em] uppercase mt-1 font-light">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Venue strip */}
        <div className="flex flex-wrap items-center gap-6 md:gap-10">
          <span className="text-white/30 text-[10px] tracking-[0.2em] uppercase">Filmed at</span>
          {['Pelican Hill', 'Four Seasons', 'Ritz-Carlton', 'Malibu Rocky Oaks'].map((venue) => (
            <span
              key={venue}
              className="text-white/30 hover:text-white/55 transition-colors duration-300 text-[11px] tracking-[0.15em] uppercase font-light select-none"
            >
              {venue}
            </span>
          ))}
        </div>
      </div>
    </ParallaxContainer>
  )
}
