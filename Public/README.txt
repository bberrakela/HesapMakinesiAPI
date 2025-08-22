# 🌐 Public - Statik Dosyalar

## 📋 İçerik
Bu klasörde uygulamanın **public** (herkese açık) statik dosyaları yer almaktadır.

## 📁 Dosya Yapısı
```
Public/
├── index.html              # Ana HTML template
├── favicon.ico             # Site ikonu (browser tab)
├── logo192.png            # PWA logo (192x192)
├── logo512.png            # PWA logo (512x512)
├── manifest.json          # PWA manifest dosyası
├── robots.txt             # SEO robots.txt
└── screenshots/           # Uygulama ekran görüntüleri
    ├── hesap-makinesi.png
    └── islem-gecmisi.png
```

## 🎯 Amaç
- **HTML Template**: React uygulamasının mount edildiği ana sayfa
- **Favicon**: Browser tab'ında görünen ikon
- **PWA Dosyaları**: Progressive Web App desteği
- **SEO**: Arama motoru optimizasyonu
- **Medya Dosyaları**: Logo, screenshot vb. statik içerik

## 📝 Notlar
- Bu dosyalar **build** sırasında otomatik olarak dist/ klasörüne kopyalanır
- index.html içerisindeki `<div id="root">` elementi React uygulamasının bağlandığı noktadır
- manifest.json PWA özelliklerini tanımlar (offline kullanım, install vb.)

## 🔧 Düzenleme
Bu klasördeki dosyaları doğrudan düzenleyebilirsiniz. Değişiklikler otomatik olarak development server'a yansır.
