// src/bilesenler/GecmisListesi.js
import React from 'react';

function GecmisListesi({ gecmis, yukleniyor, gecmisiTemizle }) {
  return (
    <div style={{
      backgroundColor: '#E0F7FA',
      borderRadius: '15px',
      padding: '20px',
      minWidth: '300px',
      maxWidth: '350px',
      boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)',
      border: '1px solid #B2EBF2'
    }}>
      <h3 style={{
        margin: '0 0 15px 0',
        color: '#333333',
        textAlign: 'center',
        fontSize: '1.5em'
      }}>İşlem Geçmişi</h3>

      <div style={{
        backgroundColor: '#FFFFFF',
        borderRadius: '10px',
        padding: '15px',
        minHeight: '250px',
        maxHeight: '400px',
        overflowY: 'auto',
        marginBottom: '15px',
        border: '1px solid #E0E0E0'
      }}>
        {yukleniyor ? (
          <div style={{
            color: '#666666',
            textAlign: 'center',
            fontStyle: 'italic',
            marginTop: '20px'
          }}>
            Yükleniyor...
          </div>
        ) : gecmis.length === 0 ? (
          <div style={{
            color: '#999999',
            textAlign: 'center',
            fontStyle: 'italic',
            marginTop: '20px'
          }}>
            Henüz işlem yapılmadı
          </div>
        ) : (
          gecmis.map((hesaplama, index) => (
            <div key={index} style={{
              padding: '8px 12px',
              backgroundColor: index % 2 === 0 ? '#F9F9F9' : '#FFFFFF',
              borderRadius: '6px',
              marginBottom: '5px',
              fontSize: '0.95em',
              color: '#333333',
              border: '1px solid #F0F0F0'
            }}>
              {hesaplama}
            </div>
          ))
        )}
      </div>

      <button 
        onClick={gecmisiTemizle}
        disabled={yukleniyor}
        style={{
          width: '100%',
          padding: '12px',
          backgroundColor: yukleniyor ? '#CCCCCC' : '#FF7043',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          fontSize: '1.1em',
          cursor: yukleniyor ? 'not-allowed' : 'pointer',
          fontWeight: 'bold',
          transition: 'background-color 0.2s ease'
        }}
        onMouseOver={(e) => {
          if (!yukleniyor) e.target.style.backgroundColor = '#F4511E';
        }}
        onMouseOut={(e) => {
          if (!yukleniyor) e.target.style.backgroundColor = '#FF7043';
        }}
      >
        {yukleniyor ? 'İşleniyor...' : 'Geçmişi Temizle'}
      </button>
    </div>
  );
}

export default GecmisListesi;
