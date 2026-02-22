import KidemCalculator from './KidemCalculator';

export const metadata = {
    title: 'Kıdem Tazminatı Hesaplama 2026 - Tazminat Tavanı Güncel',
    description: 'Çalışma sürenize ve son brüt maaşınıza göre alacağınız kıdem tazminatını güncel tavan fiyatlara göre hesaplayın.',
    alternates: {
        canonical: '/kidem-tazminati',
    },
}

export default function KidemPage() {
    return <KidemCalculator />;
}
