'use client'

import { AnimatedSection } from '../AnimatedSection'
import { OptimizedVideo } from '../OptimizedVideo'

export function VideoTestimonial() {
  return (
    <section className="py-32 bg-zinc-900">
      <div className="container mx-auto px-6">
        <AnimatedSection direction="fade" className="text-center mb-16">
          <h2 className="section-text text-white mb-6">
            client
            <br />
            <span className="text-gray-400">testimonial</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light">
            Don't just take our word for it. Hear directly from one of our couples about
            their experience working with LifeStory.Film.
          </p>
        </AnimatedSection>

        <AnimatedSection direction="up" delay={0.3}>
          <div className="max-w-4xl mx-auto">
            {/* Video Container */}
            <div className="relative aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl border border-gray-700">
              <OptimizedVideo
                videoId="VohgoLrBi1w"
                title="Client Testimonial - LifeStory.Film Wedding Experience"
                className="w-full h-full"
                controls={true}
                modest={true}
              />
            </div>

            {/* Testimonial Context */}
            <div className="mt-12 text-center">
              <div className="flex items-center justify-center space-x-2 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-6 h-6 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <blockquote className="text-xl text-gray-300 italic mb-6 max-w-2xl mx-auto leading-relaxed">
                "Watch this authentic testimonial from one of our couples sharing their
                experience working with our team and the incredible results we delivered
                for their special day."
              </blockquote>

              <div className="inline-flex items-center justify-center px-6 py-3 bg-black border border-gray-600 rounded-full">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                  <span className="text-gray-300 text-sm font-medium">
                    Real Client Experience
                  </span>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Call to Action */}
        <AnimatedSection direction="up" delay={0.6} className="text-center mt-16">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to create your own love story?
            </h3>
            <p className="text-gray-300 mb-8">
              Join hundreds of couples who've trusted us to capture their most precious moments.
            </p>
            <button
              onClick={() => {
                const element = document.getElementById('contact')
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' })
                }
              }}
              className="inline-flex items-center px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              <span>Start Your Story</span>
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
