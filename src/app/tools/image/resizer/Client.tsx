'use client';

import React, { useState, useCallback, useRef, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import { saveAs } from 'file-saver';
import { Crop, Upload, X, Download, RefreshCw, Image as ImageIcon, ArrowRight } from 'lucide-react';

export default function ImageResizerClient() {
    const [file, setFile] = useState<File | null>(null);
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);
    const [width, setWidth] = useState<number>(0);
    const [height, setHeight] = useState<number>(0);
    const [maintainAspectRatio, setMaintainAspectRatio] = useState(true);
    const [aspectRatio, setAspectRatio] = useState<number>(1);
    const [originalDimensions, setOriginalDimensions] = useState<{ width: number, height: number } | null>(null);
    const [resizedImageBlob, setResizedImageBlob] = useState<Blob | null>(null);
    const [isProcessing, setIsProcessing] = useState(false);
    const [targetSizeKB, setTargetSizeKB] = useState<number | ''>('');

    const onDrop = useCallback((acceptedFiles: File[]) => {
        if (acceptedFiles.length > 0) {
            const selectedFile = acceptedFiles[0];
            setFile(selectedFile);
            setResizedImageBlob(null);

            // Create preview and get dimensions
            const objectUrl = URL.createObjectURL(selectedFile);
            setPreviewUrl(objectUrl);

            const img = new Image();
            img.onload = () => {
                setOriginalDimensions({ width: img.width, height: img.height });
                setWidth(img.width);
                setHeight(img.height);
                setAspectRatio(img.width / img.height);
            };
            img.src = objectUrl;
        }
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: { 'image/*': ['.png', '.jpg', '.jpeg', '.webp'] },
        maxFiles: 1,
        multiple: false
    });

    const handleWidthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newWidth = parseInt(e.target.value) || 0;
        setWidth(newWidth);
        if (maintainAspectRatio && aspectRatio) {
            setHeight(Math.round(newWidth / aspectRatio));
        }
    };

    const handleHeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newHeight = parseInt(e.target.value) || 0;
        setHeight(newHeight);
        if (maintainAspectRatio && aspectRatio) {
            setWidth(Math.round(newHeight * aspectRatio));
        }
    };

    const removeFile = () => {
        setFile(null);
        setPreviewUrl(null);
        setWidth(0);
        setHeight(0);
        setOriginalDimensions(null);
        setResizedImageBlob(null);
        setTargetSizeKB('');
    };

    const handleResize = async () => {
        if (!file || !previewUrl || width <= 0 || height <= 0) return;

        setIsProcessing(true);

        const img = new Image();
        img.crossOrigin = "anonymous";
        img.src = previewUrl;

        await new Promise((resolve) => { img.onload = resolve; });

        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');

        if (!ctx) {
            setIsProcessing(false);
            return;
        }

        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = 'high';
        ctx.drawImage(img, 0, 0, width, height);

        let quality = 0.92;
        let blob: Blob | null = null;
        let attempts = 0;

        const getBlob = (q: number): Promise<Blob | null> => {
            let type = file.type;
            if (targetSizeKB && file.type === 'image/png') {
                type = 'image/jpeg';
            }
            return new Promise(resolve => canvas.toBlob(resolve, type, q));
        };

        blob = await getBlob(quality);

        if (blob && targetSizeKB && typeof targetSizeKB === 'number') {
            const targetBytes = targetSizeKB * 1024;

            while (blob && blob.size > targetBytes && quality > 0.1 && attempts < 20) {
                quality -= 0.05;
                blob = await getBlob(quality);
                attempts++;
            }
        }

        if (blob) {
            setResizedImageBlob(blob);
        }
        setIsProcessing(false);
    };

    const handleDownload = () => {
        if (resizedImageBlob && file) {
            const fName = file.name.substring(0, file.name.lastIndexOf('.'));
            const ext = file.name.substring(file.name.lastIndexOf('.'));
            saveAs(resizedImageBlob, `${fName}-resized-${width}x${height}${ext}`);
        }
    };

    return (
        <div className="w-full max-w-4xl mx-auto space-y-8">

            {/* Upload Area */}
            {!file && (
                <div
                    {...getRootProps()}
                    className={`border-2 border-dashed rounded-xl p-12 text-center cursor-pointer transition-colors ${isDragActive ? 'border-pink-500 bg-pink-50' : 'border-gray-300 hover:border-pink-400 hover:bg-gray-50'
                        }`}
                >
                    <input {...getInputProps()} />
                    <Upload className="mx-auto h-16 w-16 text-gray-400 mb-6" />
                    <p className="text-xl font-medium text-gray-900">Drag & drop an image here</p>
                    <p className="text-gray-500 mt-2">Supports JPG, PNG, WebP</p>
                </div>
            )}

            {/* Editor Area */}
            {file && previewUrl && (
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                    <div className="p-4 border-b border-gray-100 flex items-center justify-between bg-gray-50">
                        <h3 className="font-semibold text-gray-700 flex items-center gap-2">
                            <ImageIcon className="h-5 w-5 text-pink-600" />
                            {file.name}
                        </h3>
                        <button onClick={removeFile} className="text-gray-400 hover:text-red-500 p-2 rounded-full hover:bg-white transition-colors">
                            <X className="h-5 w-5" />
                        </button>
                    </div>

                    <div className="p-6 grid grid-cols-1 lg:grid-cols-2 gap-8">

                        {/* Preview */}
                        <div className="flex flex-col items-center justify-center bg-gray-100 rounded-lg p-4 min-h-[300px]">
                            <img
                                src={previewUrl}
                                alt="Preview"
                                className="max-w-full max-h-[400px] object-contain shadow-md rounded"
                            />
                            <p className="mt-4 text-sm text-gray-500 font-medium">
                                Original: {originalDimensions?.width} x {originalDimensions?.height} px
                            </p>
                        </div>

                        {/* Controls */}
                        <div className="space-y-6">
                            <div>
                                <h4 className="font-medium text-gray-900 mb-4">Resize Options</h4>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Width (px)</label>
                                        <input
                                            type="number"
                                            value={width}
                                            onChange={handleWidthChange}
                                            className="w-full rounded-lg border-gray-300 focus:border-pink-500 focus:ring-pink-500"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Height (px)</label>
                                        <input
                                            type="number"
                                            value={height}
                                            onChange={handleHeightChange}
                                            className="w-full rounded-lg border-gray-300 focus:border-pink-500 focus:ring-pink-500"
                                        />
                                    </div>
                                </div>

                                <div className="mt-4 flex items-center">
                                    <input
                                        id="aspect-ratio"
                                        type="checkbox"
                                        checked={maintainAspectRatio}
                                        onChange={(e) => setMaintainAspectRatio(e.target.checked)}
                                        className="h-4 w-4 text-pink-600 focus:ring-pink-500 border-gray-300 rounded"
                                    />
                                    <label htmlFor="aspect-ratio" className="ml-2 block text-sm text-gray-900">
                                        Maintain Aspect Ratio
                                    </label>
                                </div>

                                <div className="mt-4">
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Max File Size (KB) <span className="text-gray-400 font-normal">(Optional)</span></label>
                                    <input
                                        type="number"
                                        placeholder="e.g. 500"
                                        value={targetSizeKB}
                                        onChange={(e) => setTargetSizeKB(e.target.value ? parseInt(e.target.value) : '')}
                                        className="w-full rounded-lg border-gray-300 focus:border-pink-500 focus:ring-pink-500"
                                    />
                                    <p className="text-xs text-gray-400 mt-1">We'll reduce quality to reach this size.</p>
                                </div>
                            </div>

                            <div className="pt-4 border-t border-gray-100">
                                {!resizedImageBlob ? (
                                    <button
                                        onClick={handleResize}
                                        disabled={isProcessing || width <= 0 || height <= 0}
                                        className="w-full py-3 px-4 rounded-xl bg-pink-600 text-white font-bold hover:bg-pink-700 transition-colors flex items-center justify-center gap-2 disabled:bg-gray-300 disabled:cursor-not-allowed shadow-lg shadow-pink-200/50"
                                    >
                                        {isProcessing ? <RefreshCw className="animate-spin h-5 w-5" /> : <Crop className="h-5 w-5" />}
                                        Resize Image
                                    </button>
                                ) : (
                                    <div className="space-y-3 animate-in fade-in slide-in-from-bottom-2 duration-300">
                                        <div className="p-3 bg-green-50 text-green-700 rounded-lg text-center text-sm font-medium border border-green-200">
                                            Success! New Size: {(resizedImageBlob.size / 1024).toFixed(2)} KB
                                        </div>
                                        <button
                                            onClick={handleDownload}
                                            className="w-full py-3 px-4 rounded-xl bg-green-600 text-white font-bold hover:bg-green-700 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-green-200/50"
                                        >
                                            <Download className="h-5 w-5" />
                                            Download Resized Image
                                        </button>
                                        <button
                                            onClick={() => setResizedImageBlob(null)}
                                            className="w-full py-2 px-4 rounded-lg text-gray-500 hover:text-gray-700 hover:bg-gray-100 transition-colors text-sm font-medium"
                                        >
                                            Resize Again / Change Settings
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
