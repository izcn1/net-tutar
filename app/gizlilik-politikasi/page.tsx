import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
    title: 'Gizlilik Politikası',
    description: 'net-tutar gizlilik politikası. Kişisel verilerinizin nasıl korunduğunu öğrenin.',
    alternates: { canonical: '/gizlilik-politikasi' },
};

export default function GizlilikPolitikasi() {
    return (
        <div className="min-h-screen bg-bgColor">
            <Navbar />
            <main className="max-w-4xl mx-auto px-4 py-12">
                <div className="bg-white p-8 md:p-12 rounded-2xl shadow-soft border border-gray-100">
                    <h1 className="text-4xl font-black text-primary mb-8 tracking-tight">Gizlilik Politikası</h1>
                    <p className="text-sm text-gray-400 mb-8">Son güncelleme: 23 Mart 2026</p>

                    <div className="prose prose-slate max-w-none space-y-8 text-gray-600 leading-relaxed">
                        <section>
                            <h2 className="text-2xl font-bold text-primary">1. Genel Bakış</h2>
                            <p>
                                net-tutar.vercel.app (&quot;Site&quot;) olarak, kullanıcılarımızın gizliliğine büyük önem veriyoruz. 
                                Bu Gizlilik Politikası, sitemizi ziyaret ettiğinizde hangi bilgilerin toplandığını, 
                                bu bilgilerin nasıl kullanıldığını ve korunduğunu açıklamaktadır.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-primary">2. Toplanan Bilgiler</h2>
                            <p>Sitemiz aşağıdaki bilgileri toplayabilir:</p>
                            <ul className="list-disc pl-5 space-y-2">
                                <li><strong>Otomatik olarak toplanan bilgiler:</strong> IP adresi, tarayıcı türü, cihaz bilgisi, ziyaret edilen sayfalar ve ziyaret süresi gibi teknik veriler.</li>
                                <li><strong>Çerezler (Cookies):</strong> Sitemizin düzgün çalışması, kullanıcı deneyimini iyileştirmek ve reklam hizmetleri sunmak amacıyla çerezler kullanılmaktadır.</li>
                                <li><strong>Google Analytics:</strong> Ziyaretçi trafiğini ve kullanım istatistiklerini analiz etmek için Google Analytics kullanılabilir.</li>
                                <li><strong>Google AdSense:</strong> Reklam göstermek amacıyla Google AdSense kullanılmaktadır. Google, reklamları kişiselleştirmek için çerez kullanabilir.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-primary">3. Hesaplama Verileri</h2>
                            <p>
                                Sitemizdeki hesaplama araçlarına girdiğiniz veriler (maaş tutarları, tarih bilgileri vb.) 
                                <strong> yalnızca tarayıcınızda işlenir ve hiçbir şekilde sunucularımıza gönderilmez.</strong> 
                                Bu veriler kaydedilmez, saklanmaz ve üçüncü taraflarla paylaşılmaz.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-primary">4. Çerezler ve Reklam Teknolojileri</h2>
                            <p>Sitemizde aşağıdaki amaçlarla çerezler kullanılmaktadır:</p>
                            <ul className="list-disc pl-5 space-y-2">
                                <li><strong>Zorunlu çerezler:</strong> Sitenin temel işlevlerinin çalışması için gereklidir.</li>
                                <li><strong>Analitik çerezler:</strong> Ziyaretçi davranışlarını analiz etmek için kullanılır.</li>
                                <li><strong>Reklam çerezleri:</strong> Google AdSense aracılığıyla kişiselleştirilmiş reklam sunmak için kullanılır.</li>
                            </ul>
                            <p className="mt-4">
                                Google&apos;ın reklam çerezlerini nasıl kullandığı hakkında daha fazla bilgi için 
                                <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline"> Google Reklam Politikaları</a> sayfasını ziyaret edebilirsiniz.
                            </p>
                            <p>
                                Kişiselleştirilmiş reklamları devre dışı bırakmak için 
                                <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline"> Google Reklam Ayarları</a> sayfasını kullanabilirsiniz.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-primary">5. Üçüncü Taraf Hizmetler</h2>
                            <p>Sitemiz aşağıdaki üçüncü taraf hizmetleri kullanabilir:</p>
                            <ul className="list-disc pl-5 space-y-2">
                                <li><strong>Google AdSense:</strong> Reklam gösterimi için.</li>
                                <li><strong>Google Analytics:</strong> Web trafiği analizi için.</li>
                                <li><strong>Vercel:</strong> Web hosting hizmeti için.</li>
                            </ul>
                            <p className="mt-4">Bu hizmetlerin kendi gizlilik politikaları bulunmaktadır ve verileriniz onların politikalarına tabidir.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-primary">6. KVKK Kapsamındaki Haklarınız</h2>
                            <p>6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında aşağıdaki haklara sahipsiniz:</p>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
                                <li>İşlenmişse buna ilişkin bilgi talep etme</li>
                                <li>İşlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme</li>
                                <li>Eksik veya yanlış işlenmişse düzeltilmesini isteme</li>
                                <li>Kanun&apos;un 7. maddesinde öngörülen şartlar çerçevesinde silinmesini isteme</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-primary">7. İletişim</h2>
                            <p>
                                Bu Gizlilik Politikası hakkında sorularınız için bizimle 
                                <a href="/iletisim" className="text-accent hover:underline"> iletişim sayfamız</a> üzerinden iletişime geçebilirsiniz.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-primary">8. Değişiklikler</h2>
                            <p>
                                Bu Gizlilik Politikası zaman zaman güncellenebilir. Önemli değişiklikler yapıldığında sitemiz üzerinden bildirilecektir. 
                                Sitemizi kullanmaya devam etmeniz, güncellenmiş politikayı kabul ettiğiniz anlamına gelir.
                            </p>
                        </section>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
