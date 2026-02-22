'use client';

import { useState, useEffect, useCallback } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import InputField from '@/components/InputField';
import ResultCard from '@/components/ResultCard';
import FAQ from '@/components/FAQ';

interface ResultItem {
    label: string;
    value: string | number;
    highlight?: boolean;
}

export default function ZamCalculator() {
    const [oldSalary, setOldSalary] = useState<number>(25000);
    const [newSalary, setNewSalary] = useState<number>(31250);
    const [results, setResults] = useState<ResultItem[] | null>(null);

    const calculate = useCallback(() => {
        if (!oldSalary || !newSalary) return;

        const diff = newSalary - oldSalary;
        const percentage = (diff / oldSalary) * 100;

        setResults([
            { label: 'Eski Maaş', value: `${oldSalary.toLocaleString('tr-TR')} TL` },
            { label: 'Yeni Maaş', value: `${newSalary.toLocaleString('tr-TR')} TL` },
            { label: 'Artış Tutarı', value: `${diff.toLocaleString('tr-TR')} TL` },
            { label: 'Zam Oranı', value: `%${percentage.toFixed(2)}`, highlight: true },
        ]);
    }, [oldSalary, newSalary]);

    useEffect(() => {
        calculate();
    }, [calculate]);

    const faqItems = [
        {
            question: "Zam oranı nasıl hesaplanır?",
            answer: "Yeni maaştan eski maaş çıkarılır, sonuç eski maaşa bölünür ve 100 ile çarpılır. Formül: ((Yeni - Eski) / Eski) * 100"
        }
    ];

    return (
        <div className="min-h-screen bg-bgColor">
            <Navbar />
            <main className="max-w-4xl mx-auto px-4 py-12">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-black text-primary mb-4 tracking-tight">Zam Oranı Hesaplama</h1>
                    <p className="text-gray-600">Gelirinizdeki artışı yüzdesel ve tutarsal olarak analiz edin.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white p-6 rounded-2xl shadow-soft border border-gray-100">
                        <InputField label="Eski Maaş (TL)" type="number" value={oldSalary} onChange={(val) => setOldSalary(val as number)} />
                        <InputField label="Yeni Maaş (TL)" type="number" value={newSalary} onChange={(val) => setNewSalary(val as number)} />
                    </div>

                    {results && (
                        <ResultCard
                            title="Zam Analizi"
                            results={results}
                        />
                    )}
                </div>

                <FAQ items={faqItems} />
            </main>
            <Footer />
        </div>
    );
}
