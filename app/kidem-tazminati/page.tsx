import KidemCalculator from './KidemCalculator';

export const metadata = {
    title: 'Kıdem Tazminatı Hesaplama | 2024 Güncel | net-tutar.',
    description: 'İşten ayrılma durumunda alacağınız tazminatı güncel tavan fiyatlara göre hesaplayın.',
}

export default function KidemPage() {
    return <KidemCalculator />;
}
