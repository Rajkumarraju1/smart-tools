import type { Metadata } from 'next';
import BMICalculatorClient from './Client';
import ToolLayout from '@/components/ToolLayout';
import { Activity } from 'lucide-react';

export const metadata: Metadata = {
    title: 'BMI Calculator - Calculate Body Mass Index Free | Smart Tools',
    description: 'Calculate your Body Mass Index (BMI) accurately. Enter height and weight to check if you are Underweight, Normal, or Overweight. Metric and Imperial units supported.',
    keywords: ['bmi calculator', 'body mass index', 'calculate bmi', 'healthy weight calculator', 'bmi formula'],
};

export default function BMICalculatorPage() {
    return (
        <ToolLayout
            title="BMI Calculator"
            description="Calculate your Body Mass Index (BMI) and find your healthy weight range."
            icon={Activity}
            category="Utility"
            extraContent={
                <>
                    <h2>What is Body Mass Index (BMI)?</h2>
                    <p>Body Mass Index (BMI) is a simple calculation using a person's height and weight. The formula is BMI = kg/m² where kg is a person's weight in kilograms and m² is their height in meters squared. A BMI of 25.0 or more is overweight, while the healthy range is 18.5 to 24.9.</p>

                    <h2>BMI Weight Categories</h2>
                    <div className="overflow-x-auto">
                        <table className="min-w-full border border-gray-200 mt-4 mb-6 text-sm">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-4 py-2 text-left font-semibold text-gray-700">Category</th>
                                    <th className="px-4 py-2 text-left font-semibold text-gray-700">BMI Range</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                <tr>
                                    <td className="px-4 py-2 text-gray-600">Underweight</td>
                                    <td className="px-4 py-2 text-gray-600">&lt; 18.5</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-2 text-green-600 font-medium">Normal Weight</td>
                                    <td className="px-4 py-2 text-gray-600">18.5 – 24.9</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-2 text-orange-600 font-medium">Overweight</td>
                                    <td className="px-4 py-2 text-gray-600">25 – 29.9</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-2 text-red-600 font-medium">Obese</td>
                                    <td className="px-4 py-2 text-gray-600">&ge; 30</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h2>Risks Associated with Being Overweight</h2>
                    <p>Being overweight increases the risk of a number of serious diseases and health conditions. The following is a list of said risks:</p>
                    <ul>
                        <li>High blood pressure (Hypertension)</li>
                        <li>High LDL cholesterol ("bad" cholesterol)</li>
                        <li>Type 2 diabetes</li>
                        <li>Coronary heart disease</li>
                        <li>Stroke</li>
                    </ul>

                    <h2>How to Use This Calculator</h2>
                    <ol>
                        <li>Select your preferred unit system (Metric or Imperial).</li>
                        <li>Enter your current height in cm (or feet/inches).</li>
                        <li>Enter your current weight in kg (or lbs).</li>
                        <li>The calculator will instantly display your BMI and weight category.</li>
                    </ol>
                </>
            }
        >
            <BMICalculatorClient />
        </ToolLayout>
    );
}
