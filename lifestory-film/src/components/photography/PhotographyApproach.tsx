'use client'

import { AnimatedSection } from '../AnimatedSection'

export function PhotographyApproach() {
  return (
    <section className="py-32 bg-zinc-900">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Title */}
          <AnimatedSection direction="left" delay={0.2}>
            <h2 className="section-text text-white mb-8">
              Photography
              <br />
              <span className="text-gray-400">approach</span>
            </h2>
          </AnimatedSection>

          {/* Right Side - Description */}
          <AnimatedSection direction="right" delay={0.4}>
            <p className="text-xl text-gray-300 leading-relaxed font-light mb-8">
              Our focus is on the couple, but we also capture the meaningful moments shared with family,
              friends, and the atmosphere of the day. We blend a documentary style, capturing genuine
              interactions, with creative yet relaxed posing for the couple.
            </p>

            <p className="text-lg text-gray-400 leading-relaxed font-light">
              Using natural light whenever possible, we enhance scenes with flash or set lighting only
              when needed, ensuring authentic, timeless images that tell the full story of your special day.
              Our approach seamlessly coordinates with videography teams, creating a cohesive artistic vision.
            </p>
          </AnimatedSection>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mt-24">
          <AnimatedSection direction="up" delay={0.6}>
            <div className="text-center">
              <div className="w-16 h-16 bg-zinc-800 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Documentary Style</h3>
              <p className="text-gray-400">
                Capturing authentic, unposed moments that tell your genuine love story.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.8}>
            <div className="text-center">
              <div className="w-16 h-16 bg-zinc-800 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Natural Light</h3>
              <p className="text-gray-400">
                Utilizing beautiful natural light to create timeless, elegant imagery.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={1.0}>
            <div className="text-center">
              <div className="w-16 h-16 bg-zinc-800 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Artistic Vision</h3>
              <p className="text-gray-400">
                Creative composition and artistic direction that elevates your love story.
              </p>
            </div>
          </AnimatedSection>
        </div>

        {/* Quote */}
        <AnimatedSection direction="fade" delay={1.2} className="text-center mt-24">
          <blockquote className="text-2xl md:text-3xl text-gray-300 italic font-light max-w-4xl mx-auto">
            "Photography is about capturing the emotion between the moments, the laughter in between poses,
            and the love that exists in the quiet spaces."
          </blockquote>
        </AnimatedSection>
      </div>
    </section>
  )
}
