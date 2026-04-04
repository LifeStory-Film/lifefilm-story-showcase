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
  wordCount: number
}

export interface Post extends PostMeta {
  content: string
}

function estimateWordCount(content: string): number {
  return content.trim().split(/\s+/).length
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
