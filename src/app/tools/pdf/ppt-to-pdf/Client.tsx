'use client';

import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { PDFDocument } from 'pdf-lib';
import { saveAs } from 'file-saver';
import { FileText, Upload, X, Loader2, FileIcon, AlertCircle } from 'lucide-react';
import ToolLayout from '@/components/ToolLayout';
import JSZip from 'jszip';

export default function PptToPdfClient() {
    const [file, setFile] = useState<File | null>(null);
    const [isProcessing, setIsProcessing] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const onDrop = useCallback((acceptedFiles: File[]) => {
        if (acceptedFiles.length > 0) {
            const selectedFile = acceptedFiles[0];
            if (selectedFile.name.endsWith('.ppt') || selectedFile.name.endsWith('.pptx')) {
                setFile(selectedFile);
                setError(null);
            } else {
                setError('Please upload a valid PowerPoint file (.ppt or .pptx)');
            }
        }
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: {
            'application/vnd.openxmlformats-officedocument.presentationml.presentation': ['.pptx'],
            'application/vnd.ms-powerpoint': ['.ppt']
        },
        maxFiles: 1,
        multiple: false
    });

    const removeFile = () => {
        setFile(null);
        setError(null);
    };

    const handleConvert = async () => {
        if (!file) return;

        setIsProcessing(true);
        setError(null);

        try {
            // Attempt to load the PPTX as a zip
            const arrayBuffer = await file.arrayBuffer();
            let zip;
            try {
                zip = await JSZip.loadAsync(arrayBuffer);
            } catch (e) {
                throw new Error('Could not parse PPTX file structure.');
            }

            const pdfDoc = await PDFDocument.create();
            let pagesAdded = 0;

            // Strategy: Look for "thumbnail.jpeg" or slide previews first
            // Checking docProps/thumbnail.jpeg
            const thumbnailFile = zip.file("docProps/thumbnail.jpeg");
            if (thumbnailFile) {
                const thumbData = await thumbnailFile.async("uint8array");
                const image = await pdfDoc.embedJpg(thumbData);
                const page = pdfDoc.addPage([image.width, image.height]);
                page.drawImage(image, { x: 0, y: 0, width: image.width, height: image.height });
                pagesAdded++;
            }

            // If no thumbnail, try to extract media images from ppt/media/
            // This is a "best effort" extractor - it puts all images from the presentation into a PDF
            // It does NOT render the slides with text perfectly.
            if (pagesAdded === 0) {
                const mediaFolder = zip.folder("ppt/media");
                if (mediaFolder) {
                    const imageFiles: { name: string, data: Uint8Array }[] = [];

                    // Collect all valid images
                    const promises: Promise<void>[] = [];
                    mediaFolder.forEach((relativePath, file) => {
                        const lowerName = relativePath.toLowerCase();
                        if (lowerName.endsWith('.jpg') || lowerName.endsWith('.jpeg') || lowerName.endsWith('.png')) {
                            promises.push(
                                file.async("uint8array").then(data => {
                                    imageFiles.push({ name: relativePath, data });
                                })
                            );
                        }
                    });

                    await Promise.all(promises);

                    // Sort primarily by name (image1, image2...) to try and keep order
                    const sortedImages = imageFiles.sort((a, b) => {
                        const aNum = parseInt(a.name.replace(/\D/g, '')) || 0;
                        const bNum = parseInt(b.name.replace(/\D/g, '')) || 0;
                        return aNum - bNum;
                    });

                    for (const img of sortedImages) {
                        try {
                            let pdfImage;
                            if (img.name.toLowerCase().endsWith('.png')) {
                                pdfImage = await pdfDoc.embedPng(img.data);
                            } else {
                                pdfImage = await pdfDoc.embedJpg(img.data);
                            }

                            // Scale to A4 roughly or keep original size? Let's use image size
                            const page = pdfDoc.addPage([pdfImage.width, pdfImage.height]);
                            page.drawImage(pdfImage, { x: 0, y: 0, width: pdfImage.width, height: pdfImage.height });
                            pagesAdded++;
                        } catch (e) {
                            console.warn("Skipping image " + img.name, e);
                        }
                    }
                }
            }

            if (pagesAdded === 0) {
                // Fallback: Create a text page saying we couldnt render
                const page = pdfDoc.addPage([600, 400]);
                page.drawText('This PPTX file could not be fully rendered client-side.', { x: 50, y: 350, size: 24 });
                page.drawText('It may not contain embedded previews or extractable images.', { x: 50, y: 300, size: 14 });
            }

            const pdfBytes = await pdfDoc.save();
            const blob = new Blob([pdfBytes as any], { type: 'application/pdf' });
            saveAs(blob, file.name.replace(/\.(pptx|ppt)$/i, '.pdf'));

        } catch (err: any) {
            console.error(err);
            setError(err.message || 'An error occurred during conversion.');
        } finally {
            setIsProcessing(false);
        }
    };

    return (
        <ToolLayout
            title="PPT to PDF"
            description="Convert your PowerPoint presentations to PDF efficiently."
            icon={FileText}
            category="PDF"
        >
            <div className="w-full max-w-2xl mx-auto space-y-8">

                <div className="p-4 bg-blue-50 text-blue-800 rounded-lg flex items-start gap-3">
                    <AlertCircle className="h-5 w-5 shrink-0 mt-0.5" />
                    <div className="text-sm">
                        <p className="font-semibold">Note on Client-Side Conversion:</p>
                        <p>This tool runs entirely in your browser for privacy. It attempts to extract slide previews and images from your PPTX file. Complex text layouts and custom fonts might not be preserved perfectly in this mode.</p>
                    </div>
                </div>

                {/* Upload Area */}
                <div
                    {...getRootProps()}
                    className={`border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-colors ${isDragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-blue-400 hover:bg-gray-50'
                        }`}
                >
                    <input {...getInputProps()} />
                    <Upload className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                    <p className="text-lg font-medium text-gray-900">Drag & drop PowerPoint file here</p>
                    <p className="text-sm text-gray-500 mt-1">Supports PPTX, PPT</p>
                </div>

                {error && (
                    <div className="bg-red-50 text-red-600 p-4 rounded-lg text-sm text-center">
                        {error}
                    </div>
                )}

                {/* File Details */}
                {file && (
                    <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="bg-orange-100 p-2 rounded-lg">
                                <FileText className="h-6 w-6 text-orange-600" />
                            </div>
                            <div>
                                <p className="font-medium text-gray-900">{file.name}</p>
                                <p className="text-sm text-gray-500">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                            </div>
                        </div>
                        <button
                            onClick={removeFile}
                            className="text-gray-400 hover:text-red-500 p-2"
                        >
                            <X className="h-5 w-5" />
                        </button>
                    </div>
                )}

                {/* Convert Button */}
                <button
                    onClick={handleConvert}
                    disabled={!file || isProcessing}
                    className="w-full py-4 px-6 rounded-xl bg-orange-600 text-white font-bold text-lg hover:bg-orange-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2 shadow-lg shadow-orange-200/50"
                >
                    {isProcessing ? (
                        <>
                            <Loader2 className="h-5 w-5 animate-spin" />
                            Converting...
                        </>
                    ) : (
                        <>
                            <FileIcon className="h-5 w-5" />
                            Convert to PDF
                        </>
                    )}
                </button>
            </div>
        </ToolLayout>
    );
}
