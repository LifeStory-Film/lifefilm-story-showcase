'use client'

import { SmoothReveal } from './SimpleAnimations'

export function TrustSection() {
  const trustMetrics = [
    {
      id: 'couples',
      number: '1000+',
      label: 'Couples Served',
      description: 'Luxury weddings filmed',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      id: 'experience',
      number: '15+',
      label: 'Years Experience',
      description: 'Cinematic expertise',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      id: 'awards',
      number: '10+',
      label: 'Awards Won',
      description: 'Industry recognition',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      id: 'rating',
      number: '5.0',
      label: 'Star Rating',
      description: 'Average client rating',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      )
    },
    {
      id: 'referrals',
      number: '98%',
      label: 'Referral Rate',
      description: 'Client recommendations',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
        </svg>
      )
    }
  ]

  return (
    <section className="py-24 bg-gradient-diagonal">
      <div className="container mx-auto px-6">
        <SmoothReveal direction="fade" className="text-center mb-16">
          <h2 className="text-[32px] font-bold text-[#BFA181] mb-4 font-['Playfair_Display'] leading-tight">
            trusted by couples
            <br />
            <span className="text-[#EAE7DD] italic font-light">worldwide</span>
          </h2>
          <p className="text-xl text-primary max-w-3xl mx-auto font-light">
            Our commitment to excellence has earned the trust of hundreds of couples and recognition from the industry.
          </p>
        </SmoothReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-7xl mx-auto">
          {trustMetrics.map((metric, index) => (
            <SmoothReveal
              key={metric.id}
              direction="up"
              delay={index * 0.15}
              className="text-center"
            >
              <div className="bg-[#002349]/30 rounded-2xl p-8 border border-[#BFA181]/20 hover:border-[#BFA181]/50 transition-all duration-500 hover:scale-105 group">
                {/* Icon */}
                <div className="w-16 h-16 bg-[#BFA181]/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#BFA181]/20 transition-colors duration-300">
                  <div className="text-[#BFA181] group-hover:text-[#BFA181] transition-colors duration-300">
                    {metric.icon}
                  </div>
                </div>

                {/* Number */}
                <div className="text-[48px] font-bold text-[#BFA181] leading-none mb-3 group-hover:scale-110 transition-transform duration-300">
                  {metric.number}
                </div>

                {/* Label */}
                <div className="text-lg font-semibold text-[#EAE7DD] mb-2">
                  {metric.label}
                </div>

                {/* Description */}
                <div className="text-sm text-[#EAE7DD]/70">
                  {metric.description}
                </div>

                {/* Special stars for rating */}
                {metric.id === 'rating' && (
                  <div className="flex justify-center mt-3 space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-4 h-4 text-[#BFA181]"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                )}
              </div>
            </SmoothReveal>
          ))}
        </div>

        {/* Additional Trust Indicators */}
        <SmoothReveal direction="up" delay={0.8} className="mt-16">
          <div className="text-center">
            <div className="flex flex-wrap justify-center items-center gap-8 max-w-4xl mx-auto mb-16">
              <div className="flex items-center space-x-3 bg-[#002349]/20 px-6 py-3 rounded-full border border-[#BFA181]/20">
                <svg className="w-6 h-6 text-[#BFA181]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-[#EAE7DD] font-medium">Fully Insured</span>
              </div>

              <div className="flex items-center space-x-3 bg-[#002349]/20 px-6 py-3 rounded-full border border-[#BFA181]/20">
                <svg className="w-6 h-6 text-[#BFA181]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-[#EAE7DD] font-medium">Licensed Professionals</span>
              </div>

              <div className="flex items-center space-x-3 bg-[#002349]/20 px-6 py-3 rounded-full border border-[#BFA181]/20">
                <svg className="w-6 h-6 text-[#BFA181]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-[#EAE7DD] font-medium">100% Satisfaction Guarantee</span>
              </div>
            </div>


          </div>
        </SmoothReveal>
      </div>
    </section>
  )
}
