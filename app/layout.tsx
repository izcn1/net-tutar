import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CookieConsent from "@/components/CookieConsent";

const inter = Inter({ subsets: ["latin"], display: 'swap' });

export const viewport: Viewport = {
  themeColor: '#0f172a',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://net-tutar.vercel.app'),
  title: {
    default: "net-tutar | Türkiye'nin Finansal Hesaplama Platformu",
    template: "%s | net-tutar"
  },
  description: "Maaş, emeklilik, kredi ve vergi hesaplamalarınızı en güncel 2026 vergi kurallarına göre yapın. Güvenilir ve hızlı finansal araçlar.",
  keywords: ["net maaş hesaplama", "emeklilik hesaplama", "kredi faiz hesaplama", "vergi dilimi", "asgari ücret 2026", "tazminat hesaplama", "kdv hesaplama"],
  authors: [{ name: 'net-tutar' }],
  creator: 'net-tutar',
  publisher: 'net-tutar',
  manifest: '/manifest.json',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: 'https://net-tutar.vercel.app',
    siteName: 'net-tutar',
    title: 'net-tutar | Finansal Hesaplama Platformu',
    description: '2026 maaş, vergi ve emeklilik hesaplama araçları. Tamamen ücretsiz ve güvenilir.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'net-tutar | Finansal Hesaplama Platformu',
    description: '2026 maaş, vergi ve emeklilik hesaplama araçları.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <head>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6452726054981962"
             crossOrigin="anonymous"></script>
        {/* AMP Auto Ads Script */}
        <script async custom-element="amp-auto-ads"
                src="https://cdn.ampproject.org/v0/amp-auto-ads-0.1.js">
        </script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "net-tutar",
              "url": "https://net-tutar.vercel.app",
              "description": "Türkiye'nin güvenilir finansal hesaplama platformu.",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://net-tutar.vercel.app/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "net-tutar",
              "url": "https://net-tutar.vercel.app",
              "logo": "https://net-tutar.vercel.app/icon.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer support",
                "url": "https://net-tutar.vercel.app/iletisim",
                "availableLanguage": "Turkish"
              },
              "sameAs": []
            }),
          }}
        />
      </head>
      <body className={`${inter.className} antialiased bg-[#f8fafc]`}>
        <div dangerouslySetInnerHTML={{ 
          __html: '<amp-auto-ads type="adsense" data-ad-client="ca-pub-6452726054981962"></amp-auto-ads>' 
        }} />
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
