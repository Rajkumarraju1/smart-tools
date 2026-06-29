import type { Metadata } from 'next';
import ToolLayout from '@/components/ToolLayout';
import Link from 'next/link';
import { FileJson, Binary, Minimize, Code2 } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Developer Tools - JSON, Base64 & Code Minification',
    description: 'Format JSON, encode/decode Base64 strings, and minify CSS/JS files locally and securely. 100% free developer utility playground.',
    keywords: ['developer tools', 'json formatter', 'base64 converter', 'code minifier', 'web developer tools'],
    alternates: {
        canonical: '/tools/dev',
    },
};

const devTools = [
    {
        title: 'JSON Formatter',
        description: 'Format, validate, and minify your JSON data.',
        icon: FileJson,
        href: '/tools/dev/json-formatter',
        color: 'bg-yellow-100 text-yellow-600',
    },
    {
        title: 'Base64 Converter',
        description: 'Encode and decode text to Base64 format.',
        icon: Binary,
        href: '/tools/dev/base64',
        color: 'bg-cyan-100 text-cyan-600',
    },
    {
        title: 'CSS/JS Minifier',
        description: 'Minify your code to reduce file size.',
        icon: Minimize,
        href: '/tools/dev/minifier',
        color: 'bg-rose-100 text-rose-600',
    },
];

export default function DevToolsPage() {
    return (
        <ToolLayout
            title="Developer Tools"
            description="Essential tools for developers to debug and optimize code."
            icon={Code2}
            category="Utility"
            extraContent={
                <div className="prose prose-blue max-w-none text-gray-600 mt-12 bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                    <h2>Advanced Local Developer Utilities</h2>
                    <p>Modern software development requires a diverse array of specialized utilities to debug payload responses, optimize production code, and encode generic assets. However, constantly switching context between clunky terminal commands or wildly unsafe online playgrounds severely breaks developer momentum. The ByteForge AI system powers this robust Developer Tools suite to provide entirely local, instantaneous data structural manipulation directly inside your secure browser sandbox.</p>
                    
                    <h3>Zero-Trust Data Processing</h3>
                    <p>Pasting highly proprietary source code, critical API keys wrapped in backend JSON responses, or sensitive Base64 authentication strings into random internet utilities is a devastating security liability. <strong>We engineered our developer tools with an absolute zero-trust framework.</strong> All parsing, minification, and cryptographic encoding strictly occur inside your local DOM using browser-based JavaScript engines. Your sensitive corporate payloads intentionally never touch a remote backend server or invisible telemetry hook.</p>

                    <h3>Explore the Developer Toolkit</h3>
                    <ul>
                        <li><strong>JSON Formatter & Validator:</strong> Manually debugging deeply nested unformatted JSON payloads is utterly impossible. Our formatter instantly cleans up chaotic strings, applies strict RFC 8259 syntax validation to catch missing commas, and deeply beautifies the resulting object for rapid human inspection.</li>
                        <li><strong>Base64 String Encoder:</strong> Securely translate raw binary data, authentication payloads, and raw text into universally safe ASCII string formats specifically required for URL transmission or complex Authorization headers without external API dependencies.</li>
                        <li><strong>CSS & JS Minifier:</strong> Preparing your static website for extreme production deployment requires brutally crushing your source code. Our aggressive client-side regex minifiers rapidly strip whitespace, obliterate comments, and consolidate rule sets to vastly shrink your physical file sizes, helping you effortlessly conquer strict Google Core Web Vitals thresholds.</li>
                    </ul>

                    <h3>The ByteForge Guarantee</h3>
                    <p>ByteForge AI guarantees that these specific developer utilities will indefinitely remain frictionless, absolutely free, and completely devoid of artificial request limits. Whether you need to swiftly format a massive megabyte-scale JSON log dump or instantly minify an isolated script, our toolchain ensures your sensitive operational workflows remain highly efficient, flawlessly secure, and entirely self-contained.</p>
                </div>
            }
        >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                {devTools.map((tool) => (
                    <Link
                        key={tool.title}
                        href={tool.href}
                        className="flex items-start p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md hover:border-blue-100 transition-all group"
                    >
                        <div className={`p-3 rounded-lg ${tool.color} mr-4 group-hover:scale-110 transition-transform`}>
                            <tool.icon className="h-6 w-6" />
                        </div>
                        <div>
                            <h3 className="font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                                {tool.title}
                            </h3>
                            <p className="text-sm text-gray-500">{tool.description}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </ToolLayout>
    );
}
