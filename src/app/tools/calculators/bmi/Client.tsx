'use client';

import React, { useState, useEffect } from 'react';
import { Activity } from 'lucide-react';
import ToolLayout from '@/components/ToolLayout';

export default function BMICalculatorClient() {
    const [unit, setUnit] = useState<'metric' | 'imperial'>('metric');
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [bmi, setBmi] = useState<number | null>(null);
    const [category, setCategory] = useState<string>('');

    useEffect(() => {
        calculateBMI();
    }, [height, weight, unit]);

    const calculateBMI = () => {
        const h = parseFloat(height);
        const w = parseFloat(weight);

        if (!h || !w || h <= 0 || w <= 0) {
            setBmi(null);
            setCategory('');
            return;
        }

        let bmiValue = 0;
        if (unit === 'metric') {
            // kg / m^2 (input cm, convert to m)
            bmiValue = w / Math.pow(h / 100, 2);
        } else {
            // lb / in^2 * 703
            bmiValue = (w / Math.pow(h, 2)) * 703;
        }

        setBmi(parseFloat(bmiValue.toFixed(1)));

        if (bmiValue < 18.5) setCategory('Underweight');
        else if (bmiValue < 25) setCategory('Normal weight');
        else if (bmiValue < 30) setCategory('Overweight');
        else setCategory('Obese');
    };

    const getCategoryColor = (cat: string) => {
        if (cat === 'Underweight') return 'text-blue-600 bg-blue-50 border-blue-200';
        if (cat === 'Normal weight') return 'text-green-600 bg-green-50 border-green-200';
        if (cat === 'Overweight') return 'text-orange-600 bg-orange-50 border-orange-200';
        return 'text-red-600 bg-red-50 border-red-200';
    };

    return (
        <ToolLayout
            title="BMI Calculator"
            description="Calculate your Body Mass Index (BMI) and find your healthy weight range."
            icon={Activity}
            category="Utility"
        >
            <div className="w-full max-w-2xl mx-auto space-y-8">

                {/* Unit Toggle */}
                <div className="flex justify-center">
                    <div className="bg-gray-100 p-1 rounded-xl flex">
                        <button
                            onClick={() => { setUnit('metric'); setHeight(''); setWeight(''); }}
                            className={`px-6 py-2 rounded-lg text-sm font-medium transition-all ${unit === 'metric' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
                        >
                            Metric (cm/kg)
                        </button>
                        <button
                            onClick={() => { setUnit('imperial'); setHeight(''); setWeight(''); }}
                            className={`px-6 py-2 rounded-lg text-sm font-medium transition-all ${unit === 'imperial' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
                        >
                            Imperial (in/lb)
                        </button>
                    </div>
                </div>

                {/* Inputs */}
                <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700"> Height ({unit === 'metric' ? 'cm' : 'in'})</label>
                        <input
                            type="number"
                            value={height}
                            onChange={(e) => setHeight(e.target.value)}
                            placeholder={unit === 'metric' ? "175" : "69"}
                            className="w-full p-4 rounded-xl border border-gray-200 focus:ring-4 focus:ring-blue-100 focus:border-blue-300 outline-none text-center text-lg shadow-sm"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700"> Weight ({unit === 'metric' ? 'kg' : 'lbs'})</label>
                        <input
                            type="number"
                            value={weight}
                            onChange={(e) => setWeight(e.target.value)}
                            placeholder={unit === 'metric' ? "70" : "154"}
                            className="w-full p-4 rounded-xl border border-gray-200 focus:ring-4 focus:ring-blue-100 focus:border-blue-300 outline-none text-center text-lg shadow-sm"
                        />
                    </div>
                </div>

                {/* Result */}
                {bmi !== null && (
                    <div className={`p-8 rounded-2xl border-2 text-center space-y-2 animate-in fade-in zoom-in duration-300 ${getCategoryColor(category)}`}>
                        <div className="text-sm font-semibold uppercase tracking-wide opacity-80">Your BMI Score</div>
                        <div className="text-6xl font-extrabold">{bmi}</div>
                        <div className="text-xl font-medium">{category}</div>
                    </div>
                )}

                {/* Info Table */}
                <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
                    <table className="w-full text-sm text-left">
                        <thead className="bg-gray-50 text-gray-500 font-medium">
                            <tr>
                                <th className="px-6 py-3">Category</th>
                                <th className="px-6 py-3">BMI Range</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            <tr>
                                <td className="px-6 py-3 text-blue-600 font-medium">Underweight</td>
                                <td className="px-6 py-3 text-gray-600">&lt; 18.5</td>
                            </tr>
                            <tr>
                                <td className="px-6 py-3 text-green-600 font-medium">Normal weight</td>
                                <td className="px-6 py-3 text-gray-600">18.5 - 24.9</td>
                            </tr>
                            <tr>
                                <td className="px-6 py-3 text-orange-600 font-medium">Overweight</td>
                                <td className="px-6 py-3 text-gray-600">25 - 29.9</td>
                            </tr>
                            <tr>
                                <td className="px-6 py-3 text-red-600 font-medium">Obese</td>
                                <td className="px-6 py-3 text-gray-600">&ge; 30</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
        </ToolLayout>
    );
}
