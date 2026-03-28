import Link from 'next/link'

// Curated selection from the photography gallery — mix of portrait and landscape moments
const SHOWCASE_PHOTOS = [
  {
    src: 'https://ext.same-assets.com/613934530/2159466363.jpeg',
    alt: 'Classic bridal portrait with bouquet and natural light',
  },
  {
    src: 'https://ext.same-assets.com/613934530/2180482571.webp',
    alt: 'Bouquet toss reception moment with guests',
  },
  {
    src: 'https://ext.same-assets.com/613934530/2202004677.jpeg',
    alt: 'Traditional wedding ceremony in garden setting',
  },
  {
    src: 'https://ext.same-assets.com/613934530/2357869345.webp',
    alt: 'Romantic couple portrait with eucalyptus bouquet',
  },
  {
    src: 'https://ext.same-assets.com/613934530/4005707773.jpeg',
    alt: 'Luxury crystal wedding shoes with dramatic lighting',
  },
  {
    src: 'https://ext.same-assets.com/613934530/24522886.webp',
    alt: 'Window light bridal portrait with soft shadows',
  },
  {
    src: 'https://ext.same-assets.com/613934530/1996507150.webp',
    alt: 'Traditional South Asian bridal portrait with intricate henna',
  },
]

export function PhotoShowcase() {
  return (
    <section className="py-32 bg-zinc-950">
      <div className="container mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-[#BFA181] text-[11px] tracking-widest uppercase mb-5 font-light">The Gallery</p>
          <h2
            className="font-extrabold text-white leading-tight mb-4"
            style={{ fontSize: 'clamp(40px, 4.5vw, 56px)', letterSpacing: '-0.02em' }}
          >
            Stills That Last Forever
          </h2>
          <p className="font-light text-white/55 max-w-[600px] mx-auto" style={{ fontSize: '18px' }}>
            Every frame composed with intention.
          </p>
        </div>

        {/* Masonry columns — natural image heights create the asymmetric rhythm */}
        <div
          className="columns-1 sm:columns-2 lg:columns-3"
          style={{ columnGap: '1.25rem' }}
        >
          {SHOWCASE_PHOTOS.map((photo, index) => (
            <div
              key={index}
              className="break-inside-avoid mb-5 overflow-hidden rounded-lg group"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                loading={index < 4 ? 'eager' : 'lazy'}
              />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            href="/photography"
            className="inline-flex items-center gap-1.5 text-white/50 hover:text-white text-sm tracking-wide transition-colors duration-200"
          >
            View Photography Portfolio
            <span aria-hidden="true">→</span>
          </Link>
        </div>

      </div>
    </section>
  )
}
