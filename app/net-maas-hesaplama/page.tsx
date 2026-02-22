import MaasCalculator from './MaasCalculator';

export const metadata = {
    title: 'Net Maaş Hesaplama 2026 - Brütten Nete Maaş Hesapla',
    description: 'En güncel 2026 vergi dilimleri ve SGK kesintilerine göre net maaşınızı hesaplayın. Brütten nete hızlı dönüşüm.',
    alternates: {
        canonical: '/net-maas-hesaplama',
    },
}

export default function MaasPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "WebApplication",
                        "name": "Net Maaş Hesaplama Aracı",
                        "url": "https://net-tutar.vercel.app/net-maas-hesaplama",
                        "description": "2026 yılı güncel vergi dilimleri ile net-brüt maaş hesaplama aracı.",
                        "applicationCategory": "FinancialApplication",
                        "operatingSystem": "All"
                    }),
                }}
            />
            <MaasCalculator />
        </>
    );
}
