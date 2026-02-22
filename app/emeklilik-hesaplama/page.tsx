import EmeklilikCalculator from './EmeklilikCalculator';

export const metadata = {
    title: 'Emeklilik Hesaplama | Ne Zaman Emekli Olurum? | net-tutar.',
    description: 'SGK giriş tarihi ve prim gününe göre emeklilik yaşı ve yılınızı hesaplayın.',
}

export default function EmeklilikPage() {
    return <EmeklilikCalculator />;
}
