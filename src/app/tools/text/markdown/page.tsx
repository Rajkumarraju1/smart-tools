'use client';

import React, { useState } from 'react';
import { FileText, Eye, Code } from 'lucide-react';
import ToolLayout from '@/components/ToolLayout';
import ReactMarkdown from 'react-markdown';

export default function MarkdownEditorPage() {
    const [markdown, setMarkdown] = useState<string>('# Hello Markdown\n\nStart typing to see the preview...');
    const [activeTab, setActiveTab] = useState<'write' | 'preview'>('write');

    return (
        <ToolLayout
            title="Markdown Editor"
            description="Write markdown and preview it instantly."
            icon={FileText}
            category="Utility"
        >
            <div className="w-full max-w-6xl mx-auto h-[600px] flex flex-col">

                {/* Toolbar */}
                <div className="flex border-b border-gray-200 bg-gray-50 rounded-t-xl overflow-hidden">
                    <button
                        onClick={() => setActiveTab('write')}
                        className={`flex-1 py-3 text-sm font-medium flex items-center justify-center gap-2 transition-colors ${activeTab === 'write' ? 'bg-white text-blue-600 border-t-2 border-blue-600' : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'}`}
                    >
                        <Code className="h-4 w-4" /> Write
                    </button>
                    <button
                        onClick={() => setActiveTab('preview')}
                        className={`flex-1 py-3 text-sm font-medium flex items-center justify-center gap-2 transition-colors ${activeTab === 'preview' ? 'bg-white text-blue-600 border-t-2 border-blue-600' : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'}`}
                    >
                        <Eye className="h-4 w-4" /> Preview
                    </button>
                </div>

                {/* Editor / Preview Area */}
                <div className="flex-1 bg-white border border-t-0 border-gray-200 rounded-b-xl overflow-hidden flex">

                    {/* Split View for Desktop */}
                    <div className={`w-full md:w-1/2 h-full flex flex-col ${activeTab === 'preview' ? 'hidden md:flex' : 'flex'}`}>
                        <textarea
                            value={markdown}
                            onChange={(e) => setMarkdown(e.target.value)}
                            className="flex-1 w-full h-full p-6 outline-none resize-none font-mono text-sm leading-relaxed text-gray-800 bg-white"
                            placeholder="Type markdown here..."
                        />
                    </div>

                    {/* Preview (Visible on mobile if active, always on desktop split) */}
                    <div className={`w-full md:w-1/2 h-full bg-gray-50 overflow-y-auto border-l border-gray-100 ${activeTab === 'write' ? 'hidden md:block' : 'block'}`}>
                        <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none p-8 text-gray-900">
                            <ReactMarkdown>{markdown}</ReactMarkdown>
                        </div>
                    </div>

                </div>

            </div>
        </ToolLayout>
    );
}
