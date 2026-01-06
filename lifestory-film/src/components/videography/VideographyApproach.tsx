'use client'

import { AnimatedSection } from '../AnimatedSection'

export function VideographyApproach() {
  return (
    <section className="py-32 bg-zinc-900">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Title */}
          <AnimatedSection direction="left" delay={0.2}>
            <h2 className="section-text text-white mb-8">
              Videography
              <br />
              <span className="text-gray-400">approach</span>
            </h2>
          </AnimatedSection>

          {/* Right Side - Description */}
          <AnimatedSection direction="right" delay={0.4}>
            <p className="text-xl text-gray-300 leading-relaxed font-light mb-8">
              Our videography captures the couple's story while also highlighting moments with family,
              friends, and the atmosphere of the day. With a documentary approach and artful cinematic shots,
              we blend natural moments with creative direction.
            </p>

            <p className="text-lg text-gray-400 leading-relaxed font-light">
              As experienced videographers, we seamlessly coordinate with the photography team, ensuring
              smooth coverage and authentic, timeless films. We rely on natural light as much as possible,
              using additional lighting only when needed, to beautifully preserve the essence of your special day.
            </p>
          </AnimatedSection>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mt-24">
          <AnimatedSection direction="up" delay={0.6}>
            <div className="text-center">
              <div className="w-16 h-16 bg-zinc-800 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Cinematic Storytelling</h3>
              <p className="text-gray-400">
                Documentary-style filming combined with artistic direction for emotional impact.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.8}>
            <div className="text-center">
              <div className="w-16 h-16 bg-zinc-800 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Professional Quality</h3>
              <p className="text-gray-400">
                Hollywood-grade equipment and post-production for the highest quality results.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={1.0}>
            <div className="text-center">
              <div className="w-16 h-16 bg-zinc-800 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Seamless Coordination</h3>
              <p className="text-gray-400">
                Expert coordination with photography teams for complete coverage without interference.
              </p>
            </div>
          </AnimatedSection>
        </div>

        {/* Quote */}
        <AnimatedSection direction="fade" delay={1.2} className="text-center mt-24">
          <blockquote className="text-2xl md:text-3xl text-gray-300 italic font-light max-w-4xl mx-auto">
            "Great wedding films don't just document the day – they capture the feeling, the atmosphere,
            and the love that fills every moment of your celebration."
          </blockquote>
        </AnimatedSection>
      </div>
    </section>
  )
}
