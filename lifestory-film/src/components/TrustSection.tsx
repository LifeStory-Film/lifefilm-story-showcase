'use client'

import { SmoothReveal } from './SimpleAnimations'

const STATS = [
  { number: '1,500+', label: 'Weddings Filmed' },
  { number: '15+',    label: 'Years Experience' },
  { number: '5.0',    label: 'The Knot & Google' },
  { number: '7x',     label: 'Best of Weddings' },
]

const TRUST_ITEMS = [
  'Fully Insured',
  'Licensed Professionals',
  '100% Satisfaction Guarantee',
]

export function TrustSection() {
  return (
    <section className="py-24 bg-[#1a1916]">
      <div className="container mx-auto px-6">
        <SmoothReveal direction="fade" className="text-center mb-20">
          <p className="text-[#BFA181] text-[11px] tracking-widest uppercase mb-5 font-light">By the Numbers</p>
          <h2
            className="font-extrabold text-white leading-tight mb-4"
            style={{ fontSize: 'clamp(40px, 4.5vw, 56px)', letterSpacing: '-0.02em' }}
          >
            Trusted by Couples Worldwide
          </h2>
          <p className="font-light text-white/55 max-w-[600px] mx-auto" style={{ fontSize: '18px' }}>
            Our commitment to the craft has earned the trust of couples across California and beyond.
          </p>
        </SmoothReveal>

        {/* Stat row — plain, no cards */}
        <SmoothReveal direction="up" delay={0.2} className="flex flex-wrap justify-center gap-16 md:gap-24 mb-20">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <div
                className="text-white font-bold leading-none tracking-tight"
                style={{ fontSize: 'clamp(36px, 5vw, 56px)' }}
              >
                {stat.number}
              </div>
              <div className="text-white/40 text-[11px] tracking-[0.22em] uppercase mt-2 font-light">
                {stat.label}
              </div>
            </div>
          ))}
        </SmoothReveal>

        {/* Trust indicators — minimal, no icon boxes */}
        <SmoothReveal direction="up" delay={0.4} className="flex flex-wrap justify-center items-center gap-x-10 gap-y-3">
          {TRUST_ITEMS.map((item, i) => (
            <span key={item} className="flex items-center gap-3">
              {i > 0 && <span className="hidden sm:block w-px h-3 bg-white/15" />}
              <span className="text-white/40 text-[11px] tracking-[0.2em] uppercase font-light">{item}</span>
            </span>
          ))}
        </SmoothReveal>
      </div>
    </section>
  )
}
