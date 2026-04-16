'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { useLuxuryCursor } from './LuxuryCursor'
import { useTheme } from './ThemeProvider'

// Sun and Moon SVGs (per spec)
function SunIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
      <circle cx="12" cy="12" r="5" />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  )
}

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isSpecialtiesOpen, setIsSpecialtiesOpen] = useState(false)
  const [isSpecialtiesMobileOpen, setIsSpecialtiesMobileOpen] = useState(false)
  const pathname = usePathname()
  const cursorProps = useLuxuryCursor('pointer')
  const { theme, toggleTheme } = useTheme()
  const isLight = theme === 'light'

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
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

  // Nav link styles adapt to theme
  const navLinkColor = isLight ? 'rgba(0,0,0,0.75)' : 'rgba(255,255,255,0.90)'
  const getNavLinkStyle = (path: string) =>
    isActivePage(path) ? { color: 'var(--t-accent)' } : { color: navLinkColor }

  const getNavLinkClass = (path: string) =>
    `relative text-sm font-normal transition-colors duration-300 group${isActivePage(path) ? ' font-semibold' : ''}`

  const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <Link
      href={href}
      className={getNavLinkClass(href)}
      style={getNavLinkStyle(href)}
      onMouseEnter={e => (e.currentTarget.style.color = 'var(--t-accent)')}
      onMouseLeave={e => (e.currentTarget.style.color = isActivePage(href) ? 'var(--t-accent)' : navLinkColor)}
      {...cursorProps}
    >
      {children}
      <span className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-[hsl(var(--luxury-gold))] to-transparent transition-all duration-500 group-hover:w-full" />
    </Link>
  )

  // Theme toggle tooltip
  const toggleLabel = isLight ? 'Switch to dark mode' : 'Switch to light mode'

  const ThemeToggle = ({ mobile = false }: { mobile?: boolean }) => (
    <button
      onClick={toggleTheme}
      aria-label={toggleLabel}
      title={toggleLabel}
      className="relative flex items-center gap-1.5 rounded-full transition-all duration-300 hover:opacity-75"
      style={{
        color: 'var(--t-accent)',
        border: isLight ? '1px solid rgba(0,0,0,0.12)' : 'none',
        background: 'transparent',
        padding: mobile ? '4px 0' : '4px 6px',
      }}
    >
      <span
        style={{
          display: 'inline-flex',
          transform: `rotate(${isLight ? '0deg' : '180deg'})`,
          transition: 'transform 0.3s ease',
        }}
      >
        {isLight ? <MoonIcon /> : <SunIcon />}
      </span>
      {/* Desktop label — small hint text */}
      {!mobile && (
        <span
          className="hidden lg:inline-block text-[11px] font-medium leading-none"
          style={{ color: 'var(--t-text-muted)' }}
        >
          {isLight ? 'Dark' : 'Light'}
        </span>
      )}
      {/* Mobile label */}
      {mobile && (
        <span className="text-sm" style={{ color: navLinkColor }}>
          {isLight ? 'Dark Mode' : 'Light Mode'}
        </span>
      )}
    </button>
  )

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
      isScrolled
        ? 'glass-luxury backdrop-blur-xl py-4 shadow-[0_8px_32px_rgba(0,0,0,0.15)]'
        : 'py-8 bg-transparent'
    }`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="group relative" {...cursorProps}>
          <div className="luxury-heading text-2xl md:text-3xl font-bold tracking-tight transition-all duration-500 group-hover:scale-105">
            <span style={{ color: 'var(--t-accent)' }}>LifeStory</span>
            <span style={{ color: isLight ? 'rgba(0,0,0,0.55)' : 'rgba(255,255,255,0.65)' }}>.Film</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          <NavLink href="/photography">Photography</NavLink>
          <NavLink href="/videography">Videography</NavLink>

          {/* Specialties dropdown — commented out for now */}
          {/* <div
            className="relative"
            onMouseEnter={() => setIsSpecialtiesOpen(true)}
            onMouseLeave={() => setIsSpecialtiesOpen(false)}
          >
            <button
              className="relative text-sm font-normal transition-colors duration-300 group flex items-center gap-1"
              style={{ color: isSpecialtiesOpen ? 'var(--t-accent)' : navLinkColor }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--t-accent)')}
              onMouseLeave={e => (e.currentTarget.style.color = navLinkColor)}
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
              <div
                className="rounded-lg overflow-hidden"
                style={{
                  backgroundColor: 'var(--t-bg-primary)',
                  border: '1px solid var(--t-border)',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
                }}
              >
                {[
                  { href: '/south-asian-wedding-videographer', label: 'South Asian Weddings' },
                  { href: '/persian-wedding-videographer', label: 'Persian Weddings' },
                  { href: '/jewish-wedding-videographer', label: 'Jewish Weddings' },
                  { href: '/chinese-wedding-videographer', label: 'Chinese Weddings' },
                  { href: '/african-wedding-videographer', label: 'African Weddings' },
                  { href: '/armenian-wedding-videographer', label: 'Armenian Weddings' },
                  { href: '/filipino-wedding-videographer', label: 'Filipino Weddings' },
                ].map(({ href, label }) => (
                  <Link
                    key={label}
                    href={href}
                    className="block px-5 py-3 text-sm transition-colors duration-200"
                    style={{ color: isLight ? 'rgba(0,0,0,0.70)' : 'rgba(255,255,255,0.80)' }}
                    onMouseEnter={e => {
                      e.currentTarget.style.color = 'var(--t-accent)'
                      e.currentTarget.style.backgroundColor = isLight ? 'rgba(0,0,0,0.03)' : 'rgba(255,255,255,0.04)'
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.color = isLight ? 'rgba(0,0,0,0.70)' : 'rgba(255,255,255,0.80)'
                      e.currentTarget.style.backgroundColor = 'transparent'
                    }}
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          </div> */}

          <NavLink href="/pricing">Pricing</NavLink>
          <NavLink href="/reviews">Reviews</NavLink>
          <NavLink href="/faq">FAQ</NavLink>
          {/* <NavLink href="/blog">Blog</NavLink> */}
          <a
            href="https://calendar.app.google/QSmtnnjfvghb5HtSA"
            target="_blank"
            rel="noopener noreferrer"
            className="relative text-sm font-normal transition-colors duration-300 group"
            style={{ color: navLinkColor }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--t-accent)')}
            onMouseLeave={e => (e.currentTarget.style.color = navLinkColor)}
          >
            Schedule a Call
            <span className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-[hsl(var(--luxury-gold))] to-transparent transition-all duration-500 group-hover:w-full" />
          </a>

          {/* Theme toggle */}
          <ThemeToggle />
        </div>

        {/* Mobile: hamburger + toggle side by side */}
        <div className="lg:hidden flex items-center gap-3">
          <ThemeToggle />
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="relative w-10 h-10 flex items-center justify-center group"
            {...cursorProps}
          >
            <div className="relative w-6 h-6">
              <span className={`absolute block w-6 h-0.5 transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 top-3' : 'top-1'}`}
                style={{ backgroundColor: isLight ? 'rgba(0,0,0,0.7)' : 'hsl(var(--luxury-platinum))' }} />
              <span className={`absolute block w-6 h-0.5 transition-all duration-300 top-3 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}
                style={{ backgroundColor: isLight ? 'rgba(0,0,0,0.7)' : 'hsl(var(--luxury-platinum))' }} />
              <span className={`absolute block w-6 h-0.5 transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 top-3' : 'top-5'}`}
                style={{ backgroundColor: isLight ? 'rgba(0,0,0,0.7)' : 'hsl(var(--luxury-platinum))' }} />
            </div>
          </button>
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <button
            onClick={() => scrollToSection('contact')}
            className="h-10 px-5 rounded-full text-sm transition-all duration-300 hover:scale-105"
            style={{ backgroundColor: 'var(--t-accent)', color: '#0f0e0c', fontWeight: 600 }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
          >
            Inquire
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden transition-all duration-700 overflow-hidden ${isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="glass-luxury border-t backdrop-blur-xl" style={{ borderColor: 'var(--t-border)' }}>
          <div className="px-6 py-8 space-y-6">
            <div className="space-y-4">
              <NavLink href="/photography">Photography</NavLink>
              <NavLink href="/videography">Videography</NavLink>

              {/* Specialties accordion — commented out for now */}
              {/* <div>
                <button
                  onClick={() => setIsSpecialtiesMobileOpen(!isSpecialtiesMobileOpen)}
                  className="flex items-center gap-2 text-sm font-normal transition-colors duration-300 w-full text-left"
                  style={{ color: navLinkColor }}
                >
                  Specialties
                  <svg className={`w-3 h-3 transition-transform duration-200 ${isSpecialtiesMobileOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${isSpecialtiesMobileOpen ? 'max-h-80 mt-3' : 'max-h-0'}`}>
                  <div className="pl-4 space-y-3 border-l" style={{ borderColor: 'var(--t-border)' }}>
                    {[
                      { href: '/south-asian-wedding-videographer', label: 'South Asian Weddings' },
                      { href: '/persian-wedding-videographer', label: 'Persian Weddings' },
                      { href: '/jewish-wedding-videographer', label: 'Jewish Weddings' },
                      { href: '/chinese-wedding-videographer', label: 'Chinese Weddings' },
                      { href: '/african-wedding-videographer', label: 'African Weddings' },
                      { href: '/armenian-wedding-videographer', label: 'Armenian Weddings' },
                      { href: '/filipino-wedding-videographer', label: 'Filipino Weddings' },
                    ].map(({ href, label }) => (
                      <Link key={label} href={href} className="block text-sm" style={{ color: isLight ? 'rgba(0,0,0,0.60)' : 'rgba(255,255,255,0.70)' }} onClick={() => setIsMobileMenuOpen(false)}>
                        {label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div> */}

              <NavLink href="/pricing">Pricing</NavLink>
              <NavLink href="/reviews">Reviews</NavLink>
              <NavLink href="/faq">FAQ</NavLink>
              {/* <NavLink href="/blog">Blog</NavLink> */}
              <a
                href="https://calendar.app.google/QSmtnnjfvghb5HtSA"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm font-normal transition-colors duration-300"
                style={{ color: navLinkColor }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--t-accent)')}
                onMouseLeave={e => (e.currentTarget.style.color = navLinkColor)}
              >
                Schedule a Call
              </a>

              {/* Mobile theme toggle with label */}
              <ThemeToggle mobile />
            </div>

            {/* Mobile CTA */}
            <div className="pt-6 border-t" style={{ borderColor: 'var(--t-border)' }}>
              <button
                onClick={() => { scrollToSection('contact'); setIsMobileMenuOpen(false) }}
                className="w-full h-12 px-6 rounded-full text-sm transition-all duration-300"
                style={{ backgroundColor: 'var(--t-accent)', color: '#0f0e0c', fontWeight: 600 }}
              >
                Inquire
              </button>
            </div>

            {/* Contact Info */}
            <div className="pt-6 space-y-3 text-center">
              <div className="luxury-caption" style={{ color: 'var(--t-text-muted)' }}>Get in Touch</div>
              <div className="text-sm" style={{ color: 'var(--t-text-secondary)' }}>
                <div>rick@lifestory.film</div>
                <div>323.556.4362</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {pathname !== '/' && (
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[hsl(var(--luxury-gold)/0.5)] to-transparent" />
      )}
    </nav>
  )
}
