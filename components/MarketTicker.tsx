'use client';

import { useState, useEffect } from 'react';

interface MarketData {
    name: string;
    symbol: string;
    price: number;
    change24h: number | null;
    type: 'currency' | 'crypto' | 'commodity';
}

const MarketTicker = () => {
    const [markets, setMarkets] = useState<MarketData[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [cryptoRes, fxRes] = await Promise.allSettled([
                    fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,binancecoin,solana,ripple,dogecoin,pax-gold&vs_currencies=try&include_24hr_change=true'),
                    fetch('https://open.er-api.com/v6/latest/USD'),
                ]);

                const items: MarketData[] = [];

                // Exchange rate data
                if (fxRes.status === 'fulfilled' && fxRes.value.ok) {
                    const fxData = await fxRes.value.json();
                    const tryRate = fxData.rates?.TRY || 0;
                    const eurRate = fxData.rates?.EUR || 0;
                    const gbpRate = fxData.rates?.GBP || 0;

                    if (tryRate > 0) {
                        items.push({ name: 'Dolar', symbol: 'USD/TRY', price: tryRate, change24h: null, type: 'currency' });
                        if (eurRate > 0) items.push({ name: 'Euro', symbol: 'EUR/TRY', price: tryRate / eurRate, change24h: null, type: 'currency' });
                        if (gbpRate > 0) items.push({ name: 'Sterlin', symbol: 'GBP/TRY', price: tryRate / gbpRate, change24h: null, type: 'currency' });
                    }
                }

                // Crypto data
                if (cryptoRes.status === 'fulfilled' && cryptoRes.value.ok) {
                    const cryptoData = await cryptoRes.value.json();

                    // Gold (from PAX Gold - tracks 1 oz gold)
                    if (cryptoData['pax-gold']) {
                        items.splice(1, 0, {
                            name: 'Altın (Ons)',
                            symbol: 'XAU/TRY',
                            price: cryptoData['pax-gold'].try || 0,
                            change24h: cryptoData['pax-gold'].try_24h_change || null,
                            type: 'commodity',
                        });
                    }

                    const cryptoMap: Record<string, { name: string; symbol: string }> = {
                        bitcoin: { name: 'Bitcoin', symbol: 'BTC' },
                        ethereum: { name: 'Ethereum', symbol: 'ETH' },
                        binancecoin: { name: 'BNB', symbol: 'BNB' },
                        solana: { name: 'Solana', symbol: 'SOL' },
                        ripple: { name: 'XRP', symbol: 'XRP' },
                        dogecoin: { name: 'Dogecoin', symbol: 'DOGE' },
                    };

                    for (const [id, info] of Object.entries(cryptoMap)) {
                        if (cryptoData[id]) {
                            items.push({
                                name: info.name,
                                symbol: info.symbol,
                                price: cryptoData[id].try || 0,
                                change24h: cryptoData[id].try_24h_change || null,
                                type: 'crypto',
                            });
                        }
                    }
                }

                if (items.length > 0) setMarkets(items);
            } catch {
                // Silently fail - ticker will just not show
            } finally {
                setLoading(false);
            }
        };

        fetchData();
        const interval = setInterval(fetchData, 60000); // Refresh every 60s
        return () => clearInterval(interval);
    }, []);

    if (loading || markets.length === 0) return null;

    const formatPrice = (price: number) => {
        if (price >= 1000) return price.toLocaleString('tr-TR', { maximumFractionDigits: 0 });
        if (price >= 1) return price.toLocaleString('tr-TR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        return price.toLocaleString('tr-TR', { minimumFractionDigits: 4, maximumFractionDigits: 4 });
    };

    // Duplicate items for seamless scroll
    const displayItems = [...markets, ...markets];

    return (
        <div className="bg-primary text-white overflow-hidden">
            <div className="flex animate-scroll">
                {displayItems.map((item, i) => (
                    <a
                        key={`${item.symbol}-${i}`}
                        href="/piyasalar"
                        className="flex items-center gap-2 px-5 py-2 whitespace-nowrap hover:bg-white/5 transition-colors text-xs flex-shrink-0"
                    >
                        <span className="font-semibold text-gray-300">{item.symbol}</span>
                        <span className="font-bold">₺{formatPrice(item.price)}</span>
                        {item.change24h !== null && (
                            <span className={`font-medium ${item.change24h >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
                                {item.change24h >= 0 ? '▲' : '▼'} {Math.abs(item.change24h).toFixed(2)}%
                            </span>
                        )}
                    </a>
                ))}
            </div>
        </div>
    );
};

export default MarketTicker;
