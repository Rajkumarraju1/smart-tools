

import type { Metadata } from 'next';
import ImageToPDFClient from './Client';
import ToolLayout from '@/components/ToolLayout';
import { Image as ImageIcon } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Image to PDF - Convert JPG/PNG to PDF Free | Smart Tools',
    description: 'Convert your images (JPG, PNG, WebP) into a single PDF document. Drag and drop, reorder, and convert instantly for free.',
    keywords: ['image to pdf', 'jpg to pdf', 'png to pdf', 'convert image to pdf', 'photos to pdf'],
};

export default function ImageToPDFPage() {
    return (
        <ToolLayout
            title="Image to PDF"
            description="Convert your images (JPG, PNG) into a single PDF document."
            icon={ImageIcon}
            category="PDF"
            extraContent={
                <>
                    <h2>How to Convert Images to PDF?</h2>
                    <ol>
                        <li><strong>Upload Images:</strong> Click the upload area or drag and drop your JPG/PNG files.</li>
                        <li><strong>Reorder:</strong> Use the up/down arrows to arrange your images in the desired order for the PDF.</li>
                        <li><strong>Convert:</strong> Click "Convert to PDF" to generate your document instantly.</li>
                    </ol>

                    <h2>Features</h2>
                    <ul>
                        <li><strong>Multiple Formats:</strong> Supports JPG, JPEG, PNG, and WebP images.</li>
                        <li><strong>Batch Processing:</strong> Combine multiple images into a single PDF file.</li>
                        <li><strong>100% Secure:</strong> All conversion happens in your browser. No files are uploaded to our servers.</li>
                        <li><strong>Instant Download:</strong> No waiting queues or watermarks.</li>
                    </ul>

                    <h2>Frequently Asked Questions</h2>
                    <h3>Can I convert multiple images at once?</h3>
                    <p>Yes! You can select multiple images and we will merge them into a single PDF document, with one image per page.</p>

                    <h3>Does it support PNG transparency?</h3>
                    <p>Yes, PNG images are supported. However, PDF format generally uses a white background, so transparent areas may appear white.</p>

                    <h3>Is there a limit on file size?</h3>
                    <p>Since the processing is done on your device, the limit depends on your browser's memory. For most users, converting dozens of high-quality images works perfectly.</p>
                </>
            }
        >
            <ImageToPDFClient />
        </ToolLayout>
    );
}
