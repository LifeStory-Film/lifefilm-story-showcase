'use client'

import { useState, useEffect, useRef } from 'react'

interface OptimizedImageProps {
  src: string
  alt: string
  className?: string
  fallbackSrc?: string
  priority?: boolean
  onLoad?: () => void
  onError?: () => void
  style?: React.CSSProperties
}

export function OptimizedImage({
  src,
  alt,
  className = '',
  fallbackSrc,
  priority = false,
  onLoad,
  onError,
  style
}: OptimizedImageProps) {
  const [currentSrc, setCurrentSrc] = useState(src)
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)
  const [isInView, setIsInView] = useState(priority)
  const imgRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (priority) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    if (imgRef.current) {
      observer.observe(imgRef.current)
    }

    return () => observer.disconnect()
  }, [priority])

  const handleLoad = () => {
    setIsLoading(false)
    setHasError(false)
    onLoad?.()
  }

  const handleError = () => {
    setIsLoading(false)
    setHasError(true)
    if (fallbackSrc && currentSrc !== fallbackSrc) {
      setCurrentSrc(fallbackSrc)
      setHasError(false)
      setIsLoading(true)
    }
    onError?.()
  }

  return (
    <div ref={imgRef} className={`relative overflow-hidden ${className}`} style={style}>
      {/* Loading/Error Placeholder */}
      {(isLoading || hasError) && (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
          {isLoading && !hasError ? (
            <div className="animate-pulse flex items-center justify-center">
              <div className="w-8 h-8 border-2 border-gold/30 border-t-gold rounded-full animate-spin" />
            </div>
          ) : (
            <div className="text-gray-500 text-sm text-center p-4">
              <svg className="w-8 h-8 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
              </svg>
              Image unavailable
            </div>
          )}
        </div>
      )}

      {/* Actual Image - Only render when in view */}
      {isInView && (
        <img
          src={currentSrc}
          alt={alt}
          className={`w-full h-full object-cover transition-opacity duration-500 ${
            isLoading || hasError ? 'opacity-0' : 'opacity-100'
          }`}
          onLoad={handleLoad}
          onError={handleError}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
        />
      )}
    </div>
  )
}

// Hook for preloading critical images
export function useImagePreload(sources: string[]) {
  useEffect(() => {
    sources.forEach(src => {
      const link = document.createElement('link')
      link.rel = 'preload'
      link.as = 'image'
      link.href = src
      document.head.appendChild(link)
    })
  }, [sources])
}

// Component for optimized background images
interface OptimizedBackgroundProps {
  src: string
  className?: string
  children?: React.ReactNode
  fallbackSrc?: string
  overlay?: boolean
  overlayOpacity?: number
}

export function OptimizedBackground({
  src,
  className = '',
  children,
  fallbackSrc,
  overlay = false,
  overlayOpacity = 0.5
}: OptimizedBackgroundProps) {
  const [backgroundImage, setBackgroundImage] = useState<string>('')
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const img = new Image()
    img.onload = () => {
      setBackgroundImage(`url('${src}')`)
      setIsLoaded(true)
    }
    img.onerror = () => {
      if (fallbackSrc) {
        img.src = fallbackSrc
      }
    }
    img.src = src
  }, [src, fallbackSrc])

  return (
    <div
      className={`relative ${className}`}
      style={{
        backgroundImage: isLoaded ? backgroundImage : undefined,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Loading state */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 animate-pulse" />
      )}

      {/* Overlay */}
      {overlay && isLoaded && (
        <div
          className="absolute inset-0 bg-black"
          style={{ opacity: overlayOpacity }}
        />
      )}

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}
