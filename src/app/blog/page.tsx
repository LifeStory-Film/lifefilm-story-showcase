import { Navigation } from '@/components/Navigation'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { BlogPage } from '@/components/blog/BlogPage'
import { Footer } from '@/components/Footer'

export const metadata = {
  title: "Blog | LifeStory.Film - Wedding Tips & Recent Work",
  description: "Read wedding tips, planning advice, and see our recent work. Stay updated with the latest trends in wedding videography and photography from LifeStory.Film.",
  keywords: "wedding blog, wedding tips, wedding videography blog, wedding planning advice, LifeStory.Film blog, recent wedding work",
}

export default function BlogPageRoute() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />
      <Breadcrumbs />
      <BlogPage />
      <Footer />
    </main>
  )
}
