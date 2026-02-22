# hesaplayicim. - Finansal Hesaplama Platformu

Modern, güvenilir ve tamamen Türkçe finansal hesaplama platformu. Next.js 14, TypeScript ve TailwindCSS kullanılarak geliştirilmiştir.

## 🚀 Özellikler

- **Net - Brüt Maaş:** 2024 güncel vergi dilimleri ve SGK kesintileri.
- **Emeklilik Hesaplama:** EYT ve güncel SGK mevzuatı uyumlu.
- **Kredi Faiz:** Amortisman formülü ile detaylı ödeme planı.
- **Vergi Dilimi:** Kümülatif matraha göre vergi analizi.
- **Zam Oranı:** Artış mikarı ve yüzdesel değişim.
- **Kıdem Tazminatı:** Tavan fiyat uygulamalı tazminat hesabı.

## 🛠️ Teknoloji Yığını

- **Framework:** Next.js 14 (App Router)
- **Dil:** TypeScript
- **Styling:** TailwindCSS
- **Font:** Inter (Google Fonts)
- **Deployment:** Vercel Ready

## 📦 Kurulum

1. Depoyu klonlayın.
2. Bağımlılıkları yükleyin:
   ```bash
   npm install
   ```
3. Geliştirme sunucusunu başlatın:
   ```bash
   npm run dev
   ```
4. Tarayıcınızda `http://localhost:3000` adresini açın.

## ⚙️ Kuralları Güncelleme

Hesaplama kuralları ve vergi oranları `/data` klasöründeki JSON dosyalarından güncellenebilir:
- `taxRules.json`: Vergi dilimleri ve sigorta oranları.
- `retirementRules.json`: Emeklilik yaşı ve prim gün şartları.

## 🌐 Vercel Deployment

Bu proje Vercel ile tam uyumludur. Deploy etmek için:
1. GitHub deponuzu Vercel'e bağlayın.
2. Proje ayarlarını (Next.js) otomatik tanıyacaktır.
3. `Deploy` butonuna basın.

---
*Bu platform eğitim ve bilgilendirme amaçlıdır. Resmi finansal kararlarınız için uzman görüşü almanız önerilir.*
