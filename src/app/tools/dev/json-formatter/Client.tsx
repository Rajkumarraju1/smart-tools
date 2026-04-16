'use client';

import React, { useState } from 'react';
import { FileJson, Copy, Trash2, Check, AlertTriangle, Minimize2, AlignLeft } from 'lucide-react';
import ToolLayout from '@/components/ToolLayout';

export default function JsonFormatterClient() {
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
            title="JSON Formatter Online Free (Validator)"
            description="Format, validate, and minify your JSON data instantly."
            icon={FileJson}
            category="Utility"
            introContent={<p>Need a fast, totally private <strong>JSON formatter online free</strong>? Look no further. Avoid pasting your ultra-sensitive corporate API keys into random web servers. ByteForge AI provides this completely local text beautifier and strict syntax validator perfectly crafted for professional engineers.</p>}
            extraContent={
                <>
                    <h2>Free Online JSON Formatter & Validator</h2>
                    <p>JavaScript Object Notation (JSON) has rapidly become the undisputed global standard for modern data transmission, silently powering all web APIs, massive NoSQL databases, and complex application config files. However, computers generally prefer reading heavily minified JSON (which looks like a giant, unreadable block of text) to drastically save bandwidth. Our completely Free Online JSON Formatter effortlessly bridges this gap, allowing developers to instantly automatically format, brilliantly beautify, strictly validate, and efficiently minify cumbersome JSON strings directly inside their browser.</p>

                    <h2>Core Developer Features</h2>
                    <ul>
                        <li><strong>Intelligent Formatting (Beautify):</strong> Instantly transform a chaotic, illegible wall of text into a meticulously structured, perfectly indented, human-readable hierarchy. We automatically apply industry-standard 2-space indentation to drastically improve readability.</li>
                        <li><strong>Strict Data Validation:</strong> Our underlying engine acts as a rigorous JSON linter. If your heavily nested JSON contains a catastrophic syntax error—like a notoriously missing comma, an unescaped quote, or a critical trailing comma—our tool immediately halts and pinpoints the exact nature of the JavaScript exception, saving you hours of frustrating debugging.</li>
                        <li><strong>Aggressive Minification:</strong> When your flawless code is finally ready for a massive production deployment, you can utilize the 'Minify' function to systematically strip away every single unnecessary space, carriage return, and tab characters. This actively reduces your overall file size and drastically improves your API response latency.</li>
                    </ul>

                    <h2>How to Utilize This Engineering Tool</h2>
                    <ol>
                        <li><strong>Input Data:</strong> Boldly paste your unformatted JSON payload directly into the 'Input JSON' window positioned on the left side of your screen.</li>
                        <li><strong>Select Operation:</strong> Rigorously click the 'Format' button to automatically beautify the data structure, or firmly click the 'Minify' button to crush the payload down to an absolutely minimal size.</li>
                        <li><strong>Handle Errors:</strong> If an unmistakable red alert box dynamically appears, carefully read the provided exception message to successfully locate and manually fix your structural syntax errors.</li>
                        <li><strong>Export Result:</strong> Swiftly click the convenient 'Copy' button located on the right side to seamlessly transfer the processed data straight to your clipboard.</li>
                    </ol>

                    <h2>Frequently Asked Questions (FAQ)</h2>
                    <h3>Are my incredibly sensitive API keys and massive customer databases secure?</h3>
                    <p><strong>Yes, 100% Secure.</strong> As developers ourselves, we understand the critical nature of private data payloads. That is exactly why this specific JSON Formatter is engineered to execute entirely locally via client-side processing within your own web browser. Your private JSON payloads, highly sensitive API tokens, and confidential customer parameters are structurally never uploaded to any remote server or third-party API.</p>

                    <h3>Why is my JSON failing strict validation?</h3>
                    <p>The vast majority of frustrating JSON validation failures originate from three incredibly common typographical mistakes: leaving a strict "trailing comma" at the very end of an array or object block, incorrectly utilizing single quotes ('value') instead of technically required double quotes ("value"), or recklessly leaving invisible unescaped characters hidden within complex data strings.</p>
                </>
            }
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
