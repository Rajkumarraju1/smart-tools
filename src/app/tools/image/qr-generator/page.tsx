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
