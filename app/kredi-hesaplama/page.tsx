import KrediCalculator from './KrediCalculator';

export const metadata = {
    title: 'Kredi Faiz Hesaplama | Ödeme Planı Oluştur | net-tutar.',
    description: 'Konut, taşıt ve ihtiyaç kredisi taksitlerini ve toplam geri ödemeyi hesaplayın.',
}

export default function KrediPage() {
    return <KrediCalculator />;
}
