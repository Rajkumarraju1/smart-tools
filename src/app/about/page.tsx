import React from 'react';
import { Wrench, Heart, Shield } from 'lucide-react';

export default function AboutPage() {
    return (
        <div className="max-w-4xl mx-auto px-4 py-12">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">About Smart Tools</h1>
                <p className="text-xl text-gray-600">Your one-stop destination for free, secure, and instant online utilities.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
                <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100 text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Wrench className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="font-bold text-lg mb-2">Powerful Tools</h3>
                    <p className="text-gray-500 text-sm">From PDF manipulation to image compression, we provide professional-grade tools for free.</p>
                </div>
                <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100 text-center">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Heart className="h-6 w-6 text-red-600" />
                    </div>
                    <h3 className="font-bold text-lg mb-2">100% Free</h3>
                    <p className="text-gray-500 text-sm">All our tools are completely free to use. We believe in making technology accessible to everyone.</p>
                </div>
                <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100 text-center">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Shield className="h-6 w-6 text-green-600" />
                    </div>
                    <h3 className="font-bold text-lg mb-2">Privacy First</h3>
                    <p className="text-gray-500 text-sm">Most of our tools run entirely in your browser. Your files never leave your device.</p>
                </div>
            </div>

            <div className="prose prose-blue max-w-none bg-white p-8 rounded-2xl border border-gray-100">
                <h3>Our Mission</h3>
                <p>
                    Smart Tools was built with a simple mission: to provide a clean, fast, and easy-to-use collection of utilities that help people get things done.
                    Whether you're a developer needing to format JSON, a student calculating their GPA, or a designer compressing images, we have a tool for you.
                </p>
                <h3>Why Choose Us?</h3>
                <ul>
                    <li><strong>Speed:</strong> Our tools are optimized for performance.</li>
                    <li><strong>Simplicity:</strong> No complex sign-ups or software installation required.</li>
                    <li><strong>Security:</strong> We prioritize client-side processing to ensure data privacy.</li>
                </ul>
            </div>
        </div>
    );
}
