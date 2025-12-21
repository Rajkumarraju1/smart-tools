'use client';

import React, { useState } from 'react';
import { Database, FileJson, Table, ArrowRightLeft, Copy, Trash2, Check, AlertTriangle } from 'lucide-react';
import ToolLayout from '@/components/ToolLayout';

type Mode = 'json_to_csv' | 'csv_to_json';

export default function JsonCsvPage() {
    const [input, setInput] = useState('');
    const [output, setOutput] = useState('');
    const [mode, setMode] = useState<Mode>('json_to_csv');
    const [error, setError] = useState<string | null>(null);
    const [copied, setCopied] = useState(false);

    // Simplified CSV converter (for verified reliable libraries use PapaParse in production)
    const jsonToCsv = (jsonString: string) => {
        try {
            const objArray = JSON.parse(jsonString);
            const array = typeof objArray !== 'object' ? JSON.parse(objArray) : objArray;

            let str = '';
            let line = '';

            // Header
            const head = array[0];
            if (!head) throw new Error("Empty JSON");

            for (const index in array[0]) {
                line += index + ',';
            }
            line = line.slice(0, -1);
            str += line + '\r\n';

            // Body
            for (let i = 0; i < array.length; i++) {
                let line = '';
                for (const index in array[i]) {
                    const val = array[i][index];
                    if (val != null) {
                        line += '"' + val.toString().replace(/"/g, '""') + '",';
                    } else {
                        line += '"",';
                    }
                }
                line = line.slice(0, -1);
                str += line + '\r\n';
            }
            return str;
        } catch (e) {
            throw new Error("Invalid JSON array");
        }
    };

    const csvToJson = (csv: string) => {
        const lines = csv.split('\n');
        const result = [];
        const headers = lines[0].split(',');

        for (let i = 1; i < lines.length; i++) {
            if (!lines[i]) continue;
            const obj: any = {};
            const currentline = lines[i].split(','); // Simple split, doesn't handle commas in quotes perfectly without regex
            // Implementing smarter split for quotes is complex without library, sticking to basic for MVP

            for (let j = 0; j < headers.length; j++) {
                if (headers[j]) {
                    const header = headers[j].trim().replace(/"/g, '');
                    const val = currentline[j] ? currentline[j].trim().replace(/"/g, '') : '';
                    obj[header] = val;
                }
            }
            result.push(obj);
        }
        return JSON.stringify(result, null, 2);
    };

    const handleConvert = () => {
        if (!input) return;
        setError(null);
        setOutput('');

        try {
            if (mode === 'json_to_csv') {
                setOutput(jsonToCsv(input));
            } else {
                setOutput(csvToJson(input));
            }
        } catch (err) {
            setError((err as Error).message);
        }
    };

    const copyToClipboard = () => {
        if (!output) return;
        navigator.clipboard.writeText(output);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <ToolLayout
            title="JSON <-> CSV Converter"
            description="Convert data between JSON and CSV formats instantly."
            icon={Database}
            category="Utility"
        >
            <div className="w-full max-w-6xl mx-auto space-y-6">

                {/* Mode Toggle */}
                <div className="flex justify-center">
                    <div className="bg-gray-100 p-1 rounded-xl flex items-center gap-2">
                        <button
                            onClick={() => { setMode('json_to_csv'); setInput(''); setOutput(''); }}
                            className={`px-6 py-2 rounded-lg text-sm font-bold flex items-center gap-2 transition-all ${mode === 'json_to_csv' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-500'}`}
                        >
                            <FileJson className="h-4 w-4" /> JSON to CSV
                        </button>
                        <ArrowRightLeft className="h-4 w-4 text-gray-400" />
                        <button
                            onClick={() => { setMode('csv_to_json'); setInput(''); setOutput(''); }}
                            className={`px-6 py-2 rounded-lg text-sm font-bold flex items-center gap-2 transition-all ${mode === 'csv_to_json' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-500'}`}
                        >
                            <Table className="h-4 w-4" /> CSV to JSON
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-[500px]">
                    {/* Input */}
                    <div className="flex flex-col h-full space-y-2">
                        <div className="flex justify-between px-1">
                            <label className="text-sm font-semibold text-gray-700">
                                Input ({mode === 'json_to_csv' ? 'JSON' : 'CSV'})
                            </label>
                            <button onClick={() => { setInput(''); setOutput(''); }} className="text-xs text-red-500 hover:text-red-600 flex items-center gap-1">
                                <Trash2 className="h-3 w-3" /> Clear
                            </button>
                        </div>
                        <textarea
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder={mode === 'json_to_csv' ? '[{"name": "John", "age": 30}]' : 'name,age\nJohn,30'}
                            className="flex-1 w-full p-4 rounded-xl border border-gray-200 focus:ring-4 focus:ring-blue-100 focus:border-blue-300 outline-none resize-none bg-white font-mono text-sm"
                        />
                    </div>

                    {/* Output */}
                    <div className="flex flex-col h-full space-y-2">
                        <div className="flex justify-between items-center px-1">
                            <label className="text-sm font-semibold text-gray-700">
                                Result ({mode === 'json_to_csv' ? 'CSV' : 'JSON'})
                            </label>
                            <div className="flex gap-2">
                                <button
                                    onClick={handleConvert}
                                    disabled={!input}
                                    className="text-xs bg-blue-600 text-white px-4 py-1 rounded-full hover:bg-blue-700 disabled:bg-gray-300 shadow-sm font-medium"
                                >
                                    Convert
                                </button>
                                <button
                                    onClick={copyToClipboard}
                                    disabled={!output}
                                    className="text-xs bg-green-50 text-green-600 px-3 py-1 rounded-full hover:bg-green-100 disabled:opacity-50 flex items-center gap-1"
                                >
                                    {copied ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                                    {copied ? 'Copied' : 'Copy'}
                                </button>
                            </div>
                        </div>

                        <div className={`flex-1 w-full rounded-xl border border-gray-200 bg-gray-50 overflow-hidden relative ${error ? 'border-red-300 bg-red-50' : ''}`}>
                            {error ? (
                                <div className="p-4 text-red-600 text-sm font-mono flex items-start gap-2">
                                    <AlertTriangle className="h-5 w-5 shrink-0" />
                                    <span>{error}</span>
                                </div>
                            ) : (
                                <textarea
                                    readOnly
                                    value={output}
                                    className="w-full h-full p-4 bg-transparent resize-none outline-none font-mono text-sm text-gray-800"
                                    placeholder="Result..."
                                />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </ToolLayout>
    );
}
