'use client'

import { AnimatedSection } from '../AnimatedSection'

export function VideographyPackages() {
  const packages = [
    {
      code: "V1",
      name: "Essential",
      price: "$2,800",
      duration: "5 hours",
      team: "1 videographer",
      description: "Perfect for intimate ceremonies with professional videography coverage.",
      features: [
        "3-4 min feature film",
        "Color correction",
        "Music license",
        "Online delivery",
        "USB drive delivery",
        "6-8 week delivery"
      ],
      popular: false
    },
    {
      code: "V2",
      name: "Full Day",
      price: "$3,500",
      duration: "Full day",
      team: "1 videographer",
      description: "Complete wedding day videography coverage from start to finish.",
      features: [
        "4-5 min feature film",
        "Color correction",
        "Music license",
        "Ceremony cut",
        "Online delivery",
        "USB drive delivery",
        "6-8 week delivery"
      ],
      popular: false
    },
    {
      code: "V3",
      name: "Signature",
      price: "$4,900",
      duration: "Full day",
      team: "2 videographers",
      description: "Our most popular videography package with dual camera coverage.",
      features: [
        "5-6 min feature film",
        "Color correction",
        "Music license",
        "Ceremony & speeches edit",
        "Professional cinema cameras",
        "Online delivery",
        "Premium USB drive",
        "4-6 week delivery"
      ],
      popular: true
    },
    {
      code: "V4",
      name: "Multi Day",
      price: "$8,500",
      duration: "Multi day",
      team: "2 videographers",
      description: "Perfect for destination weddings and multi-day celebrations.",
      features: [
        "6-7 min feature film",
        "Color correction",
        "Music license",
        "1-2 hr full movie edit",
        "Professional cinema cameras",
        "Online delivery",
        "Premium USB drive",
        "4-6 week delivery"
      ],
      popular: false,
      limited: true
    }
  ]

  return (
    <section className="py-32 bg-zinc-900">
      <div className="container mx-auto px-6">
        <AnimatedSection direction="fade" className="text-center mb-16">
          <h2 className="section-text text-white mb-6">
            videography
            <br />
            <span className="text-gray-400">packages</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light">
            Professional videography packages for complete wedding film coverage with cinematic storytelling.
          </p>
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
                  <div className="bg-orange-600 text-white px-4 py-1 rounded-full text-xs font-medium">
                    Limited Availability
                  </div>
                </div>
              )}

              <div className="text-center mb-6">
                <div className="text-purple-400 font-bold text-lg mb-1">{pkg.code}</div>
                <h3 className="text-xl font-bold text-white mb-2">{pkg.name}</h3>
                <div className="text-2xl font-bold text-white mb-1">{pkg.price}</div>
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
                <button className="w-full bg-purple-600 text-white py-2 px-4 rounded-full text-sm font-medium hover:bg-purple-700 transition-colors">
                  Book Now
                </button>
                <button
                  onClick={() => {
                    const element = document.getElementById('contact')
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' })
                    }
                  }}
                  className="w-full border border-gray-600 text-gray-300 py-2 px-4 rounded-full text-sm font-medium hover:border-white hover:text-white transition-colors"
                >
                  Customize +
                </button>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection direction="fade" delay={0.8} className="text-center mt-16">
          <p className="text-gray-400 mb-6">
            All packages include professional editing, color correction, and cinematic storytelling.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="border border-white text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-white hover:text-black transition-all duration-300">
              View Photography Packages
            </button>
            <button className="border border-gray-600 text-gray-300 px-8 py-4 rounded-full font-medium text-lg hover:border-white hover:text-white transition-all duration-300">
              Add Drone Footage (+$500)
            </button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
