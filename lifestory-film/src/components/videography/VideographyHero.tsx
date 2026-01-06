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
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <div className={`transition-all duration-1000 ${isLoaded ? 'fade-in-up' : 'opacity-0'}`}>
          <h1 className="hero-text text-white mb-6 text-shadow">
            wedding
            <br />
            <span className="text-gray-300">videography</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto font-light leading-relaxed">
            Cinematic wedding films designed to give you a good understanding of what you are going to get.
            Every frame tells your unique love story with Hollywood-quality production.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => document.getElementById('films')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-black px-8 py-4 rounded-full font-medium text-lg hover:bg-gray-200 transition-all duration-300 transform hover:scale-105"
            >
              View Our Films
            </button>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="border border-white text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-white hover:text-black transition-all duration-300"
            >
              Check Date Availability
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
