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

export default function AsgariUcretCalculator() {
    // 2026 Actual Data provided by user
    // Gross: 33.030,00 TL
    // Net: 28.075,50 TL
    const [gross, setGross] = useState<number>(33030); 
    const [results, setResults] = useState<ResultItem[] | null>(null);

    const calculate = useCallback(() => {
        const sgkIsci = gross * 0.14;
        const issizlikIsci = gross * 0.01;

        // Asgari ücret is exempt from Income Tax and Stamp Tax for most cases in TR currently
        const gelirVergisi = 0;
        const damgaVergisi = 0;

        const net = gross - sgkIsci - issizlikIsci - gelirVergisi - damgaVergisi;

        // Employer Costs
        const sgkIsveren = gross * 0.155; // %5 deduction applied
        const issizlikIsveren = gross * 0.02;
        const totalCost = gross + sgkIsveren + issizlikIsveren;

        setResults([
            { label: 'Brüt Asgari Ücret', value: `${gross.toLocaleString('tr-TR', { minimumFractionDigits: 2 })} TL` },
            { label: 'SGK İşçi Payı (%14)', value: `${sgkIsci.toLocaleString('tr-TR', { minimumFractionDigits: 2 })} TL` },
            { label: 'İşsizlik Sigortası Payı (%1)', value: `${issizlikIsci.toLocaleString('tr-TR', { minimumFractionDigits: 2 })} TL` },
            { label: 'Net Asgari Ücret', value: `${net.toLocaleString('tr-TR', { minimumFractionDigits: 2 })} TL`, highlight: true },
            { label: 'İşverene Toplam Maliyet', value: `${totalCost.toLocaleString('tr-TR', { minimumFractionDigits: 2 })} TL` },
        ]);
    }, [gross]);

    useEffect(() => {
        calculate();
    }, [calculate]);

    const faqItems = [
        {
            question: "2026 Asgari Ücreti ne kadardır?",
            answer: "2026 yılı itibarıyla brüt asgari ücret 33.030,00 TL, çalışanın eline geçen net asgari ücret ise 28.075,50 TL olarak güncellenmiştir."
        },
        {
            question: "Asgari ücrette vergi istisnası nedir?",
            answer: "Türkiye'de asgari ücret tutarı kadar olan kazançlar gelir vergisi ve damga vergisinden muaftır. Bu sayede çalışanın eline geçen tutar artırılmıştır."
        },
        {
            question: "İşveren maliyeti nasıl hesaplanır?",
            answer: "İşveren maliyeti; brüt ücret, SGK işveren payı (%15.5) ve işsizlik sigortası işveren payının (%2) toplamından oluşur."
        }
    ];

    return (
        <div className="min-h-screen bg-bgColor">
            <Navbar />
            <main className="max-w-4xl mx-auto px-4 py-12">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-black text-primary mb-4 tracking-tight">Asgari Ücret Hesaplama 2026</h1>
                    <p className="text-gray-600">2026 net asgari ücret rakamlarını ve detaylarını analiz edin.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white p-6 rounded-2xl shadow-soft border border-gray-100 h-fit">
                        <InputField label="Brüt Ücret (TL)" type="number" value={gross} onChange={(val) => setGross(val as number)} />
                        <div className="flex flex-wrap gap-2 mt-4">
                            <button
                                onClick={() => setGross(33030)}
                                className="text-xs px-3 py-1 bg-accent text-white rounded-full hover:bg-accent/90"
                            >
                                2026 Güncel (33.030,00 TL)
                            </button>
                            <button
                                onClick={() => setGross(40000)}
                                className="text-xs px-3 py-1 bg-gray-100 rounded-full hover:bg-gray-200"
                            >
                                40.000 TL
                            </button>
                            <button
                                onClick={() => setGross(50000)}
                                className="text-xs px-3 py-1 bg-gray-100 rounded-full hover:bg-gray-200"
                            >
                                50.000 TL
                            </button>
                        </div>
                    </div>

                    {results && (
                        <ResultCard
                            title="2026 Asgari Ücret Detayları"
                            results={results}
                            description="Mevcut 2026 yasal verileri baz alınmıştır. Vergi muafiyetleri uygulanmıştır."
                        />
                    )}
                </div>

                <FAQ items={faqItems} />
            </main>
            <Footer />
        </div>
    );
}
