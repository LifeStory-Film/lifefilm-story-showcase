'use client'

export function PricingStats() {
  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Reviews Section */}
          <div className="bg-zinc-900 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-white mb-8">Reviews</h2>

            <div className="space-y-8">
              <div className="text-center">
                <div className="text-6xl font-bold text-white mb-2">489</div>
                <div className="text-gray-400">Five star reviews</div>
              </div>

              <div className="text-center">
                <div className="text-6xl font-bold text-white mb-2">8+</div>
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
          <div className="bg-zinc-900 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-white mb-6">Availability</h2>

            <div className="text-gray-300 mb-8">
              <p className="text-lg mb-4">
                We limit the number of weddings and packages we shoot each month
                to ensure every couple receives our full attention and dedication.
              </p>

              <div className="bg-black rounded-lg p-4">
                <div className="text-center text-purple-400 font-semibold mb-4">
                  19/20 spots filled
                </div>

                {/* Calendar Visual */}
                <div className="grid grid-cols-7 gap-2 text-xs text-center">
                  {/* Week headers */}
                  <div className="text-gray-500">S</div>
                  <div className="text-gray-500">M</div>
                  <div className="text-gray-500">T</div>
                  <div className="text-gray-500">W</div>
                  <div className="text-gray-500">T</div>
                  <div className="text-gray-500">F</div>
                  <div className="text-gray-500">S</div>

                  {/* Calendar days */}
                  {Array.from({ length: 31 }, (_, i) => {
                    const day = i + 1
                    const isBooked = day !== 15 // Leave one day available
                    const isToday = day === 12

                    return (
                      <div
                        key={day}
                        className={`w-8 h-8 rounded flex items-center justify-center ${
                          isToday
                            ? 'bg-purple-600 text-white'
                            : isBooked
                            ? 'bg-gray-700 text-gray-500'
                            : 'bg-green-600 text-white'
                        }`}
                      >
                        {day}
                      </div>
                    )
                  })}
                </div>
              </div>

              <div className="mt-6 text-center">
                <p className="text-sm text-gray-400 mb-4">
                  Book early to secure your preferred date
                </p>
                <button
                  onClick={() => {
                    const element = document.getElementById('contact')
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' })
                    }
                  }}
                  className="bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition-colors"
                >
                  Check Availability
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
