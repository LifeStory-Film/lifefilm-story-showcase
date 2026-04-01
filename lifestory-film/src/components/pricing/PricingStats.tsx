'use client'

export function PricingStats() {
  return (
    <section className="py-24 bg-[#0f0e0c]">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Reviews Section */}
          <div className="bg-[#1a1916] rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-white mb-8">Reviews</h2>

            <div className="space-y-8">
              <div className="text-center">
                <div className="text-6xl font-bold text-white mb-2">489</div>
                <div className="text-gray-400">Five star reviews</div>
              </div>

              <div className="text-center">
                <div className="text-6xl font-bold text-white mb-2">15+</div>
                <div className="text-gray-400">Years of experience</div>
              </div>

              <div className="text-center">
                <div className="text-6xl font-bold text-white mb-2">1,247</div>
                <div className="text-gray-400">Weddings shot</div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <button
                onClick={() => window.open('/reviews', '_blank')}
                className="bg-purple-600 text-white px-6 py-3 rounded-full font-medium hover:bg-purple-700 transition-colors"
              >
                View reviews
              </button>
            </div>
          </div>

          {/* Availability Section */}
          <div className="bg-[#1a1916] rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-white mb-6">Availability</h2>

            <div className="text-gray-300">
              <p className="text-lg leading-relaxed mb-8">
                We photograph and film a limited number of weddings each month to
                ensure every couple receives our full attention.
              </p>

              <div className="text-center">
                <button
                  onClick={() => {
                    const element = document.getElementById('contact')
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' })
                    }
                  }}
                  className="px-8 py-3 rounded-full font-semibold transition-colors"
                  style={{ backgroundColor: '#BFA181', color: '#0f0e0c' }}
                  onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#d4b896' }}
                  onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#BFA181' }}
                >
                  Check Your Date →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
