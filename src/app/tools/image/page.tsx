'use client';

import ToolLayout from '@/components/ToolLayout';
import Link from 'next/link';
import { Image as ImageIcon, Minimize2, ScanLine, Crop } from 'lucide-react';

const imageTools = [
    {
        title: 'Image Compressor',
        description: 'Compress JPG, PNG, and WebP images without quality loss.',
        icon: Minimize2,
        href: '/tools/image/compress',
        color: 'bg-purple-100 text-purple-600',
    },
    {
        title: 'QR Code Generator',
        description: 'Create custom QR codes for URLs, WiFi, and more.',
        icon: ScanLine,
        href: '/tools/image/qr-generator',
        color: 'bg-blue-100 text-blue-600',
    },
    {
        title: 'Image Resizer',
        description: 'Resize images to specific dimensions easily.',
        icon: Crop,
        href: '/tools/image/resizer',
        color: 'bg-pink-100 text-pink-600',
    },
];

export default function ImageToolsPage() {
    return (
        <ToolLayout
            title="Image Tools"
            description="Edit, convert, and optimize your images in seconds."
            icon={ImageIcon}
            category="Image"
        >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                {imageTools.map((tool) => (
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
