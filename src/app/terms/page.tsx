import React from 'react';

export default function TermsPage() {
    return (
        <div className="max-w-4xl mx-auto px-4 py-12">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Terms of Service</h1>

            <div className="prose prose-blue max-w-none bg-white p-8 rounded-2xl border border-gray-100">
                <p className="text-sm text-gray-500 mb-6">Last Updated: {new Date().toLocaleDateString()}</p>

                <h3>1. Acceptance of Terms</h3>
                <p>By accessing and using Smart Tools, you accept and agree to be bound by the terms and provision of this agreement.</p>

                <h3>2. Use of Services</h3>
                <p>You agree to use Smart Tools for lawful purposes only. You are prohibited from using our tools for any illegal or unauthorized purpose.</p>

                <h3>3. Disclaimer</h3>
                <p>The materials on Smart Tools are provided "as is". Smart Tools makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties, including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>

                <h3>4. Limitations</h3>
                <p>In no event shall Smart Tools or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Smart Tools' website.</p>

                <h3>5. Changes to Terms</h3>
                <p>Smart Tools reverses the right to update these Terms of Service at any time. We recommend you check this page specifically during each visit to our site.</p>
            </div>
        </div>
    );
}
