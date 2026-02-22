import React from 'react';

interface FaqItem {
    question: string;
    answer: string;
}

interface FAQProps {
    items: FaqItem[];
}

const FAQ: React.FC<FAQProps> = ({ items }) => {
    return (
        <section className="mt-16 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">Sıkça Sorulan Sorular</h2>
            <div className="space-y-4">
                {items.map((item, index) => (
                    <div key={index} className="bg-white p-6 rounded-2xl shadow-soft border border-gray-100">
                        <h4 className="font-bold text-primary mb-2 italic">? {item.question}</h4>
                        <p className="text-gray-600 leading-relaxed text-sm">
                            {item.answer}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FAQ;
