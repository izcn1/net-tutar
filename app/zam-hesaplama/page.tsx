import ZamCalculator from './ZamCalculator';

export const metadata = {
    title: 'Zam Oranı Hesaplama | Maaş Artış Analizi | net-tutar.',
    description: 'Maaşınızdaki artışı yüzdesel ve tutarsal olarak saniyeler içinde hesaplayın.',
}

export default function ZamPage() {
    return <ZamCalculator />;
}
