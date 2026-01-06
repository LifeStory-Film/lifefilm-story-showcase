'use client'

import { useState, useEffect, useRef } from 'react'

interface OptimizedYouTubeEmbedProps {
  videoId: string
  title?: string
  autoplay?: boolean
  muted?: boolean
  loop?: boolean
  controls?: boolean
  className?: string
  placeholderQuality?: 'default' | 'hq' | 'mq' | 'sd' | 'maxres'
}

export function OptimizedYouTubeEmbed({
  videoId,
  title = 'YouTube Video',
  autoplay = true,
  muted = true,
  loop = true,
  controls = false,
  className = '',
  placeholderQuality = 'maxres'
}: OptimizedYouTubeEmbedProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isInView, setIsInView] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  // Intersection Observer for lazy loading
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1, rootMargin: '200px' }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleLoad = () => {
    setIsLoaded(true)
  }

  const embedUrl = `https://www.youtube.com/embed/${videoId}?${new URLSearchParams({
    autoplay: autoplay ? '1' : '0',
    mute: muted ? '1' : '0',
    loop: loop ? '1' : '0',
    playlist: loop ? videoId : '',
    controls: controls ? '1' : '0',
    modestbranding: '1',
    showinfo: '0',
    rel: '0',
    disablekb: '1',
    playsinline: '1',
    iv_load_policy: '3',
    enablejsapi: '1'
  }).toString()}`

  const thumbnailUrl = `https://i.ytimg.com/vi/${videoId}/${placeholderQuality}default.jpg`

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full overflow-hidden ${className}`}
    >
      {/* Thumbnail Placeholder */}
      {!isLoaded && isInView && (
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-pulse"
          style={{
            backgroundImage: `url(${thumbnailUrl})`,
            filter: 'blur(10px)',
            transform: 'scale(1.1)'
          }}
        />
      )}

      {/* Loading Spinner */}
      {!isLoaded && isInView && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm">
          <div className="w-16 h-16 border-4 border-white/30 border-t-white rounded-full animate-spin" />
        </div>
      )}

      {/* YouTube Iframe - Only load when in view */}
      {isInView && (
        <iframe
          className={`absolute top-1/2 left-1/2 w-[300%] h-[300%] -translate-x-1/2 -translate-y-1/2 md:w-[150%] md:h-[150%] transition-opacity duration-700 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          src={embedUrl}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          onLoad={handleLoad}
        />
      )}

      {/* Fallback background when not in view */}
      {!isInView && (
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${thumbnailUrl})`,
            filter: 'brightness(0.6)'
          }}
        />
      )}
    </div>
  )
}
