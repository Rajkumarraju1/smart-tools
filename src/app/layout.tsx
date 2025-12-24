import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Smart Tools - Free Online Utilities for Everyone',
    template: '%s | Smart Tools',
  },

  description: 'A massive collection of free, secure, and instant online tools. Merge PDFs, compress images, calculate BMI, format JSON, and more. No signup required.',
  keywords: ['online tools', 'pdf merger', 'image compressor', 'json formatter', 'bmi calculator', 'free utilities', 'web tools', 'developer tools'],
  authors: [{ name: 'Smart Tools Team' }],
  creator: 'Smart Tools',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://smart-tools-app.vercel.app',
    siteName: 'Smart Tools',
    title: 'Smart Tools - Free Online Utilities',
    description: 'Free, secure, and fast online tools for PDF, Images, Text, and Calculators.',
    images: [
      {
        url: '/og-image.png', // We should create this image later
        width: 1200,
        height: 630,
        alt: 'Smart Tools Dashboard',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Smart Tools - Free Online Utilities',
    description: 'Free, secure, and fast online tools for PDF, Images, Text, and Calculators.',
    // images: ['/twitter-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen flex flex-col bg-gray-50 text-gray-900`}>
        <JsonLd />
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
