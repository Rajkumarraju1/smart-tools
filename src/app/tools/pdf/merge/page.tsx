import type { Metadata } from 'next';
import MergePDFClient from './Client';

export const metadata: Metadata = {
    title: 'How to Merge PDF Files Without Software',
    description: 'Learn how to merge PDF files without software quickly and easily. A completely free, local browser-based solution.',
    keywords: ['how to merge pdf files without software', 'merge pdf online', 'combine pdf files free', 'pdf merger'],
    alternates: {
        canonical: '/tools/pdf/merge',
    },
};

export default function MergePDFPage() {
    return <MergePDFClient />;
}
