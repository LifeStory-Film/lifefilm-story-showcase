'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'

// Planner data - can be expanded for different planners
const plannerData: Record<string, { name: string; instagram?: string }> = {
  'nicole-dohrman': { name: 'Nicole Dohrman', instagram: '@by_nicoledohrman' },
  'template': { name: '[PLANNER NAME]', instagram: '' }
}

export default function PlannerReferralPage() {
  const params = useParams()
  const plannerSlug = params.planner as string
  const planner = plannerData[plannerSlug] || plannerData['template']

  const [isLoaded, setIsLoaded] = useState(false)
  const [playingVideo, setPlayingVideo] = useState<string | null>(null)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const featuredFilms = [
    { title: "Ryan & Victoria", videoId: "cp3PmoI9nio" },
    { title: "Katherine & Harsh", videoId: "ljl8OClQxGo" },
    { title: "Amber & Robert", videoId: "3NL0HfVa5HI" },
    { title: "Swati & Andrew", videoId: "OSXUDSAq0h4" },
    { title: "Billy & Mackenzie", videoId: "KLJu4ibRG7A" }
  ]

  const featuredPhotos = [
    "https://ext.same-assets.com/613934530/2180482571.webp",
    "https://ext.same-assets.com/613934530/24522886.webp",
    "https://ext.same-assets.com/613934530/2159466363.jpeg",
    "https://ext.same-assets.com/613934530/2357869345.webp",
    "https://ext.same-assets.com/613934530/1122270631.jpeg"
  ]

  return (
    <div className="min-h-screen bg-[#fafaf9] text-[#1a1a1a]">
      {/* Subtle brand gradient at top */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#1a1a1a] via-[#BFA181] to-[#1a1a1a] z-[60]" />

      {/* Navigation */}
      <nav className="fixed top-1 left-0 right-0 z-50 bg-[#fafaf9]/95 backdrop-blur-md border-b border-[#e5e5e5]">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="group">
            <span className="text-xl tracking-tight">
              <span className="text-[#1a1a1a] group-hover:text-[#BFA181] transition-colors">LifeStory</span>
              <span className="text-[#737373]">.Film</span>
            </span>
          </Link>
          <a
            href="#availability"
            className="text-sm bg-[#1a1a1a] text-white px-6 py-2.5 rounded-full hover:bg-[#BFA181] transition-colors font-medium"
          >
            Check Availability
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-36 pb-20 px-6">
        <div className={`max-w-2xl mx-auto text-center transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <p className="text-sm text-[#BFA181] tracking-widest uppercase mb-6">
            A Trusted Creative Partner
          </p>

          <h1 className="text-4xl md:text-5xl font-light leading-tight mb-6 font-serif">
            Recommended by<br />
            <span className="font-normal">{planner.name}</span>
          </h1>

          <p className="text-lg text-[#525252] font-light leading-relaxed">
            Photography and cinematic videography for couples working alongside {planner.name}.
          </p>
        </div>
      </section>

      {/* Personal Intro */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-xl mx-auto text-center">
          <p className="text-lg text-[#404040] font-light leading-relaxed">
            Our work aligns closely with {planner.name}'s approach — weddings that feel calm, intentional, and deeply personal. Together, we focus on creating space for couples who value artistry, trust, and a seamless creative experience.
          </p>
        </div>
      </section>

      {/* Subtle divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#BFA181]/30 to-transparent" />

      {/* Why Couples Love Working With Us */}
      <section className="py-24 px-6 bg-gradient-to-b from-[#fafaf9] to-white">
        <div className="max-w-2xl mx-auto">
          {/* Card container for elevation */}
          <div className="bg-white rounded-2xl shadow-sm border border-[#f0f0ef] p-8 md:p-12">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-8 h-px bg-[#BFA181]/40" />
              <p className="text-xs text-[#BFA181] tracking-[0.15em] uppercase font-medium">
                Our Approach
              </p>
              <div className="w-8 h-px bg-[#BFA181]/40" />
            </div>

            <h2 className="text-2xl md:text-[1.75rem] font-light text-center mb-10 font-serif text-[#1a1a1a]">
              Why Planners Trust Us With Their Couples
            </h2>

            <ul className="space-y-6 max-w-lg mx-auto">
              {[
                "We move with the day, not against it — planners never have to manage us",
                "Couples feel at ease, not directed — we capture emotion, not performance",
                "One team for photo and film means fewer moving parts and seamless coordination",
                "Clear, calm communication from first inquiry through final delivery"
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-4"
                >
                  <span className="w-1.5 h-1.5 bg-[#BFA181] rounded-full mt-2.5 flex-shrink-0" />
                  <span className="text-[#404040] font-light leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Planner-Exclusive Bonus */}
      <section className="py-24 px-6 bg-gradient-to-b from-white via-[#f8f8f7] to-[#f5f5f4]">
        <div className="max-w-3xl mx-auto">
          {/* Eyebrow Label */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-10 h-px bg-[#BFA181]/40" />
            <p className="text-xs text-[#BFA181] tracking-[0.2em] uppercase font-medium">
              Planner-Exclusive
            </p>
            <div className="w-10 h-px bg-[#BFA181]/40" />
          </div>

          {/* Headline */}
          <h2 className="text-2xl md:text-[1.75rem] font-light text-center mb-12 font-serif text-[#1a1a1a]">
            A Thoughtful Thank You for Working with {planner.name}
          </h2>

          {/* Two-Card Layout */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Drone Footage Card */}
            <div className="relative bg-white rounded-2xl border border-[#e8e8e6] shadow-sm p-8 hover:shadow-md hover:border-[#BFA181]/30 transition-all duration-300">
              {/* Subtle accent */}
              <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-[#BFA181]/30 to-transparent" />

              {/* Icon */}
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#f8f8f7] to-[#f0f0ef] flex items-center justify-center mb-5 mx-auto">
                <svg className="w-6 h-6 text-[#BFA181]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.25}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                </svg>
              </div>

              {/* Content */}
              <div className="text-center">
                <h3 className="text-[#1a1a1a] font-medium text-lg mb-2">
                  Complimentary Drone Footage
                </h3>
                <p className="text-[#737373] text-sm font-light leading-relaxed">
                  Aerial perspectives of your venue and celebration, where conditions permit.
                </p>
              </div>
            </div>

            {/* Social Media Teaser Card */}
            <div className="relative bg-white rounded-2xl border border-[#e8e8e6] shadow-sm p-8 hover:shadow-md hover:border-[#BFA181]/30 transition-all duration-300">
              {/* Subtle accent */}
              <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-[#BFA181]/30 to-transparent" />

              {/* Icon */}
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#f8f8f7] to-[#f0f0ef] flex items-center justify-center mb-5 mx-auto">
                <svg className="w-6 h-6 text-[#BFA181]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.25}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
                </svg>
              </div>

              {/* Content */}
              <div className="text-center">
                <h3 className="text-[#1a1a1a] font-medium text-lg mb-2">
                  Complimentary Social Teaser
                </h3>
                <p className="text-[#737373] text-sm font-light leading-relaxed">
                  A short, shareable moment designed for Instagram and social sharing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emotional bridge before films */}
      <div className="py-8 px-6 text-center">
        <p className="text-[#737373] font-light italic text-lg max-w-xl mx-auto">
          And then there is motion — the way a veil catches the wind, the pause before a first look, the laughter that follows.
        </p>
      </div>

      {/* Featured Films - Horizontal Carousel */}
      <section className="pt-12 pb-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 px-6">
            <h2 className="text-2xl font-light mb-4 font-serif">
              Featured Films
            </h2>
            <p className="text-[#737373] font-light">
              A glimpse into how we tell love stories.
            </p>
          </div>

          {/* Films Carousel */}
          <div className="relative group/carousel">
            <div
              className="flex gap-6 overflow-x-auto scrollbar-hide px-6 pb-4 snap-x snap-mandatory"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {featuredFilms.map((film, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-[320px] md:w-[400px] snap-center"
                >
                  <div
                    className="group relative aspect-video rounded-lg overflow-hidden cursor-pointer bg-[#e5e5e5]"
                    onClick={() => setPlayingVideo(playingVideo === film.videoId ? null : film.videoId)}
                  >
                    {playingVideo !== film.videoId ? (
                      <>
                        <img
                          src={`https://img.youtube.com/vi/${film.videoId}/maxresdefault.jpg`}
                          alt={film.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />

                        {/* Play Button */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-12 h-12 bg-white/95 rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                            <svg className="w-4 h-4 text-[#1a1a1a] ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M8 5v14l11-7z" />
                            </svg>
                          </div>
                        </div>
                      </>
                    ) : (
                      <iframe
                        className="absolute inset-0 w-full h-full"
                        src={`https://www.youtube.com/embed/${film.videoId}?autoplay=1&rel=0`}
                        title={film.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    )}
                  </div>
                  {/* Minimal title */}
                  <p className="mt-3 text-center text-sm text-[#525252] font-light">{film.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Photography - Horizontal Carousel */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 px-6">
            <h2 className="text-2xl font-light mb-4 font-serif">
              Featured Photography
            </h2>
            <p className="text-[#737373] font-light">
              Timeless moments captured with intention and artistry.
            </p>
          </div>

          {/* Photography Carousel */}
          <div className="relative">
            <div
              className="flex gap-5 overflow-x-auto scrollbar-hide px-6 pb-4 snap-x snap-mandatory"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {featuredPhotos.map((photo, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-[280px] md:w-[360px] snap-center"
                >
                  <div className="relative aspect-[3/4] rounded-lg overflow-hidden">
                    <img
                      src={photo}
                      alt={`Wedding photography ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Links */}
      <section className="py-20 px-6 bg-[#f5f5f4]">
        <div className="max-w-xl mx-auto text-center">
          <p className="text-sm text-[#737373] font-light mb-6">
            View complete galleries to explore our full range of work.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/photography"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#1a1a1a] border border-[#e5e5e5] px-6 py-3 rounded-full hover:border-[#BFA181] hover:text-[#BFA181] transition-colors font-light shadow-sm"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              View Photography Portfolio
            </Link>
            <Link
              href="/videography"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#1a1a1a] border border-[#e5e5e5] px-6 py-3 rounded-full hover:border-[#BFA181] hover:text-[#BFA181] transition-colors font-light shadow-sm"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              View Film Portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* Coverage & Pricing */}
      <section className="py-24 px-6 bg-gradient-to-b from-[#f5f5f4] to-[#fafaf9]">
        <div className="max-w-2xl mx-auto">
          {/* Card container */}
          <div className="bg-white rounded-2xl shadow-sm border border-[#f0f0ef] p-8 md:p-10 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-px bg-[#BFA181]/30" />
              <p className="text-xs text-[#BFA181] tracking-[0.15em] uppercase font-medium">
                Investment
              </p>
              <div className="w-8 h-px bg-[#BFA181]/30" />
            </div>

            <h2 className="text-2xl font-light mb-8 font-serif text-[#1a1a1a]">
              Coverage & Investment
            </h2>

            <div className="space-y-5 text-[#404040] font-light">
              <p className="leading-relaxed">
                We design coverage around the emotional arc of your day — not a checklist.
              </p>
              <p className="leading-relaxed">
                Photo and film packages begin around <span className="text-[#1a1a1a] font-medium">$6,500</span>, with most couples booking 8–10 hours to capture the full story.
              </p>
              <p className="text-[#737373] text-sm pt-2">
                Every package is tailored to your timeline, venue, and vision.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Planner Referral Note */}
      <section className="py-12 px-6 bg-[#f5f5f4]">
        <div className="max-w-xl mx-auto text-center">
          <p className="text-sm text-[#737373]">
            You've arrived through {planner.name}'s personal recommendation.
            <br />
            Please mention this connection when reaching out.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section id="availability" className="py-28 px-6 bg-gradient-to-b from-[#fafaf9] to-[#f0f0ef]">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl font-light mb-4 font-serif">
            Let's Start a Conversation
          </h2>

          <p className="text-[#525252] font-light mb-8 max-w-md mx-auto">
            You're here because {planner.name} believes we'd be a great fit. We'd love to learn more about your day.
          </p>

          <a
            href={`mailto:rick@lifestory.film?subject=Inquiry%20via%20${encodeURIComponent(planner.name)}&body=Hi%20Rich%2C%0A%0AI%20was%20referred%20by%20${encodeURIComponent(planner.name)}%20and%20would%20like%20to%20check%20availability.%0A%0AThank%20you!`}
            className="inline-block bg-[#1a1a1a] text-white px-10 py-4 rounded-full font-medium hover:bg-[#BFA181] transition-colors mb-6"
          >
            Check Availability
          </a>

          <p className="text-sm text-[#737373] font-light max-w-sm mx-auto">
            We work with a limited number of couples each year — not out of exclusivity, but to give each story the attention it deserves.
          </p>
        </div>
      </section>

      {/* Footer with brand bridge */}
      <footer className="py-8 px-6 bg-[#1a1a1a] text-white/70">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <Link href="/" className="font-medium text-white hover:text-[#BFA181] transition-colors">
            LifeStory.Film
          </Link>
          <p className="text-white/50">Photography + Cinematography</p>
          <a
            href="https://calendar.app.google/QSmtnnjfvghb5HtSA"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#BFA181] transition-colors"
          >
            Schedule a Call
          </a>
        </div>
      </footer>

      {/* Hide scrollbar styles */}
      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  )
}

