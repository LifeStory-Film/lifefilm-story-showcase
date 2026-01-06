'use client'

import { AnimatedSection } from '../AnimatedSection'
import { OptimizedVideo } from '../OptimizedVideo'

export function BehindTheScenes() {
  return (
    <section className="py-32 bg-black">
      <div className="container mx-auto px-6">
        <AnimatedSection direction="fade" className="text-center mb-16">
          <h2 className="section-text text-white mb-6">
            behind
            <br />
            <span className="text-gray-400">the scenes</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light">
            See how we create cinematic magic on your wedding day. From camera setups to
            creative directing, get an inside look at our filmmaking process.
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Behind-the-Scenes Video */}
          <AnimatedSection direction="left" delay={0.2}>
            <div className="relative aspect-video bg-zinc-900 rounded-2xl overflow-hidden shadow-2xl border border-gray-700">
              <OptimizedVideo
                videoId="dQw4w9WgXcQ"
                title="LifeStory.Film - Behind The Scenes"
                className="w-full h-full"
                controls={true}
                modest={true}
              />
            </div>

            {/* Video Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="text-center p-4 bg-zinc-900 rounded-lg border border-gray-700">
                <div className="flex justify-center mb-3">
                  <div className="w-12 h-12 rounded-full bg-purple-600/20 flex items-center justify-center">
                    <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
                <div className="text-xl font-bold text-white mb-1">4K Ultra HD</div>
                <div className="text-sm text-gray-400 leading-relaxed">Cinema-grade image quality</div>
              </div>
              <div className="text-center p-4 bg-zinc-900 rounded-lg border border-gray-700">
                <div className="flex justify-center mb-3">
                  <div className="w-12 h-12 rounded-full bg-green-600/20 flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
                    </svg>
                  </div>
                </div>
                <div className="text-xl font-bold text-white mb-1">Professional Creative Team</div>
                <div className="text-sm text-gray-400 leading-relaxed">15+ years of wedding storytelling experience</div>
              </div>
              <div className="text-center p-4 bg-zinc-900 rounded-lg border border-gray-700">
                <div className="flex justify-center mb-3">
                  <div className="w-12 h-12 rounded-full bg-yellow-600/20 flex items-center justify-center">
                    <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                </div>
                <div className="text-xl font-bold text-white mb-1">100% Backup Coverage</div>
                <div className="text-sm text-gray-400 leading-relaxed">Redundant cameras, audio, and data on site</div>
              </div>
            </div>
          </AnimatedSection>

          {/* Content */}
          <AnimatedSection direction="right" delay={0.4}>
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-white mb-4">Our Filmmaking Philosophy</h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Every wedding is a unique story waiting to be told. We approach each celebration
                  with the same care and creativity as a Hollywood production, but with the heart
                  and authenticity that makes your day truly yours.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-600/20 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">Cinematic Equipment</h4>
                    <p className="text-gray-400">
                      Professional RED and Sony cinema cameras, cinema lenses, gimbals, sliders, and
                      drones for unparalleled production quality.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">Expert Team</h4>
                    <p className="text-gray-400">
                      Our filmmakers have backgrounds in cinema, documentary, and fine art, bringing
                      diverse perspectives to capture your story beautifully.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-600/20 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">Unobtrusive Coverage</h4>
                    <p className="text-gray-400">
                      We blend into your celebration, capturing authentic moments without interrupting
                      the flow of your day. You'll barely notice us, but you'll love the results.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <button
                  onClick={() => {
                    const element = document.getElementById('contact')
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' })
                    }
                  }}
                  className="bg-white text-black px-8 py-4 rounded-full font-medium text-lg hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 inline-flex items-center space-x-2"
                >
                  <span>Experience Our Filmmaking</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Process Timeline */}
        <AnimatedSection direction="up" delay={0.6} className="mt-20">
          <div className="max-w-5xl mx-auto">
            <h3 className="text-3xl font-bold text-white text-center mb-12">Our Production Process</h3>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Pre-Production",
                  description: "We meet to discuss your vision, create shot lists, and plan the perfect coverage for your day."
                },
                {
                  step: "02",
                  title: "Wedding Day",
                  description: "Our team captures every moment with cinema-grade equipment and creative directing."
                },
                {
                  step: "03",
                  title: "Post-Production",
                  description: "Expert editing, color grading, and sound design transform raw footage into cinematic art."
                },
                {
                  step: "04",
                  title: "Final Delivery",
                  description: "You receive your complete film package with online access and premium USB drive."
                }
              ].map((phase, index) => (
                <div
                  key={index}
                  className="relative bg-zinc-900 rounded-2xl p-6 border border-gray-700 hover:border-purple-500 transition-all duration-300 group"
                >
                  <div className="text-5xl font-bold text-gray-700 group-hover:text-purple-500 transition-colors mb-4">
                    {phase.step}
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-3">{phase.title}</h4>
                  <p className="text-gray-400 leading-relaxed">{phase.description}</p>

                  {/* Connector Line (except last) */}
                  {index < 3 && (
                    <div className="hidden md:block absolute top-1/2 left-full w-8 h-0.5 bg-gray-700 group-hover:bg-purple-500 transition-colors" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
