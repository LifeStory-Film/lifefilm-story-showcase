import type { Metadata } from 'next'
import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Four Seasons Wedding Videographer | LifeStory.Film',
  description:
    'Cinematic wedding films at Four Seasons properties in Los Angeles and Beverly Hills. LifeStory.Film brings the same level of detail to every shoot as the venue brings to every event.',
  keywords:
    'Four Seasons wedding videographer, Four Seasons Los Angeles wedding film, Four Seasons Beverly Hills wedding videography, luxury hotel wedding videography LA',
  openGraph: {
    title: 'Four Seasons Wedding Videographer | LifeStory.Film',
    description:
      'Cinematic wedding films at Four Seasons Los Angeles and Beverly Hills. When the venue demands the best, so does the film.',
    type: 'website',
    images: [
      {
        url: 'https://img.youtube.com/vi/z_6rqvk2tAs/maxresdefault.jpg',
        width: 1280,
        height: 720,
        alt: 'Four Seasons wedding film by LifeStory.Film',
      },
    ],
    siteName: 'LifeStory.Film',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Four Seasons Wedding Videographer | LifeStory.Film',
    description: 'Cinematic wedding films at Four Seasons properties in Los Angeles.',
    images: ['https://img.youtube.com/vi/z_6rqvk2tAs/maxresdefault.jpg'],
  },
}

export default function FourSeasonsPage() {
  return (
    <main className="min-h-screen bg-[#0f0e0c] text-white">
      <Navigation />

      <article className="pt-24 pb-32">
        <div className="container mx-auto px-6 max-w-4xl">
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-10" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[#BFA181] transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Four Seasons Wedding Videographer</span>
          </nav>

          {/* H1 */}
          <header className="mb-10">
            <div className="text-[#BFA181] text-xs tracking-widest uppercase mb-3">Los Angeles & Beverly Hills, CA</div>
            <h1 className="text-4xl md:text-6xl font-bold text-white font-['Playfair_Display'] leading-tight mb-4">
              Four Seasons Wedding Videographer
            </h1>
            <p className="text-xl text-gray-400 font-light">
              Films that match the standard of the venue — and hold up long after the flowers are gone.
            </p>
          </header>

          {/* Film embed */}
          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-[#1a1916] mb-12">
            <iframe
              src="https://www.youtube.com/embed/z_6rqvk2tAs?si=43vuFod-iY4Pvp0w"
              title="Michelle & Jason — Los Angeles Wedding Film by LifeStory.Film"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>

          <div className="text-gray-400 text-sm italic mb-16 text-center">
            Michelle & Jason — Los Angeles
          </div>

          {/* Copy */}
          <div className="prose prose-invert prose-lg max-w-none mb-16 space-y-6 text-gray-300 leading-relaxed">
            <p>
              A Four Seasons wedding comes with a specific set of expectations — for the food, the service, the flowers, the coordination. Everything is deliberate. Nothing is left to chance. We approach our work the same way. When couples choose the Four Seasons for their wedding, they're usually the kind of people who care about craft and quality at every level of their day. We're here to meet that standard in the film.
            </p>
            <p>
              We've filmed weddings at Four Seasons properties across Los Angeles and Beverly Hills, from grand ballroom celebrations to intimate courtyard ceremonies. We know how to work alongside the Four Seasons events team, how to navigate a luxury hotel without being in the way, and how to use the architecture and interior design of these properties to their full visual potential.
            </p>
            <p>
              The interiors at Four Seasons venues — the chandeliers, the high ceilings, the carefully curated lighting design — create natural film environments that we love working in. We don't impose a look onto your wedding. We let the environment set the tone and focus on the emotion happening inside it.
            </p>
            <p>
              Whether your celebration involves two hundred guests and a ten-piece band, or sixty people in a private dining room with someone you love playing guitar in the corner — the approach is the same. We show up early, stay late, and make something you'll still be watching in twenty years.
            </p>
            <p>
              Four Seasons dates at peak times — particularly spring and fall — book out months in advance. If you have a date set, let us know as soon as possible.
            </p>
          </div>

          {/* CTA */}
          <div className="bg-[#1a1916] rounded-2xl p-10 border border-zinc-800 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">Planning a Four Seasons wedding?</h2>
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
