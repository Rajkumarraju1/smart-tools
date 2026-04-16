import { MetadataRoute } from 'next';

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
        '/blog',
        '/blog/reduce-pdf-size-without-losing-quality',
        '/blog/best-practices-image-compression-web',
        '/blog/png-vs-jpg-vs-webp',
        '/blog/client-side-processing-privacy',
        '/blog/how-to-safely-merge-sensitive-pdf-documents',
        '/blog/ultimate-guide-securing-passwords-online',
        '/blog/understanding-base64-encoding-developers',
        '/blog/how-to-optimize-images-faster-website',
        '/blog/benefits-using-markdown-over-rich-text',
        '/blog/how-qr-codes-work'
    ];

    return routes.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: route === '' ? 1 : 0.8,
    }));
}
