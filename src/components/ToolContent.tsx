import React from 'react';

interface FaqItem {
    question: string;
    answer: string;
}

interface ToolContentProps {
    title: string;
    introduction: string;
    features: string[];
    howToUse: string[];
    faqs: FaqItem[];
}

const ToolContent: React.FC<ToolContentProps> = ({
    title,
    introduction,
    features,
    howToUse,
    faqs,
}) => {
    return (
        <div className="mt-16 max-w-4xl mx-auto">
            <div className="prose prose-blue max-w-none">
                {/* Introduction */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">{title}</h2>
                    <p className="text-lg text-gray-600 leading-relaxed">{introduction}</p>
                </section>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                    {/* Features */}
                    <section>
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Features</h3>
                        <ul className="space-y-4">
                            {features.map((feature, index) => (
                                <li key={index} className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-sm mr-3 mt-0.5">
                                        ✓
                                    </span>
                                    <span className="text-gray-600">{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </section>

                    {/* How to Use */}
                    <section>
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">How to Use</h3>
                        <ol className="space-y-4">
                            {howToUse.map((step, index) => (
                                <li key={index} className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-900 flex items-center justify-center text-white font-bold text-sm mr-3 mt-0.5">
                                        {index + 1}
                                    </span>
                                    <span className="text-gray-600">{step}</span>
                                </li>
                            ))}
                        </ol>
                    </section>
                </div>

                {/* FAQs */}
                <section className="border-t border-gray-200 pt-12">
                    <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h3>
                    <div className="grid gap-6">
                        {faqs.map((faq, index) => (
                            <div key={index} className="bg-gray-50 rounded-2xl p-6 hover:bg-white hover:shadow-md transition-all border border-gray-100">
                                <h4 className="font-bold text-gray-900 mb-2 text-lg">{faq.question}</h4>
                                <p className="text-gray-600">{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default ToolContent;
