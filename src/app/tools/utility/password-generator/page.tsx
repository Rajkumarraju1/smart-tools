import type { Metadata } from 'next';
import PasswordGeneratorClient from './Client';

export const metadata: Metadata = {
    title: 'Generate Strong Password Online Free Secure',
    description: 'Protect your accounts. Generate strong password online free secure using our client-side application. Fast, zero-transmission, and 100% private.',
    keywords: ['generate strong password online free secure', 'random password generator', 'secure password generator'],
    alternates: {
        canonical: '/tools/utility/password-generator',
    },
};

export default function PasswordGeneratorPage() {
    return <PasswordGeneratorClient />;
}
