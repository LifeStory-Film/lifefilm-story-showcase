'use client'

import { useEffect, useState } from 'react'

export function VideographyHero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Fallback gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-black to-zinc-800" />

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-90"
        style={{
          backgroundImage: `url('https://images.squarespace-cdn.com/content/v1/674f379b66552d5bd917587b/37c25b3b-ba48-468e-8d4b-0c902174cfd3/russell-john-films-wedding-video-cinematography-twin-oaks-san-diego2.jpg')`
        }}
      />

      {/* Cinematic Gradient Overlay */}
      <div className="absolute inset-0 cinematic-gradient" />

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
              Start Your Story
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
