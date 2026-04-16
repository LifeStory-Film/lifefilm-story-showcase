'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { PackagesSection } from '@/components/PackagesSection'
import { ContactSection } from '@/components/ContactSection'
import { Footer } from '@/components/Footer'

const FILMS = [
  {
    title: 'Ryan & Victoria',
    subtitle: 'Elegant Estate · Southern California',
    videoId: 'cp3PmoI9nio',
  },
  {
    title: 'Serena & Daniel',
    subtitle: 'Garden Ceremony · Los Angeles',
    videoId: 'vvYnUEuwOGM',
  },
]

const WHY_US = [
  {
    heading: 'Church ceremony specialists',
    body: 'We understand the Armenian Apostolic ceremony structure — the crowning, the joining of hands, the candles — and never miss a sacred moment.',
  },
  {
    heading: 'Grand reception coverage',
    body: 'Armenian receptions are legendary for their energy and dancing. We capture all of it — every toast, every circle dance, every tearful embrace.',
  },
  {
    heading: 'Detail photography',
    body: 'The crown, the candles, and the traditional elements — documented with care and artistry so nothing is forgotten.',
  },
  {
    heading: 'Glendale and greater LA coverage at no extra cost',
    body: "We're based here and know every venue — from Glendale churches to the grandest ballrooms across Southern California.",
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

export default function ArmenianWeddingVideographer() {
  return (
    <main className="min-h-screen bg-[#0f0e0c] text-white">
      <Navigation />

      {/* Hero */}
      <section className="relative pt-40 pb-24 px-6 overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://ext.same-assets.com/613934530/2357869345.webp"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(15,14,12,0.6)' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f0e0c]/60 via-transparent to-[#0f0e0c]/80" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="text-[#BFA181] text-[11px] tracking-widest uppercase mb-5 font-light">Armenian Weddings</p>
          <h1
            className="font-extrabold text-white leading-tight mb-6"
            style={{ fontSize: 'clamp(44px, 6vw, 72px)', letterSpacing: '-0.02em' }}
          >
            Your Heritage. Your Story. On Film.
          </h1>
          <p className="font-light text-white/70 max-w-[680px] mx-auto mb-10" style={{ fontSize: '18px' }}>
            Los Angeles is home to one of the largest Armenian communities outside of Armenia — and we&apos;ve had the honor of documenting some of its most beautiful weddings. From church ceremonies in Glendale to grand receptions across Southern California.
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

      {/* Stats */}
      <section className="py-16 bg-[#0f0e0c] border-b border-white/5">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-3 gap-8 text-center">
            <div>
              <div className="font-extrabold text-white mb-1" style={{ fontSize: 'clamp(32px, 4vw, 48px)', letterSpacing: '-0.02em' }}>60+</div>
              <div className="text-white/45 text-sm font-light">Armenian Weddings</div>
            </div>
            <div>
              <div className="font-extrabold text-white mb-1" style={{ fontSize: 'clamp(32px, 4vw, 48px)', letterSpacing: '-0.02em' }}>15+</div>
              <div className="text-white/45 text-sm font-light">Years Experience</div>
            </div>
            <div>
              <div className="font-extrabold text-white mb-1" style={{ fontSize: 'clamp(32px, 4vw, 48px)', letterSpacing: '-0.02em' }}>5.0</div>
              <div className="text-white/45 text-sm font-light">The Knot &amp; Google</div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-20 bg-[#0f0e0c]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="w-12 h-px mx-auto mb-8" style={{ backgroundColor: '#BFA181' }} />
          <blockquote
            className="text-white font-light italic leading-relaxed"
            style={{ fontSize: 'clamp(20px, 2.5vw, 28px)', fontFamily: 'Playfair Display, Georgia, serif' }}
          >
            "Armenian weddings carry the weight of history and the joy of generations. We approach each one with the reverence it deserves — and the cinematic eye it demands."
          </blockquote>
          <div className="w-12 h-px mx-auto mt-8" style={{ backgroundColor: '#BFA181' }} />
          <p className="mt-6 text-sm tracking-widest uppercase font-light" style={{ color: 'rgba(191,161,129,0.6)' }}>
            — The LifeStory.Film approach
          </p>
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
              Built for Celebrations This Meaningful
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {WHY_US.map((item) => (
              <div key={item.heading} className="p-8 rounded-2xl bg-[#211f1c]">
                <div className="w-8 h-px mb-4" style={{ backgroundColor: '#BFA181' }} />
                <h3 className="text-white font-semibold text-lg mb-3">{item.heading}</h3>
                <p className="text-white/55 font-light leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internal links */}
      <section className="py-8 bg-[#1a1916] px-6">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-white/35 text-sm">
            Explore our{' '}
            <Link href="/photography" className="text-[#BFA181] hover:text-white transition-colors duration-200">wedding photography portfolio</Link>
            {' '}or learn about our{' '}
            <Link href="/pricing" className="text-[#BFA181] hover:text-white transition-colors duration-200">packages and pricing</Link>
            .
          </p>
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
              Armenian Weddings We&apos;ve Filmed
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
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
