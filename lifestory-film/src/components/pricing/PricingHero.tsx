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
    <section className="py-20 bg-[#0f0e0c]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-[#BFA181] text-[11px] tracking-widest uppercase mb-5 font-light">Investment</p>
          <h1
            className="font-extrabold text-white leading-tight mb-6"
            style={{ fontSize: 'clamp(48px, 6vw, 72px)', letterSpacing: '-0.02em' }}
          >
            Simple, Transparent Pricing
          </h1>
          <p className="font-light text-white/55 max-w-[600px] mx-auto" style={{ fontSize: '18px' }}>
            Every package includes professional editing, color correction, and our signature cinematic style.
          </p>
        </div>
      </div>
    </section>
  )
}
