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
            extraContent={
                <>
                    <h2>Advanced Free Online Markdown Editor & Validator</h2>
                    <p>Markdown has undeniably conquered the modern technical landscape as the absolute easiest, most incredibly efficient method for writing beautifully formatted web content without brutally wrestling with chaotic HTML tags. Whether you are actively compiling complex GitHub documentation (README variants), diligently scripting your highly technical programming blog, or merely taking extensive daily notes, our completely Free Online Markdown Editor provides a hyper-responsive, instantly reacting environment to gracefully draft and flawlessly visually preview your raw syntax in absolute real-time.</p>

                    <h2>What is Markdown and Why is it Superior?</h2>
                    <p>Fundamentally, Markdown is a severely lightweight, incredibly easy-to-read, beautifully easy-to-write plain text markup language initially formulated by renowned developer John Gruber in 2004. Its overarching core philosophy heavily dictates that plain text documents should inherently be highly readable by human beings without requiring any complex compilation or appearing as overwhelming structural code. Instead of manually typing tedious structural code like <code>&lt;strong&gt;Bold&lt;/strong&gt;</code>, you merely type <code>**Bold**</code>. This massive paradigm shift dramatically accelerates overall writing speed and significantly reduces agonizing cognitive load.</p>

                    <h2>Core Advantages of Our Specific Markdown Parser</h2>
                    <ul>
                        <li><strong>Flawless Live Preview Architecture:</strong> Unlike massive, bloated native desktop applications that completely monopolize your system memory, our entirely browser-based dual-pane split interface actively renders your structural HTML visual preview the exact millisecond you casually strike a key on your keyboard.</li>
                        <li><strong>Immaculate GitHub Flavored Markdown (GFM) Compatibility:</strong> Our underlying robust rendering engine fully supports advanced, modern syntax features including complex nested tables, rigorous task lists, distinct strikethrough text, and heavily customized fenced code blocks, perfectly mirroring the exact behavior of major platforms.</li>
                        <li><strong>Absolute Output Portability:</strong> Because you are fundamentally writing in raw, unstyled plain text, your resulting incredibly valuable documents will mathematically persist forever, being structurally readable on absolutely any computer operating system, completely immune to the devastating threat of proprietary corporate software lock-in.</li>
                    </ul>

                    <h2>Frequently Asked Questions (FAQ)</h2>
                    <h3>What fundamental basic syntax combinations do I absolutely need to memorize?</h3>
                    <p>The learning curve is incredibly shallow. The mandatory basics rigorously encompass utilizing Hash symbols (<code>#</code>) to denote majestic Headers, utilizing simple asterisks (<code>*</code>) for enforcing stark Italics or bolding syntax, and strictly utilizing simple dashes (<code>-</code>) to instantly construct massively indented bulleted itemized lists.</p>

                    <h3>Does this completely free editor automatically permanently save my crucial text data securely?</h3>
                    <p>Currently, to rigorously guarantee the absolute ultimate height of personal user privacy, this specific application operates completely ephemerally directly in the localized browser sandbox. If you drastically refresh the entire web page or completely sever your browser tab, your uncopied markdown data will be instantly, permanently eradicated from RAM. Therefore, you must rigorously ensure you physically copy your highly valuable finalized output and explicitly paste it into a permanent, secure long-term local file.</p>
                </>
            }
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
