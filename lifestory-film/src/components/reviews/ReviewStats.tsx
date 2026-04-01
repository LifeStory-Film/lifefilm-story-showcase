'use client'

import { AnimatedSection } from '../AnimatedSection'

export function ReviewStats() {
  const stats = [
    {
      number: "78",
      label: "Five Star Reviews",
      description: "Verified on The Knot"
    },
    {
      number: "7x",
      label: "Best of Weddings",
      description: "Consecutive years — The Knot"
    },
    {
      number: "15+",
      label: "Years of Experience",
      description: "Capturing love stories since 2010"
    }
  ]

  return (
    <section className="py-32 bg-[#0f0e0c]">
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
                <h2
                  className="font-extrabold text-white mb-4"
                  style={{ fontSize: 'clamp(64px, 8vw, 96px)', letterSpacing: '-0.02em' }}
                >
                  {stat.number}
                </h2>
                <h3 className="text-xl font-semibold text-white mb-2">{stat.label}</h3>
                <p className="text-white/40 text-sm font-light">{stat.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
