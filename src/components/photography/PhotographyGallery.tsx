'use client'

import { useState, useEffect, useCallback } from 'react'
import { OptimizedImage } from '../OptimizedImage'

interface GalleryImage {
  id: string
  src: string
  alt: string
  category: 'details' | 'bridal' | 'couples' | 'documentary' | 'cultural' | 'reception'
  title: string
}

const GALLERY_IMAGES: GalleryImage[] = [
  // Detail Photography
  {
    id: 'detail-1',
    src: 'https://images.unsplash.com/photo-1594736797933-d0aa48fa4db1?w=800&h=1200&fit=crop',
    alt: 'Luxury crystal wedding shoes with dramatic lighting',
    category: 'details',
    title: 'Bridal Details'
  },

  // Bridal Portraits
  {
    id: 'bridal-1',
    src: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800&h=1200&fit=crop',
    alt: 'Classic bridal portrait with bouquet and natural light',
    category: 'bridal',
    title: 'Classic Elegance'
  },
  {
    id: 'bridal-2',
    src: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=1200&fit=crop',
    alt: 'Outdoor bridal portrait with natural scenery',
    category: 'bridal',
    title: 'Natural Beauty'
  },
  {
    id: 'bridal-3',
    src: 'https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?w=800&h=1200&fit=crop',
    alt: 'Window light bridal portrait with soft shadows',
    category: 'bridal',
    title: 'Window Light'
  },
  {
    id: 'bridal-4',
    src: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&h=1200&fit=crop',
    alt: 'Golden hour bridal portrait with dramatic train',
    category: 'bridal',
    title: 'Golden Hour Magic'
  },

  // Couple Portraits
  {
    id: 'couple-1',
    src: 'https://d397bfy4gvgcdm.cloudfront.net/327768-0099-Reema-Rahim-Reception20210327.jpeg',
    alt: 'Intimate couple moment in rustic setting',
    category: 'couples',
    title: 'Intimate Connection'
  },
  {
    id: 'couple-2',
    src: 'https://d397bfy4gvgcdm.cloudfront.net/427000-Karthi_Portrait-46.jpeg',
    alt: 'Traditional couple portrait with dramatic sky',
    category: 'couples',
    title: 'Dreams Against Sky'
  },
  {
    id: 'couple-3',
    src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&h=1200&fit=crop',
    alt: 'Romantic couple portrait with eucalyptus bouquet',
    category: 'couples',
    title: 'Romantic Moments'
  },

  // Documentary Moments
  {
    id: 'doc-1',
    src: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=1200&fit=crop',
    alt: 'Black and white bridesmaids helping bride with dress',
    category: 'documentary',
    title: 'Bridal Preparation'
  },
  {
    id: 'doc-2',
    src: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=800&h=1200&fit=crop',
    alt: 'Bouquet toss reception moment with guests',
    category: 'reception',
    title: 'Reception Celebration'
  },

  // Cultural Celebrations
  {
    id: 'cultural-1',
    src: 'https://www.teribphotography.com/wp-content/uploads/2022/11/indian-wedding-photography-33-scaled.jpg',
    alt: 'Traditional South Asian bridal portrait with intricate henna',
    category: 'cultural',
    title: 'Henna Artistry'
  },
  {
    id: 'cultural-2',
    src: 'https://d397bfy4gvgcdm.cloudfront.net/431045-0447-NV-Embarcadero-San-Diego-Wedding-Photography.jpeg',
    alt: 'Traditional South Asian bridal portrait with jewelry',
    category: 'cultural',
    title: 'Traditional Elegance'
  },
  {
    id: 'cultural-3',
    src: 'https://d397bfy4gvgcdm.cloudfront.net/431199-Dhruv-Allison-Sangeet-119.jpeg',
    alt: 'Traditional wedding ceremony in garden setting',
    category: 'cultural',
    title: 'Garden Ceremony'
  },

  // Additional Bridal Portraits
  {
    id: 'bridal-5',
    src: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=1200&fit=crop',
    alt: 'Romantic outdoor bridal portrait with flowing veil',
    category: 'bridal',
    title: 'Ethereal Beauty'
  },
  {
    id: 'bridal-6',
    src: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=800&h=1200&fit=crop',
    alt: 'Bride champagne toast celebration moment',
    category: 'bridal',
    title: 'Celebration Toast'
  },
  {
    id: 'bridal-7',
    src: 'https://images.unsplash.com/photo-1594736797933-d0aa48fa4db1?w=800&h=1200&fit=crop',
    alt: 'Bride getting ready with soft window light',
    category: 'bridal',
    title: 'Getting Ready Moments'
  },

  // More Details
  {
    id: 'detail-2',
    src: 'https://images.unsplash.com/photo-1629198688000-71f23e745b6e?w=800&h=1200&fit=crop',
    alt: 'Wedding ring detail shot with elegant styling',
    category: 'details',
    title: 'Ring Details'
  },
  {
    id: 'detail-3',
    src: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=800&h=1200&fit=crop',
    alt: 'Bridal bouquet with eucalyptus and roses',
    category: 'details',
    title: 'Bouquet Artistry'
  },

  // More Reception Moments
  {
    id: 'reception-2',
    src: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=1200&fit=crop',
    alt: 'First dance romantic moment under string lights',
    category: 'reception',
    title: 'First Dance'
  },
  {
    id: 'reception-3',
    src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&h=1200&fit=crop',
    alt: 'Wedding reception dancing and celebration',
    category: 'reception',
    title: 'Dance Floor Energy'
  },

  // More Documentary
  {
    id: 'doc-3',
    src: 'https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?w=800&h=1200&fit=crop',
    alt: 'Emotional father-daughter moment before ceremony',
    category: 'documentary',
    title: 'Father-Daughter Moment'
  },
  {
    id: 'doc-4',
    src: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&h=1200&fit=crop',
    alt: 'Candid laughter during wedding ceremony',
    category: 'documentary',
    title: 'Joyful Moments'
  },

  // More Couples
  {
    id: 'couple-4',
    src: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=1200&fit=crop',
    alt: 'Sunset couple portrait with dramatic silhouettes',
    category: 'couples',
    title: 'Sunset Romance'
  },
  {
    id: 'couple-5',
    src: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800&h=1200&fit=crop',
    alt: 'Intimate couple moment with natural lighting',
    category: 'couples',
    title: 'Intimate Connection'
  }
]



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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {filteredImages.map((image, index) => (
            <div
              key={`${selectedCategory}-${image.id}`}
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

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="text-white opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                    <h3 className="text-lg font-bold mb-2">{image.title}</h3>
                    <div className="flex items-center text-sm text-gray-300">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      Click to view
                    </div>
                  </div>
                </div>

                {/* Quick View Icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>
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
                />
              </div>

              {/* Image Info */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center text-white z-20 bg-black/30 backdrop-blur-sm rounded-lg px-4 py-2">
                <h3 className="text-lg md:text-xl font-bold mb-1">{filteredImages[currentImageIndex]?.title}</h3>
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
