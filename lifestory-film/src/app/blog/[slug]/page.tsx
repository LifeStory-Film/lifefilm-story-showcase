import { notFound } from 'next/navigation'
import Link from 'next/link'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { getAllSlugs, getPost } from '@/lib/posts'

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
    return {
      title: post.metaTitle,
      description: post.metaDescription,
    }
  } catch {
    return {}
  }
}

function formatDate(dateStr: string) {
  const date = new Date(dateStr)
  return date.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })
}

function readingTime(wordCount: number) {
  return `${Math.ceil(wordCount / 200)} min read`
}

// Custom components for MDX rendering — styled to match the site
const components = {
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1
      className="text-3xl md:text-4xl font-bold tracking-tight mt-10 mb-5 leading-tight"
      style={{ color: 'rgba(255,255,255,0.95)' }}
      {...props}
    />
  ),
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      className="text-xl md:text-2xl font-semibold mt-10 mb-4 leading-snug"
      style={{ color: '#BFA181' }}
      {...props}
    />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3
      className="text-lg font-semibold mt-8 mb-3"
      style={{ color: 'rgba(255,255,255,0.85)' }}
      {...props}
    />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p
      className="text-base leading-relaxed mb-5"
      style={{ color: 'rgba(255,255,255,0.70)' }}
      {...props}
    />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul
      className="mb-5 space-y-2 pl-6"
      style={{ color: 'rgba(255,255,255,0.70)', listStyleType: 'disc' }}
      {...props}
    />
  ),
  ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
    <ol
      className="mb-5 space-y-2 pl-6"
      style={{ color: 'rgba(255,255,255,0.70)', listStyleType: 'decimal' }}
      {...props}
    />
  ),
  li: (props: React.HTMLAttributes<HTMLLIElement>) => (
    <li className="text-base leading-relaxed" {...props} />
  ),
  strong: (props: React.HTMLAttributes<HTMLElement>) => (
    <strong
      className="font-semibold"
      style={{ color: 'rgba(255,255,255,0.90)' }}
      {...props}
    />
  ),
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a
      className="font-medium underline underline-offset-2 transition-colors duration-200 hover:no-underline"
      style={{ color: '#BFA181' }}
      {...props}
    />
  ),
  table: (props: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="overflow-x-auto mb-6">
      <table
        className="w-full text-sm border-collapse"
        style={{ color: 'rgba(255,255,255,0.70)' }}
        {...props}
      />
    </div>
  ),
  th: (props: React.HTMLAttributes<HTMLTableCellElement>) => (
    <th
      className="text-left px-4 py-2 text-xs font-semibold tracking-wider uppercase"
      style={{
        color: '#BFA181',
        borderBottom: '1px solid rgba(191,161,129,0.3)',
      }}
      {...props}
    />
  ),
  td: (props: React.HTMLAttributes<HTMLTableCellElement>) => (
    <td
      className="px-4 py-2"
      style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}
      {...props}
    />
  ),
  hr: () => (
    <div
      className="my-10 h-px"
      style={{
        background:
          'linear-gradient(to right, transparent, rgba(191,161,129,0.3), transparent)',
      }}
    />
  ),
  blockquote: (props: React.HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote
      className="pl-5 my-6 italic text-base leading-relaxed"
      style={{
        color: 'rgba(255,255,255,0.55)',
        borderLeft: '2px solid rgba(191,161,129,0.4)',
      }}
      {...props}
    />
  ),
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

  return (
    <main className="min-h-screen bg-[#0f0e0c] text-white">
      <Navigation />

      {/* Hero */}
      <section className="relative pt-40 pb-16 px-6 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 70% 40% at 50% 0%, rgba(191,161,129,0.06) 0%, transparent 70%)',
          }}
        />
        <div className="container mx-auto max-w-3xl relative z-10">
          {/* Back link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm mb-10 transition-colors duration-200 hover:text-white"
            style={{ color: 'rgba(255,255,255,0.40)' }}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M10 3L5 8l5 5" />
            </svg>
            All Articles
          </Link>

          {/* Keyword tag */}
          <div className="mb-5">
            <span
              className="text-[10px] font-semibold tracking-[0.18em] uppercase px-2.5 py-1 rounded-full"
              style={{
                color: '#BFA181',
                backgroundColor: 'rgba(191,161,129,0.1)',
                border: '1px solid rgba(191,161,129,0.2)',
              }}
            >
              {post.keyword}
            </span>
          </div>

          {/* Title */}
          <h1
            className="text-3xl md:text-5xl font-bold tracking-tight leading-tight mb-6"
            style={{ color: 'rgba(255,255,255,0.95)' }}
          >
            {post.title}
          </h1>

          {/* Byline */}
          <div
            className="flex flex-wrap items-center gap-4 text-sm"
            style={{ color: 'rgba(255,255,255,0.40)' }}
          >
            <span>{post.author}</span>
            <span style={{ color: 'rgba(191,161,129,0.4)' }}>·</span>
            <span>{formatDate(post.date)}</span>
            <span style={{ color: 'rgba(191,161,129,0.4)' }}>·</span>
            <span>{readingTime(post.wordCount)}</span>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div
        className="mx-auto max-w-3xl px-6 h-px"
        style={{
          background:
            'linear-gradient(to right, transparent, rgba(191,161,129,0.25), transparent)',
        }}
      />

      {/* Article body */}
      <article className="py-16 px-6">
        <div className="container mx-auto max-w-3xl">
          <MDXRemote source={post.content} components={components} />
        </div>
      </article>

      {/* Footer CTA */}
      <section className="py-16 px-6">
        <div
          className="container mx-auto max-w-3xl rounded-2xl p-10 text-center"
          style={{
            backgroundColor: 'rgba(191,161,129,0.05)',
            border: '1px solid rgba(191,161,129,0.15)',
          }}
        >
          <div
            className="text-xs font-semibold tracking-[0.18em] uppercase mb-3"
            style={{ color: '#BFA181' }}
          >
            Ready to Tell Your Story?
          </div>
          <p
            className="text-lg font-semibold mb-6"
            style={{ color: 'rgba(255,255,255,0.90)' }}
          >
            Let's talk about your wedding day.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/videography"
              className="px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105"
              style={{ backgroundColor: '#BFA181', color: '#0f0e0c' }}
            >
              View Our Work
            </Link>
            <Link
              href="/pricing"
              className="px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 hover:bg-white/5"
              style={{
                color: 'rgba(255,255,255,0.80)',
                border: '1px solid rgba(255,255,255,0.15)',
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
