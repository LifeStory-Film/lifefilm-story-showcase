'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface BreadcrumbItem {
  label: string
  href: string
  current?: boolean
}

export function Breadcrumbs() {
  const pathname = usePathname()

  // Don't show breadcrumbs on home page
  if (pathname === '/') return null

  const generateBreadcrumbs = (): BreadcrumbItem[] => {
    const breadcrumbs: BreadcrumbItem[] = [
      { label: 'Home', href: '/' }
    ]

    const pathSegments = pathname.split('/').filter(segment => segment !== '')

    // Handle different page types
    if (pathSegments.length === 1) {
      const segment = pathSegments[0]
      switch (segment) {
        case 'photography':
          breadcrumbs.push({ label: 'Photography', href: '/photography', current: true })
          break
        case 'videography':
          breadcrumbs.push({ label: 'Videography', href: '/videography', current: true })
          break
        case 'pricing':
          breadcrumbs.push({ label: 'Pricing', href: '/pricing', current: true })
          break
        case 'reviews':
          breadcrumbs.push({ label: 'Reviews', href: '/reviews', current: true })
          break

        case 'faq':
          breadcrumbs.push({ label: 'FAQ', href: '/faq', current: true })
          break
        case 'blog':
          breadcrumbs.push({ label: 'Blog', href: '/blog', current: true })
          break
        default:
          breadcrumbs.push({
            label: segment.charAt(0).toUpperCase() + segment.slice(1),
            href: `/${segment}`,
            current: true
          })
      }
    }

    // Handle nested paths like /films/[slug] or /blog/[slug]
    if (pathSegments.length === 2) {
      const [parentSegment, childSegment] = pathSegments

      if (parentSegment === 'films') {
        breadcrumbs.push({ label: 'Wedding Films', href: '/videography' })
        breadcrumbs.push({
          label: decodeURIComponent(childSegment).replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
          href: pathname,
          current: true
        })
      } else if (parentSegment === 'blog') {
        breadcrumbs.push({ label: 'Blog', href: '/blog' })
        breadcrumbs.push({
          label: decodeURIComponent(childSegment).replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
          href: pathname,
          current: true
        })
      }
    }

    return breadcrumbs
  }

  const breadcrumbs = generateBreadcrumbs()

  return (
    <nav className="pt-24 pb-6 bg-black" aria-label="Breadcrumb">
      <div className="container mx-auto px-6">
        <ol className="flex items-center space-x-2 text-sm">
          {breadcrumbs.map((breadcrumb, index) => (
            <li key={breadcrumb.href} className="flex items-center">
              {index > 0 && (
                <svg
                  className="w-4 h-4 text-gray-500 mx-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              )}

              {breadcrumb.current ? (
                <span className="text-white font-medium" aria-current="page">
                  {breadcrumb.label}
                </span>
              ) : (
                <Link
                  href={breadcrumb.href}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {breadcrumb.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  )
}
