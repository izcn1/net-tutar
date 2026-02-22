import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-primary text-white py-12 mt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="col-span-1 md:col-span-2">
                        <h2 className="text-2xl font-black mb-4">net-tutar<span className="text-accent">.</span></h2>
                        <p className="text-gray-400 max-w-sm">
                            Türkiye&apos;nin en güvenilir finansal hesaplama platformu. Maaş, emeklilik, kredi ve vergi hesaplamalarınızı saniyeler içinde yapın.
                        </p>
                    </div>
                    <div>
                        <h4 className="font-bold mb-4 text-accent">Hızlı Linkler</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li><Link href="/maas-hesaplama" className="hover:text-white transition-colors">Maaş Hesaplama</Link></li>
                            <li><Link href="/emeklilik-hesaplama" className="hover:text-white transition-colors">Emeklilik Hesaplama</Link></li>
                            <li><Link href="/kredi-hesaplama" className="hover:text-white transition-colors">Kredi Hesaplama</Link></li>
                            <li><Link href="/vergi-dilimi" className="hover:text-white transition-colors">Vergi Dilimi</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold mb-4 text-accent">Yasal</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li><Link href="#" className="hover:text-white transition-colors">Kullanım Koşulları</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Gizlilik Politikası</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Çerez Politikası</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-white/10 mt-12 pt-8 text-center text-gray-500 text-sm">
                    © {new Date().getFullYear()} net-tutar. Tüm hakları saklıdır.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
