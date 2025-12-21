import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-white border-t border-gray-200 mt-auto">
            <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <span className="font-bold text-xl text-gray-900">Smart Tools</span>
                        <p className="text-gray-500 text-sm mt-1">Free online smart tools for everyone.</p>
                    </div>
                    <div className="flex space-x-6 text-sm">
                        <Link href="/about" className="text-gray-500 hover:text-blue-600 transition-colors">
                            About Us
                        </Link>
                        <Link href="/privacy" className="text-gray-500 hover:text-blue-600 transition-colors">
                            Privacy Policy
                        </Link>
                        <Link href="/terms" className="text-gray-500 hover:text-blue-600 transition-colors">
                            Terms of Service
                        </Link>
                        <Link href="/contact" className="text-gray-500 hover:text-blue-600 transition-colors">
                            Contact Us
                        </Link>
                    </div>
                </div>
                <div className="mt-8 border-t border-gray-200 pt-8 text-center">
                    <p className="text-base text-gray-400">&copy; {new Date().getFullYear()} Smart Tools. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
