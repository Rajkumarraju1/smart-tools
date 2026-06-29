import type { Metadata } from 'next';
import { Type } from 'lucide-react';
import ToolLayout from '@/components/ToolLayout';
import WordCounterClient from './Client';

export const metadata: Metadata = {
    title: 'Word Counter & Character Count Online (Instant & Free)',
    description: 'Count words, characters, sentences, paragraphs, and estimate reading time. Complete with uppercase, lowercase, and title case converter options.',
    keywords: ['word counter', 'character count', 'online word counter', 'character count tool', 'count words and characters'],
    alternates: {
        canonical: '/tools/utility/word-counter',
    },
};

export default function WordCounterPage() {
    return (
        <ToolLayout
            title="Word Counter"
            description="Count words, characters, and sentences instantly. Plus text case converters."
            icon={Type}
            category="Utility"
            extraContent={
                <>
                    <h2>Free Online Word Counter & Text Analyzer</h2>
                    <p>Whether you're a high school student striving to hit a strict essay length, an SEO professional meticulously optimizing vital meta descriptions, or a journalist writing to a rigid publication limit, knowing your exact word and character counts is an absolute necessity. Our free, lightning-fast completely Online Word Counter instantly tracks words, characters, total sentences, and precise estimated reading times in real-time as you actively type or paste your content.</p>

                    <h2>Why Use Our Advanced Word Counting Tool?</h2>
                    <p>Unlike basic default text editors, our tool provides a comprehensive, instantaneous breakdown of your writing metrics:</p>
                    <ul>
                        <li><strong>Exact Word Counting:</strong> Instantly determine how many words are in your article, perfectly satisfying strict essay rubrics, Twitter/X thread limits, or demanding SEO content guidelines.</li>
                        <li><strong>Character Count (With Spaces):</strong> Crucial for digital marketers constructing perfect Meta Titles, detailed Meta Descriptions, or engaging social media posts where every single character is strictly limited.</li>
                        <li><strong>Read Time Estimation:</strong> Based on the globally accepted average adult reading speed of 200 words per minute, this extremely helpful metric allows bloggers and speechwriters to actively predict exactly how long their audience will be actively engaged.</li>
                    </ul>

                    <h2>Built-in Quick Formatting Tools</h2>
                    <p>We've integrated handy, time-saving formatting utilities directly into the interface to vastly speed up your writing workflow:</p>
                    <ol>
                        <li><strong>UPPERCASE Converter:</strong> Instantly transforms your entire text into bold capital letters, perfect for emphasizing critical warnings or styling major headers.</li>
                        <li><strong>lowercase Converter:</strong> Quickly homogenizes messy input data by stripping away all capital letters seamlessly.</li>
                        <li><strong>Title Case Converter:</strong> Automatically capitalizes the very first letter of absolutely every word, specifically designed for flawlessly formatting article headlines or professional email subject lines.</li>
                    </ol>

                    <h2>Frequently Asked Questions (FAQ)</h2>
                    <h3>Is there a maximum limit on how many words I can seamlessly count?</h3>
                    <p>No practical limit exists. Because the highly optimized processing happens utilizing incredibly fast local JavaScript directly in your browser rather than relying on slow server responses, you can easily paste entire textbook manuscripts or 100,000-word novels instantly without any sluggishness.</p>

                    <h3>Does this tool securely count spaces as active characters?</h3>
                    <p>Yes. The 'Character' count visibly displayed explicitly includes all letters, numbers, punctuation marks, and the actual spaces between your words, which perfectly mirrors exactly how major platforms like Twitter(X) or Google determine strict length limits.</p>
                </>
            }
        >
            <WordCounterClient />
        </ToolLayout>
    );
}
