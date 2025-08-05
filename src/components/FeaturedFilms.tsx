'use client'

import { useState } from 'react'
import { AnimatedSection } from './AnimatedSection'
import { OptimizedImage } from './OptimizedImage'
import { OptimizedVideo } from './OptimizedVideo'

export function FeaturedFilms() {
  const [selectedVideo, setSelectedVideo] = useState<number | null>(null)

  const films = [
    {
      title: "Ryan & Victoria",
      location: "The Resort At Pelican Hill",
      category: "Destination",
      videoId: "cp3PmoI9nio",
      embedUrl: "https://www.youtube.com/embed/cp3PmoI9nio?si=EkwuDwuG3FMy9Uys",
      thumbnail: `https://img.youtube.com/vi/cp3PmoI9nio/maxresdefault.jpg`
    },
    {
      title: "Katherine & Harsh",
      location: "Saratoga Springs",
      category: "Indian & Vietnamese",
      videoId: "G4Mlon9-iLY",
      embedUrl: "https://www.youtube.com/embed/G4Mlon9-iLY?si=vUBoA_fMh2qzD2kh",
      thumbnail: `https://img.youtube.com/vi/G4Mlon9-iLY/maxresdefault.jpg`
    },
    {
      title: "Josh & Whitney",
      location: "New York",
      category: "Destination",
      videoId: "WCjUi2yqK3U",
      embedUrl: "https://www.youtube.com/embed/WCjUi2yqK3U?si=BGGRwNil8rAHfLIh",
      thumbnail: `https://img.youtube.com/vi/WCjUi2yqK3U/maxresdefault.jpg`
    },
    {
      title: "Ayaka & Kyan",
      location: "Malibu",
      category: "Coastal",
      videoId: "17rIApee9B8",
      embedUrl: "https://www.youtube.com/embed/17rIApee9B8?si=1iWNkH4CHI1EkXKt",
      thumbnail: `https://img.youtube.com/vi/17rIApee9B8/maxresdefault.jpg`
    },
    {
      title: "Michelle & Jason",
      location: "Los Angeles",
      category: "Indian & Jewish",
      videoId: "z_6rqvk2tAs",
      embedUrl: "https://www.youtube.com/embed/z_6rqvk2tAs?si=43vuFod-iY4Pvp0w",
      thumbnail: `https://img.youtube.com/vi/z_6rqvk2tAs/maxresdefault.jpg`
    },
    {
      title: "Shannon & Scott",
      location: "Monterey",
      category: "Coastal",
      videoId: "zt_tZMADJwY",
      embedUrl: "https://www.youtube.com/embed/zt_tZMADJwY?si=DlnudIoq-MnZGBad",
      thumbnail: `https://img.youtube.com/vi/zt_tZMADJwY/maxresdefault.jpg`
    }
  ]

  const openVideoModal = (index: number) => {
    setSelectedVideo(index)
    document.body.style.overflow = 'hidden'
  }

  const closeVideoModal = () => {
    setSelectedVideo(null)
    document.body.style.overflow = 'unset'
  }

  return (
    <section id="films" className="py-32 bg-zinc-900">
      <div className="container mx-auto px-6">
        <AnimatedSection direction="fade" className="text-center mb-16">
          <h2 className="section-text text-white mb-6">
            featured
            <br />
            <span className="text-gray-400">films</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light">
            Each film is crafted to reflect the couple's unique story,
            blending documentary authenticity with cinematic artistry.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {films.map((film, index) => (
            <AnimatedSection
              key={index}
              direction="up"
              delay={index * 0.1}
              className="group relative overflow-hidden rounded-lg aspect-[16/9] cursor-pointer transform transition-all duration-500 hover:scale-105"
              onClick={() => openVideoModal(index)}
            >
              {/* Optimized Video Thumbnail */}
              <OptimizedImage
                src={film.thumbnail}
                alt={`${film.title} - ${film.location} Wedding Film`}
                className="absolute inset-0 transition-transform duration-700 group-hover:scale-110"
                fallbackSrc={`https://img.youtube.com/vi/${film.videoId}/hqdefault.jpg`}
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
                  <div className="text-sm text-gray-300 mb-2">{film.category}</div>
                  <h3 className="text-2xl font-bold mb-1">{film.title}</h3>
                  <p className="text-gray-300">{film.location}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* View All Films Button */}
        <AnimatedSection direction="up" className="text-center">
          <button
            onClick={() => window.location.href = '/films'}
            className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300 rounded-full font-medium"
          >
            <span>View All Films</span>
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </AnimatedSection>
      </div>

      {/* Video Modal */}
      {selectedVideo !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4">
          <div className="relative w-full max-w-5xl">
            {/* Close Button */}
            <button
              onClick={closeVideoModal}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-10"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Video Container */}
            <div className="relative aspect-[16/9] bg-black rounded-lg overflow-hidden">
              <OptimizedVideo
                videoId={films[selectedVideo].videoId}
                title={`${films[selectedVideo].title} Wedding Film`}
                autoplay={true}
                controls={true}
                className="w-full h-full"
              />
            </div>

            {/* Film Info */}
            <div className="mt-6 text-center text-white">
              <h3 className="text-2xl font-bold mb-2">{films[selectedVideo].title}</h3>
              <p className="text-gray-300">{films[selectedVideo].location}</p>
            </div>
          </div>
        </div>
      )}

      {/* Close modal on escape key */}
      {selectedVideo !== null && (
        <div
          className="fixed inset-0 z-40"
          onClick={closeVideoModal}
          onKeyDown={(e) => e.key === 'Escape' && closeVideoModal()}
          tabIndex={0}
        />
      )}
    </section>
  )
}
