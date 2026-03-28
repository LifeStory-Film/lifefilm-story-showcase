import type { Metadata } from 'next'
import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Pelican Hill Wedding Videographer | LifeStory.Film',
  description:
    'Cinematic wedding films at The Resort at Pelican Hill in Newport Beach. LifeStory.Film has been filming luxury weddings at Pelican Hill since 2010 — we know every corner of this venue.',
  keywords:
    'Pelican Hill wedding videographer, Resort at Pelican Hill wedding film, Newport Beach wedding videography, luxury wedding videography Orange County',
  openGraph: {
    title: 'Pelican Hill Wedding Videographer | LifeStory.Film',
    description:
      'Cinematic wedding films at The Resort at Pelican Hill. We\'ve filmed dozens of weddings here — we know exactly where the light falls.',
    type: 'website',
    images: [
      {
        url: 'https://img.youtube.com/vi/cp3PmoI9nio/maxresdefault.jpg',
        width: 1280,
        height: 720,
        alt: 'Pelican Hill wedding film by LifeStory.Film',
      },
    ],
    siteName: 'LifeStory.Film',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pelican Hill Wedding Videographer | LifeStory.Film',
    description: 'Cinematic wedding films at The Resort at Pelican Hill, Newport Beach.',
    images: ['https://img.youtube.com/vi/cp3PmoI9nio/maxresdefault.jpg'],
  },
}

export default function PelicanHillPage() {
  return (
    <main className="min-h-screen bg-[#0f0e0c] text-white">
      <Navigation />

      <article className="pt-24 pb-32">
        <div className="container mx-auto px-6 max-w-4xl">
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-10" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[#BFA181] transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Pelican Hill Wedding Videographer</span>
          </nav>

          {/* H1 */}
          <header className="mb-10">
            <div className="text-[#BFA181] text-xs tracking-widest uppercase mb-3">Newport Beach, CA</div>
            <h1 className="text-4xl md:text-6xl font-bold text-white font-['Playfair_Display'] leading-tight mb-4">
              Pelican Hill Wedding Videographer
            </h1>
            <p className="text-xl text-gray-400 font-light">
              Cinematic films at The Resort at Pelican Hill — where the Pacific meets Tuscan architecture.
            </p>
          </header>

          {/* Film embed */}
          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-[#1a1916] mb-12">
            <iframe
              src="https://www.youtube.com/embed/cp3PmoI9nio?si=EkwuDwuG3FMy9Uys"
              title="Ryan & Victoria — Pelican Hill Wedding Film by LifeStory.Film"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>

          <div className="text-gray-400 text-sm italic mb-16 text-center">
            Ryan & Victoria — The Resort at Pelican Hill, Newport Beach
          </div>

          {/* Copy */}
          <div className="prose prose-invert prose-lg max-w-none mb-16 space-y-6 text-gray-300 leading-relaxed">
            <p>
              The Resort at Pelican Hill is one of the most cinematic wedding venues in Southern California — and we've been filming here for over a decade. The sweeping ocean views from the ceremony lawn, the warm Italian travertine stone catching late afternoon light, the rotunda framing your first kiss: this venue was made for the kind of wedding film that moves people.
            </p>
            <p>
              We know where the light falls in every season. We know how the fog rolls in from the Pacific in June, and how golden hour from the south lawn turns everything to copper in October. We know which corridors create natural moments, which angles frame the rotunda perfectly, and how to stay invisible while being everywhere you need us.
            </p>
            <p>
              Our Pelican Hill films are built around storytelling — not just coverage. We arrive before your photographer, work quietly through every moment of your day, and then spend weeks in the edit shaping your footage into something with emotional weight. The goal isn't to document your wedding. It's to make you feel it all over again, every single time you watch it.
            </p>
            <p>
              Pelican Hill weddings often draw families from across the country and around the world. We've filmed intimate ceremonies of 30 guests and grand celebrations of 400. Every film gets the same care, the same deliberate craftsmanship, and the same obsessive attention to the moments you'll want to hold onto forever.
            </p>
            <p>
              If you're planning a wedding at Pelican Hill, we'd love to talk. We book a limited number of dates each year, and Pelican Hill weekends fill early. The sooner you reach out, the better our chances of being there with you.
            </p>
          </div>

          {/* CTA */}
          <div className="bg-[#1a1916] rounded-2xl p-10 border border-zinc-800 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">Planning a Pelican Hill wedding?</h2>
            <p className="text-gray-400 mb-6">
              Tell us your date and we'll check availability. We respond within 24 hours.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 bg-[#BFA181] text-black px-8 py-4 rounded-full font-semibold hover:bg-[#957C3D] transition-colors"
            >
              Check date availability
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  )
}
