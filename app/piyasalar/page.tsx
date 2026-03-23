import PiyasalarClient from './PiyasalarClient';

export const metadata = {
    title: 'Canlı Piyasalar - Döviz, Altın ve Kripto Fiyatları',
    description: 'Anlık dolar, euro, altın ve kripto para fiyatları. Canlı borsa takibi ve piyasa verileri. Bitcoin, Ethereum ve daha fazlası.',
    keywords: ['döviz kuru', 'altın fiyatı', 'dolar kuru', 'euro kuru', 'bitcoin fiyatı', 'kripto para', 'borsa', 'canlı piyasalar'],
    alternates: { canonical: '/piyasalar' },
};

export default function PiyasalarPage() {
    return <PiyasalarClient />;
}
