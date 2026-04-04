'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { PrimaryCTA } from './PrimaryCTA'
import { useLuxuryCursor } from './LuxuryCursor'

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isSpecialtiesOpen, setIsSpecialtiesOpen] = useState(false)
  const [isSpecialtiesMobileOpen, setIsSpecialtiesMobileOpen] = useState(false)
  const pathname = usePathname()
  const cursorProps = useLuxuryCursor('pointer')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  const isActivePage = (path: string) => pathname === path

  const getNavLinkClass = (path: string) => {
    const baseClass = "relative text-sm font-normal transition-all duration-500 group"
    if (isActivePage(path)) {
      return `${baseClass} font-semibold`
    }
    return baseClass
  }

  const getNavLinkStyle = (path: string) => {
    if (isActivePage(path)) return { color: '#BFA181' }
    return { color: 'rgba(255,255,255,0.90)' }
  }

  const NavLink = ({ href, children, onClick }: { href?: string, children: React.ReactNode, onClick?: () => void }) => {
    const linkClass = href ? getNavLinkClass(href) : "relative text-sm font-normal transition-all duration-500 group"
    const linkStyle = href ? getNavLinkStyle(href) : { color: 'rgba(255,255,255,0.90)' }

    const content = (
      <>
        {children}
        {/* Luxury underline effect */}
        <span className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-[hsl(var(--luxury-gold))] to-transparent transition-all duration-500 group-hover:w-full" />
        {/* Glow effect on hover */}
        <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[hsl(var(--luxury-gold)/0.05)] rounded blur-sm" />
      </>
    )

    if (href) {
      return (
        <Link
          href={href}
          className={linkClass}
          style={linkStyle}
          onMouseEnter={e => (e.currentTarget.style.color = '#BFA181')}
          onMouseLeave={e => (e.currentTarget.style.color = isActivePage(href) ? '#BFA181' : 'rgba(255,255,255,0.90)')}
          {...cursorProps}
        >
          {content}
        </Link>
      )
    }

    return (
      <button
        onClick={onClick}
        className={linkClass}
        style={linkStyle}
        onMouseEnter={e => (e.currentTarget.style.color = '#BFA181')}
        onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.90)')}
        {...cursorProps}
      >
        {content}
      </button>
    )
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
      isScrolled
        ? 'glass-luxury backdrop-blur-xl py-4 shadow-[0_8px_32px_rgba(0,0,0,0.3)]'
        : 'py-8 bg-transparent'
    }`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo with Luxury Typography */}
        <Link
          href="/"
          className="group relative"
          {...cursorProps}
        >
          <div className="luxury-heading text-2xl md:text-3xl font-bold tracking-tight transition-all duration-500 group-hover:scale-105">
            <span style={{ color: '#BFA181' }}>LifeStory</span>
            <span className="text-[hsl(var(--luxury-platinum)/0.8)]">.Film</span>
          </div>
          {/* Subtle glow on hover */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[hsl(var(--luxury-gold)/0.1)] rounded-lg blur-lg -z-10" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          <NavLink href="/photography">Photography</NavLink>
          <NavLink href="/videography">Videography</NavLink>

          {/* Specialties dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setIsSpecialtiesOpen(true)}
            onMouseLeave={() => setIsSpecialtiesOpen(false)}
          >
            <button
              className="relative text-sm font-normal transition-all duration-500 group flex items-center gap-1"
              style={{ color: isSpecialtiesOpen ? '#BFA181' : 'rgba(255,255,255,0.90)' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#BFA181')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.90)')}
            >
              Specialties
              <svg className={`w-3 h-3 transition-transform duration-200 ${isSpecialtiesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div
              className={`absolute top-full left-1/2 -translate-x-1/2 pt-3 transition-all duration-200 ${isSpecialtiesOpen ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none -translate-y-1'}`}
              style={{ minWidth: '200px' }}
            >
              <div className="rounded-lg border border-white/10 overflow-hidden" style={{ backgroundColor: '#0f0e0c' }}>
                <Link
                  href="/south-asian-wedding-videographer"
                  className="block px-5 py-3 text-sm transition-colors duration-200 hover:bg-white/5"
                  style={{ color: 'rgba(255,255,255,0.80)' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#BFA181')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.80)')}
                >
                  South Asian Weddings
                </Link>
                <Link
                  href="/pricing"
                  className="block px-5 py-3 text-sm transition-colors duration-200 hover:bg-white/5"
                  style={{ color: 'rgba(255,255,255,0.80)' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#BFA181')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.80)')}
                >
                  Destination Weddings
                </Link>
                <Link
                  href="/pricing"
                  className="block px-5 py-3 text-sm transition-colors duration-200 hover:bg-white/5"
                  style={{ color: 'rgba(255,255,255,0.80)' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#BFA181')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.80)')}
                >
                  Venue Packages
                </Link>
              </div>
            </div>
          </div>

          <NavLink href="/pricing">Pricing</NavLink>
          <NavLink href="/reviews">Reviews</NavLink>
          <NavLink href="/faq">FAQ</NavLink>
          <NavLink href="/blog">Blog</NavLink>
          <a
            href="https://calendar.app.google/QSmtnnjfvghb5HtSA"
            target="_blank"
            rel="noopener noreferrer"
            className="relative text-sm font-normal transition-all duration-500 group"
            style={{ color: 'rgba(255,255,255,0.90)' }}
            onMouseEnter={e => (e.currentTarget.style.color = '#BFA181')}
            onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.90)')}
          >
            Schedule a Call
            <span className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-[hsl(var(--luxury-gold))] to-transparent transition-all duration-500 group-hover:w-full" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden relative w-10 h-10 flex items-center justify-center group"
          {...cursorProps}
        >
          <div className="relative w-6 h-6">
            <span className={`absolute block w-6 h-0.5 bg-[hsl(var(--luxury-platinum))] transition-all duration-300 ${
              isMobileMenuOpen ? 'rotate-45 top-3' : 'top-1'
            }`} />
            <span className={`absolute block w-6 h-0.5 bg-[hsl(var(--luxury-platinum))] transition-all duration-300 top-3 ${
              isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
            }`} />
            <span className={`absolute block w-6 h-0.5 bg-[hsl(var(--luxury-platinum))] transition-all duration-300 ${
              isMobileMenuOpen ? '-rotate-45 top-3' : 'top-5'
            }`} />
          </div>
          {/* Hover glow */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[hsl(var(--luxury-gold)/0.1)] rounded-full blur-sm" />
        </button>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <button
            onClick={() => scrollToSection('contact')}
            className="h-10 px-5 rounded-full text-sm transition-all duration-300 hover:scale-105"
            style={{ backgroundColor: '#BFA181', color: '#0f0e0c', fontWeight: 600 }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#d4b896')}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#BFA181')}
          >
            Inquire
          </button>
        </div>
      </div>

      {/* Mobile Menu with Luxury Styling */}
      <div className={`lg:hidden transition-all duration-700 overflow-hidden ${
        isMobileMenuOpen
          ? 'max-h-screen opacity-100'
          : 'max-h-0 opacity-0'
      }`}>
        <div className="glass-luxury border-t border-[hsl(var(--luxury-smoke)/0.3)] backdrop-blur-xl">
          <div className="px-6 py-8 space-y-6">
            {/* Mobile Navigation Links */}
            <div className="space-y-4">
              <NavLink href="/photography">Photography</NavLink>
              <NavLink href="/videography">Videography</NavLink>

              {/* Specialties mobile accordion */}
              <div>
                <button
                  onClick={() => setIsSpecialtiesMobileOpen(!isSpecialtiesMobileOpen)}
                  className="flex items-center gap-2 text-sm font-normal transition-all duration-300 w-full text-left"
                  style={{ color: 'rgba(255,255,255,0.90)' }}
                >
                  Specialties
                  <svg className={`w-3 h-3 transition-transform duration-200 ${isSpecialtiesMobileOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${isSpecialtiesMobileOpen ? 'max-h-40 mt-3' : 'max-h-0'}`}>
                  <div className="pl-4 space-y-3 border-l border-white/10">
                    <Link href="/south-asian-wedding-videographer" className="block text-sm" style={{ color: 'rgba(255,255,255,0.70)' }} onClick={() => setIsMobileMenuOpen(false)}>South Asian Weddings</Link>
                    <Link href="/pricing" className="block text-sm" style={{ color: 'rgba(255,255,255,0.70)' }} onClick={() => setIsMobileMenuOpen(false)}>Destination Weddings</Link>
                    <Link href="/pricing" className="block text-sm" style={{ color: 'rgba(255,255,255,0.70)' }} onClick={() => setIsMobileMenuOpen(false)}>Venue Packages</Link>
                  </div>
                </div>
              </div>

              <NavLink href="/pricing">Pricing</NavLink>
              <NavLink href="/reviews">Reviews</NavLink>
              <NavLink href="/faq">FAQ</NavLink>
              <NavLink href="/blog">Blog</NavLink>
              <a
                href="https://calendar.app.google/QSmtnnjfvghb5HtSA"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm font-normal transition-all duration-300"
                style={{ color: 'rgba(255,255,255,0.90)' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#BFA181')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.90)')}
              >
                Schedule a Call
              </a>
            </div>

            {/* Mobile CTA */}
            <div className="pt-6 border-t border-[hsl(var(--luxury-smoke)/0.3)]">
              <button
                onClick={() => { scrollToSection('contact'); setIsMobileMenuOpen(false) }}
                className="w-full h-12 px-6 rounded-full text-sm transition-all duration-300"
                style={{ backgroundColor: '#BFA181', color: '#0f0e0c', fontWeight: 600 }}
                onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#d4b896')}
                onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#BFA181')}
              >
                Inquire
              </button>
            </div>

            {/* Contact Info */}
            <div className="pt-6 space-y-3 text-center">
              <div className="luxury-caption">Get in Touch</div>
              <div className="luxury-body text-sm">
                <div>rick@lifestory.film</div>
                <div>323.556.4362</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Active page indicator */}
      {pathname !== '/' && (
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[hsl(var(--luxury-gold)/0.5)] to-transparent" />
      )}
    </nav>
  )
}
