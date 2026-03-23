import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
    title: 'İletişim',
    description: 'net-tutar ile iletişime geçin. Sorularınız, önerileriniz ve geri bildirimleriniz için bize ulaşın.',
    alternates: { canonical: '/iletisim' },
};

export default function Iletisim() {
    return (
        <div className="min-h-screen bg-bgColor">
            <Navbar />
            <main className="max-w-4xl mx-auto px-4 py-12">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-black text-primary mb-4 tracking-tight">İletişim</h1>
                    <p className="text-gray-600">Sorularınız, önerileriniz veya geri bildirimleriniz için bize ulaşabilirsiniz.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Contact Info */}
                    <div className="bg-white p-8 rounded-2xl shadow-soft border border-gray-100">
                        <h2 className="text-xl font-bold text-primary mb-6">Bize Ulaşın</h2>
                        <div className="space-y-6">
                            <div className="flex items-start space-x-4">
                                <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-accent">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-primary">E-posta</h3>
                                    <p className="text-gray-600 text-sm mt-1">iletisim@net-tutar.com</p>
                                    <p className="text-gray-400 text-xs mt-1">Genellikle 24 saat içinde yanıt veriyoruz.</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-accent">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-primary">Web Sitesi</h3>
                                    <p className="text-gray-600 text-sm mt-1">net-tutar.vercel.app</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-accent">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-primary">Konum</h3>
                                    <p className="text-gray-600 text-sm mt-1">Türkiye</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* FAQ / Info */}
                    <div className="bg-white p-8 rounded-2xl shadow-soft border border-gray-100">
                        <h2 className="text-xl font-bold text-primary mb-6">Sık Sorulan Sorular</h2>
                        <div className="space-y-6">
                            <div>
                                <h3 className="font-semibold text-primary text-sm">Hesaplama sonuçları resmi midir?</h3>
                                <p className="text-gray-600 text-sm mt-1">
                                    Hayır, hesaplamalarımız yalnızca bilgilendirme amaçlıdır. Resmi işlemler için ilgili kurumlara başvurmanızı öneririz.
                                </p>
                            </div>
                            <div>
                                <h3 className="font-semibold text-primary text-sm">Verilerim kaydediliyor mu?</h3>
                                <p className="text-gray-600 text-sm mt-1">
                                    Hayır, hesaplama araçlarına girdiğiniz tüm veriler yalnızca tarayıcınızda işlenir ve hiçbir sunucuya gönderilmez.
                                </p>
                            </div>
                            <div>
                                <h3 className="font-semibold text-primary text-sm">Hesaplama hatası buldum, ne yapmalıyım?</h3>
                                <p className="text-gray-600 text-sm mt-1">
                                    Lütfen yukarıdaki e-posta adresi üzerinden bize bildirin. En kısa sürede düzelteceğiz.
                                </p>
                            </div>
                            <div>
                                <h3 className="font-semibold text-primary text-sm">Reklam işbirliği yapabilir miyiz?</h3>
                                <p className="text-gray-600 text-sm mt-1">
                                    İş birliği teklifleriniz için e-posta ile iletişime geçebilirsiniz.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
