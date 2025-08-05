'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SmoothReveal } from './SimpleAnimations'
import { PrimaryCTA } from './PrimaryCTA'

// Behind-the-scenes video data
const BTS_VIDEOS = [
  {
    id: 'main-bts',
    title: 'LifeStory.Film - Behind the Scenes',
    videoId: 'tocAcQrJNlE',
    embedUrl: 'https://www.youtube.com/embed/tocAcQrJNlE?si=GMMxCP6zZD6zbucd',
    thumbnail: 'https://img.youtube.com/vi/tocAcQrJNlE/maxresdefault.jpg',
    description: 'See our complete behind-the-scenes process at a luxury resort wedding'
  },
  {
    id: 'camera-crane',
    title: 'Camera Crane in Action',
    videoId: 'JEl79SvXGa4',
    embedUrl: 'https://www.youtube.com/embed/JEl79SvXGa4?si=7LVKLOaL_wIkYnyf',
    thumbnail: 'https://img.youtube.com/vi/JEl79SvXGa4/maxresdefault.jpg',
    description: 'Professional crane shots for cinematic perspectives'
  },
  {
    id: 'drone-video',
    title: 'Drone Videography in Action',
    videoId: 'CGmoTeS3fwc',
    embedUrl: 'https://www.youtube.com/embed/CGmoTeS3fwc?si=Unr_HDxLJQ7Qd_Dm',
    thumbnail: 'https://img.youtube.com/vi/CGmoTeS3fwc/maxresdefault.jpg',
    description: 'Aerial cinematography for breathtaking venue coverage'
  },
  {
    id: 'couple-session',
    title: 'Couple Session',
    videoId: 'n-EK_eVyL5c',
    embedUrl: 'https://www.youtube.com/embed/n-EK_eVyL5c?si=Lf8seZ801ozUJmsZ',
    thumbnail: 'https://img.youtube.com/vi/n-EK_eVyL5c/maxresdefault.jpg',
    description: 'Intimate moments captured with artistic precision'
  }
]

export function BehindTheScenes() {
  const [loadedVideos, setLoadedVideos] = useState<Set<string>>(new Set())
  const [selectedVideo, setSelectedVideo] = useState<number | null>(null)
  const [isVideoLoading, setIsVideoLoading] = useState(false)

  // Modal functions
  const openVideoModal = (index: number) => {
    setSelectedVideo(index)
    setIsVideoLoading(true)
    document.body.style.overflow = 'hidden'
  }

  const closeVideoModal = useCallback(() => {
    setSelectedVideo(null)
    setIsVideoLoading(false)
    document.body.style.overflow = 'unset'
  }, [])

  const navigateVideo = useCallback((direction: 'prev' | 'next') => {
    if (selectedVideo === null) return

    const newIndex = direction === 'next'
      ? (selectedVideo + 1) % BTS_VIDEOS.length
      : (selectedVideo - 1 + BTS_VIDEOS.length) % BTS_VIDEOS.length

    setSelectedVideo(newIndex)
    setIsVideoLoading(true)
  }, [selectedVideo])

  // Keyboard navigation
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

  // Lazy loading intersection observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const videoId = entry.target.getAttribute('data-video-id')
            if (videoId) {
              setLoadedVideos(prev => new Set([...prev, videoId]))
            }
          }
        })
      },
      { threshold: 0.1 }
    )

    const videoContainers = document.querySelectorAll('[data-video-id]')
    videoContainers.forEach(container => observer.observe(container))

    return () => observer.disconnect()
  }, [])

  const VideoContainer = ({
    videoIndex,
    video,
    isMain = false
  }: {
    videoIndex: number
    video: typeof BTS_VIDEOS[0]
    isMain?: boolean
  }) => {
    const isLoaded = loadedVideos.has(video.id)

    return (
      <div
        className={`group relative aspect-video rounded-${isMain ? '2xl' : 'xl'} overflow-hidden shadow-${isMain ? '2xl' : 'lg'} hover:shadow-3xl transition-all duration-500 hover:scale-105 transform-gpu cursor-pointer`}
        data-video-id={video.id}
        onClick={() => openVideoModal(videoIndex)}
      >
        {/* Thumbnail Preview */}
        <div className="absolute inset-0">
          <img
            src={video.thumbnail}
            alt={video.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Loading Placeholder */}
        {!isLoaded && (
          <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
            <div className="flex flex-col items-center space-y-4">
              <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
              <p className="text-white/70 text-sm">Loading video...</p>
            </div>
          </div>
        )}

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

        {/* Interactive Border */}
        <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/30 rounded-inherit transition-colors duration-300" />

        {/* Play Icon Overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
          <div className={`${isMain ? 'w-24 h-24' : 'w-20 h-20'} bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30 transform scale-75 group-hover:scale-100 transition-transform duration-300 shadow-lg`}>
            <div className={`w-0 h-0 border-l-[${isMain ? '20px' : '16px'}] border-l-black border-y-[${isMain ? '16px' : '12px'}] border-y-transparent ml-1`}></div>
          </div>
        </div>

        {/* Quality Badge for Main Video */}
        {isMain && (
          <div className="absolute top-4 left-4 bg-blue-600/90 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full border border-blue-400/30 opacity-0 group-hover:opacity-100 transition-all duration-300 font-medium">
            <span className="flex items-center space-x-1">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>4K Behind the Scenes</span>
            </span>
          </div>
        )}

        {/* BTS Badge for Supporting Videos */}
        {!isMain && (
          <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full border border-white/20 opacity-0 group-hover:opacity-100 transition-all duration-300 font-medium">
            <span className="flex items-center space-x-1">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
              <span>BTS</span>
            </span>
          </div>
        )}

        {/* Click Indicator */}
        <div className="absolute bottom-4 right-4 bg-white/20 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
          <span className="flex items-center space-x-1">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
            <span>Watch</span>
          </span>
        </div>

        {/* Enhanced Shimmer Effect */}
        <div className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 transform translate-x-[-200%] group-hover:translate-x-[200%] pointer-events-none"
             style={{ animation: 'shimmer 1.5s ease-in-out infinite' }} />
      </div>
    )
  }

  return (
    <section id="behind-the-scenes" className="py-32" style={{ background: 'linear-gradient(180deg, #001a33 0%, #001326 100%)' }}>
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <SmoothReveal direction="fade" className="text-center mb-16">
          <h2 className="section-text text-white mb-6">
            behind the
            <br />
            <span className="text-gray-400">scenes</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto font-light leading-relaxed">
            See how we work on your wedding day – our professional approach, attention to detail,
            and passion for capturing every precious moment with cinematic precision.
          </p>
        </SmoothReveal>

        {/* Main Featured Video */}
        <SmoothReveal direction="up" delay={0.3} className="max-w-6xl mx-auto mb-16">
          <VideoContainer
            videoIndex={0}
            video={BTS_VIDEOS[0]}
            isMain={true}
          />
        </SmoothReveal>

        {/* Supporting Behind-the-Scenes Clips */}
        <SmoothReveal direction="up" delay={0.5} className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {BTS_VIDEOS.slice(1).map((video, index) => (
              <div key={video.id} className="space-y-4">
                <VideoContainer
                  videoIndex={index + 1}
                  video={video}
                />
                <div className="text-center">
                  <h4 className="text-lg font-semibold text-white transition-colors duration-300 hover:text-blue-300 mb-2">
                    {video.title}
                  </h4>
                  <p className="text-sm text-gray-400 opacity-0 hover:opacity-100 transition-opacity duration-300">
                    {video.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </SmoothReveal>

        {/* Performance Stats */}
        <SmoothReveal direction="up" delay={0.8} className="text-center mt-16 mb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:border-white/20 transition-colors duration-300">
              <div className="text-2xl font-bold text-white mb-1">4K</div>
              <div className="text-gray-400 text-sm">Ultra HD</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:border-white/20 transition-colors duration-300">
              <div className="text-2xl font-bold text-white mb-1">12+</div>
              <div className="text-gray-400 text-sm">Hours Coverage</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:border-white/20 transition-colors duration-300">
              <div className="text-2xl font-bold text-white mb-1">15+</div>
              <div className="text-gray-400 text-sm">Pro Equipment</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:border-white/20 transition-colors duration-300">
              <div className="text-2xl font-bold text-white mb-1">100%</div>
              <div className="text-gray-400 text-sm">Backup Coverage</div>
            </div>
          </div>
        </SmoothReveal>

        {/* Call to Action */}
        <SmoothReveal direction="up" delay={0.8} className="text-center mt-20">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Want to capture your wedding day with cinematic storytelling?
            </h3>
            <PrimaryCTA
              variant="primary"
              onClick={() => {
                const element = document.getElementById('contact')
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' })
                }
              }}
              icon={
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a4 4 0 118 0v4m-4 8a4 4 0 11-8 0v-4a4 4 0 118 0v4z" />
                </svg>
              }
            >
              Book My Date
            </PrimaryCTA>
          </div>
        </SmoothReveal>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {selectedVideo !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-2 sm:p-4 lg:p-6"
            onClick={(e) => {
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
              {/* Modal Header */}
              <div className="flex items-center justify-between mb-4 px-2">
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => navigateVideo('prev')}
                    className="text-white hover:text-blue-400 transition-colors bg-black/50 rounded-full p-2 backdrop-blur-sm border border-white/20 hover:border-blue-400/50"
                    aria-label="Previous video"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>

                  <span className="text-white/80 text-sm bg-black/50 px-3 py-1 rounded-full backdrop-blur-sm">
                    {selectedVideo + 1} of {BTS_VIDEOS.length}
                  </span>

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
                {isVideoLoading && (
                  <div className="absolute inset-0 bg-black flex items-center justify-center z-10">
                    <div className="text-center">
                      <div className="w-12 h-12 border-2 border-white/30 border-t-white rounded-full animate-spin mx-auto mb-4" />
                      <p className="text-white/70 text-sm">Loading video...</p>
                    </div>
                  </div>
                )}

                <iframe
                  src={`${BTS_VIDEOS[selectedVideo].embedUrl}&autoplay=1`}
                  title={BTS_VIDEOS[selectedVideo].title}
                  className={`w-full h-full transition-opacity duration-300 ${isVideoLoading ? 'opacity-0' : 'opacity-100'}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  referrerPolicy="strict-origin-when-cross-origin"
                  onLoad={() => setIsVideoLoading(false)}
                />
              </div>

              {/* Video Information */}
              <div className="mt-4 sm:mt-6 text-center text-white px-2">
                <h3 className="text-xl sm:text-2xl font-bold mb-2">{BTS_VIDEOS[selectedVideo].title}</h3>
                <p className="text-gray-400 text-sm max-w-2xl mx-auto leading-relaxed">
                  {BTS_VIDEOS[selectedVideo].description}
                </p>
                <div className="mt-4 text-xs text-gray-500 hidden sm:block">
                  Use ← → arrow keys to navigate • ESC to close
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-200%) skewX(-12deg); }
          100% { transform: translateX(200%) skewX(-12deg); }
        }

        .hover\\:shadow-3xl:hover {
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
        }

        .rounded-inherit {
          border-radius: inherit;
        }

        .transform-gpu {
          transform: translateZ(0);
        }

        @media (prefers-reduced-motion: reduce) {
          .group:hover .transition-transform,
          .group:hover .transform {
            transform: none;
          }
        }
      `}</style>
    </section>
  )
}
