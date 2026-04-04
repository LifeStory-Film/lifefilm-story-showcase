export function EngagementSection() {
  return (
    <section className="py-24 bg-[#0f0e0c]">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div>
            <p className="text-[#BFA181] text-[11px] tracking-widest uppercase mb-5 font-light">Before the Wedding</p>
            <h2
              className="font-extrabold text-white leading-tight mb-6"
              style={{ fontSize: 'clamp(36px, 4vw, 52px)', letterSpacing: '-0.02em' }}
            >
              Engagement Sessions
            </h2>
            <p className="font-light text-white/55 leading-relaxed mb-4" style={{ fontSize: '18px' }}>
              An engagement session is more than practice — it's the first chapter of your story. We use this time to learn how you move together, how you laugh, and what makes your relationship feel like you.
            </p>
            <p className="font-light text-white/55 leading-relaxed mb-8" style={{ fontSize: '18px' }}>
              The images become part of your wedding gallery — and the comfort you build with our team shows in every frame on your wedding day.
            </p>
            <a
              href="#contact"
              className="inline-block px-8 py-3.5 rounded-full text-sm font-semibold tracking-wide hover:opacity-90 transition-opacity duration-200"
              style={{ backgroundColor: '#BFA181', color: '#0f0e0c' }}
            >
              Add to Your Package →
            </a>
            <p className="text-white/35 text-sm mt-4">Starting at $800 — can be added to any photo or photo+video package</p>
          </div>

          {/* Right: Image */}
          <div className="relative overflow-hidden rounded-2xl" style={{ aspectRatio: '4/5' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://ext.same-assets.com/613934530/2202004677.jpeg"
              alt="Couple in garden — engagement session"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
