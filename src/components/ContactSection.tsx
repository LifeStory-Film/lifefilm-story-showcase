'use client'

import { useState } from 'react'
import { PrimaryCTA } from './PrimaryCTA'

interface FormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  weddingDate: string
  venue: string
  message: string
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
    message: ''
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
      // Submit form to API
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

      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        weddingDate: '',
        venue: '',
        message: ''
      })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (field: keyof FormData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }))
    }
  }

  const handleCheckboxChange = (field: keyof FormData, checked: boolean) => {
    setFormData(prev => ({ ...prev, [field]: checked }))
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
                    Thank you! Your inquiry has been sent successfully. We'll get back to you within 24 hours.
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
                        className="w-full bg-transparent border border-[#002349] rounded-lg px-4 py-3 text-primary placeholder-gray-400 focus:border-[#178582] focus:outline-none transition-colors"
                      />
                      {errors.firstName && <p className="text-red-400 text-sm mt-1">{errors.firstName}</p>}
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="Last Name *"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange('lastName', e.target.value)}
                        className="w-full bg-transparent border border-[#002349] rounded-lg px-4 py-3 text-primary placeholder-gray-400 focus:border-[#178582] focus:outline-none transition-colors"
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
                      className="w-full bg-transparent border border-[#002349] rounded-lg px-4 py-3 text-primary placeholder-gray-400 focus:border-[#178582] focus:outline-none transition-colors"
                    />
                    {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="w-full bg-transparent border border-[#002349] rounded-lg px-4 py-3 text-primary placeholder-gray-400 focus:border-[#178582] focus:outline-none transition-colors"
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
                        className="w-full bg-transparent border border-[#002349] rounded-lg px-4 py-3 text-primary placeholder-gray-400 focus:border-[#178582] focus:outline-none transition-colors"
                      />
                      {errors.weddingDate && <p className="text-red-400 text-sm mt-1">{errors.weddingDate}</p>}
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="Wedding Venue"
                        value={formData.venue}
                        onChange={(e) => handleInputChange('venue', e.target.value)}
                        className="w-full bg-transparent border border-[#002349] rounded-lg px-4 py-3 text-primary placeholder-gray-400 focus:border-[#178582] focus:outline-none transition-colors"
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
                      className="w-full bg-transparent border border-[#002349] rounded-lg px-4 py-3 text-primary placeholder-gray-400 focus:border-[#178582] focus:outline-none transition-colors resize-none"
                    />
                    {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
                  </div>
                </div>



                <div className="space-y-4">
                  <PrimaryCTA
                    variant="primary"
                    type="submit"
                    disabled={isSubmitting}
                    loading={isSubmitting}
                    className="w-full"
                  >
                    {isSubmitting ? 'Sending My Inquiry...' : 'Send My Inquiry'}
                  </PrimaryCTA>

                  <p className="text-sm text-[#EAE7DD] text-center leading-relaxed">
                    By submitting this form, you agree to our privacy policy. We respect your privacy and will never share your information with third parties. Your inquiry will be handled with complete confidentiality.
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
