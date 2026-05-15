'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { PrimaryCTA } from '@/components/PrimaryCTA'

const WHATSAPP = 'https://wa.me/13235564362'
const CALENDAR = 'https://calendar.app.google/QSmtnnjfvghb5HtSA'

const FILMS = [
  { videoId: 'cAmjboBcwHM', label: 'Filipino Catholic Wedding Film' },
  { videoId: 'dS3CpwNcQP8', label: 'Filipino Catholic Wedding Film' },
  { videoId: 'aWcoxt-yC1Q', label: 'Filipino Catholic Wedding Film' },
  { videoId: 'zOziSBTmCVM', label: 'Filipino Catholic Wedding Film' },
  { videoId: 'oi3fY-wRW9M', label: 'Feature Wedding Film' },
]

// Real photos live in /public/karen-edward/photos/{slot}.jpg.
// Aspect is set per-photo so landscape and portrait shots are never center-cropped.
const PHOTOS: { slot: string; aspect: string }[] = [
  { slot: '01', aspect: 'aspect-[3/2]' },
  { slot: '02', aspect: 'aspect-[3/2]' },
  { slot: '03', aspect: 'aspect-[2/3]' },
  { slot: '04', aspect: 'aspect-[3/2]' },
  { slot: '05', aspect: 'aspect-[2/3]' },
  { slot: '06', aspect: 'aspect-[3/2]' },
  { slot: '07', aspect: 'aspect-[3/2]' },
  { slot: '08', aspect: 'aspect-[2/3]' },
  { slot: '09', aspect: 'aspect-[2/3]' },
  { slot: '10', aspect: 'aspect-[3/2]' },
  { slot: '11', aspect: 'aspect-[3/2]' },
  { slot: '12', aspect: 'aspect-[3/2]' },
  { slot: '13', aspect: 'aspect-[3/2]' },
  { slot: '14', aspect: 'aspect-[3/2]' },
  { slot: '15', aspect: 'aspect-[2/3]' },
  { slot: '16', aspect: 'aspect-[2/3]' },
  { slot: '17', aspect: 'aspect-[2/3]' },
  { slot: '18', aspect: 'aspect-[3/2]' },
  { slot: '19', aspect: 'aspect-[3/2]' },
  { slot: '20', aspect: 'aspect-[3/2]' },
  { slot: '21', aspect: 'aspect-[2/3]' },
  { slot: '22', aspect: 'aspect-[3/2]' },
  { slot: '23', aspect: 'aspect-[3/2]' },
  { slot: '24', aspect: 'aspect-[3/2]' },
  { slot: '25', aspect: 'aspect-[2/3]' },
  { slot: '26', aspect: 'aspect-[3/2]' },
  { slot: '27', aspect: 'aspect-[3/2]' },
  { slot: '28', aspect: 'aspect-[2/3]' },
  { slot: '29', aspect: 'aspect-[3/2]' },
  { slot: '30', aspect: 'aspect-[3/2]' },
]

const MASS_COVERAGE = [
  {
    title: 'Pre-Ceremony Prep',
    body: 'Both sides of the family — the quiet anticipation, the final touches, every getting-ready moment.',
    path: 'M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z',
  },
  {
    title: 'Processional + Full Mass',
    body: 'The entire Catholic mass — every reading, the homily, the vows, the rings, and communion.',
    path: 'M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z',
  },
  {
    title: 'Filipino Unity Rituals',
    body: 'The coin, the veil, the cord, and the candle — each tradition filmed with the reverence it deserves.',
    path: 'M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z',
  },
  {
    title: 'Family + Portrait Session',
    body: 'Every generation, every grouping — and the two of you, unhurried, in the light of the day.',
    path: 'M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316zM16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z',
  },
  {
    title: 'Reception',
    body: "Toasts, first dance, the parents' dances, the money dance, and the send-off — every beat of the celebration.",
    path: 'M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z',
  },
]

const PACKAGE_FEATURES: { text: string; highlight?: boolean }[] = [
  {
    text:
      'Full Catholic mass coverage — entire ceremony, every reading, vows, communion, and the Filipino unity rituals (coin, veil, cord, candle)',
    highlight: true,
  },
  { text: '600+ edited photos' },
  { text: '3–5 min cinematic highlight film' },
  { text: 'Ceremony edit' },
  { text: 'Color correction' },
  { text: 'Music license' },
  { text: 'Professional cinema cameras' },
  { text: 'Online gallery' },
]

function VideoCard({ film }: { film: (typeof FILMS)[number] }) {
  const [playing, setPlaying] = useState(false)

  return (
    <div className="relative overflow-hidden rounded-xl bg-[#211f1c]" style={{ aspectRatio: '16 / 9' }}>
      {playing ? (
        <iframe
          src={`https://www.youtube.com/embed/${film.videoId}?autoplay=1&rel=0`}
          title={film.label}
          className="absolute inset-0 w-full h-full"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          aria-label={`Play ${film.label}`}
          className="group absolute inset-0 w-full h-full"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`https://img.youtube.com/vi/${film.videoId}/maxresdefault.jpg`}
            alt={film.label}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/15 transition-colors duration-300" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110"
              style={{ backgroundColor: '#BFA181' }}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="#0f0e0c">
                <path d="M6 4l12 6-12 6V4z" />
              </svg>
            </div>
          </div>
        </button>
      )}
    </div>
  )
}

function PhotoSlot({ slot, aspect }: { slot: string; aspect: string }) {
  const [status, setStatus] = useState<'loading' | 'loaded' | 'error'>('loading')

  return (
    <div className={`relative ${aspect} w-full overflow-hidden rounded-xl bg-[#211f1c] border border-white/5`}>
      {/* Styled placeholder — visible until a real photo is dropped in */}
      {status !== 'loaded' && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-[#211f1c] to-[#1a1916]">
          <svg
            className="w-7 h-7 text-[#BFA181]/40"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth={1.25}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316zM16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z"
            />
          </svg>
          <span className="mt-2 text-[10px] tracking-[0.15em] uppercase text-white/25">
            Karen &amp; Edward
          </span>
        </div>
      )}

      <Image
        src={`/karen-edward/photos/${slot}.jpg`}
        alt={`Karen & Edward wedding photograph ${slot}`}
        fill
        sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
        className={`object-cover transition-opacity duration-700 ${
          status === 'loaded' ? 'opacity-100' : 'opacity-0'
        }`}
        onLoad={() => setStatus('loaded')}
        onError={() => setStatus('error')}
      />
    </div>
  )
}

export default function KarenAndEdwardPage() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className="min-h-screen bg-[#0f0e0c] text-[#EAE7DD]">
      {/* Brand gradient bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0f0e0c] via-[#BFA181] to-[#0f0e0c] z-[60]" />

      {/* Minimal navigation */}
      <nav className="fixed top-1 left-0 right-0 z-50 bg-[rgba(15,14,12,0.95)] backdrop-blur-md border-b border-white/8">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="group">
            <span className="text-xl tracking-tight">
              <span className="text-white group-hover:text-[#BFA181] transition-colors">LifeStory</span>
              <span className="text-white/45">.Film</span>
            </span>
          </Link>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm bg-[#BFA181] text-[#0f0e0c] px-6 py-2.5 rounded-full hover:bg-[#cdb591] transition-colors font-medium"
          >
            Message Us
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-40 pb-24 px-6">
        <div
          className={`max-w-3xl mx-auto text-center transition-all duration-1000 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <p className="text-xs text-[#BFA181] tracking-[0.25em] uppercase mb-6">
            Prepared exclusively for
          </p>

          <h1 className="text-5xl md:text-6xl font-light leading-tight mb-6 font-serif text-white">
            Karen &amp; Edward
          </h1>

          <p className="text-xl md:text-2xl text-[#EAE7DD]/90 font-light leading-relaxed font-serif italic mb-8">
            Filipino Catholic wedding photography and cinematography that honors every prayer, every
            promise, every tradition.
          </p>

          <p className="text-base text-[#EAE7DD]/55 font-light leading-relaxed max-w-xl mx-auto">
            California-based luxury photography and cinematography, specializing in Filipino weddings
            and full Catholic masses.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-[#BFA181] text-[#0f0e0c] px-9 py-4 rounded-full font-medium hover:bg-[#cdb591] transition-colors"
            >
              Message Us on WhatsApp
            </a>
            <a
              href={CALENDAR}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center border border-[#BFA181]/40 text-[#EAE7DD] px-9 py-4 rounded-full font-light hover:border-[#BFA181] hover:text-[#BFA181] transition-colors"
            >
              Schedule a Call
            </a>
          </div>
        </div>
      </section>

      {/* Personal welcome */}
      <section className="py-20 px-6 bg-[#1a1916]">
        <div className="max-w-2xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-10 h-px bg-[#BFA181]/40" />
            <p className="text-xs text-[#BFA181] tracking-[0.2em] uppercase font-medium">A Note for You</p>
            <div className="w-10 h-px bg-[#BFA181]/40" />
          </div>
          <p className="text-lg text-[#EAE7DD]/80 font-light leading-relaxed">
            Karen and Edward — thank you so much for reaching out. We&apos;d be honored to film your
            wedding day. To answer your question directly: yes, we film the <em>entire</em> Catholic
            mass — every reading, the homily, the vows, the rings, communion, the unity rituals (the
            coin, veil, cord, and candle), and the final blessing. Nothing is cut for time. The full
            liturgy is sacred, and we treat it that way.
          </p>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-[#BFA181]/30 to-transparent" />

      {/* Video gallery */}
      <section className="py-24 px-6 bg-[#0f0e0c]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs text-[#BFA181] tracking-[0.2em] uppercase font-medium mb-4">Our Work</p>
            <h2 className="text-3xl md:text-4xl font-light font-serif text-white">
              Weddings We&apos;ve Filmed
            </h2>
            <p className="mt-4 text-[#EAE7DD]/55 font-light">
              Four films from the church to the reception — tap any film to play.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {FILMS.map((film) => (
              <VideoCard key={film.videoId} film={film} />
            ))}
          </div>
        </div>
      </section>

      {/* Photo gallery */}
      <section className="py-24 px-6 bg-[#1a1916]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs text-[#BFA181] tracking-[0.2em] uppercase font-medium mb-4">
              Photography
            </p>
            <h2 className="text-3xl md:text-4xl font-light font-serif text-white">
              Stills From the Day
            </h2>
            <p className="mt-4 text-[#EAE7DD]/55 font-light">
              Timeless moments, captured with intention and artistry.
            </p>
          </div>

          <div className="columns-2 md:columns-3 lg:columns-4 gap-4 [column-fill:_balance]">
            {PHOTOS.map((photo) => (
              <div key={photo.slot} className="mb-4 break-inside-avoid">
                <PhotoSlot slot={photo.slot} aspect={photo.aspect} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-[#BFA181]/30 to-transparent" />

      {/* We film the entire Catholic mass */}
      <section className="py-24 px-6 bg-[#0f0e0c]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs text-[#BFA181] tracking-[0.2em] uppercase font-medium mb-4">
              Full Coverage
            </p>
            <h2 className="text-3xl md:text-4xl font-light font-serif text-white">
              We Film the Entire Catholic Mass
            </h2>
            <p className="mt-4 text-[#EAE7DD]/55 font-light max-w-2xl mx-auto">
              From the first getting-ready moment to the final send-off, here is everything your
              8-hour coverage holds.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {MASS_COVERAGE.map((item) => (
              <div
                key={item.title}
                className="relative bg-[#211f1c] rounded-2xl border border-white/8 p-8 hover:border-[#BFA181]/30 transition-colors duration-300"
              >
                <div className="w-14 h-14 rounded-full bg-[#1a1916] flex items-center justify-center mb-5">
                  <svg
                    className="w-6 h-6 text-[#BFA181]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={1.25}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d={item.path} />
                  </svg>
                </div>
                <h3 className="text-white font-medium text-lg mb-2">{item.title}</h3>
                <p className="text-[#EAE7DD]/55 text-sm font-light leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>

          <p className="mt-12 text-center text-[#BFA181] font-light italic text-lg max-w-2xl mx-auto">
            Nothing is shortened or skipped — the full liturgical ceremony is preserved, start to
            finish.
          </p>
        </div>
      </section>

      {/* The package */}
      <section className="py-28 px-6 bg-gradient-diagonal">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs text-[#BFA181] tracking-[0.2em] uppercase font-medium mb-4">
              Your Package
            </p>
            <h2 className="text-3xl md:text-4xl font-light font-serif text-white">
              Photo + Video, Together
            </h2>
            <p className="mt-4 text-[#EAE7DD]/55 font-light">
              One complete package, built for your day.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-2xl bg-[#211f1c] transition-all duration-300 hover:scale-[1.02]">
            {/* Most Popular ribbon */}
            <div className="absolute top-0 left-0 right-0 z-10">
              <div
                className="text-center py-3 font-medium text-sm"
                style={{ backgroundColor: '#4F0341', color: '#957C3D' }}
              >
                Most Popular
              </div>
            </div>

            <div className="p-8 pt-16">
              {/* Header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-[#EAE7DD] mb-1">Signature</h3>
                <p className="text-[#EAE7DD]/55 text-sm mb-5">Photo + Video for Karen &amp; Edward</p>

                {/* Price */}
                <div className="mb-4">
                  <div className="text-[36px] font-bold text-[#BFA181] leading-none">$7,621</div>
                  <div className="text-[#EAE7DD]/60 text-sm mt-1">weekday date</div>
                  <div className="mt-3 inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-[#BFA181] text-[#0f0e0c]">
                    Weekend Date +$693
                  </div>
                </div>

                <div className="text-[#EAE7DD]/80 text-sm mb-2">8 hours of coverage</div>
                <div className="text-[#EAE7DD]/70 text-sm flex items-center justify-center">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clipRule="evenodd"
                    />
                  </svg>
                  2 photographers + 2 videographers
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {PACKAGE_FEATURES.map((feature) => (
                  <li key={feature.text} className="flex items-start">
                    <div className="flex-shrink-0 mt-1 mr-3">
                      <svg className="w-5 h-5 text-[#BFA181]" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className={feature.highlight ? 'text-[#BFA181] font-medium' : 'text-[#EAE7DD]'}>
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <PrimaryCTA variant="primary" href={CALENDAR} className="w-full">
                Book This Date
              </PrimaryCTA>
            </div>
          </div>

          <p className="mt-6 text-center text-sm text-[#EAE7DD]/55 font-light">
            Questions?{' '}
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#BFA181] hover:opacity-75 transition-opacity"
            >
              Message Rich directly &rarr;
            </a>
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-28 px-6 bg-[#0f0e0c]">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-4 font-serif text-white">
            We&apos;d love to film your day.
          </h2>
          <p className="text-[#EAE7DD]/60 font-light mb-10 max-w-md mx-auto">
            Reach out whenever you&apos;re ready — we&apos;ll hold a conversation around your timeline,
            your parish, and your vision.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-[#BFA181] text-[#0f0e0c] px-9 py-4 rounded-full font-medium hover:bg-[#cdb591] transition-colors"
            >
              Message Us on WhatsApp
            </a>
            <a
              href={CALENDAR}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center border border-[#BFA181]/40 text-[#EAE7DD] px-9 py-4 rounded-full font-light hover:border-[#BFA181] hover:text-[#BFA181] transition-colors"
            >
              Schedule a Call
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6 bg-[#0a0908] border-t border-white/5">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <Link href="/" className="font-medium text-white hover:text-[#BFA181] transition-colors">
            LifeStory.Film
          </Link>
          <p className="text-white/40">Photography + Cinematography · California</p>
          <a
            href={CALENDAR}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 hover:text-[#BFA181] transition-colors"
          >
            Schedule a Call
          </a>
        </div>
      </footer>
    </div>
  )
}
