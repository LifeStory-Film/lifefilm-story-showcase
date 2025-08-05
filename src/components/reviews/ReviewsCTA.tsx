'use client'

import { AnimatedSection } from '../AnimatedSection'

export function ReviewsCTA() {
  const platforms = [
    {
      name: "Google CA",
      reviews: 127,
      rating: 5.0,
      link: "https://www.google.com/search?q=LifeStory.Film+reviews"
    },
    {
      name: "The Knot CA",
      reviews: 98,
      rating: 5.0,
      link: "https://www.theknot.com"
    },
    {
      name: "WeddingWire CA",
      reviews: 84,
      rating: 5.0,
      link: "https://www.weddingwire.com"
    },
    {
      name: "Yelp",
      reviews: 72,
      rating: 5.0,
      link: "https://www.yelp.com"
    }
  ]

  const StarRating = ({ rating }: { rating: number }) => (
    <div className="flex">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className="w-4 h-4 text-yellow-400 fill-current"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )

  return (
    <section className="py-32 bg-black">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Title */}
          <AnimatedSection direction="left" delay={0.2}>
            <h2 className="section-text text-white mb-8">
              See more
              <br />
              <span className="text-gray-400">reviews here</span>
            </h2>
          </AnimatedSection>

          {/* Right Side - Platform Links */}
          <AnimatedSection direction="right" delay={0.4}>
            <div className="space-y-4">
              {platforms.map((platform, index) => (
                <div
                  key={platform.name}
                  className="flex items-center justify-between bg-zinc-900 border border-gray-700 rounded-xl p-6 hover:border-gray-500 transition-all duration-300"
                >
                  <div className="flex items-center space-x-4">
                    <div>
                      <div className="text-white font-medium mb-1">{platform.name}</div>
                      <div className="text-gray-400 text-sm">{platform.reviews} reviews</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="text-center">
                      <StarRating rating={platform.rating} />
                      <div className="text-white text-sm font-medium mt-1">{platform.rating}</div>
                    </div>
                    <a
                      href={platform.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-purple-700 transition-colors"
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
        <AnimatedSection direction="fade" delay={0.8} className="text-center mt-16">
          <p className="text-gray-400 mb-8 text-lg">
            Ready to create your own love story with LifeStory.Film?
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white text-black px-8 py-4 rounded-full font-medium text-lg hover:bg-gray-200 transition-all duration-300 transform hover:scale-105"
          >
            Start Your Story
          </button>
        </AnimatedSection>
      </div>
    </section>
  )
}
