import type { Metadata } from 'next';
import { FileText } from 'lucide-react';
import ToolLayout from '@/components/ToolLayout';
import MarkdownEditorClient from './Client';

export const metadata: Metadata = {
    title: 'Markdown Editor & Live Preview Online (GFM Compatible)',
    description: 'Write, preview, and format document headers, bullet lists, bold text, code blocks, and tables using standard Markdown (GFM). Instant browser preview.',
    keywords: ['markdown editor', 'markdown preview', 'live markdown editor', 'github flavored markdown editor', 'markdown online free'],
    alternates: {
        canonical: '/tools/text/markdown',
    },
};

export default function MarkdownEditorPage() {
    return (
        <ToolLayout
            title="Markdown Editor"
            description="Write markdown and preview it instantly."
            icon={FileText}
            category="Utility"
            extraContent={
                <>
                    <h2>Advanced Free Online Markdown Editor & Validator</h2>
                    <p>Markdown has undeniably conquered the modern technical landscape as the absolute easiest, most incredibly efficient method for writing beautifully formatted web content without brutally wrestling with chaotic HTML tags. Whether you are compiling complex GitHub documentation (README variants), diligently scripting your highly technical programming blog, or merely taking extensive daily notes, our completely Free Online Markdown Editor provides a hyper-responsive, instantly reacting environment to gracefully draft and preview your raw syntax in real-time.</p>

                    <h2>What is Markdown and Why is it Superior?</h2>
                    <p>Fundamentally, Markdown is a lightweight, easy-to-read, easy-to-write plain text markup language initially formulated by renowned developer John Gruber in 2004. Its core philosophy dictates that plain text documents should inherently be highly readable by human beings without requiring any complex compilation or appearing as overwhelming structural code. Instead of manually typing tedious structural code like <code>&lt;strong&gt;Bold&lt;/strong&gt;</code>, you merely type <code>**Bold**</code>. This paradigm shift dramatically accelerates overall writing speed and significantly reduces cognitive load.</p>

                    <h2>Core Advantages of Our Specific Markdown Parser</h2>
                    <ul>
                        <li><strong>Live Preview Architecture:</strong> Unlike massive, bloated native desktop applications that completely monopolize your system memory, our entirely browser-based interface actively renders your HTML visual preview the exact millisecond you strike a key on your keyboard.</li>
                        <li><strong>GitHub Flavored Markdown (GFM) Compatibility:</strong> Our underlying rendering engine fully supports advanced, modern syntax features including complex nested tables, task lists, strikethrough text, and customized fenced code blocks, perfectly mirroring the behavior of major platforms.</li>
                        <li><strong>Output Portability:</strong> Because you are writing in plain text, your resulting documents will persist forever, being readable on any computer operating system, completely immune to the threat of proprietary corporate software lock-in.</li>
                    </ul>

                    <h2>Frequently Asked Questions (FAQ)</h2>
                    <h3>What basic syntax combinations do I need to memorize?</h3>
                    <p>The learning curve is shallow. The basics encompass utilizing Hash symbols (<code>#</code>) to denote headers, asterisks (<code>*</code>) for enforcing italics or bolding syntax, and dashes (<code>-</code>) to instantly construct lists.</p>

                    <h3>Does this free editor automatically save my text data securely?</h3>
                    <p>Currently, to guarantee the height of user privacy, this application operates ephemerally directly in the localized browser sandbox. If you refresh the page or close your browser tab, your data will be cleared from RAM. Therefore, make sure to copy your markdown output and save it locally.</p>
                </>
            }
        >
            <MarkdownEditorClient />
        </ToolLayout>
    );
}
