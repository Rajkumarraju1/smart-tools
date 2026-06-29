import type { Metadata } from 'next';
import { Binary } from 'lucide-react';
import ToolLayout from '@/components/ToolLayout';
import Base64Client from './Client';

export const metadata: Metadata = {
    title: 'Base64 Encoder & Decoder Online (Instant & Secure)',
    description: 'Encode and decode plain text to Base64 format instantly. 100% secure client-side browser translation with zero files or logs sent to servers.',
    keywords: ['base64 encoder', 'base64 decoder', 'encode text to base64', 'decode base64 online', 'base64 converter'],
    alternates: {
        canonical: '/tools/dev/base64',
    },
};

export default function Base64Page() {
    return (
        <ToolLayout
            title="Base64 Converter"
            description="Encode and decode text to Base64 format instantly."
            icon={Binary}
            category="Utility"
            extraContent={
                <>
                    <h2>Free Online Base64 Encoder & Decoder</h2>
                    <p>Base64 is a widely utilized binary-to-text encoding scheme specifically designed to represent raw binary data (like images or compiled code) in an ASCII string format. Whether you are a senior software developer debugging complex API responses, a security researcher analyzing encoded payloads, or a webmaster securely embedding localized image assets into CSS files, our completely Free Online Base64 Converter provides instantaneous, error-free encoding and decoding directly in your web browser.</p>

                    <h2>How Base64 Encoding Works</h2>
                    <p>At its core, Base64 systematically translates data by treating it as a continuous stream of binary bits. It mathematically groups these microscopic bits into standardized 6-bit increments, and explicitly maps every single group to one of 64 carefully selected alphanumeric characters (A-Z, a-z, 0-9, +, and /). Because this specific alphabet is universally supported by absolutely every network protocol and computer system on Earth, it prevents critical data corruption during transmission across fundamentally different legacy systems (like ancient email servers).</p>

                    <h2>How to Use This Developer Tool</h2>
                    <ol>
                        <li><strong>Select Your Mode:</strong> Utilize the prominent toggle buttons at the top of the interface to choose either 'Encode' (translating plain text into Base64) or 'Decode' (translating Base64 back into highly readable plain text).</li>
                        <li><strong>Paste Your Data:</strong> Paste your targeted text string or encrypted Base64 block directly into the large left-hand input area labeled 'Source'.</li>
                        <li><strong>Instant Execution:</strong> Our highly optimized JavaScript engine automatically and instantly processes the data the millisecond you paste it. You do not even need to click a submit button.</li>
                        <li><strong>Copy the Result:</strong> Instantly click the convenient 'Copy' button located above the right-hand 'Result' window to perfectly transfer the exact output directly to your system clipboard.</li>
                    </ol>

                    <h2>Frequently Asked Questions (FAQ)</h2>
                    <h3>Is Base64 encoding actually a form of secure cryptography or encryption?</h3>
                    <p><strong>Absolutely not.</strong> This is an incredibly common, highly dangerous misconception. Base64 is strictly an <em>encoding</em> format explicitly designed for maximum data compatibility, not security. There are mathematically no passwords, secret keys, or cryptographic hashes involved. Anyone who intercept your Base64 string can effortlessly decode it using this exact free website. Never use Base64 to "secure" sensitive passwords or personal financial data.</p>

                    <h3>Why does my decoded Base64 text look like completely random gibberish?</h3>
                    <p>If you successfully decode a Base64 string but the resulting output appears to be unreadable symbols (like ), it strongly indicates that the original underlying data was not standard plain text. It is highly likely that the encoded file was actually a compiled binary asset, such as a compressed ZIP file, a compiled executable application (.exe), or a raw graphical image (like a JPG or PNG), rather than a textual message.</p>
                </>
            }
        >
            <Base64Client />
        </ToolLayout>
    );
}
