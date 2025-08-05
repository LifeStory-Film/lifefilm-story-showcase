'use client'

import { useEffect } from 'react'

export function DeferredScripts() {
  useEffect(() => {
    // Defer non-critical scripts after the page has loaded
    const loadDeferredScripts = () => {
      // Load Google Analytics if needed
      if (typeof window !== 'undefined' && process.env.NODE_ENV === 'production') {
        // Example: Load Google Analytics script
        // const gaScript = document.createElement('script')
        // gaScript.src = 'https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID'
        // gaScript.async = true
        // gaScript.defer = true
        // document.head.appendChild(gaScript)
      }

      // Load other non-critical scripts
      // Social media widgets, analytics, etc.
    }

    // Wait for the page to be fully loaded before loading non-critical scripts
    if (document.readyState === 'complete') {
      loadDeferredScripts()
    } else {
      window.addEventListener('load', loadDeferredScripts)
      return () => window.removeEventListener('load', loadDeferredScripts)
    }
  }, [])

  return null
}

// Performance monitoring utilities
export function usePerformanceOptimization() {
  useEffect(() => {
    if (typeof window === 'undefined') return

    // Preload critical resources
    const preloadCriticalResources = () => {
      // Preload hero images
      const heroImages = [
        'https://img.youtube.com/vi/YzK1dHhkZTU/maxresdefault.jpg'
      ]

      heroImages.forEach(src => {
        const link = document.createElement('link')
        link.rel = 'preload'
        link.as = 'image'
        link.href = src
        document.head.appendChild(link)
      })

      // Preconnect to external domains
      const preconnectDomains = [
        'https://fonts.googleapis.com',
        'https://fonts.gstatic.com',
        'https://www.youtube.com',
        'https://img.youtube.com',
        'https://images.unsplash.com'
      ]

      preconnectDomains.forEach(domain => {
        const link = document.createElement('link')
        link.rel = 'preconnect'
        link.href = domain
        link.crossOrigin = 'anonymous'
        document.head.appendChild(link)
      })
    }

    // Enable prefetch for future navigation
    const enablePrefetch = () => {
      const criticalPages = [
        '/pricing',
        '/portfolio',
        '/contact'
      ]

      criticalPages.forEach(page => {
        const link = document.createElement('link')
        link.rel = 'prefetch'
        link.href = page
        document.head.appendChild(link)
      })
    }

    // Run optimizations after a short delay
    const timeoutId = setTimeout(() => {
      preloadCriticalResources()
      enablePrefetch()
    }, 100)

    return () => clearTimeout(timeoutId)
  }, [])
}

// Lazy loading utility for components
export function useLazyLoading(threshold = 0.1) {
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const element = entry.target as HTMLElement

            // Load lazy images
            if (element.dataset.src) {
              const img = element as HTMLImageElement
              img.src = element.dataset.src
              img.removeAttribute('data-src')
            }

            // Load lazy background images
            if (element.dataset.bg) {
              element.style.backgroundImage = `url(${element.dataset.bg})`
              element.removeAttribute('data-bg')
            }

            observer.unobserve(element)
          }
        })
      },
      { threshold, rootMargin: '50px' }
    )

    // Observe all lazy elements
    const lazyElements = document.querySelectorAll('[data-src], [data-bg]')
    lazyElements.forEach(el => observer.observe(el))

    return () => {
      lazyElements.forEach(el => observer.unobserve(el))
    }
  }, [threshold])
}

// Critical CSS inline utility
export function CriticalCSS() {
  const criticalStyles = `
    /* Critical above-the-fold styles */
    .hero-section { min-height: 100vh; }
    .hero-text { font-size: clamp(3.5rem, 10vw, 10rem); }
    .primary-cta-button {
      background: #4F0341;
      color: #EAE7DD;
      transition: transform 0.3s ease, filter 0.3s ease;
    }
    .primary-cta-button:hover {
      transform: scale(1.03);
      filter: brightness(1.1);
    }
  `

  return (
    <style
      dangerouslySetInnerHTML={{ __html: criticalStyles }}
      data-purpose="critical-css"
    />
  )
}
