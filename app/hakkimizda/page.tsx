import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
    title: 'Hakkımızda',
    description: 'net-tutar hakkında bilgi edinin. Misyonumuz, vizyonumuz ve iletişim bilgilerimiz.',
    alternates: { canonical: '/hakkimizda' },
};

export default function Hakkimizda() {
    return (
        <div className="min-h-screen bg-bgColor">
            <Navbar />
            <main className="max-w-4xl mx-auto px-4 py-12">
                <div className="bg-white p-8 md:p-12 rounded-2xl shadow-soft border border-gray-100">
                    <h1 className="text-4xl font-black text-primary mb-8 tracking-tight">Hakkımızda</h1>

                    <div className="prose prose-slate max-w-none space-y-8 text-gray-600 leading-relaxed">
                        <section>
                            <h2 className="text-2xl font-bold text-primary">Biz Kimiz?</h2>
                            <p>
                                net-tutar, Türkiye&apos;deki çalışanların, işverenlerin ve bireylerin finansal hesaplamalarını 
                                kolaylaştırmak amacıyla kurulmuş bağımsız bir web platformudur. 
                                Karmaşık vergi formüllerini, SGK kesintilerini ve emeklilik kurallarını herkesin anlayabileceği 
                                basit araçlara dönüştürüyoruz.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-primary">Misyonumuz</h2>
                            <p>
                                Finansal okuryazarlık herkesin hakkıdır. net-tutar olarak misyonumuz, 
                                Türkiye&apos;deki her bireyin maaş, vergi, emeklilik ve kredi hesaplamalarını 
                                doğru, hızlı ve ücretsiz bir şekilde yapabilmesini sağlamaktır.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-primary">Neden net-tutar?</h2>
                            <ul className="list-disc pl-5 space-y-3">
                                <li>
                                    <strong>Güvenilir hesaplamalar:</strong> Tüm formüllerimiz Türkiye Cumhuriyeti yasaları ve 
                                    güncel SGK mevzuatına uygun olarak hazırlanmıştır.
                                </li>
                                <li>
                                    <strong>Gizlilik öncelikli:</strong> Hesaplama verileriniz yalnızca tarayıcınızda işlenir. 
                                    Sunucularımıza hiçbir veri gönderilmez ve kaydedilmez.
                                </li>
                                <li>
                                    <strong>Her zaman güncel:</strong> Vergi dilimleri, SGK oranları ve yasal tavan fiyatları 
                                    düzenli olarak güncellenmektedir.
                                </li>
                                <li>
                                    <strong>Tamamen ücretsiz:</strong> Tüm hesaplama araçlarımız herhangi bir kayıt veya 
                                    ücret gerektirmeden kullanılabilir.
                                </li>
                                <li>
                                    <strong>Kolay kullanım:</strong> Modern ve sade arayüzümüz sayesinde herkes kolayca 
                                    hesaplama yapabilir.
                                </li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-primary">Hesaplama Araçlarımız</h2>
                            <p>Platformumuzda şu anda aşağıdaki hesaplama araçları bulunmaktadır:</p>
                            <ul className="list-disc pl-5 space-y-2">
                                <li><strong>Net Maaş Hesaplama:</strong> Brüt maaştan net maaşa dönüşüm</li>
                                <li><strong>Emeklilik Hesaplama:</strong> Ne zaman emekli olacağınızı öğrenin</li>
                                <li><strong>KDV Hesaplama:</strong> KDV dahil veya hariç tutar hesaplama</li>
                                <li><strong>Asgari Ücret Hesaplama:</strong> Güncel asgari ücret ve işveren maliyeti</li>
                                <li><strong>Kredi Faiz Hesaplama:</strong> Aylık taksit ve toplam geri ödeme</li>
                                <li><strong>Vergi Dilimi Hesaplama:</strong> Gelir vergisi dilimi sorgulama</li>
                                <li><strong>Zam Oranı Hesaplama:</strong> Maaş artış yüzdesini bulma</li>
                                <li><strong>Kıdem Tazminatı Hesaplama:</strong> Tazminat tutarınızı hesaplama</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-primary">Yasal Uyarı</h2>
                            <p>
                                net-tutar&apos;da sunulan hesaplamalar yalnızca bilgilendirme amaçlıdır ve profesyonel 
                                mali danışmanlık yerine geçmez. Önemli finansal kararlarınız için mutlaka bir 
                                mali müşavire veya yetkili uzmana danışmanız önerilir.
                            </p>
                        </section>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
