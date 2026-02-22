'use client';

import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import InputField from '@/components/InputField';
import ResultCard from '@/components/ResultCard';
import FAQ from '@/components/FAQ';
import rules from '@/data/retirementRules.json';

export default function EmeklilikCalculator() {
    const [birthDate, setBirthDate] = useState<string>('1985-01-01');
    const [entryDate, setEntryDate] = useState<string>('2005-01-01');
    const [gender, setGender] = useState<string>('male');
    const [totalDays, setTotalDays] = useState<number>(5000);
    const [results, setResults] = useState<any>(null);

    useEffect(() => {
        calculate();
    }, [birthDate, entryDate, gender, totalDays]);

    const calculate = () => {
        const entry = new Date(entryDate);
        const birth = new Date(birthDate);

        // Find applicable rule based on entry date
        const applicableRule = (rules.rulesByEntryDate as any[]).find((r: any) =>
            new Date(entryDate) >= new Date(r.startDate) &&
            new Date(entryDate) <= new Date(r.endDate)
        ) || rules.rulesByEntryDate[rules.rulesByEntryDate.length - 1];

        const targetAge = gender === 'female' ? applicableRule.female.age : applicableRule.male.age;
        const targetDays = gender === 'female' ? applicableRule.female.days : applicableRule.male.days;

        const retirementYearByAge = birth.getFullYear() + targetAge;
        const daysNeeded = Math.max(0, targetDays - totalDays);

        const today = new Date();
        const currentAge = today.getFullYear() - birth.getFullYear();

        setResults([
            { label: 'Emeklilik Yaşı', value: targetAge },
            { label: 'Gereken Toplam Prim', value: `${targetDays} Gün` },
            { label: 'Kalan Prim Gün Sayısı', value: `${daysNeeded} Gün` },
            { label: 'Tahmini Emeklilik Yılı', value: retirementYearByAge, highlight: true },
        ]);
    };

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
                        <InputField label="Doğum Tarihi" type="date" value={birthDate} onChange={setBirthDate} />
                        <InputField label="İlk Sigorta Girişi" type="date" value={entryDate} onChange={setEntryDate} />
                        <InputField
                            label="Cinsiyet"
                            value={gender}
                            onChange={setGender}
                            options={[
                                { label: 'Erkek', value: 'male' },
                                { label: 'Kadın', value: 'female' }
                            ]}
                        />
                        <InputField label="Toplam Prim Günü" type="number" value={totalDays} onChange={setTotalDays} />
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
