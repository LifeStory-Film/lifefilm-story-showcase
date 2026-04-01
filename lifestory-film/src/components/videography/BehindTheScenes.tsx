'use client'

import { useState } from 'react'
import { AnimatedSection } from '../AnimatedSection'

const MAIN_VIDEO_ID = 'tocAcQrJNlE'

const btsVideos = [
  {
    title: "Camera Crane in Action",
    description: "Professional crane shots for cinematic perspectives",
    videoId: "JEl79SvXGa4",
    embedUrl: "https://www.youtube.com/embed/JEl79SvXGa4",
    thumbnail: "https://img.youtube.com/vi/JEl79SvXGa4/maxresdefault.jpg",
  },
  {
    title: "Drone Videography in Action",
    description: "Aerial cinematography for breathtaking venue coverage",
    videoId: "CGmoTeS3fwc",
    embedUrl: "https://www.youtube.com/embed/CGmoTeS3fwc",
    thumbnail: "https://img.youtube.com/vi/CGmoTeS3fwc/maxresdefault.jpg",
  },
]

export function BehindTheScenes() {
  const [mainPlaying, setMainPlaying] = useState(false)
  const [selectedVideo, setSelectedVideo] = useState<number | null>(null)

  const openModal = (index: number) => {
    setSelectedVideo(index)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setSelectedVideo(null)
    document.body.style.overflow = 'unset'
  }

  return (
    <section className="py-32 bg-[#1a1916]">
      <div className="container mx-auto px-6">

        {/* Section Header */}
        <AnimatedSection direction="fade" className="text-center mb-16">
          <p className="text-[#BFA181] text-[11px] tracking-widest uppercase mb-5 font-light">Behind the Lens</p>
          <h2
            className="font-extrabold text-white leading-tight mb-4"
            style={{ fontSize: 'clamp(40px, 4.5vw, 56px)', letterSpacing: '-0.02em' }}
          >
            How We Work
          </h2>
          <p className="font-light text-white/55 max-w-[600px] mx-auto" style={{ fontSize: '18px' }}>
            An inside look at how we move through your wedding day — quietly, intentionally, and always in the right place.
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-7xl mx-auto">

          {/* LEFT — main video + 2 small below */}
          <AnimatedSection direction="left" delay={0.2}>
            {/* Main video */}
            <div className="relative aspect-video bg-[#211f1c] rounded-2xl overflow-hidden shadow-2xl border border-white/10 mb-4">
              {mainPlaying ? (
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${MAIN_VIDEO_ID}?autoplay=1&rel=0`}
                  title="LifeStory.Film — Behind the Scenes"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              ) : (
                <button
                  onClick={() => setMainPlaying(true)}
                  className="absolute inset-0 w-full h-full group"
                  aria-label="Play behind the scenes video"
                >
                  <img
                    src={`https://img.youtube.com/vi/${MAIN_VIDEO_ID}/maxresdefault.jpg`}
                    alt="Behind the scenes — LifeStory.Film"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />
                  <div className="absolute top-4 left-4 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-lg">
                    <p className="text-white text-xs font-medium uppercase tracking-wider">Behind the Scenes · LifeStory.Film</p>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/50 group-hover:bg-white/30 group-hover:scale-110 transition-all duration-300">
                      <div className="w-0 h-0 border-l-[20px] border-l-white border-y-[14px] border-y-transparent ml-1" />
                    </div>
                  </div>
                </button>
              )}
            </div>

            {/* 2 small videos */}
            <div className="grid grid-cols-2 gap-4">
              {btsVideos.map((video, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-xl aspect-video cursor-pointer"
                  onClick={() => openModal(index)}
                >
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-all duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/50">
                      <div className="w-0 h-0 border-l-[10px] border-l-white border-y-[8px] border-y-transparent ml-0.5" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
                    <h4 className="text-white font-semibold text-xs">{video.title}</h4>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* RIGHT — philosophy text */}
          <AnimatedSection direction="right" delay={0.4}>
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-white mb-4">Our Filmmaking Philosophy</h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Every wedding is a unique story waiting to be told. We approach each celebration
                  with the same care and creativity as a Hollywood production, but with the heart
                  and authenticity that makes your day truly yours.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#BFA181]/10 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-[#BFA181]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">Cinema-Grade Equipment</h4>
                    <p className="text-gray-400">
                      We shoot with professional cinema cameras and prime lenses — the same tools used on film sets, chosen because your wedding deserves that level of image quality.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#BFA181]/10 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-[#BFA181]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">Expert Team</h4>
                    <p className="text-gray-400">
                      Our filmmakers come from backgrounds in cinema, documentary, and fine art. We bring that eye to every wedding we shoot.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#BFA181]/10 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-[#BFA181]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">Unobtrusive Coverage</h4>
                    <p className="text-gray-400">
                      We blend into your celebration, capturing authentic moments without interrupting
                      the flow of your day. You'll barely notice us, but you'll love the results.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => {
                    const element = document.getElementById('contact')
                    if (element) element.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="px-8 py-4 rounded-full font-semibold text-base transition-colors inline-flex items-center gap-2"
                  style={{ backgroundColor: '#BFA181', color: '#0f0e0c' }}
                  onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#d4b896' }}
                  onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#BFA181' }}
                >
                  <span>Check Date Availability</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Process Timeline */}
        <AnimatedSection direction="up" delay={0.6} className="mt-20">
          <div className="max-w-5xl mx-auto">
            <h3 className="text-3xl font-bold text-white text-center mb-12">Our Production Process</h3>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Pre-Production", description: "We meet to discuss your vision, create shot lists, and plan the perfect coverage for your day." },
                { step: "02", title: "Wedding Day", description: "Our team captures every moment with cinema-grade equipment and creative directing." },
                { step: "03", title: "Post-Production", description: "Expert editing, color grading, and sound design transform raw footage into cinematic art." },
                { step: "04", title: "Final Delivery", description: "You receive your complete film package with online access." },
              ].map((phase, index) => (
                <div
                  key={index}
                  className="relative bg-[#211f1c] rounded-2xl p-6 border border-white/10 hover:border-[#BFA181]/40 transition-all duration-300 group"
                >
                  <div className="text-5xl font-bold text-white/10 group-hover:text-[#BFA181]/30 transition-colors mb-4">
                    {phase.step}
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-3">{phase.title}</h4>
                  <p className="text-gray-400 leading-relaxed">{phase.description}</p>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-1/2 left-full w-8 h-0.5 bg-white/10 group-hover:bg-[#BFA181]/30 transition-colors" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

      </div>

      {/* Modal for small videos */}
      {selectedVideo !== null && (
        <>
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90">
            <div className="relative w-full max-w-5xl">
              <button
                onClick={closeModal}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="relative pt-[56.25%] bg-black rounded-lg overflow-hidden">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={`${btsVideos[selectedVideo].embedUrl}?autoplay=1&rel=0`}
                  title={btsVideos[selectedVideo].title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
          <div className="fixed inset-0 z-40" onClick={closeModal} />
        </>
      )}
    </section>
  )
}
