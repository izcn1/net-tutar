import React from 'react';
import Link from 'next/link';

interface CalculatorCardProps {
    title: string;
    description: string;
    icon: React.ReactNode;
    href: string;
}

const CalculatorCard: React.FC<CalculatorCardProps> = ({ title, description, icon, href }) => {
    return (
        <Link
            href={href}
            className="group block p-6 bg-white rounded-2xl shadow-soft border border-gray-100 hover:border-accent/50 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
        >
            <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent mb-4 group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                {icon}
            </div>
            <h3 className="text-lg font-bold text-primary mb-2 group-hover:text-accent transition-colors">
                {title}
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
                {description}
            </p>
        </Link>
    );
};

export default CalculatorCard;
