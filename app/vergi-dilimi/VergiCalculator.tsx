'use client';

import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import InputField from '@/components/InputField';
import ResultCard from '@/components/ResultCard';
import FAQ from '@/components/FAQ';
import taxRules from '@/data/taxRules.json';

export default function VergiCalculator() {
    const [kumulatifMatrah, setKumulatifMatrah] = useState<number>(150000);
    const [results, setResults] = useState<any>(null);

    useEffect(() => {
        calculate();
    }, [kumulatifMatrah]);

    const calculate = () => {
        let currentRate = 15;
        let nextLimit = 0;

        for (const bracket of taxRules["2024"]) {
            if (bracket.limit === null || kumulatifMatrah < bracket.limit) {
                currentRate = bracket.rate;
                nextLimit = bracket.limit || 0;
                break;
            }
        }

        const remainingToNext = nextLimit ? nextLimit - kumulatifMatrah : 0;

        setResults([
            { label: 'Güncel Vergi Diliminiz', value: `%${currentRate}`, highlight: true },
            { label: 'Kümülatif Matrah', value: `${kumulatifMatrah.toLocaleString('tr-TR')} TL` },
            { label: 'Sonraki Dilim Sınırı', value: nextLimit ? `${nextLimit.toLocaleString('tr-TR')} TL` : 'En Üst Dilim' },
            { label: 'Sonraki Dilime Kalan', value: nextLimit ? `${remainingToNext.toLocaleString('tr-TR')} TL` : '0 TL' },
        ]);
    };

    const faqItems = [
        {
            question: "Kümülatif matrah nedir?",
            answer: "Yılın başından itibaren kazandığınız ve üzerinden gelir vergisi kesilen toplam tutardır. Kesintiler sonrası değil, vergiden önceki matrahların toplamıdır."
        }
    ];

    return (
        <div className="min-h-screen bg-bgColor">
            <Navbar />
            <main className="max-w-4xl mx-auto px-4 py-12">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-black text-primary mb-4 tracking-tight">Vergi Dilimi Hesaplama</h1>
                    <p className="text-gray-600">Yıl içindeki kazancınıza göre hangi vergi diliminde olduğunuzu bulun.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white p-6 rounded-2xl shadow-soft border border-gray-100">
                        <InputField label="Toplam Kümülatif Matrah (TL)" type="number" value={kumulatifMatrah} onChange={setKumulatifMatrah} />
                    </div>

                    {results && (
                        <ResultCard
                            title="Vergi Durum Analizi"
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
