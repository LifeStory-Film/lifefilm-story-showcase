import Link from 'next/link'
import InlineEmailCapture from '@/components/InlineEmailCapture'

/**
 * In-article conversion block, injected high in every blog post (after the
 * intro, before the first section). This is the "door to the store" — the reader
 * came for a comparison/guide; this pulls them into the work + a way to reach us
 * before they scroll away. Facts here are all verifiable on the live site.
 */

const PREVIEW_FILMS = [
  { slug: 'ryan-and-victoria', title: 'Ryan & Victoria', place: 'Pelican Hill', videoId: 'cp3PmoI9nio' },
  { slug: 'ayaka-and-kyan', title: 'Ayaka & Kyan', place: 'Malibu', videoId: '17rIApee9B8' },
  { slug: 'michelle-and-jason', title: 'Michelle & Jason', place: 'Los Angeles', videoId: 'z_6rqvk2tAs' },
]

export default function BlogConversionCTA() {
  return (
    <aside
      className="not-prose my-10 rounded-2xl overflow-hidden"
      style={{ backgroundColor: 'var(--t-bg-secondary)', border: '1px solid var(--t-border)' }}
    >
      <div className="p-6 md:p-8">
        <div className="text-[11px] font-semibold tracking-[0.2em] uppercase mb-2" style={{ color: 'var(--t-accent)' }}>
          LifeStory.Film — Los Angeles &amp; Worldwide
        </div>
        <p className="text-lg md:text-xl font-bold mb-1" style={{ color: 'var(--t-text-primary)' }}>
          Cinematic wedding films &amp; photography, since 2010.
        </p>
        <p className="text-sm mb-6" style={{ color: 'var(--t-text-secondary)' }}>
          7-Time Best of Weddings &amp; Hall of Fame on The Knot · 5.0 from 78 reviews · Packages from $2,499.
        </p>

        {/* Work previews */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          {PREVIEW_FILMS.map((f) => (
            <Link key={f.slug} href={`/films/${f.slug}`} className="group block">
              <span className="block relative rounded-lg overflow-hidden" style={{ aspectRatio: '16 / 10' }}>
                <img
                  src={`https://i.ytimg.com/vi/${f.videoId}/hqdefault.jpg`}
                  alt={`${f.title} — wedding film in ${f.place}`}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </span>
              <span className="block mt-2 text-xs font-medium truncate" style={{ color: 'var(--t-text-secondary)' }}>
                {f.title} · {f.place}
              </span>
            </Link>
          ))}
        </div>

        {/* Actions: message + call (Vogue pattern) */}
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href="https://wa.me/13235564362"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center px-5 py-3 rounded-full text-sm font-semibold transition-transform duration-300 hover:scale-105"
            style={{ backgroundColor: 'var(--t-accent)', color: '#0f0e0c' }}
          >
            Message us on WhatsApp
          </a>
          <a
            href="tel:3235564362"
            className="flex-1 text-center px-5 py-3 rounded-full text-sm font-semibold transition-colors duration-300"
            style={{ color: 'var(--t-text-primary)', border: '1px solid var(--t-border-strong)' }}
          >
            Call 323.556.4362
          </a>
        </div>

        {/* Email capture */}
        <div className="mt-5 pt-5" style={{ borderTop: '1px solid var(--t-border)' }}>
          <div className="text-xs font-semibold tracking-[0.14em] uppercase mb-1" style={{ color: 'var(--t-accent)' }}>
            Not ready to book?
          </div>
          <InlineEmailCapture source="blog-cta" />
        </div>

        {/* Section links */}
        <div className="flex flex-wrap gap-x-5 gap-y-2 mt-5 text-sm">
          <Link href="/pricing" className="underline underline-offset-4" style={{ color: 'var(--t-accent)' }}>
            See packages &amp; pricing
          </Link>
          <Link href="/videography" className="underline underline-offset-4" style={{ color: 'var(--t-accent)' }}>
            Watch our films
          </Link>
          <Link href="/contact" className="underline underline-offset-4" style={{ color: 'var(--t-accent)' }}>
            Check your date
          </Link>
        </div>
      </div>
    </aside>
  )
}
