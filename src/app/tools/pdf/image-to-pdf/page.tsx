import type { Metadata } from 'next';
import ImageToPDFClient from './Client';

export const metadata: Metadata = {
    title: 'Image to PDF - Convert JPG/PNG to PDF Free | Smart Tools',
    description: 'Convert your images (JPG, PNG, WebP) into a single PDF document. Drag and drop, reorder, and convert instantly for free.',
    keywords: ['image to pdf', 'jpg to pdf', 'png to pdf', 'convert image to pdf', 'photos to pdf'],
};

export default function ImageToPDFPage() {
    return <ImageToPDFClient />;
}
