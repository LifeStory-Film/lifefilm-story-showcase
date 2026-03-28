'use client'

import { useState } from 'react'
import { PrimaryCTA } from './PrimaryCTA'

interface FormData {
  weddingDate: string
  email: string
  firstName: string
  lastName: string
  phone: string
  venue: string
  message: string
}

interface FormErrors {
  [key: string]: string
}

export function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    weddingDate: '',
    email: '',
    firstName: '',
    lastName: '',
    phone: '',
    venue: '',
    message: '',
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isExpanded, setIsExpanded] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.weddingDate.trim()) {
      newErrors.weddingDate = 'Wedding date is required'
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    // If user hasn't expanded the form yet, expand it so they can add more details
    if (!isExpanded) {
      setIsExpanded(true)
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (!response.ok) throw new Error('Failed to submit form')

      setSubmitStatus('success')
      setFormData({ weddingDate: '', email: '', firstName: '', lastName: '', phone: '', venue: '', message: '' })
      setIsExpanded(false)
    } catch {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: '' }))
  }

  return (
    <section id="contact" className="py-32 bg-gradient-diagonal">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[32px] font-bold text-[#BFA181] mb-4 font-['Playfair_Display'] leading-tight">
              Let's plan your cinematic wedding film
            </h2>
            <p className="text-lg text-[#178582] font-medium mb-6">
              We respond within 24 hours.
            </p>
            <p className="text-xl text-primary max-w-3xl mx-auto font-light">
              Ready to transform your wedding day into a cinematic masterpiece?
              Let's discuss how we can capture your unique love story.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Contact Information */}
            <div className="space-y-12">
              <div className="space-y-8">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-pale-gold/10 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-heading" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-heading font-semibold text-lg">Email</h3>
                    <p className="text-primary">info@lifestory.film</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-pale-gold/10 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-heading" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-heading font-semibold text-lg">Phone</h3>
                    <p className="text-primary">323.556.4362</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-pale-gold/10 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-heading" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-heading font-semibold text-lg">Based In</h3>
                    <p className="text-primary">Los Angeles, CA</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-pale-gold/10 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-heading" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-heading font-semibold text-lg">Response Time</h3>
                    <p className="text-primary">Within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="glass-luxury rounded-2xl p-8">
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                  <p className="text-green-400 text-center">
                    Thank you! Your inquiry has been sent. We'll get back to you within 24 hours.
                  </p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
                  <p className="text-red-400 text-center">
                    There was an error sending your inquiry. Please try again or contact us directly.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Always-visible: Wedding Date + Email */}
                <div>
                  <input
                    type="date"
                    value={formData.weddingDate}
                    onChange={(e) => handleInputChange('weddingDate', e.target.value)}
                    className="w-full bg-transparent border border-[#002349] rounded-lg px-4 py-3 text-primary placeholder-gray-400 focus:border-[#178582] focus:outline-none transition-colors"
                  />
                  {errors.weddingDate && <p className="text-red-400 text-sm mt-1">{errors.weddingDate}</p>}
                  <p className="text-gray-400 text-xs mt-1 ml-1">Wedding date *</p>
                </div>

                <div>
                  <input
                    type="email"
                    placeholder="Your email address *"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="w-full bg-transparent border border-[#002349] rounded-lg px-4 py-3 text-primary placeholder-gray-400 focus:border-[#178582] focus:outline-none transition-colors"
                  />
                  {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
                </div>

                {/* Expandable full form */}
                {isExpanded && (
                  <div className="space-y-4 border-t border-[#002349]/40 pt-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="First Name"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange('firstName', e.target.value)}
                        className="w-full bg-transparent border border-[#002349] rounded-lg px-4 py-3 text-primary placeholder-gray-400 focus:border-[#178582] focus:outline-none transition-colors"
                      />
                      <input
                        type="text"
                        placeholder="Last Name"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange('lastName', e.target.value)}
                        className="w-full bg-transparent border border-[#002349] rounded-lg px-4 py-3 text-primary placeholder-gray-400 focus:border-[#178582] focus:outline-none transition-colors"
                      />
                    </div>
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="w-full bg-transparent border border-[#002349] rounded-lg px-4 py-3 text-primary placeholder-gray-400 focus:border-[#178582] focus:outline-none transition-colors"
                    />
                    <input
                      type="text"
                      placeholder="Wedding Venue"
                      value={formData.venue}
                      onChange={(e) => handleInputChange('venue', e.target.value)}
                      className="w-full bg-transparent border border-[#002349] rounded-lg px-4 py-3 text-primary placeholder-gray-400 focus:border-[#178582] focus:outline-none transition-colors"
                    />
                    <textarea
                      placeholder="Tell us about your vision..."
                      rows={4}
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      className="w-full bg-transparent border border-[#002349] rounded-lg px-4 py-3 text-primary placeholder-gray-400 focus:border-[#178582] focus:outline-none transition-colors resize-none"
                    />
                  </div>
                )}

                <div className="space-y-4 pt-2">
                  <PrimaryCTA
                    variant="primary"
                    type="submit"
                    disabled={isSubmitting}
                    loading={isSubmitting}
                    className="w-full"
                  >
                    {isSubmitting
                      ? 'Sending…'
                      : isExpanded
                      ? 'Send My Inquiry'
                      : 'Check My Date'}
                  </PrimaryCTA>

                  {!isExpanded && (
                    <button
                      type="button"
                      onClick={() => setIsExpanded(true)}
                      className="w-full text-sm text-gray-400 hover:text-[#BFA181] transition-colors text-center"
                    >
                      Add more details (venue, message, phone) →
                    </button>
                  )}

                  <p className="text-sm text-[#EAE7DD] text-center leading-relaxed">
                    We respect your privacy and will never share your information with third parties.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
