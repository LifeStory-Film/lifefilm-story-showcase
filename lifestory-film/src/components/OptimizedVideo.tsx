'use client'

import { useState, useEffect, useRef } from 'react'

interface OptimizedVideoProps {
  videoId: string
  title?: string
  className?: string
  autoplay?: boolean
  muted?: boolean
  loop?: boolean
  controls?: boolean
  modest?: boolean
  playsInline?: boolean
  onLoad?: () => void
  onError?: () => void
}

export function OptimizedVideo({
  videoId,
  title = 'Video',
  className = '',
  autoplay = false,
  muted = false,
  loop = false,
  controls = true,
  modest = false,
  playsInline = false,
  onLoad,
  onError
}: OptimizedVideoProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)
  const [isInView, setIsInView] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  // Build YouTube URL with parameters
  const buildYouTubeUrl = () => {
    const params = new URLSearchParams({
      autoplay: autoplay ? '1' : '0',
      mute: muted ? '1' : '0',
      loop: loop ? '1' : '0',
      controls: controls ? '1' : '0',
      modestbranding: modest ? '1' : '0',
      rel: '0',
      iv_load_policy: '3',
      disablekb: autoplay ? '1' : '0',
      fs: controls ? '1' : '0',
      cc_load_policy: '0',
      playsinline: playsInline ? '1' : '0',
      enablejsapi: '1'
    })

    if (loop) {
      params.set('playlist', videoId)
    }

    return `https://www.youtube.com/embed/${videoId}?${params.toString()}`
  }

  // Intersection Observer for lazy loading
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleLoad = () => {
    setIsLoading(false)
    setHasError(false)
    onLoad?.()
  }

  const handleError = () => {
    setIsLoading(false)
    setHasError(true)
    onError?.()
  }

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
    >
      {/* Loading State */}
      {isLoading && (
        <div className="absolute inset-0 bg-black flex items-center justify-center z-10">
          <div className="text-center">
            <div className="w-12 h-12 border-2 border-white/30 border-t-white rounded-full animate-spin mx-auto mb-4" />
            <p className="text-white/70 text-sm">Loading video...</p>
          </div>
        </div>
      )}

      {/* Error State */}
      {hasError && (
        <div className="absolute inset-0 bg-black flex items-center justify-center z-10">
          <div className="text-center text-white/70">
            <svg className="w-12 h-12 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
            </svg>
            <p>Video unavailable</p>
          </div>
        </div>
      )}

      {/* YouTube Iframe */}
      {isInView && (
        <iframe
          src={buildYouTubeUrl()}
          title={title}
          className="w-full h-full"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          onLoad={handleLoad}
          onError={handleError}
        />
      )}

      {/* Thumbnail Preview (before loading) */}
      {!isInView && (
        <div
          className="absolute inset-0 bg-cover bg-center cursor-pointer"
          style={{
            backgroundImage: `url(https://img.youtube.com/vi/${videoId}/maxresdefault.jpg)`
          }}
          onClick={() => setIsInView(true)}
        >
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors">
              <div className="w-0 h-0 border-l-[16px] border-l-white border-y-[12px] border-y-transparent ml-1" />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

// Component for video backgrounds
interface VideoBackgroundProps {
  videoId: string
  className?: string
  overlay?: boolean
  overlayOpacity?: number
  children?: React.ReactNode
}

export function VideoBackground({
  videoId,
  className = '',
  overlay = true,
  overlayOpacity = 0.5,
  children
}: VideoBackgroundProps) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Video Container */}
      <div className="absolute inset-0">
        <OptimizedVideo
          videoId={videoId}
          autoplay={true}
          muted={true}
          loop={true}
          controls={false}
          modest={true}
          playsInline={true}
          className="w-[300%] h-[300%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:w-[150%] md:h-[150%]"
        />
      </div>

      {/* Overlay */}
      {overlay && (
        <div
          className="absolute inset-0 bg-black z-10"
          style={{ opacity: overlayOpacity }}
        />
      )}

      {/* Content */}
      <div className="relative z-20">
        {children}
      </div>
    </div>
  )
}

// Utility to extract video ID from YouTube URL
export function extractVideoId(url: string): string | null {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
  const match = url.match(regExp)
  return match && match[2].length === 11 ? match[2] : null
}
