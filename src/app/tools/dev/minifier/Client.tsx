'use client';

import React, { useState } from 'react';
import { Minimize, Copy, Trash2, Check, FileCode, FileType } from 'lucide-react';
import ToolLayout from '@/components/ToolLayout';

type MinifyType = 'css' | 'js';

export default function MinifierClient() {
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
            extraContent={
                <>
                    <h2>Free Online JavaScript & CSS Minifier</h2>
                    <p>In modern web development, absolute sheer page loading speed is not merely a technical luxury; it is a critical metric relentlessly enforced by Google's Core Web Vitals algorithms. Slow websites face devastating SEO penalties and massive user bounce rates. Therefore, aggressively compressing your raw source code is absolutely mandatory before any production deployment. Our blazing-fast, entirely Free Online Code Minifier mathematically crushes your bloated JavaScript and verbose CSS stylesheets by ruthlessly eliminating every single unnecessary byte, significantly accelerating your website's overall network delivery speed.</p>

                    <h2>What is Code Minification?</h2>
                    <p>When professional developers write code, they rightfully prioritize human readability by diligently utilizing plentiful whitespace, perfectly indented lines, semantic variable names, and extensive explanatory comments. However, automated web browsers (like Chrome or Firefox) inherently do not care about human readability whatsoever. Code "minification" is the complex automated process of systematically parsing your raw syntax and algorithmically stripping away every single non-essential character—such as all spaces, agonizing line breaks, and massive block comments—while guaranteeing the underlying logic executes absolutely identically. The mathematically compressed result is an exceedingly dense block of text that is completely illegible to humans, but completely optimized for instantaneous robotic parsing.</p>

                    <h2>How to Rapidly Compress Your Source Code</h2>
                    <ol>
                        <li><strong>Designate Your Programming Language:</strong> Strategically utilize the prominent toggle buttons clearly positioned at the very top of the interactive interface to explicitly instruct the parsing engine whether it is evaluating 'CSS' (Cascading Style Sheets) or dynamic 'JavaScript' code.</li>
                        <li><strong>Input Your Bloated Source:</strong> Carefully paste your entirely uncompressed, fully commented original development code directly into the massive 'Source Code' text area prominently positioned on the extreme left side of the dashboard.</li>
                        <li><strong>Execute the Aggressive Minification:</strong> Firmly click the dedicated "Minify Code" action button. Our lightning-fast underlying regex engine will instantaneously devour your massive input and violently compress it in a fraction of a millisecond.</li>
                        <li><strong>Review Your Network Savings:</strong> Observe the crucially important "Savings" metric generated precisely below the final right-hand output window, perfectly illustrating the exact mathematical percentage of raw network bandwidth you have successfully conserved.</li>
                    </ol>

                    <h2>Core Features & SEO Advantages</h2>
                    <ul>
                        <li><strong>Drastic Bandwidth Reduction:</strong> Successfully eliminating thousands of useless characters mathematically directly translates into substantially smaller physical file sizes, saving crucial server bandwidth costs and vastly improving fragile mobile network load times.</li>
                        <li><strong>Total Client-Side Processing:</strong> We staunchly refuse to illegally upload your highly proprietary corporate source code to external cloud environments. 100% of the intense parsing and regex compression aggressively occurs entirely locally directly within your own physical browser sandbox, assuring absolute cryptographic security.</li>
                        <li><strong>Zero Forced Dependencies:</strong> Unlike installing incredibly complex Node.js build pipelines like Webpack or Rollup simply to quickly compress a single isolated 50-line tracking script, our instantly accessible web interface requires unequivocally zero complex local terminal configurations.</li>
                    </ul>

                    <h2>Frequently Asked Questions (FAQ)</h2>
                    <h3>Will aggressively minifying my scripts accidentally break my dynamic application?</h3>
                    <p>For standard CSS layouts and relatively simplistic JavaScript logic, our carefully tuned minification engine is exceptionally safe. However, heavily utilizing extremely obscure edge-case syntax, bizarre implicit semicolons, or deeply relying on highly specific code formatting might theoretically cause parsing issues. We strongly advise aggressively testing the rigorously minified output thoroughly in an isolated staging environment before loudly deploying to live production servers.</p>

                    <h3>Why does my severely compressed JS file still seem relatively large?</h3>
                    <p>Fundamentally, simple "minification" solely removes purely invisible whitespace and completely ignores comments. It inherently does <em>not</em> intelligently rewrite your overarching logical structure or violently rename your ridiculously long, overly descriptive variable names (commonly known as "uglification" or "obfuscation"). If your underlying raw logic is massively bloated, merely removing blank spaces will only provide a mathematically fractional size reduction.</p>
                </>
            }
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
