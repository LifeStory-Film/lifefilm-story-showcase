import Link from "next/link"
import { Navigation } from "@/components/Navigation"
import { Footer } from "@/components/Footer"

// App Router 404. Without this file, Next.js 15.5+ falls back to the legacy
// pages-router /404 fallback, which imports <Html> from next/document — and
// then refuses to compile because we use the App Router. Added by claude-code
// while unblocking the autonomous SEO publish pipeline (2026-05-13).
export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col" style={{ backgroundColor: "var(--t-bg-primary)", color: "var(--t-text-primary)" }}>
      <Navigation />
      <section className="flex-1 flex items-center justify-center px-6 py-32">
        <div className="text-center max-w-xl">
          <div className="text-sm tracking-[0.2em] uppercase mb-6" style={{ color: "var(--t-accent)" }}>404</div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Page not found</h1>
          <p className="text-lg mb-10" style={{ color: "var(--t-text-secondary)" }}>
            The page you are looking for has been moved or no longer exists. Browse the journal or return to the homepage.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/" className="px-6 py-3 rounded-full font-semibold text-sm tracking-wide" style={{ backgroundColor: "var(--t-accent)", color: "var(--t-bg-primary)" }}>
              Home
            </Link>
            <Link href="/blog" className="px-6 py-3 rounded-full font-semibold text-sm tracking-wide border" style={{ borderColor: "var(--t-text-secondary)", color: "var(--t-text-primary)" }}>
              Journal
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
