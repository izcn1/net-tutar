import EmeklilikCalculator from './EmeklilikCalculator';

export const metadata = {
    title: 'Emeklilik Hesaplama 2026 - Ne Zaman Emekli Olurum?',
    description: 'SGK giriş tarihi ve prim gün sayınıza göre emeklilik yaşınızı ve tarihinizi hesaplayın. 2026 EYT uyumlu hesaplama.',
    alternates: {
        canonical: '/emeklilik-hesaplama',
    },
}

export default function EmeklilikPage() {
    return <EmeklilikCalculator />;
}
