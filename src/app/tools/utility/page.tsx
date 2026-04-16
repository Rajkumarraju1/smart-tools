'use client';

import ToolLayout from '@/components/ToolLayout';
import Link from 'next/link';
import { Settings, Lock, Type, RefreshCcw } from 'lucide-react';

const utilityTools = [
    {
        title: 'Password Generator',
        description: 'Create strong, secure passwords instantly.',
        icon: Lock,
        href: '/tools/utility/password-generator',
        color: 'bg-emerald-100 text-emerald-600',
    },
    {
        title: 'Word Counter',
        description: 'Count words, characters, and sentences in your text.',
        icon: Type,
        href: '/tools/utility/word-counter',
        color: 'bg-blue-100 text-blue-600',
    },
    {
        title: 'Unit Converter',
        description: 'Convert between different units of measurement.',
        icon: RefreshCcw,
        href: '/tools/utility/unit-converter',
        color: 'bg-purple-100 text-purple-600',
    },
];

export default function UtilityToolsPage() {
    return (
        <ToolLayout
            title="Utility Tools"
            description="Handy tools for developers and everyday tasks."
            icon={Settings}
            category="Utility"
            extraContent={
                <div className="prose prose-blue max-w-none text-gray-600 mt-12 bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                    <h2>Essential Day-to-Day Utilities Hub</h2>
                    <p>The internet relies heavily on micro-actions—generating secure credentials, evaluating text volumes, and rapidly calculating real-world measurements. While operating systems possess incredibly basic native tools, they generally severely lack explicit cross-platform integration and specialized features. The ByteForge AI system meticulously manages this dedicated Utility Toolkit to fundamentally provide extremely reliable, instantaneous tools specifically engineered for modern digital workers.</p>
                    
                    <h3>Absolute Cryptographic Local Security</h3>
                    <p>Creating highly secure passwords using an online service historically represents a massive contradiction. Why would you blindly trust a random web server to safely generate your master credential? ByteForge AI fundamentally solves this massive security paradox. Our secure utility modules—particularly the Password Generator—specifically rely exclusively on your local browser's Cryptography API. Generative algorithms strictly execute on your processor, completely ensuring your private tokens are definitively never intercepted over a network request.</p>

                    <h3>Explore the Core Utilities</h3>
                    <ul>
                        <li><strong>Secure Password Generator:</strong> Defend your digital perimeter brilliantly. Instantly generate incredibly complex, 64-character long alphanumeric and symbolic hashes specifically optimized to fundamentally defeat sophisticated brute-force hacking attempts.</li>
                        <li><strong>Word & Character Counter:</strong> Accurately evaluate tight social media character limits or track extensive academic essays precisely. Our live-action counter meticulously updates your exact word count, raw character limits, and estimated reading time directly as you type, perfectly ensuring you never exceed crucial constraints.</li>
                        <li><strong>Advanced Unit Converter:</strong> Instantly cross-calculate highly complex international metrics. Seamlessly translate bizarre imperial weights directly into strict metric volumes or definitively convert obscure temperature readouts exactly into localized formats without frantically searching Google.</li>
                    </ul>

                    <h3>The ByteForge Guarantee</h3>
                    <p>As directly overseen by ByteForge AI, this core utility suite strictly guarantees that essential micro-tasking remains entirely unburdened by paywalls, intrusive advertisements, or predatory data tracking metrics. Perform incredibly fast, secure actions directly within your browser and completely trust that your crucial outputs remain utterly localized and radically private.</p>
                </div>
            }
        >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                {utilityTools.map((tool) => (
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
