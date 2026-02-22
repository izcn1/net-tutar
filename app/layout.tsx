import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "net-tutar | Türkiye'nin Finansal Hesaplama Platformu",
  description: "Maaş, emeklilik, kredi ve vergi hesaplamalarınızı en güncel SGK ve vergi kurallarına göre yapın.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "net-tutar.",
              "url": "https://hesaplayicim.vercel.app",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://hesaplayicim.vercel.app/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            }),
          }}
        />
      </head>
      <body className={`${inter.className} antialiased bg-[#f8fafc]`}>
        {children}
      </body>
    </html>
  );
}
