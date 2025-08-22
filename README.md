# 🧮 Yapay Zeka Destekli Hesap Makinesi

## 🤖 Tamamen AI ile Geliştirildi

Bu proje, **tamamen yapay zeka** desteği ile geliştirilmiş modern bir hesap makinesi uygulamasıdır. Frontend'den backend'e, veritabanı tasarımından kullanıcı arayüzüne kadar her satır kod yapay zeka tarafından yazılmıştır.

## ✨ Özellikler

### 🎨 Modern Kullanıcı Arayüzü
- **React Grid System** - 5 sütunlu responsive tasarım
- **Renkli buton paleti** - Pembe, turuncu ve mavi tonları
- **Gerçek zamanlı görüntü** - Anlık hesaplama sonuçları
- **Component yapısı** - HesapMakinesi ve GecmisListesi bileşenleri
- **Modern CSS** - Hover efektleri ve geçişler
- **Türkçe arayüz** - Tamamen Türkçe kullanıcı deneyimi

### 🧠 Gelişmiş Hesaplama Özellikleri
- **Temel aritmetik işlemler** (+, -, ×, ÷)
- **Ondalık sayı desteği** (virgül ile)
- **Negatif sayılar** (+/- butonu ile)
- **Geri alma** (⌫ butonu ile)
- **Sürekli hesaplama** modu
- **Hata kontrolü** (sıfıra bölme koruması)
- **Türkçe format** (virgül ondalık ayırıcı)

### 💾 İşlem Geçmişi ve API
- **RESTful API** endpoint'leri (`/api/Hesaplama/`)
- **SQL Server** veritabanında güvenli saklama
- **Async/Await** yapısı ile hızlı veri işleme
- **CRUD operasyonları** (Create, Read, Delete)
- **Hata yönetimi** ve kullanıcı bilgilendirme
- **Format koruması** (virgüllü sayı formatı)
- **Real-time update** - Anında liste güncelleme

### 🔧 Teknik Özellikler
- **Temizle** butonu ile hızlı sıfırlama
- **Geri alma** fonksiyonu
- **Keyboard** desteği (gelecek güncellemede)
- **Real-time** hesaplama

## 🛠️ Teknoloji Yığını

### Frontend
- **React 18** - Modern component-based UI framework
- **JavaScript (ES6+)** - Dinamik hesaplama mantığı ve state yönetimi
- **CSS3** - Responsive grid sistem ve modern estetik
- **React Hooks** - useState ile durum yönetimi
- **Visual Studio Code** - Geliştirme ortamı

### Backend
- **ASP.NET Core 6.0** - Web API Framework
- **Entity Framework Core** - Code First ORM
- **SQL Server LocalDB** - Lightweight database
- **Swagger/OpenAPI** - API documentation
- **CORS** - Cross-origin resource sharing
- **Visual Studio** - Profesyonel geliştirme IDE

### Veritabanı
- **SQL Server** - Güvenilir veri saklama
- **Entity Framework** - ORM çözümü
- İşlem geçmişi tablosu

## 🚀 Kurulum

### Gereksinimler
- **Node.js** (v14 veya üzeri)
- **React** (v18)
- **.NET Core 6.0** veya üzeri
- **SQL Server**
- Modern web tarayıcısı

### Backend Kurulumu

1. **Backend projesini başlatın**
```bash
cd backend
dotnet restore
dotnet build
dotnet run
```

2. **Swagger UI'ye erişin** (Development ortamında)
```
https://localhost:[auto-port]/swagger
```

3. **Veritabanı otomatik oluşturulur**
- LocalDB kullanılır: `(localdb)\\MSSQLLocalDB`
- Database: `HesapMakinesiDb`
- İlk çalıştırmada otomatik oluşturulur

### Frontend Kurulumu

1. **React uygulamasını kurun**
```bash
cd frontend
npm install
npm start
```

2. **Tarayıcıda açın**
```
http://localhost:3000
```

### Veritabanı Kurulumu
```sql
-- Veritabanı otomatik oluşturulur, manuel kurulum gerekmez!
-- Ancak farklı bir SQL Server instance kullanmak isterseniz:

-- 1. SQL Server'da yeni veritabanı oluşturun
CREATE DATABASE HesapMakinesiDb;

-- 2. appsettings.json'daki connection string'i güncelleyin
{
  "ConnectionStrings": {
    "DefaultConnection": "Data Source=SERVER_NAME;Initial Catalog=HesapMakinesiDb;Integrated Security=True;"
  }
}
```

**Not**: LocalDB varsayılan olarak kullanılır ve otomatik kurulum yapılır.

## 📁 Proje Yapısı

```
hesap-makinesi/
│
├── frontend/                  # React Frontend
│   ├── src/
│   │   ├── bilesenler/       # React Components
│   │   │   ├── HesapMakinesi.js
│   │   │   └── GecmisListesi.js
│   │   ├── servisler/        # API Services
│   │   │   └── HesapMakinesiApi.js
│   │   ├── App.js           # Main App Component
│   │   ├── App.css          # Styling
│   │   └── index.js         # React Entry Point
│   ├── package.json
│   └── public/
│
├── backend/                  # .NET Core Web API
│   ├── Controllers/
│   ├── Models/
│   ├── Services/
│   └── appsettings.json
│
└── README.md
```

## 📱 Kullanım

### Hesaplama İşlemleri
1. **Sayı girişi**: Rakam butonlarına (0-9) tıklayın
2. **İşlem seçimi**: +, -, *, / butonlarından birini seçin
3. **Sonuç alma**: = butonuna basarak hesaplayın
4. **Ondalık sayılar**: Virgül (,) butonu ile ondalık girin
5. **Negatif sayılar**: +/- butonu ile işaret değiştirin

### Kontrol İşlemleri
- **C butonu**: Hesaplamayi tamamen sıfırla
- **⌫ butonu**: Son girilen karakteri sil
- **+/- butonu**: Sayının işaretini değiştir

### Geçmiş İşlemleri
- Tüm hesaplamalar otomatik olarak **İşlem Geçmişi** panelinde görünür
- **Geçmişi Temizle** butonu ile tüm kayıtları silebilirsiniz
- Format: `sayı1 işlem sayı2 = sonuç` şeklinde gösterilir

## 🎯 Proje Hedefleri

Bu proje, yapay zekanın **yazılım geliştirmedeki gücünü** göstermek amacıyla oluşturulmuştur:

- ✅ **Sıfırdan kod yazma** yeteneği
- ✅ **Full-stack geliştirme** becerisi
- ✅ **Veritabanı entegrasyonu** 
- ✅ **Modern UI/UX tasarımı**
- ✅ **Responsive web uygulaması**

## 🤖 AI Geliştirme Süreci

Bu projedeki **her satır kod**, yapay zeka tarafından yazılmıştır:

1. **Frontend Tasarımı** - HTML, CSS, JavaScript
2. **Backend Mimarisi** - C# .NET Web API
3. **Veritabanı Şeması** - SQL Server tabloları
4. **İş Mantığı** - Hesaplama algoritmaları
5. **UI Tasarımı** - Renk paleti ve layout

## 📊 Özellik Detayları

### Hesaplama Motoru
- **React State Management** - useState hooks ile durum kontrolü
- **Türkçe sayı formatı** - Virgül ondalık ayırıcı (16,333333...)
- **API entegrasyonu** - Async/await ile backend iletişimi
- **Hata yönetimi** - Try/catch blokları ile güvenli işlemler
- **Component iletişimi** - Props ile parent-child data flow

### Veri Yönetimi
- **RESTful API endpoints** - GET, POST, DELETE metodları
- **JSON veri formatı** - Struktured data exchange
- **SQL Server tabloları** - Hesaplama kayıtları (sayi1, sayi2, islem, sonuc)
- **Async operations** - Non-blocking API calls
- **Error handling** - Kullanıcı dostu hata mesajları
- **Real-time updates** - Anında liste güncelleme

## 🎨 Tasarım Detayları

### Renk Paleti
- **Açık Pembe (#FFB6C1)** - Sayı butonları (0-9)
- **Turuncu (#FF8C00)** - İşlem butonları (+, -, *, /, C, ⌫)
- **Gök Mavisi (#87CEEB)** - Eşittir butonu (=)
- **Koyu Pembe (#DA70D6)** - +/- butonu
- **Açık Mavi (#E0F7FA)** - Geçmiş paneli arka planı

### Grid Sistemi
- **5 sütunlu CSS Grid** - Modern layout yapısı
- **Responsive tasarım** - Farklı ekran boyutlarına uyum
- **Button spacing** - 4px margin ile düzenli aralıklar
- **Border radius** - 8px ile yumuşak köşeler

### Animasyonlar
- **Hover efektleri** - Renk geçişleri
- **Active states** - Scale transform (0.98)
- **Smooth transitions** - 0.2s ease-in-out

## 🔮 Gelecek Güncellemeler

- [ ] **Bilimsel hesap makinesi** - sin, cos, tan, log fonksiyonları
- [ ] **Klavye desteği** - Keyboard event listeners
- [ ] **Tema seçenekleri** - Dark/Light mode toggle
- [ ] **Hesaplama geçmişi arama** - Search functionality
- [ ] **Export/Import** - CSV, JSON veri aktarımı
- [ ] **Sesli geri bildirim** - Button click sounds
- [ ] **PWA desteği** - Progressive Web App features
- [ ] **Multi-language** - İngilizce dil desteği

## 📈 Performans

- ⚡ **Hızlı hesaplama** - Milisaniye cevap süresi
- 💾 **Düşük bellek kullanımı** - Optimize edilmiş kod
- 🔄 **Gerçek zamanlı** - Anlık sonuç gösterimi
- 📱 **Mobil optimizasyonu** - Touch-friendly

## 🤝 Katkıda Bulunma

Bu proje tamamen AI tarafından geliştirilmiştir, ancak:
- Bug raporları kabul edilir
- Özellik önerileri değerlendirilir  
- UI/UX iyileştirme fikirleri memnuniyetle karşılanır

## 📄 Lisans

Bu proje MIT lisansı altında açık kaynak kodludur.

## 👨‍💻 Geliştirici

**[Kullanıcı Adınız]** - *AI-Assisted Full Stack Developer*

- 🔗 GitHub: [@kullaniciadi](https://github.com/kullaniciadi)
- 💼 LinkedIn: [Profil Bağlantınız]
- 📧 Email: your.email@example.com

## 🙏 Teşekkürler

Bu proje, **yapay zekanın yaratıcı potansiyelini** ve **yazılım geliştirmedeki rolünü** göstermektedir. Teknolojinin geleceğinde AI'ın ne kadar güçlü bir araç olduğunu kanıtlayan bir örnek çalışmadır.

---

*"Geleceğin yazılım geliştirme süreci: İnsan yaratıcılığı + AI gücü = Sınırsız potansiyel"*

⭐ **Projeyi beğendiyseniz yıldızlamayı unutmayın!** ⭐
