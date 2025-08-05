'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, ReactNode } from 'react'

// Simple smooth reveal animation
interface SmoothRevealProps {
  children: ReactNode
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade'
  delay?: number
  className?: string
}

export function SmoothReveal({
  children,
  direction = 'up',
  delay = 0,
  className = ''
}: SmoothRevealProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-10%' })

  const getInitial = () => {
    switch (direction) {
      case 'up': return { opacity: 0, y: 30 }
      case 'down': return { opacity: 0, y: -30 }
      case 'left': return { opacity: 0, x: 30 }
      case 'right': return { opacity: 0, x: -30 }
      default: return { opacity: 0, scale: 0.95 }
    }
  }

  return (
    <motion.div
      ref={ref}
      initial={getInitial()}
      animate={isInView ? { opacity: 1, y: 0, x: 0, scale: 1 } : getInitial()}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Hover animation wrapper
interface HoverAnimationProps {
  children: ReactNode
  scale?: number
  className?: string
}

export function HoverAnimation({ children, scale = 1.05, className = '' }: HoverAnimationProps) {
  return (
    <motion.div
      whileHover={{ scale }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.3 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Stagger container
interface StaggerContainerProps {
  children: ReactNode
  className?: string
}

export function StaggerContainer({ children, className = '' }: StaggerContainerProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-10%' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Stagger item
export function StaggerItem({ children, className = '' }: { children: ReactNode, className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
