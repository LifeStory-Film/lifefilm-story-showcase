'use client'

import { useState } from 'react'

/**
 * Compact email capture used inside the in-article conversion block.
 * Posts to /api/subscribe (real capture) and opens the flagship film.
 */
export default function InlineEmailCapture({ source = 'blog-cta' }: { source?: string }) {
  const [email, setEmail] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [done, setDone] = useState(false)

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!/\S+@\S+\.\S+/.test(email)) return
    setSubmitting(true)
    try {
      await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source }),
      })
      const w = window as unknown as { fbq?: (...a: unknown[]) => void; gtag?: (...a: unknown[]) => void }
      w.fbq?.('track', 'Lead', { content_name: source })
      w.gtag?.('event', 'generate_lead', { method: source })
    } catch {
      /* noop */
    }
    setDone(true)
    setSubmitting(false)
    window.open('https://www.youtube.com/watch?v=cp3PmoI9nio', '_blank', 'noopener')
  }

  if (done) {
    return (
      <p className="text-sm mt-1" style={{ color: 'var(--t-text-secondary)' }}>
        Thanks — enjoy the film. We&apos;ll be in touch.
      </p>
    )
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col sm:flex-row gap-2 mt-1">
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your email — watch our full film"
        className="flex-1 px-4 py-2.5 rounded-full text-sm"
        style={{ backgroundColor: 'var(--t-bg-primary)', border: '1px solid var(--t-border-strong)', color: 'var(--t-text-primary)' }}
      />
      <button
        type="submit"
        disabled={submitting}
        className="px-5 py-2.5 rounded-full text-sm font-semibold transition-transform duration-300 hover:scale-105 disabled:opacity-60"
        style={{ backgroundColor: 'var(--t-accent)', color: '#0f0e0c' }}
      >
        {submitting ? 'Sending…' : 'Watch the film →'}
      </button>
    </form>
  )
}
