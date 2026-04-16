import { MetadataRoute } from 'next';
import { blogPosts } from '../data/blogPosts';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://mywebutils.online';

    // Define your static routes
    const routes = [
        '',
        '/about',
        '/contact',
        '/privacy',
        '/terms',
        '/tools/pdf',
        '/tools/pdf/merge',
        '/tools/pdf/compress',
        '/tools/pdf/image-to-pdf',
        '/tools/image',
        '/tools/image/compress',
        '/tools/image/qr-generator',
        '/tools/utility',
        '/tools/utility/password-generator',
        '/tools/utility/word-counter',
        '/tools/utility/unit-converter',
        '/tools/dev',
        '/tools/dev/json-formatter',
        '/tools/dev/base64',
        '/tools/dev/minifier',
        '/tools/calculators',
        '/tools/calculators/bmi',
        '/tools/calculators/age',
        '/tools/calculators/loan',
        '/tools/text',
        '/tools/text/lorem-ipsum',
        '/tools/text/json-csv',
        '/tools/text/markdown',
        '/tools/image/resizer',
        '/tools/pdf/ppt-to-pdf',
        '/faq',
        '/disclaimer',
        '/blog'
    ];

    const staticUrls = routes.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    const blogUrls = blogPosts.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(post.date),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }));

    return [...staticUrls, ...blogUrls];
}
