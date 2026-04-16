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
                <h3>The Story Behind Smart Tools</h3>
                <p>
                    Smart Tools (My Web Utils) started with a simple realization: the internet is filled with utility websites, but most of them are cluttered with intrusive advertisements, confusing interfaces, and paywalls. We found ourselves constantly searching for a simple PDF merger or image compressor that didn't demand an email address or a monthly subscription.
                </p>
                <p>
                    Frustrated by the lack of clean, privacy-focused options, our team of developers decided to build our own. What started as a personal weekend project to format JSON strings and compress a few presentation images quickly snowballed into a comprehensive suite of utilities designed for everyone.
                </p>

                <h3>Our Mission</h3>
                <p>
                    Our mission is to democratize digital utilities by providing a clean, blazing-fast, and easy-to-use collection of tools that help people get things done efficiently. We believe that basic file manipulation, text formatting, and calculating tools should be treated as fundamental web rights—freely accessible to anyone with a browser.
                </p>
                <p>
                    Whether you're a seasoned developer needing to minify code, a student calculating your GPA, or a designer resizing images, we want to be your default utility belt on the web.
                </p>

                <h3>Meet the Team</h3>
                <p>
                    We are a small, passionate group of software engineers, designers, and digital creators who believe in the open web. We care deeply about privacy, which is why we architect our tools to process data locally on your device whenever possible. By eliminating server-side processing for most of our tools, we ensure that your sensitive documents never leave your browser.
                </p>

                <h3>Our Core Principles</h3>
                <ul>
                    <li><strong>Privacy by Default:</strong> We don't want your data. We design tools to run client-side.</li>
                    <li><strong>No Hidden Fees:</strong> We don't hide core functionality behind premium tiers.</li>
                    <li><strong>Speed:</strong> Optimized algorithms ensure you spend less time waiting and more time creating.</li>
                    <li><strong>Simplicity:</strong> No complex sign-ups, no software installation, and no steep learning curves.</li>
                </ul>
                <p>
                    We're constantly evolving and adding new tools based on user feedback. If you have a suggestion or a tool request, feel free to reach out to us at <strong>support.mywebutils@gmail.com</strong>.
                </p>
            </div>
        </div>
    );
}
