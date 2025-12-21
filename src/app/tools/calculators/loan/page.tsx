'use client';

import React, { useState, useEffect } from 'react';
import { DollarSign, PieChart, Info, Table as TableIcon } from 'lucide-react';
import ToolLayout from '@/components/ToolLayout';

export default function LoanCalculatorPage() {
    const [amount, setAmount] = useState('10000');
    const [rate, setRate] = useState('5.5');
    const [term, setTerm] = useState('5');
    const [monthlyPayment, setMonthlyPayment] = useState<number | null>(null);
    const [totalInterest, setTotalInterest] = useState<number | null>(null);
    const [totalPayment, setTotalPayment] = useState<number | null>(null);

    useEffect(() => {
        calculateLoan();
    }, [amount, rate, term]);

    const calculateLoan = () => {
        const p = parseFloat(amount);
        const r = parseFloat(rate) / 100 / 12;
        const n = parseFloat(term) * 12;

        if (!p || !r || !n) return;

        // M = P [ i(1 + i)^n ] / [ (1 + i)^n – 1 ]
        const m = p * (r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);

        const total = m * n;
        const interest = total - p;

        setMonthlyPayment(parseFloat(m.toFixed(2)));
        setTotalPayment(parseFloat(total.toFixed(2)));
        setTotalInterest(parseFloat(interest.toFixed(2)));
    };

    return (
        <ToolLayout
            title="Loan Calculator"
            description="Estimate your monthly loan payments, total interest, and amortization."
            icon={DollarSign}
            category="Utility"
        >
            <div className="w-full max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

                {/* Input Section */}
                <div className="space-y-6">
                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm space-y-6">
                        <h3 className="font-bold text-gray-800 flex items-center gap-2">
                            <DollarSign className="h-5 w-5 text-blue-600" /> Loan Details
                        </h3>

                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-gray-700">Loan Amount ($)</label>
                            <input
                                type="number"
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                                className="w-full p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-gray-700">Interest Rate (%)</label>
                            <input
                                type="number"
                                value={rate}
                                onChange={(e) => setRate(e.target.value)}
                                className="w-full p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-gray-700">Loan Term (Years)</label>
                            <input
                                type="number"
                                value={term}
                                onChange={(e) => setTerm(e.target.value)}
                                className="w-full p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none"
                            />
                        </div>
                    </div>
                </div>

                {/* Results Section */}
                <div className="space-y-4">
                    {monthlyPayment && (
                        <div className="bg-blue-600 text-white p-8 rounded-2xl shadow-xl shadow-blue-200 text-center space-y-2">
                            <div className="text-blue-200 uppercase tracking-wider text-xs font-bold">Monthly Payment</div>
                            <div className="text-5xl font-extrabold">${monthlyPayment.toLocaleString()}</div>
                        </div>
                    )}

                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 text-center">
                            <div className="text-xs text-gray-500 font-semibold uppercase mb-1">Total Principal</div>
                            <div className="text-lg font-bold text-gray-900">${parseFloat(amount).toLocaleString()}</div>
                        </div>
                        <div className="bg-orange-50 p-4 rounded-xl border border-orange-100 text-center">
                            <div className="text-xs text-orange-600 font-semibold uppercase mb-1">Total Interest</div>
                            <div className="text-lg font-bold text-orange-800">${totalInterest?.toLocaleString()}</div>
                        </div>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 flex justify-between items-center">
                        <span className="text-sm font-bold text-gray-600">Total Calculation</span>
                        <span className="text-xl font-bold text-gray-900">${totalPayment?.toLocaleString()}</span>
                    </div>

                    <button className="w-full py-3 bg-white border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 flex items-center justify-center gap-2 transition-colors">
                        <TableIcon className="h-4 w-4" /> View Amortization Schedule
                    </button>
                </div>

            </div>
        </ToolLayout>
    );
}
