'use client';

import React, { useState } from 'react';
import { FileJson, Copy, Trash2, Check, AlertTriangle, Minimize2, AlignLeft } from 'lucide-react';
import ToolLayout from '@/components/ToolLayout';

export default function JsonFormatterPage() {
    const [input, setInput] = useState('');
    const [output, setOutput] = useState('');
    const [error, setError] = useState<string | null>(null);
    const [copied, setCopied] = useState(false);

    const formatJson = () => {
        if (!input.trim()) {
            setOutput('');
            setError(null);
            return;
        }
        try {
            const parsed = JSON.parse(input);
            setOutput(JSON.stringify(parsed, null, 2));
            setError(null);
        } catch (err) {
            setError((err as Error).message);
            setOutput('');
        }
    };

    const minifyJson = () => {
        if (!input.trim()) return;
        try {
            const parsed = JSON.parse(input);
            setOutput(JSON.stringify(parsed));
            setError(null);
        } catch (err) {
            setError((err as Error).message);
        }
    };

    const clearAll = () => {
        setInput('');
        setOutput('');
        setError(null);
    };

    const copyToClipboard = () => {
        if (!output) return;
        navigator.clipboard.writeText(output);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <ToolLayout
            title="JSON Formatter & Validator"
            description="Format, validate, and minify your JSON data instantly."
            icon={FileJson}
            category="Utility"
        >
            <div className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 h-[600px] md:h-[500px]">

                {/* Input Column */}
                <div className="flex flex-col h-full space-y-2">
                    <div className="flex justify-between items-center px-1">
                        <label className="text-sm font-semibold text-gray-700">Input JSON</label>
                        <button onClick={clearAll} className="text-xs text-red-500 hover:text-red-600 flex items-center gap-1">
                            <Trash2 className="h-3 w-3" /> Clear
                        </button>
                    </div>
                    <textarea
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Paste your JSON here..."
                        className={`flex-1 w-full p-4 rounded-xl border ${error ? 'border-red-300 focus:ring-red-200' : 'border-gray-200 focus:ring-blue-100'} focus:ring-4 outline-none resize-none bg-white font-mono text-sm`}
                    />
                </div>

                {/* Output Column */}
                <div className="flex flex-col h-full space-y-2">
                    <div className="flex justify-between items-center px-1">
                        <label className="text-sm font-semibold text-gray-700">Output</label>
                        <div className="flex gap-2">
                            <button
                                onClick={formatJson}
                                disabled={!input}
                                className="text-xs bg-blue-50 text-blue-600 px-3 py-1 rounded-full hover:bg-blue-100 disabled:opacity-50 flex items-center gap-1"
                            >
                                <AlignLeft className="h-3 w-3" /> Format
                            </button>
                            <button
                                onClick={minifyJson}
                                disabled={!input}
                                className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full hover:bg-gray-200 disabled:opacity-50 flex items-center gap-1"
                            >
                                <Minimize2 className="h-3 w-3" /> Minify
                            </button>
                            <button
                                onClick={copyToClipboard}
                                disabled={!output}
                                className="text-xs bg-green-50 text-green-600 px-3 py-1 rounded-full hover:bg-green-100 disabled:opacity-50 flex items-center gap-1"
                            >
                                {copied ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                                {copied ? 'Copied' : 'Copy'}
                            </button>
                        </div>
                    </div>

                    <div className={`flex-1 w-full rounded-xl border border-gray-200 bg-gray-50 overflow-hidden relative ${error ? 'border-red-300 bg-red-50' : ''}`}>
                        {error ? (
                            <div className="p-4 text-red-600 text-sm font-mono flex items-start gap-2">
                                <AlertTriangle className="h-5 w-5 shrink-0" />
                                <span className="break-all">{error}</span>
                            </div>
                        ) : (
                            <textarea
                                readOnly
                                value={output}
                                className="w-full h-full p-4 bg-transparent resize-none outline-none font-mono text-sm text-gray-800"
                                placeholder="Result will appear here..."
                            />
                        )}
                    </div>
                </div>

            </div>
        </ToolLayout>
    );
}
