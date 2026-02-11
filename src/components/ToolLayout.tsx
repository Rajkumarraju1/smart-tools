

import React from 'react';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';

interface ToolLayoutProps {
    title: string;
    description: string;
    icon: React.ElementType | React.ReactNode;
    children: React.ReactNode;
    category?: 'PDF' | 'Image' | 'Video' | 'Utility';
    extraContent?: React.ReactNode;
}

const ToolLayout: React.FC<ToolLayoutProps> = ({
    title,
    description,
    icon,
    children,
    category,
    extraContent, // New prop
}) => {
    // Helper to render icon whether it's a Component or an Element
    const renderIcon = () => {
        if (React.isValidElement(icon)) {
            return icon;
        }
        // Assume it's a component class/function
        const IconComponent = icon as React.ElementType;
        if (IconComponent) {
            return <IconComponent className="h-8 w-8 text-blue-600" />;
        }
        return null;
    };

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {/* Breadcrumb / Back Button */}
            <div className="mb-6">
                <Link
                    href="/"
                    className="inline-flex items-center text-sm text-gray-500 hover:text-blue-600 transition-colors"
                >
                    <ChevronLeft className="h-4 w-4 mr-1" />
                    Back to Home
                </Link>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Main Tool Area */}
                <div className="lg:col-span-8">
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-blue-50 rounded-xl">
                                {renderIcon()}
                            </div>
                            <div>
                                <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
                                <p className="text-gray-500">{description}</p>
                            </div>
                        </div>

                        <div className="min-h-[400px] border-2 border-dashed border-gray-100 rounded-xl bg-gray-50 flex flex-col items-center justify-center p-6 transition-all">
                            {children}
                        </div>

                        {/* Safety / Info Section */}
                        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                            <div className="p-4 rounded-lg bg-gray-50">
                                <h3 className="font-semibold text-gray-900 mb-1">Secure</h3>
                                <p className="text-xs text-gray-500">Files processed locally in browser</p>
                            </div>
                            <div className="p-4 rounded-lg bg-gray-50">
                                <h3 className="font-semibold text-gray-900 mb-1">Fast</h3>
                                <p className="text-xs text-gray-500">No server upload required</p>
                            </div>
                            <div className="p-4 rounded-lg bg-gray-50">
                                <h3 className="font-semibold text-gray-900 mb-1">Free</h3>
                                <p className="text-xs text-gray-500">Free to use, forever</p>
                            </div>
                        </div>
                    </div>

                    {/* Ad Placeholder - In-Content */}
                    <div className="mt-8 bg-gray-100 rounded-lg p-4 h-24 flex items-center justify-center text-gray-400 text-sm">
                        Ad Space (Leaderboard)
                    </div>

                    {/* SEO / Extra Content Section */}
                    {extraContent && (
                        <div className="mt-8 bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 prose prose-blue max-w-none">
                            {extraContent}
                        </div>
                    )}
                </div>

                {/* Sidebar (Ads & Related Tools) */}
                <div className="lg:col-span-4 space-y-8">
                    {/* Sidebar Ad 1 */}
                    <div className="bg-gray-100 rounded-xl h-[300px] flex items-center justify-center text-gray-400">
                        Ad Space (Square)
                    </div>

                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                        <h3 className="font-bold text-gray-900 mb-4">Popular Tools</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/tools/pdf/merge" className="text-gray-600 hover:text-blue-600 text-sm flex items-center justify-between group">
                                    Merge PDF
                                    <span className="text-xs bg-gray-100 group-hover:bg-blue-50 px-2 py-1 rounded-full">New</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/tools/image/compress" className="text-gray-600 hover:text-blue-600 text-sm">Compress Image</Link>
                            </li>
                            <li>
                                <Link href="/tools/image/qr-generator" className="text-gray-600 hover:text-blue-600 text-sm">QR Code Generator</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToolLayout;
