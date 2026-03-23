'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const CookieConsent = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('cookie-consent');
        if (!consent) {
            // Show after a small delay for better UX
            const timer = setTimeout(() => setIsVisible(true), 1500);
            return () => clearTimeout(timer);
        }
    }, []);

    const acceptAll = () => {
        localStorage.setItem('cookie-consent', 'accepted');
        setIsVisible(false);
    };

    const acceptNecessary = () => {
        localStorage.setItem('cookie-consent', 'necessary');
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-fade-in">
            <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl border border-gray-200 p-6">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                    <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-accent">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            </svg>
                            <h3 className="font-bold text-primary text-sm">Çerez Bildirimi</h3>
                        </div>
                        <p className="text-gray-600 text-xs leading-relaxed">
                            Bu web sitesi, deneyiminizi geliştirmek ve reklam hizmetleri sunmak için çerezleri kullanmaktadır. 
                            Detaylı bilgi için{' '}
                            <Link href="/cerez-politikasi" className="text-accent hover:underline font-medium">
                                Çerez Politikamızı
                            </Link>{' '}
                            ve{' '}
                            <Link href="/gizlilik-politikasi" className="text-accent hover:underline font-medium">
                                Gizlilik Politikamızı
                            </Link>{' '}
                            inceleyebilirsiniz.
                        </p>
                    </div>
                    <div className="flex gap-3 flex-shrink-0">
                        <button
                            onClick={acceptNecessary}
                            className="px-4 py-2 text-xs font-semibold text-gray-600 bg-gray-100 rounded-xl hover:bg-gray-200 transition-all"
                        >
                            Sadece Zorunlu
                        </button>
                        <button
                            onClick={acceptAll}
                            className="px-4 py-2 text-xs font-semibold text-white bg-accent rounded-xl hover:bg-accent/90 transition-all shadow-md"
                        >
                            Tümünü Kabul Et
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CookieConsent;
