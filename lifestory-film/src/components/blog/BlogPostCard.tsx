'use client'

import Link from 'next/link'

interface BlogPostCardProps {
  slug: string
  title: string
  keyword: string
  category: string
  date: string
  wordCount: number
  coverImage: string
  excerpt: string
  featured?: boolean
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
  })
}

function readingTime(wordCount: number) {
  return `${Math.ceil(wordCount / 200)} min read`
}

export function BlogPostCard({
  slug,
  title,
  keyword,
  date,
  wordCount,
  coverImage,
  excerpt,
  featured = false,
}: BlogPostCardProps) {
  const imageHeight = featured ? 320 : 220

  return (
    <Link
      href={`/blog/${slug}`}
      className={`group block rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-1 ${featured ? 'col-span-full' : ''}`}
      style={{
        backgroundColor: 'var(--t-bg-card)',
        border: '1px solid var(--t-border)',
      }}
      onMouseEnter={e => {
        ;(e.currentTarget as HTMLElement).style.borderColor = 'var(--t-accent)'
        ;(e.currentTarget as HTMLElement).style.backgroundColor = 'color-mix(in srgb, var(--t-accent) 6%, transparent)'
      }}
      onMouseLeave={e => {
        ;(e.currentTarget as HTMLElement).style.borderColor = 'var(--t-border)'
        ;(e.currentTarget as HTMLElement).style.backgroundColor = 'var(--t-bg-card)'
      }}
    >
      {/* Cover image */}
      {coverImage && (
        <div className="relative overflow-hidden" style={{ height: imageHeight }}>
          <img
            src={coverImage}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: 'linear-gradient(to bottom, transparent 50%, rgba(15,14,12,0.5) 100%)' }}
          />
          {featured && (
            <div
              className="absolute top-4 left-4 text-[10px] font-bold tracking-[0.2em] uppercase px-3 py-1.5 rounded-full"
              style={{ backgroundColor: 'var(--t-accent)', color: '#0f0e0c' }}
            >
              Featured
            </div>
          )}
        </div>
      )}

      <div className={`flex flex-col ${featured ? 'md:flex-row md:items-end md:justify-between' : ''} p-6`}>
        <div className={featured ? 'md:max-w-2xl' : ''}>
          {/* Category tag */}
          <div className="mb-3">
            <span
              className="text-[10px] font-semibold tracking-[0.18em] uppercase px-2.5 py-1 rounded-full"
              style={{
                color: 'var(--t-accent)',
                backgroundColor: 'color-mix(in srgb, var(--t-accent) 12%, transparent)',
                border: '1px solid color-mix(in srgb, var(--t-accent) 25%, transparent)',
              }}
            >
              {keyword}
            </span>
          </div>

          {/* Title */}
          <h2
            className={`font-semibold leading-snug mb-2 transition-colors duration-300 group-hover:text-[var(--t-accent)] ${featured ? 'text-2xl' : 'text-lg'}`}
            style={{ color: 'var(--t-text-primary)' }}
          >
            {title}
          </h2>

          {/* Excerpt */}
          <p className="text-[13px] leading-relaxed mb-4" style={{ color: 'var(--t-text-muted)' }}>
            {excerpt}
          </p>
        </div>

        {/* Meta row */}
        <div
          className={`flex items-center gap-3 text-xs ${featured ? 'md:flex-col md:items-end md:gap-1 md:shrink-0 md:pl-8' : 'pt-4 border-t'}`}
          style={
            featured
              ? { color: 'var(--t-text-muted)' }
              : { color: 'var(--t-text-muted)', borderTop: '1px solid var(--t-border)' }
          }
        >
          <span>{formatDate(date)}</span>
          {!featured && <span style={{ color: 'var(--t-accent)', opacity: 0.5 }}>·</span>}
          <span>{readingTime(wordCount)}</span>
          <span
            className={`text-xs font-medium transition-all duration-300 group-hover:translate-x-1 ${featured ? '' : 'ml-auto'}`}
            style={{ color: 'var(--t-accent)' }}
          >
            Read More →
          </span>
        </div>
      </div>
    </Link>
  )
}
