'use client'

import { useState } from 'react'
import { AnimatedSection } from '../AnimatedSection'

interface FAQItem {
  id: number
  category: string
  question: string
  answer: string
}

export function FAQPage() {
  const [openItems, setOpenItems] = useState<number[]>([])
  const [selectedCategory, setSelectedCategory] = useState<string>('all')

  const faqItems: FAQItem[] = [
    // Pricing & Packages
    {
      id: 1,
      category: 'pricing',
      question: "How much does wedding videography cost?",
      answer: "Our wedding videography packages range from $2,800 to $13,400, depending on coverage length, team size, and deliverables. Our Essential package starts at $2,800 for 5 hours of coverage, while our Signature package at $8,400 includes full day coverage with two videographers. For exact pricing based on your wedding date and specific needs, we recommend scheduling a consultation."
    },
    {
      id: 2,
      category: 'pricing',
      question: "What's included in each package?",
      answer: "Each package includes different levels of coverage and deliverables. All packages include professional editing, color correction, music licensing, and online delivery. Higher tier packages include longer coverage, multiple videographers, same-day highlights, ceremony edits, and premium add-ons like drone footage or extended documentary edits."
    },
    {
      id: 3,
      category: 'pricing',
      question: "Do you offer payment plans?",
      answer: "Yes! We offer flexible payment plans to make our services accessible. Typically, we require a 25% deposit to secure your date, with the remaining balance due 30 days before your wedding. We can also arrange custom payment schedules based on your needs."
    },
    {
      id: 4,
      category: 'pricing',
      question: "What's the difference between your packages?",
      answer: "The main differences are coverage duration, team size, and deliverables. Essential packages include single videographer coverage and basic deliverables. Signature packages add a second videographer, more comprehensive coverage, and additional edits. Multi-day packages include rehearsal coverage, extended documentary edits, and premium delivery options."
    },

    // Timeline & Process
    {
      id: 5,
      category: 'timeline',
      question: "How long does it take to receive our wedding film?",
      answer: "Delivery times vary by package. Essential packages are delivered within 6-8 weeks, while Signature and Multi-day packages are completed within 4-6 weeks due to priority processing. We also offer a 48-hour highlight reel for Signature packages and above to share with friends and family immediately after your wedding."
    },
    {
      id: 6,
      category: 'timeline',
      question: "When should we book our videographer?",
      answer: "We recommend booking 6-12 months in advance, especially for popular wedding dates and seasons. Our calendar fills up quickly, particularly for summer and fall weddings. Early booking also allows more time for planning and ensures you get your preferred package and any additional services."
    },
    {
      id: 7,
      category: 'timeline',
      question: "Do you attend our rehearsal?",
      answer: "Rehearsal coverage is included in our Multi-day packages and available as an add-on for other packages. We recommend rehearsal attendance for complex ceremonies, unique venues, or when you want additional coverage of pre-wedding events. This helps us understand the ceremony flow and capture better footage on your wedding day."
    },
    {
      id: 8,
      category: 'timeline',
      question: "What's your cancellation policy?",
      answer: "We understand that circumstances can change. Cancellations made more than 90 days before your wedding receive a full refund minus a $500 processing fee. Cancellations within 90 days retain the deposit. We're happy to discuss rescheduling options if your plans change due to unforeseen circumstances."
    },

    // Service Details
    {
      id: 9,
      category: 'service',
      question: "How many videographers will be at our wedding?",
      answer: "This depends on your package. Essential and Full Day packages include one professional videographer. Signature and Multi-day packages include two videographers for comprehensive coverage and multiple angles. Having two videographers allows us to capture both wide ceremony shots and intimate reactions simultaneously."
    },
    {
      id: 10,
      category: 'service',
      question: "Do you provide drone footage?",
      answer: "Yes! Drone footage is available as an add-on for $500. We're licensed drone operators and will coordinate with your venue to ensure compliance with any restrictions. Drone footage adds stunning aerial perspectives of your venue and surrounding landscape, weather and regulations permitting."
    },
    {
      id: 11,
      category: 'service',
      question: "Can you work with our photographer?",
      answer: "Absolutely! We love collaborating with photographers and have worked with many talented professionals. We coordinate closely to ensure we're not in each other's shots and that both teams can capture the best moments. If you need photographer recommendations, we're happy to suggest trusted professionals we've worked with."
    },
    {
      id: 12,
      category: 'service',
      question: "Do you travel for destination weddings?",
      answer: "Yes, we love destination weddings! We've filmed in locations across California, other US states, and internationally. Travel fees depend on the location and duration. For destination weddings, we typically require coverage of travel expenses and accommodation. Contact us with your location for a detailed quote."
    },

    // Technical & Equipment
    {
      id: 13,
      category: 'technical',
      question: "What equipment do you use?",
      answer: "We use professional 4K cinema cameras, premium lenses, and advanced stabilization systems. Our audio setup includes wireless microphones for crystal-clear vows and speeches. We also carry backup equipment for every critical component to ensure nothing is missed on your wedding day."
    },
    {
      id: 14,
      category: 'technical',
      question: "Do you provide same-day highlights?",
      answer: "Same-day highlights are included with our Signature and Multi-day packages. These are 60-90 second highlight reels delivered within 48-72 hours of your wedding, perfect for sharing on social media or with friends and family who couldn't attend."
    },
    {
      id: 15,
      category: 'technical',
      question: "How do we receive our final films?",
      answer: "All films are delivered via a private online gallery where you can watch, download, and share your videos. Higher tier packages also include a premium USB drive with all files. The online gallery remains active for 2 years, and we maintain archive copies for your peace of mind."
    },
    {
      id: 16,
      category: 'technical',
      question: "Can you edit our film to specific music?",
      answer: "We include professional music licensing in all packages and work with a library of cinema-quality tracks. If you have specific music requests, we can often accommodate them for an additional licensing fee. We'll discuss music preferences during our planning process to ensure your film reflects your style."
    },

    // Planning & Preparation
    {
      id: 17,
      category: 'planning',
      question: "Do we need to meet before the wedding?",
      answer: "Yes! We schedule a planning meeting 4-6 weeks before your wedding to discuss your timeline, key moments, family dynamics, and any special requests. This can be in person, over video call, or phone - whatever works best for you. This ensures we're fully prepared to capture your day perfectly."
    },
    {
      id: 18,
      category: 'planning',
      question: "What if it rains on our wedding day?",
      answer: "Weather is never a concern for us! We have experience filming in all conditions and carry weather protection for our equipment. Rain can actually create beautiful, romantic footage. We'll work with you and your planner to adapt to any weather conditions while ensuring great footage."
    },
    {
      id: 19,
      category: 'planning',
      question: "Can you film our reception and speeches?",
      answer: "Absolutely! Reception coverage including speeches, first dances, and party moments are included in all full day packages. We use wireless audio systems to ensure clear speech audio and position ourselves discreetly to capture natural reactions and emotions throughout your celebration."
    },
    {
      id: 20,
      category: 'planning',
      question: "Do you offer engagement session videos?",
      answer: "Yes! Engagement sessions are a great way to get comfortable with our team and create beautiful content for save-the-dates or wedding websites. These are available as add-ons starting at $800, and we often incorporate engagement footage into your wedding film for a complete love story."
    }
  ]

  const categories = [
    { id: 'all', label: 'All Questions' },
    { id: 'pricing', label: 'Pricing & Packages' },
    { id: 'timeline', label: 'Timeline & Process' },
    { id: 'service', label: 'Service Details' },
    { id: 'technical', label: 'Technical' },
    { id: 'planning', label: 'Planning & Preparation' }
  ]

  const filteredFAQs = selectedCategory === 'all'
    ? faqItems
    : faqItems.filter(item => item.category === selectedCategory)

  const toggleItem = (id: number) => {
    setOpenItems(prev =>
      prev.includes(id)
        ? prev.filter(item => item !== id)
        : [...prev, id]
    )
  }

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-6">
          <AnimatedSection direction="fade" className="text-center mb-12">
            <h1 className="section-text text-white mb-6">
              frequently asked
              <br />
              <span className="text-gray-400">questions</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light">
              Everything you need to know about our wedding videography services, pricing, and process.
              Can't find what you're looking for? Contact us directly.
            </p>
          </AnimatedSection>

          {/* Category Filter */}
          <AnimatedSection direction="fade" delay={0.4}>
            <div className="flex justify-center mb-12">
              <div className="flex flex-wrap gap-2 bg-zinc-900 rounded-full p-2 max-w-4xl">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'bg-white text-black'
                        : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    {category.label}
                  </button>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ Items */}
      <section className="py-16 bg-zinc-900">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {filteredFAQs.map((item, index) => (
              <AnimatedSection
                key={item.id}
                direction="up"
                delay={index * 0.05}
                className="mb-4"
              >
                <div className="bg-black rounded-2xl border border-gray-700 overflow-hidden">
                  <button
                    onClick={() => toggleItem(item.id)}
                    className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-zinc-800 transition-colors duration-300"
                  >
                    <span className="text-lg font-medium text-white pr-4">
                      {item.question}
                    </span>
                    <svg
                      className={`w-6 h-6 text-gray-400 transition-transform duration-300 flex-shrink-0 ${
                        openItems.includes(item.id) ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openItems.includes(item.id) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-8 pb-6">
                      <p className="text-gray-300 leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-6">
          <AnimatedSection direction="fade" delay={0.6} className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Still Have Questions?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              We're here to help! Get in touch with us directly and we'll answer any questions
              about your wedding videography needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-black px-8 py-4 rounded-full font-medium text-lg hover:bg-gray-200 transition-all duration-300"
              >
                Contact Us
              </button>
              <a
                href="tel:323.556.4362"
                className="border border-white text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-white hover:text-black transition-all duration-300"
              >
                Call (323) 556-4362
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-zinc-900">
        <div className="container mx-auto px-6">
          <AnimatedSection direction="fade" delay={0.8}>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-white mb-2">24hr</div>
                <div className="text-gray-400">Average Response Time</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">250+</div>
                <div className="text-gray-400">Weddings Filmed</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">8+</div>
                <div className="text-gray-400">Years Experience</div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
