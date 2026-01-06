'use client'

import Link from 'next/link'
import { useState } from 'react'
import { AnimatedSection } from './AnimatedSection'

interface Film {
  slug: string
  title: string
  location: string
  category: string
  date: string
  videoId: string
  embedUrl: string
  thumbnail: string
  description: string
  highlights: string[]
  duration: string
  style: string
  testimonial: {
    quote: string
    author: string
  }
}

interface FilmDetailPageProps {
  film: Film
}

export function FilmDetailPage({ film }: FilmDetailPageProps) {
  const [videoLoaded, setVideoLoaded] = useState(false)

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-effect py-6">
        <div className="container mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold tracking-tight hover:text-gray-300 transition-colors">
            LifeStory<span className="text-gray-400">.Film</span>
          </Link>

          <div className="flex items-center space-x-6">
            <Link href="/#films" className="text-sm font-medium hover:text-gray-300 transition-colors">
              Back to Films
            </Link>
            <Link href="/#contact" className="bg-white text-black px-6 py-2 rounded-full font-medium hover:bg-gray-200 transition-colors">
              Inquire
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section with Video */}
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-6">
          <AnimatedSection direction="fade" className="text-center mb-12">
            <div className="text-sm text-gray-400 mb-4">{film.category}</div>
            <h1 className="section-text text-white mb-4">
              {film.title}
            </h1>
            <p className="text-xl text-gray-300 mb-2">{film.location}</p>
            <p className="text-gray-400">{film.date}</p>
          </AnimatedSection>

          {/* Video Player */}
          <AnimatedSection direction="up" delay={0.3} className="max-w-6xl mx-auto mb-16">
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-zinc-900">
              {!videoLoaded && (
                <div
                  className="absolute inset-0 bg-cover bg-center cursor-pointer group"
                  style={{ backgroundImage: `url('${film.thumbnail}')` }}
                  onClick={() => setVideoLoaded(true)}
                >
                  <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-20 transition-all duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 bg-white bg-opacity-90 rounded-full flex items-center justify-center backdrop-blur-sm transform transition-transform duration-300 group-hover:scale-110">
                      <div className="w-0 h-0 border-l-[20px] border-l-black border-y-[15px] border-y-transparent ml-1"></div>
                    </div>
                  </div>
                </div>
              )}

              {videoLoaded && (
                <iframe
                  className="w-full h-full"
                  src={`${film.embedUrl}&autoplay=1`}
                  title={`${film.title} Wedding Film`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              )}
            </div>
          </AnimatedSection>

          {/* Film Details */}
          <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {/* Left Column */}
            <AnimatedSection direction="left" delay={0.5}>
              <h2 className="text-3xl font-bold text-white mb-6">The Story</h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                {film.description}
              </p>

              {/* Film Info */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <h3 className="text-white font-semibold mb-2">Duration</h3>
                  <p className="text-gray-400">{film.duration}</p>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Style</h3>
                  <p className="text-gray-400">{film.style}</p>
                </div>
              </div>

              {/* Highlights */}
              <h3 className="text-white font-semibold mb-4">Film Highlights</h3>
              <ul className="space-y-3">
                {film.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">{highlight}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>

            {/* Right Column */}
            <AnimatedSection direction="right" delay={0.7}>
              {/* Client Testimonial */}
              <div className="bg-zinc-900 rounded-2xl p-8 mb-8">
                <svg className="w-8 h-8 text-gray-400 mb-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.732 4.732a.75.75 0 011.36-.632l.007.015c.44.96.742 2.084.742 3.435 0 2.21-1.79 4-4 4s-4-1.79-4-4 1.79-4 4-4zM13.732 4.732a.75.75 0 011.36-.632l.007.015c.44.96.742 2.084.742 3.435 0 2.21-1.79 4-4 4s-4-1.79-4-4 1.79-4 4-4z" clipRule="evenodd" />
                </svg>
                <blockquote className="text-xl text-white mb-4 italic leading-relaxed">
                  "{film.testimonial.quote}"
                </blockquote>
                <cite className="text-gray-400 font-medium">— {film.testimonial.author}</cite>
              </div>

              {/* Contact CTA */}
              <div className="bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Love this style?</h3>
                <p className="text-gray-300 mb-6">
                  Let's create something beautiful for your special day. Get in touch to discuss your vision.
                </p>
                <Link
                  href="/#contact"
                  className="inline-block bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-200 transition-colors"
                >
                  Start Your Story
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Related Films Section */}
      <section className="py-16 bg-zinc-900">
        <div className="container mx-auto px-6">
          <AnimatedSection direction="fade" className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">More Featured Films</h2>
            <p className="text-gray-300">Explore more of our cinematic wedding stories</p>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.3} className="text-center">
            <Link
              href="/#films"
              className="border border-white text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-white hover:text-black transition-all duration-300"
            >
              View All Films
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </main>
  )
}
