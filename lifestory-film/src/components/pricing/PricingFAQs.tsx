'use client'

import { useState } from 'react'
import { AnimatedSection } from '../AnimatedSection'

interface FAQ {
  question: string
  answer: string
  category: 'pricing' | 'packages' | 'booking' | 'deliverables'
}

const FAQS: FAQ[] = [
  {
    question: "What's included in your packages?",
    answer: "All our packages include professional editing, color correction, music licensing, and online delivery. Photography packages include high-resolution edited images with printing rights. Videography packages include cinematic highlight films with licensed music. Combined packages offer seamless coordination between photo and video teams.",
    category: 'packages'
  },
  {
    question: "What is your deposit policy?",
    answer: "A non-refundable deposit of 50% is required to secure your wedding date. This deposit reserves our team exclusively for your celebration and covers our commitment to your day. The remaining balance is due according to the payment schedule outlined in your contract.",
    category: 'pricing'
  },
  {
    question: "Do you offer payment plans?",
    answer: "Yes! We offer flexible payment options including 30-month payment plans and a 'Pay in 4' plan with no interest or hidden fees. The first payment is due at booking, with the remaining payments spread evenly over the agreed term. We want to make luxury wedding coverage accessible to all couples.",
    category: 'pricing'
  },
  {
    question: "How far in advance should we book?",
    answer: "We recommend booking 9-12 months in advance, especially for peak wedding season (May-October) and holiday weekends. However, we also accommodate last-minute bookings when available. Our calendar fills up quickly, so early booking ensures your preferred date is secured.",
    category: 'booking'
  },
  {
    question: "What is your travel policy?",
    answer: "We're based in Los Angeles and cover the entire LA area at no additional cost. For Bay Area weddings, a 15% travel fee applies. Destination weddings and out-of-state celebrations are subject to custom quotes that include travel and accommodation. We love destination weddings!",
    category: 'pricing'
  },
  {
    question: "When will we receive our photos and videos?",
    answer: "Teaser photos are delivered within 48 hours for packages that include them. Full photography galleries are typically delivered within 4-6 weeks. Wedding films are completed within 6-8 weeks for standard packages, and 4-6 weeks for premium packages. Rush delivery options are available upon request.",
    category: 'deliverables'
  },
  {
    question: "Can we customize a package?",
    answer: "Absolutely! Our packages are starting points. We can customize coverage hours, add second shooters, include drone footage, add albums, create same-day edits, or combine any services to perfectly match your needs. Use our Custom Package Builder or contact us to discuss your specific requirements.",
    category: 'packages'
  },
  {
    question: "Do you charge extra for multi-day events?",
    answer: "We offer dedicated multi-day packages for destination weddings and cultural celebrations spanning multiple days. These packages are priced competitively compared to booking separate days, and include coordinated coverage across all events with a cohesive storytelling approach.",
    category: 'pricing'
  },
  {
    question: "What equipment do you use?",
    answer: "We use professional cinema cameras including RED, Sony FX series, and Canon cinema line for video, and high-end mirrorless and medium format cameras for photography. All our equipment is backed up with redundant systems to ensure your memories are never lost.",
    category: 'packages'
  },
  {
    question: "Do you have backup equipment and shooters?",
    answer: "Yes! We carry backup cameras, lenses, and recording media to every wedding. We also have backup photographers and videographers on call for emergencies. Your wedding day is too important to leave anything to chance.",
    category: 'booking'
  },
  {
    question: "What is your cancellation and rescheduling policy?",
    answer: "We understand that plans can change. If you decide to postpone your wedding, we're happy to reschedule and secure a new date for you based on availability. If you need to cancel 2 months or more before your wedding day, the 50% deposit is non-refundable, but the remaining balance will be refunded if already paid. We recommend wedding insurance for additional peace of mind.",
    category: 'booking'
  },
  {
    question: "Do you offer albums and prints?",
    answer: "Yes! We offer premium fine art albums starting at $1,000, with custom design and archival-quality materials. Prints and canvases are also available. Multi-day packages include a complimentary album. All photography packages include personal printing rights.",
    category: 'deliverables'
  },
  {
    question: "Can we see full weddings you've filmed?",
    answer: "Absolutely! We're happy to share complete wedding films and full galleries during your consultation. This gives you a comprehensive view of our style and storytelling approach, not just highlights. Contact us to schedule a viewing session.",
    category: 'packages'
  }
]

export function PricingFAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [activeCategory, setActiveCategory] = useState<string>('all')

  const categories = [
    { id: 'all', label: 'All Questions' },
    { id: 'pricing', label: 'Pricing & Payment' },
    { id: 'packages', label: 'Packages & Services' },
    { id: 'booking', label: 'Booking Process' },
    { id: 'deliverables', label: 'Deliverables & Timeline' }
  ]

  const filteredFAQs = activeCategory === 'all'
    ? FAQS
    : FAQS.filter(faq => faq.category === activeCategory)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-32 bg-gradient-diagonal">
      <div className="container mx-auto px-6">
        <AnimatedSection direction="fade" className="text-center mb-16">
          <h2 className="section-text text-heading mb-6">
            frequently asked
            <br />
            <span className="text-heading italic font-light">questions</span>
          </h2>
          <p className="text-xl text-primary max-w-3xl mx-auto font-light">
            Everything you need to know about our pricing, packages, and process.
            Can't find what you're looking for? Contact us directly.
          </p>
        </AnimatedSection>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-[#BFA181] text-[#002349] shadow-lg scale-105'
                  : 'bg-[#002349]/30 text-[#EAE7DD] border border-[#BFA181]/30 hover:border-[#BFA181] hover:bg-[#002349]/50'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto space-y-4">
          {filteredFAQs.map((faq, index) => (
            <AnimatedSection
              key={index}
              direction="up"
              delay={index * 0.05}
            >
              <div className="bg-[#002349]/50 backdrop-blur-sm rounded-2xl border border-[#BFA181]/20 overflow-hidden transition-all duration-300 hover:border-[#BFA181]/50">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between group"
                >
                  <div className="flex-1 pr-8">
                    <h3 className="text-lg font-semibold text-[#EAE7DD] group-hover:text-[#BFA181] transition-colors">
                      {faq.question}
                    </h3>
                  </div>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full bg-[#BFA181]/20 flex items-center justify-center transition-all duration-300 ${
                    openIndex === index ? 'rotate-180 bg-[#BFA181]' : 'group-hover:bg-[#BFA181]/30'
                  }`}>
                    <svg
                      className={`w-5 h-5 transition-colors ${
                        openIndex === index ? 'text-[#002349]' : 'text-[#BFA181]'
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>

                <div className={`overflow-hidden transition-all duration-500 ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="px-8 pb-6">
                    <p className="text-[#EAE7DD]/90 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Contact CTA */}
        <AnimatedSection direction="fade" delay={0.4} className="text-center mt-16">
          <div className="bg-[#002349]/30 rounded-2xl p-12 border border-[#BFA181]/20 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-[#BFA181] mb-4">Still Have Questions?</h3>
            <p className="text-[#EAE7DD] mb-8">
              We're here to help! Contact us directly and we'll answer any questions you have about
              our services, pricing, or process.
            </p>
            <button
              onClick={() => {
                const element = document.getElementById('contact')
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' })
                }
              }}
              className="bg-[#BFA181] text-[#002349] px-8 py-4 rounded-full font-medium text-lg hover:bg-[#957C3D] transition-all duration-300 transform hover:scale-105"
            >
              Get in Touch
            </button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
