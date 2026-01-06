'use client'

import { useState } from 'react'
import { OptimizedImage } from './OptimizedImage'

interface Testimonial {
  id: string
  name: string
  location: string
  quote: string
  image: string
  rating: number
}

interface TrustBadge {
  icon: React.ReactNode
  value: string
  label: string
}

interface InstagramPost {
  id: string
  image: string
  caption: string
  likes: number
  url: string
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah & James',
    location: 'Napa Valley, CA',
    quote: 'LifeStory.Film exceeded every expectation we had. From our first consultation to receiving our final film, their team was professional, creative, and truly understood our vision.',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&crop=face',
    rating: 5
  },
  {
    id: '2',
    name: 'Michael & Elena',
    location: 'Big Sur, CA',
    quote: 'The cinematography is breathtaking, and watching our wedding film feels like reliving the most magical day of our lives. Every time we watch it, we discover new beautiful moments we didn\'t even know were captured.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face',
    rating: 5
  },
  {
    id: '3',
    name: 'David & Rachel',
    location: 'Los Angeles, CA',
    quote: 'We cannot recommend them highly enough! The attention to detail and artistic vision they brought to our wedding was incredible. Our families still talk about how professional and unobtrusive they were.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face',
    rating: 5
  }
]

const TRUST_BADGES: TrustBadge[] = [
  {
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ),
    value: '5-Star',
    label: 'Average Rating'
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
      </svg>
    ),
    value: '98%',
    label: 'Referral Rate'
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732L14.146 12.8l-1.179 4.456a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732L9.854 7.2l1.179-4.456A1 1 0 0112 2z" clipRule="evenodd" />
      </svg>
    ),
    value: '12',
    label: 'Awards Won'
  }
]

// Instagram posts - using Instagram media URLs
const INSTAGRAM_POSTS: InstagramPost[] = [
  {
    id: '1',
    image: 'https://www.instagram.com/p/C-GKqpPPyBX/media/?size=l',
    caption: 'Jaza, the epitome of grace and beauty ✨',
    likes: 487,
    url: 'https://www.instagram.com/p/C-GKqpPPyBX/'
  },
  {
    id: '2',
    image: 'https://www.instagram.com/p/DDsJeccyU8o/media/?size=l',
    caption: 'Timeless traditions and modern elegance ✨',
    likes: 542,
    url: 'https://www.instagram.com/p/DDsJeccyU8o/'
  },
  {
    id: '3',
    image: 'https://www.instagram.com/p/C0cbvjpSuQT/media/?size=l',
    caption: 'Beautiful Ayaka at Bel Air Bay Club 💕',
    likes: 629,
    url: 'https://www.instagram.com/p/C0cbvjpSuQT/'
  },
  {
    id: '4',
    image: 'https://www.instagram.com/p/DI1s2VWPu71/media/?size=l',
    caption: 'Serena & Daniel - Old-world charm ✨',
    likes: 734,
    url: 'https://www.instagram.com/p/DI1s2VWPu71/'
  },
  {
    id: '5',
    image: 'https://www.instagram.com/p/DEGEuQLSx0T/media/?size=l',
    caption: 'Sarah & Blake at Mission San Juan 💍',
    likes: 618,
    url: 'https://www.instagram.com/p/DEGEuQLSx0T/'
  },
  {
    id: '6',
    image: 'https://www.instagram.com/p/DDp3C7gTEp6/media/?size=l',
    caption: 'Timeless moments at LA Athletic Club 🖤',
    likes: 425,
    url: 'https://www.instagram.com/p/DDp3C7gTEp6/'
  },
  {
    id: '7',
    image: 'https://www.instagram.com/p/C-gKgdCSSng/media/?size=l',
    caption: 'Capturing the magic of a bride ✨',
    likes: 329,
    url: 'https://www.instagram.com/p/C-gKgdCSSng/'
  }
]

export function SocialProofSection() {
  const [currentInstagramSlide, setCurrentInstagramSlide] = useState(0)

  const nextInstagramSlide = () => {
    setCurrentInstagramSlide((prev) =>
      prev >= INSTAGRAM_POSTS.length - 4 ? 0 : prev + 1
    )
  }

  const prevInstagramSlide = () => {
    setCurrentInstagramSlide((prev) =>
      prev === 0 ? INSTAGRAM_POSTS.length - 4 : prev - 1
    )
  }

  return (
    <section id="social-proof" className="py-32 bg-gradient-diagonal">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="section-text text-heading mb-6">
              trusted by
              <br />
              <span className="text-heading italic font-light">couples worldwide</span>
            </h2>
            <p className="text-xl text-primary max-w-3xl mx-auto font-light">
              Join hundreds of couples who have chosen us to capture their most precious moments.
            </p>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {TRUST_BADGES.map((badge, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#957C3D]/20 mb-4">
                  <div className="text-[#957C3D]">
                    {badge.icon}
                  </div>
                </div>
                <div className="text-3xl font-bold text-[#BFA181] mb-2">
                  {badge.value}
                </div>
                <div className="text-primary/80">
                  {badge.label}
                </div>
              </div>
            ))}
          </div>

          {/* Testimonials */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {TESTIMONIALS.map((testimonial) => (
              <div
                key={testimonial.id}
                className="p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
                style={{ backgroundColor: '#002349' }}
              >
                {/* Star Rating */}
                <div className="flex justify-center mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-[#957C3D]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-[#EAE7DD] text-center mb-6 leading-relaxed italic">
                  "{testimonial.quote}"
                </blockquote>

                {/* Client Info */}
                <div className="flex flex-col items-center">
                  <div className="text-[#BFA181] font-semibold text-lg mb-1">
                    {testimonial.name}
                  </div>
                  <div className="text-[#EAE7DD]/80 text-sm">
                    {testimonial.location}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Instagram Feed */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-heading mb-2">Follow Our Journey</h3>
            <p className="text-primary/80 mb-8">@lifestoryfilm</p>

            <div className="relative overflow-hidden rounded-2xl">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentInstagramSlide * 25}%)` }}
              >
                {INSTAGRAM_POSTS.map((post) => (
                  <div key={post.id} className="w-1/4 flex-shrink-0 p-2">
                    <a
                      href={post.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block relative group cursor-pointer border-2 border-[#BFA181]/20 rounded-lg overflow-hidden hover:border-[#BFA181]/60 transition-colors duration-300"
                    >
                      <OptimizedImage
                        src={post.image}
                        alt={post.caption}
                        className="w-full aspect-square object-cover"
                      />

                      {/* Overlay */}
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="text-center text-white p-4">
                          <div className="flex items-center justify-center mb-2">
                            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                            </svg>
                            <span className="text-sm font-semibold">{post.likes}</span>
                          </div>
                          <p className="text-xs">{post.caption}</p>
                        </div>
                      </div>
                    </a>
                  </div>
                ))}
              </div>

              {/* Navigation Buttons */}
              <button
                onClick={prevInstagramSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-[#002349]/80 backdrop-blur-sm rounded-full flex items-center justify-center text-[#BFA181] hover:bg-[#002349] transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                onClick={nextInstagramSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-[#002349]/80 backdrop-blur-sm rounded-full flex items-center justify-center text-[#BFA181] hover:bg-[#002349] transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Instagram Link */}
            <div className="mt-8">
              <a
                href="https://instagram.com/lifestoryfilm"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-[#178582] hover:text-[#BFA181] transition-colors font-medium"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                View More on Instagram
              </a>
            </div>
          </div>

          {/* Final CTA to Contact */}
          <div className="text-center mt-20">
            <div className="bg-gradient-to-r from-[#4F0341]/30 to-[#002349]/50 rounded-2xl p-12 border border-[#BFA181]/20 max-w-4xl mx-auto">
              <h3 className="text-4xl font-bold text-[#BFA181] mb-4">Ready to Start Planning?</h3>
              <p className="text-xl text-[#EAE7DD] mb-8 max-w-2xl mx-auto">
                Let's discuss how we can transform your wedding day into a cinematic masterpiece that you'll treasure forever.
              </p>
              <button
                onClick={() => {
                  const element = document.getElementById('contact')
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
                className="inline-flex items-center space-x-3 bg-[#4F0341] text-[#957C3D] px-8 py-4 rounded-lg font-medium hover:bg-[#6B0557] hover:text-[#B8956A] hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a1 1 0 01-1-1V9a1 1 0 011-1h1a2 2 0 100-4H4a1 1 0 01-1-1V4a1 1 0 011-1h3a1 1 0 001-1z" />
                </svg>
                <span>Get Your Custom Quote</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
