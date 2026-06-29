import type { Metadata } from 'next';
import { Crop } from 'lucide-react';
import ImageResizerClient from './Client';
import ToolLayout from '@/components/ToolLayout';
import ToolContent from '@/components/ToolContent';

export const metadata: Metadata = {
    title: 'Image Resizer - Resize JPG, PNG Online Free',
    description: 'Resize your images to exact pixel dimensions. Maintain aspect ratio or custom crop. Free, fast, and secure client-side resizing.',
    keywords: ['image resizer', 'resize image', 'photo resizer', 'resize jpg', 'resize png', 'picture resizer'],
    alternates: {
        canonical: '/tools/image/resizer',
    },
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
                title="Free Online Image Resizer - Resize Photos Instantly and Securely"
                introduction="Our powerful, professional-grade Image Resizer tool empowers you to flawlessly adjust the precise pixel dimensions of your photos without compromising on visual quality. Whether you need to resize a hero image for your website, format a profile picture for social media, or fulfill strict document upload requirements, this tool provides a fast, secure, and intuitive solution directly within your browser. There is no need to download clunky software or risk your privacy on cloud servers. Our advanced browser-based scaling algorithms ensure crisp results every time."
                features={[
                    "100% Local Processing: Privacy is our priority. Your images never leave your device. All resizing calculations and outputs happen securely in your local browser sandbox.",
                    "Perfect Aspect Ratio Lock: Easily maintain the original mathematical proportions of your image to prevent any ugly stretching or physical distortion of your subjects.",
                    "Custom Resolution Control: Type in the exact pixel width or height you need down to the individual pixel for absolute precision.",
                    "Integrated File Size Optimization: Reduce the file size (KB/MB) of your images simultaneously while resizing, improving your workflow.",
                    "Universal Format Support: Works seamlessly and flawlessly with all the most popular web formats including high-res JPG, transparent PNG, and Next-Gen WebP.",
                    "Instant Live Preview: See exactly how your newly resized image will look and verify the new file size before you even hit the download button."
                ]}
                howToUse={[
                    "First, securely upload your image by dragging and dropping it into the interactive box, or clicking anywhere inside the box to open your file browser.",
                    "Wait half a second for the image to load securely into your browser memory.",
                    "Enter your desired custom Width and Height in pixels in the control panel.",
                    "Pro Tip: Keep 'Maintain Aspect Ratio' toggled ON if you only want to change one dimension and have the other auto-calculate to prevent stretching.",
                    "Optionally, set a maximum target file size (in KB) if you need the final image to be compressed to meet specific forum or website constraints.",
                    "Click the bright 'Resize Image' button to instruct our tool to securely process your photo instantly.",
                    "Finally, click the Download button to securely save your newly resized and optimized image to your local hard drive or camera roll."
                ]}
                faqs={[
                    {
                        question: "Is it safe to resize confidential documents or private photos here?",
                        answer: "Yes, absolutely! Unlike many other online tools that secretly upload your files to remote servers for processing, our modern Image Resizer operates 100% locally on your device via client-side JavaScript. Your photos are never uploaded to any cloud server, ensuring absolute privacy and security."
                    },
                    {
                        question: "Does reducing the pixel dimensions of an image strictly reduce its quality?",
                        answer: "No! Resizing down (making an image smaller in pixel dimensions) actually preserves the apparent visual quality while discarding unneeded pixel data. It makes the file much smaller. However, 'upscaling' (making an image larger than the original) can cause some blurriness, though our tool utilizes high-quality interpolation algorithms to try and minimize this unavoidable effect."
                    },
                    {
                        question: "Why should I resize my images before uploading them to my website or blog?",
                        answer: "Uploading massive, un-resized images directly from a phone or camera (often 4000+ pixels wide) severely harms your website's loading speed. By resizing them down to the actual display size (e.g., 800 pixels or 1200 pixels) and thereby reducing the file size, your site will load substantially faster, providing a better user experience and achieving higher search engine rankings (SEO)."
                    },
                    {
                        question: "Can I resize multiple images at once to save time?",
                        answer: "Currently, this specific tool is hyper-optimized for single-image precision resizing and quality control. We are actively developing a bulk/batch resizing feature for a future update to handle whole albums at once."
                    },
                    {
                        question: "Is this image resizer completely free to use without limits?",
                        answer: "Yes, this Image Resizer is completely free to use for personal and commercial purposes. There are absolutely no hidden costs, annoying watermarks applied to your photos, or restrictive registration requirements."
                    }
                ]}
            />
        </ToolLayout>
    );
}
