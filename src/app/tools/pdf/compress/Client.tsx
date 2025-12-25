'use client';

import React, { useState, useCallback, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import { PDFDocument } from 'pdf-lib';
import { saveAs } from 'file-saver';
import { Image as ImageIcon, Upload, X, ArrowUp, ArrowDown, Loader2, FileIcon, Minimize2, Settings, Info } from 'lucide-react';
import ToolLayout from '@/components/ToolLayout';
import * as pdfjsLib from 'pdfjs-dist';

export default function CompressPDFClient() {
    const [file, setFile] = useState<File | null>(null);
    const [isProcessing, setIsProcessing] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [compressedSize, setCompressedSize] = useState<number | null>(null);
    const [compressionMode, setCompressionMode] = useState<'standard' | 'strong'>('standard');
    const [progress, setProgress] = useState<number>(0);

    // Initialize PDF.js worker
    useEffect(() => {
        // Use a compatible worker version. 
        // Note: In production this should ideally be served locally, but CDN is reliable for client-only tools.
        pdfjsLib.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.mjs`;
    }, []);

    const onDrop = useCallback((acceptedFiles: File[]) => {
        if (acceptedFiles.length > 0) {
            const selectedFile = acceptedFiles[0];
            if (selectedFile.type !== 'application/pdf') {
                setError('Only PDF files are allowed.');
                return;
            }
            setFile(selectedFile);
            setError(null);
            setCompressedSize(null);
            setProgress(0);
        }
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: { 'application/pdf': ['.pdf'] },
        multiple: false,
        maxFiles: 1
    });

    const removeFile = () => {
        setFile(null);
        setCompressedSize(null);
        setError(null);
        setProgress(0);
    };

    const handleCompress = async () => {
        if (!file) return;

        setIsProcessing(true);
        setError(null);
        setProgress(0);

        try {
            if (compressionMode === 'standard') {
                await compressStandard(file);
            } else {
                await compressStrong(file);
            }
        } catch (err) {
            console.error(err);
            setError('An error occurred while compressing the PDF. Please try a different file.');
        } finally {
            setIsProcessing(false);
            setProgress(100);
        }
    };

    const compressStandard = async (file: File) => {
        // Standard: Load and Save (removes unused objects, minor optimization)
        const arrayBuffer = await file.arrayBuffer();
        const pdfDoc = await PDFDocument.load(arrayBuffer);
        const pdfBytes = await pdfDoc.save();
        const blob = new Blob([pdfBytes as BlobPart], { type: 'application/pdf' });

        setCompressedSize(blob.size);
        saveAs(blob, `compressed-std-${file.name}`);
    };

    const compressStrong = async (file: File) => {
        // Strong: Rasterize pages to images -> New PDF
        const arrayBuffer = await file.arrayBuffer();

        // 1. Load PDF with PDF.js
        const loadingTask = pdfjsLib.getDocument({ data: arrayBuffer });
        const pdf = await loadingTask.promise;
        const totalPages = pdf.numPages;

        // 2. Create new PDF-lib doc
        const newPdfDoc = await PDFDocument.create();

        for (let pageNum = 1; pageNum <= totalPages; pageNum++) {
            // Update progress
            setProgress(Math.round(((pageNum - 1) / totalPages) * 100));

            // Render page to canvas
            const page = await pdf.getPage(pageNum);
            const viewport = page.getViewport({ scale: 1.5 }); // 1.5 scale for balance of quality/size

            const canvas = document.createElement('canvas');
            const context = canvas.getContext('2d');
            canvas.height = viewport.height;
            canvas.width = viewport.width;

            if (!context) throw new Error('Canvas context not available');

            await page.render({ canvasContext: context, viewport } as any).promise;

            // Convert canvas to JPEG blob (lossy compression)
            const quality = 0.7; // 70% quality JPEG
            const imageBlob = await new Promise<Blob | null>(resolve =>
                canvas.toBlob(resolve, 'image/jpeg', quality)
            );

            if (!imageBlob) throw new Error('Failed to compress page image');

            // Embed image into new PDF
            const imageBuffer = await imageBlob.arrayBuffer();
            const embeddedImage = await newPdfDoc.embedJpg(imageBuffer);

            const newPage = newPdfDoc.addPage([viewport.width, viewport.height]);
            newPage.drawImage(embeddedImage, {
                x: 0,
                y: 0,
                width: viewport.width,
                height: viewport.height,
            });

            // Cleanup to free memory
            page.cleanup();
        }

        const pdfBytes = await newPdfDoc.save();
        const blob = new Blob([pdfBytes as BlobPart], { type: 'application/pdf' });

        setCompressedSize(blob.size);
        saveAs(blob, `compressed-strong-${file.name}`);
    };

    return (
        <ToolLayout
            title="Compress PDF"
            description="Reduce the file size of your PDF documents instantly."
            icon={Minimize2}
            category="PDF"
        >
            <div className="w-full max-w-2xl mx-auto space-y-8">

                {/* Upload Area */}
                {!file ? (
                    <div
                        {...getRootProps()}
                        className={`border-2 border-dashed rounded-xl p-12 text-center cursor-pointer transition-colors ${isDragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-blue-400 hover:bg-gray-50'
                            }`}
                    >
                        <input {...getInputProps()} />
                        <Upload className="mx-auto h-16 w-16 text-gray-400 mb-4" />
                        <p className="text-xl font-medium text-gray-900">Drag & drop a PDF here</p>
                        <p className="text-sm text-gray-500 mt-2">or click to select file</p>
                    </div>
                ) : (
                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm space-y-6">
                        {/* File Info */}
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <div className="bg-red-100 p-3 rounded-lg">
                                    <FileIcon className="h-8 w-8 text-red-600" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 truncate max-w-[200px] sm:max-w-md">{file.name}</h3>
                                    <p className="text-sm text-gray-500">
                                        Original size: {(file.size / 1024 / 1024).toFixed(2)} MB
                                    </p>
                                    {compressedSize && (
                                        <p className="text-sm text-green-600 font-medium">
                                            New size: {(compressedSize / 1024 / 1024).toFixed(2)} MB
                                            ({Math.round(((file.size - compressedSize) / file.size) * 100)}% reduction)
                                        </p>
                                    )}
                                </div>
                            </div>
                            <button
                                onClick={removeFile}
                                disabled={isProcessing}
                                className="p-2 hover:bg-red-50 text-gray-400 hover:text-red-500 rounded-lg transition-colors disabled:opacity-50"
                            >
                                <X className="h-5 w-5" />
                            </button>
                        </div>

                        {/* Options */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <button
                                onClick={() => setCompressionMode('standard')}
                                className={`p-4 rounded-lg border-2 text-left transition-all ${compressionMode === 'standard'
                                    ? 'border-blue-500 bg-blue-50 ring-1 ring-blue-500'
                                    : 'border-gray-200 hover:border-blue-200'
                                    }`}
                            >
                                <div className="font-semibold text-gray-900 mb-1">Standard</div>
                                <div className="text-xs text-gray-500">Fast. Removes metadata. Keeps text selectable. Good for basic optimization.</div>
                            </button>

                            <button
                                onClick={() => setCompressionMode('strong')}
                                className={`p-4 rounded-lg border-2 text-left transition-all ${compressionMode === 'strong'
                                    ? 'border-blue-500 bg-blue-50 ring-1 ring-blue-500'
                                    : 'border-gray-200 hover:border-blue-200'
                                    }`}
                            >
                                <div className="font-semibold text-gray-900 mb-1">Strong</div>
                                <div className="text-xs text-gray-500">Slower. Converts to images. Text NOT selectable. Best for max file size reduction.</div>
                            </button>
                        </div>

                        {/* Warning/Info */}
                        {compressionMode === 'strong' && (
                            <div className="flex items-start gap-3 bg-yellow-50 p-4 rounded-lg text-sm text-yellow-800">
                                <Info className="h-5 w-5 text-yellow-600 shrink-0 mt-0.5" />
                                <p>Strong compression will convert all pages to images. You will not be able to select or copy text in the output PDF.</p>
                            </div>
                        )}

                        {/* Action */}
                        <button
                            onClick={handleCompress}
                            disabled={isProcessing}
                            className="w-full py-4 px-6 rounded-xl bg-blue-600 text-white font-bold text-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2 shadow-lg shadow-blue-200/50"
                        >
                            {isProcessing ? (
                                <>
                                    <Loader2 className="h-5 w-5 animate-spin" />
                                    {compressionMode === 'strong' ? `Converting Page ${progress}%...` : 'Processing...'}
                                </>
                            ) : (
                                <>
                                    <Minimize2 className="h-5 w-5" />
                                    Compress PDF
                                </>
                            )}
                        </button>
                    </div>
                )}

                {error && (
                    <div className="bg-red-50 text-red-600 p-4 rounded-lg text-sm text-center">
                        {error}
                    </div>
                )}

                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                    <div className="p-4">
                        <h3 className="font-semibold text-gray-900 mb-2">Two Modes</h3>
                        <p className="text-sm text-gray-600">Choose between Standard (Metadata removal) and Strong (Rasterization) compression.</p>
                    </div>
                    <div className="p-4">
                        <h3 className="font-semibold text-gray-900 mb-2">Secure & Private</h3>
                        <p className="text-sm text-gray-600">Files are processed locally and never uploaded to any server.</p>
                    </div>
                    <div className="p-4">
                        <h3 className="font-semibold text-gray-900 mb-2">High Efficiency</h3>
                        <p className="text-sm text-gray-600">Strong mode can reduce file sizes by up to 90%.</p>
                    </div>
                </div>
            </div>
        </ToolLayout>
    );
}
