'use client'

import { AnimatedSection } from './AnimatedSection'

const REVIEWS = [
  {
    name: 'Sarah Thompson',
    coupleName: 'Sarah & James Thompson',
    location: 'Pelican Hill, Newport Beach',
    date: 'October 2024',
    quote: 'LifeStory.Film exceeded every expectation we had. From our first consultation to receiving our final film, their team was professional, creative, and truly understood our vision. The cinematography is breathtaking — watching our wedding film feels like reliving the most magical day of our lives.',
    initials: 'ST',
    googleUrl: 'https://www.google.com/search?q=lifestory.film+reviews',
  },
  {
    name: 'Elena Voss',
    coupleName: 'Michael & Elena Voss',
    location: 'Big Sur, CA',
    date: 'August 2024',
    quote: 'Every time we watch it, we discover new beautiful moments we didn\'t even know were captured. They have an incredible eye for emotion. Our families cried watching the film — more than they cried at the wedding itself.',
    initials: 'EV',
    googleUrl: 'https://www.google.com/search?q=lifestory.film+reviews',
  },
  {
    name: 'Rachel Kim',
    coupleName: 'David & Rachel Kim',
    location: 'Four Seasons, Los Angeles',
    date: 'June 2024',
    quote: 'The attention to detail and artistic vision they brought to our wedding was incredible. Our families still talk about how professional and unobtrusive they were. And the final film — genuinely one of the best decisions we made for our wedding.',
    initials: 'RK',
    googleUrl: 'https://www.google.com/search?q=lifestory.film+reviews',
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-32 bg-[#1a1916]">
      <div className="container mx-auto px-6">
        <AnimatedSection direction="fade" className="text-center mb-16">
          <p className="text-[#BFA181] text-[11px] tracking-widest uppercase mb-5 font-light">What Couples Say</p>
          <h2
            className="font-extrabold text-white leading-tight mb-4"
            style={{ fontSize: 'clamp(40px, 4.5vw, 56px)', letterSpacing: '-0.02em' }}
          >
            Client Love Stories
          </h2>
          <p className="font-light text-white/55 max-w-[600px] mx-auto" style={{ fontSize: '18px' }}>
            Hear from couples who trusted us to capture their most precious moments.
          </p>
        </AnimatedSection>

        <AnimatedSection direction="fade" delay={0.3} className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {REVIEWS.map((review, index) => (
              <div
                key={index}
                className="bg-white/5 rounded-2xl p-8 border border-white/10 hover:border-[#BFA181]/30 transition-all duration-300 flex flex-col"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-gray-300 leading-relaxed italic flex-1 mb-6">
                  "{review.quote}"
                </blockquote>

                {/* Reviewer */}
                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <div className="flex items-center gap-3">
                    {/* Avatar placeholder */}
                    <div className="w-10 h-10 rounded-full bg-[#BFA181]/20 border border-[#BFA181]/40 flex items-center justify-center flex-shrink-0">
                      <span className="text-[#BFA181] text-sm font-semibold">{review.initials}</span>
                    </div>
                    <div>
                      <div className="text-white font-semibold text-sm">{review.coupleName}</div>
                      <div className="text-gray-400 text-xs">{review.location} · {review.date}</div>
                      <a
                        href="https://www.theknot.com/marketplace/lifestoryfilm-los-angeles-ca-2082602"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="no-underline hover:opacity-75 transition-opacity"
                        style={{ fontSize: '12px', color: '#BFA181' }}
                      >
                        Verified · The Knot →
                      </a>
                    </div>
                  </div>
                  {/* Google link */}
                  <a
                    href={review.googleUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0 ml-3"
                    title="View on Google"
                  >
                    <svg className="w-5 h-5 text-gray-500 hover:text-white transition-colors" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/>
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Google aggregate rating */}
        <AnimatedSection direction="fade" delay={0.6} className="text-center mt-12">
          <a
            href="https://www.google.com/search?q=lifestory.film+reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white/5 hover:bg-white/10 transition-colors px-6 py-3 rounded-full border border-white/10 hover:border-white/20"
          >
            <svg className="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/>
            </svg>
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-white font-semibold">5.0</span>
            <span className="text-gray-400 text-sm">· View all reviews on Google</span>
          </a>
        </AnimatedSection>
      </div>
    </section>
  )
}
