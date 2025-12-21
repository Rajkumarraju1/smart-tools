'use client';

import React, { useState } from 'react';
import { Type, Copy, Check, RefreshCw } from 'lucide-react';
import ToolLayout from '@/components/ToolLayout';

export default function LoremIpsumPage() {
    const [paragraphs, setParagraphs] = useState(3);
    const [type, setType] = useState<'paragraphs' | 'sentences' | 'words'>('paragraphs');
    const [output, setOutput] = useState('');
    const [copied, setCopied] = useState(false);

    const LOREM_TEXT = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris. Integer in mauris eu nibh euismod gravida. Duis ac tellus et risus vulputate vehicula. Donec lobortis risus a elit. Etiam tempor. Ut ullamcorper, ligula eu tempor congue, eros est euismod turpis, id tincidunt sapien risus a quam. Maecenas fermentum consequat mi. Donec fermentum. Pellentesque malesuada nulla a mi. Duis sapien sem, aliquet nec, commodo eget, consequat quis, neque. Aliquam faucibus, elit ut dictum aliquet, felis nisl adipiscing sapien, sed malesuada diam lacus eget erat. Cras mollis scelerisque nunc. Nullam arcu. Aliquam consequat. Curabitur augue lorem, dapibus quis, laoreet et, pretium ac, nisi. Aenean magna nisl, mollis quis, molestie eu, feugiat in, orci. In hac habitasse platea dictumst. Fusce convallis. Nullam vel sem. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.";

    const generateLorem = () => {
        let result = '';
        const sentences = LOREM_TEXT.split('. ');
        const words = LOREM_TEXT.split(' ');

        if (type === 'paragraphs') {
            const textBlock = sentences.slice(0, 8).join('. ') + '.';
            result = Array(paragraphs).fill(textBlock).join('\n\n');
        } else if (type === 'sentences') {
            result = sentences.slice(0, paragraphs).join('. ') + '.';
        } else {
            result = words.slice(0, paragraphs).join(' ');
        }

        setOutput(result);
    };

    // Generate initial state
    React.useEffect(() => {
        generateLorem();
    }, []);

    const copyToClipboard = () => {
        if (!output) return;
        navigator.clipboard.writeText(output);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <ToolLayout
            title="Lorem Ipsum Generator"
            description="Generate placeholder text for your designs and mockups."
            icon={Type}
            category="Utility"
        >
            <div className="w-full max-w-4xl mx-auto space-y-6">

                {/* Controls */}
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex flex-col md:flex-row gap-6 items-end md:items-center justify-between">
                    <div className="flex gap-4 w-full md:w-auto">
                        <div className="flex-1 space-y-1">
                            <label className="text-xs font-bold text-gray-500 uppercase">Count</label>
                            <input
                                type="number"
                                min="1"
                                max="100"
                                value={paragraphs}
                                onChange={(e) => setParagraphs(Math.max(1, parseInt(e.target.value) || 1))}
                                className="w-full p-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
                            />
                        </div>
                        <div className="flex-[2] space-y-1">
                            <label className="text-xs font-bold text-gray-500 uppercase">Type</label>
                            <select
                                value={type}
                                onChange={(e) => setType(e.target.value as any)}
                                className="w-full p-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none bg-white"
                            >
                                <option value="paragraphs">Paragraphs</option>
                                <option value="sentences">Sentences</option>
                                <option value="words">Words</option>
                            </select>
                        </div>
                    </div>

                    <div className="flex gap-3 w-full md:w-auto">
                        <button
                            onClick={generateLorem}
                            className="flex-1 md:flex-none px-4 py-2 bg-blue-50 text-blue-600 rounded-lg font-medium hover:bg-blue-100 transition-colors flex items-center justify-center gap-2"
                        >
                            <RefreshCw className="h-4 w-4" /> Generate
                        </button>
                        <button
                            onClick={copyToClipboard}
                            className="flex-1 md:flex-none px-6 py-2 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                        >
                            {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                            {copied ? 'Copied' : 'Copy'}
                        </button>
                    </div>
                </div>

                {/* Output */}
                <div className="relative">
                    <textarea
                        value={output}
                        readOnly
                        className="w-full h-[400px] p-6 rounded-xl border border-gray-200 bg-white focus:ring-2 focus:ring-blue-100 focus:border-blue-300 outline-none resize-none text-gray-700 leading-relaxed text-lg"
                    />
                </div>

            </div>
        </ToolLayout>
    );
}
