'use client'

import { PhotoSlider } from '../PhotoSlider'

export function PhotographyPortfolio() {
  return (
    <section id="portfolio" className="py-32 bg-gradient-diagonal">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-text text-heading mb-6">
            portfolio
            <br />
            <span className="text-heading italic font-light">showcase</span>
          </h2>
          <p className="text-xl text-primary max-w-3xl mx-auto font-light leading-relaxed">
            A curated collection of our finest wedding photography, showcasing diverse cultural traditions,
            intimate moments, and the artistry that defines each unique love story.
          </p>
        </div>

        {/* Photo Slider */}
        <PhotoSlider
          autoPlay={true}
          autoPlayInterval={5000}
          showThumbnails={true}
          className="mb-16"
        />

        {/* Portfolio Stats */}
        <div className="grid md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-4xl font-bold text-[#BFA181]">500+</div>
            <div className="text-primary text-lg">Weddings Captured</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold text-[#BFA181]">50k+</div>
            <div className="text-primary text-lg">Photos Delivered</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold text-[#BFA181]">15+</div>
            <div className="text-primary text-lg">Cultural Traditions</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold text-[#BFA181]">100%</div>
            <div className="text-primary text-lg">Client Satisfaction</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-[#002349]/30 rounded-2xl p-12 border border-[#BFA181]/20">
            <h3 className="text-3xl font-bold text-[#BFA181] mb-4">Ready to Tell Your Story?</h3>
            <p className="text-xl text-[#EAE7DD] mb-8 max-w-2xl mx-auto">
              Let us capture the authentic moments, emotions, and beauty of your special day
              with our signature documentary and artistic style.
            </p>
            <button
              onClick={() => {
                const element = document.getElementById('contact')
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' })
                }
              }}
              className="bg-[#BFA181] text-[#002349] px-8 py-4 rounded-lg font-medium text-lg hover:bg-[#957C3D] transition-all duration-300 transform hover:scale-105"
            >
              Book Your Photography Session
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
