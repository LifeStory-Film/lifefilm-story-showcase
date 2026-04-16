import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { BlogIndex } from '@/components/blog/BlogIndex'
import { getAllPosts } from '@/lib/posts'

export const metadata = {
  title: 'Blog | Wedding Photography & Videography Tips | LifeStory.Film',
  description:
    'Wedding photography and videography advice from the LifeStory.Film team. Tips on choosing vendors, understanding packages, and making the most of your wedding day.',
}

export default function BlogIndexPage() {
  const posts = getAllPosts()

  return (
    <main className="min-h-screen" style={{ backgroundColor: 'var(--t-bg-primary)', color: 'var(--t-text-primary)' }}>
      <Navigation />

      {/* Hero */}
      <section className="relative pt-40 pb-20 px-6 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 80% 50% at 50% 0%, color-mix(in srgb, var(--t-accent) 8%, transparent) 0%, transparent 70%)',
          }}
        />
        <div className="container mx-auto max-w-5xl relative z-10 text-center">
          <div
            className="inline-block mb-5 px-4 py-1.5 rounded-full text-xs font-semibold tracking-[0.2em] uppercase"
            style={{
              color: 'var(--t-accent)',
              backgroundColor: 'color-mix(in srgb, var(--t-accent) 10%, transparent)',
              border: '1px solid color-mix(in srgb, var(--t-accent) 25%, transparent)',
            }}
          >
            From the Studio
          </div>
          <h1
            className="text-4xl md:text-6xl font-bold tracking-tight mb-6"
            style={{ color: 'var(--t-text-primary)' }}
          >
            The LifeStory Journal
          </h1>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--t-text-secondary)' }}>
            Advice on choosing the right wedding vendor, understanding what goes
            into a great film, and making the most of your wedding day.
          </p>
        </div>
      </section>

      {/* Divider */}
      <div
        className="w-full h-px mx-auto max-w-5xl"
        style={{
          background: 'linear-gradient(to right, transparent, color-mix(in srgb, var(--t-accent) 40%, transparent), transparent)',
        }}
      />

      {/* Blog index with filter + cards */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-5xl">
          <BlogIndex posts={posts} />
        </div>
      </section>

      <Footer />
    </main>
  )
}
