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
          <h1 className="hero-text text-white mb-6 text-shadow">
            wedding
            <br />
            <span className="text-gray-300">photography</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto font-light leading-relaxed">
            Timeless wedding photography that captures the authentic moments, emotions,
            and elegance of your love story with artistic vision and documentary style.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-black px-8 py-4 rounded-full font-medium text-lg hover:bg-gray-200 transition-all duration-300 transform hover:scale-105"
            >
              View Our Work
            </button>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="border border-white text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-white hover:text-black transition-all duration-300"
            >
              Book Your Session
            </button>
          </div>
        </div>
      </div>


    </section>
  )
}
