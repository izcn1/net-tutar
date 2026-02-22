import React from 'react';

interface ResultItem {
    label: string;
    value: string | number;
    highlight?: boolean;
}

interface ResultCardProps {
    title: string;
    results: ResultItem[];
    description?: string;
}

const ResultCard: React.FC<ResultCardProps> = ({ title, results, description }) => {
    return (
        <div className="bg-white p-6 rounded-2xl shadow-soft border border-gray-100">
            <h3 className="text-xl font-bold text-primary mb-4">{title}</h3>
            <div className="space-y-3">
                {results.map((res, index) => (
                    <div
                        key={index}
                        className={`flex justify-between items-center p-3 rounded-lg ${res.highlight ? 'bg-accent/10 border border-accent/20' : 'bg-gray-50'
                            }`}
                    >
                        <span className="text-gray-600 text-sm">{res.label}</span>
                        <span
                            className={`font-semibold ${res.highlight ? 'text-accent text-lg' : 'text-primary'
                                }`}
                        >
                            {res.value}
                        </span>
                    </div>
                ))}
            </div>
            {description && (
                <p className="mt-4 text-xs text-gray-500 italic text-center">
                    {description}
                </p>
            )}
        </div>
    );
};

export default ResultCard;
