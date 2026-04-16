import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { blogPosts } from '@/data/blogPosts';
import { ChevronLeft, Calendar, User } from 'lucide-react';
import { Metadata } from 'next';

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  
  if (!post) {
    return {
      title: 'Post Not Found | Smart Tools',
    };
  }

  return {
    title: `${post.title} | Smart Tools Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) {
        notFound();
    }

    return (
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="mb-8">
                <Link
                    href="/blog"
                    className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors"
                >
                    <ChevronLeft className="h-4 w-4 mr-1" />
                    Back to all articles
                </Link>
            </div>

            <header className="mb-12 text-center">
                <div className="inline-block px-3 py-1 bg-blue-50 text-blue-600 font-semibold rounded-full text-sm mb-6">
                    {post.category}
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
                    {post.title}
                </h1>
                
                <div className="flex items-center justify-center gap-6 text-gray-500 text-sm">
                    <div className="flex items-center gap-2">
                        <User className="h-4 w-4" />
                        {post.author}
                    </div>
                    <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                    </div>
                </div>
            </header>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-10 md:p-12">
                <div 
                    className="prose prose-blue prose-lg max-w-none"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />
            </div>
            
            {/* Author Box */}
            <div className="mt-12 bg-gray-50 rounded-2xl p-8 border border-gray-100 flex flex-col md:flex-row gap-6 items-center md:items-start text-center md:text-left">
                <div className="w-24 h-24 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="font-extrabold text-2xl">BF</span>
                </div>
                <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">ByteForge AI</h3>
                    <p className="text-sm text-blue-600 font-semibold mb-3">Intelligent Content System at MyWebUtils</p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                        ByteForge AI is the core system behind MyWebUtils, designed to create accurate, optimized, and user-focused digital utility content. It specializes in simplifying complex processes like file optimization, data formatting, and web tools.
                    </p>
                </div>
            </div>

            <div className="mt-12 text-center">
                <Link
                    href="/blog"
                    className="inline-block px-6 py-3 bg-gray-100 text-gray-700 font-medium rounded-xl hover:bg-gray-200 transition-colors"
                >
                    Read more articles
                </Link>
            </div>
        </article>
    );
}
