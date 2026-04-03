'use client'

import { AnimatedSection } from '../AnimatedSection'

export function PhotographyPackages() {
  const packages = [
    {
      name: "Essential",
      price: "$2,199",
      priceValue: 2199,
      duration: "5 hours",
      team: "1 photographer",
      description: "Perfect for intimate ceremonies and smaller celebrations.",
      features: [
        "300+ edited photos",
        "Online gallery",
        "Color correction",
        "Personal printing rights"
      ],
      popular: false
    },
    {
      name: "8 Hours",
      price: "$2,799",
      priceValue: 2799,
      duration: "8 hours",
      team: "1 photographer",
      description: "Complete wedding day coverage from preparation to reception.",
      features: [
        "450+ edited photos",
        "Online gallery",
        "Color correction",
        "Personal printing rights"
      ],
      popular: false
    },
    {
      name: "Signature",
      price: "$3,999",
      priceValue: 3999,
      duration: "8 hours",
      team: "2 photographers",
      description: "Our most popular package with dual photographer coverage.",
      features: [
        "600+ edited photos",
        "Teaser photos (48 hours)",
        "Online gallery",
        "Color correction",
        "Personal printing rights"
      ],
      popular: true
    },
    {
      name: "Multi Day",
      price: "$6,999",
      priceValue: 6999,
      duration: "Multi day",
      team: "2 photographers",
      description: "Perfect for destination weddings and multi-day celebrations.",
      features: [
        "800+ edited photos",
        "Fine art album included",
        "Online gallery",
        "Color correction",
        "Personal printing rights",
        "Premium USB drive"
      ],
      popular: false,
      limited: true
    }
  ]

  const calculateMonthlyPayment = (price: number) => {
    return (price / 30).toFixed(2)
  }

  return (
    <section className="py-32 bg-[#1a1916]">
      <div className="container mx-auto px-6">
        <AnimatedSection direction="fade" className="text-center mb-16">
          <p className="text-[#BFA181] text-[11px] tracking-widest uppercase mb-5 font-light">Our Packages</p>
          <h2
            className="font-extrabold text-white leading-tight mb-4"
            style={{ fontSize: 'clamp(40px, 4.5vw, 56px)', letterSpacing: '-0.02em' }}
          >
            Photography Packages
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light">
            Professional wedding photography packages designed to capture every precious moment of your special day.
          </p>
          <div className="mt-6 flex justify-center">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-xs tracking-wide transition-opacity hover:opacity-75"
              style={{ borderColor: '#BFA181', color: '#BFA181' }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>
              Pay as low as $73/mo — 0% interest plans available
            </a>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {packages.map((pkg, index) => (
            <AnimatedSection
              key={index}
              direction="up"
              delay={index * 0.1}
              className={`relative bg-black border rounded-2xl p-6 transition-all duration-300 hover:scale-105 ${
                pkg.popular
                  ? 'border-white shadow-2xl transform scale-105'
                  : 'border-gray-700 hover:border-gray-500'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-green-600 text-white px-4 py-1 rounded-full text-xs font-medium">
                    Most Popular
                  </div>
                </div>
              )}

              {pkg.limited && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="px-4 py-1 rounded-full text-xs font-medium" style={{ backgroundColor: '#BFA181', color: '#0f0e0c' }}>
                    Limited Availability
                  </div>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-white mb-2">{pkg.name}</h3>
                <div className="text-2xl font-bold text-white mb-1">{pkg.price}</div>
                <div className="text-sm text-gray-400 mb-2">Pay as low as ${calculateMonthlyPayment(pkg.priceValue)} / month</div>
                <div className="text-gray-400 text-sm">{pkg.duration}</div>
                <div className="text-gray-500 text-xs mt-1 flex items-center justify-center">
                  <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                  {pkg.team}
                </div>
              </div>

              <p className="text-gray-300 text-center text-sm mb-6 leading-relaxed">
                {pkg.description}
              </p>

              <ul className="space-y-3 mb-6">
                {pkg.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start text-sm">
                    <div className="w-1.5 h-1.5 bg-white rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="space-y-3">
                <button
                  onClick={() => {
                    const element = document.getElementById('contact')
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' })
                    }
                  }}
                  className="w-full py-2 px-4 rounded-full text-sm font-semibold transition-colors"
                  style={{ backgroundColor: '#BFA181', color: '#0f0e0c' }}
                  onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#d4b896' }}
                  onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#BFA181' }}
                >
                  Book My Date
                </button>
                <button
                  onClick={() => {
                    const element = document.getElementById('contact')
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' })
                    }
                  }}
                  className="w-full text-center text-sm transition-colors"
                  style={{ color: '#BFA181', background: 'none', border: 'none' }}
                  onMouseEnter={e => { e.currentTarget.style.color = '#d4b896' }}
                  onMouseLeave={e => { e.currentTarget.style.color = '#BFA181' }}
                >
                  or customize →
                </button>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection direction="fade" delay={0.8} className="text-center mt-16">
          <p className="text-gray-400 mb-6">
            All packages include professional editing, color correction, and high-resolution digital delivery.
          </p>
          <div className="flex justify-center">
            <button
              onClick={() => window.location.href = '/pricing'}
              className="border border-white text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-white hover:text-black transition-all duration-300"
            >
              View Photography + Video Packages
            </button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
