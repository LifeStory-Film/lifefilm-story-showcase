'use client'

import { useEffect } from 'react'

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void
    gtag?: (...args: unknown[]) => void
  }
}

/**
 * Centralized conversion tracking. Uses event delegation so every phone,
 * WhatsApp, SMS, and email link on the site fires GA4 + Meta events without
 * having to touch each button. Mounted once in the root layout.
 */
export default function ConversionTracking() {
  useEffect(() => {
    function fire(action: string, params: Record<string, unknown>) {
      try {
        if (window.gtag) window.gtag('event', action, params)
        if (window.fbq) window.fbq('trackCustom', action, params)
      } catch {
        /* never let tracking break navigation */
      }
    }

    function onClick(e: MouseEvent) {
      const target = e.target as HTMLElement | null
      const link = target?.closest('a')
      if (!link) return
      const href = link.getAttribute('href') || ''

      if (href.startsWith('tel:')) {
        fire('contact_phone_click', { method: 'phone', link_url: href })
        if (window.fbq) window.fbq('track', 'Contact', { method: 'phone' })
      } else if (href.includes('wa.me') || href.includes('api.whatsapp.com')) {
        fire('contact_whatsapp_click', { method: 'whatsapp', link_url: href })
        if (window.fbq) window.fbq('track', 'Contact', { method: 'whatsapp' })
      } else if (href.startsWith('sms:')) {
        fire('contact_sms_click', { method: 'sms', link_url: href })
        if (window.fbq) window.fbq('track', 'Contact', { method: 'sms' })
      } else if (href.startsWith('mailto:')) {
        fire('contact_email_click', { method: 'email', link_url: href })
      }
    }

    document.addEventListener('click', onClick, { capture: true })
    return () => document.removeEventListener('click', onClick, { capture: true })
  }, [])

  return null
}
