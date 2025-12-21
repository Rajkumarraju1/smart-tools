export default function JsonLd() {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'WebApplication',
        name: 'Smart Tools',
        url: 'https://smart-tools-app.vercel.app',
        description: 'A comprehensive collection of free online tools including PDF merger, image compressor, JSON formatter, and various calculators.',
        applicationCategory: 'UtilitiesApplication',
        operatingSystem: 'Any',
        offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'USD',
        },
        featureList: [
            'PDF Merge',
            'Image Compression',
            'QR Code Generation',
            'JSON Formatting',
            'Base64 Conversion',
            'BMI Calculator',
            'Loan Calculator'
        ],
        author: {
            '@type': 'Organization',
            name: 'Smart Tools Team',
        },
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}
