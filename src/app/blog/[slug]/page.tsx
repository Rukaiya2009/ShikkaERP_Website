import { notFound } from 'next/navigation'
import Image from 'next/image'
import { blogPosts } from '@/data/blog'
import Link from 'next/link'

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)
  if (!post) notFound()

  return (
    <div className="pt-8 pb-16">
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <div className="flex items-center gap-3 text-sm text-gray-500 mb-4"><span>{post.date}</span><span>•</span><span>{post.author}</span></div>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-secondary mb-6">{post.title}</h1>
          <div className="relative h-80 rounded-2xl overflow-hidden">
            <Image src={post.cover} alt={post.title} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
          </div>
        </div>
        <div className="prose prose-lg max-w-none prose-headings:text-secondary prose-p:text-gray-600" dangerouslySetInnerHTML={{ __html: post.content }} />
        <div className="mt-8 border-t pt-6"><Link href="/blog" className="text-primary hover:underline">← Back to Blog</Link></div>
      </article>
    </div>
  )
}