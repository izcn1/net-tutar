import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MarketTicker from '@/components/MarketTicker';
import Link from 'next/link';

interface NewsItem {
    title: string;
    link: string;
    pubDate: string;
    source: string;
}

async function fetchNews(): Promise<NewsItem[]> {
    try {
        const res = await fetch(
            'https://news.google.com/rss/search?q=finans+borsa+dolar+alt%C4%B1n+ekonomi&hl=tr&gl=TR&ceid=TR:tr',
            { next: { revalidate: 600 } } // Cache for 10 minutes
        );

        if (!res.ok) return [];

        const xml = await res.text();
        const items: NewsItem[] = [];

        // Parse XML manually (server-side, no DOMParser)
        const itemRegex = /<item>([\s\S]*?)<\/item>/g;
        let match;

        while ((match = itemRegex.exec(xml)) !== null && items.length < 30) {
            const itemXml = match[1];

            const titleMatch = itemXml.match(/<title><!\[CDATA\[(.*?)\]\]>|<title>(.*?)<\/title>/);
            const linkMatch = itemXml.match(/<link>(.*?)<\/link>/);
            const pubDateMatch = itemXml.match(/<pubDate>(.*?)<\/pubDate>/);
            const sourceMatch = itemXml.match(/<source[^>]*>(.*?)<\/source>/);

            const title = titleMatch?.[1] || titleMatch?.[2] || '';
            const link = linkMatch?.[1] || '';
            const pubDate = pubDateMatch?.[1] || '';
            const source = sourceMatch?.[1] || 'Haber';

            if (title && link) {
                items.push({ title: decodeHTMLEntities(title), link, pubDate, source: decodeHTMLEntities(source) });
            }
        }

        return items;
    } catch {
        return [];
    }
}

function decodeHTMLEntities(text: string): string {
    return text
        .replace(/&amp;/g, '&')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&quot;/g, '"')
        .replace(/&#39;/g, "'")
        .replace(/&apos;/g, "'");
}

function formatDate(dateStr: string): string {
    try {
        const date = new Date(dateStr);
        const now = new Date();
        const diffMs = now.getTime() - date.getTime();
        const diffMins = Math.floor(diffMs / 60000);
        const diffHours = Math.floor(diffMs / 3600000);

        if (diffMins < 60) return `${diffMins} dk önce`;
        if (diffHours < 24) return `${diffHours} saat önce`;
        return date.toLocaleDateString('tr-TR', { day: 'numeric', month: 'short' });
    } catch {
        return '';
    }
}

function getSourceColor(source: string): string {
    const colors: Record<string, string> = {
        'BloombergHT': 'bg-purple-100 text-purple-700',
        'Dünya Gazetesi': 'bg-blue-100 text-blue-700',
        'Hürriyet': 'bg-red-100 text-red-700',
        'NTV': 'bg-orange-100 text-orange-700',
        'CNN TÜRK': 'bg-rose-100 text-rose-700',
        'Sözcü': 'bg-amber-100 text-amber-700',
        'Ekonomist': 'bg-emerald-100 text-emerald-700',
    };
    return colors[source] || 'bg-gray-100 text-gray-700';
}

export const metadata = {
    title: 'Finans Haberleri - Güncel Ekonomi ve Borsa Haberleri',
    description: 'En güncel finans haberleri, borsa gelişmeleri, dolar ve altın analizi. Türkiye ve dünya ekonomisinden son dakika haberleri.',
    keywords: ['finans haberleri', 'ekonomi haberleri', 'borsa haberleri', 'son dakika ekonomi', 'dolar haberleri'],
    alternates: { canonical: '/finans-haberleri' },
};

export default async function FinansHaberleriPage() {
    const news = await fetchNews();

    return (
        <div className="min-h-screen bg-bgColor">
            <MarketTicker />
            <Navbar />
            <main className="max-w-6xl mx-auto px-4 py-12">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-black text-primary mb-4 tracking-tight">
                        Finans Haberleri
                    </h1>
                    <p className="text-gray-600 mb-6">
                        Türkiye ve dünyadan en güncel ekonomi, borsa ve finans haberleri.
                    </p>
                    <div className="flex flex-wrap justify-center gap-3">
                        <Link href="/piyasalar" className="inline-flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-xl text-sm font-medium text-primary hover:border-accent hover:text-accent transition-colors">
                            📈 Canlı Piyasalar
                        </Link>
                        <Link href="/net-maas-hesaplama" className="inline-flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-xl text-sm font-medium text-primary hover:border-accent hover:text-accent transition-colors">
                            💰 Maaş Hesapla
                        </Link>
                    </div>
                </div>

                {news.length === 0 ? (
                    <div className="text-center py-20">
                        <p className="text-4xl mb-4">📰</p>
                        <p className="text-gray-500">Haberler şu an yüklenemiyor. Lütfen daha sonra tekrar deneyin.</p>
                    </div>
                ) : (
                    <>
                        {/* Featured News (first 3) */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                            {news.slice(0, 3).map((item, i) => (
                                <a
                                    key={i}
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group bg-white p-6 rounded-2xl shadow-soft border border-gray-100 hover:shadow-lg hover:border-accent/20 transition-all"
                                >
                                    <div className="flex items-center gap-2 mb-4">
                                        <span className={`text-[10px] font-bold px-2 py-1 rounded-full ${getSourceColor(item.source)}`}>
                                            {item.source}
                                        </span>
                                        <span className="text-[10px] text-gray-400">{formatDate(item.pubDate)}</span>
                                    </div>
                                    <h2 className="font-bold text-primary text-sm leading-relaxed group-hover:text-accent transition-colors line-clamp-3">
                                        {item.title}
                                    </h2>
                                    <div className="mt-4 text-xs text-accent font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                                        Haberi oku →
                                    </div>
                                </a>
                            ))}
                        </div>

                        {/* Rest of News */}
                        <div className="bg-white rounded-2xl shadow-soft border border-gray-100 overflow-hidden">
                            <div className="px-6 py-4 border-b border-gray-100">
                                <h2 className="font-bold text-primary">Son Haberler</h2>
                            </div>
                            {news.slice(3).map((item, i) => (
                                <a
                                    key={i + 3}
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-start gap-4 px-6 py-4 border-b border-gray-50 hover:bg-gray-50/50 transition-colors group"
                                >
                                    <div className="flex-1 min-w-0">
                                        <h3 className="font-semibold text-primary text-sm group-hover:text-accent transition-colors line-clamp-2">
                                            {item.title}
                                        </h3>
                                        <div className="flex items-center gap-3 mt-2">
                                            <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${getSourceColor(item.source)}`}>
                                                {item.source}
                                            </span>
                                            <span className="text-[10px] text-gray-400">{formatDate(item.pubDate)}</span>
                                        </div>
                                    </div>
                                    <span className="text-gray-300 text-xs flex-shrink-0 mt-1 group-hover:text-accent transition-colors">→</span>
                                </a>
                            ))}
                        </div>

                        {/* Info */}
                        <div className="mt-8 p-4 bg-gray-50 rounded-xl text-center">
                            <p className="text-xs text-gray-400">
                                Haberler Google News&apos;tan otomatik olarak derlenmektedir. Her 10 dakikada güncellenir.
                                net-tutar haber içeriklerinden sorumlu değildir.
                            </p>
                        </div>
                    </>
                )}
            </main>
            <Footer />
        </div>
    );
}
