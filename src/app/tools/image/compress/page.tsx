'use client';

import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import imageCompression from 'browser-image-compression';
import { saveAs } from 'file-saver';
import { Minimize2, Upload, X, Download, Loader2, Image as ImageIcon } from 'lucide-react';
import ToolLayout from '@/components/ToolLayout';

interface CompressedFile {
    original: File;
    compressed: File | null;
    status: 'pending' | 'processing' | 'done' | 'error';
}

export default function ImageCompressorPage() {
    const [files, setFiles] = useState<CompressedFile[]>([]);

    const processFile = async (file: File) => {
        try {
            const options = {
                maxSizeMB: 1,
                maxWidthOrHeight: 1920,
                useWebWorker: true,
            };

            const compressedFile = await imageCompression(file, options);
            return compressedFile;
        } catch (error) {
            console.log(error);
            throw error;
        }
    };

    const onDrop = useCallback(async (acceptedFiles: File[]) => {
        const newFiles = acceptedFiles.map(file => ({
            original: file,
            compressed: null,
            status: 'pending' as const
        }));

        setFiles(prev => [...prev, ...newFiles]);

        // Process files immediately
        for (const fileObj of newFiles) {
            setFiles(prev => prev.map(f => f.original === fileObj.original ? { ...f, status: 'processing' } : f));

            try {
                const compressed = await processFile(fileObj.original);
                setFiles(prev => prev.map(f => f.original === fileObj.original ? { ...f, compressed, status: 'done' } : f));
            } catch (err) {
                setFiles(prev => prev.map(f => f.original === fileObj.original ? { ...f, status: 'error' } : f));
            }
        }
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: { 'image/*': ['.png', '.jpg', '.jpeg', '.webp'] },
    });

    const removeFile = (index: number) => {
        setFiles(prev => prev.filter((_, i) => i !== index));
    };

    const downloadFile = (file: File) => {
        saveAs(file, `compressed-${file.name}`);
    };

    return (
        <ToolLayout
            title="Image Compressor"
            description="Compress images automatically while maintaining the best quality."
            icon={Minimize2}
            category="Image"
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
                    <p className="text-lg font-medium text-gray-900">Drag & drop images here</p>
                    <p className="text-sm text-gray-500 mt-1">Updates to 80% compression</p>
                </div>

                {/* File List */}
                {files.length > 0 && (
                    <div className="space-y-3">
                        <h3 className="font-semibold text-gray-700">Images ({files.length})</h3>
                        {files.map((item, index) => (
                            <div key={`${item.original.name}-${index}`} className="flex items-center justify-between bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
                                <div className="flex items-center gap-4 overflow-hidden">
                                    <div className="bg-purple-100 p-2 rounded-lg">
                                        <ImageIcon className="h-6 w-6 text-purple-600" />
                                    </div>
                                    <div className="min-w-0">
                                        <p className="text-sm font-medium text-gray-900 truncate max-w-[150px] sm:max-w-xs">{item.original.name}</p>
                                        <div className="flex items-center gap-2 text-xs text-gray-500">
                                            <span>Original: {(item.original.size / 1024).toFixed(1)} KB</span>
                                            {item.compressed && (
                                                <>
                                                    <span className="text-gray-300">|</span>
                                                    <span className="text-green-600 font-medium">
                                                        Compressed: {(item.compressed.size / 1024).toFixed(1)} KB
                                                        (-{Math.round((1 - item.compressed.size / item.original.size) * 100)}%)
                                                    </span>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center gap-2">
                                    {item.status === 'processing' && <Loader2 className="h-5 w-5 animate-spin text-blue-500" />}
                                    {item.status === 'done' && item.compressed && (
                                        <button
                                            onClick={() => downloadFile(item.compressed!)}
                                            className="p-2 bg-blue-50 text-blue-600 hover:bg-blue-100 rounded-lg transition-colors font-medium text-sm flex items-center gap-1"
                                        >
                                            <Download className="h-4 w-4" />
                                            <span className="hidden sm:inline">Download</span>
                                        </button>
                                    )}
                                    {item.status === 'error' && <span className="text-red-500 text-xs">Error</span>}

                                    <button
                                        onClick={() => removeFile(index)}
                                        className="p-2 hover:bg-red-50 text-gray-400 hover:text-red-500 rounded-lg transition-colors"
                                    >
                                        <X className="h-4 w-4" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </ToolLayout>
    );
}
