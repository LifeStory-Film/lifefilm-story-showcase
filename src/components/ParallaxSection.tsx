'use client'

import { useEffect, useRef, ReactNode } from 'react'

interface ParallaxSectionProps {
  children?: ReactNode
  speed?: number
  direction?: 'up' | 'down' | 'left' | 'right'
  className?: string
  offset?: number
}

export function ParallaxSection({
  children,
  speed = 0.5,
  direction = 'up',
  className = '',
  offset = 0
}: ParallaxSectionProps) {
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const handleScroll = () => {
      const rect = element.getBoundingClientRect()
      const scrolled = window.pageYOffset
      const rate = scrolled * -speed

      let transform = ''

      switch (direction) {
        case 'up':
          transform = `translateY(${rate + offset}px)`
          break
        case 'down':
          transform = `translateY(${-rate + offset}px)`
          break
        case 'left':
          transform = `translateX(${rate + offset}px)`
          break
        case 'right':
          transform = `translateX(${-rate + offset}px)`
          break
      }

      element.style.transform = transform
    }

    // Use passive listener for better performance
    window.addEventListener('scroll', handleScroll, { passive: true })

    // Initial call
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [speed, direction, offset])

  return (
    <div
      ref={elementRef}
      className={`parallax-element will-change-transform ${className}`}
    >
      {children}
    </div>
  )
}

interface ParallaxContainerProps {
  children: ReactNode
  className?: string
}

export function ParallaxContainer({ children, className = '' }: ParallaxContainerProps) {
  return (
    <div className={`parallax-container relative overflow-hidden ${className}`}>
      {children}
    </div>
  )
}

// Advanced parallax hook for more complex animations
export function useParallax(speed: number = 0.5) {
  const elementRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const handleScroll = () => {
      const scrolled = window.pageYOffset
      const rect = element.getBoundingClientRect()
      const elementTop = rect.top + scrolled
      const elementHeight = rect.height
      const windowHeight = window.innerHeight

      // Only animate when element is in viewport
      if (rect.top < windowHeight && rect.bottom > 0) {
        const yPos = -(scrolled - elementTop) * speed
        element.style.transform = `translateY(${yPos}px)`
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Initial call

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [speed])

  return elementRef
}
