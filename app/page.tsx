import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CalculatorCard from '@/components/CalculatorCard';

// Note: I'll use simple SVG icons since I shouldn't rely on external libraries if not installed.
// Wait, the user said "No external UI libraries" - strictly speaking. 
// I'll use inline SVGs to be safe and performant.

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
  zam: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 0 1 5.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
    </svg>
  ),
  kidem: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
    </svg>
  )
}

export const metadata = {
  title: 'net-tutar | Türkiye\'nin Finansal Hesaplama Platformu',
  description: 'Maaş, emeklilik, kredi ve vergi hesaplamalarınızı en güncel SGK ve vergi kurallarına göre yapın.',
}

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
              <span className="text-sm font-semibold text-primary">2024 Güncel Mevzuat</span>
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
            href="/maas-hesaplama"
          />
          <CalculatorCard
            title="Emeklilik Hesaplama"
            description="SGK giriş tarihinize ve prim gününüze göre ne zaman emekli olabileceğinizi hemen öğrenin."
            icon={icons.emeklilik}
            href="/emeklilik-hesaplama"
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
          <CalculatorCard
            title="Zam Oranı"
            description="Maaş artış oranınızı yüzde veya tutar olarak kolayca hesaplayın ve karşılaştırın."
            icon={icons.zam}
            href="/zam-hesaplama"
          />
          <CalculatorCard
            title="Kıdem Tazminatı"
            description="Çalışma sürenize ve son brüt maaşınıza göre alacağınız tazminat miktarını öğrenin."
            icon={icons.kidem}
            href="/kidem-tazminati"
          />
        </div>

        {/* Trust Message */}
        <section className="mt-32 p-12 bg-primary rounded-[3rem] text-center text-white relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-4">Güvenilir ve Şeffaf Hesaplama</h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Hesaplamalarımızda kullanılan tüm formüller Türkiye Cumhuriyeti yasaları ve SGK mevzuatıyla tam uyumludur.
              Verileriniz cihazınızda işlenir, asla sunucularımıza gönderilmez.
            </p>
          </div>
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full -ml-32 -mb-32 blur-3xl"></div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
