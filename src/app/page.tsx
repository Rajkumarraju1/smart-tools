import Link from 'next/link';
import { FileText, Image as ImageIcon, Video, Settings, ArrowRight } from 'lucide-react';

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
        <p className="text-xl text-gray-500 max-w-2xl mx-auto">
          Free, secure, and fast online tools for your daily tasks. No registration required.
        </p>
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
    </div>
  );
}
