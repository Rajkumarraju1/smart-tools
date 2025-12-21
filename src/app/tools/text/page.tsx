'use client';

import ToolLayout from '@/components/ToolLayout';
import Link from 'next/link';
import { Type, Database, FileText, FileCode } from 'lucide-react';

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
