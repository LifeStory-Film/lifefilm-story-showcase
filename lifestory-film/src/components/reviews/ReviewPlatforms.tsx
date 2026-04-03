'use client'

import { AnimatedSection } from '../AnimatedSection'

export function ReviewPlatforms() {
  const platforms = [
    {
      name: "The Knot",
      badge: "Best of Weddings — 7x Winner",
      reviews: 78,
      rating: 5.0,
      link: "https://www.theknot.com/marketplace/lifestoryfilm-los-angeles-ca-2082602"
    },
    {
      name: "WeddingWire",
      badge: null,
      reviews: null,
      rating: 5.0,
      link: "https://www.weddingwire.com/biz/lifestory-film-los-angeles-san-francisco/03d384eb88a71f5f.html"
    },
    {
      name: "Google",
      badge: null,
      reviews: null,
      rating: 5.0,
      link: "https://www.google.com/search?q=LifeStory.Film+reviews"
    }
  ]

  const StarRating = () => (
    <div className="flex">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg key={star} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )

  return (
    <section className="py-16 bg-[#1a1916]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {platforms.map((platform, index) => (
            <AnimatedSection
              key={platform.name}
              direction="up"
              delay={index * 0.1}
              className="flex flex-col bg-[#211f1c] border border-gray-700 rounded-xl p-6 hover:border-[#BFA181]/40 transition-all duration-300"
            >
              <div className="mb-4">
                <div className="text-white font-semibold text-lg mb-1">{platform.name}</div>
                {platform.badge && (
                  <div className="text-[#BFA181] text-xs font-medium tracking-wide">{platform.badge}</div>
                )}
              </div>

              <div className="flex items-center gap-3 mb-5">
                <StarRating />
                <span className="text-white text-sm font-medium">{platform.rating.toFixed(1)}</span>
              </div>

              <a
                href={platform.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-block text-center px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105"
                style={{ backgroundColor: '#BFA181', color: '#0f0e0c', fontWeight: 600 }}
                onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#d4b896')}
                onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#BFA181')}
              >
                View Reviews
              </a>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
