'use client';

import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import InputField from '@/components/InputField';
import ResultCard from '@/components/ResultCard';
import FAQ from '@/components/FAQ';

export default function KidemCalculator() {
    const [startDate, setStartDate] = useState<string>('2020-01-01');
    const [endDate, setEndDate] = useState<string>(new Date().toISOString().split('T')[0]);
    const [grossSalary, setGrossSalary] = useState<number>(40000);
    const [results, setResults] = useState<any>(null);

    useEffect(() => {
        calculate();
    }, [startDate, endDate, grossSalary]);

    const calculate = () => {
        const start = new Date(startDate);
        const end = new Date(endDate);

        // Difference in years
        const diffTime = Math.abs(end.getTime() - start.getTime());
        const totalDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        const years = totalDays / 365.25;

        // Kıdem tazminatı tavanı (January 2024 for example: 35.058,58 TL)
        const tavan = 35058.58;
        const effectiveSalary = Math.min(grossSalary, tavan);

        const brutKidem = effectiveSalary * years;
        const damgaVergisi = brutKidem * 0.00759;
        const netKidem = brutKidem - damgaVergisi;

        setResults([
            { label: 'Çalışma Süresi', value: `${years.toFixed(2)} Yıl` },
            { label: 'Uygulanan Brüt Maaş', value: `${effectiveSalary.toLocaleString('tr-TR')} TL` },
            { label: 'Brüt Tazminat', value: `${brutKidem.toLocaleString('tr-TR', { maximumFractionDigits: 2 })} TL` },
            { label: 'Damga Vergisi Kesintisi', value: `${damgaVergisi.toLocaleString('tr-TR', { maximumFractionDigits: 2 })} TL` },
            { label: 'Net Kıdem Tazminatı', value: `${netKidem.toLocaleString('tr-TR', { maximumFractionDigits: 2 })} TL`, highlight: true },
        ]);
    };

    const faqItems = [
        {
            question: "Kıdem tazminatı tavanı nedir?",
            answer: "Kıdem tazminatı tavanı, en yüksek devlet memuruna bir hizmet yılı için ödenen emeklilik ikramiyesini ifade eder. Maaşınız bu tutarın üzerinde olsa bile tazminatınız tavan fiyat üzerinden hesaplanır."
        },
        {
            question: "Kimler kıdem tazminatı alabilir?",
            answer: "Aynı işyerinde en az 1 yıl çalışmış olan ve iş sözleşmesi haklı bir nedenle sona eren veya emeklilik gibi nedenlerle ayrılan çalışanlar kıdem tazminatına hak kazanır."
        }
    ];

    return (
        <div className="min-h-screen bg-bgColor">
            <Navbar />
            <main className="max-w-4xl mx-auto px-4 py-12">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-black text-primary mb-4 tracking-tight">Kıdem Tazminatı Hesaplama</h1>
                    <p className="text-gray-600">İşten ayrılma durumunda alacağınız tazminat miktarını güncel tavan fiyatlara göre hesaplayın.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white p-6 rounded-2xl shadow-soft border border-gray-100">
                        <InputField label="İş Başlangıç Tarihi" type="date" value={startDate} onChange={setStartDate} />
                        <InputField label="İşten Ayrılış Tarihi" type="date" value={endDate} onChange={setEndDate} />
                        <InputField label="Son Brüt Maaş (TL)" type="number" value={grossSalary} onChange={setGrossSalary} />
                    </div>

                    {results && (
                        <ResultCard
                            title="Tazminat Analizi"
                            results={results}
                            description="2024 yılı kıdem tazminatı tavanı (35.058,58 TL) uygulanmıştır."
                        />
                    )}
                </div>

                <FAQ items={faqItems} />
            </main>
            <Footer />
        </div>
    );
}
