'use client';

import React, { useState } from 'react';
import { Binary, Copy, Trash2, ArrowLeftRight, Check, AlertTriangle } from 'lucide-react';
import ToolLayout from '@/components/ToolLayout';

type Mode = 'encode' | 'decode';

export default function Base64Page() {
    const [input, setInput] = useState('');
    const [output, setOutput] = useState('');
    const [mode, setMode] = useState<Mode>('encode');
    const [error, setError] = useState<string | null>(null);
    const [copied, setCopied] = useState(false);

    const processText = (text: string, currentMode: Mode) => {
        if (!text) {
            setOutput('');
            setError(null);
            return;
        }

        try {
            if (currentMode === 'encode') {
                setOutput(btoa(text));
            } else {
                setOutput(atob(text));
            }
            setError(null);
        } catch (err) {
            setError('Invalid Base64 string');
            setOutput('');
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const newVal = e.target.value;
        setInput(newVal);
        processText(newVal, mode);
    };

    const toggleMode = () => {
        const newMode = mode === 'encode' ? 'decode' : 'encode';
        setMode(newMode);
        // Optional: swap input/output or just re-process input?
        // Re-processing input with new mode makes sense.
        processText(input, newMode);
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
            title="Base64 Converter"
            description="Encode and decode text to Base64 format instantly."
            icon={Binary}
            category="Utility"
            extraContent={
                <>
                    <h2>Free Online Base64 Encoder & Decoder</h2>
                    <p>Base64 is a widely utilized binary-to-text encoding scheme specifically designed to represent raw binary data (like images or compiled code) in an ASCII string format. Whether you are a senior software developer debugging complex API responses, a security researcher analyzing encoded payloads, or a webmaster securely embedding localized image assets into CSS files, our completely Free Online Base64 Converter provides instantaneous, error-free encoding and decoding directly in your web browser.</p>

                    <h2>How Base64 Encoding Works</h2>
                    <p>At its core, Base64 systematically translates data by treating it as a continuous stream of binary bits. It mathematically groups these microscopic bits into standardized 6-bit increments, and explicitly maps every single group to one of 64 carefully selected alphanumeric characters (A-Z, a-z, 0-9, +, and /). Because this specific alphabet is universally supported by absolutely every network protocol and computer system on Earth, it prevents critical data corruption during transmission across fundamentally different legacy systems (like ancient email servers).</p>

                    <h2>How to Use This Developer Tool</h2>
                    <ol>
                        <li><strong>Select Your Mode:</strong> Utilize the prominent toggle buttons at the top of the interface to choose either 'Encode' (translating plain text into Base64) or 'Decode' (translating Base64 back into highly readable plain text).</li>
                        <li><strong>Paste Your Data:</strong> Paste your targeted text string or encrypted Base64 block directly into the large left-hand input area labeled 'Source'.</li>
                        <li><strong>Instant Execution:</strong> Our highly optimized JavaScript engine automatically and instantly processes the data the millisecond you paste it. You do not even need to click a submit button.</li>
                        <li><strong>Copy the Result:</strong> Instantly click the convenient 'Copy' button located above the right-hand 'Result' window to perfectly transfer the exact output directly to your system clipboard.</li>
                    </ol>

                    <h2>Frequently Asked Questions (FAQ)</h2>
                    <h3>Is Base64 encoding actually a form of secure cryptography or encryption?</h3>
                    <p><strong>Absolutely not.</strong> This is an incredibly common, highly dangerous misconception. Base64 is strictly an <em>encoding</em> format explicitly designed for maximum data compatibility, not security. There are mathematically no passwords, secret keys, or cryptographic hashes involved. Anyone who intercept your Base64 string can effortlessly decode it using this exact free website. Never use Base64 to "secure" sensitive passwords or personal financial data.</p>

                    <h3>Why does my decoded Base64 text look like completely random gibberish?</h3>
                    <p>If you successfully decode a Base64 string but the resulting output appears to be unreadable symbols (like ), it strongly indicates that the original underlying data was not standard plain text. It is highly likely that the encoded file was actually a compiled binary asset, such as a compressed ZIP file, a compiled executable application (.exe), or a raw graphical image (like a JPG or PNG), rather than a textual message.</p>
                </>
            }
        >
            <div className="w-full max-w-5xl mx-auto space-y-6">

                {/* Controls */}
                <div className="flex flex-col sm:flex-row justify-between items-center bg-gray-50 p-4 rounded-xl border border-gray-200 gap-4">
                    <div className="flex items-center gap-4 bg-white p-1 rounded-lg border border-gray-200">
                        <button
                            onClick={() => { setMode('encode'); processText(input, 'encode'); }}
                            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${mode === 'encode' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-50'}`}
                        >
                            Encode
                        </button>
                        <button
                            onClick={() => { setMode('decode'); processText(input, 'decode'); }}
                            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${mode === 'decode' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-50'}`}
                        >
                            Decode
                        </button>
                    </div>

                    <button onClick={clearAll} className="text-sm text-red-500 hover:text-red-600 flex items-center gap-1 font-medium">
                        <Trash2 className="h-4 w-4" /> Clear All
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-[500px]">
                    {/* Input */}
                    <div className="flex flex-col h-full space-y-2">
                        <label className="text-sm font-semibold text-gray-700">
                            {mode === 'encode' ? 'Text Source' : 'Base64 Source'}
                        </label>
                        <textarea
                            value={input}
                            onChange={handleInputChange}
                            placeholder={mode === 'encode' ? "Type text to encode..." : "Paste Base64 to decode..."}
                            className="flex-1 w-full p-4 rounded-xl border border-gray-200 focus:ring-4 focus:ring-blue-100 focus:border-blue-300 outline-none resize-none bg-white font-mono text-sm"
                        />
                    </div>

                    {/* Output */}
                    <div className="flex flex-col h-full space-y-2">
                        <div className="flex justify-between items-center px-1">
                            <label className="text-sm font-semibold text-gray-700">
                                {mode === 'encode' ? 'Base64 Result' : 'Plain Text Result'}
                            </label>
                            <button
                                onClick={copyToClipboard}
                                disabled={!output}
                                className="text-xs bg-green-50 text-green-600 px-3 py-1 rounded-full hover:bg-green-100 disabled:opacity-50 flex items-center gap-1"
                            >
                                {copied ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                                {copied ? 'Copied' : 'Copy'}
                            </button>
                        </div>

                        <div className={`flex-1 w-full rounded-xl border border-gray-200 bg-gray-50 overflow-hidden relative ${error ? 'border-red-300 bg-red-50' : ''}`}>
                            {error ? (
                                <div className="p-4 text-red-600 text-sm font-mono flex items-start gap-2">
                                    <AlertTriangle className="h-5 w-5 shrink-0" />
                                    <span>{error}</span>
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

            </div>
        </ToolLayout>
    );
}
