import ZamCalculator from './ZamCalculator';

export const metadata = {
    title: 'Maaş Zam Oranı Hesaplama - Zamlı Maaş Hesapla',
    description: 'Eski ve yeni maaşınız arasındaki farkı, yüzde ve tutar olarak saniyeler içinde hesaplayın.',
    alternates: {
        canonical: '/zam-hesaplama',
    },
}

export default function ZamPage() {
    return <ZamCalculator />;
}
