import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'src/app/blog/posts')

export interface PostMeta {
  slug: string
  title: string
  metaTitle: string
  metaDescription: string
  date: string
  author: string
  keyword: string
  category: string
  coverImage: string
  excerpt: string
  wordCount: number
}

export interface Post extends PostMeta {
  content: string
}

function estimateWordCount(content: string): number {
  return content.trim().split(/\s+/).length
}

/** Strip markdown/HTML tags and return plain text excerpt */
function makeExcerpt(content: string, maxChars = 150): string {
  const plain = content
    .replace(/^---[\s\S]*?---/m, '')         // remove frontmatter if any
    .replace(/<[^>]+>/g, '')                  // strip HTML tags
    .replace(/!\[.*?\]\(.*?\)/g, '')          // strip images
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // links → link text
    .replace(/#{1,6}\s+/g, '')               // headings
    .replace(/[*_`~]/g, '')                  // emphasis
    .replace(/\n+/g, ' ')                    // newlines → space
    .trim()

  return plain.length > maxChars ? plain.slice(0, maxChars).trimEnd() + '…' : plain
}

export function getAllPosts(): PostMeta[] {
  const files = fs.readdirSync(postsDirectory).filter(f => f.endsWith('.mdx'))

  return files
    .map(filename => {
      const slug = filename.replace(/\.mdx$/, '')
      const fullPath = path.join(postsDirectory, filename)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data, content } = matter(fileContents)

      return {
        slug,
        title: data.title ?? '',
        metaTitle: data.metaTitle ?? data.title ?? '',
        metaDescription: data.metaDescription ?? '',
        date: data.date ?? '',
        author: data.author ?? '',
        keyword: data.keyword ?? '',
        category: data.category ?? 'Advice',
        coverImage: data.coverImage ?? '',
        excerpt: makeExcerpt(content),
        wordCount: estimateWordCount(content),
      }
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1))
}

export function getPost(slug: string): Post {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  return {
    slug,
    title: data.title ?? '',
    metaTitle: data.metaTitle ?? data.title ?? '',
    metaDescription: data.metaDescription ?? '',
    date: data.date ?? '',
    author: data.author ?? '',
    keyword: data.keyword ?? '',
    category: data.category ?? 'Advice',
    coverImage: data.coverImage ?? '',
    excerpt: makeExcerpt(content),
    wordCount: estimateWordCount(content),
    content,
  }
}

export function getAllSlugs(): string[] {
  return fs
    .readdirSync(postsDirectory)
    .filter(f => f.endsWith('.mdx'))
    .map(f => f.replace(/\.mdx$/, ''))
}
