import type { Metadata } from 'next';
import MergePDFClient from './Client';

export const metadata: Metadata = {
    title: 'Merge PDF - Combine PDF Files Online for Free | Smart Tools',
    description: 'Merge multiple PDF files into one document instantly. Free, secure, and no registration required. Reorder pages and download your combined PDF.',
    keywords: ['merge pdf', 'combine pdf', 'join pdf', 'pdf merger online', 'pdf combiner'],
};

export default function MergePDFPage() {
    return <MergePDFClient />;
}
