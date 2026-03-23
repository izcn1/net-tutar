'use client';

import { useState, useEffect, useCallback } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MarketTicker from '@/components/MarketTicker';

interface CryptoItem {
    id: string;
    name: string;
    symbol: string;
    price: number;
    change24h: number;
    marketCap: number;
    image: string;
}

interface CurrencyItem {
    name: string;
    symbol: string;
    price: number;
    flag: string;
}

export default function PiyasalarClient() {
    const [cryptos, setCryptos] = useState<CryptoItem[]>([]);
    const [currencies, setCurrencies] = useState<CurrencyItem[]>([]);
    const [goldPrice, setGoldPrice] = useState<{ price: number; change: number } | null>(null);
    const [loading, setLoading] = useState(true);
    const [lastUpdate, setLastUpdate] = useState<string>('');
    const [activeTab, setActiveTab] = useState<'crypto' | 'doviz'>('doviz');

    const fetchData = useCallback(async () => {
        try {
            const [cryptoRes, fxRes, goldRes] = await Promise.allSettled([
                fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=try&order=market_cap_desc&per_page=20&sparkline=false&price_change_percentage=24h'),
                fetch('https://open.er-api.com/v6/latest/USD'),
                fetch('https://api.coingecko.com/api/v3/simple/price?ids=pax-gold&vs_currencies=try&include_24hr_change=true'),
            ]);

            // Crypto
            if (cryptoRes.status === 'fulfilled' && cryptoRes.value.ok) {
                const data = await cryptoRes.value.json();
                setCryptos(data.map((c: { id: string; name: string; symbol: string; current_price: number; price_change_percentage_24h: number; market_cap: number; image: string }) => ({
                    id: c.id,
                    name: c.name,
                    symbol: c.symbol.toUpperCase(),
                    price: c.current_price,
                    change24h: c.price_change_percentage_24h || 0,
                    marketCap: c.market_cap,
                    image: c.image,
                })));
            }

            // Currencies
            if (fxRes.status === 'fulfilled' && fxRes.value.ok) {
                const data = await fxRes.value.json();
                const tryRate = data.rates?.TRY || 0;
                if (tryRate > 0) {
                    const currencyList: CurrencyItem[] = [
                        { name: 'ABD Doları', symbol: 'USD/TRY', price: tryRate, flag: '🇺🇸' },
                        { name: 'Euro', symbol: 'EUR/TRY', price: tryRate / (data.rates?.EUR || 1), flag: '🇪🇺' },
                        { name: 'İngiliz Sterlini', symbol: 'GBP/TRY', price: tryRate / (data.rates?.GBP || 1), flag: '🇬🇧' },
                        { name: 'İsviçre Frangı', symbol: 'CHF/TRY', price: tryRate / (data.rates?.CHF || 1), flag: '🇨🇭' },
                        { name: 'Japon Yeni', symbol: 'JPY/TRY', price: tryRate / (data.rates?.JPY || 1), flag: '🇯🇵' },
                        { name: 'Kanada Doları', symbol: 'CAD/TRY', price: tryRate / (data.rates?.CAD || 1), flag: '🇨🇦' },
                        { name: 'Avustralya Doları', symbol: 'AUD/TRY', price: tryRate / (data.rates?.AUD || 1), flag: '🇦🇺' },
                        { name: 'Suudi Riyali', symbol: 'SAR/TRY', price: tryRate / (data.rates?.SAR || 1), flag: '🇸🇦' },
                    ];
                    setCurrencies(currencyList);
                }
            }

            // Gold
            if (goldRes.status === 'fulfilled' && goldRes.value.ok) {
                const data = await goldRes.value.json();
                if (data['pax-gold']) {
                    setGoldPrice({
                        price: data['pax-gold'].try,
                        change: data['pax-gold'].try_24h_change || 0,
                    });
                }
            }

            setLastUpdate(new Date().toLocaleTimeString('tr-TR'));
        } catch {
            // handle silently
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchData();
        const interval = setInterval(fetchData, 60000);
        return () => clearInterval(interval);
    }, [fetchData]);

    const formatPrice = (price: number) => {
        if (price >= 1000) return price.toLocaleString('tr-TR', { maximumFractionDigits: 0 });
        if (price >= 1) return price.toLocaleString('tr-TR', { minimumFractionDigits: 2, maximumFractionDigits: 4 });
        return price.toLocaleString('tr-TR', { minimumFractionDigits: 4, maximumFractionDigits: 6 });
    };

    const formatMarketCap = (cap: number) => {
        if (cap >= 1e12) return `₺${(cap / 1e12).toFixed(1)}T`;
        if (cap >= 1e9) return `₺${(cap / 1e9).toFixed(1)}B`;
        if (cap >= 1e6) return `₺${(cap / 1e6).toFixed(1)}M`;
        return `₺${cap.toLocaleString('tr-TR')}`;
    };

    return (
        <div className="min-h-screen bg-bgColor">
            <MarketTicker />
            <Navbar />
            <main className="max-w-6xl mx-auto px-4 py-12">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-black text-primary mb-4 tracking-tight">
                        Canlı Piyasalar
                    </h1>
                    <p className="text-gray-600 mb-4">Döviz, altın ve kripto para fiyatlarını anlık takip edin.</p>
                    {lastUpdate && (
                        <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100 text-xs text-gray-500">
                            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
                            Son güncelleme: {lastUpdate} • Her 60 saniyede otomatik yenilenir
                        </div>
                    )}
                </div>

                {loading ? (
                    <div className="flex flex-col items-center justify-center py-20">
                        <div className="w-12 h-12 border-4 border-gray-200 border-t-accent rounded-full animate-spin mb-4"></div>
                        <p className="text-gray-500 text-sm">Piyasa verileri yükleniyor...</p>
                    </div>
                ) : (
                    <>
                        {/* Gold & Major Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                            {/* Gold Card */}
                            {goldPrice && (
                                <div className="bg-gradient-to-br from-yellow-50 to-amber-50 p-6 rounded-2xl border border-yellow-200 shadow-sm">
                                    <div className="flex items-center justify-between mb-3">
                                        <div className="flex items-center gap-2">
                                            <span className="text-2xl">🥇</span>
                                            <div>
                                                <p className="font-bold text-primary text-sm">Altın (Ons)</p>
                                                <p className="text-xs text-gray-400">XAU/TRY</p>
                                            </div>
                                        </div>
                                        <span className={`text-xs font-bold px-2 py-1 rounded-full ${goldPrice.change >= 0 ? 'bg-emerald-100 text-emerald-700' : 'bg-red-100 text-red-700'}`}>
                                            {goldPrice.change >= 0 ? '▲' : '▼'} {Math.abs(goldPrice.change).toFixed(2)}%
                                        </span>
                                    </div>
                                    <p className="text-2xl font-black text-primary">₺{formatPrice(goldPrice.price)}</p>
                                </div>
                            )}

                            {/* USD, EUR */}
                            {currencies.slice(0, 2).map((cur) => (
                                <div key={cur.symbol} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                                    <div className="flex items-center gap-2 mb-3">
                                        <span className="text-2xl">{cur.flag}</span>
                                        <div>
                                            <p className="font-bold text-primary text-sm">{cur.name}</p>
                                            <p className="text-xs text-gray-400">{cur.symbol}</p>
                                        </div>
                                    </div>
                                    <p className="text-2xl font-black text-primary">₺{formatPrice(cur.price)}</p>
                                </div>
                            ))}
                        </div>

                        {/* Tabs */}
                        <div className="flex gap-2 mb-6">
                            <button
                                onClick={() => setActiveTab('doviz')}
                                className={`px-6 py-3 rounded-xl font-semibold text-sm transition-all ${activeTab === 'doviz' ? 'bg-primary text-white shadow-md' : 'bg-white text-gray-500 hover:bg-gray-50'}`}
                            >
                                💱 Döviz Kurları
                            </button>
                            <button
                                onClick={() => setActiveTab('crypto')}
                                className={`px-6 py-3 rounded-xl font-semibold text-sm transition-all ${activeTab === 'crypto' ? 'bg-primary text-white shadow-md' : 'bg-white text-gray-500 hover:bg-gray-50'}`}
                            >
                                ₿ Kripto Paralar
                            </button>
                        </div>

                        {/* Doviz Tab */}
                        {activeTab === 'doviz' && (
                            <div className="bg-white rounded-2xl shadow-soft border border-gray-100 overflow-hidden">
                                <div className="grid grid-cols-4 px-6 py-3 bg-gray-50 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                                    <span>Döviz</span>
                                    <span className="text-right">Kur</span>
                                    <span className="text-right hidden md:block">Birim</span>
                                    <span className="text-right">İşlem</span>
                                </div>
                                {currencies.map((cur) => (
                                    <div key={cur.symbol} className="grid grid-cols-4 px-6 py-4 border-t border-gray-50 hover:bg-gray-50/50 transition-colors items-center">
                                        <div className="flex items-center gap-3">
                                            <span className="text-xl">{cur.flag}</span>
                                            <div>
                                                <p className="font-bold text-primary text-sm">{cur.name}</p>
                                                <p className="text-xs text-gray-400">{cur.symbol}</p>
                                            </div>
                                        </div>
                                        <p className="text-right font-bold text-primary">₺{formatPrice(cur.price)}</p>
                                        <p className="text-right text-gray-400 text-xs hidden md:block">1 {cur.symbol.split('/')[0]}</p>
                                        <div className="text-right">
                                            <a href="/net-maas-hesaplama" className="text-xs text-accent font-medium hover:underline">Hesapla →</a>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* Crypto Tab */}
                        {activeTab === 'crypto' && (
                            <div className="bg-white rounded-2xl shadow-soft border border-gray-100 overflow-hidden">
                                <div className="grid grid-cols-5 px-6 py-3 bg-gray-50 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                                    <span className="col-span-2">Kripto Para</span>
                                    <span className="text-right">Fiyat</span>
                                    <span className="text-right">24s Değişim</span>
                                    <span className="text-right hidden md:block">Piyasa Değeri</span>
                                </div>
                                {cryptos.map((crypto, index) => (
                                    <div key={crypto.id} className="grid grid-cols-5 px-6 py-4 border-t border-gray-50 hover:bg-gray-50/50 transition-colors items-center">
                                        <div className="col-span-2 flex items-center gap-3">
                                            <span className="text-xs text-gray-300 font-mono w-5">{index + 1}</span>
                                            <img src={crypto.image} alt={crypto.name} className="w-8 h-8 rounded-full" />
                                            <div>
                                                <p className="font-bold text-primary text-sm">{crypto.name}</p>
                                                <p className="text-xs text-gray-400">{crypto.symbol}</p>
                                            </div>
                                        </div>
                                        <p className="text-right font-bold text-primary text-sm">₺{formatPrice(crypto.price)}</p>
                                        <p className={`text-right font-semibold text-sm ${crypto.change24h >= 0 ? 'text-emerald-500' : 'text-red-500'}`}>
                                            {crypto.change24h >= 0 ? '+' : ''}{crypto.change24h.toFixed(2)}%
                                        </p>
                                        <p className="text-right text-gray-400 text-xs hidden md:block">{formatMarketCap(crypto.marketCap)}</p>
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* Disclaimer */}
                        <div className="mt-8 p-4 bg-gray-50 rounded-xl text-center">
                            <p className="text-xs text-gray-400">
                                Veriler CoinGecko ve ExchangeRate API&apos;larından alınmaktadır. Yatırım tavsiyesi niteliğinde değildir.
                                Veriler bilgilendirme amaçlıdır ve gecikme içerebilir.
                            </p>
                        </div>
                    </>
                )}
            </main>
            <Footer />
        </div>
    );
}
