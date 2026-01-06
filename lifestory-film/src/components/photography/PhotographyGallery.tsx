'use client'

import { useState, useEffect, useCallback } from 'react'
import { OptimizedImage } from '../OptimizedImage'
import { GALLERY_IMAGES } from '@/constants/photography'

interface GalleryImage {
  id: string
  src: string
  alt: string
  category?: string
  title?: string
}



export function PhotographyGallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)

  const filteredImages = GALLERY_IMAGES

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index)
    setLightboxOpen(true)
    // Prevent body scrolling when lightbox is open
    document.body.style.overflow = 'hidden'
  }

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false)
    // Restore body scrolling
    document.body.style.overflow = 'unset'
  }, [])

  const nextImage = useCallback(() => {
    setCurrentImageIndex((prev) => {
      const nextIndex = (prev + 1) % filteredImages.length
      return nextIndex
    })
  }, [filteredImages.length])

  const prevImage = useCallback(() => {
    setCurrentImageIndex((prev) => {
      const prevIndex = (prev - 1 + filteredImages.length) % filteredImages.length
      return prevIndex
    })
  }, [filteredImages.length])

  // Add keyboard event listener
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (!lightboxOpen) return

      switch (event.key) {
        case 'ArrowRight':
          nextImage()
          break
        case 'ArrowLeft':
          prevImage()
          break
        case 'Escape':
          closeLightbox()
          break
      }
    }

    if (lightboxOpen) {
      document.addEventListener('keydown', handleKeyPress)
    }
    return () => {
      document.removeEventListener('keydown', handleKeyPress)
      // Ensure body overflow is reset when component unmounts
      document.body.style.overflow = 'unset'
    }
  }, [lightboxOpen, filteredImages.length, nextImage, prevImage, closeLightbox])

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(0) // Reset touch end
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return

    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe && filteredImages.length > 1) {
      nextImage()
    }
    if (isRightSwipe && filteredImages.length > 1) {
      prevImage()
    }
  }

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])

  return (
    <section className="py-32 bg-gradient-diagonal">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-text text-heading mb-6">
            wedding
            <br />
            <span className="text-heading italic font-light">gallery</span>
          </h2>
          <p className="text-xl text-primary max-w-3xl mx-auto font-light leading-relaxed">
            A curated collection showcasing the diversity of our wedding photography - from intimate details
            to grand celebrations, cultural traditions to timeless moments.
          </p>
        </div>



        {/* Masonry Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 mb-16">
          {filteredImages.map((image, index) => (
            <div
              key={`gallery-${image.id}-${index}`}
              className={`group relative overflow-hidden rounded-lg cursor-pointer transition-all duration-500 hover:scale-105 ${
                index % 7 === 0 || index % 7 === 4 ? 'md:row-span-2' : ''
              }`}
              onClick={() => openLightbox(index)}
            >
              <div className={`relative ${
                index % 7 === 0 || index % 7 === 4 ? 'aspect-[3/4]' : 'aspect-[4/3]'
              }`}>
                <OptimizedImage
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Subtle dark overlay on hover */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-[#002349]/30 rounded-2xl p-12 border border-[#BFA181]/20">
            <h3 className="text-3xl font-bold text-[#BFA181] mb-4">Love What You See?</h3>
            <p className="text-xl text-[#EAE7DD] mb-8 max-w-2xl mx-auto">
              Every image tells a story. Let us capture yours with the same artistry,
              emotion, and attention to detail.
            </p>
            <button
              onClick={() => {
                const element = document.getElementById('contact')
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' })
                }
              }}
              className="bg-[#BFA181] text-[#002349] px-8 py-4 rounded-lg font-medium text-lg hover:bg-[#957C3D] transition-all duration-300 transform hover:scale-105"
            >
              Book Your Photography Session
            </button>
          </div>
        </div>

        {/* Lightbox */}
        {lightboxOpen && filteredImages[currentImageIndex] && (
          <div
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
            onClick={closeLightbox}
          >
            <div
              className="relative w-full h-full flex items-center justify-center p-4 md:p-8"
              onClick={(e) => e.stopPropagation()}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 w-10 h-10 md:w-12 md:h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors z-20"
                aria-label="Close lightbox"
              >
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Navigation - Only show if more than one image */}
              {filteredImages.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors z-20"
                    aria-label="Previous image"
                  >
                    <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>

                  <button
                    onClick={nextImage}
                    className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors z-20"
                    aria-label="Next image"
                  >
                    <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </>
              )}

              {/* Image Container - Responsive to screen size */}
              <div className="relative w-full h-full max-w-[95vw] max-h-[85vh] flex items-center justify-center">
                <OptimizedImage
                  key={`lightbox-${filteredImages[currentImageIndex]?.id}-${currentImageIndex}`}
                  src={filteredImages[currentImageIndex]?.src}
                  alt={filteredImages[currentImageIndex]?.alt}
                  className="max-w-full max-h-full object-contain w-auto h-auto shadow-2xl"
                  priority={true}
                />
              </div>

              {/* Image Info */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center text-white z-20 bg-black/30 backdrop-blur-sm rounded-lg px-4 py-2">
                <div className="flex items-center justify-center space-x-4 text-sm opacity-70">
                  <span>{currentImageIndex + 1} of {filteredImages.length}</span>
                  {filteredImages.length > 1 && (
                    <span className="hidden md:inline">Use ← → keys to navigate</span>
                  )}
                </div>
              </div>

              {/* Loading indicator for next image */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="absolute inset-0 bg-black/20 opacity-0 transition-opacity duration-300" />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
