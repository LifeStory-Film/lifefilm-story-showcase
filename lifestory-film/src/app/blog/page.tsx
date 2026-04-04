import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { getAllPosts } from '@/lib/posts'

export const metadata = {
  title: 'Blog | Wedding Photography & Videography Tips | LifeStory.Film',
  description:
    'Wedding photography and videography advice from the LifeStory.Film team. Tips on choosing vendors, understanding packages, and making the most of your wedding day.',
}

function formatDate(dateStr: string) {
  const date = new Date(dateStr)
  return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
}

function readingTime(wordCount: number) {
  const mins = Math.ceil(wordCount / 200)
  return `${mins} min read`
}

export default function BlogIndexPage() {
  const posts = getAllPosts()

  return (
    <main className="min-h-screen bg-[#0f0e0c] text-white">
      <Navigation />

      {/* Hero */}
      <section className="relative pt-40 pb-24 px-6 overflow-hidden">
        {/* Ambient background glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(191,161,129,0.07) 0%, transparent 70%)',
          }}
        />
        <div className="container mx-auto max-w-5xl relative z-10 text-center">
          {/* Gold label */}
          <div
            className="inline-block mb-5 px-4 py-1.5 rounded-full text-xs font-semibold tracking-[0.2em] uppercase"
            style={{
              color: '#BFA181',
              backgroundColor: 'rgba(191,161,129,0.1)',
              border: '1px solid rgba(191,161,129,0.25)',
            }}
          >
            From the Studio
          </div>
          <h1
            className="text-4xl md:text-6xl font-bold tracking-tight mb-6"
            style={{ fontFamily: 'var(--font-display, serif)' }}
          >
            The LifeStory Journal
          </h1>
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: 'rgba(255,255,255,0.55)' }}
          >
            Advice on choosing the right wedding vendor, understanding what goes
            into a great film, and making the most of your wedding day.
          </p>
        </div>
      </section>

      {/* Divider */}
      <div
        className="w-full h-px mx-auto max-w-5xl"
        style={{
          background:
            'linear-gradient(to right, transparent, rgba(191,161,129,0.3), transparent)',
        }}
      />

      {/* Post grid */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map(post => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-1"
                style={{
                  backgroundColor: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.07)',
                }}
                onMouseEnter={e => {
                  ;(e.currentTarget as HTMLElement).style.borderColor =
                    'rgba(191,161,129,0.3)'
                  ;(e.currentTarget as HTMLElement).style.backgroundColor =
                    'rgba(191,161,129,0.04)'
                }}
                onMouseLeave={e => {
                  ;(e.currentTarget as HTMLElement).style.borderColor =
                    'rgba(255,255,255,0.07)'
                  ;(e.currentTarget as HTMLElement).style.backgroundColor =
                    'rgba(255,255,255,0.03)'
                }}
              >
                <div className="p-7 flex flex-col h-full">
                  {/* Category tag */}
                  <div className="mb-4">
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
                  <h2
                    className="text-lg font-semibold leading-snug mb-3 transition-colors duration-300 group-hover:text-[#BFA181]"
                    style={{ color: 'rgba(255,255,255,0.92)' }}
                  >
                    {post.title}
                  </h2>

                  {/* Meta row */}
                  <div
                    className="flex items-center gap-3 text-xs mt-auto pt-5"
                    style={{
                      color: 'rgba(255,255,255,0.35)',
                      borderTop: '1px solid rgba(255,255,255,0.06)',
                    }}
                  >
                    <span>{formatDate(post.date)}</span>
                    <span style={{ color: 'rgba(191,161,129,0.4)' }}>·</span>
                    <span>{readingTime(post.wordCount)}</span>
                    <span
                      className="ml-auto text-xs font-medium transition-all duration-300 group-hover:translate-x-1"
                      style={{ color: '#BFA181' }}
                    >
                      Read More →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
