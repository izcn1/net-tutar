import AsgariUcretCalculator from './AsgariUcretCalculator';

export const metadata = {
    title: 'Asgari Ücret Hesaplama 2026 - Net ve İşveren Maliyeti',
    description: '2026 yılı tahmini asgari ücret net tutarı, SGK primleri ve işverene toplam maliyetini saniyeler içinde hesaplayın.',
    alternates: {
        canonical: '/asgari-ucret-hesaplama',
    },
}

export default function AsgariUcretPage() {
    return <AsgariUcretCalculator />;
}
