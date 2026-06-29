import React from 'react';

interface ToolSchemaProps {
    name: string;
    description: string;
    url: string;
    steps?: string[];
    faqs?: { question: string; answer: string }[];
}

export default function ToolSchema({ name, description, url, steps, faqs }: ToolSchemaProps) {
    const webAppSchema = {
        '@context': 'https://schema.org',
        '@type': 'WebApplication',
        name,
        description,
        url: `https://mywebutils.online${url}`,
        applicationCategory: 'UtilitiesApplication',
        operatingSystem: 'Any',
        offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'USD',
        },
    };

    const faqSchema = faqs && faqs.length > 0 ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map(faq => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer
            }
        }))
    } : null;

    const howToSchema = steps && steps.length > 0 ? {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        name: `How to use ${name}`,
        description,
        step: steps.map((step, idx) => ({
            '@type': 'HowToStep',
            position: idx + 1,
            text: step
        }))
    } : null;

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
            />
            {faqSchema && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
                />
            )}
            {howToSchema && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
                />
            )}
        </>
    );
}
