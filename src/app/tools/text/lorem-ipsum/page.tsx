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
            extraContent={
                <>
                    <h2>Free Online Lorem Ipsum Generator</h2>
                    <p>In the highly fast-paced worlds of professional web development, graphic design, and modern typography, constructing visual layouts often happens long before the actual marketing copy is officially approved. That is exactly where "Lorem Ipsum" becomes absolutely indispensable. Our totally Free Online Lorem Ipsum Generator provides UX/UI designers, skilled frontend web developers, and creative art directors with instantly accessible, perfectly formatted dummy text specifically designed to flawlessly simulate the natural flow and organic visual appearance of real human language.</p>

                    <h2>What Exactly is Lorem Ipsum?</h2>
                    <p>Lorem Ipsum is the traditional printing and typesetting industry's standard "dummy text," famously utilized continuously since the 1500s. Originally adapted from a classical piece of prominent Latin literature penned by majestic Roman philosopher Cicero in 45 BC, it was deliberately scrambled by an unknown historical printer to create an exhaustive type specimen book. Crucially, Lorem Ipsum possesses a remarkably normal distribution of various letter lengths and standard spacing, heavily mimicking the visual texture of actual readable English text far better than simply endlessly typing "Content here, content here."</p>

                    <h2>Why Modern Designers Absolutely Require Placeholder Text</h2>
                    <ul>
                        <li><strong>Prevents Unwanted Distractions:</strong> Extensive cognitive research firmly proves that regular human readers will invariably become heavily distracted by the actual readable content of a page when they are supposed to be strictly evaluating the overall visual layout. Using entirely unrecognizable pseudo-Latin completely eliminates this psychological distraction.</li>
                        <li><strong>Validates Font Selections:</strong> When carefully testing expensive new premium web fonts, analyzing intricate typographic scales, or strictly evaluating optimal line heights, designers urgently need a substantial volume of perfectly randomized characters to properly assess the overall aesthetic harmony.</li>
                        <li><strong>Accelerates Project Workflows:</strong> You no longer have to hopelessly wait for the marketing department or freelance copywriters to finalize their tedious drafts before you can confidently commence coding the core wireframes or constructing the central database architectural structure.</li>
                    </ul>

                    <h2>How to Operate the Text Generator</h2>
                    <ol>
                        <li><strong>Specify the Volume:</strong> Directly input the precise mathematical number of units you specifically require utilizing the prominent numerical 'Count' input field.</li>
                        <li><strong>Designate the Format Type:</strong> Expertly utilize the 'Type' dropdown menu to systematically choose whether you need your text generated as massive Block Paragraphs, distinct individual Sentences, or just a highly specific handful of isolated Words.</li>
                        <li><strong>Execute Generation:</strong> Click the extremely visible 'Generate' button to instantly trigger the algorithmic creation of your perfect custom placeholder text.</li>
                        <li><strong>Secure the Output:</strong> Click the highly convenient 'Copy' button to flawlessly save the massive text block directly to your clipboard, explicitly ready to be immediately pasted into Figma, Adobe XD, or your raw HTML codebase.</li>
                    </ol>
                </>
            }
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
