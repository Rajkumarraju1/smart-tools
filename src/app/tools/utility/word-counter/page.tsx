'use client';

import React, { useState, useEffect } from 'react';
import { Type, ALargeSmall, Copy, Trash2, Clock } from 'lucide-react';
import ToolLayout from '@/components/ToolLayout';

export default function WordCounterPage() {
    const [text, setText] = useState('');
    // Derived state - no need for useEffect
    const words = text.trim() === '' ? 0 : text.trim().split(/\s+/).length;
    const characters = text.length;
    const sentences = text.trim() === '' ? 0 : text.split(/[.!?]+/).filter(x => x.trim().length > 0).length;
    const paragraphs = text.trim() === '' ? 0 : text.split(/\n\n+/).filter(x => x.trim().length > 0).length;
    const readingTime = Math.ceil(words / 200);

    const stats = { words, characters, sentences, paragraphs, readingTime };

    const handleCopy = () => {
        navigator.clipboard.writeText(text);
    };

    const handleClear = () => {
        setText('');
    };

    const toUpperCase = () => setText(text.toUpperCase());
    const toLowerCase = () => setText(text.toLowerCase());
    const toTitleCase = () => {
        setText(text.toLowerCase().replace(/(?:^|\s)\w/g, val => val.toUpperCase()));
    };

    return (
        <ToolLayout
            title="Word Counter"
            description="Count words, characters, and sentences instantly. Plus text case converters."
            icon={Type}
            category="Utility"
        >
            <div className="w-full max-w-4xl mx-auto space-y-6">

                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 text-center">
                        <div className="text-3xl font-bold text-blue-700">{stats.words}</div>
                        <div className="text-xs text-blue-600 font-medium uppercase tracking-wide">Words</div>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-xl border border-purple-100 text-center">
                        <div className="text-3xl font-bold text-purple-700">{stats.characters}</div>
                        <div className="text-xs text-purple-600 font-medium uppercase tracking-wide">Characters</div>
                    </div>
                    <div className="bg-green-50 p-4 rounded-xl border border-green-100 text-center">
                        <div className="text-3xl font-bold text-green-700">{stats.sentences}</div>
                        <div className="text-xs text-green-600 font-medium uppercase tracking-wide">Sentences</div>
                    </div>
                    <div className="bg-orange-50 p-4 rounded-xl border border-orange-100 text-center flex flex-col items-center justify-center">
                        <div className="text-xl font-bold text-orange-700 flex items-center gap-1">
                            <Clock className="h-4 w-4" /> {stats.readingTime} min
                        </div>
                        <div className="text-xs text-orange-600 font-medium uppercase tracking-wide">Read Time</div>
                    </div>
                </div>

                {/* Toolbar */}
                <div className="flex flex-wrap gap-2 items-center justify-between bg-white p-2 rounded-t-xl border border-b-0 border-gray-200">
                    <div className="flex gap-2">
                        <button onClick={toUpperCase} className="p-2 hover:bg-gray-100 rounded-lg text-sm font-medium flex items-center gap-1 text-gray-600">
                            <ALargeSmall className="h-4 w-4" /> UPPERCASE
                        </button>
                        <button onClick={toLowerCase} className="p-2 hover:bg-gray-100 rounded-lg text-sm font-medium flex items-center gap-1 text-gray-600">
                            <ALargeSmall className="h-4 w-4" /> lowercase
                        </button>
                        <button onClick={toTitleCase} className="p-2 hover:bg-gray-100 rounded-lg text-sm font-medium flex items-center gap-1 text-gray-600">
                            <ALargeSmall className="h-4 w-4" /> Title Case
                        </button>
                    </div>
                    <div className="flex gap-2">
                        <button onClick={handleCopy} className="p-2 hover:bg-gray-100 rounded-lg text-gray-500 hover:text-blue-600" title="Copy Text">
                            <Copy className="h-4 w-4" />
                        </button>
                        <button onClick={handleClear} className="p-2 hover:bg-red-50 rounded-lg text-gray-500 hover:text-red-600" title="Clear Text">
                            <Trash2 className="h-4 w-4" />
                        </button>
                    </div>
                </div>

                {/* Text Area */}
                <textarea
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Type or paste your text here..."
                    className="w-full h-96 p-6 bg-white border border-gray-200 rounded-b-xl focus:ring-2 focus:ring-blue-500 outline-none resize-none -mt-6 text-gray-700 text-lg leading-relaxed"
                ></textarea>

            </div>
        </ToolLayout>
    );
}
