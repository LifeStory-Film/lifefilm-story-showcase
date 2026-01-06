'use client'

import { useState, useEffect } from 'react'
import { OptimizedImage } from './OptimizedImage'
import { HERO_IMAGES, type SlideImage } from '@/constants/photography'

const SLIDER_IMAGES = HERO_IMAGES

interface PhotoSliderProps {
  autoPlay?: boolean
  autoPlayInterval?: number
  showThumbnails?: boolean
  className?: string
}

export function PhotoSlider({
  autoPlay = true,
  autoPlayInterval = 5000,
  showThumbnails = true,
  className = ''
}: PhotoSliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPlaying, setIsPlaying] = useState(autoPlay)

  useEffect(() => {
    if (!isPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDER_IMAGES.length)
    }, autoPlayInterval)

    return () => clearInterval(interval)
  }, [isPlaying, autoPlayInterval])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % SLIDER_IMAGES.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + SLIDER_IMAGES.length) % SLIDER_IMAGES.length)
  }

  const toggleAutoPlay = () => {
    setIsPlaying(!isPlaying)
  }

  return (
    <div className={`relative w-full ${className}`}>
      {/* Main Slider */}
      <div className={`relative ${className.includes('h-full') ? 'h-full' : 'h-[70vh] min-h-[500px]'} overflow-hidden ${className.includes('h-full') ? '' : 'rounded-2xl'}`}>
        {SLIDER_IMAGES.map((image, index) => (
          <div
            key={image.id}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentSlide
                ? 'opacity-100 scale-100'
                : 'opacity-0 scale-105'
            }`}
          >
            <OptimizedImage
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
              priority={index === 0 || index === currentSlide}
            />

            {/* Gradient Overlay - only show content overlay if not being used as background */}
            {!className.includes('h-full') && (
              <>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <div className="max-w-2xl">
                    <h3 className="text-3xl md:text-4xl font-bold text-[#EAE7DD] mb-4">
                      {image.title}
                    </h3>
                    <p className="text-lg md:text-xl text-[#EAE7DD]/90 leading-relaxed">
                      {image.description}
                    </p>
                  </div>
                </div>
              </>
            )}
          </div>
        ))}

        {/* Navigation Arrows - hide when used as background */}
        {!className.includes('h-full') && (
          <>
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-[#002349]/80 backdrop-blur-sm rounded-full flex items-center justify-center text-[#BFA181] hover:bg-[#002349] hover:scale-110 transition-all duration-300 group"
              aria-label="Previous image"
            >
              <svg className="w-6 h-6 transition-transform group-hover:-translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-[#002349]/80 backdrop-blur-sm rounded-full flex items-center justify-center text-[#BFA181] hover:bg-[#002349] hover:scale-110 transition-all duration-300 group"
              aria-label="Next image"
            >
              <svg className="w-6 h-6 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}

        {/* Play/Pause Button - subtle when used as background */}
        <button
          onClick={toggleAutoPlay}
          className={`absolute ${className.includes('h-full') ? 'top-4 right-4 opacity-30 hover:opacity-70' : 'top-4 right-4'} w-10 h-10 bg-[#002349]/80 backdrop-blur-sm rounded-full flex items-center justify-center text-[#BFA181] hover:bg-[#002349] transition-all duration-300`}
          aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
        >
          {isPlaying ? (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
          )}
        </button>

        {/* Slide Indicators - hide when used as background */}
        {!className.includes('h-full') && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
            {SLIDER_IMAGES.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-[#BFA181] scale-125'
                    : 'bg-white/50 hover:bg-white/75'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Thumbnails */}
      {showThumbnails && (
        <div className="mt-6 grid grid-cols-5 gap-3">
          {SLIDER_IMAGES.map((image, index) => (
            <button
              key={image.id}
              onClick={() => goToSlide(index)}
              className={`relative aspect-video overflow-hidden rounded-lg transition-all duration-300 ${
                index === currentSlide
                  ? 'ring-2 ring-[#BFA181] scale-105'
                  : 'hover:scale-102 hover:ring-1 hover:ring-[#BFA181]/50'
              }`}
            >
              <OptimizedImage
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
              {index !== currentSlide && (
                <div className="absolute inset-0 bg-black/30" />
              )}
            </button>
          ))}
        </div>
      )}

      {/* Progress Bar */}
      {isPlaying && (
        <div className="mt-4 w-full h-1 bg-[#002349]/20 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-[#BFA181] to-[#178582] rounded-full transition-all duration-300"
            style={{
              width: `${((currentSlide + 1) / SLIDER_IMAGES.length) * 100}%`
            }}
          />
        </div>
      )}
    </div>
  )
}
