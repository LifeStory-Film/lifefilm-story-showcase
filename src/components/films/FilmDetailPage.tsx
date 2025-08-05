'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { AnimatedSection } from '../AnimatedSection'

interface Film {
  id: number
  title: string
  subtitle: string
  location: string
  date: string
  duration: string
  category: string
  description: string
  videoUrl: string
  thumbnail: string
  gallery: string[]
  behindTheScenes: {
    title: string
    content: string
    videoUrl: string
    highlights: string[]
  }
  testimonial: {
    quote: string
    author: string
    details: string
  }
  weddingDetails: {
    venue: string
    guests: number
    season: string
    style: string
    colors: string
    highlights: string[]
  }
}

interface FilmDetailPageProps {
  film: Film
}

export function FilmDetailPage({ film }: FilmDetailPageProps) {
  const [selectedGalleryImage, setSelectedGalleryImage] = useState<string | null>(null)
  const [activeSection, setActiveSection] = useState<'overview' | 'behind-scenes' | 'details'>('overview')
  const router = useRouter()

  const relatedFilms = [
    {
      title: "Maria & Carlos",
      location: "Tulum, Mexico",
      thumbnail: "https://images.squarespace-cdn.com/content/v1/6347c44b9a8b8c0d95f6c3e3/1665710950901-YQJT8VYG0XCF8XKM7ZNJ/destination-wedding-film-tuscany-italy",
      slug: "maria-carlos-tulum"
    },
    {
      title: "Ashley & Ryan",
      location: "Beverly Hills, CA",
      thumbnail: "https://images.squarespace-cdn.com/content/v1/5de04e649f40c13aa68cadf9/1671045123423-8N0XVKZQXPJT6XFWH42E/luxury-wedding-videography-cinematography",
      slug: "ashley-ryan-beverly-hills"
    },
    {
      title: "Sophia & Alexander",
      location: "Paris, France",
      thumbnail: "https://images.squarespace-cdn.com/content/v1/5de04e649f40c13aa68cadf9/1671045123423-8N0XVKZQXPJT6XFWH42E/luxury-wedding-videography-cinematography",
      slug: "sophia-alexander-paris"
    }
  ]

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Film Video */}
            <AnimatedSection direction="left" delay={0.2}>
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-black">
                <iframe
                  className="w-full h-full"
                  src={film.videoUrl}
                  title={`${film.title} Wedding Film`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </AnimatedSection>

            {/* Film Info */}
            <AnimatedSection direction="right" delay={0.4}>
              <div className="space-y-6">
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
                    {film.title}
                  </h1>
                  <h2 className="text-2xl md:text-3xl text-gray-300 font-light mb-4">
                    {film.subtitle}
                  </h2>
                  <div className="flex flex-wrap gap-4 text-gray-400 mb-6">
                    <span className="flex items-center">
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      {film.location}
                    </span>
                    <span className="flex items-center">
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                      </svg>
                      {film.date}
                    </span>
                    <span className="flex items-center">
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                      {film.duration}
                    </span>
                  </div>
                </div>

                <p className="text-lg text-gray-300 leading-relaxed">
                  {film.description}
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-200 transition-all duration-300"
                  >
                    Start Your Story
                  </button>
                  <button
                    onClick={() => setActiveSection('behind-scenes')}
                    className="border border-white text-white px-8 py-3 rounded-full font-medium hover:bg-white hover:text-black transition-all duration-300"
                  >
                    Behind the Scenes
                  </button>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="py-8 bg-zinc-900">
        <div className="container mx-auto px-6">
          <div className="flex justify-center">
            <div className="flex bg-black rounded-full p-2">
              <button
                onClick={() => setActiveSection('overview')}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeSection === 'overview'
                    ? 'bg-white text-black'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                Overview
              </button>
              <button
                onClick={() => setActiveSection('behind-scenes')}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeSection === 'behind-scenes'
                    ? 'bg-white text-black'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                Behind the Scenes
              </button>
              <button
                onClick={() => setActiveSection('details')}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeSection === 'details'
                    ? 'bg-white text-black'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                Wedding Details
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Dynamic Content Sections */}
      <section className="py-16 bg-zinc-900">
        <div className="container mx-auto px-6">
          {activeSection === 'overview' && (
            <AnimatedSection direction="fade" className="space-y-16">
              {/* Gallery */}
              <div>
                <h3 className="text-3xl font-bold text-white mb-8 text-center">Film Gallery</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {film.gallery.map((image, index) => (
                    <div
                      key={index}
                      className="relative aspect-[4/3] rounded-lg overflow-hidden cursor-pointer group"
                      onClick={() => setSelectedGalleryImage(image)}
                    >
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                        style={{ backgroundImage: `url('${image}')` }}
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Testimonial */}
              <div className="max-w-4xl mx-auto text-center">
                <h3 className="text-3xl font-bold text-white mb-8">What the Couple Says</h3>
                <blockquote className="text-xl md:text-2xl text-gray-300 italic font-light leading-relaxed mb-6">
                  "{film.testimonial.quote}"
                </blockquote>
                <div className="text-white">
                  <div className="text-lg font-semibold">{film.testimonial.author}</div>
                  <div className="text-gray-400 text-sm mt-2">{film.testimonial.details}</div>
                </div>
              </div>
            </AnimatedSection>
          )}

          {activeSection === 'behind-scenes' && (
            <AnimatedSection direction="fade" className="space-y-12">
              <div className="max-w-4xl mx-auto">
                <h3 className="text-3xl font-bold text-white mb-8 text-center">
                  {film.behindTheScenes.title}
                </h3>

                {/* Behind the Scenes Video */}
                <div className="relative aspect-video rounded-2xl overflow-hidden bg-black mb-8">
                  <iframe
                    className="w-full h-full"
                    src={film.behindTheScenes.videoUrl}
                    title="Behind the Scenes"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>

                <p className="text-lg text-gray-300 leading-relaxed mb-8">
                  {film.behindTheScenes.content}
                </p>

                <div>
                  <h4 className="text-xl font-semibold text-white mb-4">Production Highlights</h4>
                  <ul className="space-y-3">
                    {film.behindTheScenes.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimatedSection>
          )}

          {activeSection === 'details' && (
            <AnimatedSection direction="fade" className="max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold text-white mb-8 text-center">Wedding Details</h3>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Venue</h4>
                    <p className="text-gray-300">{film.weddingDetails.venue}</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Guest Count</h4>
                    <p className="text-gray-300">{film.weddingDetails.guests} guests</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Season</h4>
                    <p className="text-gray-300">{film.weddingDetails.season}</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Style</h4>
                    <p className="text-gray-300">{film.weddingDetails.style}</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Color Palette</h4>
                    <p className="text-gray-300">{film.weddingDetails.colors}</p>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-4">Celebration Highlights</h4>
                  <ul className="space-y-3">
                    {film.weddingDetails.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimatedSection>
          )}
        </div>
      </section>

      {/* Related Films */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-6">
          <AnimatedSection direction="fade" delay={0.2}>
            <h3 className="text-3xl font-bold text-white mb-8 text-center">More Wedding Films</h3>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {relatedFilms.map((relatedFilm, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-lg aspect-[16/9] cursor-pointer transform transition-all duration-500 hover:scale-105"
                  onClick={() => router.push(`/films/${relatedFilm.slug}`)}
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url('${relatedFilm.thumbnail}')` }}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-30 transition-all duration-300" />

                  <div className="absolute inset-0 flex items-end p-6">
                    <div className="text-white">
                      <h4 className="text-xl font-bold mb-1">{relatedFilm.title}</h4>
                      <p className="text-gray-300">{relatedFilm.location}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Gallery Modal */}
      {selectedGalleryImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-95">
          <div className="relative max-w-6xl max-h-full">
            <button
              onClick={() => setSelectedGalleryImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img
              src={selectedGalleryImage}
              alt="Gallery Image"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  )
}
