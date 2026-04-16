'use client';

import React, { useState, useEffect } from 'react';
import { Lock, RefreshCw, Copy, Check } from 'lucide-react';
import ToolLayout from '@/components/ToolLayout';

export default function PasswordGeneratorClient() {
    const [password, setPassword] = useState('');
    const [length, setLength] = useState(16);
    const [includeUppercase, setIncludeUppercase] = useState(true);
    const [includeLowercase, setIncludeLowercase] = useState(true);
    const [includeNumbers, setIncludeNumbers] = useState(true);
    const [includeSymbols, setIncludeSymbols] = useState(true);
    const [copied, setCopied] = useState(false);

    const generatePassword = () => {
        let charset = '';
        if (includeUppercase) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        if (includeLowercase) charset += 'abcdefghijklmnopqrstuvwxyz';
        if (includeNumbers) charset += '0123456789';
        if (includeSymbols) charset += '!@#$%^&*()_+~`|}{[]:;?><,./-=';

        if (charset === '') {
            setPassword('');
            return;
        }

        let result = '';
        const array = new Uint32Array(length);
        crypto.getRandomValues(array);

        for (let i = 0; i < length; i++) {
            result += charset[array[i] % charset.length];
        }
        setPassword(result);
    };

    useEffect(() => {
        generatePassword();
    }, [length, includeUppercase, includeLowercase, includeNumbers, includeSymbols]);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(password);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <ToolLayout
            title="Generate Strong Password Online (Free & Secure)"
            description="Instantly generate an unshakeable, 100% secure cryptographic payload."
            icon={Lock}
            category="Utility"
            introContent={<p>Looking to <strong>generate strong password online free secure</strong>? Stop relying on weak mental guesses or reusing your older, highly vulnerable login details. Our enterprise-grade generator utilizes your browser's native cryptography to instantly output mathematically unguessable character strings.</p>}
            extraContent={
                <>
                    <h2>Generate Strong, Secure Passwords Instantly</h2>
                    <p>In today's interconnected digital landscape, cyber security is more critical than ever. The primary line of defense protecting your personal emails, banking details, and social media accounts is your password. Hackers utilize highly sophisticated software capable of guessing millions of weak passwords every single second. Our free online Random Password Generator creates cryptographically robust, unguessable passwords instantly within your browser, ensuring your private digital life remains entirely uncompromised.</p>

                    <h2>Why You Need a Random Password Generator</h2>
                    <ul>
                        <li><strong>Defeat Brute Force Attacks:</strong> A password like "Password123" takes less than a millisecond to crack. A 16-character truly random password mixed with symbols takes trillions of years to guess.</li>
                        <li><strong>Eliminate Password Reuse:</strong> Human psychology makes it difficult to invent unique passwords for the 100+ accounts the average person has. Using a generator ensures absolute uniqueness for every single login.</li>
                        <li><strong>Remove Emotional Predictability:</strong> Hackers routinely scrape social media to guess passwords based on your pet's name, birth years, or favorite sports teams. True randomness removes this enormous vulnerability.</li>
                    </ul>

                    <h2>How to Use This Tool</h2>
                    <ol>
                        <li><strong>Choose the Length:</strong> Use the interactive slider to determine your password's length. Security experts universally recommend at least 16 characters for maximum protection against modern hardware.</li>
                        <li><strong>Select Your Character Sets:</strong> Toggle exactly which types of characters you want to include (Uppercase Letters, Lowercase Letters, Numbers, and Special Symbols). <em>Tip: Always include all four categories unless specifically prohibited by a website's strict rules.</em></li>
                        <li><strong>Generate:</strong> If you don't like the initial password on the screen, simply click the "Generate New Password" button to instantly create another secure combination.</li>
                        <li><strong>Copy Securely:</strong> Click the copy icon inside the password field to instantly securely copy the text to your computer's clipboard, ready to be pasted securely into your password manager or website login.</li>
                    </ol>

                    <h2>Frequently Asked Questions (FAQ)</h2>
                    <h3>Are the generated passwords securely saved on your servers?</h3>
                    <p>No, never. This Password Generator utilizes Javascript's native `crypto.getRandomValues()` function. This inherently means that the password is generated entirely on your local machine, strictly within your active browser session. We literally possess no technical capacity to see, intercept, transmit, or store the passwords you generate.</p>

                    <h3>What makes a password "Strong"?</h3>
                    <p>A mathematically "strong" password relies on two primary factors: Length and Complexity (Entropy). A 12-character password using all symbols is incredibly strong. However, a 20-character password using only lowercase letters is also extremely strong simply because the sheer total mathematical combinations are astronomically vast. Combining both length and complexity guarantees absolute security.</p>
                </>
            }
        >
            <div className="w-full max-w-2xl mx-auto space-y-8">

                {/* Password Display */}
                <div className="relative">
                    <input
                        type="text"
                        value={password}
                        readOnly
                        className="w-full text-center text-3xl font-mono p-6 rounded-2xl bg-white border border-gray-200 shadow-sm outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                        onClick={copyToClipboard}
                        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-lg hover:bg-gray-100 text-gray-500 hover:text-blue-600 transition-colors"
                        title="Copy to clipboard"
                    >
                        {copied ? <Check className="h-6 w-6 text-green-500" /> : <Copy className="h-6 w-6" />}
                    </button>
                </div>

                {/* Controls */}
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm space-y-6">
                    <div>
                        <div className="flex justify-between items-center mb-2">
                            <label className="text-sm font-medium text-gray-700">Password Length</label>
                            <span className="text-lg font-bold text-blue-600">{length}</span>
                        </div>
                        <input
                            type="range"
                            min="8"
                            max="64"
                            value={length}
                            onChange={(e) => setLength(Number(e.target.value))}
                            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                        />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <label className="flex items-center space-x-3 p-3 rounded-lg border border-gray-200 cursor-pointer hover:bg-gray-50">
                            <input
                                type="checkbox"
                                checked={includeUppercase}
                                onChange={(e) => setIncludeUppercase(e.target.checked)}
                                className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
                            />
                            <span className="text-gray-700">Uppercase (A-Z)</span>
                        </label>

                        <label className="flex items-center space-x-3 p-3 rounded-lg border border-gray-200 cursor-pointer hover:bg-gray-50">
                            <input
                                type="checkbox"
                                checked={includeLowercase}
                                onChange={(e) => setIncludeLowercase(e.target.checked)}
                                className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
                            />
                            <span className="text-gray-700">Lowercase (a-z)</span>
                        </label>

                        <label className="flex items-center space-x-3 p-3 rounded-lg border border-gray-200 cursor-pointer hover:bg-gray-50">
                            <input
                                type="checkbox"
                                checked={includeNumbers}
                                onChange={(e) => setIncludeNumbers(e.target.checked)}
                                className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
                            />
                            <span className="text-gray-700">Numbers (0-9)</span>
                        </label>

                        <label className="flex items-center space-x-3 p-3 rounded-lg border border-gray-200 cursor-pointer hover:bg-gray-50">
                            <input
                                type="checkbox"
                                checked={includeSymbols}
                                onChange={(e) => setIncludeSymbols(e.target.checked)}
                                className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
                            />
                            <span className="text-gray-700">Symbols (!@#$)</span>
                        </label>
                    </div>
                </div>

                <button
                    onClick={generatePassword}
                    className="w-full py-4 px-6 rounded-xl bg-blue-600 text-white font-bold text-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-blue-200"
                >
                    <RefreshCw className="h-5 w-5" />
                    Generate New Password
                </button>

            </div>
        </ToolLayout>
    );
}
