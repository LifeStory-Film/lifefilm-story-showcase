'use client'

import { useState } from 'react'
import { PrimaryCTA } from './PrimaryCTA'

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void
  }
}

interface FormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  weddingDate: string
  venue: string
  message: string
  website: string // honeypot
}

interface FormErrors {
  [key: string]: string
}

export function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    weddingDate: '',
    venue: '',
    message: '',
    website: ''
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required'
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (!formData.weddingDate.trim()) {
      newErrors.weddingDate = 'Wedding date is required'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please tell us about your vision'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Failed to submit form')
      }

      setSubmitStatus('success')

      if (typeof window !== 'undefined' && window.fbq) {
        window.fbq('track', 'Lead')
      }

      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        weddingDate: '',
        venue: '',
        message: '',
        website: ''
      })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }))
    }
  }

  return (
    <section id="contact" className="py-32 bg-[#0f0e0c]">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#BFA181] text-[11px] tracking-widest uppercase mb-5 font-light">Get in Touch</p>
            <h2
              className="font-extrabold text-white leading-tight mb-4"
              style={{ fontSize: 'clamp(40px, 4.5vw, 56px)', letterSpacing: '-0.02em' }}
            >
              Let's Plan Your Wedding
            </h2>
            <p className="font-light text-white/55 max-w-[600px] mx-auto" style={{ fontSize: '18px' }}>
              We respond within 24 hours. Tell us about your day and we'll reach out to check availability.
            </p>
            <p className="mt-4" style={{ fontSize: '14px', color: '#BFA181', textAlign: 'center', marginBottom: '24px', fontWeight: 400 }}>
              Packages from $3,959 — 30-month payment plans available
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Contact Information */}
            <div className="space-y-12">
              <div className="space-y-8">
                <div>
                  <div className="text-white/30 text-[10px] tracking-[0.22em] uppercase mb-1 font-light">Email</div>
                  <div className="text-white font-medium">rick@lifestory.film</div>
                </div>

                <div>
                  <div className="text-white/30 text-[10px] tracking-[0.22em] uppercase mb-1 font-light">Phone</div>
                  <div className="text-white font-medium">323.556.4362</div>
                </div>

                <div>
                  <div className="text-white/30 text-[10px] tracking-[0.22em] uppercase mb-1 font-light">Based In</div>
                  <div className="text-white font-medium">California &amp; Worldwide</div>
                </div>

                <div>
                  <div className="text-white/30 text-[10px] tracking-[0.22em] uppercase mb-1 font-light">Response Time</div>
                  <div className="text-white font-medium">Within 24 hours</div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              {submitStatus === 'success' ? (
                <div className="flex flex-col items-center text-center py-8 gap-6 animate-fade-in" style={{ animation: 'fadeIn 0.5s ease-in-out' }}>
                  <style>{`@keyframes fadeIn { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: translateY(0); } }`}</style>
                  {/* Gold checkmark */}
                  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="32" cy="32" r="30" stroke="#BFA181" strokeWidth="2" fill="none" />
                    <path d="M18 33l10 10 18-20" stroke="#BFA181" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <div>
                    <h3 className="text-white font-extrabold mb-2" style={{ fontSize: '28px', letterSpacing: '-0.02em' }}>We got it — thank you.</h3>
                    <p className="text-white/55 font-light" style={{ fontSize: '16px' }}>
                      Expect a reply within 24 hours. In the meantime, here's one of our most watched films:
                    </p>
                  </div>
                  {/* Film thumbnail */}
                  <a
                    href="https://www.youtube.com/watch?v=cp3PmoI9nio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative w-full rounded-xl overflow-hidden group"
                    style={{ aspectRatio: '16/9', display: 'block' }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="https://img.youtube.com/vi/cp3PmoI9nio/maxresdefault.jpg"
                      alt="Ryan & Victoria — Pelican Hill Wedding Film"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center transition-opacity duration-300 group-hover:bg-black/20">
                      <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ backgroundColor: '#BFA181' }}>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="#0f0e0c" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6 4l12 6-12 6V4z" />
                        </svg>
                      </div>
                    </div>
                    <div className="absolute bottom-3 left-3 right-3 text-white text-sm font-light opacity-90">Ryan & Victoria — Pelican Hill</div>
                  </a>
                  <a
                    href="https://calendar.app.google/QSmtnnjfvghb5HtSA"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: '#BFA181', fontSize: '15px' }}
                    className="hover:opacity-80 transition-opacity"
                  >
                    Or schedule a call if you'd prefer to talk first →
                  </a>
                </div>
              ) : (
              <>
              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
                  <p className="text-red-400 text-center">
                    There was an error sending your inquiry. Please try again or contact us directly.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Contact Information Group */}
                <div className="space-y-6">
                  <h4 className="text-lg font-medium text-[#BFA181] border-b border-[#BFA181]/30 pb-2">
                    Contact Information
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <input
                        type="text"
                        placeholder="First Name *"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange('firstName', e.target.value)}
                        className="w-full bg-transparent border border-zinc-700 rounded-lg px-4 py-3 text-white/65 placeholder-gray-400 focus:border-[#BFA181] focus:outline-none transition-colors"
                      />
                      {errors.firstName && <p className="text-red-400 text-sm mt-1">{errors.firstName}</p>}
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="Last Name *"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange('lastName', e.target.value)}
                        className="w-full bg-transparent border border-zinc-700 rounded-lg px-4 py-3 text-white/65 placeholder-gray-400 focus:border-[#BFA181] focus:outline-none transition-colors"
                      />
                      {errors.lastName && <p className="text-red-400 text-sm mt-1">{errors.lastName}</p>}
                    </div>
                  </div>

                  <div>
                    <input
                      type="email"
                      placeholder="Email Address *"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="w-full bg-transparent border border-zinc-700 rounded-lg px-4 py-3 text-white/65 placeholder-gray-400 focus:border-[#BFA181] focus:outline-none transition-colors"
                    />
                    {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="w-full bg-transparent border border-zinc-700 rounded-lg px-4 py-3 text-white/65 placeholder-gray-400 focus:border-[#BFA181] focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Wedding Details Group */}
                <div className="space-y-6">
                  <h4 className="text-lg font-medium text-[#BFA181] border-b border-[#BFA181]/30 pb-2">
                    Wedding Details
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <input
                        type="date"
                        placeholder="Wedding Date *"
                        value={formData.weddingDate}
                        onChange={(e) => handleInputChange('weddingDate', e.target.value)}
                        className="w-full bg-transparent border border-zinc-700 rounded-lg px-4 py-3 text-white/65 placeholder-gray-400 focus:border-[#BFA181] focus:outline-none transition-colors"
                      />
                      {errors.weddingDate && <p className="text-red-400 text-sm mt-1">{errors.weddingDate}</p>}
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="Wedding Venue"
                        value={formData.venue}
                        onChange={(e) => handleInputChange('venue', e.target.value)}
                        className="w-full bg-transparent border border-zinc-700 rounded-lg px-4 py-3 text-white/65 placeholder-gray-400 focus:border-[#BFA181] focus:outline-none transition-colors"
                      />
                    </div>
                  </div>
                </div>

                {/* Vision Group */}
                <div className="space-y-6">
                  <h4 className="text-lg font-medium text-[#BFA181] border-b border-[#BFA181]/30 pb-2">
                    Your Vision
                  </h4>
                  <div>
                    <textarea
                      placeholder="Tell us about your vision... *"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      className="w-full bg-transparent border border-zinc-700 rounded-lg px-4 py-3 text-white/65 placeholder-gray-400 focus:border-[#BFA181] focus:outline-none transition-colors resize-none"
                    />
                    {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
                  </div>
                </div>

                {/* Honeypot — hidden from real users, bots fill it */}
                <div style={{ display: 'none' }} aria-hidden="true">
                  <input
                    type="text"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                    value={formData.website}
                    onChange={(e) => handleInputChange('website', e.target.value)}
                  />
                </div>

                <div className="space-y-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-12 px-6 rounded-full text-sm transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                    style={{ backgroundColor: '#BFA181', color: '#0f0e0c', fontWeight: 600 }}
                    onMouseEnter={e => { if (!isSubmitting) e.currentTarget.style.backgroundColor = '#d4b896' }}
                    onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#BFA181' }}
                  >
                    {isSubmitting ? 'Sending My Inquiry...' : 'Send My Inquiry'}
                  </button>

                  <div className="text-center">
                    <a
                      href="https://calendar.app.google/QSmtnnjfvghb5HtSA"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ fontSize: '14px', color: '#BFA181' }}
                      className="hover:opacity-80 transition-opacity"
                    >
                      Or schedule a 15-min call →
                    </a>
                  </div>

                  <p className="text-sm text-white/40 text-center leading-relaxed">
                    By submitting this form, you agree to our privacy policy. We respect your privacy and will never share your information with third parties. Your inquiry will be handled with complete confidentiality.
                  </p>
                </div>
              </form>
              </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
