'use client'

import { useState } from 'react'
import { AnimatedSection } from './AnimatedSection'
import { OptimizedImage } from './OptimizedImage'

export function BehindTheScenes() {
  const [selectedVideo, setSelectedVideo] = useState<number | null>(null)

  const videos = [
    {
      title: "Camera Crane in Action",
      description: "Professional crane shots for cinematic perspectives",
      videoId: "JEl79SvXGa4",
      embedUrl: "https://www.youtube.com/embed/JEl79SvXGa4",
      thumbnail: "https://img.youtube.com/vi/JEl79SvXGa4/maxresdefault.jpg",
      category: "BTS"
    },
    {
      title: "Drone Videography in Action",
      description: "Aerial cinematography for breathtaking venue coverage",
      videoId: "CGmoTeS3fwc",
      embedUrl: "https://www.youtube.com/embed/CGmoTeS3fwc",
      thumbnail: "https://img.youtube.com/vi/CGmoTeS3fwc/maxresdefault.jpg",
      category: "BTS"
    },
    {
      title: "Couple Session",
      description: "Intimate moments captured with artistic precision",
      videoId: "n-EK_eVyL5c",
      embedUrl: "https://www.youtube.com/embed/n-EK_eVyL5c",
      thumbnail: "https://img.youtube.com/vi/n-EK_eVyL5c/maxresdefault.jpg",
      category: "BTS"
    }
  ]

  const stats = [
    {
      number: "4K Ultra HD",
      label: "Cinema-grade image quality",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" />
        </svg>
      )
    },
    {
      number: "Professional Creative Team",
      label: "15+ years of wedding storytelling experience",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm3 2h6v4H7V5zm8 8v2h1v-2h-1zm-2-2H7v4h6v-4zm2 0h1V9h-1v2zm1-4V5h-1v2h1zM5 5v2H4V5h1zm0 4H4v2h1V9zm-1 4h1v2H4v-2z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      number: "100% Backup Coverage",
      label: "Redundant cameras, audio, and data on site",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      )
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
    <section className="py-32 bg-gradient-to-b from-[#002349] to-[#001a35]">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <AnimatedSection direction="fade" className="text-center mb-16">
          <h2 className="section-text text-white mb-6">
            behind the
            <br />
            <span className="text-gray-400 italic font-light">scenes</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light">
            See how we work on your wedding day – our professional approach, attention to detail, and
            passion for capturing every precious moment with cinematic precision.
          </p>
        </AnimatedSection>

        {/* Main Featured Video */}
        <AnimatedSection direction="up" delay={0.2} className="mb-12">
          <div className="relative rounded-2xl overflow-hidden aspect-video max-w-5xl mx-auto">
            <OptimizedImage
              src="https://img.youtube.com/vi/tocAcQrJNlE/maxresdefault.jpg"
              alt="Behind the Scenes - LifeStory.Film"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />

            {/* Art Film Badge */}
            <div className="absolute top-6 left-6 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
              <p className="text-white text-sm font-medium uppercase tracking-wider">Art Film by LifeStory.Film</p>
            </div>

            {/* Title Overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
              <h3 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-2xl">
                Behind The Scenes
              </h3>
              <p className="text-xl text-white/90 mb-8 max-w-2xl drop-shadow-lg">
                The Resort At Pelican Hill
              </p>

              {/* Play Button */}
              <a
                href="https://www.youtube.com/watch?v=tocAcQrJNlE"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/50 hover:bg-white/30 hover:scale-110 transition-all duration-300">
                  <div className="w-0 h-0 border-l-[20px] border-l-white border-y-[14px] border-y-transparent ml-1"></div>
                </div>
              </a>
            </div>

            {/* 4K Badge */}
            <div className="absolute top-6 right-6 flex items-center space-x-2 bg-black/50 backdrop-blur-sm px-3 py-2 rounded">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" />
              </svg>
              <span className="text-white text-sm font-semibold">4K Behind the Scenes</span>
            </div>

            {/* Watch CTA */}
            <div className="absolute bottom-6 right-6">
              <a
                href="https://www.youtube.com/watch?v=tocAcQrJNlE"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white hover:bg-white/20 transition-all duration-300"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                <span className="text-sm font-medium">Watch</span>
              </a>
            </div>
          </div>
        </AnimatedSection>

        {/* Video Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {videos.map((video, index) => (
            <AnimatedSection
              key={index}
              direction="up"
              delay={0.3 + index * 0.1}
              className="group relative overflow-hidden rounded-xl aspect-video cursor-pointer"
              onClick={() => openVideoModal(index)}
            >
              <OptimizedImage
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-all duration-300" />

              {/* Loading Video Text */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-white text-sm opacity-70">Loading video...</div>
              </div>

              {/* Category Badge */}
              <div className="absolute top-4 left-4 bg-[#BFA181]/90 backdrop-blur-sm px-3 py-1 rounded text-[#002349] text-xs font-semibold">
                {video.category}
              </div>

              {/* Watch Badge */}
              <div className="absolute top-4 right-4 flex items-center space-x-1 bg-white/10 backdrop-blur-sm px-2 py-1 rounded text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                <span>Watch</span>
              </div>

              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/50">
                  <div className="w-0 h-0 border-l-[14px] border-l-white border-y-[10px] border-y-transparent ml-1"></div>
                </div>
              </div>

              {/* Info */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                <h4 className="text-white font-semibold mb-1">{video.title}</h4>
                <p className="text-gray-300 text-sm">{video.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Equipment Stats */}
        <AnimatedSection direction="up" delay={0.6}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-[#002349]/50 backdrop-blur-sm border border-[#BFA181]/20 rounded-xl p-6 text-center hover:border-[#BFA181]/50 transition-all duration-300"
              >
                <div className="flex justify-center mb-4 text-[#BFA181]">
                  {stat.icon}
                </div>
                <div className="text-xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* CTA */}
        <AnimatedSection direction="up" delay={0.8} className="text-center mt-16">
          <div className="bg-gradient-to-r from-[#4F0341]/30 to-[#002349]/50 rounded-2xl p-12 border border-[#BFA181]/20 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-[#BFA181] mb-4">
              Ready for Cinematic Wedding Films That Last a Lifetime?
            </h3>
            <p className="text-xl text-[#EAE7DD] mb-8 max-w-2xl mx-auto">
              Let's discuss your wedding day and create a custom coverage plan that captures every moment.
            </p>
            <button
              onClick={() => {
                const element = document.getElementById('contact')
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' })
                }
              }}
              className="bg-[#BFA181] text-[#002349] px-8 py-4 rounded-lg font-medium text-lg hover:bg-[#957C3D] transition-all duration-300 transform hover:scale-105 inline-flex items-center"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Check Date Availability
            </button>
          </div>
        </AnimatedSection>
      </div>

      {/* Video Modal */}
      {selectedVideo !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4">
          <div className="relative w-full max-w-5xl">
            <button
              onClick={closeVideoModal}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-10"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="relative pt-[56.25%] bg-black rounded-lg overflow-hidden">
              <iframe
                className="absolute inset-0 w-full h-full"
                src={videos[selectedVideo].embedUrl}
                title={videos[selectedVideo].title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
