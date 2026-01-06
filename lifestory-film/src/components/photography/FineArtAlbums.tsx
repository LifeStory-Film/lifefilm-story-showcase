'use client'

import { AnimatedSection } from '../AnimatedSection'
import { GALLERY_IMAGES } from '@/constants/photography'
import { OptimizedImage } from '../OptimizedImage'

export function FineArtAlbums() {
  // Use one of the beautiful bridal portraits from the gallery
  const albumCoverImage = GALLERY_IMAGES[1] // Classic bridal portrait with bouquet

  return (
    <section className="py-32 bg-black">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Album Image */}
          <AnimatedSection direction="left" delay={0.2}>
            <div className="relative">
              <div className="bg-zinc-800 rounded-2xl p-8 aspect-square flex items-center justify-center">
                <div className="relative">
                  {/* Album mockup with actual gallery image */}
                  <div className="w-64 h-64 bg-gradient-to-br from-gray-100 to-gray-300 rounded-lg shadow-2xl transform rotate-3 overflow-hidden">
                    <OptimizedImage
                      src={albumCoverImage.src}
                      alt={albumCoverImage.alt}
                      className="w-full h-full object-cover rounded-lg"
                      priority={true}
                    />
                  </div>
                  {/* Second album slightly behind */}
                  <div className="absolute -top-4 -left-4 w-64 h-64 bg-gradient-to-br from-gray-200 to-gray-400 rounded-lg shadow-xl transform -rotate-2 -z-10" />
                  {/* Third album further behind */}
                  <div className="absolute -top-8 -left-8 w-64 h-64 bg-gradient-to-br from-gray-300 to-gray-500 rounded-lg shadow-lg transform rotate-1 -z-20" />
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Right Side - Content */}
          <AnimatedSection direction="right" delay={0.4}>
            <h2 className="section-text text-white mb-8">
              Fine art
              <br />
              <span className="text-gray-400">albums</span>
            </h2>

            <p className="text-xl text-gray-300 leading-relaxed font-light mb-8">
              Albums are the best way to translate wedding storytelling images from screen to print.
              This gives all those emotional candid photos a place in the real world. It separates them
              from the thousands of digital photos you randomly scroll through everyday.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-white rounded-full mt-2 mr-4 flex-shrink-0" />
                <div>
                  <h4 className="text-white font-medium mb-1">Premium Materials</h4>
                  <p className="text-gray-400">Archival quality papers and luxury binding for generations to come.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-2 h-2 bg-white rounded-full mt-2 mr-4 flex-shrink-0" />
                <div>
                  <h4 className="text-white font-medium mb-1">Custom Design</h4>
                  <p className="text-gray-400">Each album is uniquely designed to reflect your wedding's style and story.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-2 h-2 bg-white rounded-full mt-2 mr-4 flex-shrink-0" />
                <div>
                  <h4 className="text-white font-medium mb-1">Heirloom Quality</h4>
                  <p className="text-gray-400">Built to last and be treasured by future generations of your family.</p>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">$1,000</div>
                <div className="text-gray-400 text-sm">Starting Price</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">50+</div>
                <div className="text-gray-400 text-sm">Images Included</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-200 transition-all duration-300"
              >
                Add to Package
              </button>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
