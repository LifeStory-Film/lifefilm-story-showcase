'use client'

import { useState } from 'react'
import { OptimizedImage } from './OptimizedImage'

interface InstagramPost {
  id: string
  image: string
  caption: string
  likes: number
  url: string
}

const INSTAGRAM_POSTS: InstagramPost[] = [
  {
    id: '1',
    image: 'https://ext.same-assets.com/613934530/2159466363.jpeg',
    caption: 'Classic bridal portrait with bouquet and natural light',
    likes: 487,
    url: 'https://www.instagram.com/lifestoryfilm/'
  },
  {
    id: '2',
    image: 'https://ext.same-assets.com/613934530/2180482571.webp',
    caption: 'Bouquet toss — pure celebration',
    likes: 542,
    url: 'https://www.instagram.com/lifestoryfilm/'
  },
  {
    id: '3',
    image: 'https://ext.same-assets.com/613934530/2202004677.jpeg',
    caption: 'Traditional wedding ceremony in a garden setting',
    likes: 629,
    url: 'https://www.instagram.com/lifestoryfilm/'
  },
  {
    id: '4',
    image: 'https://ext.same-assets.com/613934530/2357869345.webp',
    caption: 'Romantic couple portrait with eucalyptus bouquet',
    likes: 734,
    url: 'https://www.instagram.com/lifestoryfilm/'
  },
  {
    id: '5',
    image: 'https://ext.same-assets.com/613934530/4005707773.jpeg',
    caption: 'Luxury crystal wedding shoes — every detail matters',
    likes: 618,
    url: 'https://www.instagram.com/lifestoryfilm/'
  },
  {
    id: '6',
    image: 'https://ext.same-assets.com/613934530/24522886.webp',
    caption: 'Window light bridal portrait with soft shadows',
    likes: 425,
    url: 'https://www.instagram.com/lifestoryfilm/'
  },
  {
    id: '7',
    image: 'https://ext.same-assets.com/613934530/1996507150.webp',
    caption: 'Traditional South Asian bridal portrait with intricate henna',
    likes: 329,
    url: 'https://www.instagram.com/lifestoryfilm/'
  },
  {
    id: '8',
    image: 'https://ext.same-assets.com/613934530/1122270631.jpeg',
    caption: 'Emotional father-daughter moment before the ceremony',
    likes: 591,
    url: 'https://www.instagram.com/lifestoryfilm/'
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
    <section id="social-proof" className="py-32 bg-[#1a1916]">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Instagram Feed */}
          <div className="text-center">
            <h3
              className="font-black tracking-tight leading-[0.92] text-white mb-4"
              style={{ fontSize: 'clamp(32px, 4vw, 52px)' }}
            >
              Recent Work
            </h3>
            <p className="text-white/45 font-light text-base mb-8">Behind the scenes &amp; latest moments from the field</p>

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
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-[#211f1c]/80 backdrop-blur-sm rounded-full flex items-center justify-center text-[#BFA181] hover:bg-[#211f1c] transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                onClick={nextInstagramSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-[#211f1c]/80 backdrop-blur-sm rounded-full flex items-center justify-center text-[#BFA181] hover:bg-[#211f1c] transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Instagram follow CTA */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://instagram.com/lifestoryfilm"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#BFA181]/40 text-[#EAE7DD] px-6 py-3 rounded-full transition-all duration-300 font-medium"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                Follow @lifestoryfilm
              </a>
              <span className="text-[#EAE7DD]/40 text-sm hidden sm:block">·</span>
              <span className="text-[#EAE7DD]/60 text-sm">See every wedding, every week</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
