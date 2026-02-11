'use client';

import React, { useState, useCallback, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import imageCompression from 'browser-image-compression';
import { saveAs } from 'file-saver';
import { Minimize2, Upload, X, Download, Loader2, Image as ImageIcon, Settings2, RefreshCw } from 'lucide-react';

interface CompressedFile {
    original: File;
    compressed: File | null;
    status: 'pending' | 'processing' | 'done' | 'error';
}

export default function ImageCompressorClient() {
    const [files, setFiles] = useState<CompressedFile[]>([]);
    const [quality, setQuality] = useState<number>(0.8);
    const [maxSizeMB, setMaxSizeMB] = useState<number>(1);
    const [isProcessing, setIsProcessing] = useState(false);

    // Re-compress files when settings change
    const recompressAll = async () => {
        if (files.length === 0) return;

        const filesToProcess = files.map(f => ({ ...f, status: 'pending' as const }));
        setFiles(filesToProcess);

        for (const fileObj of filesToProcess) {
            await compressSingleFile(fileObj.original);
        }
    };

    const compressSingleFile = async (file: File) => {
        // Update status to processing
        setFiles(prev => prev.map(f => f.original === file ? { ...f, status: 'processing' } : f));

        try {
            const options = {
                maxSizeMB: maxSizeMB,
                maxWidthOrHeight: 1920,
                useWebWorker: true,
                initialQuality: quality,
            };

            const compressed = await imageCompression(file, options);

            setFiles(prev => prev.map(f => f.original === file ? { ...f, compressed, status: 'done' } : f));
        } catch (error) {
            console.error(error);
            setFiles(prev => prev.map(f => f.original === file ? { ...f, status: 'error' } : f));
        }
    };

    const onDrop = useCallback(async (acceptedFiles: File[]) => {
        const newFiles = acceptedFiles.map(file => ({
            original: file,
            compressed: null,
            status: 'pending' as const
        }));

        setFiles(prev => [...prev, ...newFiles]);

        // Process new files
        for (const fileObj of newFiles) {
            await compressSingleFile(fileObj.original);
        }
    }, [quality, maxSizeMB]); // Dependencies for initial compression of dropped files

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
        <div className="w-full max-w-4xl mx-auto space-y-8">

            {/* Settings Control Panel */}
            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-6">
                <div className="flex items-center gap-2 mb-4">
                    <Settings2 className="h-5 w-5 text-blue-600" />
                    <h3 className="font-semibold text-gray-900">Compression Settings</h3>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Quality Slider */}
                    <div className="space-y-3">
                        <div className="flex justify-between">
                            <label className="text-sm font-medium text-gray-700">Image Quality</label>
                            <span className="text-sm font-bold text-blue-600">{Math.round(quality * 100)}%</span>
                        </div>
                        <input
                            type="range"
                            min="0.1"
                            max="1"
                            step="0.05"
                            value={quality}
                            onChange={(e) => setQuality(parseFloat(e.target.value))}
                            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                        />
                        <p className="text-xs text-gray-500">Lower quality = smaller file size.</p>
                    </div>

                    {/* Max Size Input */}
                    <div className="space-y-3">
                        <div className="flex justify-between">
                            <label className="text-sm font-medium text-gray-700">Max File Size (MB)</label>
                            <span className="text-sm font-bold text-blue-600">{maxSizeMB} MB</span>
                        </div>
                        <input
                            type="number"
                            min="0.1"
                            max="50"
                            step="0.1"
                            value={maxSizeMB}
                            onChange={(e) => setMaxSizeMB(parseFloat(e.target.value))}
                            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-100 focus:border-blue-400 outline-none"
                        />
                        <p className="text-xs text-gray-500">Target maximum file size.</p>
                    </div>
                </div>

                {/* Apply Button (if files exist) */}
                {files.length > 0 && (
                    <div className="flex justify-end pt-2">
                        <button
                            onClick={recompressAll}
                            className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium"
                        >
                            <RefreshCw className="h-4 w-4" />
                            Apply Changes
                        </button>
                    </div>
                )}
            </div>

            {/* Upload Area */}
            <div
                {...getRootProps()}
                className={`border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-colors ${isDragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-blue-400 hover:bg-gray-50'
                    }`}
            >
                <input {...getInputProps()} />
                <Upload className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                <p className="text-lg font-medium text-gray-900">Drag & drop images here</p>
                <p className="text-sm text-gray-500 mt-1">Supports JPG, PNG, WebP</p>
            </div>

            {/* File List */}
            {files.length > 0 && (
                <div className="space-y-3">
                    <h3 className="font-semibold text-gray-700">Images ({files.length})</h3>
                    {files.map((item, index) => (
                        <div key={`${item.original.name}-${index}`} className="flex flex-col sm:flex-row items-center justify-between bg-white p-4 rounded-xl border border-gray-200 shadow-sm gap-4">
                            <div className="flex items-center gap-4 overflow-hidden w-full sm:w-auto">
                                <div className="bg-purple-100 p-2 rounded-lg shrink-0">
                                    <ImageIcon className="h-6 w-6 text-purple-600" />
                                </div>
                                <div className="min-w-0">
                                    <p className="text-sm font-medium text-gray-900 truncate max-w-[150px] sm:max-w-xs">{item.original.name}</p>
                                    <div className="flex flex-wrap items-center gap-2 text-xs text-gray-500">
                                        <span>Original: {(item.original.size / 1024).toFixed(1)} KB</span>
                                        {item.compressed && (
                                            <>
                                                <span className="text-gray-300">|</span>
                                                <span className="text-green-600 font-medium">
                                                    {(item.compressed.size / 1024).toFixed(1)} KB
                                                    <span className="ml-1 bg-green-100 text-green-700 px-1.5 py-0.5 rounded-full text-[10px]">
                                                        -{Math.round((1 - item.compressed.size / item.original.size) * 100)}%
                                                    </span>
                                                </span>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
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
    );
}
