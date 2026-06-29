import type { Metadata } from 'next';
import { RefreshCcw } from 'lucide-react';
import ToolLayout from '@/components/ToolLayout';
import UnitConverterClient from './Client';

export const metadata: Metadata = {
    title: 'Unit Converter Online (Length, Weight, Temperature, Data)',
    description: 'Convert between different units of length, weight, temperature, and digital data storage. Free, instant, and highly accurate browser tool.',
    keywords: ['unit converter', 'metric to imperial converter', 'length converter', 'weight converter', 'temperature converter', 'data storage converter'],
    alternates: {
        canonical: '/tools/utility/unit-converter',
    },
};

export default function UnitConverterPage() {
    return (
        <ToolLayout
            title="Unit Converter"
            description="Convert between different units of length, weight, temperature, and more."
            icon={RefreshCcw}
            category="Utility"
            extraContent={
                <>
                    <h2>Comprehensive Online Unit Converter</h2>
                    <p>In a globally connected world, seamlessly translating measurements between disparate systems is a daily occupational necessity. Whether you are an architectural student struggling with converting Imperial to Metric plans, a passionate home chef tackling a European baking recipe, or a dedicated software engineer accurately calculating massive server data storage requirements, our completely Free Online Unit Converter is expertly engineered to deliver flawless, instantaneous mathematical conversions.</p>

                    <h2>Supported Conversion Categories</h2>
                    <p>Our robust architecture supports the most universally vital measurement domains:</p>
                    <ul>
                        <li><strong>Length & Distance:</strong> Instantly convert seamlessly between the Metric system (Meters, Kilometers, Centimeters, Millimeters) and the older Imperial system (Feet, Inches, Miles). Crucial for international travel, drafting, and complex DIY projects.</li>
                        <li><strong>Weight & Mass:</strong> Accurately calculate rigorous translations between Kilograms, Grams, Milligrams, English Pounds, and precise Ounces. Indispensable for cooking, international shipping, and scientific lab work.</li>
                        <li><strong>Temperature:</strong> Rapidly translate absolute weather forecasts or oven settings between standard Celsius, Fahrenheit, and scientific Kelvin formulas.</li>
                        <li><strong>Digital Data Storage:</strong> Precisely convert computing capacities flawlessly between standard Bytes, Kilobytes (KB), Megabytes (MB), Gigabytes (GB), and massive Terabytes (TB) using highly accurate binary calculations.</li>
                    </ul>

                    <h2>How to Use This Precision Measurement Tool</h2>
                    <ol>
                        <li><strong>Select the Category:</strong> Begin by clicking the appropriate category button prominently located at the very top of the tool (e.g., Select 'Weight' if you are actively working with kilograms and pounds).</li>
                        <li><strong>Input Your Value:</strong> Type precisely the known numerical value into the highly visible 'From' input box on the left side of your screen.</li>
                        <li><strong>Choose Your Source Unit:</strong> Actively utilize the dropdown menu directly beneath your inputted number to strictly define the original starting unit (e.g., 'Centimeters').</li>
                        <li><strong>Choose Your Target Unit:</strong> Finally, utilize the 'To' dropdown menu situated on the right side to flawlessly designate the final unit you urgently require (e.g., 'Inches'). The meticulously calculated result will instantly populate the box above it.</li>
                        <li><strong>Quick Swap:</strong> Click the central convenient arrow icon button to instantly reverse the entire conversion, flawlessly swapping your targeted "From" and "To" selected units.</li>
                    </ol>

                    <h2>Frequently Asked Questions (FAQ)</h2>
                    <h3>How absolutely exact are these mathematical conversions?</h3>
                    <p>Our underlying code utilizes strict, internationally standardized conversion factors (for example, utilizing exactly 2.54 centimeters per inch) to unconditionally guarantee absolute professional precision up to six rigorous decimal places, effectively eliminating standard rounding errors.</p>
                </>
            }
        >
            <UnitConverterClient />
        </ToolLayout>
    );
}
