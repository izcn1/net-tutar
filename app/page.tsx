import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CalculatorCard from '@/components/CalculatorCard';

const icons = {
  maas: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c1.186.232 2.257-.611 2.257-1.815V4.774c0-1.077-.822-1.928-1.89-2.022a48.31 48.31 0 0 0-11.758 0c-1.068.094-1.89.945-1.89 2.022V15c0 .736.326 1.417.892 1.868M2.25 18.75V15m15.797 2.101c1.186.232 2.257-.611 2.257-1.815V15" />
    </svg>
  ),
  emeklilik: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
    </svg>
  ),
  kredi: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
    </svg>
  ),
  vergi: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0h.008v.008H19.5V19.5m-1.5 0h.008v.008H18V19.5Z" />
    </svg>
  ),
  kdv: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
  ),
  asgari: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75c.621 0 1.125.504 1.125 1.125v17.25c0 .621-.504 1.125-1.125 1.125H5.625c-.621 0-1.125-.504-1.125-1.125V5.625c0-.621.504-1.125 1.125-1.125Z" />
    </svg>
  )
}

export const metadata = {
  title: "Net Tutar Hesaplama 2026 - Maaş, KDV, Emeklilik",
  description: "Net maaş hesaplama, brüt-net dönüşüm, KDV hesaplama ve emeklilik yaşı hesaplama aracı. En güncel 2026 finansal verileri.",
  keywords: "net maaş hesaplama, brütten nete, emeklilik hesaplama, kdv hesaplama, asgari ücret 2026",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-bgColor">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <section className="text-center mb-20 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-black text-primary mb-6 tracking-tight">
            Finansal Kararlarınızı <br />
            <span className="text-accent underline decoration-accent/20">Veriye Dayandırın.</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            Güncel ekonomik veriler ve yasal mevzuatlar ışığında hazırlanan araçlarımızla,
            geleceğinizi şansa bırakmayın. Hızlı, güvenilir ve tamamen ücretsiz.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-white px-6 py-3 rounded-2xl shadow-soft border border-gray-100 flex items-center space-x-2">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
              <span className="text-sm font-semibold text-primary">2026 Güncel Mevzuat</span>
            </div>
            <div className="bg-white px-6 py-3 rounded-2xl shadow-soft border border-gray-100 flex items-center space-x-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
              <span className="text-sm font-semibold text-primary">SGK Uyumlu</span>
            </div>
          </div>
        </section>

        {/* Calculators Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <CalculatorCard
            title="Net - Brüt Maaş"
            description="Maaşınızdaki tüm kesintileri, gelir vergisi dilimlerini ve elinize geçecek net tutarı hesaplayın."
            icon={icons.maas}
            href="/net-maas-hesaplama"
          />
          <CalculatorCard
            title="Emeklilik Hesaplama"
            description="SGK giriş tarihinize ve prim gününüze göre ne zaman emekli olabileceğinizi hemen öğrenin."
            icon={icons.emeklilik}
            href="/emeklilik-hesaplama"
          />
          <CalculatorCard
            title="KDV Hesaplama"
            description="Dahil veya hariç seçenekleriyle KDV tutarlarını hızlıca hesaplayın."
            icon={icons.kdv}
            href="/kdv-hesaplama"
          />
          <CalculatorCard
            title="Asgari Ücret 2026"
            description="2026 yılı asgari ücret net tutarı ve işveren maliyeti detaylarını inceleyin."
            icon={icons.asgari}
            href="/asgari-ucret-hesaplama"
          />
          <CalculatorCard
            title="Kredi Faiz Hesaplama"
            description="Konut, ihtiyaç veya taşıt kredisi faiz oranlarını ve ödeme planınızı detaylıca inceleyin."
            icon={icons.kredi}
            href="/kredi-hesaplama"
          />
          <CalculatorCard
            title="Vergi Dilimi"
            description="Yıl içindeki kümülatif gelirinize göre hangi vergi dilimine ne zaman gireceğinizi görün."
            icon={icons.vergi}
            href="/vergi-dilimi"
          />
        </div>

        {/* SEO Content Section */}
        <section className="mt-32 prose prose-slate max-w-none bg-white p-8 md:p-16 rounded-[3rem] shadow-soft border border-gray-100">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-black text-primary mb-8">Finansal Rehber: Maaş ve Emeklilik Hakkında Merak Edilenler</h2>

            <div className="space-y-12 text-gray-600 leading-relaxed">
              <div>
                <h3 className="text-2xl font-bold text-primary mb-4">Net Maaş Nedir?</h3>
                <p>
                  Net maaş, bir çalışanın tüm yasal kesintiler (SGK işçi payı, işsizlik sigortası, gelir vergisi ve damga vergisi) yapıldıktan sonra fiilen eline geçen tutardır.
                  İş sözleşmelerinde genellikle brüt maaş üzerinden anlaşma yapılır ancak çalışanın bütçe planlaması için asıl kritik olan <strong>net maaş hesaplama</strong> işlemidir.
                  Net maaşınız, yıl içinde girdiğiniz gelir vergisi dilimlerine göre değişkenlik gösterebilir.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-primary mb-4">Brüt Maaş Nasıl Hesaplanır?</h3>
                <p>
                  Brüt maaş, işverenin çalışan için ödediği toplam rakamın vergiler düşülmeden önceki halidir. <strong>Brütten nete hesaplama</strong> yapılırken sırasıyla şu adımlar izlenir:
                </p>
                <ul className="list-disc pl-5 space-y-2 mt-4">
                  <li>Brüt tutardan %14 SGK İşçi Payı düşülür.</li>
                  <li>%1 İşsizlik Sigortası işçi payı düşülür.</li>
                  <li>Kalan tutardan gelir vergisi matrahı oluşturulur ve ilgili vergi dilimi oranında kesinti yapılır.</li>
                  <li>Binde 7.59 oranında damga vergisi kesilir.</li>
                  <li>Kalan tutar sizin net maaşınızdır.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-primary mb-4">2026 Emeklilik Şartları ve EYT Sonrası Durum</h3>
                <p>
                  Türkiye'de emeklilik sistemi 1999 ve 2008 yıllarında yapılan köklü değişikliklerle kademeli hale getirilmiştir. <strong>2026 emeklilik şartları</strong>, sigorta başlangıç tarihinize göre belirlenir:
                </p>
                <p className="mt-4">
                  8 Eylül 1999 öncesi girişliler için yaş şartı kaldırılmış (EYT), ancak prim gün sayısı ve sigortalılık süresi şartları devam etmektedir.
                  1999-2008 arası girişliler için kadınlarda 58, erkeklerde 60 yaş şartı uygulanırken; 2008 sonrası girişliler için bu sınır 65 yaşa kadar kademeli olarak yükselmektedir.
                  Sitemizdeki <strong>emeklilik hesaplama</strong> aracı ile en güncel mevzuata göre durumunuzu sorgulayabilirsiniz.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-primary mb-4">SGK Prim Hesaplama Nasıl Yapılır?</h3>
                <p>
                  SGK primleri, çalışanın brüt kazancı üzerinden hesaplanır. Toplam prim oranı %37.5'tir. Bunun %14+1'lik kısmı çalışandan, %20.5+2'lik kısmı işverenden kesilir.
                  <strong>SGK prim hesaplama</strong> yapılırken tavan ve taban fiyatlar (asgari ücretin 7.5 katı) dikkate alınır.
                  Düzenli ödeme yapan işverenler için %5'lik bir indirim teşviki de uygulanmaktadır.
                </p>
              </div>

              <div className="bg-bgColor p-8 rounded-2xl border border-blue-100">
                <h3 className="text-xl font-bold text-primary mb-4 text-center">Neden net-tutar.com'u Kullanmalısınız?</h3>
                <p className="text-sm text-center italic">
                  Finansal dünyadaki karmaşık formülleri basit ve anlaşılır bir arayüze dönüştürüyoruz.
                  Verileriniz sunucularımızda tutulmaz, tüm işlemler tarayıcınızda gerçekleşir.
                  En güncel 2026 vergi dilimleri ve SGK tavan fiyatları ile her zaman doğru sonuç veririz.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Message Extension */}
        <section className="mt-20 p-12 bg-primary rounded-[3rem] text-center text-white relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-4">Güvenilir ve Şeffaf Hesaplama</h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Hesaplamalarımızda kullanılan tüm formüller Türkiye Cumhuriyeti yasaları ve SGK mevzuatıyla tam uyumludur.
              Verileriniz cihazınızda işlenir, asla sunucularımıza gönderilmez.
            </p>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full -ml-32 -mb-32 blur-3xl"></div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
