import type { Metadata } from 'next';
import CompressPDFClient from './Client';

export const metadata: Metadata = {
    title: 'Compress PDF - Reduce PDF File Size Free | Smart Tools',
    description: 'Compress your PDF files online for free. Reduce file size while maintaining quality. Fast, secure, and easy to use.',
    keywords: ['compress pdf', 'reduce pdf size', 'minimize pdf', 'shrink pdf', 'pdf compressor'],
};

export default function CompressPDFPage() {
    return <CompressPDFClient />;
}
