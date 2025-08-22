# 🖥️ Backend - ASP.NET Core Web API

## 📋 İçerik
Bu klasörde Hesap Makinesi uygulamasının **backend** katmanı yer almaktadır.

## 🛠️ Özellikler
- **Entity Framework Core** - Code First approach
- **Swagger UI** - Development ortamında API dokumentasyonu
- **CORS Support** - Frontend entegrasyonu
- **Error Handling** - Try-catch blokları ile hata yönetimi
- **Data Validation** - Sıfıra bölme kontrolü
- **Auto Database Creation** - İlk çalıştırmada otomatik veritabanı oluşturma

## 📁 Dosya Yapısı
```
Backend/
├── Controllers/
│   └── HesaplamaController.cs    # API endpoints ve iş mantığı
├── Models/
│   ├── IslemGecmisi.cs          # Veritabanı entity modeli
│   └── HesaplamaRequest.cs      # API request modeli
├── Data/
│   └── AppDbContext.cs          # Entity Framework context
├── Program.cs                   # Uygulama başlatma ve konfigürasyon
├── appsettings.json            # Connection string ve ayarlar
└── HesapMakinesiApi.csproj     # Proje dosyası
```

## 🚀 Çalıştırma
```bash
dotnet restore
dotnet build
dotnet run
```

## 📡 API Endpoints
- `POST /api/Hesaplama/hesapla` - Hesaplama yap ve kaydet
  - Request: `{sayi1: number, sayi2: number, islem: string}`
  - Response: `double` (sonuç)
- `GET /api/Hesaplama/gecmis` - Son 50 işlem geçmişini getir
  - Response: `List<IslemGecmisi>`
- `DELETE /api/Hesaplama/gecmis` - Tüm geçmişi temizle
  - Response: `"İşlem geçmişi temizlendi."`

## 🔗 Veritabanı
- **LocalDB** - SQL Server LocalDB instance
- **Connection String**: `(localdb)\\MSSQLLocalDB`
- **Database**: HesapMakinesiDb
- **Auto-create**: Database.EnsureCreated() ile otomatik oluşturulur

## 🌐 CORS Ayarları
- **Allowed Origins**: `http://localhost:3000`, `http://localhost:3001`
- **Frontend** ile güvenli iletişim için yapılandırılmış

Backend aplikasyon başlatıldığında **otomatik port** ataması yapılır (genellikle 5000+ aralığında).
