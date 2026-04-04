export function CinematicBreak() {
  return (
    <div className="relative h-[60vh] md:h-[70vh] overflow-hidden">
      {/* Full-bleed still */}
      <img
        src="https://ext.same-assets.com/613934530/2357869345.webp"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark overlay — heavier at edges, slightly lighter center */}
      <div className="absolute inset-0 bg-black/65" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40" />

      {/* Quote */}
      <div className="absolute inset-0 flex items-center justify-center px-6">
        <div className="max-w-3xl text-center">
          {/* Decorative rule */}
          <div className="w-12 h-px bg-[#BFA181]/60 mx-auto mb-8" />

          <blockquote className="text-2xl md:text-4xl text-white font-['Playfair_Display'] font-light italic leading-relaxed">
            "A wedding film shouldn't feel like documentation.
            <br className="hidden md:block" />
            It should feel like memory."
          </blockquote>

          <div className="w-12 h-px bg-[#BFA181]/60 mx-auto mt-8" />

          <p className="mt-6 text-[#BFA181]/70 text-sm tracking-[0.18em] uppercase font-light">
            — The LifeStory.Film approach
          </p>
        </div>
      </div>
    </div>
  )
}
