'use client'

import { useEffect, useRef, useState } from 'react'

export function StickyMobileBar() {
  const [visible, setVisible] = useState(false)
  const [hiddenByContact, setHiddenByContact] = useState(false)

  useEffect(() => {
    // Show bar after user scrolls past hero (~100px)
    const onScroll = () => {
      setVisible(window.scrollY > 100)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    // Hide bar when the contact section is visible
    const contactEl = document.getElementById('contact')
    if (!contactEl) return

    const observer = new IntersectionObserver(
      ([entry]) => setHiddenByContact(entry.isIntersecting),
      { threshold: 0.1 }
    )
    observer.observe(contactEl)
    return () => observer.disconnect()
  }, [])

  const scrollToContact = () => {
    const el = document.getElementById('contact')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const show = visible && !hiddenByContact

  return (
    <div
      className={`
        fixed bottom-0 left-0 right-0 z-50
        md:hidden
        transition-transform duration-300 ease-in-out
        ${show ? 'translate-y-0' : 'translate-y-full'}
      `}
      aria-hidden={!show}
    >
      {/* Safe-area padding for notch phones */}
      <div className="bg-black/90 backdrop-blur-md border-t border-white/10 px-4 pt-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))]">
        <button
          onClick={scrollToContact}
          className="w-full bg-[#BFA181] text-black py-4 rounded-full font-semibold text-base tracking-wide hover:bg-[#957C3D] transition-colors active:scale-95"
        >
          Check Availability
        </button>
      </div>
    </div>
  )
}
