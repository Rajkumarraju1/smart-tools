import type { Metadata } from 'next';
import { Calendar } from 'lucide-react';
import ToolLayout from '@/components/ToolLayout';
import AgeCalculatorClient from './Client';

export const metadata: Metadata = {
    title: 'Age Calculator - Calculate Exact Age Online Free',
    description: 'Calculate your exact age in years, months, and days from date of birth. Find out the remaining months and days until your next birthday.',
    keywords: ['age calculator', 'calculate exact age', 'how old am i', 'chronological age calculator', 'birthday countdown'],
    alternates: {
        canonical: '/tools/calculators/age',
    },
};

export default function AgeCalculatorPage() {
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
                    <p>Yes! While labeled "Date of Birth" and "Today's Date", you can input any two dates to find the exact duration between them. Simply put the older date in the first box and the second date in the second box.</p>

                    <h3>Is my birthdate data saved or uploaded anywhere?</h3>
                    <p>Absolutely not. We prioritize your ultimate privacy. All date calculations happen locally and instantly within your web browser's memory. We do not transmit, analyze, or permanently store your inputted birthdate on our server databases.</p>
                </>
            }
        >
            <AgeCalculatorClient />
        </ToolLayout>
    );
}
