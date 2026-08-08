import type { Metadata } from 'next'
import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { ContactSection } from '@/components/ContactSection'
import { LeadMagnet } from '@/components/LeadMagnet'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Napa Valley & Sonoma Wedding Videographer | LifeStory.Film',
  description:
    'Cinematic Napa Valley and Sonoma wedding films and photography — Meadowood, Calistoga Ranch, Beaulieu Garden. 7-time Best of Weddings on The Knot, 5.0 from 78 reviews, since 2010. Packages from $2,499.',
  keywords:
    'Napa wedding videographer, Sonoma wedding videographer, Napa Valley wedding film, wine country wedding videography, Meadowood wedding videographer',
  alternates: { canonical: 'https://lifestory.film/napa' },
  openGraph: {
    title: 'Napa Valley & Sonoma Wedding Videographer | LifeStory.Film',
    description: 'Cinematic wine-country wedding films across Napa & Sonoma — Meadowood, Calistoga Ranch, Beaulieu Garden. Since 2010.',
    type: 'website',
    url: 'https://lifestory.film/napa',
    siteName: 'LifeStory.Film',
    images: [{ url: 'https://img.youtube.com/vi/cp3PmoI9nio/maxresdefault.jpg', width: 1280, height: 720, alt: 'Napa Valley wedding film by LifeStory.Film' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Napa Valley & Sonoma Wedding Videographer | LifeStory.Film',
    description: 'Cinematic Napa & Sonoma wine-country wedding films — Meadowood, Calistoga Ranch, Beaulieu Garden.',
    images: ['https://img.youtube.com/vi/cp3PmoI9nio/maxresdefault.jpg'],
  },
}

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://lifestory.film/#localbusiness',
  name: 'LifeStory.Film',
  url: 'https://lifestory.film/napa',
  telephone: '+1-323-556-4362',
  priceRange: '$$$',
  image: 'https://lifestory.film/favicon-32.png',
  address: { '@type': 'PostalAddress', addressLocality: 'Los Angeles', addressRegion: 'CA', addressCountry: 'US' },
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '5.0', reviewCount: '78', bestRating: '5' },
  areaServed: [
    { '@type': 'City', name: 'Napa, CA' },
    { '@type': 'City', name: 'Sonoma, CA' },
    { '@type': 'City', name: 'St. Helena, CA' },
    { '@type': 'City', name: 'Calistoga, CA' },
  ],
}

const BREADCRUMB = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://lifestory.film/' },
    { '@type': 'ListItem', position: 2, name: 'Napa Valley Wedding Videographer', item: 'https://lifestory.film/napa' },
  ],
}

export default function NapaPage() {
  return (
    <main className="min-h-screen bg-[#0f0e0c] text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB) }} />
      <Navigation />

      <article className="pt-24 pb-24">
        <div className="container mx-auto px-6 max-w-4xl">
          <nav className="text-sm text-gray-500 mb-10" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[#BFA181] transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Napa Valley Wedding Videographer</span>
          </nav>

          <header className="mb-10">
            <div className="text-[#BFA181] text-xs tracking-widest uppercase mb-3">Napa Valley &amp; Sonoma, CA</div>
            <h1 className="text-4xl md:text-6xl font-bold text-white font-['Playfair_Display'] leading-tight mb-4">
              Napa Valley &amp; Sonoma Wedding Videographer
            </h1>
            <p className="text-xl text-gray-400 font-light">
              Cinematic wine-country wedding films and fine-art photography — from the vineyards of Rutherford to the estates of Sonoma.
            </p>
          </header>

          <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm text-gray-400 mb-12 border-y border-zinc-800 py-4">
            <span><strong className="text-[#BFA181]">7×</strong> Best of Weddings — The Knot</span>
            <span><strong className="text-[#BFA181]">Hall of Fame</strong> — The Knot</span>
            <span><strong className="text-[#BFA181]">5.0</strong> from 78 reviews</span>
            <span>Filming since <strong className="text-[#BFA181]">2010</strong></span>
          </div>

          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-[#1a1916] mb-4">
            <iframe
              src="https://www.youtube.com/embed/cp3PmoI9nio?si=EkwuDwuG3FMy9Uys"
              title="LifeStory.Film — cinematic California resort wedding film"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>
          <div className="text-gray-400 text-sm italic mb-16 text-center">
            A LifeStory.Film cinematic resort wedding.{' '}
            <Link href="/films/ryan-and-victoria" className="text-[#BFA181] hover:text-white transition-colors">Watch a full film →</Link>
          </div>

          <div className="prose prose-invert prose-lg max-w-none mb-16 space-y-6 text-gray-300 leading-relaxed">
            <h2 className="text-white">Wedding films made for wine country</h2>
            <p>
              Napa light is harder and warmer than the coast — the marine layer that softens Malibu never reaches Rutherford — and that changes how a film is shot. We know the vine rows at{' '}
              <Link href="/blog/wedding-videographer-beaulieu-garden-napa" className="text-[#BFA181] hover:text-white transition-colors">Beaulieu Garden</Link>{' '}
              at golden hour, the terraces of{' '}
              <Link href="/blog/wedding-videographer-meadowood-napa-valley" className="text-[#BFA181] hover:text-white transition-colors">Meadowood</Link>, and the forested privacy of{' '}
              <Link href="/blog/wedding-videographer-calistoga-ranch-napa-valley" className="text-[#BFA181] hover:text-white transition-colors">Calistoga Ranch</Link>.
            </p>
            <p>
              We shoot photo and video under one roof, so coverage is coordinated on the day instead of two vendors competing for the same moment. Our films blend documentary honesty with cinematic craft — the goal isn&apos;t to document your wedding, it&apos;s to make you feel it again every time you watch.
            </p>
            <p>
              Based in Los Angeles, we travel to Napa, Sonoma, St. Helena, and Calistoga for wine-country weddings. If you&apos;ve chosen your venue, we&apos;d love to hear about your day.
            </p>
          </div>

          <div className="bg-[#1a1916] rounded-2xl p-8 md:p-10 border border-zinc-800 mb-16">
            <h2 className="text-2xl font-bold text-white mb-2">Napa &amp; Sonoma pricing</h2>
            <p className="text-gray-400 mb-6">Transparent, published pricing — no consultation required to see it.</p>
            <ul className="space-y-3 text-gray-300">
              <li className="flex justify-between border-b border-zinc-800 pb-3"><span>Photography-only or videography-only</span><span className="text-[#BFA181] font-semibold">from $2,499</span></li>
              <li className="flex justify-between border-b border-zinc-800 pb-3"><span>Combined photo + video (Essential)</span><span className="text-[#BFA181] font-semibold">from $3,959</span></li>
              <li className="flex justify-between border-b border-zinc-800 pb-3"><span>Signature collection (8 hrs, 2 photo + 2 video)</span><span className="text-[#BFA181] font-semibold">$6,928</span></li>
              <li className="flex justify-between"><span>Multi-day &amp; destination weddings</span><span className="text-[#BFA181] font-semibold">quoted individually</span></li>
            </ul>
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm">
              <Link href="/pricing" className="text-[#BFA181] underline underline-offset-4 hover:text-white transition-colors">Full packages &amp; pricing</Link>
              <Link href="/videography" className="text-[#BFA181] underline underline-offset-4 hover:text-white transition-colors">Watch our films</Link>
              <Link href="/blog/wedding-videographer-napa-valley" className="text-[#BFA181] underline underline-offset-4 hover:text-white transition-colors">Napa Valley wedding guide</Link>
            </div>
          </div>

          <div className="mb-4">
            <h2 className="text-2xl font-bold text-white mb-4">Napa &amp; Sonoma venues we film</h2>
            <div className="flex flex-wrap gap-3">
              {[
                { href: '/blog/wedding-videographer-meadowood-napa-valley', label: 'Meadowood' },
                { href: '/blog/wedding-videographer-calistoga-ranch-napa-valley', label: 'Calistoga Ranch' },
                { href: '/blog/wedding-videographer-beaulieu-garden-napa', label: 'Beaulieu Garden' },
                { href: '/blog/wedding-videographer-sonoma-california', label: 'Sonoma' },
                { href: '/blog/wedding-videographer-napa-valley', label: 'Napa Valley — full guide' },
              ].map((v) => (
                <Link key={v.href} href={v.href} className="inline-block text-sm px-4 py-2 rounded-full border border-zinc-700 text-gray-300 hover:border-[#BFA181] hover:text-[#BFA181] transition-colors">
                  {v.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </article>

      <LeadMagnet />
      <ContactSection />
      <Footer />
    </main>
  )
}
