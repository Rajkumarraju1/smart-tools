

import type { Metadata } from 'next';
import CompressPDFClient from './Client';
import ToolLayout from '@/components/ToolLayout';
import { Minimize2 } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Compress PDF - Reduce PDF File Size Free | Smart Tools',
    description: 'Compress your PDF files online for free. Reduce file size while maintaining quality. Fast, secure, and easy to use.',
    keywords: ['compress pdf', 'reduce pdf size', 'minimize pdf', 'shrink pdf', 'pdf compressor'],
};

export default function CompressPDFPage() {
    return (
        <ToolLayout
            title="Compress PDF"
            description="Reduce the file size of your PDF documents instantly."
            icon={Minimize2}
            category="PDF"
            extraContent={
                <>
                    <h2>How to Compress PDF Online?</h2>
                    <ol>
                        <li><strong>Upload your PDF:</strong> Drag and drop your file into the box above or click to select a file.</li>
                        <li><strong>Choose Compression Level:</strong> Select "Standard" for a balance of quality and size, or "Strong" for maximum reduction.</li>
                        <li><strong>Download:</strong> Click the "Compress PDF" button and download your optimized file instantly.</li>
                    </ol>

                    <h2>Key Features</h2>
                    <ul>
                        <li><strong>100% Free:</strong> No hidden costs, no limits on the number of files.</li>
                        <li><strong>Secure & Private:</strong> Processing happens locally in your browser. Your files are never uploaded to our servers.</li>
                        <li><strong>Standard vs. Strong:</strong> Choose Standard mode to remove metadata and optimize structure. Choose Strong mode to rasterize pages and achieve up to 90% compression.</li>
                        <li><strong>No Watermarks:</strong> The compressed file stays clean and professional.</li>
                    </ul>

                    <h2>Frequently Asked Questions</h2>
                    <h3>Is it safe to compress my PDF here?</h3>
                    <p>Yes! We use client-side technology, meaning your file stays on your device. It is not sent to any cloud server, ensuring maximum privacy.</p>

                    <h3>Does compressing a PDF reduce quality?</h3>
                    <p>It depends on the mode. "Standard" compression optimizes internal structures without visible quality loss. "Strong" compression may slightly reduce image quality to achieve smaller file sizes.</p>

                    <h3>Can I compress scanned documents?</h3>
                    <p>Yes, scanned PDFs (images) compress very well, especially with our "Strong" compression mode.</p>
                </>
            }
        >
            <CompressPDFClient />
        </ToolLayout>
    );
}
