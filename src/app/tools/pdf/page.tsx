'use client';

import ToolLayout from '@/components/ToolLayout';
import Link from 'next/link';
import { FileText, FilePlus, Image as ImageIcon, Minimize2 } from 'lucide-react';

const pdfTools = [
    {
        title: 'Merge PDF',
        description: 'Combine multiple PDF files into one single document.',
        icon: FilePlus,
        href: '/tools/pdf/merge',
        color: 'bg-red-100 text-red-600',
    },
    {
        title: 'Compress PDF',
        description: 'Reduce the file size of your PDF while maintaining quality.',
        icon: Minimize2,
        href: '/tools/pdf/compress',
        color: 'bg-orange-100 text-orange-600',
    },
    {
        title: 'Image to PDF',
        description: 'Convert JPG, PNG, or other image files to PDF.',
        icon: ImageIcon,
        href: '/tools/pdf/image-to-pdf',
        color: 'bg-yellow-100 text-yellow-600',
    },
    {
        title: 'PPT to PDF',
        description: 'Convert PowerPoint presentations (PPT, PPTX) to PDF.',
        icon: FileText,
        href: '/tools/pdf/ppt-to-pdf',
        color: 'bg-green-100 text-green-600',
    },
];

export default function PDFToolsPage() {
    return (
        <ToolLayout
            title="PDF Tools"
            description="Securely process your PDF files locally. No file limits."
            icon={FileText}
            category="PDF"
        >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                {pdfTools.map((tool) => (
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
