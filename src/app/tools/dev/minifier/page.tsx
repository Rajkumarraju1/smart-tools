import type { Metadata } from 'next';
import MinifierClient from './Client';

export const metadata: Metadata = {
    title: 'CSS & JS Minifier - Compress Code Online | Smart Tools',
    description: 'Minify and compress your CSS and JavaScript code instantly. Reduce file size for faster websites. Free online code minifier.',
    keywords: ['css minifier', 'js minifier', 'minify code', 'compress css', 'javascript compressor'],
};

export default function MinifierPage() {
    return <MinifierClient />;
}
