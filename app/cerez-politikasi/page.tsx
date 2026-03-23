import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
    title: 'Çerez Politikası',
    description: 'net-tutar çerez (cookie) politikası. Çerezlerin nasıl kullanıldığını öğrenin.',
    alternates: { canonical: '/cerez-politikasi' },
};

export default function CerezPolitikasi() {
    return (
        <div className="min-h-screen bg-bgColor">
            <Navbar />
            <main className="max-w-4xl mx-auto px-4 py-12">
                <div className="bg-white p-8 md:p-12 rounded-2xl shadow-soft border border-gray-100">
                    <h1 className="text-4xl font-black text-primary mb-8 tracking-tight">Çerez Politikası</h1>
                    <p className="text-sm text-gray-400 mb-8">Son güncelleme: 23 Mart 2026</p>

                    <div className="prose prose-slate max-w-none space-y-8 text-gray-600 leading-relaxed">
                        <section>
                            <h2 className="text-2xl font-bold text-primary">1. Çerez Nedir?</h2>
                            <p>
                                Çerezler (cookies), web sitelerinin tarayıcınıza yerleştirdiği küçük metin dosyalarıdır. 
                                Bu dosyalar, web sitesinin sizi hatırlamasını, tercihlerinizi saklamasını ve 
                                size daha iyi bir kullanıcı deneyimi sunmasını sağlar.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-primary">2. Kullandığımız Çerez Türleri</h2>
                            
                            <h3 className="text-xl font-semibold text-primary mt-6">a) Zorunlu Çerezler</h3>
                            <p>
                                Sitenin temel işlevlerinin çalışması için gerekli olan çerezlerdir. 
                                Bu çerezler olmadan site düzgün çalışamaz. Bu çerezler devre dışı bırakılamaz.
                            </p>

                            <h3 className="text-xl font-semibold text-primary mt-6">b) Performans ve Analitik Çerezleri</h3>
                            <p>
                                Bu çerezler, ziyaretçilerin siteyi nasıl kullandığını anlamamıza yardımcı olur. 
                                Google Analytics gibi araçlar bu tür çerezleri kullanır. Toplanan veriler anonimdir 
                                ve siteyi geliştirmek amacıyla kullanılır.
                            </p>

                            <h3 className="text-xl font-semibold text-primary mt-6">c) Reklam Çerezleri</h3>
                            <p>
                                Google AdSense tarafından kullanılan bu çerezler, size ilgi alanlarınıza uygun reklamlar 
                                göstermek için kullanılır. Bu çerezler şunları yapabilir:
                            </p>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>Ziyaret ettiğiniz web sitelerini takip eder</li>
                                <li>İlgi alanlarınıza göre profil oluşturur</li>
                                <li>Size kişiselleştirilmiş reklamlar sunar</li>
                                <li>Reklam performansını ölçer</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-primary">3. Üçüncü Taraf Çerezleri</h2>
                            <p>Sitemizde aşağıdaki üçüncü tarafların çerezleri bulunabilir:</p>
                            <div className="overflow-x-auto mt-4">
                                <table className="min-w-full border-collapse border border-gray-200 text-sm">
                                    <thead>
                                        <tr className="bg-gray-50">
                                            <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-primary">Sağlayıcı</th>
                                            <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-primary">Amaç</th>
                                            <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-primary">Politika</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="border border-gray-200 px-4 py-2">Google AdSense</td>
                                            <td className="border border-gray-200 px-4 py-2">Reklam gösterimi</td>
                                            <td className="border border-gray-200 px-4 py-2"><a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Gizlilik Politikası</a></td>
                                        </tr>
                                        <tr>
                                            <td className="border border-gray-200 px-4 py-2">Google Analytics</td>
                                            <td className="border border-gray-200 px-4 py-2">Trafik analizi</td>
                                            <td className="border border-gray-200 px-4 py-2"><a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Gizlilik Politikası</a></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-primary">4. Çerezleri Yönetme</h2>
                            <p>Çerezleri kontrol etmek için aşağıdaki yolları kullanabilirsiniz:</p>
                            <ul className="list-disc pl-5 space-y-2">
                                <li><strong>Tarayıcı ayarları:</strong> Tarayıcınızın ayarlarından çerezleri görüntüleyebilir, silebilir veya engelleyebilirsiniz.</li>
                                <li><strong>Google reklam ayarları:</strong> <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Google Reklam Ayarları</a> üzerinden kişiselleştirilmiş reklamları yönetebilirsiniz.</li>
                                <li><strong>Çerez onay paneli:</strong> Sitemize ilk girişinizde gösterilen çerez panelinden tercihlerinizi belirleyebilirsiniz.</li>
                            </ul>
                            <p className="mt-4 text-sm italic">
                                Not: Çerezleri devre dışı bırakmanız durumunda sitenin bazı özellikleri düzgün çalışmayabilir.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-primary">5. İletişim</h2>
                            <p>
                                Çerez Politikası hakkında sorularınız için 
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
