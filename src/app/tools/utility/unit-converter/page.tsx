'use client';

import React, { useState, useEffect } from 'react';
import { RefreshCcw, ArrowRightLeft } from 'lucide-react';
import ToolLayout from '@/components/ToolLayout';

type Category = 'length' | 'weight' | 'temperature' | 'data';

const categories: Record<Category, string> = {
    length: 'Length',
    weight: 'Weight',
    temperature: 'Temperature',
    data: 'Data Storage'
};

const units: Record<Category, Record<string, string>> = {
    length: {
        m: 'Meters',
        km: 'Kilometers',
        cm: 'Centimeters',
        mm: 'Millimeters',
        ft: 'Feet',
        in: 'Inches',
        mi: 'Miles'
    },
    weight: {
        kg: 'Kilograms',
        g: 'Grams',
        mg: 'Milligrams',
        lb: 'Pounds',
        oz: 'Ounces'
    },
    temperature: {
        c: 'Celsius',
        f: 'Fahrenheit',
        k: 'Kelvin'
    },
    data: {
        b: 'Bytes',
        kb: 'Kilobytes',
        mb: 'Megabytes',
        gb: 'Gigabytes',
        tb: 'Terabytes'
    }
};

// Conversion rates to base unit (m, kg, c, b)
const rates: Record<Category, Record<string, number | ((val: number) => number)>> = {
    length: { m: 1, km: 1000, cm: 0.01, mm: 0.001, ft: 0.3048, in: 0.0254, mi: 1609.34 },
    weight: { kg: 1, g: 0.001, mg: 0.000001, lb: 0.453592, oz: 0.0283495 },
    temperature: {
        c: (val) => val,
        f: (val) => (val - 32) * 5 / 9,
        k: (val) => val - 273.15
    },
    data: { b: 1, kb: 1024, mb: 1048576, gb: 1073741824, tb: 1099511627776 }
};

// Base to target unit conversion
const fromBase: Record<Category, Record<string, number | ((val: number) => number)>> = {
    length: { m: 1, km: 0.001, cm: 100, mm: 1000, ft: 3.28084, in: 39.3701, mi: 0.000621371 },
    weight: { kg: 1, g: 1000, mg: 1000000, lb: 2.20462, oz: 35.274 },
    temperature: {
        c: (val) => val,
        f: (val) => (val * 9 / 5) + 32,
        k: (val) => val + 273.15
    },
    data: { b: 1, kb: 1 / 1024, mb: 1 / 1048576, gb: 1 / 1073741824, tb: 1 / 1099511627776 }
};

export default function UnitConverterPage() {
    const [category, setCategory] = useState<Category>('length');
    const [value1, setValue1] = useState<string>('1');
    const [unit1, setUnit1] = useState<string>('m');
    const [value2, setValue2] = useState<string>('');
    const [unit2, setUnit2] = useState<string>('ft');

    useEffect(() => {
        // Reset units when category changes
        const unitKeys = Object.keys(units[category]);
        setUnit1(unitKeys[0]);
        setUnit2(unitKeys[1] || unitKeys[0]);
        setValue1('1');
    }, [category]);

    useEffect(() => {
        convert(value1, unit1, unit2, setValue2);
    }, [value1, unit1, unit2, category]); // Re-run when inputs change

    const convert = (val: string, from: string, to: string, setFn: (v: string) => void) => {
        const num = parseFloat(val);
        if (isNaN(num)) {
            setFn('');
            return;
        }

        let baseValue;
        const toBaseRate = rates[category][from];

        // Check if rate is a function (for temperature)
        if (typeof toBaseRate === 'function') {
            baseValue = toBaseRate(num);
        } else {
            baseValue = num * toBaseRate;
        }

        let result;
        const fromBaseRate = fromBase[category][to];

        if (typeof fromBaseRate === 'function') {
            result = fromBaseRate(baseValue);
        } else {
            result = baseValue * fromBaseRate;
        }

        // Format result to avoid long decimals, but keep precision if needed
        setFn(Number.isInteger(result) ? result.toString() : result.toFixed(6).replace(/\.?0+$/, ''));
    };

    const handleSwap = () => {
        const tempUnit = unit1;
        setUnit1(unit2);
        setUnit2(tempUnit);
        setValue1(value2); // Optional: also swap values? Usually better to keep input value or swap and recompute.
        // Let's swap units and keep value1 as source
    };

    return (
        <ToolLayout
            title="Unit Converter"
            description="Convert between different units of length, weight, temperature, and more."
            icon={RefreshCcw}
            category="Utility"
        >
            <div className="w-full max-w-2xl mx-auto space-y-8">

                {/* Category Selector */}
                <div className="flex flex-wrap justify-center gap-2 p-1 bg-gray-100 rounded-xl">
                    {(Object.keys(categories) as Category[]).map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setCategory(cat)}
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${category === cat
                                    ? 'bg-white text-blue-600 shadow-sm'
                                    : 'text-gray-500 hover:text-gray-700'
                                }`}
                        >
                            {categories[cat]}
                        </button>
                    ))}
                </div>

                {/* Converter Area */}
                <div className="grid grid-cols-1 md:grid-cols-[1fr,auto,1fr] gap-4 items-center">
                    {/* Input 1 */}
                    <div className="space-y-2">
                        <label className="text-xs font-semibold text-gray-500 uppercase">From</label>
                        <input
                            type="number"
                            value={value1}
                            onChange={(e) => setValue1(e.target.value)}
                            className="w-full text-2xl font-bold p-4 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <select
                            value={unit1}
                            onChange={(e) => setUnit1(e.target.value)}
                            className="w-full p-2 bg-gray-50 border border-gray-200 rounded-lg text-gray-700 outline-none"
                        >
                            {Object.entries(units[category]).map(([key, label]) => (
                                <option key={key} value={key}>{label}</option>
                            ))}
                        </select>
                    </div>

                    {/* Arrow */}
                    <div className="flex justify-center pt-6">
                        <button
                            onClick={handleSwap}
                            className="p-3 rounded-full bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors"
                        >
                            <ArrowRightLeft className="h-6 w-6" />
                        </button>
                    </div>

                    {/* Input 2 (Read Only) */}
                    <div className="space-y-2">
                        <label className="text-xs font-semibold text-gray-500 uppercase">To</label>
                        <div className="w-full text-2xl font-bold p-4 rounded-xl bg-gray-50 border border-gray-200 text-gray-800 min-h-[74px] flex items-center overflow-x-auto">
                            {value2}
                        </div>
                        <select
                            value={unit2}
                            onChange={(e) => setUnit2(e.target.value)}
                            className="w-full p-2 bg-gray-50 border border-gray-200 rounded-lg text-gray-700 outline-none"
                        >
                            {Object.entries(units[category]).map(([key, label]) => (
                                <option key={key} value={key}>{label}</option>
                            ))}
                        </select>
                    </div>
                </div>

            </div>
        </ToolLayout>
    );
}
