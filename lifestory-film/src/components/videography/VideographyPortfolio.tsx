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
      title: "Sarah & Michael",
      location: "Napa Valley, CA",
      duration: "4:32",
      thumbnail: "https://images.squarespace-cdn.com/content/v1/5de04e649f40c13aa68cadf9/99b0baa2-f383-4064-9924-58e3986719a9/French+Riviera+Wedding+Videography.jpg",
      videoUrl: "https://player.vimeo.com/video/950060298?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
      slug: "sarah-michael-napa-valley"
    },
    {
      id: 2,
      title: "Jessica & David",
      location: "Big Sur, CA",
      duration: "5:12",
      thumbnail: "https://images.squarespace-cdn.com/content/v1/674f379b66552d5bd917587b/37c25b3b-ba48-468e-8d4b-0c902174cfd3/russell-john-films-wedding-video-cinematography-twin-oaks-san-diego2.jpg",
      videoUrl: "https://player.vimeo.com/video/950060298?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
      slug: "jessica-david-big-sur"
    },
    {
      id: 3,
      title: "Emma & James",
      location: "Malibu, CA",
      duration: "3:45",
      thumbnail: "https://www.dolcevitaweddingcinema.com/wp-content/uploads/2024/01/wedding-lake-como-balbianello-videography-riva-boat-italy-luxury.jpg",
      videoUrl: "https://player.vimeo.com/video/950060298?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
      slug: "emma-james-malibu"
    },
    {
      id: 4,
      title: "Maria & Carlos",
      location: "Tulum, Mexico",
      duration: "6:18",
      thumbnail: "https://images.squarespace-cdn.com/content/v1/6347c44b9a8b8c0d95f6c3e3/1665710950901-YQJT8VYG0XCF8XKM7ZNJ/destination-wedding-film-tuscany-italy",
      videoUrl: "https://player.vimeo.com/video/950060298?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
      slug: "maria-carlos-tulum"
    },
    {
      id: 5,
      title: "Ashley & Ryan",
      location: "Beverly Hills, CA",
      duration: "4:55",
      thumbnail: "https://images.squarespace-cdn.com/content/v1/5de04e649f40c13aa68cadf9/1671045123423-8N0XVKZQXPJT6XFWH42E/luxury-wedding-videography-cinematography",
      videoUrl: "https://player.vimeo.com/video/950060298?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
      slug: "ashley-ryan-beverly-hills"
    },
    {
      id: 6,
      title: "Sophia & Alexander",
      location: "Paris, France",
      duration: "5:30",
      thumbnail: "https://images.squarespace-cdn.com/content/v1/5de04e649f40c13aa68cadf9/1671045123423-8N0XVKZQXPJT6XFWH42E/luxury-wedding-videography-cinematography",
      videoUrl: "https://player.vimeo.com/video/950060298?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
      slug: "sophia-alexander-paris"
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
    <section id="films" className="py-32 bg-black">
      <div className="container mx-auto px-6">
        <AnimatedSection direction="fade" className="text-center mb-16">
          <h2 className="section-text text-white mb-6">
            wedding
            <br />
            <span className="text-gray-400">films</span>
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
              {/* Video Thumbnail */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url('${film.thumbnail}')` }}
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
              src={`${films[selectedFilm].videoUrl}&autoplay=1`}
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
