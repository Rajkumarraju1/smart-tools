'use client';

import React, { useState } from 'react';
import { Calendar, PartyPopper } from 'lucide-react';
import ToolLayout from '@/components/ToolLayout';

interface AgeResult {
    years: number;
    months: number;
    days: number;
    nextBirthdayDays: number;
    nextBirthdayMonths: number;
}

export default function AgeCalculatorPage() {
    const [birthDate, setBirthDate] = useState('');
    const [todayDate, setTodayDate] = useState(new Date().toISOString().split('T')[0]);
    const [result, setResult] = useState<AgeResult | null>(null);

    const calculateAge = () => {
        if (!birthDate) return;

        const birth = new Date(birthDate);
        const today = new Date(todayDate);

        if (birth > today) {
            alert("Birth date cannot be in the future!");
            return;
        }

        let years = today.getFullYear() - birth.getFullYear();
        let months = today.getMonth() - birth.getMonth();
        let days = today.getDate() - birth.getDate();

        if (days < 0) {
            months--;
            const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
            days += lastMonth.getDate();
        }

        if (months < 0) {
            years--;
            months += 12;
        }

        // Calculate next birthday
        const nextBirthday = new Date(today.getFullYear(), birth.getMonth(), birth.getDate());
        if (nextBirthday < today) {
            nextBirthday.setFullYear(today.getFullYear() + 1);
        }

        let diffTime = nextBirthday.getTime() - today.getTime();
        let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        const nextMonths = Math.floor(diffDays / 30.44); // Approx
        const nextRemainingDays = Math.floor(diffDays % 30.44);


        setResult({
            years,
            months,
            days,
            nextBirthdayMonths: nextMonths,
            nextBirthdayDays: nextRemainingDays
        });
    };

    return (
        <ToolLayout
            title="Age Calculator"
            description="Calculate your exact age and find out how many days until your next birthday."
            icon={Calendar}
            category="Utility"
        >
            <div className="w-full max-w-2xl mx-auto space-y-8">

                {/* Inputs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-700">Date of Birth</label>
                        <input
                            type="date"
                            value={birthDate}
                            onChange={(e) => setBirthDate(e.target.value)}
                            className="w-full p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-700">Today's Date</label>
                        <input
                            type="date"
                            value={todayDate}
                            onChange={(e) => setTodayDate(e.target.value)}
                            className="w-full p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none"
                        />
                    </div>
                </div>

                <button
                    onClick={calculateAge}
                    className="w-full py-4 text-white bg-blue-600 font-bold rounded-xl shadow-lg shadow-blue-200 hover:bg-blue-700 transition-colors"
                >
                    Calculate Age
                </button>

                {/* Result */}
                {result && (
                    <div className="space-y-6 animate-in slide-in-from-bottom-4 duration-500">
                        <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl p-8 text-white text-center shadow-xl shadow-blue-200">
                            <div className="text-blue-100 font-medium mb-4 uppercase tracking-widest text-xs">You are exactly</div>
                            <div className="flex justify-center items-baseline gap-4 md:gap-8">
                                <div className="flex flex-col">
                                    <span className="text-4xl md:text-5xl font-extrabold">{result.years}</span>
                                    <span className="text-xs md:text-sm opacity-80">Years</span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-4xl md:text-5xl font-extrabold">{result.months}</span>
                                    <span className="text-xs md:text-sm opacity-80">Months</span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-4xl md:text-5xl font-extrabold">{result.days}</span>
                                    <span className="text-xs md:text-sm opacity-80">Days</span>
                                </div>
                            </div>
                        </div>

                        {/* Extras */}
                        <div className="bg-orange-50 p-6 rounded-xl border border-orange-100 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="p-3 bg-white rounded-full text-orange-500 shadow-sm">
                                    <PartyPopper className="h-6 w-6" />
                                </div>
                                <div>
                                    <div className="text-sm text-orange-900 font-semibold">Next Birthday</div>
                                    <div className="text-xs text-orange-700">Upcoming celebration</div>
                                </div>
                            </div>
                            <div className="text-right">
                                <span className="text-xl font-bold text-orange-800">{result.nextBirthdayMonths}</span>
                                <span className="text-xs text-orange-600 ml-1">Months,</span>
                                <span className="text-xl font-bold text-orange-800 ml-2">{result.nextBirthdayDays}</span>
                                <span className="text-xs text-orange-600 ml-1">Days</span>
                            </div>
                        </div>
                    </div>
                )}

            </div>
        </ToolLayout>
    );
}
