import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://smart-tools-app.vercel.app'; // Replace with your actual domain later

    // Define your static routes
    const routes = [
        '',
        '/about',
        '/contact',
        '/privacy',
        '/terms',
        '/tools/pdf',
        '/tools/pdf/merge',
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
    ];

    return routes.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: route === '' ? 1 : 0.8,
    }));
}
