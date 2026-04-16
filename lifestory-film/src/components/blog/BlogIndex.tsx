'use client'

import { useState } from 'react'
import { BlogPostCard } from './BlogPostCard'
import type { PostMeta } from '@/lib/posts'

const FILTERS = ['All', 'Videography', 'Photography', 'Venues', 'Advice'] as const

interface BlogIndexProps {
  posts: PostMeta[]
}

export function BlogIndex({ posts }: BlogIndexProps) {
  const [activeFilter, setActiveFilter] = useState<string>('All')

  const filtered =
    activeFilter === 'All' ? posts : posts.filter(p => p.category === activeFilter)

  const [featured, ...rest] = filtered

  return (
    <>
      {/* Filter bar */}
      <div className="flex flex-wrap gap-2 mb-12 justify-center">
        {FILTERS.map(filter => {
          const isActive = activeFilter === filter
          return (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className="px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-200"
              style={{
                backgroundColor: isActive ? 'var(--t-accent)' : 'transparent',
                color: isActive ? '#0f0e0c' : 'var(--t-text-muted)',
                border: isActive
                  ? '1px solid var(--t-accent)'
                  : '1px solid var(--t-border-strong)',
              }}
            >
              {filter}
            </button>
          )
        })}
      </div>

      {filtered.length === 0 && (
        <p className="text-center" style={{ color: 'var(--t-text-muted)' }}>
          No posts in this category yet.
        </p>
      )}

      {/* Featured post — full width */}
      {featured && (
        <div className="mb-6">
          <BlogPostCard
            key={featured.slug}
            slug={featured.slug}
            title={featured.title}
            keyword={featured.keyword}
            category={featured.category}
            date={featured.date}
            wordCount={featured.wordCount}
            coverImage={featured.coverImage}
            excerpt={featured.excerpt}
            featured
          />
        </div>
      )}

      {/* Remaining posts — 3-column grid */}
      {rest.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map(post => (
            <BlogPostCard
              key={post.slug}
              slug={post.slug}
              title={post.title}
              keyword={post.keyword}
              category={post.category}
              date={post.date}
              wordCount={post.wordCount}
              coverImage={post.coverImage}
              excerpt={post.excerpt}
            />
          ))}
        </div>
      )}
    </>
  )
}
