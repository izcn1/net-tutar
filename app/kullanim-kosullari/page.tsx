import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
    title: 'Kullanım Koşulları',
    description: 'net-tutar kullanım koşulları. Siteyi kullanmadan önce lütfen okuyunuz.',
    alternates: { canonical: '/kullanim-kosullari' },
};

export default function KullanimKosullari() {
    return (
        <div className="min-h-screen bg-bgColor">
            <Navbar />
            <main className="max-w-4xl mx-auto px-4 py-12">
                <div className="bg-white p-8 md:p-12 rounded-2xl shadow-soft border border-gray-100">
                    <h1 className="text-4xl font-black text-primary mb-8 tracking-tight">Kullanım Koşulları</h1>
                    <p className="text-sm text-gray-400 mb-8">Son güncelleme: 23 Mart 2026</p>

                    <div className="prose prose-slate max-w-none space-y-8 text-gray-600 leading-relaxed">
                        <section>
                            <h2 className="text-2xl font-bold text-primary">1. Kabul</h2>
                            <p>
                                net-tutar.vercel.app (&quot;Site&quot;) web sitesini kullanarak, bu Kullanım Koşulları&apos;nı okuduğunuzu, 
                                anladığınızı ve kabul ettiğinizi beyan etmiş olursunuz. Bu koşulları kabul etmiyorsanız 
                                siteyi kullanmayı bırakmanız gerekmektedir.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-primary">2. Hizmet Tanımı</h2>
                            <p>
                                net-tutar, kullanıcılara finansal hesaplama araçları sunan ücretsiz bir web platformudur. 
                                Sunulan araçlar arasında net-brüt maaş hesaplama, emeklilik hesaplama, kredi faiz hesaplama, 
                                KDV hesaplama, vergi dilimi hesaplama, zam oranı hesaplama, asgari ücret hesaplama ve 
                                kıdem tazminatı hesaplama bulunmaktadır.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-primary">3. Sorumluluk Reddi</h2>
                            <p>Sitemiz aracılığıyla sağlanan hesaplamalar <strong>yalnızca bilgilendirme amaçlıdır</strong> ve aşağıdaki hususlar geçerlidir:</p>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>Hesaplama sonuçları kesin mali veya hukuki danışmanlık yerine geçmez.</li>
                                <li>Sonuçlar yaklaşık değerler olup, resmi bordro veya kurum hesaplamalarından farklılık gösterebilir.</li>
                                <li>Yasal mevzuat değişiklikleri nedeniyle hesaplama parametreleri güncelliğini yitirebilir.</li>
                                <li>Finansal kararlarınız için mutlaka bir mali müşavir veya yetkili uzmana danışmanız önerilir.</li>
                                <li>net-tutar, hesaplama sonuçlarına dayanılarak alınan kararlardan doğabilecek zararlardan sorumlu tutulamaz.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-primary">4. Fikri Mülkiyet Hakları</h2>
                            <p>
                                Site üzerindeki tüm içerik, tasarım, logo, metin, grafik ve yazılım kodları net-tutar&apos;a aittir 
                                veya lisans altında kullanılmaktadır. İzinsiz kopyalama, çoğaltma, dağıtma veya ticari amaçla kullanma yasaktır.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-primary">5. Kullanıcı Yükümlülükleri</h2>
                            <p>Siteyi kullanırken aşağıdaki kurallara uymayı kabul edersiniz:</p>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>Siteyi yalnızca yasal amaçlarla kullanmak</li>
                                <li>Sitenin işleyişini bozmaya çalışmamak</li>
                                <li>Otomatik veri toplama araçları (bot, scraper vb.) kullanmamak</li>
                                <li>Zararlı yazılım veya kod yüklememeye çalışmak</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-primary">6. Reklamlar</h2>
                            <p>
                                Sitemizde Google AdSense aracılığıyla reklamlar gösterilmektedir. Bu reklamlar, üçüncü taraf reklam 
                                sağlayıcıları tarafından sunulur ve çerezler kullanılarak kişiselleştirilebilir. 
                                Reklam içeriğinden net-tutar sorumlu değildir.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-primary">7. Bağlantı Verilen Siteler</h2>
                            <p>
                                Sitemizde üçüncü taraf web sitelerine bağlantılar bulunabilir. Bu sitelerin içeriğinden veya 
                                gizlilik uygulamalarından net-tutar sorumlu değildir. Bu bağlantıları kullanmak tamamen sizin sorumluluğunuzdadır.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-primary">8. Değişiklikler</h2>
                            <p>
                                net-tutar, bu Kullanım Koşulları&apos;nı herhangi bir zamanda önceden bildirimde bulunmaksızın 
                                değiştirme hakkını saklı tutar. Güncellenmiş koşullar sitede yayımlandığı andan itibaren geçerli olur.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-primary">9. Uygulanacak Hukuk</h2>
                            <p>
                                Bu Kullanım Koşulları, Türkiye Cumhuriyeti yasalarına tabidir. 
                                Herhangi bir uyuşmazlık durumunda İstanbul mahkemeleri ve icra daireleri yetkilidir.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-primary">10. İletişim</h2>
                            <p>
                                Kullanım Koşulları ile ilgili sorularınız için 
                                <a href="/iletisim" className="text-accent hover:underline"> iletişim sayfamız</a> üzerinden bize ulaşabilirsiniz.
                            </p>
                        </section>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
