import type { Metadata } from 'next';
import PptToPdfClient from './Client';

export const metadata: Metadata = {
    title: 'PPT to PDF - Convert PowerPoint to PDF Free | Smart Tools',
    description: 'Convert your PowerPoint presentations (PPT, PPTX) into PDF documents instantly. Secure, free, and runs entirely in your browser.',
    keywords: ['ppt to pdf', 'pptx to pdf', 'powerpoint to pdf', 'convert ppt', 'slide convert'],
};

export default function PptToPdfPage() {
    return <PptToPdfClient />;
}
