import React from 'react';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import AdsterraBanner from './AdsterraBanner';

interface ToolLayoutProps {
    title: string;
    description: string;
    icon: React.ElementType | React.ReactNode;
    children: React.ReactNode;
    category?: 'PDF' | 'Image' | 'Video' | 'Utility';
    introContent?: React.ReactNode;
    extraContent?: React.ReactNode;
}

const ToolLayout: React.FC<ToolLayoutProps> = ({
    title,
    description,
    icon,
    children,
    category,
    introContent, // New prop for content BEFORE the tool
    extraContent, // Existing prop for content AFTER the tool
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
            <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <Link
                    href="/"
                    className="inline-flex items-center text-sm text-gray-500 hover:text-blue-600 transition-colors"
                >
                    <ChevronLeft className="h-4 w-4 mr-1" />
                    Back to Home
                </Link>

                {/* Top Ad (Leaderboard on Desktop, Mobile Banner on Mobile) */}
                <div className="flex justify-center">
                    <div className="hidden sm:block">
                        <AdsterraBanner id="38b2463f381410f1a72e51005ec10cfe" width={728} height={90} />
                    </div>
                    <div className="block sm:hidden">
                        <AdsterraBanner id="149fc3a7c578b4fce8c7bd349837a207" width={320} height={50} />
                    </div>
                </div>
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
                                <p className="text-gray-500 mt-1">{description}</p>
                            </div>
                        </div>

                        {/* Intro / Primer Content Section Before Tool */}
                        {introContent && (
                            <div className="mb-6 prose prose-blue max-w-none text-gray-600 border-l-4 border-blue-100 pl-4 py-1 italic">
                                {introContent}
                            </div>
                        )}

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

                    {/* SEO / Extra Content Section */}
                    {extraContent && (
                        <div className="mt-8 bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 prose prose-blue max-w-none">
                            {extraContent}
                        </div>
                    )}

                    {/* Bottom Native Ad removed to prevent redirects */}
                </div>


                {/* Sidebar (Ads & Related Tools) */}
                <div className="lg:col-span-4 space-y-8">
                    {/* Sidebar Ad (300x250) */}
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col items-center">
                        <span className="text-[10px] text-gray-400 mb-2 uppercase tracking-wider">Advertisement</span>
                        <AdsterraBanner id="750cec72414a19117da23f935150045e" width={300} height={250} />
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

