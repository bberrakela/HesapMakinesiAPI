// src/App.js
import React, { useState, useEffect } from 'react';
import HesapMakinesi from './bilesenler/HesapMakinesi';
import GecmisListesi from './bilesenler/GecmisListesi';
import { loadHistoryFromApi, saveCalculationToApi, clearHistoryInApi } from './servisler/HesapMakinesiApi';

function App() {
  const [gecmis, setGecmis] = useState([]);
  const [yukleniyor, setYukleniyor] = useState(false);

  useEffect(() => {
    const gecmisiGetir = async () => {
      try {
        setYukleniyor(true);
        const veri = await loadHistoryFromApi();
        const formatliGecmis = veri.map(hesaplama => 
          `${sayıyıFormatla(hesaplama.sayi1.toString())} ${hesaplama.islem} ${sayıyıFormatla(hesaplama.sayi2.toString())} = ${sayıyıFormatla(hesaplama.sonuc.toString())}`
        );
        setGecmis(formatliGecmis);
      } catch (error) {
        console.error('App: Geçmiş yüklenirken hata:', error);
        alert('Geçmiş yüklenemedi. Backend bağlantısını kontrol edin.');
      } finally {
        setYukleniyor(false);
      }
    };

    gecmisiGetir();
  }, []);

  const handleYeniHesaplama = async (sayi1, sayi2, islem, sonuc) => {
    try {
      await saveCalculationToApi(sayi1, sayi2, islem);
      const tamHesaplama = `${sayıyıFormatla(sayi1)} ${islem} ${sayıyıFormatla(sayi2)} = ${sayıyıFormatla(sonuc.toString())}`;
      setGecmis(onceki => [tamHesaplama, ...onceki]);
    } catch (error) {
      console.error('App: Hesaplama kaydedilirken hata:', error);
      alert('Hesaplama kaydedilemedi. Backend bağlantısını veya gönderilen veriyi kontrol edin.');
    }
  };

  const handleHesaplamaHatasi = (hata) => {
    console.error("App: Hesaplama bileşeninden hata geldi:", hata);
  };

  const handleGecmisiTemizle = async () => {
    try {
      setYukleniyor(true);
      await clearHistoryInApi();
      setGecmis([]);
      alert('İşlem geçmişi temizlendi.');
    } catch (error) {
      console.error('App: Geçmiş temizlenirken hata:', error);
      alert('Geçmiş temizlenemedi. Backend bağlantısını kontrol edin.');
    } finally {
      setYukleniyor(false);
    }
  };

  const sayıyıFormatla = (sayı) => {
    return sayı.toString().replace('.', ',');
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-start',
      minHeight: '100vh',
      backgroundColor: '#F8F0E3',
      color: '#333333',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      padding: '20px',
      gap: '20px'
    }}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        <h1 style={{
          marginBottom: '20px',
          fontSize: '2.5em',
          color: '#8A2BE2'
        }}>Hesap Makinesi</h1>
        <HesapMakinesi 
          onYeniHesaplama={handleYeniHesaplama} 
          onHesaplamaHatasi={handleHesaplamaHatasi} 
        />
      </div>

      <GecmisListesi 
        gecmis={gecmis} 
        yukleniyor={yukleniyor} 
        gecmisiTemizle={handleGecmisiTemizle} 
      />
    </div>
  );
}

export default App;
