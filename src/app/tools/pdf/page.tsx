'use client';

import ToolLayout from '@/components/ToolLayout';
import Link from 'next/link';
import { FileText, FilePlus, Image as ImageIcon, Minimize2 } from 'lucide-react';

const pdfTools = [
    {
        title: 'Merge PDF',
        description: 'Combine multiple PDF files into one single document.',
        icon: FilePlus,
        href: '/tools/pdf/merge',
        color: 'bg-red-100 text-red-600',
    },
    {
        title: 'Compress PDF',
        description: 'Reduce the file size of your PDF while maintaining quality.',
        icon: Minimize2,
        href: '/tools/pdf/compress',
        color: 'bg-orange-100 text-orange-600',
    },
    {
        title: 'Image to PDF',
        description: 'Convert JPG, PNG, or other image files to PDF.',
        icon: ImageIcon,
        href: '/tools/pdf/image-to-pdf',
        color: 'bg-yellow-100 text-yellow-600',
    },
    {
        title: 'PPT to PDF',
        description: 'Convert PowerPoint presentations (PPT, PPTX) to PDF.',
        icon: FileText,
        href: '/tools/pdf/ppt-to-pdf',
        color: 'bg-green-100 text-green-600',
    },
];

export default function PDFToolsPage() {
    return (
        <ToolLayout
            title="PDF Tools"
            description="Securely process your PDF files locally. No file limits."
            icon={FileText}
            category="PDF"
            extraContent={
                <div className="prose prose-blue max-w-none text-gray-600 mt-12 bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                    <h2>Advanced Client-Side PDF Manipulation Hub</h2>
                    <p>Welcome to the ultimate suite of free online PDF utilities hosted entirely by ByteForge AI. Portable Document Format (PDF) files are universally adopted for preserving strict formatting across different operating systems, but manipulating them without expensive legacy desktop software has historically been a massive headache. Our unified collection of PDF utilities solves this problem by directly bringing enterprise-grade document manipulation straight into your web browser.</p>
                    
                    <h3>Why Choose Our PDF Utilities?</h3>
                    <p>When dealing with highly sensitive legal contracts, proprietary academic research, or massive financial statements, security cannot be an afterthought. Unlike traditional cloud-based web tools that force you to blindly upload your strictly confidential documents to unknown remote servers, our entire suite operates on a strict <strong>Zero-Trust Client-Side Architecture</strong>. By aggressively leveraging WebAssembly (Wasm) and modern HTML5 APIs, your intense processing—whether merging documents or compressing heavy images—happens 100% locally on your computer's RAM. Your documents literally never leave your physical device.</p>
                    
                    <h3>Explore Our Specialized PDF Tools</h3>
                    <ul>
                        <li><strong>Merge PDFs:</strong> Seamlessly stitch dozens of incredibly fragmented documents together. This is utterly invaluable for students combining chaotic research papers or legal assistants aggressively organizing chronological case files into a single, flawlessly paginated master dossier.</li>
                        <li><strong>Compress PDFs:</strong> Frustrated by strict 10MB email attachment limits? Our dual-mode compression engine surgically strips hidden metadata and intelligently downscales embedded raster graphics to shrink your massive file sizes by up to 90% while rigidly preserving crisp, readable text dynamics.</li>
                        <li><strong>Image to PDF & PPT to PDF:</strong> Instantly convert graphical assets (JPG, PNG) or legacy slide decks (PPT, PPTX) directly into perfectly standardized, universally readable static PDF files. This is perfect for archiving critical presentations or transforming scattered camera roll photos into unified, printable portfolios.</li>
                    </ul>

                    <h3>The ByteForge Guarantee</h3>
                    <p>The ByteForge AI system tirelessly optimizes these tools to ensure absolutely blazing-fast execution speeds without any hidden paywalls, arbitrary daily usage limits, or obnoxious visual watermarks permanently ruining your pristine final documents. Simply execute the specific tool you strictly require, instantly generate your pristine final file locally, and confidently securely continue your professional workflow.</p>
                </div>
            }
        >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                {pdfTools.map((tool) => (
                    <Link
                        key={tool.title}
                        href={tool.href}
                        className="flex items-start p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md hover:border-blue-100 transition-all group"
                    >
                        <div className={`p-3 rounded-lg ${tool.color} mr-4 group-hover:scale-110 transition-transform`}>
                            <tool.icon className="h-6 w-6" />
                        </div>
                        <div>
                            <h3 className="font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                                {tool.title}
                            </h3>
                            <p className="text-sm text-gray-500">{tool.description}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </ToolLayout>
    );
}
