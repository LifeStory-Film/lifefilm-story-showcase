'use client'

import { AnimatedSection } from '../AnimatedSection'

export function CinemaEquipment() {
  return (
    <section className="py-32 bg-black">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Camera Image */}
          <AnimatedSection direction="left" delay={0.2}>
            <div className="relative">
              <div className="bg-zinc-900 rounded-2xl p-12 flex items-center justify-center">
                {/* Camera Illustration */}
                <div className="relative">
                  <div className="w-64 h-48 bg-gradient-to-br from-zinc-700 to-zinc-900 rounded-lg shadow-2xl">
                    <div className="absolute top-4 left-4 w-16 h-16 bg-zinc-600 rounded-lg flex items-center justify-center">
                      <div className="text-white font-bold text-xs">4K</div>
                    </div>
                    <div className="absolute top-6 right-4 w-8 h-8 bg-zinc-600 rounded-full"></div>
                    <div className="absolute bottom-4 left-4 right-4 h-8 bg-zinc-800 rounded"></div>
                    {/* Lens */}
                    <div className="absolute -left-8 top-1/2 transform -translate-y-1/2 w-16 h-16 bg-gradient-to-r from-zinc-800 to-zinc-900 rounded-full border-4 border-zinc-600"></div>
                  </div>

                  <div className="mt-6 text-center">
                    <div className="text-white font-semibold">Professional Cinema Cameras</div>
                    <div className="text-gray-400 text-sm">Hollywood-grade equipment</div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Right Side - Content */}
          <AnimatedSection direction="right" delay={0.4}>
            <h2 className="section-text text-white mb-8">
              What about
              <br />
              that <span className="text-gray-400">cinema</span>
              <br />
              <span className="text-gray-400">quality?</span>
            </h2>

            <p className="text-xl text-gray-300 leading-relaxed font-light mb-8">
              Professional cinema cameras at weddings? Absolutely! Leading the way in taking cinematography
              at weddings to the highest tier, we use Hollywood-grade equipment that delivers unparalleled
              image quality and cinematic depth.
            </p>

            <p className="text-lg text-gray-400 leading-relaxed font-light mb-8">
              Our arsenal includes professional cinema cameras, premium lenses, and professional audio equipment –
              the same tools used in major motion pictures. Award-winning sensors, superior image quality,
              and maximum flexibility in post-production.
            </p>

            {/* Equipment Features */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-gray-500 rounded-full mr-4 flex-shrink-0"></div>
                <span className="text-gray-300">Professional Cinema System - 4K Resolution</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-gray-500 rounded-full mr-4 flex-shrink-0"></div>
                <span className="text-gray-300">Professional Cinema Lenses</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-gray-500 rounded-full mr-4 flex-shrink-0"></div>
                <span className="text-gray-300">Advanced Stabilization Systems</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-gray-500 rounded-full mr-4 flex-shrink-0"></div>
                <span className="text-gray-300">Professional Audio Recording</span>
              </div>
            </div>

            <div className="flex items-center space-x-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">4K</div>
                <div className="text-gray-400 text-sm">Resolution</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">120fps</div>
                <div className="text-gray-400 text-sm">Slow Motion</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">16-bit</div>
                <div className="text-gray-400 text-sm">Color Depth</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => document.getElementById('films')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-200 transition-all duration-300"
              >
                See Equipment in Action
              </button>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="border border-white text-white px-8 py-3 rounded-full font-medium hover:bg-white hover:text-black transition-all duration-300"
              >
                Learn More
              </button>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
