'use client'

import { useState } from 'react'

interface PricingHeroProps {
  selectedType?: string
  onTypeChange?: (type: string) => void
}

export function PricingHero({ selectedType = 'photo+video', onTypeChange }: PricingHeroProps) {
  const [activeType, setActiveType] = useState(selectedType)

  const handleTypeChange = (type: string) => {
    setActiveType(type)
    onTypeChange?.(type)
  }

  return (
    <section className="py-32 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="section-text text-white mb-8">
            Pricing
          </h1>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light mb-12">
            Transparent pricing for luxury wedding photography and videography.
            Every package includes professional editing, color correction, and our signature cinematic style.
          </p>




        </div>
      </div>
    </section>
  )
}
