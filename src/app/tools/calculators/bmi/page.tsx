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
                    <p>Body Mass Index (BMI) is a simple, widely used calculation that uses a person's height and weight to estimate body fat. The formula is <strong>BMI = kg/m²</strong> where kg is a person's weight in kilograms and m² is their height in meters squared. For decades, medical professionals have used BMI as a rapid screening tool to identify possible weight problems for adults.</p>
                    <p>While BMI doesn't directly measure body fat, it is typically correlated with direct measures of body fat. A BMI of 25.0 or more is generally considered overweight, while the healthy range is 18.5 to 24.9. However, it's important to remember that BMI is just one indicator of health and should be considered alongside other factors like diet, physical activity, waist circumference, and family medical history.</p>

                    <h2>Understanding BMI Weight Categories</h2>
                    <p>The World Health Organization (WHO) and the National Institutes of Health (NIH) classify BMI into several main categories. These categories help individuals and healthcare providers assess potential health risks associated with being underweight or overweight.</p>
                    <div className="overflow-x-auto">
                        <table className="min-w-full border border-gray-200 mt-4 mb-6 text-sm">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-4 py-2 text-left font-semibold text-gray-700">Category</th>
                                    <th className="px-4 py-2 text-left font-semibold text-gray-700">BMI Range</th>
                                    <th className="px-4 py-2 text-left font-semibold text-gray-700">Health Implication</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                <tr>
                                    <td className="px-4 py-2 text-gray-600">Underweight</td>
                                    <td className="px-4 py-2 text-gray-600">&lt; 18.5</td>
                                    <td className="px-4 py-2 text-gray-600">May indicate malnutrition, an eating disorder, or other health problems.</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-2 text-green-600 font-medium">Normal Weight</td>
                                    <td className="px-4 py-2 text-gray-600">18.5 – 24.9</td>
                                    <td className="px-4 py-2 text-gray-600">Associated with the lowest risk of weight-related illness and mortality.</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-2 text-orange-600 font-medium">Overweight</td>
                                    <td className="px-4 py-2 text-gray-600">25.0 – 29.9</td>
                                    <td className="px-4 py-2 text-gray-600">Increased risk for cardiovascular diseases and type 2 diabetes.</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-2 text-red-600 font-medium">Obese</td>
                                    <td className="px-4 py-2 text-gray-600">&ge; 30.0</td>
                                    <td className="px-4 py-2 text-gray-600">Significantly higher risk for various severe health conditions.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h2>Risks Associated with Being Overweight</h2>
                    <p>Carrying extra weight, especially around the midsection, puts extra strain on your body and vital organs. According to numerous health organizations, being overweight or obese increases the risk of a number of serious, life-threatening health conditions. The following is a list of prominent risks:</p>
                    <ul>
                        <li><strong>High Blood Pressure (Hypertension):</strong> Extra tissue requires oxygen, increasing blood flow and pressure.</li>
                        <li><strong>High LDL Cholesterol and Triglycerides:</strong> Often leads to hardened arteries.</li>
                        <li><strong>Type 2 Diabetes:</strong> Excess fat makes your body resistant to insulin.</li>
                        <li><strong>Coronary Heart Disease:</strong> Plaque blocks arteries supplying blood to the heart.</li>
                        <li><strong>Stroke:</strong> Reduced blood flow to the brain due to arterial blockage.</li>
                        <li><strong>Sleep Apnea:</strong> Extra weight around the neck can restrict airways during sleep.</li>
                        <li><strong>Osteoarthritis:</strong> Extra pressure on weight-bearing joints like the knees.</li>
                    </ul>

                    <h2>How to Use Our Free Online BMI Calculator</h2>
                    <p>Our BMI tool is designed to be fast, accurate, and completely private. The calculations happen instantly in your browser.</p>
                    <ol>
                        <li><strong>Choose Your Units:</strong> Select your preferred unit system at the top. You can seamlessly switch between Metric (kilograms/centimeters) or Imperial (pounds/feet/inches).</li>
                        <li><strong>Enter Your Height:</strong> Accurately input your height. If using Imperial, input feet and inches separately.</li>
                        <li><strong>Enter Your Weight:</strong> Input your current body weight.</li>
                        <li><strong>Review Results:</strong> The calculator will instantly display your exact BMI score along with your corresponding health category.</li>
                    </ol>

                    <h2>Frequently Asked Questions (FAQ)</h2>
                    <h3>1. Is the BMI calculator accurate tailored for everyone?</h3>
                    <p>While the BMI formula is standard, its interpretation can vary. It does not distinguish between muscle mass and fat mass. Therefore, highly muscular individuals (like athletes or bodybuilders) may have a high BMI but low body fat. Conversely, older adults who have lost muscle mass may have a normal BMI but high body fat.</p>

                    <h3>2. Do men and women have different BMI standards?</h3>
                    <p>No, the standard BMI calculation and the resulting categories (Underweight, Normal, Overweight, Obese) are identical for adult men and women. Both genders use the same basic formula.</p>

                    <h3>3. Can children use this BMI calculator?</h3>
                    <p>This specific calculator and its weight categories are designed for adults (ages 20 and older). For children and teens, BMI is calculated using the same formula but interpreted differently via age- and sex-specific percentiles, because children's body composition changes as they grow.</p>

                    <h3>4. Does bone density affect my BMI?</h3>
                    <p>BMI only accounts for total weight and height. It cannot account for heavy bones or varying bone density. People with larger, denser bones will naturally weigh more without necessarily having higher body fat.</p>

                    <h3>5. Is my data stored when I use this tool?</h3>
                    <p>No. <strong>Smart Tools</strong> prioritizes your privacy. All BMI calculations happen directly and locally within your web browser. We do not store, send, or analyze your height or weight data on our servers.</p>
                </>
            }
        >
            <BMICalculatorClient />
        </ToolLayout>
    );
}
