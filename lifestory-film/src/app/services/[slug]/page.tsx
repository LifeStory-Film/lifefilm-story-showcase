import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import {
  getAllServiceSlugs,
  getService,
  serviceHeroImage,
} from '@/lib/services'

export async function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const service = getService(slug)

  if (!service) return { title: 'Service Not Found | LifeStory.Film' }

  const title = `${service.title} | LifeStory.Film`
  const description = service.shortDescription
  const ogImage = serviceHeroImage(service)

  return {
    title,
    description,
    alternates: {
      canonical: `https://lifestory.film/services/${slug}`,
    },
    openGraph: {
      title,
      description,
      type: 'website',
      images: [{ url: ogImage, width: 1280, height: 720, alt: `${service.title} — LifeStory.Film` }],
      siteName: 'LifeStory.Film',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  }
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const service = getService(slug)

  if (!service) notFound()

  const heroImage = serviceHeroImage(service)

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': service.schemaType,
    name: service.title,
    description: service.shortDescription,
    serviceType: 'Wedding Photography and Videography',
    url: `https://lifestory.film/services/${slug}`,
    image: heroImage,
    provider: {
      '@type': 'Organization',
      name: 'LifeStory.Film',
      url: 'https://lifestory.film',
    },
    areaServed: { '@type': 'State', name: 'California' },
    offers: {
      '@type': 'Offer',
      priceRange: service.pricingRange,
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
    },
  }

  return (
    <main className="min-h-screen bg-[#0f0e0c] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Navigation />

      <article className="pt-24 pb-32">
        {/* Breadcrumb */}
        <div className="container mx-auto px-6 mb-8">
          <nav className="text-sm text-gray-500" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[#BFA181] transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/pricing" className="hover:text-[#BFA181] transition-colors">Services</Link>
            <span className="mx-2">/</span>
            <span className="text-white">{service.title}</span>
          </nav>
        </div>

        {/* Header */}
        <header className="container mx-auto px-6 mb-10 max-w-4xl">
          <div className="text-[#BFA181] text-xs tracking-widest uppercase mb-3">Services</div>
          <h1 className="text-4xl md:text-6xl font-bold text-white font-['Playfair_Display'] leading-tight mb-4">
            {service.title}
          </h1>
          <p className="text-xl text-gray-400 font-light">{service.shortDescription}</p>
        </header>

        {/* Hero image (real LifeStory film thumbnail) */}
        <div className="container mx-auto px-6 mb-12 max-w-5xl">
          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-[#1a1916]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={heroImage}
              alt={`${service.title} — LifeStory.Film wedding film`}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Body (PHASE 1 stub) */}
        <div className="container mx-auto px-6 max-w-2xl mb-16">
          <p className="text-gray-300 text-lg leading-relaxed">{service.fullDescription}</p>
        </div>

        {/* CTA */}
        <div className="container mx-auto px-6 max-w-2xl text-center">
          <div className="bg-[#1a1916] rounded-2xl p-10 border border-zinc-800">
            <h2 className="text-2xl font-bold text-white mb-3">Interested in {service.title.toLowerCase()}?</h2>
            <p className="text-gray-400 mb-6">Tell us your date and we&apos;ll let you know if we&apos;re available.</p>
            <Link
              href={service.ctaDestination}
              className="inline-flex items-center gap-2 bg-[#BFA181] text-black px-8 py-4 rounded-full font-semibold hover:bg-[#957C3D] transition-colors"
            >
              {service.ctaText}
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
