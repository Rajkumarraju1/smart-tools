'use client';

import React, { useState } from 'react';
import { Send } from 'lucide-react';

export default function ContactClient() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <div className="max-w-2xl mx-auto px-4 py-12">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
                <p className="text-xl text-gray-600">Have a question or suggestion? We'd love to hear from you.</p>
            </div>

            {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center animate-in fade-in zoom-in">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Send className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-green-900 mb-2">Message Sent!</h3>
                    <p className="text-green-700">Thank you for reaching out. We'll get back to you as soon as possible.</p>
                    <button onClick={() => setSubmitted(false)} className="mt-6 text-sm underline text-green-600 hover:text-green-800">Send another message</button>
                </div>
            ) : (
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">Name</label>
                            <input type="text" required className="w-full p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="Your Name" />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                            <input type="email" required className="w-full p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="your@email.com" />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                            <textarea required rows={4} className="w-full p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all resize-none" placeholder="How can we help you?"></textarea>
                        </div>
                        <button type="submit" className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg shadow-md transition-all flex items-center justify-center gap-2">
                            <Send className="h-4 w-4" /> Send Message
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
}
