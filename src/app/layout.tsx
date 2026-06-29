import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://mywebutils.online'),
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
    url: 'https://mywebutils.online',
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

import AdsterraSocialBar from '@/components/AdsterraSocialBar';
import RedirectLogViewer from '@/components/RedirectLogViewer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script dangerouslySetInnerHTML={{ __html: `
          (function() {
            var logs = JSON.parse(localStorage.getItem('redirect_logs') || '[]');
            var lastInteraction = 0;
            
            function logEvent(type, targetUrl) {
              var interactionDiff = lastInteraction > 0 ? (Date.now() - lastInteraction) : -1;
              var hasInteraction = lastInteraction > 0 && interactionDiff < 5000;
              var logEntry = {
                type: type,
                url: targetUrl || 'Unknown Destination',
                timestamp: new Date().toISOString(),
                readyState: document.readyState,
                hasInteraction: hasInteraction,
                timeSinceLastInteractionMs: interactionDiff,
                pageUrl: window.location.href
              };
              logs.push(logEntry);
              localStorage.setItem('redirect_logs', JSON.stringify(logs));
              console.warn('[RedirectTracker]', logEntry);
            }

            window.addEventListener('click', function() { lastInteraction = Date.now(); }, true);
            window.addEventListener('keypress', function() { lastInteraction = Date.now(); }, true);
            window.addEventListener('touchstart', function() { lastInteraction = Date.now(); }, true);

            // Hook window.open
            var originalOpen = window.open;
            window.open = function(url, target, features) {
              logEvent('window.open', url);
              return originalOpen.apply(this, arguments);
            };

            // Hook location assign and replace if supported
            try {
              var originalAssign = window.location.assign;
              window.location.assign = function(url) {
                logEvent('location.assign', url);
                originalAssign.call(window.location, url);
              };
              var originalReplace = window.location.replace;
              window.location.replace = function(url) {
                logEvent('location.replace', url);
                originalReplace.call(window.location, url);
              };
            } catch(e) {}

            // Hook onbeforeunload to log general exits
            window.addEventListener('beforeunload', function() {
              logEvent('beforeunload', 'Page Unload Triggered');
            });
          })();
        ` }} />
      </head>
      <body className={`${inter.className} min-h-screen flex flex-col bg-gray-50 text-gray-900`}>

        <JsonLd />
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        
        {/* Adsterra Social Bar (Global with dynamic toggle support) */}
        <AdsterraSocialBar />
        
        {/* Redirect logging panel for debugging */}
        <RedirectLogViewer />
      </body>
    </html>
  );
}


