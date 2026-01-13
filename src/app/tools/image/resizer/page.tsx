import type { Metadata } from 'next';
import { Crop } from 'lucide-react';
import ImageResizerClient from './Client';
import ToolLayout from '@/components/ToolLayout';
import ToolContent from '@/components/ToolContent';

export const metadata: Metadata = {
    title: 'Image Resizer - Resize JPG, PNG Online Free | Smart Tools',
    description: 'Resize your images to exact pixel dimensions. Maintain aspect ratio or custom crop. Free, fast, and secure client-side resizing.',
    keywords: ['image resizer', 'resize image', 'photo resizer', 'resize jpg', 'resize png', 'picture resizer'],
};

export default function ImageResizerPage() {
    return (
        <ToolLayout
            title="Image Resizer"
            description="Resize your images to exact dimensions accurately."
            icon={<Crop className="h-8 w-8 text-blue-600" />}
            category="Image"
        >
            <ImageResizerClient />

            <ToolContent
                title="Free Online Image Resizer"
                introduction="Our powerful Image Resizer tool allows you to easily adjust the dimensions of your photos without compromising quality. Whether you need to resize an image for social media, a website, or a specific document requirement, this tool provides a fast, secure, and user-friendly solution directly in your browser."
                features={[
                    "Local Processing: Your images never leave your device. All resizing happens securely in your browser.",
                    "Aspect Ratio Lock: Easily maintain the original proportions of your image to prevent distortion.",
                    "File Size Optimization: Reduce the file size (KB/MB) of your images while resizing.",
                    "Supports Multiple Formats: Works seamlessly with popular formats like JPG, PNG, and WebP.",
                    "Instant Preview: See exactly how your resized image will look before you download it."
                ]}
                howToUse={[
                    "Upload your image by dragging and dropping it into the box or clicking to select a file.",
                    "Enter your desired Width and Height in pixels. Toggle 'Maintain Aspect Ratio' if needed.",
                    "Optionally set a target file size in KB if you need to compress the image.",
                    "Click the 'Resize Image' button to process your photo instanly.",
                    "Download your newly resized image to your device."
                ]}
                faqs={[
                    {
                        question: "Is it safe to resize private photos?",
                        answer: "Yes, absolutely! Unlike other online tools, our Image Resizer processes your files 100% locally on your device. Your photos are never uploaded to any server, ensuring complete privacy."
                    },
                    {
                        question: "Does resizing reduce image quality?",
                        answer: "Resizing down (making an image smaller) generally preserves quality. Resizing up (making an image larger) can cause some pixelation, but our tool uses high-quality interpolation algorithms to minimize this effect."
                    },
                    {
                        question: "Can I resize multiple images at once?",
                        answer: "Currently, this tool is designed for single-image precision resizing. We are working on a batch resizing feature for a future update."
                    },
                    {
                        question: "Is this tool free to use?",
                        answer: "Yes, this Image Resizer is completely free to use with no hidden costs, watermarks, or registration requirements."
                    }
                ]}
            />
        </ToolLayout>
    );
}
