import type { Metadata } from 'next';
import BMICalculatorClient from './Client';

export const metadata: Metadata = {
    title: 'BMI Calculator - Calculate Body Mass Index Free | Smart Tools',
    description: 'Calculate your Body Mass Index (BMI) accurately. Enter height and weight to check if you are Underweight, Normal, or Overweight. Metric and Imperial units supported.',
    keywords: ['bmi calculator', 'body mass index', 'calculate bmi', 'healthy weight calculator', 'bmi formula'],
};

export default function BMICalculatorPage() {
    return <BMICalculatorClient />;
}
