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

export default function KdvCalculator() {
    const [amount, setAmount] = useState<number>(1000);
    const [rate, setRate] = useState<number>(20); // Default %20
    const [type, setType] = useState<'dahil' | 'haric'>('haric');
    const [results, setResults] = useState<ResultItem[] | null>(null);

    const calculate = useCallback(() => {
        if (!amount || !rate) return;

        let matrah = 0;
        let kdvTutar = 0;
        let toplam = 0;

        if (type === 'haric') {
            matrah = amount;
            kdvTutar = amount * (rate / 100);
            toplam = amount + kdvTutar;
        } else {
            toplam = amount;
            matrah = amount / (1 + (rate / 100));
            kdvTutar = toplam - matrah;
        }

        setResults([
            { label: 'KDV Matrahı (Net)', value: `${matrah.toLocaleString('tr-TR', { maximumFractionDigits: 2 })} TL` },
            { label: `KDV Tutarı (%${rate})`, value: `${kdvTutar.toLocaleString('tr-TR', { maximumFractionDigits: 2 })} TL` },
            { label: 'Toplam Tutar', value: `${toplam.toLocaleString('tr-TR', { maximumFractionDigits: 2 })} TL`, highlight: true },
        ]);
    }, [amount, rate, type]);

    useEffect(() => {
        calculate();
    }, [calculate]);

    const faqItems = [
        {
            question: "KDV dahil fiyattan hariç fiyat nasıl hesaplanır?",
            answer: "KDV dahil tutarı, (1 + KDV oranı/100) sayısına bölerek KDV hariç tutarı (matrahı) bulabilirsiniz. Örneğin %20 KDV için tutarı 1.20'ye bölmelisiniz."
        },
        {
            question: "Güncel KDV oranları nedir?",
            answer: "Türkiye'de genel KDV oranı %20'dir. Temel gıda ürünlerinde %1, giyim ve eğitim gibi bazı hizmetlerde ise %10 oranında KDV uygulanmaktadır."
        }
    ];

    return (
        <div className="min-h-screen bg-bgColor">
            <Navbar />
            <main className="max-w-4xl mx-auto px-4 py-12">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-black text-primary mb-4 tracking-tight">KDV Hesaplama</h1>
                    <p className="text-gray-600">KDV dahil ve hariç işlemlerinizi saniyeler içinde yapın.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white p-6 rounded-2xl shadow-soft border border-gray-100 h-fit">
                        <InputField label="Tutar (TL)" type="number" value={amount} onChange={(val) => setAmount(val as number)} />
                        <InputField
                            label="Hesaplama Türü"
                            value={type}
                            onChange={(val) => setType(val as 'dahil' | 'haric')}
                            options={[
                                { label: 'KDV Hariç (Tutar + KDV)', value: 'haric' },
                                { label: 'KDV Dahil (Tutar İçinden)', value: 'dahil' }
                            ]}
                        />
                        <InputField
                            label="KDV Oranı (%)"
                            value={rate}
                            onChange={(val) => setRate(val as number)}
                            options={[
                                { label: '%20 (Genel)', value: 20 },
                                { label: '%10 (İndirimli)', value: 10 },
                                { label: '%1 (Temel Gıda)', value: 1 },
                                { label: 'Özel Oran Girin', value: rate }
                            ]}
                        />
                        {/* Custom Rate Input if not standard */}
                        {![1, 10, 20].includes(rate) && (
                            <InputField label="Özel KDV Oranı (%)" type="number" value={rate} onChange={(val) => setRate(val as number)} />
                        )}
                    </div>

                    {results && (
                        <ResultCard
                            title="Hesaplama Özeti"
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
