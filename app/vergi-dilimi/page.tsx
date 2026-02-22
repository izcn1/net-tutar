import VergiCalculator from './VergiCalculator';

export const metadata = {
    title: 'Vergi Dilimi Hesaplama 2026 - Kümülatif Vergi Sorguma',
    description: 'Gelir vergisi diliminizi ve kümülatif matraha göre kalan vergi sınırınızı hesaplayın. 2026 güncel vergi oranları.',
    alternates: {
        canonical: '/vergi-dilimi',
    },
}

export default function VergiPage() {
    return <VergiCalculator />;
}
