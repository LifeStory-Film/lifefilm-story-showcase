import { notFound } from 'next/navigation'
import Link from 'next/link'
import { marked } from 'marked'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { BlogPostCard } from '@/components/blog/BlogPostCard'
import { getAllSlugs, getAllPosts, getPost } from '@/lib/posts'

export async function generateStaticParams() {
  return getAllSlugs().map(slug => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  try {
    const post = getPost(slug)
    return { title: post.metaTitle, description: post.metaDescription }
  } catch {
    return {}
  }
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })
}

function readingTime(wordCount: number) {
  return `${Math.ceil(wordCount / 200)} min read`
}

/**
 * Split rendered HTML at the last <hr> so the CTA section
 * gets wrapped in a styled card (.blog-cta).
 */
function splitCtaHtml(html: string): { body: string; cta: string | null } {
  const lastHr = html.lastIndexOf('<hr>')
  if (lastHr === -1) return { body: html, cta: null }
  return { body: html.slice(0, lastHr), cta: html.slice(lastHr + 4) }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  let post
  try {
    post = getPost(slug)
  } catch {
    notFound()
  }

  const rawHtml = marked(post.content, { async: false }) as string
  const { body: bodyHtml, cta: ctaHtml } = splitCtaHtml(rawHtml)

  const relatedPosts = getAllPosts()
    .filter(p => p.slug !== slug)
    .slice(0, 2)

  return (
    <main className="min-h-screen" style={{ backgroundColor: 'var(--t-bg-primary)', color: 'var(--t-text-primary)' }}>
      <Navigation />

      {/* Cover image hero */}
      {post.coverImage && (
        <div className="relative pt-24 px-6">
          <div
            className="container mx-auto max-w-4xl relative overflow-hidden"
            style={{ borderRadius: 12, maxHeight: 480 }}
          >
            <img
              src={post.coverImage}
              alt={post.title}
              className="w-full object-cover"
              style={{ maxHeight: 480, width: '100%' }}
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'linear-gradient(to bottom, transparent 60%, var(--t-bg-primary) 100%)',
              }}
            />
          </div>
        </div>
      )}

      {/* Article header */}
      <section className={`relative ${post.coverImage ? 'pt-10' : 'pt-40'} pb-12 px-6 overflow-hidden`}>
        {!post.coverImage && (
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'radial-gradient(ellipse 70% 40% at 50% 0%, color-mix(in srgb, var(--t-accent) 6%, transparent) 0%, transparent 70%)',
            }}
          />
        )}
        <div className="container mx-auto max-w-3xl relative z-10">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm mb-8 transition-colors duration-200"
            style={{ color: 'var(--t-text-muted)' }}
            onMouseEnter={undefined}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M10 3L5 8l5 5" />
            </svg>
            All Articles
          </Link>

          {/* Keyword tag */}
          <div className="mb-5">
            <span
              className="text-[10px] font-semibold tracking-[0.18em] uppercase px-2.5 py-1 rounded-full"
              style={{
                color: 'var(--t-accent)',
                backgroundColor: 'color-mix(in srgb, var(--t-accent) 10%, transparent)',
                border: '1px solid color-mix(in srgb, var(--t-accent) 25%, transparent)',
              }}
            >
              {post.keyword}
            </span>
          </div>

          <h1
            className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight mb-6"
            style={{ color: 'var(--t-text-primary)', letterSpacing: '-0.02em' }}
          >
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-sm" style={{ color: 'var(--t-text-muted)' }}>
            <span>{post.author}</span>
            <span style={{ color: 'var(--t-accent)', opacity: 0.5 }}>·</span>
            <span>{formatDate(post.date)}</span>
            <span style={{ color: 'var(--t-accent)', opacity: 0.5 }}>·</span>
            <span>{readingTime(post.wordCount)}</span>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div
        className="mx-auto max-w-3xl px-6 h-px"
        style={{
          background: 'linear-gradient(to right, transparent, color-mix(in srgb, var(--t-accent) 30%, transparent), transparent)',
        }}
      />

      {/* Article body */}
      <article className="py-14 px-6">
        <div
          className="container mx-auto max-w-3xl blog-content"
          dangerouslySetInnerHTML={{ __html: bodyHtml }}
        />
      </article>

      {/* CTA card */}
      {ctaHtml && (
        <section className="px-6 pb-14">
          <div
            className="container mx-auto max-w-3xl blog-content blog-cta"
            dangerouslySetInnerHTML={{ __html: ctaHtml }}
          />
        </section>
      )}

      {/* Related posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 px-6" style={{ borderTop: '1px solid var(--t-border)' }}>
          <div className="container mx-auto max-w-3xl">
            <div className="mb-8">
              <div
                className="text-xs font-semibold tracking-[0.2em] uppercase mb-2"
                style={{ color: 'var(--t-accent)' }}
              >
                Keep Reading
              </div>
              <h2 className="text-2xl font-bold" style={{ color: 'var(--t-text-primary)' }}>
                More From The Journal
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedPosts.map(p => (
                <BlogPostCard
                  key={p.slug}
                  slug={p.slug}
                  title={p.title}
                  keyword={p.keyword}
                  category={p.category}
                  date={p.date}
                  wordCount={p.wordCount}
                  coverImage={p.coverImage}
                  excerpt={p.excerpt}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Footer CTA */}
      <section className="py-16 px-6">
        <div
          className="container mx-auto max-w-3xl rounded-2xl p-10 text-center"
          style={{
            backgroundColor: 'var(--t-bg-secondary)',
            border: '1px solid var(--t-border)',
          }}
        >
          <div className="text-xs font-semibold tracking-[0.18em] uppercase mb-3" style={{ color: 'var(--t-accent)' }}>
            Ready to Tell Your Story?
          </div>
          <p className="text-lg font-semibold mb-6" style={{ color: 'var(--t-text-primary)' }}>
            Let&apos;s talk about your wedding day.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/videography"
              className="px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105"
              style={{ backgroundColor: 'var(--t-accent)', color: '#0f0e0c' }}
            >
              View Our Work
            </Link>
            <Link
              href="/pricing"
              className="px-6 py-3 rounded-full text-sm font-medium transition-all duration-300"
              style={{
                color: 'var(--t-text-secondary)',
                border: '1px solid var(--t-border-strong)',
              }}
            >
              See Pricing
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
