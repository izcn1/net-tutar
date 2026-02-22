import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    <Link href="/" className="flex items-center space-x-2">
                        <span className="text-2xl font-black text-primary tracking-tight">
                            net-tutar<span className="text-accent">.</span>
                        </span>
                    </Link>
                    <div className="hidden md:flex space-x-8">
                        <Link href="/maas-hesaplama" className="text-gray-600 hover:text-accent font-medium transition-colors">Maaş</Link>
                        <Link href="/emeklilik-hesaplama" className="text-gray-600 hover:text-accent font-medium transition-colors">Emeklilik</Link>
                        <Link href="/kredi-hesaplama" className="text-gray-600 hover:text-accent font-medium transition-colors">Kredi</Link>
                    </div>
                    <div className="flex items-center md:hidden">
                        {/* Mobile menu button could go here if needed, leaving it empty for balance or removing entirely */}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
