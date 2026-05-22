'use client'

import { useState } from 'react'
import Link from 'next/link'
import { AnimatedSection } from '../AnimatedSection'
import type { PostSummary } from '@/lib/blog'

interface BlogPageProps {
  posts: PostSummary[]
}

const categories = [
  { id: 'all', label: 'All Posts' },
  { id: 'showcase', label: 'Recent Work' },
  { id: 'venue-guide', label: 'Venue Guides' },
  { id: 'how-to', label: 'How-To' },
  { id: 'planning', label: 'Planning' },
  { id: 'trends', label: 'Trends' },
]

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

export function BlogPage({ posts }: BlogPageProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')

  const filteredPosts =
    selectedCategory === 'all'
      ? posts
      : posts.filter((post) => post.category === selectedCategory)

  const featuredPosts = posts.filter((post) => post.featured)
  const regularPosts = filteredPosts.filter((post) => !post.featured)

  const hasPosts = posts.length > 0

  return (
    <div className="min-h-screen bg-black">
      <section className="py-16 bg-black">
        <div className="container mx-auto px-6">
          <AnimatedSection direction="fade" className="text-center mb-12">
            <h1 className="section-text text-white mb-6">
              wedding
              <br />
              <span className="text-gray-400">journal</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light">
              Field notes, venue studies, and editorial dispatches from the most considered
              weddings on the West Coast.
            </p>
          </AnimatedSection>

          {hasPosts && (
            <AnimatedSection direction="fade" delay={0.4}>
              <div className="flex justify-center mb-12">
                <div className="flex flex-wrap gap-2 bg-zinc-900 rounded-full p-2">
                  {categories.map((category) => (
                    <button
                      type="button"
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                        selectedCategory === category.id
                          ? 'bg-white text-black'
                          : 'text-gray-300 hover:text-white'
                      }`}
                    >
                      {category.label}
                    </button>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          )}
        </div>
      </section>

      {!hasPosts && (
        <section className="py-24 bg-black">
          <div className="container mx-auto px-6 text-center max-w-2xl">
            <AnimatedSection direction="fade">
              <h2 className="font-playfair text-3xl text-white mb-4">
                The first letter is in the post.
              </h2>
              <p className="text-gray-400 font-light">
                Our journal launches shortly. Subscribe below and we will write only when
                we have something worth sending.
              </p>
            </AnimatedSection>
          </div>
        </section>
      )}

      {hasPosts && selectedCategory === 'all' && featuredPosts.length > 0 && (
        <section className="py-16 bg-zinc-900">
          <div className="container mx-auto px-6">
            <AnimatedSection direction="fade" delay={0.2}>
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Featured Posts</h2>
              <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {featuredPosts.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="group relative bg-black rounded-2xl overflow-hidden border border-gray-700 hover:border-gray-500 transition-all duration-500 hover:scale-[1.02] cursor-pointer"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                        style={{ backgroundImage: `url('${post.coverImage}')` }}
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-20 transition-all duration-300" />

                      <div className="absolute top-4 left-4">
                        <span className="bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                          {post.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-8">
                      <div className="flex items-center text-sm text-gray-400 mb-4">
                        <span>{post.author}</span>
                        <span className="mx-2">&middot;</span>
                        <span>{formatDate(post.date)}</span>
                        {post.readTime ? (
                          <>
                            <span className="mx-2">&middot;</span>
                            <span>{post.readTime}</span>
                          </>
                        ) : null}
                      </div>

                      <h3 className="font-playfair text-2xl text-white mb-4 group-hover:text-gray-200 transition-colors">
                        {post.title}
                      </h3>

                      <p className="text-gray-300 leading-relaxed mb-6 font-light">
                        {post.excerpt}
                      </p>

                      <span className="text-purple-400 font-medium group-hover:text-purple-300 transition-colors inline-flex items-center">
                        Read More
                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>
      )}

      {hasPosts && regularPosts.length > 0 && (
        <section className="py-16 bg-black">
          <div className="container mx-auto px-6">
            {selectedCategory !== 'all' && (
              <AnimatedSection direction="fade" delay={0.2}>
                <h2 className="text-3xl font-bold text-white mb-8 text-center">
                  {categories.find((cat) => cat.id === selectedCategory)?.label}
                </h2>
              </AnimatedSection>
            )}

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post, index) => (
                <AnimatedSection
                  key={post.slug}
                  direction="up"
                  delay={index * 0.1}
                >
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group block bg-zinc-900 rounded-2xl overflow-hidden border border-gray-700 hover:border-gray-500 transition-all duration-500 hover:scale-[1.02] cursor-pointer h-full"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                        style={{ backgroundImage: `url('${post.coverImage}')` }}
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-20 transition-all duration-300" />

                      <div className="absolute top-4 left-4">
                        <span className="bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                          {post.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center text-sm text-gray-400 mb-3">
                        <span>{post.author}</span>
                        {post.readTime ? (
                          <>
                            <span className="mx-2">&middot;</span>
                            <span>{post.readTime}</span>
                          </>
                        ) : null}
                      </div>

                      <h3 className="font-playfair text-xl text-white mb-3 group-hover:text-gray-200 transition-colors">
                        {post.title}
                      </h3>

                      <p className="text-gray-300 text-sm leading-relaxed mb-4 font-light">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center justify-between">
                        <span className="text-gray-500 text-xs">{formatDate(post.date)}</span>
                        <span className="text-purple-400 text-sm font-medium group-hover:text-purple-300 transition-colors">
                          Read More &rarr;
                        </span>
                      </div>
                    </div>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-16 bg-zinc-900">
        <div className="container mx-auto px-6">
          <AnimatedSection direction="fade" delay={0.6} className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Stay Updated</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              One letter per quarter. Venue studies, field notes, and a few words on the
              films we have just delivered.
            </p>

            <div className="max-w-md mx-auto">
              <div className="flex gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 bg-black border border-gray-700 rounded-full px-6 py-3 text-white placeholder-gray-400 focus:border-white focus:outline-none transition-colors"
                />
                <button
                  type="button"
                  className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-200 transition-all duration-300"
                >
                  Subscribe
                </button>
              </div>
              <p className="text-gray-500 text-sm mt-3">
                No spam. We never send more than we would want to receive.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
