import React from 'react';

export const metadata = {
  title: 'Disclaimer | Smart Tools',
  description: 'Legal disclaimer for using Smart Tools (My Web Utils). Read our policies on warranties, liabilities, and external links.',
};

export default function DisclaimerPage() {
    return (
        <div className="max-w-4xl mx-auto px-4 py-12">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Disclaimer</h1>

            <div className="prose prose-blue max-w-none bg-white p-8 rounded-2xl border border-gray-100">
                <p className="text-sm text-gray-500 mb-6">Last Updated: {new Date().toLocaleDateString()}</p>

                <h3>1. General Information</h3>
                <p>
                    The information and tools provided on Smart Tools (mywebutils.online) are for general informational and utility purposes only. All information and services on the site are provided in good faith, however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information or tool on the Site.
                </p>

                <h3>2. Tool Usage and Liability</h3>
                <p>
                    UNDER NO CIRCUMSTANCE SHALL WE HAVE ANY LIABILITY TO YOU FOR ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE OF THE SITE OR OUR TOOLS, OR RELIANCE ON ANY INFORMATION PROVIDED ON THE SITE. YOUR USE OF THE SITE AND YOUR RELIANCE ON ANY INFORMATION ON THE SITE IS SOLELY AT YOUR OWN RISK.
                </p>
                <p>
                    While we strive to ensure that tools like our calculators, text formatters, and image compressors perform accurately, they are not a substitute for professional software or professional advice (e.g., financial, medical, or legal advice).
                </p>

                <h3>3. External Links</h3>
                <p>
                    The Site may contain (or you may be sent through the Site) links to other websites or content belonging to or originating from third parties. Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, availability or completeness by us. We do not warrant, endorse, guarantee, or assume responsibility for the accuracy or reliability of any information offered by third-party websites.
                </p>

                <h3>4. Processing and Data Security</h3>
                <p>
                    Many of our tools process files directly within your browser window (client-side processing). While this provides a high level of privacy since your data does not leave your device, we cannot guarantee absolute security against local malware or unsecured networks on your device. Ensure your own device is secured when working with highly sensitive information.
                </p>

                <h3>Contact Us</h3>
                <p>
                    If you require any more information or have any questions about our site's disclaimer, please feel free to contact us by email at <strong>support.mywebutils@gmail.com</strong>.
                </p>
            </div>
        </div>
    );
}
