import MaasSiralamaCalculator from './MaasSiralamaCalculator';

export const metadata = {
    title: 'Maaşın Türkiye\'de Kaçıncı Sırada? - 2026 Maaş Sıralama',
    description: 'Net maaşını gir, Türkiye\'deki milyonlarca çalışan arasında kaçıncı sırada olduğunu öğren. 2026 güncel maaş istatistikleri.',
    keywords: ['maaş sıralama', 'Türkiye maaş ortalaması', 'maaşım kaçıncı sırada', 'ortalama maaş 2026', 'medyan maaş Türkiye'],
    alternates: {
        canonical: '/maas-siralama',
    },
    openGraph: {
        title: 'Maaşın Türkiye\'de Kaçıncı Sırada?',
        description: 'Net maaşını gir, Türkiye\'deki sıralamanı öğren!',
        url: 'https://net-tutar.vercel.app/maas-siralama',
    },
};

export default function MaasSiralamaPage() {
    return <MaasSiralamaCalculator />;
}
