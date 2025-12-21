'use client';

import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { PDFDocument } from 'pdf-lib';
import { saveAs } from 'file-saver';
import { FilePlus, Upload, X, ArrowUp, ArrowDown, Download, Loader2, FileText } from 'lucide-react';
import ToolLayout from '@/components/ToolLayout';

export default function MergePDFPage() {
    const [files, setFiles] = useState<File[]>([]);
    const [isProcessing, setIsProcessing] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const onDrop = useCallback((acceptedFiles: File[]) => {
        // Filter for PDF files just in case
        const pdfFiles = acceptedFiles.filter(file => file.type === 'application/pdf');
        if (pdfFiles.length !== acceptedFiles.length) {
            setError('Only PDF files are allowed.');
        } else {
            setError(null);
        }
        setFiles(prev => [...prev, ...pdfFiles]);
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: { 'application/pdf': ['.pdf'] },
        multiple: true
    });

    const removeFile = (index: number) => {
        setFiles(prev => prev.filter((_, i) => i !== index));
    };

    const moveFile = (index: number, direction: 'up' | 'down') => {
        setFiles(prev => {
            const newFiles = [...prev];
            if (direction === 'up' && index > 0) {
                [newFiles[index], newFiles[index - 1]] = [newFiles[index - 1], newFiles[index]];
            } else if (direction === 'down' && index < newFiles.length - 1) {
                [newFiles[index], newFiles[index + 1]] = [newFiles[index + 1], newFiles[index]];
            }
            return newFiles;
        });
    };

    const handleMerge = async () => {
        if (files.length < 2) {
            setError('Please upload at least 2 PDF files to merge.');
            return;
        }

        setIsProcessing(true);
        setError(null);

        try {
            const mergedPdf = await PDFDocument.create();

            for (const file of files) {
                const fileBuffer = await file.arrayBuffer();
                const pdf = await PDFDocument.load(fileBuffer);
                const copiedPages = await mergedPdf.copyPages(pdf, pdf.getPageIndices());
                copiedPages.forEach((page) => mergedPdf.addPage(page));
            }

            const mergedPdfFile = await mergedPdf.save();
            const blob = new Blob([mergedPdfFile], { type: 'application/pdf' });
            saveAs(blob, 'merged-document.pdf');
        } catch (err) {
            console.error(err);
            setError('An error occurred while merging PDFs. Please try again with valid PDF files.');
        } finally {
            setIsProcessing(false);
        }
    };

    return (
        <ToolLayout
            title="Merge PDF"
            description="Combine multiple PDF files into one document in the order you want."
            icon={FilePlus}
            category="PDF"
        >
            <div className="w-full max-w-2xl mx-auto space-y-8">

                {/* Upload Area */}
                <div
                    {...getRootProps()}
                    className={`border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-colors ${isDragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-blue-400 hover:bg-gray-50'
                        }`}
                >
                    <input {...getInputProps()} />
                    <Upload className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                    <p className="text-lg font-medium text-gray-900">Drag & drop PDF files here</p>
                    <p className="text-sm text-gray-500 mt-1">or click to select files</p>
                </div>

                {error && (
                    <div className="bg-red-50 text-red-600 p-4 rounded-lg text-sm text-center">
                        {error}
                    </div>
                )}

                {/* File List */}
                {files.length > 0 && (
                    <div className="space-y-3">
                        <h3 className="font-semibold text-gray-700">Selected Files ({files.length})</h3>
                        {files.map((file, index) => (
                            <div key={`${file.name}-${index}`} className="flex items-center justify-between bg-white p-3 rounded-lg border border-gray-200 shadow-sm">
                                <div className="flex items-center gap-3 overflow-hidden">
                                    <div className="bg-red-100 p-2 rounded-lg">
                                        <FileText className="h-5 w-5 text-red-600" />
                                    </div>
                                    <span className="text-sm font-medium text-gray-700 truncate max-w-[200px] sm:max-w-xs">{file.name}</span>
                                    <span className="text-xs text-gray-400">({(file.size / 1024).toFixed(1)} KB)</span>
                                </div>

                                <div className="flex items-center gap-2">
                                    <button
                                        onClick={() => moveFile(index, 'up')}
                                        disabled={index === 0}
                                        className="p-1 hover:bg-gray-100 rounded disabled:opacity-30 text-gray-500"
                                        title="Move Up"
                                    >
                                        <ArrowUp className="h-4 w-4" />
                                    </button>
                                    <button
                                        onClick={() => moveFile(index, 'down')}
                                        disabled={index === files.length - 1}
                                        className="p-1 hover:bg-gray-100 rounded disabled:opacity-30 text-gray-500"
                                        title="Move Down"
                                    >
                                        <ArrowDown className="h-4 w-4" />
                                    </button>
                                    <button
                                        onClick={() => removeFile(index)}
                                        className="p-1 hover:bg-red-50 text-gray-400 hover:text-red-500 rounded transition-colors"
                                        title="Remove"
                                    >
                                        <X className="h-4 w-4" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Action Button */}
                <button
                    onClick={handleMerge}
                    disabled={files.length < 2 || isProcessing}
                    className="w-full py-4 px-6 rounded-xl bg-blue-600 text-white font-bold text-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2 shadow-lg shadow-blue-200/50"
                >
                    {isProcessing ? (
                        <>
                            <Loader2 className="h-5 w-5 animate-spin" />
                            Processing...
                        </>
                    ) : (
                        <>
                            <FilePlus className="h-5 w-5" />
                            Merge {files.length > 0 ? `${files.length} PDFs` : 'PDFs'}
                        </>
                    )}
                </button>
            </div>
        </ToolLayout>
    );
}
