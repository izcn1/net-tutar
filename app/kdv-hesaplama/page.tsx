import KdvCalculator from './KdvCalculator';

export const metadata = {
    title: 'KDV Hesaplama 2026 | Dahil ve Hariç Hesaplama | net-tutar.',
    description: 'En güncel %1, %10 ve %20 oranları ile KDV dahil ve hariç hesaplamalarınızı yapın.',
}

export default function KdvPage() {
    return <KdvCalculator />;
}
