'use client';

import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    <Link href="/" className="flex items-center space-x-2">
                        <span className="text-2xl font-black text-primary tracking-tight">
                            net-tutar<span className="text-accent">.</span>
                        </span>
                    </Link>
                    <div className="hidden md:flex space-x-6">
                        <Link href="/net-maas-hesaplama" className="text-gray-600 hover:text-accent font-medium transition-colors text-sm">Maaş</Link>
                        <Link href="/emeklilik-hesaplama" className="text-gray-600 hover:text-accent font-medium transition-colors text-sm">Emeklilik</Link>
                        <Link href="/kdv-hesaplama" className="text-gray-600 hover:text-accent font-medium transition-colors text-sm">KDV</Link>
                        <Link href="/piyasalar" className="text-gray-600 hover:text-accent font-medium transition-colors text-sm">📈 Piyasalar</Link>
                        <Link href="/finans-haberleri" className="text-gray-600 hover:text-accent font-medium transition-colors text-sm">📰 Haberler</Link>
                        <Link href="/hakkimizda" className="text-gray-600 hover:text-accent font-medium transition-colors text-sm">Hakkımızda</Link>
                    </div>
                    {/* Mobile menu button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
                        aria-label="Menüyü aç"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-primary">
                            {isMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden border-t border-gray-100 bg-white">
                    <div className="px-4 py-4 space-y-3">
                        <Link href="/net-maas-hesaplama" onClick={() => setIsMenuOpen(false)} className="block text-gray-600 hover:text-accent font-medium transition-colors text-sm py-2">Net Maaş Hesaplama</Link>
                        <Link href="/emeklilik-hesaplama" onClick={() => setIsMenuOpen(false)} className="block text-gray-600 hover:text-accent font-medium transition-colors text-sm py-2">Emeklilik Hesaplama</Link>
                        <Link href="/kdv-hesaplama" onClick={() => setIsMenuOpen(false)} className="block text-gray-600 hover:text-accent font-medium transition-colors text-sm py-2">KDV Hesaplama</Link>
                        <Link href="/asgari-ucret-hesaplama" onClick={() => setIsMenuOpen(false)} className="block text-gray-600 hover:text-accent font-medium transition-colors text-sm py-2">Asgari Ücret</Link>
                        <Link href="/kredi-hesaplama" onClick={() => setIsMenuOpen(false)} className="block text-gray-600 hover:text-accent font-medium transition-colors text-sm py-2">Kredi Hesaplama</Link>
                        <Link href="/vergi-dilimi" onClick={() => setIsMenuOpen(false)} className="block text-gray-600 hover:text-accent font-medium transition-colors text-sm py-2">Vergi Dilimi</Link>
                        <div className="border-t border-gray-100 pt-3 mt-3">
                            <Link href="/piyasalar" onClick={() => setIsMenuOpen(false)} className="block text-gray-600 hover:text-accent font-medium transition-colors text-sm py-2">📈 Canlı Piyasalar</Link>
                            <Link href="/finans-haberleri" onClick={() => setIsMenuOpen(false)} className="block text-gray-600 hover:text-accent font-medium transition-colors text-sm py-2">📰 Finans Haberleri</Link>
                            <Link href="/maas-siralama" onClick={() => setIsMenuOpen(false)} className="block text-gray-600 hover:text-accent font-medium transition-colors text-sm py-2">🏆 Maaş Sıralama</Link>
                        </div>
                        <div className="border-t border-gray-100 pt-3 mt-3">
                            <Link href="/hakkimizda" onClick={() => setIsMenuOpen(false)} className="block text-gray-600 hover:text-accent font-medium transition-colors text-sm py-2">Hakkımızda</Link>
                            <Link href="/iletisim" onClick={() => setIsMenuOpen(false)} className="block text-gray-600 hover:text-accent font-medium transition-colors text-sm py-2">İletişim</Link>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
