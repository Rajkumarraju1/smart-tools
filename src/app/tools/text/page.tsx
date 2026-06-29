import type { Metadata } from 'next';
import ToolLayout from '@/components/ToolLayout';
import Link from 'next/link';
import { Type, Database, FileText, FileCode } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Text & Data Tools - Lorem Ipsum, JSON-CSV & Markdown',
    description: 'Convert JSON to CSV, preview markdown, and generate Lorem Ipsum text locally. Completely free text utilities for designers and developers.',
    keywords: ['text tools', 'lorem ipsum generator', 'json to csv converter', 'markdown editor', 'data converter'],
    alternates: {
        canonical: '/tools/text',
    },
};

const textTools = [
    {
        title: 'Lorem Ipsum Generator',
        description: 'Generate placeholder text for designs.',
        icon: Type,
        href: '/tools/text/lorem-ipsum',
        color: 'bg-purple-100 text-purple-600',
    },
    {
        title: 'JSON <-> CSV Converter',
        description: 'Convert between JSON and CSV formats.',
        icon: Database,
        href: '/tools/text/json-csv',
        color: 'bg-blue-100 text-blue-600',
    },
    {
        title: 'Markdown Editor',
        description: 'Write and preview markdown real-time.',
        icon: FileCode,
        href: '/tools/text/markdown',
        color: 'bg-gray-100 text-gray-800',
    },
];

export default function TextToolsPage() {
    return (
        <ToolLayout
            title="Text & Data Tools"
            description="Essential tools for text manipulation and data conversion."
            icon={FileText}
            category="Utility"
            extraContent={
                <div className="prose prose-blue max-w-none text-gray-600 mt-12 bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                    <h2>Advanced Text & Data Conversion Hub</h2>
                    <p>For modern knowledge workers and software developers, manipulating structured data and unformatted text is a constant daily friction. Whether you are a web designer desperately needing placeholder textual structures to test a layout, or a backend engineer attempting to translate obscure serialized data formats, the ByteForge AI system powers this robust Text & Data Toolkit to instantly bridge your operational gaps.</p>
                    
                    <h3>Instant Client-Side Text Processing</h3>
                    <p>Copying and pasting thousands of rows of strict financial CSV data or proprietary JSON schemas into random web converters is an incredibly dangerous security violation. ByteForge AI exclusively engineers these text utilities with secure WebAssembly and pure client-side React architectures. This signifies that your extremely sensitive raw data payloads inherently never leave your clipboard's local memory. The complex formatting completely executes locally inside your secure web browser.</p>

                    <h3>Explore the Data Toolkit</h3>
                    <ul>
                        <li><strong>Lorem Ipsum Generator:</strong> Quickly bypass writer's block or validate front-end layouts by instantly generating completely randomized paragraphs, precise word counts, or structural lists of classic Lorem Ipsum placeholder text perfectly formatted for HTML integration.</li>
                        <li><strong>JSON to CSV Converter:</strong> Seamlessly translate rigid, massive JSON API responses completely directly into flat, easily sortable CSV files perfectly optimized for Microsoft Excel or Google Sheets. Conversely, rapidly encode standard spreadsheets back into strict nested JSON hierarchies for your custom databases.</li>
                        <li><strong>Markdown Editor:</strong> Stop completely struggling with clunky HTML tags. Our live-preview Markdown engine empowers you to fluidly write highly readable syntax while providing an exact, instantaneous visual render of how your finalized blog post or crucial README file will fundamentally appear.</li>
                    </ul>

                    <h3>The ByteForge Guarantee</h3>
                    <p>Designed and fiercely maintained by ByteForge AI, these advanced text processing tools operate absolutely free of charge with unconditionally zero backend database storage. Safely translate your highly proprietary schemas and rapidly finalize your design prototypes completely knowing your critical text remains forever encrypted on your own local device.</p>
                </div>
            }
        >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                {textTools.map((tool) => (
                    <Link
                        key={tool.title}
                        href={tool.href}
                        className="flex items-start p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md hover:border-blue-100 transition-all group"
                    >
                        <div className={`p-3 rounded-lg ${tool.color} mr-4 group-hover:scale-110 transition-transform`}>
                            <tool.icon className="h-6 w-6" />
                        </div>
                        <div>
                            <h3 className="font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                                {tool.title}
                            </h3>
                            <p className="text-sm text-gray-500">{tool.description}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </ToolLayout>
    );
}
