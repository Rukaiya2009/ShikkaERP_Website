import Link from 'next/link';
import Image from 'next/image';
import { blogPosts } from '@/data/blog';
import { Calendar, User, Clock, ArrowRight, Sparkles } from 'lucide-react';

export const metadata = {
  title: 'Blog – ShikkhaERP',
  description: 'Stories, tips, and news from the ShikkhaERP team. Insights on education technology, school management, and digital transformation.',
};

export default function BlogPage() {
  // Get the latest 3 posts for featured section
  const featuredPosts = blogPosts.slice(0, 3);
  const remainingPosts = blogPosts.slice(3);

  return (
    <div className="pt-16 pb-20">
      {/* ===== HERO SECTION ===== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0a1628] via-[#132337] to-[#1a2d4a] text-white py-20 lg:py-28">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-accent/20 to-transparent rounded-full blur-3xl animate-pulse animation-delay-1000" />
        </div>

        <div className="relative container-custom text-center">
          <span className="inline-block bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-4 py-1.5 mb-6">
            <Sparkles className="w-4 h-4 inline-block mr-1 text-accent-light" />
            <span className="text-sm font-medium text-accent-light">Our Blog</span>
          </span>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight mb-6">
            Insights & <br />
            <span className="bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-300 bg-clip-text text-transparent">
              Updates
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Stories, tips, and news from the ShikkhaERP team. 
            Stay updated with the latest in education technology and school management.
          </p>

          {/* Search or Category Filter Placeholder */}
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <button className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium hover:bg-white/20 transition">
              All Posts
            </button>
            <button className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium hover:bg-white/20 transition">
              Education Tech
            </button>
            <button className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium hover:bg-white/20 transition">
              School Management
            </button>
            <button className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium hover:bg-white/20 transition">
              Product Updates
            </button>
          </div>
        </div>
      </section>

      {/* ===== FEATURED POSTS ===== */}
      {featuredPosts.length > 0 && (
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="container-custom">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-secondary dark:text-white">
                Featured Posts
              </h2>
              <Link href="/blog" className="text-primary font-medium hover:underline">
                View All →
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredPosts.map((post, index) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group relative bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={post.cover}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <User className="w-3 h-3" />
                        {post.author}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                         Read   min
                      </span>
                    </div>

                    <h3 className="text-xl font-heading font-bold text-secondary dark:text-white mb-2 group-hover:text-primary transition">
                      {post.title}
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed line-clamp-2">
                      {post.excerpt}
                    </p>

                    <div className="mt-4 inline-flex items-center gap-1 text-primary font-medium text-sm group-hover:gap-2 transition-all">
                      Read more
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>

                  {/* Decorative gradient line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ===== ALL POSTS ===== */}
      <section className="py-16 bg-slate-50 dark:bg-gray-800">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-secondary dark:text-white mb-8">
            All Posts
          </h2>

          {remainingPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {remainingPosts.map((post, index) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={post.cover}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400 mb-2">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.author}</span>
                    </div>
                    <h3 className="text-lg font-heading font-semibold text-secondary dark:text-white mb-2 group-hover:text-primary transition line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm line-clamp-2">
                      {post.excerpt}
                    </p>
                    <span className="mt-4 inline-block text-primary font-medium text-sm group-hover:underline">
                      Read more →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 dark:text-gray-400">
                More posts coming soon. Stay tuned!
              </p>
            </div>
          )}

          {/* Pagination (Placeholder) */}
          {blogPosts.length > 6 && (
            <div className="mt-12 flex justify-center gap-2">
              <button className="px-4 py-2 bg-white dark:bg-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-600 transition">
                Previous
              </button>
              <button className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary-dark transition">
                1
              </button>
              <button className="px-4 py-2 bg-white dark:bg-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-600 transition">
                2
              </button>
              <button className="px-4 py-2 bg-white dark:bg-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-600 transition">
                3
              </button>
              <button className="px-4 py-2 bg-white dark:bg-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-600 transition">
                Next
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container-custom text-center">
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-3xl p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-secondary dark:text-white mb-3">
              Want to stay updated?
            </h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-6">
              Subscribe to our newsletter for the latest insights and updates from ShikkhaERP.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
              />
              <button className="bg-gradient-to-r from-primary to-accent text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-primary/25 transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}