'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SmoothReveal, HoverAnimation } from './SimpleAnimations'
import { OptimizedImage } from './OptimizedImage'
import { OptimizedVideo } from './OptimizedVideo'
import { PrimaryCTA } from './PrimaryCTA'

interface Film {
  id: string
  title: string
  location: string
  category: string
  videoId: string
  embedUrl: string
  thumbnail: string
  duration: string
  description: string
}

const FILMS: Film[] = [
  {
    id: 'ryan-victoria',
    title: "Ryan & Victoria",
    location: "The Resort At Pelican Hill",
    category: "Destination",
    videoId: "cp3PmoI9nio",
    embedUrl: "https://www.youtube.com/embed/cp3PmoI9nio?si=EkwuDwuG3FMy9Uys",
    thumbnail: `https://img.youtube.com/vi/cp3PmoI9nio/maxresdefault.jpg`,
    duration: "4:32",
    description: "A breathtaking luxury resort wedding with sweeping ocean views and elegant architecture."
  },
  {
    id: 'katherine-harsh',
    title: "Katherine & Harsh",
    location: "Saratoga Springs",
    category: "Indian & Vietnamese",
    videoId: "G4Mlon9-iLY",
    embedUrl: "https://www.youtube.com/embed/G4Mlon9-iLY?si=vUBoA_fMh2qzD2kh",
    thumbnail: `https://img.youtube.com/vi/G4Mlon9-iLY/maxresdefault.jpg`,
    duration: "5:18",
    description: "A beautiful fusion of Indian and Vietnamese traditions in a stunning garden setting."
  },
  {
    id: 'josh-whitney',
    title: "Josh & Whitney",
    location: "New York",
    category: "Destination",
    videoId: "WCjUi2yqK3U",
    embedUrl: "https://www.youtube.com/embed/WCjUi2yqK3U?si=BGGRwNil8rAHfLIh",
    thumbnail: `https://img.youtube.com/vi/WCjUi2yqK3U/maxresdefault.jpg`,
    duration: "3:45",
    description: "An intimate destination wedding capturing the energy and romance of the city."
  },
  {
    id: 'ayaka-kyan-malibu',
    title: "Ayaka & Kyan",
    location: "Malibu",
    category: "Coastal",
    videoId: "17rIApee9B8",
    embedUrl: "https://www.youtube.com/embed/17rIApee9B8?si=1iWNkH4CHI1EkXKt",
    thumbnail: `https://img.youtube.com/vi/17rIApee9B8/maxresdefault.jpg`,
    duration: "4:12",
    description: "A dreamy beachside wedding with the Pacific Ocean as the perfect backdrop."
  },
  {
    id: 'michelle-jason',
    title: "Michelle & Jason",
    location: "Los Angeles",
    category: "Indian & Jewish",
    videoId: "z_6rqvk2tAs",
    embedUrl: "https://www.youtube.com/embed/z_6rqvk2tAs?si=43vuFod-iY4Pvp0w",
    thumbnail: `https://img.youtube.com/vi/z_6rqvk2tAs/maxresdefault.jpg`,
    duration: "6:20",
    description: "A grand celebration blending Indian and Jewish traditions in a historic venue."
  },
  {
    id: 'ayaka-kyan-palos-verdes',
    title: "Ayaka & Kyan",
    location: "Palos Verdes",
    category: "Indian",
    videoId: "ETxaM39nn4E",
    embedUrl: "https://www.youtube.com/embed/ETxaM39nn4E?si=5xsoCyABZunqBWV6",
    thumbnail: `https://img.youtube.com/vi/ETxaM39nn4E/maxresdefault.jpg`,
    duration: "4:45",
    description: "A beautiful Indian wedding celebration with stunning coastal views."
  },
  {
    id: 'charlotte-john',
    title: "Charlotte & John",
    location: "San Francisco",
    category: "Destination",
    videoId: "D_vIC41fA4U",
    embedUrl: "https://www.youtube.com/embed/D_vIC41fA4U?si=FlcHHUm73NIMAm5_",
    thumbnail: `https://img.youtube.com/vi/D_vIC41fA4U/maxresdefault.jpg`,
    duration: "5:30",
    description: "A romantic destination wedding in the heart of San Francisco."
  },
  {
    id: 'carrie-grant',
    title: "Carrie & Grant",
    location: "Malibu",
    category: "Coastal",
    videoId: "SoXEpK1tGYo",
    embedUrl: "https://www.youtube.com/embed/SoXEpK1tGYo?si=ylUmN4E9PXqxxl8G",
    thumbnail: `https://img.youtube.com/vi/SoXEpK1tGYo/maxresdefault.jpg`,
    duration: "4:15",
    description: "A stunning coastal wedding with breathtaking Malibu ocean views."
  }
]

export function EnhancedFeaturedFilms() {
  const [selectedVideo, setSelectedVideo] = useState<number | null>(null)
  const [isVideoLoading, setIsVideoLoading] = useState(false)
  const [hasVideoError, setHasVideoError] = useState(false)

  const openVideoModal = (index: number) => {
    setSelectedVideo(index)
    setIsVideoLoading(true)
    setHasVideoError(false)
    document.body.style.overflow = 'hidden'
  }

  const closeVideoModal = useCallback(() => {
    setSelectedVideo(null)
    setIsVideoLoading(false)
    setHasVideoError(false)
    document.body.style.overflow = 'unset'
  }, [])

  const navigateVideo = useCallback((direction: 'prev' | 'next') => {
    if (selectedVideo === null) return

    const newIndex = direction === 'next'
      ? (selectedVideo + 1) % FILMS.length
      : (selectedVideo - 1 + FILMS.length) % FILMS.length

    setSelectedVideo(newIndex)
    setIsVideoLoading(true)
    setHasVideoError(false)
  }, [selectedVideo])

  // Handle escape key globally when modal is open
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedVideo === null) return

      switch (e.key) {
        case 'Escape':
          closeVideoModal()
          break
        case 'ArrowLeft':
          navigateVideo('prev')
          break
        case 'ArrowRight':
          navigateVideo('next')
          break
      }
    }

    if (selectedVideo !== null) {
      document.addEventListener('keydown', handleKeyDown)
      return () => document.removeEventListener('keydown', handleKeyDown)
    }
  }, [selectedVideo, closeVideoModal, navigateVideo])

  return (
    <section id="films" className="py-32 bg-zinc-900">
      <div className="container mx-auto px-6">
        <SmoothReveal direction="fade" className="text-center mb-16">
          <h2 className="section-text text-white mb-6">
            featured
            <br />
            <span className="text-gray-400">films</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light">
            Each film is crafted to reflect the couple's unique story,
            blending documentary authenticity with cinematic artistry.
          </p>
        </SmoothReveal>

        {/* Films Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-16">
          {FILMS.map((film, index) => (
            <SmoothReveal
              key={film.id}
              direction="up"
              delay={index * 0.1}
              className=""
            >
              <div
                className="group relative overflow-hidden rounded-lg aspect-[16/9] cursor-pointer film-thumbnail transform transition-transform duration-300 hover:scale-[1.02]"
                onClick={() => openVideoModal(index)}
              >
                <HoverAnimation scale={1.05}>
                  <OptimizedImage
                    src={film.thumbnail}
                    alt={`${film.title} Wedding Film`}
                    className="absolute inset-0 w-full h-full object-cover film-thumbnail-image"
                    fallbackSrc={`https://img.youtube.com/vi/${film.videoId}/hqdefault.jpg`}
                    priority={index < 4}
                  />

                  {/* Enhanced overlay with gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 z-10" />

                  {/* Enhanced Play Button with bounce effect */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
                    <div className="w-20 h-20 bg-white/95 rounded-full flex items-center justify-center backdrop-blur-sm transform transition-all duration-300 group-hover:scale-110 shadow-lg hover:shadow-xl">
                      <div className="w-0 h-0 border-l-[18px] border-l-black border-y-[14px] border-y-transparent ml-1 transition-all duration-200"></div>
                    </div>
                  </div>

                  {/* Duration Badge - Always Visible */}
                  <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-sm text-white text-xs px-2 py-1 rounded font-medium border border-white/20 z-15">
                    {film.duration}
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 bg-blue-600/90 backdrop-blur-sm text-white text-xs px-2 py-1 rounded font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-15">
                    {film.category}
                  </div>

                  {/* Enhanced Film Info with better typography */}
                  <div className="absolute inset-0 flex items-end p-4 sm:p-6 z-10">
                    <div className="text-white transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 w-full">
                      <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-300 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Premium Quality</span>
                      </div>
                      <h3 className="text-lg sm:text-2xl font-bold mb-1 drop-shadow-lg">{film.title}</h3>
                      <p className="text-gray-300 text-sm sm:text-base drop-shadow">{film.location}</p>

                      {/* Preview Description on Hover */}
                      <p className="text-gray-400 text-xs sm:text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200 line-clamp-2">
                        {film.description}
                      </p>
                    </div>
                  </div>

                  {/* Interactive Border Effect */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/30 rounded-lg transition-colors duration-300 pointer-events-none" />

                  {/* Shimmer Effect on Hover */}
                  <div className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 transform translate-x-[-200%] group-hover:translate-x-[200%] pointer-events-none"
                       style={{ animation: 'shimmer 1.5s ease-in-out infinite' }} />
                </HoverAnimation>
              </div>
            </SmoothReveal>
          ))}
        </div>

        {/* Transition to Packages */}
        <SmoothReveal direction="up" className="text-center mt-16">
          <div className="bg-gradient-to-r from-[#002349]/50 to-[#4F0341]/30 rounded-2xl p-12 border border-[#BFA181]/20">
            <h3 className="text-3xl font-bold text-[#BFA181] mb-4">Ready to Create Your Story?</h3>
            <p className="text-xl text-[#EAE7DD] mb-8 max-w-2xl mx-auto">
              Choose from our comprehensive photo + video packages designed for complete wedding coverage with seamless coordination.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <PrimaryCTA
                variant="primary"
                onClick={() => {
                  const element = document.getElementById('packages')
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
                icon={
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                }
              >
                View Packages & Pricing
              </PrimaryCTA>
              <PrimaryCTA
                variant="secondary"
                onClick={() => {
                  const element = document.getElementById('contact')
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
                icon={
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                }
              >
                Let's Chat
              </PrimaryCTA>
            </div>
          </div>
        </SmoothReveal>
      </div>

      {/* Enhanced Video Modal with Navigation */}
      <AnimatePresence>
        {selectedVideo !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-2 sm:p-4 lg:p-6"
            onClick={(e) => {
              // Close if clicking on the backdrop
              if (e.target === e.currentTarget) {
                closeVideoModal()
              }
            }}
            style={{ outline: 'none' }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-6xl mx-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header with Close and Navigation */}
              <div className="flex items-center justify-between mb-4 px-2">
                <div className="flex items-center space-x-4">
                  {/* Previous Video Button */}
                  <button
                    onClick={() => navigateVideo('prev')}
                    className="text-white hover:text-blue-400 transition-colors bg-black/50 rounded-full p-2 backdrop-blur-sm border border-white/20 hover:border-blue-400/50"
                    aria-label="Previous video"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>

                  {/* Video Counter */}
                  <span className="text-white/80 text-sm bg-black/50 px-3 py-1 rounded-full backdrop-blur-sm">
                    {selectedVideo + 1} of {FILMS.length}
                  </span>

                  {/* Next Video Button */}
                  <button
                    onClick={() => navigateVideo('next')}
                    className="text-white hover:text-blue-400 transition-colors bg-black/50 rounded-full p-2 backdrop-blur-sm border border-white/20 hover:border-blue-400/50"
                    aria-label="Next video"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>

                {/* Close Button */}
                <button
                  onClick={closeVideoModal}
                  className="text-white hover:text-red-400 transition-colors bg-black/50 rounded-full p-2 backdrop-blur-sm border border-white/20 hover:border-red-400/50"
                  aria-label="Close video"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Video Container */}
              <div className="relative aspect-[16/9] bg-black rounded-lg overflow-hidden shadow-2xl">
                {/* Loading State */}
                {isVideoLoading && (
                  <div className="absolute inset-0 bg-black flex items-center justify-center z-10">
                    <div className="text-center">
                      <div className="w-12 h-12 border-2 border-white/30 border-t-white rounded-full animate-spin mx-auto mb-4" />
                      <p className="text-white/70 text-sm">Loading video...</p>
                    </div>
                  </div>
                )}

                {/* Error State */}
                {hasVideoError && (
                  <div className="absolute inset-0 bg-black flex items-center justify-center z-10">
                    <div className="text-center text-white/70">
                      <svg className="w-12 h-12 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                      <p>Video unavailable</p>
                      <button
                        onClick={() => navigateVideo('next')}
                        className="mt-2 text-blue-400 hover:text-blue-300 text-sm"
                      >
                        Try next video
                      </button>
                    </div>
                  </div>
                )}

                {/* Video Iframe */}
                <iframe
                  src={`${FILMS[selectedVideo].embedUrl}&autoplay=1&mute=0`}
                  title={`${FILMS[selectedVideo].title} Wedding Film`}
                  className={`w-full h-full transition-opacity duration-300 ${isVideoLoading ? 'opacity-0' : 'opacity-100'}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  referrerPolicy="strict-origin-when-cross-origin"
                  onLoad={() => {
                    setIsVideoLoading(false)
                    setHasVideoError(false)
                  }}
                  onError={() => {
                    setIsVideoLoading(false)
                    setHasVideoError(true)
                  }}
                />
              </div>

              {/* Video Information */}
              <div className="mt-4 sm:mt-6 text-center text-white px-2">
                <h3 className="text-xl sm:text-2xl font-bold mb-2">{FILMS[selectedVideo].title}</h3>
                <p className="text-gray-300 mb-3 sm:mb-4">{FILMS[selectedVideo].location}</p>
                <div className="flex flex-wrap justify-center gap-2 mb-3">
                  <span className="text-xs sm:text-sm bg-zinc-700 text-gray-300 px-2 sm:px-3 py-1 rounded-full">
                    {FILMS[selectedVideo].category}
                  </span>
                  <span className="text-xs sm:text-sm bg-zinc-700 text-gray-300 px-2 sm:px-3 py-1 rounded-full">
                    {FILMS[selectedVideo].duration}
                  </span>
                </div>
                <p className="text-gray-400 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
                  {FILMS[selectedVideo].description}
                </p>

                {/* Keyboard Shortcuts Hint */}
                <div className="mt-4 text-xs text-gray-500 hidden sm:block">
                  Use ← → arrow keys to navigate • ESC to close
                </div>
              </div>

              {/* Thumbnail Navigation for larger screens */}
              <div className="hidden lg:block mt-6">
                <div className="flex justify-center space-x-2 overflow-x-auto pb-2">
                  {FILMS.map((film, index) => (
                    <button
                      key={film.id}
                      onClick={() => {
                        setSelectedVideo(index)
                        setIsVideoLoading(true)
                        setHasVideoError(false)
                      }}
                      className={`flex-shrink-0 w-20 h-12 rounded overflow-hidden border-2 transition-all duration-200 ${
                        index === selectedVideo
                          ? 'border-blue-400 opacity-100'
                          : 'border-transparent opacity-60 hover:opacity-80'
                      }`}
                    >
                      <img
                        src={film.thumbnail}
                        alt={film.title}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-200%) skewX(-12deg); }
          100% { transform: translateX(200%) skewX(-12deg); }
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        /* Responsive video modal adjustments */
        @media (max-width: 640px) {
          .film-thumbnail {
            border-radius: 0.5rem;
          }

          .film-thumbnail h3 {
            font-size: 1.125rem;
            line-height: 1.5;
          }
        }

        /* Enhanced hover states for better UX */
        .film-thumbnail:hover {
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
        }

        /* Accessibility improvements */
        .film-thumbnail:focus-visible {
          outline: 2px solid #3b82f6;
          outline-offset: 2px;
        }

        /* Performance optimizations */
        .film-thumbnail {
          will-change: transform;
          backface-visibility: hidden;
        }

        /* Modal backdrop blur for better focus */
        .modal-backdrop {
          backdrop-filter: blur(8px);
        }

        /* Video loading optimization */
        iframe {
          will-change: transform;
        }
      `}</style>
    </section>
  )
}
