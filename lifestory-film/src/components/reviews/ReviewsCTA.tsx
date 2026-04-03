'use client'

import { AnimatedSection } from '../AnimatedSection'

export function ReviewsCTA() {
  const platforms = [
    {
      name: "The Knot",
      detail: "Best of Weddings 7x Winner",
      rating: 5.0,
      link: "https://www.theknot.com/marketplace/lifestoryfilm-los-angeles-ca-2082602"
    },
    {
      name: "WeddingWire",
      detail: "5.0 stars",
      rating: 5.0,
      link: "https://www.weddingwire.com/biz/lifestory-film-los-angeles-san-francisco/03d384eb88a71f5f.html"
    },
    {
      name: "Google",
      detail: "5.0 stars",
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
    <section className="py-32 bg-[#0f0e0c]">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Left Side */}
          <AnimatedSection direction="left" delay={0.2}>
            <p className="text-[#BFA181] text-[11px] tracking-widest uppercase mb-5 font-light">Read More</p>
            <h2
              className="font-extrabold text-white leading-tight mb-6"
              style={{ fontSize: 'clamp(40px, 4.5vw, 56px)', letterSpacing: '-0.02em' }}
            >
              Find Us On Every Platform
            </h2>
            <p className="text-white/55 font-light" style={{ fontSize: '18px' }}>
              Consistently rated 5.0 stars across every major wedding platform.
            </p>
          </AnimatedSection>

          {/* Right Side - Platform Links */}
          <AnimatedSection direction="right" delay={0.4}>
            <div className="space-y-4">
              {platforms.map((platform) => (
                <div
                  key={platform.name}
                  className="flex items-center justify-between bg-[#1a1916] border border-white/8 rounded-xl p-6 hover:border-[#BFA181]/40 transition-all duration-300"
                >
                  <div>
                    <div className="text-white font-semibold mb-1">{platform.name}</div>
                    <div className="text-white/40 text-sm">{platform.detail}</div>
                  </div>

                  <div className="flex items-center gap-4">
                    <StarRating />
                    <a
                      href={platform.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105"
                      style={{ backgroundColor: '#BFA181', color: '#0f0e0c', fontWeight: 600 }}
                      onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#d4b896')}
                      onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#BFA181')}
                    >
                      View
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>

        {/* Contact CTA */}
        <AnimatedSection direction="fade" delay={0.8} className="text-center mt-20">
          <p className="text-white/40 mb-8 font-light" style={{ fontSize: '18px' }}>
            Ready to create your own love story with LifeStory.Film?
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 rounded-full font-semibold text-base transition-all duration-300 hover:scale-105"
            style={{ backgroundColor: '#BFA181', color: '#0f0e0c' }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#d4b896')}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#BFA181')}
          >
            Start Your Story
          </button>
        </AnimatedSection>
      </div>
    </section>
  )
}
