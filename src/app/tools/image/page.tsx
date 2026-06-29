import type { Metadata } from 'next';
import ToolLayout from '@/components/ToolLayout';
import Link from 'next/link';
import { Image as ImageIcon, Minimize2, ScanLine, Crop } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Image Tools - Online Image Compression, Resizing & Custom QR Codes',
    description: 'Compress, resize, and optimize your images locally in your browser. Create custom QR codes for your brand without signups or limits.',
    keywords: ['image tools', 'image compressor', 'qr code generator', 'image resizer', 'free image editor'],
    alternates: {
        canonical: '/tools/image',
    },
};

const imageTools = [
    {
        title: 'Image Compressor',
        description: 'Compress JPG, PNG, and WebP images without quality loss.',
        icon: Minimize2,
        href: '/tools/image/compress',
        color: 'bg-purple-100 text-purple-600',
    },
    {
        title: 'QR Code Generator',
        description: 'Create custom QR codes for URLs, WiFi, and more.',
        icon: ScanLine,
        href: '/tools/image/qr-generator',
        color: 'bg-blue-100 text-blue-600',
    },
    {
        title: 'Image Resizer',
        description: 'Resize images to specific dimensions easily.',
        icon: Crop,
        href: '/tools/image/resizer',
        color: 'bg-pink-100 text-pink-600',
    },
];

export default function ImageToolsPage() {
    return (
        <ToolLayout
            title="Image Tools"
            description="Edit, convert, and optimize your images in seconds."
            icon={ImageIcon}
            category="Image"
            extraContent={
                <div className="prose prose-blue max-w-none text-gray-600 mt-12 bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                    <h2>The Comprehensive Image Processing Suite</h2>
                    <p>In modern digital workflows, raw image files are almost never ready for immediate publication. Whether you are a web developer desperately trying to optimize massive hero images for a strict Google Lighthouse audit, a social media manager constantly cropping graphics to exact pixel dimensions, or a local business owner aggressively plastering custom QR codes across physical marketing materials, having instantaneous access to a reliable, private image processing toolkit is absolutely essential.</p>
                    
                    <h3>Pixel-Perfect Client-Side Execution</h3>
                    <p>Virtually all modern image editors rely on invasive cloud infrastructure, forcing you to painstakingly upload your heavy, high-resolution photographs to remote servers before any actual manipulation begins. ByteForge AI aggressively rejects this outdated architecture. Our bespoke image utilities strictly utilize advanced HTML5 Canvas and browser-native WebGL technologies to physically process your raw pixels exactly where they sit: on your local machine. This guarantees completely zero waiting times for cloud uploads and provides unmatched cryptographic privacy for your intensely personal photographs and strictly confidential corporate digital assets.</p>

                    <h3>Explore Our specialized Image Utilities</h3>
                    <ul>
                        <li><strong>Image Compressor:</strong> High-resolution photography is stunning, but 10MB file sizes fundamentally destroy website load speeds and rapidly consume precious smartphone storage. Our exceedingly intelligent compression algorithms surgically analyze and remove virtually imperceptible redundant color data, frequently shrinking target files by 80-90% while rigidly preserving the critical apparent visual quality of your PNGs, JPGs, and next-gen WebP images.</li>
                        <li><strong>Image Resizer:</strong> Stop blindly guessing technical dimensions inside clunky native desktop applications. Our dedicated resizing engine empowers you to mathematically lock strict aspect ratios or rigorously force exact custom pixel widths, ensuring your digital graphics flawlessly fit specific strict social media banners, website grids, and rigid professional avatar requirements.</li>
                        <li><strong>QR Code Generator:</strong> Instantly physically bridge the complex digital and analog worlds. Our highly robust QR engine allows you to rapidly encode massively complex URLs, deeply structured contact vCards, or hidden WiFi network credentials into perfectly crisp, infinitely scalable, high-contrast vector graphics perfectly ready for immediate commercial printing.</li>
                    </ul>

                    <h3>Consistent, Unrestricted Access</h3>
                    <p>Designed with absolute strict intent by ByteForge AI, this entire collection of graphical utilities remains entirely free. There are absolutely no arbitrary server processing queues, zero strict daily upload constraints, and we will definitively never secretly stamp a horribly obnoxious promotional watermark across your beautifully optimized images.</p>
                </div>
            }
        >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                {imageTools.map((tool) => (
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
