import type { Metadata } from 'next';
import ImageCompressorClient from './Client';
import ToolLayout from '@/components/ToolLayout';
import { Minimize2 } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Image Compressor - Reduce Image Size Online Free | Smart Tools',
    description: 'Compress JPG, PNG, and WebP images online without losing quality. Reduce file size for faster websites and easy sharing.',
    keywords: ['image compressor', 'compress image', 'reduce image size', 'jpg compressor', 'png compressor', 'optimize image'],
};

export default function ImageCompressorPage() {
    return (
        <ToolLayout
            title="Image Compressor"
            description="Compress images automatically while maintaining the best quality."
            icon={Minimize2}
            category="Image"
            extraContent={
                <>
                    <h2>How to Compress Images?</h2>
                    <ol>
                        <li><strong>Upload:</strong> Drag and drop your images (JPG, PNG, WebP) into the box.</li>
                        <li><strong>Adjust Settings:</strong> (Optional) Use the sliders to choose between best quality or smallest file size.</li>
                        <li><strong>Download:</strong> Click the download button to save your optimized images.</li>
                    </ol>

                    <h2>Features</h2>
                    <ul>
                        <li><strong>Flexible Compression:</strong> Adjust quality and max file size to your needs.</li>
                        <li><strong>Batch Support:</strong> Compress multiple images at the same time.</li>
                        <li><strong>Privacy Focused:</strong> All compression happens in your browser. No files are uploaded to any server.</li>
                        <li><strong>Fast & Free:</strong> Instant results with no usage limits.</li>
                    </ul>

                    <h2>Why Compress Images?</h2>
                    <p>
                        Large image files slow down websites and take up unnecessary storage space.
                        By compressing images, you can significantly reduce their file size (often by 50-80%)
                        while keeping them looking great. This is essential for:
                    </p>
                    <ul>
                        <li>Faster website loading speeds (better SEO).</li>
                        <li>Sending images via email (overcoming attachment limits).</li>
                        <li>Saving storage space on your devices.</li>
                    </ul>

                    <h2>Frequently Asked Questions</h2>
                    <h3>Does reducing size lower quality?</h3>
                    <p>Yes, to some extent. Lossy compression removes some data to reduce size. However, our smart algorithm balances quality and size so the difference is often invisible to the naked eye.</p>
                </>
            }
        >
            <ImageCompressorClient />
        </ToolLayout>
    );
}
