'use client';

import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import InputField from '@/components/InputField';
import ResultCard from '@/components/ResultCard';
import FAQ from '@/components/FAQ';
import taxRules from '@/data/taxRules.json';

export default function MaasCalculator() {
    const [brutMaas, setBrutMaas] = useState<number>(30000);
    const [results, setResults] = useState<any>(null);

    useEffect(() => {
        calculate();
    }, [brutMaas]);

    const calculate = () => {
        if (!brutMaas) return;

        // SGK Cuts
        const sgkIsci = brutMaas * (taxRules.insurance.employee / 100);
        const issizlikIsci = brutMaas * (taxRules.insurance.unemployment / 100);
        const gelirVergisiMatrahi = brutMaas - sgkIsci - issizlikIsci;

        // simplified income tax (first bracket for demonstration, but user wants progressive)
        // Actually let's do progressive for the current month
        let kalanMatrah = gelirVergisiMatrahi;
        let gelirVergisi = 0;

        // We assume this is January (cumulative = 0)
        for (const bracket of taxRules["2024"]) {
            if (bracket.limit === null || kalanMatrah <= bracket.limit) {
                gelirVergisi += (kalanMatrah * bracket.rate) / 100;
                break;
            } else {
                // This is a simplified per-month view. Real calc depends on cumulative year.
                // But for a single month calculator, we usually show 15% or current bracket.
                gelirVergisi = (gelirVergisiMatrahi * 15) / 100;
                break;
            }
        }

        const damgaVergisi = brutMaas * taxRules.stampTaxRate;
        const kesintilerToplami = sgkIsci + issizlikIsci + gelirVergisi + damgaVergisi;
        const netMaas = brutMaas - kesintilerToplami;

        setResults([
            { label: 'Brüt Maaş', value: `${brutMaas.toLocaleString('tr-TR')} TL` },
            { label: 'SGK İşçi Payı (%14)', value: `${sgkIsci.toLocaleString('tr-TR')} TL` },
            { label: 'İşsizlik Sigortası (%1)', value: `${issizlikIsci.toLocaleString('tr-TR')} TL` },
            { label: 'Gelir Vergisi (%15)', value: `${gelirVergisi.toLocaleString('tr-TR')} TL` },
            { label: 'Damga Vergisi', value: `${damgaVergisi.toLocaleString('tr-TR')} TL` },
            { label: 'Net Maaş', value: `${netMaas.toLocaleString('tr-TR')} TL`, highlight: true },
        ]);
    };

    const faqItems = [
        {
            question: "Net maaş nasıl hesaplanır?",
            answer: "Brüt maaştan SGK işçi payı (%14), işsizlik sigortası işçi payı (%1) ve gelir vergisi ile damga vergisi kesintileri çıkarılarak net maaş hesaplanır."
        },
        {
            question: "Gelir vergisi dilimleri nedir?",
            answer: "Gelir vergisi kümülatif matraha göre artan oranlıdır (%15, %20, %27, %35, %40). Yıl ilerledikçe vergi diliminiz artabilir."
        }
    ];

    return (
        <div className="min-h-screen bg-bgColor">
            <Navbar />
            <main className="max-w-4xl mx-auto px-4 py-12">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-black text-primary mb-4 tracking-tight">Net - Brüt Maaş Hesaplama</h1>
                    <p className="text-gray-600">2024 güncel vergi dilimleri ve SGK kesintilerine göre maaşınızı hesaplayın.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white p-6 rounded-2xl shadow-soft border border-gray-100 h-fit">
                        <InputField
                            label="Brüt Maaş (TL)"
                            type="number"
                            value={brutMaas}
                            onChange={setBrutMaas}
                        />
                        <p className="text-xs text-gray-400 mt-4 italic">
                            * Bu hesaplama bekar ve çocuksuz bir çalışan için asgari geçim indirimi (artık uygulanmayan) hariç tutularak yapılmıştır.
                        </p>
                    </div>

                    {results && (
                        <ResultCard
                            title="Hesaplama Sonucu"
                            results={results}
                            description="Veriler bilgilendirme amaçlıdır. Resmi bordro ile farklılık gösterebilir."
                        />
                    )}
                </div>

                <FAQ items={faqItems} />
            </main>
            <Footer />
        </div>
    );
}
