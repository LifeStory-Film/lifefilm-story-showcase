'use client'

import { useState } from 'react'
import { Navigation } from '@/components/Navigation'
import { PackagesSection } from '@/components/PackagesSection'
import { ContactSection } from '@/components/ContactSection'
import { Footer } from '@/components/Footer'

const FILMS = [
  {
    title: 'Katherine & Harsh',
    subtitle: 'Indian & Vietnamese · Saratoga Springs',
    videoId: 'G4Mlon9-iLY',
  },
  {
    title: 'Michelle & Jason',
    subtitle: 'Indian & Jewish · Los Angeles',
    videoId: 'z_6rqvk2tAs',
  },
  {
    title: 'Jazza & Naim',
    subtitle: 'Indian · Palos Verdes',
    videoId: 'ETxaM39nn4E',
  },
]

const WHY_US = [
  {
    heading: 'Multi-day coverage specialists',
    body: 'We cover Mehndi, Sangeet, Baraat, and reception as one cohesive story — nothing is treated as a side event.',
  },
  {
    heading: 'Two full teams',
    body: 'Photographers and cinematographers working in sync so nothing is missed across overlapping ceremonies.',
  },
  {
    heading: 'Color and light experts',
    body: 'We know how to shoot rich fabrics, intricate jewelry, and candlelight beautifully on camera.',
  },
  {
    heading: 'Unobtrusive and respectful',
    body: 'We blend into the ceremony without disrupting sacred moments — guests rarely notice us.',
  },
]

function FilmThumbnail({ film }: { film: typeof FILMS[0] }) {
  const [playing, setPlaying] = useState(false)

  return (
    <div className="relative overflow-hidden rounded-xl" style={{ aspectRatio: '16/9' }}>
      {playing ? (
        <iframe
          src={`https://www.youtube.com/embed/${film.videoId}?autoplay=1&rel=0`}
          title={film.title}
          className="absolute inset-0 w-full h-full"
          allow="autoplay; fullscreen"
          allowFullScreen
        />
      ) : (
        <button
          className="absolute inset-0 w-full h-full group"
          onClick={() => setPlaying(true)}
          aria-label={`Play ${film.title} wedding film`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`https://img.youtube.com/vi/${film.videoId}/maxresdefault.jpg`}
            alt={`${film.title} wedding film`}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-14 h-14 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110" style={{ backgroundColor: '#BFA181' }}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="#0f0e0c">
                <path d="M6 4l12 6-12 6V4z" />
              </svg>
            </div>
          </div>
          <div className="absolute bottom-4 left-4 text-left">
            <div className="text-white font-semibold text-base">{film.title}</div>
            <div className="text-white/60 text-sm">{film.subtitle}</div>
          </div>
        </button>
      )}
    </div>
  )
}

export default function SouthAsianWeddingVideographer() {
  return (
    <main className="min-h-screen bg-[#0f0e0c] text-white">
      <Navigation />

      {/* Hero */}
      <section className="pt-40 pb-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#BFA181] text-[11px] tracking-widest uppercase mb-5 font-light">South Asian Weddings</p>
          <h1
            className="font-extrabold text-white leading-tight mb-6"
            style={{ fontSize: 'clamp(44px, 6vw, 72px)', letterSpacing: '-0.02em' }}
          >
            Your Traditions. Your Story. On Film.
          </h1>
          <p className="font-light text-white/55 max-w-[680px] mx-auto mb-10" style={{ fontSize: '18px' }}>
            We've documented over 200 South Asian weddings across Southern California — multi-day celebrations, multiple outfits, multiple ceremonies. We know how to be everywhere at once.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#films"
              className="px-8 py-3.5 rounded-full text-sm font-semibold tracking-wide transition-colors duration-200"
              style={{ backgroundColor: '#BFA181', color: '#0f0e0c' }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#d4b896')}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#BFA181')}
            >
              Watch Our Films
            </a>
            <a
              href="#contact"
              className="text-white/60 hover:text-white text-sm tracking-wide transition-colors duration-200"
            >
              Check date availability →
            </a>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-24 bg-[#1a1916] px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#BFA181] text-[11px] tracking-widest uppercase mb-5 font-light">Why Choose Us</p>
            <h2
              className="font-extrabold text-white leading-tight"
              style={{ fontSize: 'clamp(32px, 4vw, 48px)', letterSpacing: '-0.02em' }}
            >
              Built for Celebrations This Big
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {WHY_US.map((item) => (
              <div key={item.heading} className="p-8 rounded-2xl" style={{ backgroundColor: '#211f1c' }}>
                <div className="w-8 h-px mb-4" style={{ backgroundColor: '#BFA181' }} />
                <h3 className="text-white font-semibold text-lg mb-3">{item.heading}</h3>
                <p className="text-white/55 font-light leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Films */}
      <section id="films" className="py-24 px-6 bg-[#0f0e0c]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#BFA181] text-[11px] tracking-widest uppercase mb-5 font-light">Featured Films</p>
            <h2
              className="font-extrabold text-white leading-tight"
              style={{ fontSize: 'clamp(32px, 4vw, 48px)', letterSpacing: '-0.02em' }}
            >
              South Asian Weddings We've Filmed
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {FILMS.map((film) => (
              <FilmThumbnail key={film.videoId} film={film} />
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <PackagesSection />

      {/* Contact */}
      <ContactSection />

      <Footer />
    </main>
  )
}
