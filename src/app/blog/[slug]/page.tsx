import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { evaluate } from '@mdx-js/mdx'
import * as runtime from 'react/jsx-runtime'
import { Navigation } from '@/components/Navigation'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { Footer } from '@/components/Footer'
import { getAllSlugs, getPostBySlug } from '@/lib/blog'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const slugs = await getAllSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  if (!post) return {}

  const { frontmatter } = post
  return {
    title: `${frontmatter.title} | LifeStory.Film Journal`,
    description: frontmatter.excerpt,
    authors: [{ name: frontmatter.author }],
    openGraph: {
      title: frontmatter.title,
      description: frontmatter.excerpt,
      type: 'article',
      publishedTime: frontmatter.date,
      authors: [frontmatter.author],
      images: frontmatter.coverImage
        ? [{ url: frontmatter.coverImage, alt: frontmatter.title }]
        : undefined,
      tags: frontmatter.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: frontmatter.title,
      description: frontmatter.excerpt,
      images: frontmatter.coverImage ? [frontmatter.coverImage] : undefined,
    },
  }
}

function formatDate(iso: string): string {
  try {
    return new Date(iso).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  } catch {
    return iso
  }
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  if (!post) notFound()

  const { frontmatter, content } = post
  const { default: MDXBody } = await evaluate(content, {
    ...(runtime as unknown as Parameters<typeof evaluate>[1]),
  })
  const jsonLd = JSON.stringify(frontmatter.schema?.json ?? {})

  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />
      <Breadcrumbs />

      <article className="bg-black">
        <header className="container mx-auto px-6 pt-8 pb-12 max-w-3xl">
          <div className="mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-gray-400">
            <span className="text-purple-400">{frontmatter.category}</span>
            <span>&middot;</span>
            <span>{formatDate(frontmatter.date)}</span>
            {frontmatter.readTime ? (
              <>
                <span>&middot;</span>
                <span>{frontmatter.readTime}</span>
              </>
            ) : null}
          </div>

          <h1 className="font-playfair text-4xl md:text-6xl leading-tight text-white mb-6">
            {frontmatter.title}
          </h1>

          <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed">
            {frontmatter.excerpt}
          </p>

          <p className="mt-8 text-sm text-gray-500">By {frontmatter.author}</p>
        </header>

        {frontmatter.coverImage ? (
          <div className="container mx-auto px-6 max-w-5xl mb-16">
            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-gray-800">
              <img
                src={frontmatter.coverImage}
                alt={frontmatter.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        ) : null}

        <div className="container mx-auto px-6 pb-24 max-w-3xl">
          <div className="prose prose-invert prose-lg max-w-none prose-headings:font-playfair prose-headings:font-normal prose-headings:text-white prose-p:text-gray-200 prose-p:font-light prose-p:leading-relaxed prose-a:text-purple-300 prose-a:no-underline hover:prose-a:text-purple-200 prose-strong:text-white prose-blockquote:border-l-purple-500 prose-blockquote:text-gray-300 prose-img:rounded-xl">
            <MDXBody />
          </div>

          {frontmatter.tags?.length ? (
            <div className="mt-16 pt-8 border-t border-gray-800 flex flex-wrap gap-2">
              {frontmatter.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs uppercase tracking-wider text-gray-400 border border-gray-700 rounded-full px-3 py-1"
                >
                  {tag}
                </span>
              ))}
            </div>
          ) : null}
        </div>
      </article>

      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD structured data
        dangerouslySetInnerHTML={{ __html: jsonLd }}
      />

      <Footer />
    </main>
  )
}
