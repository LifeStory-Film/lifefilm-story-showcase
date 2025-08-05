'use client'

import { useState } from 'react'
import { AnimatedSection } from '../AnimatedSection'

interface BlogPost {
  id: number
  title: string
  excerpt: string
  category: 'tips' | 'showcase' | 'planning' | 'trends'
  author: string
  date: string
  readTime: string
  image: string
  featured: boolean
  slug: string
}

export function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "The Ultimate Wedding Videography Timeline Guide",
      excerpt: "Plan your wedding day timeline to ensure your videographer captures every precious moment. From getting ready to the last dance, here's how to structure your day for the best film coverage.",
      category: 'planning',
      author: "LifeStory Team",
      date: "December 15, 2024",
      readTime: "8 min read",
      image: "https://images.squarespace-cdn.com/content/v1/5de04e649f40c13aa68cadf9/99b0baa2-f383-4064-9924-58e3986719a9/French+Riviera+Wedding+Videography.jpg",
      featured: true,
      slug: "ultimate-wedding-videography-timeline-guide"
    },
    {
      id: 2,
      title: "Sarah & Michael's Napa Valley Wedding Film",
      excerpt: "Take a behind-the-scenes look at this stunning Napa Valley wedding. From vineyard ceremonies to golden hour portraits, see how we captured this couple's perfect day.",
      category: 'showcase',
      author: "Rick Johnson",
      date: "December 10, 2024",
      readTime: "5 min read",
      image: "https://images.squarespace-cdn.com/content/v1/674f379b66552d5bd917587b/37c25b3b-ba48-468e-8d4b-0c902174cfd3/russell-john-films-wedding-video-cinematography-twin-oaks-san-diego2.jpg",
      featured: true,
      slug: "sarah-michael-napa-valley-wedding-film"
    },
    {
      id: 3,
      title: "2025 Wedding Videography Trends to Watch",
      excerpt: "Discover the latest trends in wedding videography for 2025. From documentary-style storytelling to innovative camera techniques, see what's shaping the industry.",
      category: 'trends',
      author: "Creative Team",
      date: "December 5, 2024",
      readTime: "6 min read",
      image: "https://www.dolcevitaweddingcinema.com/wp-content/uploads/2024/01/wedding-lake-como-balbianello-videography-riva-boat-italy-luxury.jpg",
      featured: false,
      slug: "2025-wedding-videography-trends"
    },
    {
      id: 4,
      title: "How to Choose the Perfect Wedding Videographer",
      excerpt: "Essential questions to ask when hiring a wedding videographer. Learn what to look for in portfolios, packages, and personalities to find your perfect match.",
      category: 'tips',
      author: "LifeStory Team",
      date: "November 30, 2024",
      readTime: "10 min read",
      image: "https://images.squarespace-cdn.com/content/v1/6347c44b9a8b8c0d95f6c3e3/1665710950901-YQJT8VYG0XCF8XKM7ZNJ/destination-wedding-film-tuscany-italy",
      featured: false,
      slug: "how-to-choose-perfect-wedding-videographer"
    },
    {
      id: 5,
      title: "Jessica & David's Big Sur Coastal Wedding",
      excerpt: "A breathtaking coastal wedding in Big Sur. See how dramatic landscapes and intimate moments combined to create this unforgettable wedding film.",
      category: 'showcase',
      author: "Production Team",
      date: "November 25, 2024",
      readTime: "4 min read",
      image: "https://images.squarespace-cdn.com/content/v1/5de04e649f40c13aa68cadf9/1671045123423-8N0XVKZQXPJT6XFWH42E/luxury-wedding-videography-cinematography",
      featured: false,
      slug: "jessica-david-big-sur-coastal-wedding"
    },
    {
      id: 6,
      title: "Wedding Day Audio: Capturing Perfect Vows",
      excerpt: "The technical side of wedding videography. Learn how professional audio equipment ensures your vows and speeches are crystal clear in your wedding film.",
      category: 'tips',
      author: "Technical Team",
      date: "November 20, 2024",
      readTime: "7 min read",
      image: "https://images.squarespace-cdn.com/content/v1/674f379b66552d5bd917587b/37c25b3b-ba48-468e-8d4b-0c902174cfd3/russell-john-films-wedding-video-cinematography-twin-oaks-san-diego2.jpg",
      featured: false,
      slug: "wedding-day-audio-capturing-perfect-vows"
    },
    {
      id: 7,
      title: "Planning Your Dream Destination Wedding",
      excerpt: "Essential tips for destination wedding planning. From logistics to videography considerations, everything you need for a flawless celebration abroad.",
      category: 'planning',
      author: "Planning Team",
      date: "November 15, 2024",
      readTime: "9 min read",
      image: "https://www.dolcevitaweddingcinema.com/wp-content/uploads/2024/01/wedding-lake-como-balbianello-videography-riva-boat-italy-luxury.jpg",
      featured: false,
      slug: "planning-dream-destination-wedding"
    },
    {
      id: 8,
      title: "The Art of Wedding Film Editing",
      excerpt: "Go behind the scenes of our post-production process. Discover how raw footage transforms into cinematic wedding films through careful editing and storytelling.",
      category: 'tips',
      author: "Editorial Team",
      date: "November 10, 2024",
      readTime: "8 min read",
      image: "https://images.squarespace-cdn.com/content/v1/5de04e649f40c13aa68cadf9/1671045123423-8N0XVKZQXPJT6XFWH42E/luxury-wedding-videography-cinematography",
      featured: false,
      slug: "art-of-wedding-film-editing"
    },
    {
      id: 9,
      title: "Emma & James' Malibu Beach Wedding",
      excerpt: "A romantic beachfront celebration in Malibu. See how ocean views and golden sunsets created the perfect backdrop for this couple's love story.",
      category: 'showcase',
      author: "Coastal Team",
      date: "November 5, 2024",
      readTime: "5 min read",
      image: "https://images.squarespace-cdn.com/content/v1/6347c44b9a8b8c0d95f6c3e3/1665710950901-YQJT8VYG0XCF8XKM7ZNJ/destination-wedding-film-tuscany-italy",
      featured: false,
      slug: "emma-james-malibu-beach-wedding"
    }
  ]

  const categories = [
    { id: 'all', label: 'All Posts' },
    { id: 'showcase', label: 'Recent Work' },
    { id: 'tips', label: 'Wedding Tips' },
    { id: 'planning', label: 'Planning Advice' },
    { id: 'trends', label: 'Trends' }
  ]

  const filteredPosts = selectedCategory === 'all'
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory)

  const featuredPosts = blogPosts.filter(post => post.featured)
  const regularPosts = filteredPosts.filter(post => !post.featured)

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-6">
          <AnimatedSection direction="fade" className="text-center mb-12">
            <h1 className="section-text text-white mb-6">
              wedding
              <br />
              <span className="text-gray-400">blog</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light">
              Wedding tips, planning advice, and behind-the-scenes looks at our recent work.
              Everything you need to plan your perfect wedding film.
            </p>
          </AnimatedSection>

          {/* Category Filter */}
          <AnimatedSection direction="fade" delay={0.4}>
            <div className="flex justify-center mb-12">
              <div className="flex flex-wrap gap-2 bg-zinc-900 rounded-full p-2">
                {categories.map((category) => (
                  <button
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
        </div>
      </section>

      {/* Featured Posts */}
      {selectedCategory === 'all' && (
        <section className="py-16 bg-zinc-900">
          <div className="container mx-auto px-6">
            <AnimatedSection direction="fade" delay={0.2}>
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Featured Posts</h2>
              <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {featuredPosts.map((post, index) => (
                  <div
                    key={post.id}
                    className="group relative bg-black rounded-2xl overflow-hidden border border-gray-700 hover:border-gray-500 transition-all duration-500 hover:scale-105 cursor-pointer"
                  >
                    {/* Image */}
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                        style={{ backgroundImage: `url('${post.image}')` }}
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-20 transition-all duration-300" />

                      {/* Category Badge */}
                      <div className="absolute top-4 left-4">
                        <span className="bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                          {post.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-8">
                      <div className="flex items-center text-sm text-gray-400 mb-4">
                        <span>{post.author}</span>
                        <span className="mx-2">•</span>
                        <span>{post.date}</span>
                        <span className="mx-2">•</span>
                        <span>{post.readTime}</span>
                      </div>

                      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-gray-200 transition-colors">
                        {post.title}
                      </h3>

                      <p className="text-gray-300 leading-relaxed mb-6">
                        {post.excerpt}
                      </p>

                      <button className="text-purple-400 font-medium hover:text-purple-300 transition-colors flex items-center">
                        Read More
                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>
      )}

      {/* Regular Posts Grid */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-6">
          {selectedCategory !== 'all' && (
            <AnimatedSection direction="fade" delay={0.2}>
              <h2 className="text-3xl font-bold text-white mb-8 text-center">
                {categories.find(cat => cat.id === selectedCategory)?.label}
              </h2>
            </AnimatedSection>
          )}

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, index) => (
              <AnimatedSection
                key={post.id}
                direction="up"
                delay={index * 0.1}
                className="group bg-zinc-900 rounded-2xl overflow-hidden border border-gray-700 hover:border-gray-500 transition-all duration-500 hover:scale-105 cursor-pointer"
              >
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url('${post.image}')` }}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-20 transition-all duration-300" />

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-400 mb-3">
                    <span>{post.author}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gray-200 transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 text-xs">{post.date}</span>
                    <button className="text-purple-400 text-sm font-medium hover:text-purple-300 transition-colors">
                      Read More →
                    </button>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-zinc-900">
        <div className="container mx-auto px-6">
          <AnimatedSection direction="fade" delay={0.6} className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Stay Updated</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest wedding tips, trends, and behind-the-scenes content.
            </p>

            <div className="max-w-md mx-auto">
              <div className="flex gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 bg-black border border-gray-700 rounded-full px-6 py-3 text-white placeholder-gray-400 focus:border-white focus:outline-none transition-colors"
                />
                <button className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-200 transition-all duration-300">
                  Subscribe
                </button>
              </div>
              <p className="text-gray-500 text-sm mt-3">
                No spam, just valuable wedding planning content.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-6">
          <AnimatedSection direction="fade" delay={0.8} className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Start Your Story?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's create something beautiful together. Contact us to discuss your wedding videography needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-black px-8 py-4 rounded-full font-medium text-lg hover:bg-gray-200 transition-all duration-300"
              >
                Get In Touch
              </button>
              <button
                onClick={() => window.open('/pricing', '_blank')}
                className="border border-white text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-white hover:text-black transition-all duration-300"
              >
                View Packages
              </button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
