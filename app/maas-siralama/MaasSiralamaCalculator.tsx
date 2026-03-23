'use client';

import { useState, useCallback } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// 2026 approximate Turkish salary distribution data (net TL)
// Based on TÜİK and SGK statistics, projected for 2026
const salaryPercentiles = [
    { percentile: 5, salary: 28000 },
    { percentile: 10, salary: 28075.5 }, // Asgari Ücret Baseline
    { percentile: 15, salary: 28500 },
    { percentile: 20, salary: 29000 },
    { percentile: 25, salary: 30000 },
    { percentile: 30, salary: 32000 },
    { percentile: 35, salary: 35000 },
    { percentile: 40, salary: 38000 },
    { percentile: 45, salary: 42000 },
    { percentile: 50, salary: 47000 }, // Medyan
    { percentile: 55, salary: 52000 },
    { percentile: 60, salary: 58000 },
    { percentile: 65, salary: 65000 },
    { percentile: 70, salary: 75000 },
    { percentile: 75, salary: 85000 },
    { percentile: 80, salary: 100000 },
    { percentile: 85, salary: 120000 },
    { percentile: 90, salary: 150000 },
    { percentile: 95, salary: 200000 },
    { percentile: 99, salary: 350000 },
];

function getPercentile(salary: number): number {
    if (salary <= salaryPercentiles[0].salary) return 1;
    if (salary >= salaryPercentiles[salaryPercentiles.length - 1].salary) return 99;

    for (let i = 0; i < salaryPercentiles.length - 1; i++) {
        const current = salaryPercentiles[i];
        const next = salaryPercentiles[i + 1];
        if (salary >= current.salary && salary < next.salary) {
            const ratio = (salary - current.salary) / (next.salary - current.salary);
            return Math.round(current.percentile + ratio * (next.percentile - current.percentile));
        }
    }
    return 99;
}

function getEmoji(percentile: number): string {
    if (percentile >= 90) return '🏆';
    if (percentile >= 75) return '🌟';
    if (percentile >= 60) return '💪';
    if (percentile >= 40) return '👍';
    if (percentile >= 20) return '📊';
    return '💡';
}

function getMessage(percentile: number): string {
    if (percentile >= 95) return "Türkiye'nin en yüksek gelirli %5'lik dilimindesiniz! Olağanüstü bir başarı.";
    if (percentile >= 90) return "Türkiye'deki çalışanların büyük çoğunluğundan daha fazla kazanıyorsunuz!";
    if (percentile >= 75) return "Ortalamanın oldukça üzerinde, güçlü bir gelir düzeyindesiniz.";
    if (percentile >= 60) return "Ortalamanın üzerinde bir maaş alıyorsunuz, iyi gidiyorsunuz!";
    if (percentile >= 40) return "Türkiye ortalamasına yakın bir gelir düzeyindesiniz.";
    if (percentile >= 25) return "Ortalamanın biraz altındasınız ama kariyer yatırımlarıyla yukarı çıkabilirsiniz.";
    return "Gelir düzeyinizi artırmak için yeni fırsatlar ve beceri geliştirme yollarını değerlendirebilirsiniz.";
}

function getBarColor(percentile: number): string {
    if (percentile >= 90) return 'from-yellow-400 to-amber-500';
    if (percentile >= 75) return 'from-emerald-400 to-green-500';
    if (percentile >= 60) return 'from-blue-400 to-blue-500';
    if (percentile >= 40) return 'from-sky-400 to-cyan-500';
    if (percentile >= 20) return 'from-orange-400 to-orange-500';
    return 'from-rose-400 to-red-500';
}

export default function MaasSiralamaCalculator() {
    const [salary, setSalary] = useState<number>(25000);
    const [result, setResult] = useState<{ percentile: number; calculated: boolean }>({ percentile: 0, calculated: false });
    const [isAnimating, setIsAnimating] = useState(false);

    const calculate = useCallback(() => {
        if (!salary || salary < 0) return;
        setIsAnimating(true);
        setResult({ percentile: 0, calculated: false });

        // Animate the percentile bar
        const targetPercentile = getPercentile(salary);
        let current = 0;
        const step = Math.max(1, Math.floor(targetPercentile / 40));
        const interval = setInterval(() => {
            current += step;
            if (current >= targetPercentile) {
                current = targetPercentile;
                clearInterval(interval);
                setIsAnimating(false);
                setResult({ percentile: targetPercentile, calculated: true });
            } else {
                setResult({ percentile: current, calculated: false });
            }
        }, 30);
    }, [salary]);

    const shareWhatsApp = () => {
        const text = `🤔 Maaşımın Türkiye'deki sıralamasını merak ettim ve öğrendim!\n\n${getEmoji(result.percentile)} Türkiye'deki çalışanların %${result.percentile}'${result.percentile > 60 ? 'ından' : 'inden'} fazla kazanıyormuşum!\n\n🔗 Sen de öğrenmek ister misin?\nhttps://net-tutar.vercel.app/maas-siralama`;
        window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
    };

    const shareTwitter = () => {
        const text = `${getEmoji(result.percentile)} Maaşım Türkiye'deki çalışanların %${result.percentile}'${result.percentile > 60 ? 'ından' : 'inden'} fazla! Sen kaçıncı sıradasın?\n\n🔗 https://net-tutar.vercel.app/maas-siralama`;
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`, '_blank');
    };

    const ASGARI_UCRET = 28075.5;
    const MEDYAN_MAAS = 47000;
    const ORTALAMA_MAAS = 55000;

    return (
        <div className="min-h-screen bg-bgColor">
            <Navbar />
            <main className="max-w-4xl mx-auto px-4 py-12">
                {/* Hero */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-6">
                        <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
                        2026 Güncel Veriler
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black text-primary mb-4 tracking-tight">
                        Maaşın Türkiye&apos;de <br className="hidden md:block" />
                        <span className="text-accent">Kaçıncı Sırada?</span>
                    </h1>
                    <p className="text-gray-600 max-w-xl mx-auto">
                        Net maaşını gir, Türkiye&apos;deki milyonlarca çalışan arasında nerede durduğunu hemen öğren.
                    </p>
                </div>

                {/* Calculator */}
                <div className="max-w-xl mx-auto">
                    <div className="bg-white p-8 rounded-3xl shadow-soft border border-gray-100">
                        <label className="block text-sm font-semibold text-primary mb-3">
                            Aylık Net Maaşınız (TL)
                        </label>
                        <div className="relative">
                            <input
                                type="number"
                                value={salary}
                                onChange={(e) => setSalary(Number(e.target.value))}
                                className="w-full px-5 py-4 border-2 border-gray-200 rounded-2xl text-lg font-bold text-primary focus:border-accent focus:outline-none transition-colors"
                                placeholder="Örn: 25000"
                                min={0}
                            />
                            <span className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 font-medium">₺</span>
                        </div>

                        {/* Quick Select Buttons */}
                        <div className="flex flex-wrap gap-2 mt-4">
                            {[28075.5, 35000, 45000, 60000, 85000, 125000].map((val) => (
                                <button
                                    key={val}
                                    onClick={() => setSalary(val)}
                                    className={`text-xs px-3 py-1.5 rounded-full font-medium transition-all ${salary === val ? 'bg-accent text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                                >
                                    {val.toLocaleString('tr-TR')} ₺
                                </button>
                            ))}
                        </div>

                        <button
                            onClick={calculate}
                            disabled={isAnimating}
                            className="w-full mt-6 py-4 bg-primary text-white font-bold text-lg rounded-2xl hover:bg-primary/90 transition-all disabled:opacity-50 shadow-lg"
                        >
                            {isAnimating ? 'Hesaplanıyor...' : '🔍 Sıralamı Göster'}
                        </button>
                    </div>

                    {/* Results */}
                    {result.percentile > 0 && (
                        <div className="mt-8 bg-white p-8 rounded-3xl shadow-soft border border-gray-100 animate-fade-in">
                            {/* Percentile Display */}
                            <div className="text-center mb-8">
                                <div className="text-6xl mb-3">{getEmoji(result.percentile)}</div>
                                <h2 className="text-xl font-bold text-primary mb-2">
                                    Türkiye&apos;deki çalışanların
                                </h2>
                                <div className="text-6xl md:text-7xl font-black text-accent my-3">
                                    %{result.percentile}
                                </div>
                                <p className="text-lg text-primary font-semibold">
                                    {result.percentile >= 50 ? "'inden fazla kazanıyorsunuz!" : "'inin altında kazanıyorsunuz."}
                                </p>
                            </div>

                            {/* Progress Bar */}
                            <div className="mb-6">
                                <div className="flex justify-between text-xs text-gray-400 mb-2">
                                    <span>%0</span>
                                    <span>%25</span>
                                    <span>%50</span>
                                    <span>%75</span>
                                    <span>%100</span>
                                </div>
                                <div className="w-full bg-gray-100 rounded-full h-6 overflow-hidden relative">
                                    <div
                                        className={`h-full bg-gradient-to-r ${getBarColor(result.percentile)} rounded-full transition-all duration-300 ease-out flex items-center justify-end pr-2`}
                                        style={{ width: `${result.percentile}%` }}
                                    >
                                        {result.calculated && result.percentile > 15 && (
                                            <span className="text-white text-xs font-bold">%{result.percentile}</span>
                                        )}
                                    </div>
                                    {/* Markers */}
                                    <div className="absolute top-0 left-1/4 w-px h-full bg-gray-300"></div>
                                    <div className="absolute top-0 left-1/2 w-px h-full bg-gray-300"></div>
                                    <div className="absolute top-0 left-3/4 w-px h-full bg-gray-300"></div>
                                </div>
                            </div>

                            {/* Message */}
                            {result.calculated && (
                                <>
                                    <div className="bg-bgColor p-5 rounded-2xl mb-6">
                                        <p className="text-gray-600 text-sm text-center leading-relaxed">
                                            {getMessage(result.percentile)}
                                        </p>
                                    </div>

                                    {/* Comparison Stats */}
                                    <div className="grid grid-cols-3 gap-3 mb-6">
                                        <div className="text-center p-4 bg-bgColor rounded-2xl">
                                            <p className="text-xs text-gray-400 mb-1">Asgari Ücret</p>
                                            <p className="font-bold text-primary text-sm">{ASGARI_UCRET.toLocaleString('tr-TR')} ₺</p>
                                            <p className="text-xs text-gray-400 mt-1">
                                                {salary >= ASGARI_UCRET ? `+${((salary / ASGARI_UCRET - 1) * 100).toFixed(0)}%` : 'Altında'}
                                            </p>
                                        </div>
                                        <div className="text-center p-4 bg-bgColor rounded-2xl">
                                            <p className="text-xs text-gray-400 mb-1">Medyan Maaş</p>
                                            <p className="font-bold text-primary text-sm">{MEDYAN_MAAS.toLocaleString('tr-TR')} ₺</p>
                                            <p className="text-xs text-gray-400 mt-1">
                                                {salary >= MEDYAN_MAAS ? `+${((salary / MEDYAN_MAAS - 1) * 100).toFixed(0)}%` : `${((1 - salary / MEDYAN_MAAS) * 100).toFixed(0)}% altında`}
                                            </p>
                                        </div>
                                        <div className="text-center p-4 bg-bgColor rounded-2xl">
                                            <p className="text-xs text-gray-400 mb-1">Ortalama</p>
                                            <p className="font-bold text-primary text-sm">{ORTALAMA_MAAS.toLocaleString('tr-TR')} ₺</p>
                                            <p className="text-xs text-gray-400 mt-1">
                                                {salary >= ORTALAMA_MAAS ? `+${((salary / ORTALAMA_MAAS - 1) * 100).toFixed(0)}%` : `${((1 - salary / ORTALAMA_MAAS) * 100).toFixed(0)}% altında`}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Share Buttons */}
                                    <div className="flex flex-col sm:flex-row gap-3">
                                        <button
                                            onClick={shareWhatsApp}
                                            className="flex-1 flex items-center justify-center gap-2 py-3 bg-[#25D366] text-white font-semibold rounded-2xl hover:bg-[#20bd5a] transition-all text-sm"
                                        >
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                            </svg>
                                            WhatsApp&apos;ta Paylaş
                                        </button>
                                        <button
                                            onClick={shareTwitter}
                                            className="flex-1 flex items-center justify-center gap-2 py-3 bg-black text-white font-semibold rounded-2xl hover:bg-gray-800 transition-all text-sm"
                                        >
                                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                            </svg>
                                            X&apos;te Paylaş
                                        </button>
                                    </div>
                                </>
                            )}
                        </div>
                    )}
                </div>

                {/* SEO Content */}
                <section className="mt-20 prose prose-slate max-w-none bg-white p-8 md:p-16 rounded-[3rem] shadow-soft border border-gray-100">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl font-black text-primary mb-8">2026 Türkiye Maaş İstatistikleri</h2>

                        <div className="space-y-8 text-gray-600 leading-relaxed">
                            <div>
                                <h3 className="text-xl font-bold text-primary mb-3">Türkiye&apos;de Ortalama Maaş Ne Kadar?</h3>
                                <p>
                                    2026 yılı itibarıyla Türkiye&apos;de çalışanların ortalama net maaşı yaklaşık 55.000 TL civarındadır. 
                                    Ancak ortalama maaş yanıltıcı olabilir çünkü çok yüksek maaşlar ortalamayı yukarı çekmektedir. 
                                    Bu nedenle <strong>medyan maaş</strong> daha gerçekçi bir göstergedir. 2026 yılı medyan maaş yaklaşık 47.000 TL&apos;dir, 
                                    yani çalışanların yarısı bunun altında, yarısı bunun üstünde kazanmaktadır.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold text-primary mb-3">Sektörlere Göre Maaş Dağılımı</h3>
                                <p>
                                    Teknoloji, finans ve enerji sektörlerinde çalışanlar genellikle ortalamanın üzerinde maaş alırken; 
                                    hizmet, perakende ve tarım sektörlerinde maaşlar ortalamanın altında kalmaktadır. 
                                    Mühendislik, yazılım geliştirme ve sağlık gibi alanlarda uzmanlaşmış profesyonellerin 
                                    gelir düzeyi belirgin şekilde yüksektir.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold text-primary mb-3">Maaş Sıralamanızı Nasıl Yükseltirsiniz?</h3>
                                <ul className="list-disc pl-5 space-y-2">
                                    <li><strong>Sertifika ve eğitim:</strong> Alanınızdaki profesyonel sertifikalar maaşınızı %15-30 artırabilir.</li>
                                    <li><strong>Yabancı dil:</strong> İngilizce bilmek, bilmeyenlere göre ortalama %25 daha yüksek maaş anlamına gelir.</li>
                                    <li><strong>Sektör değişikliği:</strong> Dijital dönüşüm ve teknoloji alanlarına geçiş, gelir artışında en etkili yöntemlerden biridir.</li>
                                    <li><strong>Şehir seçimi:</strong> İstanbul, Ankara ve İzmir&apos;deki maaşlar Türkiye ortalamasının %20-40 üzerindedir.</li>
                                </ul>
                            </div>

                            <div className="bg-bgColor p-6 rounded-2xl border border-blue-100">
                                <h3 className="text-lg font-bold text-primary mb-3 text-center">Hesaplama Hakkında</h3>
                                <p className="text-sm text-center">
                                    Bu sıralama aracı, TÜİK ve SGK verilerinden derlenen tahmini istatistiklere dayanmaktadır. 
                                    Sonuçlar bilgilendirme amaçlı olup kesin resmi rakamlar değildir. 
                                    Verileriniz tarayıcınızda işlenir ve asla sunucularımıza gönderilmez.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
