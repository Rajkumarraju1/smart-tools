import type { Metadata } from 'next';
import JsonFormatterClient from './Client';

export const metadata: Metadata = {
    title: 'JSON Formatter Online Free | Smart Tools',
    description: 'Use our lightning-fast JSON formatter online free to instantly beautify, validate, and minify your JSON data securely.',
    keywords: ['json formatter online free', 'json validator', 'beautify json online', 'minify json'],
};

export default function JsonFormatterPage() {
    return <JsonFormatterClient />;
}
