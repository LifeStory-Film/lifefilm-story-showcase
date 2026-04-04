import type { Metadata } from 'next'
import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Malibu Wedding Videographer | LifeStory.Film',
  description:
    'Malibu wedding videographer and photographer. Coastal wedding films and photography along the Pacific Coast Highway. LifeStory.Film — luxury coverage since 2010.',
  keywords:
    'Malibu wedding videographer, Malibu beach wedding film, Malibu Rocky Oaks wedding videography, coastal wedding videography Los Angeles',
  openGraph: {
    title: 'Malibu Wedding Videographer | LifeStory.Film',
    description:
      'Cinematic wedding films along the Malibu coastline. We\'ve filmed at Malibu Rocky Oaks, private beach estates, and blufftop venues with the Pacific as the backdrop.',
    type: 'website',
    images: [
      {
        url: 'https://img.youtube.com/vi/SoXEpK1tGYo/maxresdefault.jpg',
        width: 1280,
        height: 720,
        alt: 'Malibu wedding film by LifeStory.Film',
      },
    ],
    siteName: 'LifeStory.Film',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Malibu Wedding Videographer | LifeStory.Film',
    description: 'Cinematic wedding films along the Malibu coastline.',
    images: ['https://img.youtube.com/vi/SoXEpK1tGYo/maxresdefault.jpg'],
  },
}

export default function MalibuPage() {
  return (
    <main className="min-h-screen bg-[#0f0e0c] text-white">
      <Navigation />

      <article className="pt-24 pb-32">
        <div className="container mx-auto px-6 max-w-4xl">
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-10" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[#BFA181] transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Malibu Wedding Videographer</span>
          </nav>

          {/* H1 */}
          <header className="mb-10">
            <div className="text-[#BFA181] text-xs tracking-widest uppercase mb-3">Malibu, CA</div>
            <h1 className="text-4xl md:text-6xl font-bold text-white font-['Playfair_Display'] leading-tight mb-4">
              Malibu Wedding Videographer
            </h1>
            <p className="text-xl text-gray-400 font-light">
              Cinematic wedding films where the Santa Monica Mountains meet the Pacific.
            </p>
          </header>

          {/* Film embed */}
          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-[#1a1916] mb-12">
            <iframe
              src="https://www.youtube.com/embed/SoXEpK1tGYo?si=BGGRwNil8rAHfLIh"
              title="Carrie & Grant — Malibu Wedding Film by LifeStory.Film"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>

          <div className="text-gray-400 text-sm italic mb-16 text-center">
            Carrie & Grant — Malibu, CA
          </div>

          {/* Copy */}
          <div className="prose prose-invert prose-lg max-w-none mb-16 space-y-6 text-gray-300 leading-relaxed">
            <p>
              Malibu has a way of making everything feel both effortless and epic. The Pacific stretches out in every direction. The light at magic hour is unlike anywhere else in California. And whether you're getting married at Malibu Rocky Oaks, a private blufftop estate, or on a stretch of beach with nothing but ocean ahead of you — the setting does half our work.
            </p>
            <p>
              We've been filming weddings in Malibu for over fifteen years. We know the venues, the permit requirements, the access roads, and how the coastal wind behaves on an August afternoon. We know which angles showcase the Pacific and which corners give couples a rare moment of privacy during a day that's anything but. That local knowledge means nothing slips by us.
            </p>
            <p>
              Our Malibu films have a particular look: warm, unhurried, and full of space. We let the landscape breathe. We stay close during the moments that matter — your vows, your first look, the last dance — and pull back to show the scale of where you chose to start your life together. The result is a film that feels as wide open as the view from the cliffs.
            </p>
            <p>
              Every Malibu wedding is different — from intimate boho ceremonies of 20 guests to sprawling estate celebrations for 300. We approach each one the same way: with a full day's worth of attention, two cameras, and no agenda beyond making your film as honest and beautiful as your day actually was.
            </p>
            <p>
              Malibu dates book out quickly, especially for September and October when the light is at its best. If you have a date in mind, reach out early.
            </p>
          </div>

          {/* CTA */}
          <div className="bg-[#1a1916] rounded-2xl p-10 border border-zinc-800 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">Planning a Malibu wedding?</h2>
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
