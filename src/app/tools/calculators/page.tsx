import type { Metadata } from 'next';
import ToolLayout from '@/components/ToolLayout';
import Link from 'next/link';
import { Activity, Calendar, DollarSign, Calculator } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Online Calculators - BMI, Age & Loan Payments',
    description: 'Calculate BMI, age, and loan estimates instantly. Secure, accurate, and completely free online calculators.',
    keywords: ['online calculators', 'bmi calculator', 'age calculator', 'loan calculator', 'finance calculator'],
    alternates: {
        canonical: '/tools/calculators',
    },
};

const calculators = [
    {
        title: 'BMI Calculator',
        description: 'Calculate Body Mass Index and check your health status.',
        icon: Activity,
        href: '/tools/calculators/bmi',
        color: 'bg-green-100 text-green-600',
    },
    {
        title: 'Age Calculator',
        description: 'Calculate your exact age in years, months, and days.',
        icon: Calendar,
        href: '/tools/calculators/age',
        color: 'bg-blue-100 text-blue-600',
    },
    {
        title: 'Loan Calculator',
        description: 'Estimate monthly loan payments and total interest.',
        icon: DollarSign,
        href: '/tools/calculators/loan',
        color: 'bg-yellow-100 text-yellow-600',
    },
];

export default function CalculatorsPage() {
    return (
        <ToolLayout
            title="Calculators"
            description="Quick and accurate calculators for health, finance, and dates."
            icon={Calculator}
            category="Utility"
            extraContent={
                <div className="prose prose-blue max-w-none text-gray-600 mt-12 bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                    <h2>Advanced Algorithmic Calculation Hub</h2>
                    <p>Mathematical calculations, whether evaluating complex financial loan amortizations or tracking precise biometric health data, require flawless algorithmic execution. Relying on basic smartphone calculators for deep life-planning metrics frequently leads to catastrophic human error. The ByteForge AI system strictly governs our dedicated suite of Calculators to instantly deliver precise, mathematically rigorous, and totally secure data resolutions directly to your screen.</p>
                    
                    <h3>Private Analytical Processing</h3>
                    <p>Personal financial limits and intrinsic physical health metrics are profoundly private data points. We explicitly reject the aggressive data harvest prevalent across the open web. Using strict WebAssembly and pure client-side mathematical logic, our calculators process your sensitive numbers exclusively on your own personal device. Your weight, age parameters, and private loan intents are absolutely never logged to a remote analytics database or sold to predatory financial marketers.</p>

                    <h3>Explore Our Critical Calculators</h3>
                    <ul>
                        <li><strong>Loan & Amortization Calculator:</strong> Predatory lending fundamentally thrives on numerical obscurity. Our rigorous financial engine instantly translates your target principal, requested interest rate, and precise term durations into a crystal-clear amortization repayment schedule, fiercely illuminating exactly how much total interest the bank will ultimately charge you.</li>
                        <li><strong>Clinical BMI Calculator:</strong> Instantly process your precise biometric inputs (height and weight ratios) through standard WHO (World Health Organization) metrics to receive an immediate, mathematically sound baseline understanding of your current physical health category.</li>
                        <li><strong>Chronological Age Calculator:</strong> Quickly determining the mathematically exact chronological duration between two disparate historical dates is overwhelmingly tedious to calculate manually. Automatically generate flawless age readouts detailing the precise years, months, and days for professional demographic cataloging or simple event planning.</li>
                    </ul>

                    <h3>The ByteForge Guarantee</h3>
                    <p>Engineered strictly by ByteForge AI for maximum numeric exactitude and unconditional privacy, this entirely comprehensive calculation suite definitively ensures you can confidently make crucial life and financial planning decisions free of tracking scripts, mandatory paywalls, or deceptive data collection techniques.</p>
                </div>
            }
        >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                {calculators.map((tool) => (
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
