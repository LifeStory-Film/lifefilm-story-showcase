'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { PrimaryCTA } from '@/components/PrimaryCTA'

const WHATSAPP = 'https://wa.me/13235564362'
const CALENDAR = 'https://calendar.app.google/QSmtnnjfvghb5HtSA'

const MASS_COVERAGE = [
  {
    title: 'Pre-Ceremony Prep',
    body: 'Both sides of the family — the quiet anticipation, the final touches, every getting-ready moment.',
    path: 'M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z',
  },
  {
    title: 'The Baraat + Hindu Ceremony',
    body: "The groom's procession, the mandap, the saat phere (seven steps), the sacred fire, and every blessing — filmed with the reverence each ritual deserves.",
    path: 'M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z',
  },
  {
    title: 'The Western Ceremony',
    body: 'The processional, the vows, the rings, the first kiss — the full Western ceremony, start to finish.',
    path: 'M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z',
  },
  {
    title: 'Portraits + Family',
    body: 'Every generation, every grouping — and the two of you, unhurried, in the light of the day.',
    path: 'M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316zM16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z',
  },
  {
    title: 'Reception',
    body: "Toasts, first dance, the parents' dances, and the send-off — every beat of the celebration.",
    path: 'M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z',
  },
]

type PackageFeature = { text: string; highlight?: boolean }

function buildPackageFeatures(pkg: {
  featureFilm: boolean
  ceremonyEdit: boolean
}): PackageFeature[] {
  const features: PackageFeature[] = [
    {
      text:
        'Full coverage of both ceremonies — the baraat, the mandap, the saat phere, and the Western ceremony',
      highlight: true,
    },
    { text: '3–5 min cinematic highlight film' },
  ]
  if (pkg.featureFilm) features.push({ text: 'One-Hour Feature Film' })
  if (pkg.ceremonyEdit) features.push({ text: 'Ceremony edit' })
  features.push(
    { text: 'Color correction' },
    { text: 'Music license' },
    { text: 'Professional cinema cameras' },
    { text: '4K resolution' },
    { text: 'Drone coverage' },
    { text: 'Online gallery' },
  )
  return features
}

const PACKAGES: {
  id: string
  name: string
  hours: number
  price: string
  featureFilm: boolean
  ceremonyEdit: boolean
  recommended: boolean
}[] = [
  {
    id: 'jenna-essential-10hr',
    name: 'Essential',
    hours: 10,
    price: '$8,500',
    featureFilm: false,
    ceremonyEdit: false,
    recommended: false,
  },
  {
    id: 'jenna-signature-12hr',
    name: 'Signature',
    hours: 12,
    price: '$10,500',
    featureFilm: false,
    ceremonyEdit: true,
    recommended: true,
  },
  {
    id: 'jenna-cinematic-12hr',
    name: 'Cinematic',
    hours: 12,
    price: '$13,500',
    featureFilm: true,
    ceremonyEdit: true,
    recommended: false,
  },
]

export default function JennaPage() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className="min-h-screen bg-[#0f0e0c] text-[#EAE7DD]">
      <Navigation />

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
            Jenna
          </h1>

          <p className="text-xl md:text-2xl text-[#EAE7DD]/90 font-light leading-relaxed font-serif italic mb-8">
            Cinematic wedding films that honor both ceremonies — every ritual, every vow, every
            celebration.
          </p>

          <p className="text-base text-[#EAE7DD]/55 font-light leading-relaxed max-w-xl mx-auto">
            June 19, 2027 &middot; Jasna Polana, Princeton NJ. Luxury wedding cinematography to
            capture your Hindu-Western fusion wedding in full.
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
            Jenna — thank you so much for reaching out. We&apos;d be honored to film your wedding day
            at Jasna Polana. We know a Hindu-Western fusion wedding holds two full ceremonies, each
            with its own meaning and rhythm — and we film both in their entirety. The baraat, the
            mandap, the saat phere, the vows, the rings, the first look, the toasts — nothing is
            cut for time. And yes — we travel to you. We&apos;ll be there in Princeton, fully
            prepared, the day before. Capturing your day exactly as it unfolds is what we do.
          </p>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-[#BFA181]/30 to-transparent" />

      {/* We film both ceremonies, in full */}
      <section className="py-24 px-6 bg-[#0f0e0c]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs text-[#BFA181] tracking-[0.2em] uppercase font-medium mb-4">
              Full Coverage
            </p>
            <h2 className="text-3xl md:text-4xl font-light font-serif text-white">
              We Film Both Ceremonies, in Full
            </h2>
            <p className="mt-4 text-[#EAE7DD]/55 font-light max-w-2xl mx-auto">
              From the first getting-ready moment to the final send-off, here is everything your
              coverage holds.
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
            Nothing is shortened or skipped — both ceremonies are preserved, start to finish.
          </p>
        </div>
      </section>

      {/* The packages */}
      <section className="py-28 px-6 bg-gradient-diagonal">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs text-[#BFA181] tracking-[0.2em] uppercase font-medium mb-4">
              Your Investment
            </p>
            <h2 className="text-3xl md:text-4xl font-light font-serif text-white">
              Your Film
            </h2>
            <p className="mt-4 text-[#EAE7DD]/55 font-light">
              Choose the coverage that matches your day.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-5 lg:items-start">
            {PACKAGES.map((pkg) => (
              <div
                key={pkg.id}
                className={`relative rounded-2xl bg-[#211f1c] transition-all duration-300 hover:scale-[1.02] ${
                  pkg.recommended
                    ? 'ring-2 ring-[#4F0341] shadow-[0_0_40px_rgba(79,3,65,0.35)]'
                    : 'border border-white/8'
                }`}
              >
                {pkg.recommended && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                    <div
                      className="px-4 py-1.5 rounded-full text-xs font-medium tracking-[0.18em] uppercase whitespace-nowrap"
                      style={{ backgroundColor: '#4F0341', color: '#957C3D' }}
                    >
                      Most chosen
                    </div>
                  </div>
                )}

                <div className="p-8">
                  {/* Header */}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-[#EAE7DD] mb-1">{pkg.name}</h3>
                    <p className="text-[#EAE7DD]/55 text-sm mb-5">{pkg.hours}-Hour Coverage</p>

                    {/* Price */}
                    <div className="mb-4">
                      <div className="text-[36px] font-bold text-[#BFA181] leading-none">{pkg.price}</div>
                    </div>

                    <div className="text-[#EAE7DD]/80 text-sm mb-2">{pkg.hours} hours of coverage</div>
                    <div className="text-[#EAE7DD]/70 text-sm flex items-center justify-center">
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                          clipRule="evenodd"
                        />
                      </svg>
                      2 cinematographers
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="space-y-4 mb-8">
                    {buildPackageFeatures(pkg).map((feature) => (
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
                  <PrimaryCTA
                    variant="primary"
                    href={`${CALENDAR}?package=${pkg.id}`}
                    className="w-full"
                  >
                    Book This Date
                  </PrimaryCTA>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-10 text-center text-sm text-[#EAE7DD]/55 font-light">
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
      <section id="contact" className="py-28 px-6 bg-[#0f0e0c]">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-4 font-serif text-white">
            We&apos;d love to film your day.
          </h2>
          <p className="text-[#EAE7DD]/60 font-light max-w-md mx-auto">
            Reach out whenever you&apos;re ready — we&apos;ll hold a conversation around your timeline,
            your venue, and your vision.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6 bg-[#0a0908] border-t border-white/5">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <Link href="/" className="font-medium text-white hover:text-[#BFA181] transition-colors">
            LifeStory.Film
          </Link>
          <p className="text-white/40">Photography + Cinematography · California</p>
          <div className="flex items-center gap-5">
            <a
              href={CALENDAR}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-[#BFA181] transition-colors"
            >
              Schedule a Call
            </a>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-[#BFA181] transition-colors"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
