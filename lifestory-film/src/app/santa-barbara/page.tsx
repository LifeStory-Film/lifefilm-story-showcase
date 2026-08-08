import type { Metadata } from 'next'
import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { ContactSection } from '@/components/ContactSection'
import { LeadMagnet } from '@/components/LeadMagnet'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Santa Barbara & Montecito Wedding Videographer | LifeStory.Film',
  description:
    'Cinematic Santa Barbara and Montecito wedding films and photography — San Ysidro Ranch, Belmond El Encanto, Ojai Valley Inn. 7-time Best of Weddings on The Knot, 5.0 from 78 reviews, since 2010. Packages from $2,499.',
  keywords:
    'Santa Barbara wedding videographer, Montecito wedding videographer, San Ysidro Ranch wedding film, Santa Barbara wedding photographer, luxury wedding videography Santa Barbara',
  alternates: { canonical: 'https://lifestory.film/santa-barbara' },
  openGraph: {
    title: 'Santa Barbara & Montecito Wedding Videographer | LifeStory.Film',
    description: 'Cinematic wedding films across Santa Barbara & Montecito — San Ysidro Ranch, El Encanto, Ojai. Since 2010.',
    type: 'website',
    url: 'https://lifestory.film/santa-barbara',
    siteName: 'LifeStory.Film',
    images: [{ url: 'https://img.youtube.com/vi/cp3PmoI9nio/maxresdefault.jpg', width: 1280, height: 720, alt: 'Santa Barbara wedding film by LifeStory.Film' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Santa Barbara & Montecito Wedding Videographer | LifeStory.Film',
    description: 'Cinematic Santa Barbara & Montecito wedding films — San Ysidro Ranch, El Encanto, Ojai.',
    images: ['https://img.youtube.com/vi/cp3PmoI9nio/maxresdefault.jpg'],
  },
}

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://lifestory.film/#localbusiness',
  name: 'LifeStory.Film',
  url: 'https://lifestory.film/santa-barbara',
  telephone: '+1-323-556-4362',
  priceRange: '$$$',
  image: 'https://lifestory.film/favicon-32.png',
  address: { '@type': 'PostalAddress', addressLocality: 'Los Angeles', addressRegion: 'CA', addressCountry: 'US' },
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '5.0', reviewCount: '78', bestRating: '5' },
  areaServed: [
    { '@type': 'City', name: 'Santa Barbara, CA' },
    { '@type': 'City', name: 'Montecito, CA' },
    { '@type': 'City', name: 'Ojai, CA' },
    { '@type': 'City', name: 'Carpinteria, CA' },
  ],
}

const BREADCRUMB = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://lifestory.film/' },
    { '@type': 'ListItem', position: 2, name: 'Santa Barbara Wedding Videographer', item: 'https://lifestory.film/santa-barbara' },
  ],
}

export default function SantaBarbaraPage() {
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
            <span className="text-white">Santa Barbara Wedding Videographer</span>
          </nav>

          <header className="mb-10">
            <div className="text-[#BFA181] text-xs tracking-widest uppercase mb-3">Santa Barbara &amp; Montecito, CA</div>
            <h1 className="text-4xl md:text-6xl font-bold text-white font-['Playfair_Display'] leading-tight mb-4">
              Santa Barbara &amp; Montecito Wedding Videographer
            </h1>
            <p className="text-xl text-gray-400 font-light">
              Cinematic wedding films and fine-art photography on the American Riviera — from San Ysidro Ranch to the vineyards of the Santa Ynez Valley.
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
            <h2 className="text-white">Wedding films made for the American Riviera</h2>
            <p>
              Santa Barbara light is softer and warmer than the coast to the south, and every venue reads differently on film — the olive trees at{' '}
              <Link href="/blog/wedding-videographer-san-ysidro-ranch" className="text-[#BFA181] hover:text-white transition-colors">San Ysidro Ranch</Link>{' '}
              in Montecito, the ocean bluff at Belmond El Encanto, the vineyard golden hour at{' '}
              <Link href="/blog/wedding-videographer-ojai-valley-inn" className="text-[#BFA181] hover:text-white transition-colors">Ojai Valley Inn</Link>. Venue experience is the difference between a crew troubleshooting your morning and one that anticipated it weeks ago.
            </p>
            <p>
              We shoot photo and video under one roof, so coverage is coordinated on the day instead of two vendors competing for the same moment. Our films blend documentary honesty with cinematic craft — the goal isn&apos;t to document your wedding, it&apos;s to make you feel it again every time you watch.
            </p>
            <p>
              Based in Los Angeles, we film throughout Santa Barbara, Montecito, Ojai, and the Santa Ynez wine country. If you&apos;ve chosen your venue, we&apos;d love to hear about your day.
            </p>
          </div>

          <div className="bg-[#1a1916] rounded-2xl p-8 md:p-10 border border-zinc-800 mb-16">
            <h2 className="text-2xl font-bold text-white mb-2">Santa Barbara pricing</h2>
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
              <Link href="/blog/luxury-wedding-videographer-santa-barbara" className="text-[#BFA181] underline underline-offset-4 hover:text-white transition-colors">Santa Barbara wedding guide</Link>
            </div>
          </div>

          <div className="mb-4">
            <h2 className="text-2xl font-bold text-white mb-4">Santa Barbara &amp; Montecito venues we film</h2>
            <div className="flex flex-wrap gap-3">
              {[
                { href: '/blog/wedding-videographer-san-ysidro-ranch', label: 'San Ysidro Ranch' },
                { href: '/blog/wedding-videographer-ojai-valley-inn', label: 'Ojai Valley Inn' },
                { href: '/blog/montecito-wedding-videographer', label: 'Montecito' },
                { href: '/blog/luxury-wedding-videographer-santa-barbara', label: 'Santa Barbara — full guide' },
                { href: '/blog/wedding-film-san-ysidro-ranch', label: 'San Ysidro Ranch film' },
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
