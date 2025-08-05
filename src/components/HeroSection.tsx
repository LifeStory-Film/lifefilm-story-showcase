'use client'

import { useEffect, useState } from 'react'
import { LuxuryButton } from './LuxuryButton'
import { PrimaryCTA } from './PrimaryCTA'
import { ParallaxSection, ParallaxContainer } from './ParallaxSection'
import { useLuxuryCursor } from './LuxuryCursor'

export function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [videoLoaded, setVideoLoaded] = useState(false)
  const viewCursor = useLuxuryCursor('view')
  const playCursor = useLuxuryCursor('play')

  useEffect(() => {
    setIsMounted(true)
    setIsLoaded(true)

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <ParallaxContainer className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* YouTube Video Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <iframe
            className="absolute top-1/2 left-1/2 w-[300%] h-[300%] -translate-x-1/2 -translate-y-1/2 md:w-[150%] md:h-[150%]"
            src="https://www.youtube.com/embed/YzK1dHhkZTU?autoplay=1&mute=1&loop=1&playlist=YzK1dHhkZTU&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&disablekb=1&fs=0&cc_load_policy=0&playsinline=1&enablejsapi=1&start=0"
            title="LifeStory.Film Wedding Videography Background"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            loading="lazy"
            onLoad={() => setVideoLoaded(true)}
          />
        </div>

        {/* Video Overlay for Better Text Readability */}
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />
      </div>

      {/* Fallback Background (shows while video loads) */}
      {isMounted && !videoLoaded && (
        <ParallaxSection speed={0.3} className="absolute inset-0">
          <div className="absolute inset-0 luxury-gradient" />
          <div
            className="absolute inset-0 bg-gradient-to-br from-transparent via-[hsl(var(--luxury-obsidian)/0.8)] to-[hsl(var(--luxury-charcoal)/0.9)]"
            style={{
              transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
            }}
          />
        </ParallaxSection>
      )}

      {/* Floating Particles */}
      {isMounted && (
        <div className="absolute inset-0 pointer-events-none z-10">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-[hsl(var(--luxury-gold)/0.6)] rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      )}

      {/* Content with Sophisticated Typography */}
      <div className="relative z-20 text-center px-6 max-w-7xl mx-auto">
        <div className={`transition-all duration-1500 ${isLoaded ? 'luxury-fade-up' : 'opacity-0'}`}>
          {/* Luxury Caption */}
          <div className="luxury-caption mb-8 opacity-90 text-white drop-shadow-lg">
            Cinematic Excellence • Since 2016
          </div>

          {/* Main Heading */}
          <h1 className="hero-text luxury-heading mb-8 drop-shadow-2xl">
            <span className="luxury-text-gradient">capture</span>
            <br />
            <span className="luxury-text-gradient italic font-light">
              your story
            </span>
          </h1>

          {/* Elegant Subtitle */}
          <p className="luxury-body text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed opacity-95 text-white drop-shadow-lg">
            Luxury wedding videography that transforms your most precious moments into cinematic art.
            <br />
            <span className="luxury-subheading text-lg md:text-xl mt-2 block">
              Every frame tells your unique love story.
            </span>
          </p>

          {/* Luxury Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <PrimaryCTA
              variant="primary"
              onClick={() => scrollToSection('contact')}
              icon={
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a1 1 0 01-1-1V9a1 1 0 011-1h1a2 2 0 100-4H4a1 1 0 01-1-1V4a1 1 0 011-1h3a1 1 0 001-1z" />
                </svg>
              }
            >
              Start My Story
            </PrimaryCTA>

            <PrimaryCTA
              variant="secondary"
              onClick={() => scrollToSection('films')}
              icon={
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              }
            >
              View Our Work
            </PrimaryCTA>
          </div>

          {/* Trust Badges with Micro-Animations */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto mb-20">
            {[
              { number: "600+", label: "Couples Served", icon: "💕", delay: "0.2s" },
              { number: "15+", label: "Years Experience", icon: "⭐", delay: "0.3s" },
              { number: "5.0", label: "Star Rating", icon: "🏆", delay: "0.4s" },
              { number: "98%", label: "Referral Rate", icon: "✨", delay: "0.5s" }
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center luxury-fade-up hover-lift bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
                style={{ animationDelay: stat.delay }}
              >
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="luxury-heading text-3xl md:text-4xl mb-2 text-white drop-shadow-lg">
                  {stat.number}
                </div>
                <div className="luxury-caption text-white/90 drop-shadow-lg">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Scroll CTA */}
          <div className="text-center mb-8">
            <p className="text-white/80 text-lg mb-4">See our award-winning work</p>
            <div className="flex justify-center">
              <button
                onClick={() => scrollToSection('films')}
                className="animate-bounce text-white/70 hover:text-white transition-colors"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20">
        <div className="luxury-fade-up" style={{ animationDelay: '1s' }}>
          <button
            onClick={() => scrollToSection('about')}
            className="flex flex-col items-center text-white hover:text-[hsl(var(--luxury-gold))] transition-colors duration-300 drop-shadow-lg"
            {...useLuxuryCursor('pointer')}
          >
            <span className="luxury-caption mb-4">Scroll to Explore</span>
            <div className="w-6 h-10 border-2 border-white/70 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce" />
            </div>
          </button>
        </div>
      </div>

      {/* Ambient Light Effects */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-10">
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-[hsl(var(--luxury-gold)/0.15)] rounded-full blur-[100px] luxury-glow"
          style={{
            transform: `translate(${mousePosition.x * 0.05}px, ${mousePosition.y * 0.05}px)`,
          }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[hsl(var(--luxury-gold)/0.1)] rounded-full blur-[80px]"
          style={{
            transform: `translate(${-mousePosition.x * 0.03}px, ${-mousePosition.y * 0.03}px)`,
          }}
        />
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
            opacity: 0.6;
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
            opacity: 1;
          }
        }
      `}</style>
    </ParallaxContainer>
  )
}
