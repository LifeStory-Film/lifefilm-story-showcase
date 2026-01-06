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
      duration: "4:32",
      description: "A breathtaking luxury resort wedding with sweeping ocean views and elegant architecture.",
      videoId: "cp3PmoI9nio",
      embedUrl: "https://www.youtube.com/embed/cp3PmoI9nio?si=EkwuDwuG3FMy9Uys",
      thumbnail: `https://img.youtube.com/vi/cp3PmoI9nio/maxresdefault.jpg`
    },
    {
      title: "Katherine & Harsh",
      location: "Saratoga Springs",
      category: "Indian & Vietnamese",
      duration: "5:18",
      description: "A beautiful fusion of Indian and Vietnamese traditions in a stunning garden setting.",
      videoId: "G4Mlon9-iLY",
      embedUrl: "https://www.youtube.com/embed/G4Mlon9-iLY?si=vUBoA_fMh2qzD2kh",
      thumbnail: `https://img.youtube.com/vi/G4Mlon9-iLY/maxresdefault.jpg`
    },
    {
      title: "Josh & Whitney",
      location: "New York",
      category: "Destination",
      duration: "3:45",
      description: "An intimate destination wedding capturing the energy and romance of the city.",
      videoId: "WCjUi2yqK3U",
      embedUrl: "https://www.youtube.com/embed/WCjUi2yqK3U?si=BGGRwNil8rAHfLIh",
      thumbnail: `https://img.youtube.com/vi/WCjUi2yqK3U/maxresdefault.jpg`
    },
    {
      title: "Ayaka & Kyan",
      location: "Malibu",
      category: "Coastal",
      duration: "4:12",
      description: "A dreamy beachside wedding with the Pacific Ocean as the perfect backdrop.",
      videoId: "17rIApee9B8",
      embedUrl: "https://www.youtube.com/embed/17rIApee9B8?si=1iWNkH4CHI1EkXKt",
      thumbnail: `https://img.youtube.com/vi/17rIApee9B8/maxresdefault.jpg`
    },
    {
      title: "Michelle & Jason",
      location: "Los Angeles",
      category: "Indian & Jewish",
      duration: "6:20",
      description: "A grand celebration blending Indian and Jewish traditions in a historic venue.",
      videoId: "z_6rqvk2tAs",
      embedUrl: "https://www.youtube.com/embed/z_6rqvk2tAs?si=43vuFod-iY4Pvp0w",
      thumbnail: `https://img.youtube.com/vi/z_6rqvk2tAs/maxresdefault.jpg`
    },
    {
      title: "Ayaka & Kyan",
      location: "Palos Verdes",
      category: "Indian",
      duration: "4:45",
      description: "A beautiful Indian wedding celebration with stunning coastal views.",
      videoId: "ETxaM39nn4E",
      embedUrl: "https://www.youtube.com/embed/ETxaM39nn4E?si=1iWNkH4CHI1EkXKt",
      thumbnail: `https://img.youtube.com/vi/ETxaM39nn4E/maxresdefault.jpg`
    },
    {
      title: "Charlotte & John",
      location: "San Francisco",
      category: "Destination",
      duration: "5:30",
      description: "A romantic destination wedding in the heart of San Francisco.",
      videoId: "D_vIC41fA4U",
      embedUrl: "https://www.youtube.com/embed/D_vIC41fA4U?si=DlnudIoq-MnZGBad",
      thumbnail: `https://img.youtube.com/vi/D_vIC41fA4U/maxresdefault.jpg`
    },
    {
      title: "Carrie & Grant",
      location: "Malibu",
      category: "Coastal",
      duration: "4:15",
      description: "A stunning coastal wedding with breathtaking Malibu ocean views.",
      videoId: "SoXEpK1tGYo",
      embedUrl: "https://www.youtube.com/embed/SoXEpK1tGYo?si=BGGRwNil8rAHfLIh",
      thumbnail: `https://img.youtube.com/vi/SoXEpK1tGYo/maxresdefault.jpg`
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

              {/* Duration Badge */}
              <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-sm px-3 py-1 rounded text-white text-sm font-medium">
                {film.duration}
              </div>

              {/* Category Badge */}
              <div className="absolute top-4 right-4 bg-[#BFA181]/90 backdrop-blur-sm px-3 py-1 rounded text-[#002349] text-xs font-semibold uppercase tracking-wide">
                {film.category}
              </div>

              {/* Premium Quality Badge */}
              <div className="absolute top-14 right-4 flex items-center space-x-1 bg-white/10 backdrop-blur-sm px-2 py-1 rounded text-white text-xs">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Premium Quality</span>
              </div>

              {/* Film Info */}
              <div className="absolute inset-0 flex items-end p-6">
                <div className="text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-2xl font-bold mb-1">{film.title}</h3>
                  <p className="text-gray-300 mb-2">{film.location}</p>
                  <p className="text-sm text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 line-clamp-2">
                    {film.description}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* CTA Section */}
        <AnimatedSection direction="up" className="text-center mt-12">
          <div className="max-w-2xl mx-auto mb-8">
            <p className="text-gray-300 text-lg mb-6">
              Ready to have your wedding day captured with this level of artistry?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => {
                  const element = document.getElementById('contact')
                  if (element) element.scrollIntoView({ behavior: 'smooth' })
                }}
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-black hover:bg-gray-100 transition-all duration-300 rounded-full font-medium"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>Check Date Availability</span>
              </button>
              <button
                onClick={() => window.location.href = '/films'}
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300 rounded-full font-medium"
              >
                <span>Watch More Real Weddings</span>
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>
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
