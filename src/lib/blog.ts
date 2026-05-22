import fs from 'node:fs/promises'
import path from 'node:path'
import matter from 'gray-matter'

export type BlogCategory =
  | 'venue-guide'
  | 'how-to'
  | 'trends'
  | 'showcase'
  | 'planning'

export type SchemaType = 'Article' | 'BlogPosting' | 'HowTo' | 'FAQPage'

export interface PostSchema {
  type: SchemaType
  json: Record<string, unknown>
}

export interface PostFrontmatter {
  title: string
  slug: string
  date: string
  author: string
  excerpt: string
  coverImage: string
  category: BlogCategory
  tags: string[]
  schema: PostSchema
  readTime?: string
  featured?: boolean
}

export type PostSummary = PostFrontmatter

export interface Post {
  frontmatter: PostFrontmatter
  content: string
}

const CONTENT_DIR = path.join(process.cwd(), 'src', 'content', 'blog')

async function readMdxFiles(): Promise<string[]> {
  try {
    const entries = await fs.readdir(CONTENT_DIR)
    return entries.filter((f) => f.endsWith('.mdx'))
  } catch {
    return []
  }
}

function parseFrontmatter(raw: string): { data: PostFrontmatter; content: string } {
  const parsed = matter(raw)
  return {
    data: parsed.data as PostFrontmatter,
    content: parsed.content,
  }
}

export async function getAllPosts(): Promise<PostSummary[]> {
  const files = await readMdxFiles()
  const posts: PostSummary[] = []

  for (const file of files) {
    const fullPath = path.join(CONTENT_DIR, file)
    const raw = await fs.readFile(fullPath, 'utf8')
    const { data } = parseFrontmatter(raw)
    posts.push(data)
  }

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  )
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const fullPath = path.join(CONTENT_DIR, `${slug}.mdx`)
  try {
    const raw = await fs.readFile(fullPath, 'utf8')
    const { data, content } = parseFrontmatter(raw)
    return { frontmatter: data, content }
  } catch {
    return null
  }
}

export async function getAllSlugs(): Promise<string[]> {
  const files = await readMdxFiles()
  return files.map((f) => f.replace(/\.mdx$/, ''))
}
