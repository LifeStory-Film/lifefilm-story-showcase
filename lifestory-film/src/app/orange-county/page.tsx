import type { Metadata } from 'next'
import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { ContactSection } from '@/components/ContactSection'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Orange County Wedding Videographer & Photographer | LifeStory.Film',
  description:
    'Cinematic Orange County wedding films and photography — Pelican Hill, Montage Laguna Beach, Terranea and beyond. 7-time Best of Weddings on The Knot, 5.0 from 78 reviews, filming since 2010. Packages from $2,499.',
  keywords:
    'Orange County wedding videographer, Orange County wedding photographer, Newport Beach wedding film, Laguna Beach wedding videography, luxury wedding videographer Orange County',
  alternates: { canonical: 'https://lifestory.film/orange-county' },
  openGraph: {
    title: 'Orange County Wedding Videographer & Photographer | LifeStory.Film',
    description:
      'Cinematic wedding films across Orange County — Pelican Hill, Montage Laguna Beach, Terranea. Filming since 2010.',
    type: 'website',
    url: 'https://lifestory.film/orange-county',
    siteName: 'LifeStory.Film',
    images: [
      {
        url: 'https://img.youtube.com/vi/cp3PmoI9nio/maxresdefault.jpg',
        width: 1280,
        height: 720,
        alt: 'Orange County wedding film by LifeStory.Film',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Orange County Wedding Videographer & Photographer | LifeStory.Film',
    description: 'Cinematic Orange County wedding films — Pelican Hill, Montage Laguna Beach, Terranea.',
    images: ['https://img.youtube.com/vi/cp3PmoI9nio/maxresdefault.jpg'],
  },
}

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://lifestory.film/#localbusiness',
  name: 'LifeStory.Film',
  url: 'https://lifestory.film/orange-county',
  telephone: '+1-323-556-4362',
  priceRange: '$$$',
  image: 'https://lifestory.film/favicon-32.png',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Los Angeles',
    addressRegion: 'CA',
    addressCountry: 'US',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5.0',
    reviewCount: '78',
    bestRating: '5',
  },
  areaServed: [
    { '@type': 'City', name: 'Newport Beach, CA' },
    { '@type': 'City', name: 'Laguna Beach, CA' },
    { '@type': 'City', name: 'Laguna Niguel, CA' },
    { '@type': 'City', name: 'Dana Point, CA' },
    { '@type': 'City', name: 'Rancho Palos Verdes, CA' },
    { '@type': 'City', name: 'Anaheim, CA' },
  ],
}

const BREADCRUMB = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://lifestory.film/' },
    { '@type': 'ListItem', position: 2, name: 'Orange County Wedding Videographer', item: 'https://lifestory.film/orange-county' },
  ],
}

export default function OrangeCountyPage() {
  return (
    <main className="min-h-screen bg-[#0f0e0c] text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB) }} />
      <Navigation />

      <article className="pt-24 pb-24">
        <div className="container mx-auto px-6 max-w-4xl">
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-10" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[#BFA181] transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Orange County Wedding Videographer</span>
          </nav>

          {/* H1 */}
          <header className="mb-10">
            <div className="text-[#BFA181] text-xs tracking-widest uppercase mb-3">Orange County, CA</div>
            <h1 className="text-4xl md:text-6xl font-bold text-white font-['Playfair_Display'] leading-tight mb-4">
              Orange County Wedding Videographer &amp; Photographer
            </h1>
            <p className="text-xl text-gray-400 font-light">
              Cinematic wedding films and fine-art photography from Newport Beach to Laguna — a team that&apos;s been filming Orange County weddings since 2010.
            </p>
          </header>

          {/* Social proof strip */}
          <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm text-gray-400 mb-12 border-y border-zinc-800 py-4">
            <span><strong className="text-[#BFA181]">7×</strong> Best of Weddings — The Knot</span>
            <span><strong className="text-[#BFA181]">Hall of Fame</strong> — The Knot</span>
            <span><strong className="text-[#BFA181]">5.0</strong> from 78 reviews</span>
            <span>Filming since <strong className="text-[#BFA181]">2010</strong></span>
          </div>

          {/* Film embed */}
          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-[#1a1916] mb-4">
            <iframe
              src="https://www.youtube.com/embed/cp3PmoI9nio?si=EkwuDwuG3FMy9Uys"
              title="Ryan & Victoria — The Resort at Pelican Hill, Newport Beach — by LifeStory.Film"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>
          <div className="text-gray-400 text-sm italic mb-16 text-center">
            Ryan &amp; Victoria — The Resort at Pelican Hill, Newport Beach.{' '}
            <Link href="/films/ryan-and-victoria" className="text-[#BFA181] hover:text-white transition-colors">Watch the full film →</Link>
          </div>

          {/* Copy — we, here, how */}
          <div className="prose prose-invert prose-lg max-w-none mb-16 space-y-6 text-gray-300 leading-relaxed">
            <h2 className="text-white">Wedding films made for Orange County&apos;s venues</h2>
            <p>
              Orange County is a different lighting problem at every venue. The ocean terrace at{' '}
              <Link href="/pelican-hill-wedding-videographer" className="text-[#BFA181] hover:text-white transition-colors">The Resort at Pelican Hill</Link>{' '}
              at 4 PM, the cliffside ceremony at{' '}
              <Link href="/blog/wedding-videography-montage-laguna-beach" className="text-[#BFA181] hover:text-white transition-colors">Montage Laguna Beach</Link>{' '}
              at sunset, the coastal light at Terranea in Rancho Palos Verdes — each asks for different lenses, coverage, and backup plans. We&apos;ve filmed across all of them, and that venue experience is the difference between a crew troubleshooting your morning and one that anticipated it weeks ago.
            </p>
            <p>
              We shoot photo and video under one roof, so coverage is coordinated on the day instead of two vendors competing for the same moment. Our films blend documentary honesty with cinematic craft — the goal isn&apos;t to document your wedding, it&apos;s to make you feel it again every time you watch.
            </p>
            <p>
              Based in Los Angeles, we cover all of Orange County — Newport Beach, Laguna Beach, Laguna Niguel, Dana Point, Anaheim — with no travel fee. If you&apos;ve chosen your venue, we&apos;d love to hear about your day.
            </p>
          </div>

          {/* Pricing — confirmed numbers only */}
          <div className="bg-[#1a1916] rounded-2xl p-8 md:p-10 border border-zinc-800 mb-16">
            <h2 className="text-2xl font-bold text-white mb-2">Orange County pricing</h2>
            <p className="text-gray-400 mb-6">Transparent, published pricing — no consultation required to see it.</p>
            <ul className="space-y-3 text-gray-300">
              <li className="flex justify-between border-b border-zinc-800 pb-3">
                <span>Photography-only or videography-only</span>
                <span className="text-[#BFA181] font-semibold">from $2,499</span>
              </li>
              <li className="flex justify-between border-b border-zinc-800 pb-3">
                <span>Combined photo + video (Essential)</span>
                <span className="text-[#BFA181] font-semibold">from $3,959</span>
              </li>
              <li className="flex justify-between border-b border-zinc-800 pb-3">
                <span>Signature collection (8 hrs, 2 photo + 2 video)</span>
                <span className="text-[#BFA181] font-semibold">$6,928</span>
              </li>
              <li className="flex justify-between">
                <span>Multi-day &amp; destination weddings</span>
                <span className="text-[#BFA181] font-semibold">quoted individually</span>
              </li>
            </ul>
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm">
              <Link href="/pricing" className="text-[#BFA181] underline underline-offset-4 hover:text-white transition-colors">Full packages &amp; pricing</Link>
              <Link href="/videography" className="text-[#BFA181] underline underline-offset-4 hover:text-white transition-colors">Watch our films</Link>
              <Link href="/blog/best-wedding-videographers-orange-county" className="text-[#BFA181] underline underline-offset-4 hover:text-white transition-colors">Best OC wedding videographers (guide)</Link>
            </div>
          </div>

          {/* Venue links */}
          <div className="mb-4">
            <h2 className="text-2xl font-bold text-white mb-4">Orange County venues we film</h2>
            <div className="flex flex-wrap gap-3">
              {[
                { href: '/pelican-hill-wedding-videographer', label: 'The Resort at Pelican Hill' },
                { href: '/blog/wedding-videography-montage-laguna-beach', label: 'Montage Laguna Beach' },
                { href: '/blog/wedding-photographer-terranea-resort', label: 'Terranea Resort' },
                { href: '/blog/ritz-carlton-wedding-photography-laguna-niguel', label: 'Ritz-Carlton Laguna Niguel' },
                { href: '/blog/wedding-videographer-orange-county', label: 'Orange County — full guide' },
                { href: '/blog/luxury-wedding-photographer-orange-county', label: 'Luxury OC photography' },
              ].map((v) => (
                <Link
                  key={v.href}
                  href={v.href}
                  className="inline-block text-sm px-4 py-2 rounded-full border border-zinc-700 text-gray-300 hover:border-[#BFA181] hover:text-[#BFA181] transition-colors"
                >
                  {v.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </article>

      {/* Form */}
      <ContactSection />

      <Footer />
    </main>
  )
}
