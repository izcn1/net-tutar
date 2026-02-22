import KrediCalculator from './KrediCalculator';

export const metadata = {
    title: 'Kredi Faiz Hesaplama - Kredi Ödeme Planı Oluştur',
    description: 'Konut, taşıt ve ihtiyaç kredisi taksitlerini hesaplayın. Aylık ödeme tutarı ve toplam geri ödeme miktarını görün.',
    alternates: {
        canonical: '/kredi-hesaplama',
    },
}

export default function KrediPage() {
    return <KrediCalculator />;
}
