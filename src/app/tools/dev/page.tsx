'use client';

import ToolLayout from '@/components/ToolLayout';
import Link from 'next/link';
import { FileJson, Binary, Minimize, Code2 } from 'lucide-react';

const devTools = [
    {
        title: 'JSON Formatter',
        description: 'Format, validate, and minify your JSON data.',
        icon: FileJson,
        href: '/tools/dev/json-formatter',
        color: 'bg-yellow-100 text-yellow-600',
    },
    {
        title: 'Base64 Converter',
        description: 'Encode and decode text to Base64 format.',
        icon: Binary,
        href: '/tools/dev/base64',
        color: 'bg-cyan-100 text-cyan-600',
    },
    {
        title: 'CSS/JS Minifier',
        description: 'Minify your code to reduce file size.',
        icon: Minimize,
        href: '/tools/dev/minifier',
        color: 'bg-rose-100 text-rose-600',
    },
];

export default function DevToolsPage() {
    return (
        <ToolLayout
            title="Developer Tools"
            description="Essential tools for developers to debug and optimize code."
            icon={Code2}
            category="Utility"
        >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                {devTools.map((tool) => (
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
