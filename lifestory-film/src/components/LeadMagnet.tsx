'use client'

import { useState } from 'react'
import { AnimatedSection } from './AnimatedSection'

// Pelican Hill film — Ryan & Victoria
const PELICAN_HILL_VIDEO_URL = 'https://www.youtube.com/watch?v=cp3PmoI9nio'

export function LeadMagnet() {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email address.')
      return
    }
    setError('')
    setIsSubmitting(true)

    // Brief pause for UX, then redirect to the film
    setTimeout(() => {
      setSubmitted(true)
      setIsSubmitting(false)
      window.location.href = PELICAN_HILL_VIDEO_URL
    }, 800)
  }

  return (
    <section className="py-24 bg-[#0f0e0c]">
      <div className="container mx-auto px-6">
        <AnimatedSection direction="fade">
          <div className="max-w-2xl mx-auto text-center">
            {/* Film thumbnail preview */}
            <div className="relative mb-8 rounded-xl overflow-hidden shadow-2xl">
              <img
                src="https://img.youtube.com/vi/cp3PmoI9nio/maxresdefault.jpg"
                alt="Ryan & Victoria — Pelican Hill Wedding Film"
                className="w-full object-cover"
                style={{ maxHeight: '300px' }}
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm border border-white/40 flex items-center justify-center">
                  <svg className="w-7 h-7 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
              <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-sm rounded-full px-3 py-1">
                <span className="text-white/90 text-xs font-medium tracking-wide">Ryan & Victoria · Pelican Hill</span>
              </div>
            </div>

            {submitted ? (
              <div className="py-8">
                <p
                  className="font-extrabold text-white mb-3"
                  style={{ fontSize: 'clamp(24px, 3vw, 36px)', letterSpacing: '-0.02em' }}
                >
                  Check your inbox — your film is on its way.
                </p>
              </div>
            ) : (
              <>
                <h2
                  className="font-extrabold tracking-tight leading-[0.95] text-white mb-5"
                  style={{ fontSize: 'clamp(28px, 4vw, 48px)', letterSpacing: '-0.02em' }}
                >
                  See the film before you book.
                </h2>
                <p className="text-white/55 font-light mb-8" style={{ fontSize: 'clamp(15px, 1.3vw, 17px)' }}>
                  Watch our full Pelican Hill wedding film — enter your email and we'll send it to you directly.
                </p>

                <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => { setEmail(e.target.value); setError('') }}
                      placeholder="Your email address"
                      required
                      className="flex-1 px-6 py-4 rounded-full bg-white/10 border-2 border-white/30 text-white placeholder-white/60 focus:outline-none focus:border-[#BFA181] transition-colors"
                    />
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-8 py-4 rounded-full font-semibold transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed whitespace-nowrap"
                      style={{ backgroundColor: '#BFA181', color: '#0f0e0c' }}
                      onMouseEnter={e => { if (!isSubmitting) e.currentTarget.style.backgroundColor = '#d4b896' }}
                      onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#BFA181' }}
                    >
                      {isSubmitting ? 'Opening film…' : 'Watch the Film →'}
                    </button>
                  </div>
                  {error && <p className="text-red-400 text-sm mt-3">{error}</p>}
                  <p className="text-white/35 text-sm mt-4">
                    We respect your privacy. Unsubscribe anytime.
                  </p>
                </form>
              </>
            )}

            <div className="mt-8 pt-8 border-t border-white/20">
              <p className="text-white/40 text-sm">
                Ready to book?{' '}
                <button
                  onClick={() => {
                    const el = document.getElementById('contact')
                    if (el) el.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="text-[#BFA181] underline hover:text-[#d4b896] transition-colors"
                >
                  Check your date availability →
                </button>
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
