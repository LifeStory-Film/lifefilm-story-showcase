'use client'

import { useEffect, useState, useRef } from 'react'

export function LuxuryCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isClicking, setIsClicking] = useState(false)
  const [cursorVariant, setCursorVariant] = useState('default')

  const cursorRef = useRef<HTMLDivElement>(null)
  const cursorDotRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseDown = () => setIsClicking(true)
    const handleMouseUp = () => setIsClicking(false)

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement

      if (target.matches('a, button, [data-cursor="pointer"]')) {
        setIsHovering(true)
        setCursorVariant('pointer')
      } else if (target.matches('input, textarea, [data-cursor="text"]')) {
        setIsHovering(true)
        setCursorVariant('text')
      } else if (target.matches('[data-cursor="view"]')) {
        setIsHovering(true)
        setCursorVariant('view')
      } else if (target.matches('[data-cursor="play"]')) {
        setIsHovering(true)
        setCursorVariant('play')
      } else {
        setIsHovering(false)
        setCursorVariant('default')
      }
    }

    const handleMouseLeave = () => {
      setIsHovering(false)
      setCursorVariant('default')
    }

    // Add event listeners
    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mousedown', handleMouseDown)
    document.addEventListener('mouseup', handleMouseUp)
    document.addEventListener('mouseover', handleMouseEnter)
    document.addEventListener('mouseout', handleMouseLeave)

    // Cleanup
    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mousedown', handleMouseDown)
      document.removeEventListener('mouseup', handleMouseUp)
      document.removeEventListener('mouseover', handleMouseEnter)
      document.removeEventListener('mouseout', handleMouseLeave)
    }
  }, [])

  // Smooth cursor following with lag effect
  useEffect(() => {
    const updateCursor = () => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${mousePosition.x}px`
        cursorRef.current.style.top = `${mousePosition.y}px`
      }

      if (cursorDotRef.current) {
        // Dot follows more closely
        cursorDotRef.current.style.left = `${mousePosition.x}px`
        cursorDotRef.current.style.top = `${mousePosition.y}px`
      }
    }

    requestAnimationFrame(updateCursor)
  }, [mousePosition])

  const getCursorClasses = () => {
    let classes = 'cursor fixed pointer-events-none z-[9999] rounded-full transition-all duration-300 ease-out'

    if (isClicking) {
      classes += ' scale-75'
    } else if (isHovering) {
      classes += ' cursor-hover'
    }

    switch (cursorVariant) {
      case 'pointer':
        classes += ' w-12 h-12 border-2 border-[hsl(var(--luxury-gold))] bg-[hsl(var(--luxury-gold)/0.1)]'
        break
      case 'text':
        classes += ' w-1 h-6 bg-[hsl(var(--luxury-gold))] rounded-none'
        break
      case 'view':
        classes += ' w-16 h-16 border-2 border-[hsl(var(--luxury-gold))] bg-[hsl(var(--luxury-gold)/0.1)]'
        break
      case 'play':
        classes += ' w-14 h-14 border-2 border-[hsl(var(--luxury-gold))] bg-[hsl(var(--luxury-gold)/0.2)]'
        break
      default:
        classes += ' w-5 h-5 bg-[hsl(var(--luxury-gold)/0.8)] backdrop-blur-sm mix-blend-difference'
    }

    return classes
  }

  const renderCursorContent = () => {
    switch (cursorVariant) {
      case 'view':
        return (
          <div className="flex items-center justify-center w-full h-full">
            <span className="text-[hsl(var(--luxury-gold))] text-xs font-medium">VIEW</span>
          </div>
        )
      case 'play':
        return (
          <div className="flex items-center justify-center w-full h-full">
            <div className="w-0 h-0 border-l-[6px] border-l-[hsl(var(--luxury-gold))] border-y-[4px] border-y-transparent ml-0.5"></div>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <>
      {/* Main cursor */}
      <div
        ref={cursorRef}
        className={getCursorClasses()}
        style={{
          transform: 'translate(-50%, -50%)',
        }}
      >
        {renderCursorContent()}
      </div>

      {/* Cursor dot (for default state) */}
      {cursorVariant === 'default' && (
        <div
          ref={cursorDotRef}
          className="cursor-dot fixed pointer-events-none z-[10000] w-1 h-1 bg-[hsl(var(--luxury-pearl))] rounded-full transition-all duration-75 ease-out"
          style={{
            transform: 'translate(-50%, -50%)',
          }}
        />
      )}

      {/* Trailing effect for enhanced luxury feel */}
      <div
        className="fixed pointer-events-none z-[9998] w-8 h-8 border border-[hsl(var(--luxury-gold)/0.3)] rounded-full transition-all duration-500 ease-out"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: 'translate(-50%, -50%)',
          opacity: isHovering ? 0.6 : 0.3,
          scale: isHovering ? 1.5 : 1,
        }}
      />
    </>
  )
}

// Hook for adding cursor data attributes to elements
export const useLuxuryCursor = (variant: 'pointer' | 'text' | 'view' | 'play' = 'pointer') => {
  return {
    'data-cursor': variant,
  }
}
