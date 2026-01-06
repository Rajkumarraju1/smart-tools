import type { Metadata } from 'next';
import ImageResizerClient from './Client';

export const metadata: Metadata = {
    title: 'Image Resizer - Resize JPG, PNG Online Free | Smart Tools',
    description: 'Resize your images to exact pixel dimensions. Maintain aspect ratio or custom crop. Free, fast, and secure client-side resizing.',
    keywords: ['image resizer', 'resize image', 'photo resizer', 'resize jpg', 'resize png', 'picture resizer'],
};

export default function ImageResizerPage() {
    return <ImageResizerClient />;
}
