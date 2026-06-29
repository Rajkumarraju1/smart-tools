import type { Metadata } from 'next';
import ContactClient from './Client';

export const metadata: Metadata = {
    title: 'Contact Us - Get in Touch',
    description: 'Have any questions, bug reports, feedback, or custom feature requests for Smart Tools? Drop us a message here.',
    alternates: {
        canonical: '/contact',
    },
};

export default function ContactPage() {
    return <ContactClient />;
}
