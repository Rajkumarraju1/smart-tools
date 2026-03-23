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
                title="Convert PowerPoint to PDF Online Securely"
                introduction="Transform your Microsoft PowerPoint presentations into pristine, professional, and easy-to-share PDF documents instantly with our free online converter. Whether you possess an older obsolete .ppt file or a modern .pptx file, our robust tool ensures your slides are perfectly preserved. Converting your presentations to PDF guarantees that your carefully crafted fonts, layouts, and formatting will look exactly the same on any device or operating system, without requiring the recipient to have expensive Office software installed."
                features={[
                    "Browser-Based Conversion: Process your highly sensitive business and academic files locally. No data is ever uploaded to a remote cloud server, ensuring maximum enterprise-grade privacy for your presentations.",
                    "Instant Slide Extraction: Lightning-fast algorithms quickly extract slides, vector graphics, and embedded images from your presentation directly into a universally accessible PDF format.",
                    "Universal Format Compatibility: Works flawlessly with both legacy Microsoft PowerPoint (.ppt) formats and modern XML-based (.pptx) formats.",
                    "Zero Software Installation Needed: Convert files directly from your favorite web browser on absolutely any device—Windows PC, Mac, Linux, or even your mobile smartphone.",
                    "100% Free & Unlimited Usage: Convert as many extensive presentations as you need every single day without any subscription costs, paywalls, or daily upload limits."
                ]}
                howToUse={[
                    "Locate your PowerPoint file (.ppt or .pptx format) on your hard drive.",
                    "Drag and drop your file directly into the main upload box on this page, or click the box to manually browse for the file.",
                    "Wait a brief moment while the tool securely processes your file locally. It will systematically parse the document and extract the slide content and layouts.",
                    "Note: For extremely highly complex slides or obscure fonts, the underlying engine extracts high-resolution embedded previews to strictly ensure maximum visual fidelity.",
                    "Review the interface status, then click the prominent 'Convert to PDF' button to finalize the document compilation.",
                    "Once complete, easily click the Download button to save your brand new universally compatible PDF file permanently to your device."
                ]}
                faqs={[
                    {
                        question: "Will this tool preserve the animations and slide transitions from my PowerPoint?",
                        answer: "No, PDF documents are fundamentally designed to be static printable pages representing the final state of a slide. Fun transitions, video embeddings, and click-based animations from your original PowerPoint presentation cannot technically be preserved or executed in a standard PDF file."
                    },
                    {
                        question: "Why might the final PDF look slightly different from my original slides when editing?",
                        answer: "Since this specialized tool runs purely and safely within the sandboxed browser for your privacy, it uses a highly complex 'best-effort' mathematical extraction method. It heavily prioritizes extracting high-quality slide previews already embedded in the PowerPoint file structure by Microsoft Office. Highly complex proprietary custom fonts or very unique layout engines might create extremely minor visual differences compared to viewing it in the native PowerPoint app."
                    },
                    {
                        question: "Is my corporate or personal data truly secure when using this converter?",
                        answer: "Yes, absolutely. This is our primary advantage. Unlike almost all other popular free converters online that force you to upload your file to their remote cloud servers (where they might store or analyze it), our uniquely designed tool processes all the PowerPoint data completely locally on your own computer's processor. Your file literally never leaves your web browser."
                    },
                    {
                        question: "Can I convert protected, encrypted, or password-locked PPT files?",
                        answer: "Currently, due to the browser-based security sandbox, we cannot decrypt or convert password-protected Microsoft PowerPoint files. You will need to legitimately open the file in the native application, remove the password protection, save it, and then securely process it through our tool."
                    },
                    {
                        question: "What is the maximum file size I can upload for conversion?",
                        answer: "Because all processing happens safely on your device's own memory (RAM) and not our servers, the practical limit is determined by your computer's power rather than arbitrary limits. However, for the snappiest performance, we generally recommend files under 50MB."
                    }
                ]}
            />
        </ToolLayout>
    );
}
