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
            extraContent={
                <>
                    <h2>Free Online Loan Payment Calculator</h2>
                    <p>Navigating the complex world of finance, specifically borrowing money, can be incredibly daunting. Whether you are preparing to purchase a new car, financing a dream home with a mortgage, taking out student loans for university, or consolidating high-interest credit card debt, understanding exactly how much you will pay every month is critically important. Our free online Loan Calculator takes the guesswork out of your financial planning by instantly computing your exact monthly payment, total interest cumulative charges, and overall repayment cost.</p>
                    
                    <h2>How Does Loan Amortization Work?</h2>
                    <p>When you take out a standard fixed-rate loan, your monthly payments are typically identical throughout the life of the loan. This process is called <strong>Amortization</strong>. However, the composition of that payment shifts dramatically over time. In the early years of your loan, the vast majority of your monthly payment goes toward paying off the accrued interest, with only a small fraction reducing the actual principal balance. As you slowly chip away at the principal, the interest calculated per month decreases, meaning a larger portion of your later payments finally goes toward outright eliminating the remaining balance.</p>

                    <h2>How to Use This Financial Tool</h2>
                    <ol>
                        <li><strong>Input the Loan Amount:</strong> Enter the precise total principal amount you intend to rigorously borrow (e.g., 250000 for a mortgage).</li>
                        <li><strong>Set the Interest Rate:</strong> Enter the Annual Percentage Rate (APR) offered by your chosen bank or lender. Ensure you enter the annual rate, not a monthly rate.</li>
                        <li><strong>Enter the Loan Term:</strong> Specify the duration of the loan precisely in years (e.g., 5 for a typical auto loan, or 30 for a standard real estate mortgage).</li>
                        <li><strong>Analyze the Results:</strong> The calculator instantly outputs your required monthly payment. Crucially, it also reveals the "Total Interest," illuminating exactly how much extra money the bank will make from you over the loan's rigorous lifespan.</li>
                    </ol>

                    <h2>Key Financial Terms to Understand</h2>
                    <ul>
                        <li><strong>Principal:</strong> The original bulk sum of money you borrow from a lender, before any interest is applied.</li>
                        <li><strong>Interest Rate (APR):</strong> The strict cost of borrowing the principal money, expressed as an annual percentage. A lower rate significantly reduces your long-term total cost.</li>
                        <li><strong>Loan Term:</strong> The agreed-upon length of time you have to entirely repay the loan. Longer terms vastly lower your monthly payment but drastically increase the total interest paid over time.</li>
                        <li><strong>Amortization:</strong> The mathematical schedule of reliably paying off a debt with fixed repayment intervals over time.</li>
                    </ul>

                    <h2>Frequently Asked Questions (FAQ)</h2>
                    <h3>Does a longer loan term save me money?</h3>
                    <p>No. While a longer term (e.g., 72 months instead of 48 months for a car loan) will noticeably make your <em>monthly</em> payment smaller and seemingly more affordable, it drastically increases the <em>total interest</em> you pay over the life of the loan. You will ultimately pay much more money for the exact same asset.</p>

                    <h3>Should I pay off my loan early?</h3>
                    <p>Generally, yes! Any extra payments you make are typically applied directly against the underlying principal balance. By reducing the principal faster than scheduled, you accrue less interest in subsequent months, directly saving you money and shortening the loan term. However, always thoroughly check your specific loan contract for hidden "prepayment penalties."</p>

                    <h3>Is the math in this calculator exact?</h3>
                    <p>The mathematical formulas utilized by our code identically match the standard amortization formulas used by global banking institutions. However, your final exact payment might vary by a few pennies due to rounding, or if your bank applies specific obscure origination fees, specific compounding intervals, or mandatory insurances (like PMI).</p>
                </>
            }
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
