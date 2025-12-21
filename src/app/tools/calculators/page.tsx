'use client';

import ToolLayout from '@/components/ToolLayout';
import Link from 'next/link';
import { Activity, Calendar, DollarSign, Calculator } from 'lucide-react';

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
