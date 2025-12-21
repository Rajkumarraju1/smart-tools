import React from 'react';

export default function PrivacyPage() {
    return (
        <div className="max-w-4xl mx-auto px-4 py-12">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Privacy Policy</h1>

            <div className="prose prose-blue max-w-none bg-white p-8 rounded-2xl border border-gray-100">
                <p className="text-sm text-gray-500 mb-6">Last Updated: {new Date().toLocaleDateString()}</p>

                <h3>1. Introduction</h3>
                <p>Welcome to Smart Tools. We respect your privacy and are committed to protecting it through our compliance with this policy. This policy describes the types of information we may collect from you or that you may provide when you visit the website.</p>

                <h3>2. Information We Collect</h3>
                <p>We do not collect personal identification information from Users except when users voluntarily fill out a form or interact with our site. We may collect non-personal identification information about Users whenever they interact with our Site.</p>

                <h4>Google AdSense</h4>
                <p>Google, as a third-party vendor, uses cookies to serve ads on our site. Google's use of the DART cookie enables it to serve ads to our users based on previous visits to our site and other sites on the Internet. Users may opt-out of the use of the DART cookie by visiting the Google Ad and Content Network privacy policy.</p>

                <h3>3. How We Use Information</h3>
                <p>We use the information we collect for the following purposes:</p>
                <ul>
                    <li>To personalize user experience</li>
                    <li>To improve our Site</li>
                    <li>To send periodic emails (only if opted in)</li>
                </ul>

                <h3>4. Data Security</h3>
                <p>Most of our tools process files locally within your browser. This means your files (PDFs, Images, Data) are NOT uploaded to our servers, ensuring maximum privacy and security.</p>

                <h3>5. Contact Us</h3>
                <p>If you have any questions about this Privacy Policy, please contact us via our Contact page.</p>
            </div>
        </div>
    );
}
