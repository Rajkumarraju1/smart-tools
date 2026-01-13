import type { Metadata } from 'next';
import { FileText } from 'lucide-react';
import PptToPdfClient from './Client';
import ToolLayout from '@/components/ToolLayout';
import ToolContent from '@/components/ToolContent';

export const metadata: Metadata = {
    title: 'PPT to PDF - Convert PowerPoint to PDF Free | Smart Tools',
    description: 'Convert your PowerPoint presentations (PPT, PPTX) into PDF documents instantly. Secure, free, and runs entirely in your browser.',
    keywords: ['ppt to pdf', 'pptx to pdf', 'powerpoint to pdf', 'convert ppt', 'slide convert'],
};

export default function PptToPdfPage() {
    return (
        <ToolLayout
            title="PPT to PDF"
            description="Convert your PowerPoint presentations to PDF efficiently."
            icon={<FileText className="h-8 w-8 text-blue-600" />}
            category="PDF"
        >
            <PptToPdfClient />

            <ToolContent
                title="Convert PowerPoint to PDF Online"
                introduction="Transform your PowerPoint presentations into professional, easy-to-share PDF documents with our free online converter. Whether you have a .ppt or .pptx file, our tool ensures your slides are preserved and ready for distribution without the need for any installed software."
                features={[
                    "Browser-Based Conversion: Process your files locally. No data is ever uploaded to a server, ensuring maximum privacy for your sensitive presentations.",
                    "Instant Extraction: Quickly extracts slides and images from your presentation into a PDF format.",
                    "Universal Compatibility: Works with both legacy (.ppt) and modern (.pptx) PowerPoint formats.",
                    "No Installation Needed: Convert files directly from your web browser on any device—Windows, Mac, or Linux.",
                    "Free & Unlimited: Convert as many presentations as you need without any costs or daily limits."
                ]}
                howToUse={[
                    "Drag and drop your PowerPoint file (.ppt or .pptx) into the upload box.",
                    "Wait for the tool to process your file. It will extract the slides and content securely.",
                    "For complex slides, the tool extracts embedded previews or images to ensure visual fidelity.",
                    "Click 'Convert to PDF' to finalize the document creation.",
                    "Download your new PDF file instantly to your device."
                ]}
                faqs={[
                    {
                        question: "Does this tool support animations?",
                        answer: "No, PDF documents are static. Transitions and animations from your PowerPoint presentation will not be preserved in the final PDF file."
                    },
                    {
                        question: "Why does the conversion look different from my original slides?",
                        answer: "Since this tool runs purely in the browser for privacy, it uses a \"best-effort\" extraction method. It prioritizes extracting high-quality slide previews embedded in the file. Complex custom fonts or unique layout engines might create minor visual differences."
                    },
                    {
                        question: "Is my data secure?",
                        answer: "Yes, absolutely. Unlike many other converters that upload your file to a cloud server, our tool processes the data locally on your computer. Your file never leaves your browser."
                    },
                    {
                        question: "Can I convert protected or password-locked PPT files?",
                        answer: "Currently, we do not support password-protected files. You will need to remove the password from the presentation before converting it."
                    }
                ]}
            />
        </ToolLayout>
    );
}
