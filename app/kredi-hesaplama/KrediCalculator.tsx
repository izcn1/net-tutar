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

export default function KrediCalculator() {
    const [amount, setAmount] = useState<number>(100000);
    const [interest, setInterest] = useState<number>(3.5);
    const [term, setTerm] = useState<number>(12);
    const [results, setResults] = useState<ResultItem[] | null>(null);

    const calculate = useCallback(() => {
        if (!amount || !interest || !term) return;

        const monthlyInterest = interest / 100;
        const payment = (amount * monthlyInterest * Math.pow(1 + monthlyInterest, term)) / (Math.pow(1 + monthlyInterest, term) - 1);
        const totalPayment = payment * term;
        const totalInterest = totalPayment - amount;

        setResults([
            { label: 'Taksit Tutarı', value: `${payment.toLocaleString('tr-TR', { maximumFractionDigits: 2 })} TL`, highlight: true },
            { label: 'Toplam Geri Ödeme', value: `${totalPayment.toLocaleString('tr-TR', { maximumFractionDigits: 2 })} TL` },
            { label: 'Toplam Faiz', value: `${totalInterest.toLocaleString('tr-TR', { maximumFractionDigits: 2 })} TL` },
        ]);
    }, [amount, interest, term]);

    useEffect(() => {
        calculate();
    }, [calculate]);

    const faqItems = [
        {
            question: "Kredi faiz oranları nasıl belirlenir?",
            answer: "Kredi faiz oranları merkez bankası politikaları, piyasa koşulları ve kredi notunuza göre bankalar tarafından belirlenir."
        },
        {
            question: "KKDF ve BSMV nedir?",
            answer: "KKDF (Kaynak Kullanımını Destekleme Fonu) ve BSMV (Banka ve Sigorta Muameleleri Vergisi) kredi faizine eklenen yasal vergilerdir. Hesaplamamızda bunları banka faizine dahil olarak girmelisiniz."
        }
    ];

    return (
        <div className="min-h-screen bg-bgColor">
            <Navbar />
            <main className="max-w-4xl mx-auto px-4 py-12">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-black text-primary mb-4 tracking-tight">Kredi Faiz Hesaplama</h1>
                    <p className="text-gray-600">Ödeme planınızı saniyeler içinde oluşturun, bütçenizi planlayın.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white p-6 rounded-2xl shadow-soft border border-gray-100">
                        <InputField label="Kredi Tutarı (TL)" type="number" value={amount} onChange={(val) => setAmount(val as number)} />
                        <InputField label="Aylık Faiz Oranı (%)" type="number" value={interest} onChange={(val) => setInterest(val as number)} />
                        <InputField label="Vade (Ay)" type="number" value={term} onChange={(val) => setTerm(val as number)} />
                    </div>

                    {results && (
                        <ResultCard
                            title="Ödeme Planı Özeti"
                            results={results}
                            description="Vergiler ve masraflar hesaplamaya dahil edilmemiş olabilir."
                        />
                    )}
                </div>

                <FAQ items={faqItems} />
            </main>
            <Footer />
        </div>
    );
}
