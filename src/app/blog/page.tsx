import React from 'react';
import Link from 'next/link';
import { blogPosts } from '@/data/blogPosts';
import { BookOpen, Calendar, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Blog & Tutorials | Smart Tools',
  description: 'Read the latest guides, tutorials, and insights on web utilities, privacy, and digital tools.',
};

export default function BlogIndexPage() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center mb-16">
                <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-4">
                    Blog & Tutorials
                </h1>
                <p className="text-xl text-gray-500 max-w-2xl mx-auto">
                    Deep dives into web technology, data privacy, and how to get the most out of our tools.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.map((post) => (
                    <Link key={post.slug} href={`/blog/${post.slug}`} className="group bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-all flex flex-col h-full relative">
                        <div className="flex-1">
                            <div className="flex items-center gap-2 text-sm text-blue-600 font-semibold mb-3">
                                <BookOpen className="h-4 w-4" />
                                {post.category}
                            </div>
                            <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                                {post.title}
                            </h2>
                            <p className="text-gray-600 mb-6 line-clamp-3">
                                {post.excerpt}
                            </p>
                        </div>
                        <div className="mt-auto pt-6 border-t border-gray-100 flex items-center justify-between text-sm text-gray-500">
                            <div className="flex items-center gap-1">
                                <Calendar className="h-4 w-4" />
                                {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                            </div>
                            <div className="flex items-center text-blue-600 font-medium group-hover:translate-x-1 transition-transform">
                                Read <ArrowRight className="h-4 w-4 ml-1" />
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
