'use client'

import { AnimatedSection } from '../AnimatedSection'

export function ReviewStats() {
  const stats = [
    {
      number: "489",
      label: "Five star reviews",
      description: "Across all platforms"
    },
    {
      number: "8+",
      label: "Years of experience",
      description: "Capturing love stories"
    },
    {
      number: "1,247",
      label: "Weddings shot",
      description: "Cinematic perfection"
    }
  ]

  return (
    <section className="py-32 bg-black">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-16 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <AnimatedSection
              key={stat.label}
              direction="up"
              delay={index * 0.2}
              className="text-center"
            >
              <div className="relative">
                {/* Large outlined number */}
                <h2 className="text-8xl md:text-9xl font-bold text-transparent text-stroke-white mb-4">
                  {stat.number}
                </h2>

                {/* Label */}
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  {stat.label}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-lg">
                  {stat.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
