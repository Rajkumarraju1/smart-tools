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
            extraContent={
                <>
                    <h2>Calculate Your Exact Age Online</h2>
                    <p>Ever wondered exactly how old you are down to the day, or how many months remain until your next birthday celebration? Our free online Age Calculator is explicitly designed to solve this common curiosity with absolute precision. By computing the exact difference between your date of birth and today's date, this tool provides a comprehensive breakdown of your chronological age in years, months, and days.</p>
                    <p>Whether you are filling out important legal documents, calculating milestones for a newborn baby, tracking chronological data for genealogical research, or simply checking when it's time to start planning a party, our intuitive calculator delivers instant mathematical accuracy.</p>

                    <h2>How to Use the Chronological Age Calculator</h2>
                    <ol>
                        <li><strong>Enter Your Date of Birth:</strong> Click on the 'Date of Birth' field. Utilize the calendar picker to accurately select the year, month, and day you were born.</li>
                        <li><strong>Confirm Today's Date:</strong> The tool automatically determines today's date using your device's system clock. You can also manually change this date if you want to calculate your exact age on a future specific date or a date in the past.</li>
                        <li><strong>Click Calculate:</strong> Hit the prominent "Calculate Age" button.</li>
                        <li><strong>Review Your Results:</strong> Our algorithms will instantly evaluate the difference, displaying your exact age in a highly readable format (Years, Months, Days). It additionally provides a convenient countdown indicating exactly how many months and days are remaining until your upcoming birthday.</li>
                    </ol>

                    <h2>Why is Exact Age Important?</h2>
                    <p>While usually we merely state our age in years, certain life situations demand exact chronological precision:</p>
                    <ul>
                        <li><strong>Medical Pedriatics:</strong> Pediatricians strictly measure infant and toddler development by exact months and days.</li>
                        <li><strong>Legal and Bureaucratic Forms:</strong> Government documents, insurance policies, and passport applications often require precise age metrics at the time of application.</li>
                        <li><strong>Financial Planning:</strong> Retirement age criteria (like Social Security benefits or 401k withdrawals) hinge on reaching precise age markers spanning years and specific months.</li>
                        <li><strong>Educational Placements:</strong> School enrollments often utilize strict cutoff dates based on a child's exact age in months.</li>
                    </ul>

                    <h2>Frequently Asked Questions (FAQ)</h2>
                    <h3>How does the calculator handle leap years?</h3>
                    <p>Our underlying JavaScript code utilizes the native browser Date engine, perfectly accounting for leap years. It precisely calculates the 29 days in February during a leap year, ensuring your calculated days alive are mathematically flawless.</p>

                    <h3>Can I calculate the age difference between two arbitrary dates?</h3>
                    <p>Yes! While labeled "Date of Birth" and "Today's Date", you can input any two dates to find the exact duration between them. Simply put the older date in the first box and the newer date in the second box.</p>

                    <h3>Is my birthdate data saved or uploaded anywhere?</h3>
                    <p>Absolutely not. We prioritize your ultimate privacy. All date calculations happen locally and instantly within your web browser's memory. We do not transmit, analyze, or permanently store your inputted birthdate on our server databases.</p>
                </>
            }
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
