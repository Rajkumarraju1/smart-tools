import Link from 'next/link';
import { FileText, Image as ImageIcon, Settings, ArrowRight } from 'lucide-react';
import AdsterraBanner from '@/components/AdsterraBanner';

const categories = [
  {
    title: 'PDF Tools',
    description: 'Merge, compress, and convert PDF files securely.',
    icon: FileText,
    href: '/tools/pdf',
    color: 'bg-red-100 text-red-600',
  },
  {
    title: 'Image Tools',
    description: 'Compress, resize, and edit images instantly.',
    icon: ImageIcon,
    href: '/tools/image',
    color: 'bg-purple-100 text-purple-600',
  },

  {
    title: 'Developer Tools',
    description: 'JSON, Base64, and Minifiers for coding.',
    icon: Settings,
    href: '/tools/dev',
    color: 'bg-indigo-100 text-indigo-600',
  },
  {
    title: 'Calculators',
    description: 'BMI, Age, and Financial calculators.',
    icon: Settings, // Using Settings icon temporarily, could import Activity or Calculator if available
    href: '/tools/calculators',
    color: 'bg-teal-100 text-teal-600',
  },
  {
    title: 'Text & Data',
    description: 'Lorem Ipsum, Converters, and Markdown.',
    icon: FileText,
    href: '/tools/text',
    color: 'bg-orange-100 text-orange-600',
  },
  {
    title: 'Utilities',
    description: 'Generators, converters, and other handy tools.',
    icon: Settings,
    href: '/tools/utility',
    color: 'bg-green-100 text-green-600',
  },
];

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl mb-4">
          All the <span className="text-blue-600">Smart Tools</span> You Need
        </h1>
        <p className="text-xl text-gray-500 max-w-2xl mx-auto mt-6">
          Your ultimate suite of free, secure, and blazing-fast online utilities. Designed for developers, students, and professionals who need reliable tools without the clutter. No registration, no watermarks, and 100% privacy-focused.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Link href="/tools/pdf" className="px-6 py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition">
            Explore PDF Tools
          </Link>
          <Link href="/about" className="px-6 py-3 bg-white text-gray-700 border border-gray-200 rounded-xl font-medium hover:bg-gray-50 transition">
            Learn More
          </Link>
        </div>
      </div>

      {/* Leaderboard Ad */}
      <div className="my-12 flex justify-center">
        <div className="hidden sm:block">
          <AdsterraBanner id="38b2463f381410f1a72e51005ec10cfe" width={728} height={90} />
        </div>
        <div className="block sm:hidden">
          <AdsterraBanner id="149fc3a7c578b4fce8c7bd349837a207" width={320} height={50} />
        </div>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {categories.map((category) => (
          <Link
            key={category.title}
            href={category.href}
            className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow p-6 border border-gray-100 group"
          >
            <div className={`w-12 h-12 rounded-xl ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
              <category.icon className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">{category.title}</h3>
            <p className="text-gray-500 mb-4">{category.description}</p>
            <div className="flex items-center text-blue-600 font-medium group-hover:translate-x-1 transition-transform">
              Explore <ArrowRight className="h-4 w-4 ml-1" />
            </div>
          </Link>
        ))}
      </div>

      {/* Mid-content Banner (Standard display ad) */}
      <div className="my-12 flex justify-center">
        <AdsterraBanner id="750cec72414a19117da23f935150045e" width={300} height={250} />
      </div>

      {/* Why Section */}
      <div className="mt-24 mb-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Use Smart Tools?</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            We provide simple, powerful, and secure tools for your everyday needs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="p-6 bg-blue-50 rounded-2xl">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Privacy First</h3>
            <p className="text-gray-600">All tools run in your browser. Your files never leave your device.</p>
          </div>
          <div className="p-6 bg-green-50 rounded-2xl">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Completely Free</h3>
            <p className="text-gray-600">No subscriptions, no watermarks, no limits. Just free tools.</p>
          </div>
          <div className="p-6 bg-purple-50 rounded-2xl">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Blazing Fast</h3>
            <p className="text-gray-600">Optimized for speed. Get your results in seconds, not minutes.</p>
          </div>
        </div>

        <div className="mt-24 max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Built for Professionals, Students, and Everyday Users</h2>
              <div className="prose prose-blue text-gray-600">
                <p>
                  At MyWebUtils, we believe that essential digital utilities should be accessible to everyone without friction. The internet is flooded with basic tools, but most suffer from invasive ad tracking, heavy server dependency, or paywalls blocking essential features. We built this platform to fix that architecture.
                </p>
                <p>
                  <strong>What The Platform Offers:</strong> A curated, expansive suite of over 25 unique utilities ranging from PDF manipulation to cryptographic password generation and developer formatting. Everything is hosted in one central, intuitive ecosystem.
                </p>
                <p>
                  <strong>Who Is It For?</strong> 
                  <br />- <em>Developers:</em> Format JSON, minify code, and encode Base64 instantly without transmitting proprietary code blocks.
                  <br />- <em>Students & Professionals:</em> Merge research PDFs, compress images for presentations, and securely calculate financial metrics.
                </p>
                <p>
                  <strong>Why Choose Us Over Alternatives?</strong> Our commitment is to processing speed and fundamental privacy. Most alternatives demand that you upload your file to their server, wait in a queue, and download the returned asset. We utilize <em>client-side processing</em> via modern browser APIs (WebAssembly, HTML5 Canvas) which means your data literally never leaves your device.
                </p>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 relative">
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-100 rounded-full blur-2xl opacity-60"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-100 rounded-full blur-2xl opacity-60"></div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 relative z-10">Why Choose Us?</h3>
              <ul className="space-y-4 relative z-10">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-sm mr-3 mt-0.5">✓</div>
                  <span className="text-gray-700"><strong>No Data Collection:</strong> Files processed locally.</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-sm mr-3 mt-0.5">✓</div>
                  <span className="text-gray-700"><strong>Instant Results:</strong> Zero wait times for uploads/downloads.</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-sm mr-3 mt-0.5">✓</div>
                  <span className="text-gray-700"><strong>Mobile Friendly:</strong> Works flawlessly on phones and tablets.</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-sm mr-3 mt-0.5">✓</div>
                  <span className="text-gray-700"><strong>Constantly Updating:</strong> New tools added every month.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Leaderboard Banner (Standard display ad) */}
      <div className="mt-16 border-t border-gray-100 pt-12 flex justify-center">
        <div className="hidden sm:block">
          <AdsterraBanner id="38b2463f381410f1a72e51005ec10cfe" width={728} height={90} />
        </div>
        <div className="block sm:hidden">
          <AdsterraBanner id="149fc3a7c578b4fce8c7bd349837a207" width={320} height={50} />
        </div>
      </div>

    </div>
  );
}



