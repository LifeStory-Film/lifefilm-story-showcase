'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { AnimatedSection } from '../AnimatedSection'

export function VideographyPortfolio() {
  const [selectedFilm, setSelectedFilm] = useState<number | null>(null)
  const router = useRouter()

  const films = [
    {
      id: 1,
      title: "Ryan & Victoria",
      location: "Pelican Hill, Newport Beach",
      duration: "4:32",
      videoId: "cp3PmoI9nio",
      slug: "ryan-and-victoria"
    },
    {
      id: 2,
      title: "Katherine & Harsh",
      location: "Saratoga Springs, CA",
      duration: "5:12",
      videoId: "G4Mlon9-iLY",
      slug: "katherine-and-harsh"
    },
    {
      id: 3,
      title: "Josh & Whitney",
      location: "New York, NY",
      duration: "3:45",
      videoId: "WCjUi2yqK3U",
      slug: "josh-and-whitney"
    },
    {
      id: 4,
      title: "Ayaka & Kyan",
      location: "Malibu, CA",
      duration: "6:18",
      videoId: "17rIApee9B8",
      slug: "ayaka-and-kyan"
    },
    {
      id: 5,
      title: "Michelle & Jason",
      location: "Los Angeles, CA",
      duration: "4:55",
      videoId: "z_6rqvk2tAs",
      slug: "michelle-and-jason"
    },
    {
      id: 6,
      title: "Carrie & Grant",
      location: "Malibu, CA",
      duration: "5:30",
      videoId: "SoXEpK1tGYo",
      slug: "carrie-and-grant"
    }
  ]

  const openVideoModal = (index: number) => {
    setSelectedFilm(index)
    document.body.style.overflow = 'hidden'
  }

  const closeVideoModal = () => {
    setSelectedFilm(null)
    document.body.style.overflow = 'unset'
  }

  const navigateToFilm = (slug: string) => {
    router.push(`/films/${slug}`)
  }

  return (
    <section id="films" className="py-32 bg-[#0f0e0c]">
      <div className="container mx-auto px-6">
        <AnimatedSection direction="fade" className="text-center mb-16">
          <p className="text-[#BFA181] text-[11px] tracking-widest uppercase mb-5 font-light">Our Films</p>
          <h2
            className="font-extrabold text-white leading-tight mb-4"
            style={{ fontSize: 'clamp(40px, 4.5vw, 56px)', letterSpacing: '-0.02em' }}
          >
            Wedding Films
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light">
            Full wedding film galleries designed to give you a good understanding of what you are going to get.
            Each film showcases our cinematic approach to wedding storytelling.
          </p>
        </AnimatedSection>

        {/* Films Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {films.map((film, index) => (
            <AnimatedSection
              key={index}
              direction="up"
              delay={index * 0.1}
              className="group relative overflow-hidden rounded-lg aspect-[16/9] cursor-pointer transform transition-all duration-500 hover:scale-105"
              onClick={() => openVideoModal(index)}
            >
              {/* YouTube Thumbnail */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url('https://img.youtube.com/vi/${film.videoId}/maxresdefault.jpg')` }}
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-30 transition-all duration-300" />

              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-20 h-20 bg-white bg-opacity-90 rounded-full flex items-center justify-center backdrop-blur-sm transform transition-transform duration-300 group-hover:scale-110">
                  <div className="w-0 h-0 border-l-[16px] border-l-black border-y-[12px] border-y-transparent ml-1"></div>
                </div>
              </div>

              {/* Film Info */}
              <div className="absolute inset-0 flex items-end p-6">
                <div className="text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="text-sm text-gray-300 mb-2">{film.duration}</div>
                  <h3 className="text-xl font-bold mb-1">{film.title}</h3>
                  <p className="text-gray-300">{film.location}</p>

                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-3 flex gap-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        openVideoModal(index)
                      }}
                      className="text-sm text-white border border-white px-4 py-2 rounded-full hover:bg-white hover:text-black transition-all duration-300"
                    >
                      Watch Film
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        navigateToFilm(film.slug)
                      }}
                      className="text-sm text-white bg-white bg-opacity-20 px-4 py-2 rounded-full hover:bg-white hover:text-black transition-all duration-300"
                    >
                      Full Story
                    </button>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection direction="fade" delay={0.8} className="text-center">
          <p className="text-gray-400 mb-6">
            All films are shot with professional cinema cameras for maximum cinematic quality.
          </p>
          <button className="border border-white text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-white hover:text-black transition-all duration-300">
            View All Films
          </button>
        </AnimatedSection>
      </div>

      {/* Video Modal */}
      {selectedFilm !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-95">
          <div className="relative w-full max-w-5xl aspect-video">
            {/* Close Button */}
            <button
              onClick={closeVideoModal}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Video Embed */}
            <iframe
              className="w-full h-full rounded-lg"
              src={`https://www.youtube.com/embed/${films[selectedFilm].videoId}?autoplay=1&rel=0`}
              title={`${films[selectedFilm].title} Wedding Film`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />

            {/* Film Info Below Video */}
            <div className="mt-6 text-center text-white">
              <div className="text-sm text-gray-400 mb-2">{films[selectedFilm].duration}</div>
              <h3 className="text-2xl font-bold mb-1">{films[selectedFilm].title}</h3>
              <p className="text-gray-300">{films[selectedFilm].location}</p>
            </div>
          </div>
        </div>
      )}

      {/* Click outside to close */}
      {selectedFilm !== null && (
        <div
          className="fixed inset-0 z-40"
          onClick={closeVideoModal}
        />
      )}
    </section>
  )
}
