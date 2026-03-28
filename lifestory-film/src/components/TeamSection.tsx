import { AnimatedSection } from './AnimatedSection'

export function TeamSection() {
  return (
    <section className="py-32 bg-[#0f0e0c]">
      <div className="container mx-auto px-6">
        <AnimatedSection direction="fade" className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#BFA181] text-[11px] tracking-widest uppercase mb-5 font-light">The Team</p>
            <h2
              className="font-extrabold text-white leading-tight mb-4"
              style={{ fontSize: 'clamp(40px, 4.5vw, 56px)', letterSpacing: '-0.02em' }}
            >
              Meet the People Behind the Lens
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* Photo */}
            <div className="relative">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-zinc-800/50">
                <img
                  src="https://photos.smugmug.com/LifeStoryFilm-Production/Desert-Wedding/Desert-Wedding-Day-2/i-HSB4Rp7/0/NT95vfXC9T5RscjGdcpLWvDKmt4d4BmVzgvdrQw28/4K/Life.Film-100-4K.jpg"
                  alt="LifeStory.Film team — cinematographers and photographers at work"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
              {/* Gold accent line */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-r-2 border-b-2 border-[#BFA181]/40 rounded-br-2xl" />
            </div>

            {/* Bio */}
            <div className="space-y-6">
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  LifeStory.Film is a team of cinematographers and photographers who have been documenting weddings together since 2010. We cover over 100 weddings a year across Southern California, destination venues, and beyond.
                </p>
                <p>
                  Every member of our team is trained in both narrative filmmaking and fine art photography — so whether you're booking photo, film, or both, you get the same documentary instinct, the same unobtrusive presence, and the same obsession with the moments that actually matter.
                </p>
                <p>
                  Our work has been featured at Pelican Hill, the Four Seasons, the Ritz-Carlton, and private estates across Malibu, Santa Barbara, and internationally.
                </p>
              </div>

              {/* Team quote */}
              <blockquote className="border-l-2 border-[#BFA181] pl-5 mt-8">
                <p className="text-white/80 italic text-lg leading-relaxed">
                  "We don't just show up and shoot. We study your day, learn your people, and disappear into it — so what we capture feels completely real."
                </p>
                <cite className="text-[#BFA181] text-sm mt-3 block not-italic">— The LifeStory.Film Team</cite>
              </blockquote>

              <div className="pt-4">
                <a
                  href="https://instagram.com/lifestoryfilm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#BFA181] hover:text-white transition-colors text-sm"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  @lifestoryfilm
                </a>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
