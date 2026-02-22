'use client';

import { useState, useEffect, useCallback } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import InputField from '@/components/InputField';
import ResultCard from '@/components/ResultCard';
import FAQ from '@/components/FAQ';
import rules from '@/data/retirementRules.json';

interface ResultItem {
    label: string;
    value: string | number;
    highlight?: boolean;
}

interface Rule {
    startDate: string;
    endDate: string;
    male: { age: number; days: number };
    female: { age: number; days: number };
}

export default function EmeklilikCalculator() {
    const [birthDate, setBirthDate] = useState<string>('1985-01-01');
    const [entryDate, setEntryDate] = useState<string>('2005-01-01');
    const [gender, setGender] = useState<'male' | 'female'>('male');
    const [totalDays, setTotalDays] = useState<number>(5000);
    const [results, setResults] = useState<ResultItem[] | null>(null);

    const calculate = useCallback(() => {
        const birth = new Date(birthDate);

        // Find applicable rule based on entry date
        const applicableRules = rules.rulesByEntryDate as Rule[];
        const applicableRule = applicableRules.find((r: Rule) =>
            new Date(entryDate) >= new Date(r.startDate) &&
            new Date(entryDate) <= new Date(r.endDate)
        ) || applicableRules[applicableRules.length - 1];

        const targetAge = gender === 'female' ? applicableRule.female.age : applicableRule.male.age;
        const targetDays = gender === 'female' ? applicableRule.female.days : applicableRule.male.days;

        const retirementYearByAge = birth.getFullYear() + targetAge;
        const daysNeeded = Math.max(0, targetDays - totalDays);

        setResults([
            { label: 'Emeklilik Yaşı', value: targetAge },
            { label: 'Gereken Toplam Prim', value: `${targetDays} Gün` },
            { label: 'Kalan Prim Gün Sayısı', value: `${daysNeeded} Gün` },
            { label: 'Tahmini Emeklilik Yılı', value: retirementYearByAge, highlight: true },
        ]);
    }, [birthDate, entryDate, gender, totalDays]);

    useEffect(() => {
        calculate();
    }, [calculate]);

    const faqItems = [
        {
            question: "EYT nedir?",
            answer: "Emeklilikte Yaşa Takılanlar (EYT), 8 Eylül 1999 öncesi sigorta girişi olanların yaş şartı aranmaksızın emekli olabilmesini sağlayan düzenlemedir."
        },
        {
            question: "Prim günüm eksikse ne olur?",
            answer: "Emekli olabilmek için hem yaş hem de prim günü şartını tamamlamanız gerekir. Prim gününüz eksikse borçlanma veya çalışmaya devam ederek tamamlayabilirsiniz."
        }
    ];

    return (
        <div className="min-h-screen bg-bgColor">
            <Navbar />
            <main className="max-w-4xl mx-auto px-4 py-12">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-black text-primary mb-4 tracking-tight">Emeklilik Hesaplama</h1>
                    <p className="text-gray-600">Ne zaman emekli olacağınızı güncel SGK mevzuatına göre öğrenin.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white p-6 rounded-2xl shadow-soft border border-gray-100">
                        <InputField label="Doğum Tarihi" type="date" value={birthDate} onChange={(val) => setBirthDate(val as string)} />
                        <InputField label="İlk Sigorta Girişi" type="date" value={entryDate} onChange={(val) => setEntryDate(val as string)} />
                        <InputField
                            label="Cinsiyet"
                            value={gender}
                            onChange={(val) => setGender(val as 'male' | 'female')}
                            options={[
                                { label: 'Erkek', value: 'male' },
                                { label: 'Kadın', value: 'female' }
                            ]}
                        />
                        <InputField label="Toplam Prim Günü" type="number" value={totalDays} onChange={(val) => setTotalDays(val as number)} />
                    </div>

                    {results && (
                        <ResultCard
                            title="Emeklilik Durumu"
                            results={results}
                            description="7438 sayılı kanun (EYT) kapsamındaki değişiklikler yansıtılmıştır."
                        />
                    )}
                </div>

                <FAQ items={faqItems} />
            </main>
            <Footer />
        </div>
    );
}
