'use client';

import React, { useState } from 'react';
import { Minimize, Copy, Trash2, Check, FileCode, FileType } from 'lucide-react';
import ToolLayout from '@/components/ToolLayout';

type MinifyType = 'css' | 'js';

export default function MinifierPage() {
    const [input, setInput] = useState('');
    const [output, setOutput] = useState('');
    const [type, setType] = useState<MinifyType>('css');
    const [copied, setCopied] = useState(false);

    // Basic client-side minification regex
    const minifyCSS = (css: string) => {
        return css
            .replace(/\/\*[\s\S]*?\*\//g, '') // Remove comments
            .replace(/\s+/g, ' ') // Collapse whitespace
            .replace(/ ?([:;{}]) ?/g, '$1') // Remove space around selectors/declarations
            .replace(/;}/g, '}') // Remove last semicolon
            .trim();
    };

    const minifyJS = (js: string) => {
        // Very basic JS minifier (Regex based - safe for simple scripts, warned for complex)
        // Removes single line comments, multi line comments, and excessive whitespace
        return js
            .replace(/\/\*[\s\S]*?\*\//g, '') // Block comments
            .replace(/\/\/.*/g, '') // Line comments (Risky if inside strings, but acceptable for basic tool)
            .replace(/\s+/g, ' ') // Collapse whitespace
            .replace(/^\s+|\s+$/g, '') // Trim
            .replace(/ ?([=+\-*/%&|<>!?:;{}()\[\]^,]) ?/g, '$1'); // Remove spaces around operators
    };

    const handleMinify = () => {
        if (!input) {
            setOutput('');
            return;
        }

        if (type === 'css') {
            setOutput(minifyCSS(input));
        } else {
            setOutput(minifyJS(input));
        }
    };

    const copyToClipboard = () => {
        if (!output) return;
        navigator.clipboard.writeText(output);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <ToolLayout
            title="CSS & JS Minifier"
            description="Minify your CSS and JavaScript code to reduce file size."
            icon={Minimize}
            category="Utility"
        >
            <div className="w-full max-w-5xl mx-auto space-y-6">

                {/* Controls */}
                <div className="flex flex-col sm:flex-row justify-between items-center bg-gray-50 p-4 rounded-xl border border-gray-200 gap-4">
                    <div className="flex items-center gap-4">
                        <div className="flex bg-white p-1 rounded-lg border border-gray-200">
                            <button
                                onClick={() => setType('css')}
                                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-2 ${type === 'css' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-50'}`}
                            >
                                <FileType className="h-4 w-4" /> CSS
                            </button>
                            <button
                                onClick={() => setType('js')}
                                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-2 ${type === 'js' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-50'}`}
                            >
                                <FileCode className="h-4 w-4" /> JavaScript
                            </button>
                        </div>

                        <button
                            onClick={handleMinify}
                            disabled={!input}
                            className="px-6 py-2 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors shadow-sm"
                        >
                            Minify Code
                        </button>
                    </div>

                    <button onClick={() => { setInput(''); setOutput(''); }} className="text-sm text-red-500 hover:text-red-600 flex items-center gap-1 font-medium">
                        <Trash2 className="h-4 w-4" /> Clear
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-[500px]">
                    {/* Input */}
                    <div className="flex flex-col h-full space-y-2">
                        <label className="text-sm font-semibold text-gray-700">Source Code</label>
                        <textarea
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder={`Paste your ${type.toUpperCase()} code here...`}
                            className="flex-1 w-full p-4 rounded-xl border border-gray-200 focus:ring-4 focus:ring-blue-100 focus:border-blue-300 outline-none resize-none bg-white font-mono text-sm leading-relaxed"
                        />
                    </div>

                    {/* Output */}
                    <div className="flex flex-col h-full space-y-2">
                        <div className="flex justify-between items-center px-1">
                            <label className="text-sm font-semibold text-gray-700">Minified Output</label>
                            <button
                                onClick={copyToClipboard}
                                disabled={!output}
                                className="text-xs bg-green-50 text-green-600 px-3 py-1 rounded-full hover:bg-green-100 disabled:opacity-50 flex items-center gap-1"
                            >
                                {copied ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                                {copied ? 'Copied' : 'Copy'}
                            </button>
                        </div>

                        <div className="flex-1 w-full rounded-xl border border-gray-200 bg-gray-50 overflow-hidden relative">
                            <textarea
                                readOnly
                                value={output}
                                className="w-full h-full p-4 bg-transparent resize-none outline-none font-mono text-sm text-gray-800 break-all"
                                placeholder="Minified code will appear here..."
                            />
                        </div>
                        {output && (
                            <div className="text-right text-xs text-green-600 font-medium">
                                Savings: {Math.round((1 - output.length / input.length) * 100)}%
                                ({input.length} → {output.length} characters)
                            </div>
                        )}
                    </div>
                </div>

                {type === 'js' && (
                    <div className="bg-yellow-50 p-4 rounded-lg flex items-start gap-3 text-sm text-yellow-800 border border-yellow-200">
                        <div className="font-bold text-yellow-600 shrink-0">Note:</div>
                        <p>This is a basic regex-based minifier. For complex JavaScript production builds (React, Angular, etc.), please use a build tool like Webpack, Vite, or Terser CLI for safer results.</p>
                    </div>
                )}

            </div>
        </ToolLayout>
    );
}
