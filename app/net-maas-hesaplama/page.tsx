import MaasCalculator from './MaasCalculator';

export const metadata = {
    title: 'Net - Brüt Maaş Hesaplama | net-tutar.',
    description: '2024 güncel vergi ve SGK verilerine göre net maaşınızı hesaplayın.',
}

export default function MaasPage() {
    return <MaasCalculator />;
}
