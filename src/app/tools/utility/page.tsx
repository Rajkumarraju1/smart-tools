'use client';

import ToolLayout from '@/components/ToolLayout';
import Link from 'next/link';
import { Settings, Lock, Type, RefreshCcw } from 'lucide-react';

const utilityTools = [
    {
        title: 'Password Generator',
        description: 'Create strong, secure passwords instantly.',
        icon: Lock,
        href: '/tools/utility/password-generator',
        color: 'bg-emerald-100 text-emerald-600',
    },
    {
        title: 'Word Counter',
        description: 'Count words, characters, and sentences in your text.',
        icon: Type,
        href: '/tools/utility/word-counter',
        color: 'bg-blue-100 text-blue-600',
    },
    {
        title: 'Unit Converter',
        description: 'Convert between different units of measurement.',
        icon: RefreshCcw,
        href: '/tools/utility/unit-converter',
        color: 'bg-purple-100 text-purple-600',
    },
];

export default function UtilityToolsPage() {
    return (
        <ToolLayout
            title="Utility Tools"
            description="Handy tools for developers and everyday tasks."
            icon={Settings}
            category="Utility"
        >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                {utilityTools.map((tool) => (
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
