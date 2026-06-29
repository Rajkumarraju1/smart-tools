import type { Metadata } from 'next';
import MinifierClient from './Client';

export const metadata: Metadata = {
    title: 'Minify CSS Online Free Tool',
    description: 'Use our minify css online free tool to instantly compress CSS and JS files for lightning-fast website performance.',
    keywords: ['minify css online free tool', 'css minifier online free', 'minify js', 'compress css'],
    alternates: {
        canonical: '/tools/dev/minifier',
    },
};

export default function MinifierPage() {
    return <MinifierClient />;
}
