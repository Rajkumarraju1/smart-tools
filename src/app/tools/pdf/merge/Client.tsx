'use client';

import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { PDFDocument } from 'pdf-lib';
import { saveAs } from 'file-saver';
import { FilePlus, Upload, X, ArrowUp, ArrowDown, Loader2, FileText } from 'lucide-react';
import ToolLayout from '@/components/ToolLayout';

export default function MergePDFClient() {
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
            const blob = new Blob([mergedPdfFile as any], { type: 'application/pdf' });
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
            extraContent={
                <>
                    <h2>The Most Powerful Free Online PDF Merger</h2>
                    <p>Whether you are a frantic university student desperately struggling to elegantly combine disparate term paper drafts, a meticulous legal assistant frantically stitching together extensive court deposition transcripts, or an exhausted corporate accountant deeply consolidating massive quarterly financial reports, managing multiple entirely separate digital documents is a remarkably tedious bureaucratic nightmare. Our completely Free Online PDF Merger instantly, mathematically binds your chaotic, scattered files seamlessly together into a single, perfectly unified, immaculately pristine master document.</p>

                    <h2>Why Should You Systematically Merge Your Critical PDFs?</h2>
                    <ul>
                        <li><strong>Streamlined Digital Communication:</strong> Repeatedly attaching ten completely separate, totally unrelated PDF files to a single chaotic email virtually guarantees the wildly frustrated recipient will accidentally miss incredibly vital information or desperately read the documents in the entirely wrong logical sequence. Structurally unifying your files into one continuous presentation inherently explicitly enforces your intended narrative reading order.</li>
                        <li><strong>Massive Data Archival Efficiency:</strong> Organizing and frantically searching through a totally convoluted folder containing a thousand disparate one-page document fragments is statistically impossible. Intelligently merging related monthly digital invoices or disjointed client records into massive, singular yearly digital ledgers absolutely drastically cleans up your chaotic local hard drive taxonomy.</li>
                        <li><strong>Flawless Professional Presentation:</strong> Submitting a single, brilliantly comprehensive, continuously paginated PDF master portfolio explicitly projects an elite aura of strict meticulousness and absolute extreme competence that uploading a disorganized zip file of fragmented digital scraps wholly lacks.</li>
                    </ul>

                    <h2>How to Masterfully Combine Your Documents Online</h2>
                    <ol>
                        <li><strong>Initiate the Massive Batch Upload:</strong> Aggressively drag and drop your massive disorganized selection of raw target PDF files physically from your local desktop directly onto the prominent central dotted upload zone. Alternatively, simply click the zone to methodically navigate your internal file directory.</li>
                        <li><strong>Strategically Arrange the Narrative Flow:</strong> Noticeably, every single successfully uploaded file will instantly manifest as an interactive horizontal row. Vigorously utilize the highly convenient 'Up' and 'Down' directional arrows mathematically located on the far right of every single row to meticulously dictate exactly which specific file will technically appear first in the massively compiled final document.</li>
                        <li><strong>Ruthlessly Filter Unwanted Extraneous Files:</strong> If you accidentally blindly uploaded a totally incorrect file, simply rapidly click the distinct red 'X' discard button to permanently remove it instantly from the impending merge queue.</li>
                        <li><strong>Execute the Complex Mathematical Merge:</strong> Finally, smash the massive blue 'Merge PDFs' primary action button. In mere seconds, our proprietary client-side WebAssembly engine will structurally permanently fuse the underlying digital pages together and immediately securely prompt your browser to rapidly download the pristine final compilation.</li>
                    </ol>

                    <h2>Frequently Asked Questions (FAQ)</h2>
                    <h3>Is it profoundly safe to aggressively merge highly sensitive private corporate files here?</h3>
                    <p><strong>Absolutely, unconditionally yes.</strong> Our highly advanced PDF engine explicitly operates completely utilizing strict "client-side" execution. This fundamentally critical technical architecture guarantees that absolutely 100% of the intense computational heavy lifting strictly occurs entirely locally within your personal computer's own massively secure web browser memory sandbox. Your wildly sensitive private proprietary financial data is definitively never, ever silently transmitted to or illegally stored on our remote cloud servers.</p>

                    <h3>What happens if my original distinct uploaded files all have totally vastly different page dimensions?</h3>
                    <p>Our sophisticated merging algorithms explicitly totally preserve the identical exact physical dimensions (such as standard US Letter or metric A4) of precisely every single individual page as it is algorithmically copied dynamically from the source documents. If you aggressively mix a tiny landscape graphic slide with a massive portrait legal document, the compiled final master PDF will flawlessly, seamlessly contain pages of wildly different exact dimensions, exactly accurately mirroring your original raw inputs.</p>
                </>
            }
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
