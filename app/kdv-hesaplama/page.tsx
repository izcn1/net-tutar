import KdvCalculator from './KdvCalculator';

export const metadata = {
    title: 'KDV Hesaplama 2026 - KDV Dahil ve Hariç Hesapla',
    description: '%1, %10 ve %20 oranları ile hızlı KDV hesaplama. KDV dahil fiyattan matrah bulma veya KDV hariç fiyata KDV ekleme.',
    alternates: {
        canonical: '/kdv-hesaplama',
    },
}

export default function KdvPage() {
    return <KdvCalculator />;
}
