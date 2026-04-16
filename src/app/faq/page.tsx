import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Frequently Asked Questions | Smart Tools',
  description: 'Find answers to common questions about using Smart Tools, our privacy policies, and how our client-side utilities work.',
};

export default function FAQPage() {
    const faqs = [
        {
            question: "Are these tools really free to use?",
            answer: "Yes, 100%. We do not charge for any of our tools, and there are no hidden premium tiers or subscription fees. We believe utility software should be accessible to everyone."
        },
        {
            question: "Do you keep a copy of my processed files?",
            answer: "No. The vast majority of our tools operate entirely 'client-side.' This means your files (like PDFs or Images) are processed directly within your web browser using your device's memory. They are never uploaded to our servers. For tools that require server processing, files are deleted immediately after completion."
        },
        {
            question: "Is there a limit on file size?",
            answer: "Since most processing happens on your device, the file size limit depends largely on your device's memory (RAM) and browser capabilities. Generally, files up to 50MB work seamlessly, but very large files may cause your browser to slow down."
        },
        {
            question: "Can I use these tools on my mobile phone?",
            answer: "Absolutely! Smart Tools is designed to be fully responsive. You can use our utilities on your desktop, tablet, or smartphone without downloading a separate app."
        },
        {
            question: "Who can I contact if I find a bug in a tool?",
            answer: "We appreciate your feedback! If a tool is not working as expected, please reach out to us at support.mywebutils@gmail.com with details about the issue and the browser you are using."
        },
        {
            question: "Do I need to create an account?",
            answer: "No, registration is not required. You can start using our tools immediately without providing any personal information."
        }
    ];

    return (
        <div className="max-w-4xl mx-auto px-4 py-12">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h1>
                <p className="text-xl text-gray-600">Find answers to common questions about Smart Tools.</p>
            </div>

            <div className="space-y-6">
                {faqs.map((faq, index) => (
                    <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                        <h3 className="text-lg font-bold text-gray-900 mb-2">{faq.question}</h3>
                        <p className="text-gray-600">{faq.answer}</p>
                    </div>
                ))}
            </div>

            <div className="mt-12 text-center">
                <p className="text-gray-600">
                    Still have questions? <Link href="/contact" className="text-blue-600 font-semibold hover:underline">Contact our support team</Link>.
                </p>
            </div>
        </div>
    );
}
