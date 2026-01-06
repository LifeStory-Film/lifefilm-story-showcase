'use client'

import { useState } from 'react'
import { AnimatedSection } from './AnimatedSection'

export function LeadMagnet() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true)
      setIsSubmitting(false)
      setEmail('')
    }, 1000)
  }

  if (isSubmitted) {
    return (
      <section className="py-24 bg-gradient-to-br from-[#002349] to-[#003866]">
        <div className="container mx-auto px-6">
          <AnimatedSection direction="fade">
            <div className="max-w-2xl mx-auto text-center bg-white/10 backdrop-blur-sm rounded-2xl p-12 border border-white/20">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Check Your Email!</h3>
              <p className="text-white/90 text-lg">
                We've sent the Wedding Film Style Guide to your inbox. Enjoy exploring our cinematic approach!
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    )
  }

  return (
    <section className="py-24 bg-gradient-to-br from-[#002349] to-[#003866]">
      <div className="container mx-auto px-6">
        <AnimatedSection direction="fade">
          <div className="max-w-2xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-[#BFA181] rounded-full mb-6">
              <svg className="w-10 h-10 text-[#002349]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Not Ready to Book Yet?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Download our free Wedding Film Style Guide to see our cinematic approach, coverage options, and what makes our films timeless.
            </p>

            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 px-6 py-4 rounded-full bg-white/10 border-2 border-white/30 text-white placeholder-white/60 focus:outline-none focus:border-[#BFA181] transition-colors"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 py-4 bg-[#BFA181] text-[#002349] rounded-full font-semibold hover:bg-[#957C3D] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
                >
                  {isSubmitting ? 'Sending...' : 'Get Free Guide'}
                </button>
              </div>
              <p className="text-white/70 text-sm mt-4">
                We respect your privacy. Unsubscribe anytime.
              </p>
            </form>

            <div className="mt-8 pt-8 border-t border-white/20">
              <p className="text-white/80 text-sm">
                Or skip ahead and{' '}
                <button
                  onClick={() => {
                    const element = document.getElementById('contact')
                    if (element) element.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="text-[#BFA181] underline hover:text-[#957C3D] transition-colors"
                >
                  check your date availability
                </button>
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
