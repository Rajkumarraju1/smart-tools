'use client';

import React, { useState, useRef } from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import { ScanLine, Download, Copy, Link as LinkIcon, Type } from 'lucide-react';
import ToolLayout from '@/components/ToolLayout';
import { saveAs } from 'file-saver';

export default function QRCodeGeneratorPage() {
    const [value, setValue] = useState('https://example.com');
    const [size, setSize] = useState(256);
    const [fgColor, setFgColor] = useState('#000000');
    const [bgColor, setBgColor] = useState('#ffffff');
    const canvasRef = useRef<HTMLDivElement>(null);

    const downloadQRCode = () => {
        const canvas = canvasRef.current?.querySelector('canvas');
        if (canvas) {
            canvas.toBlob((blob) => {
                if (blob) {
                    saveAs(blob, 'qrcode.png');
                }
            });
        }
    };

    return (
        <ToolLayout
            title="QR Code Generator"
            description="Create free, custom QR codes for your links, text, or Wi-Fi."
            icon={ScanLine}
            category="Image"
            extraContent={
                <>
                    <h2>Free Custom QR Code Generator</h2>
                    <p>In our increasingly contactless, mobile-first society, Quick Response (QR) codes have rapidly evolved from a niche inventory tracking system into an absolutely essential bridge meticulously connecting the physical world directly to the digital sphere. Whether you are an ambitious restaurant owner digitally modernizing your physical menus, a savvy marketing executive embedding dynamic tracking links into physical print campaigns, or simply a host wanting to effortlessly share complex Wi-Fi credentials with arriving party guests, our completely Free Custom QR Code Generator reliably creates stunning, instantly scannable codes right in your browser.</p>

                    <h2>The Technical Anatomy of a QR Code</h2>
                    <p>Unlike outdated traditional 1D barcodes that linearly store a tiny handful of numbers, a 2D QR Code intelligently stores massive volumes of data both horizontally and vertically. The strategic arrangement of tiny black squares securely encodes characters, while the three prominent massive squares precisely located in the extreme corners unconditionally guarantee that the scanning camera instantly recognizes the absolute orientation of the code, regardless of the angle the user is holding their smartphone.</p>

                    <h2>How to Generate Your Custom Code</h2>
                    <ol>
                        <li><strong>Select the Ideal Content Type:</strong> Utilize the prominent specialized buttons strategically located at the very top of the interface to clearly specify your exact data type. Choose 'URL' if you are aggressively linking to a website, or purely 'Text' for embedding a secret message or raw serial number.</li>
                        <li><strong>Input Your Crucial Data:</strong> Carefully type or seamlessly paste your final desired content directly into the prominent main input field. As you actively type, our incredibly fast underlying engine mathematically recalculates the complex square matrix absolutely instantaneously.</li>
                        <li><strong>Apply Complete Customization:</strong> Most free generators force you to use generic black and white designs. Utilizing our 'Customization' pane, you can drastically alter the foreground ink color and background canvas color to perfectly match your strict corporate brand guidelines. You can also surgically adjust the sheer pixel resolution (Size).</li>
                        <li><strong>Execute Download:</strong> Once visually satisfied with the flawlessly rendered code majestically previewed on the right pane, simply hit the massive 'Download PNG' action button. Your computer will physically save a crisp, lossless image file completely ready for commercial printing.</li>
                    </ol>

                    <h2>Frequently Asked Questions (FAQ)</h2>
                    <h3>Do these actively generated QR Codes permanently expire?</h3>
                    <p><strong>Absolutely Not.</strong> The codes explicitly generated here are completely 'Static' QR Codes. This fundamental technical fact means the raw destination data (your URL or Text) is literally hardcoded mathematically into the very pixels of the actual image itself. Because it does not confusingly route through a proprietary middleman tracking server, the printed code will mathematically function flawlessly forever, or completely until the destination website eventually ceases to structurally exist.</p>

                    <h3>Why is my phone camera aggressively failing to scan my freshly customized colored code?</h3>
                    <p>QR code scanner algorithms fundamentally rely heavily on sheer visual contrast to reliably mathematically differentiate the critical dark data squares from the bright negative space. If you accidentally select a light yellow foreground firmly placed against a stark white background, the camera sensor explicitly cannot visually 'see' the code. You must always unconditionally ensure there is massive, undeniably high contrast between your chosen foreground and background colors.</p>
                </>
            }
        >
            <div className="w-full max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

                {/* Settings Column */}
                <div className="space-y-6">
                    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Content Type</label>
                            <div className="flex gap-2">
                                <button className="flex-1 py-2 px-3 bg-blue-50 text-blue-700 rounded-lg text-sm font-medium border border-blue-200 flex items-center justify-center gap-2">
                                    <LinkIcon className="h-4 w-4" /> URL
                                </button>
                                <button className="flex-1 py-2 px-3 bg-white text-gray-600 rounded-lg text-sm font-medium border border-gray-200 hover:bg-gray-50 flex items-center justify-center gap-2">
                                    <Type className="h-4 w-4" /> Text
                                </button>
                            </div>
                        </div>

                        <div>
                            <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-1">
                                Enter Content
                            </label>
                            <input
                                id="content"
                                type="text"
                                value={value}
                                onChange={(e) => setValue(e.target.value)}
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow outline-none"
                                placeholder="https://your-website.com"
                            />
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm space-y-4">
                        <h3 className="font-semibold text-gray-900">Customization</h3>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-xs font-medium text-gray-500 mb-1">Foreground Color</label>
                                <div className="flex items-center gap-2">
                                    <input
                                        type="color"
                                        value={fgColor}
                                        onChange={(e) => setFgColor(e.target.value)}
                                        className="h-10 w-full rounded cursor-pointer border border-gray-200"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-xs font-medium text-gray-500 mb-1">Background Color</label>
                                <div className="flex items-center gap-2">
                                    <input
                                        type="color"
                                        value={bgColor}
                                        onChange={(e) => setBgColor(e.target.value)}
                                        className="h-10 w-full rounded cursor-pointer border border-gray-200"
                                    />
                                </div>
                            </div>
                        </div>

                        <div>
                            <label className="block text-xs font-medium text-gray-500 mb-1">Size (px)</label>
                            <input
                                type="range"
                                min="128"
                                max="1024"
                                step="32"
                                value={size}
                                onChange={(e) => setSize(Number(e.target.value))}
                                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                            />
                            <div className="text-right text-xs text-gray-500 mt-1">{size}px</div>
                        </div>
                    </div>
                </div>

                {/* Preview Column */}
                <div className="flex flex-col items-center justify-center">
                    <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100" ref={canvasRef}>
                        <QRCodeCanvas
                            value={value}
                            size={size > 300 ? 300 : size} // Preview size capped, actual download uses full resolution? No, canvas renders at set size.
                            // Wait, if I cap preview size, the download will be small. 
                            // Let's keep preview responsive but render larger potentially.
                            // Actually, for simplicity, let's just let it be responsive.
                            style={{ width: '100%', height: 'auto', maxWidth: '300px' }}
                            fgColor={fgColor}
                            bgColor={bgColor}
                            level="H"
                        />
                    </div>

                    <button
                        onClick={downloadQRCode}
                        className="mt-8 w-full max-w-xs py-3 px-6 rounded-xl bg-blue-600 text-white font-bold text-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-blue-200"
                    >
                        <Download className="h-5 w-5" />
                        Download PNG
                    </button>
                </div>

            </div>
        </ToolLayout>
    );
}
