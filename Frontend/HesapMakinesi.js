import React, { useState } from 'react';

function HesapMakinesi({ onYeniHesaplama, onHesaplamaHatasi }) {
  const [guncelIslem, setGuncelIslem] = useState('0');
  const [oncekiIslem, setOncekiIslem] = useState('');
  const [operasyon, setOperasyon] = useState(null);
  const [sonrakiSayıSıfırlansınMı, setSonrakiSayıSıfırlansınMı] = useState(false);

  const sayıyıFormatla = (sayı) => {
    return sayı.toString().replace('.', ',');
  };

  const hesapla = () => {
    const onceki = parseFloat(oncekiIslem.replace(',', '.'));
    const guncel = parseFloat(guncelIslem.replace(',', '.'));

    if (isNaN(onceki) || isNaN(guncel)) return guncel;

    let sonuc;
    switch (operasyon) {
      case '+':
        sonuc = onceki + guncel;
        break;
      case '-':
        sonuc = onceki - guncel;
        break;
      case '*':
        sonuc = onceki * guncel;
        break;
      case '/':
        sonuc = guncel !== 0 ? onceki / guncel : 'Hata';
        break;
      default:
        sonuc = guncel;
    }
    return sonuc;
  };

  const sayıTıklaması = (sayı) => {
    if (sonrakiSayıSıfırlansınMı) {
      setGuncelIslem(sayı);
      setSonrakiSayıSıfırlansınMı(false);
    } else if (guncelIslem === '0' && sayı !== ',') {
      setGuncelIslem(sayı);
    } else {
      setGuncelIslem(guncelIslem + sayı);
    }
  };

  const operasyonTıklaması = (sonrakiOperasyon) => {
    setSonrakiSayıSıfırlansınMı(false);

    if (oncekiIslem === '') {
      setOncekiIslem(guncelIslem);
      setGuncelIslem('0');
    } else if (operasyon) {
      const sonuc = hesapla();
      setOncekiIslem(sonuc.toString());
      setGuncelIslem('0');
    }
    setOperasyon(sonrakiOperasyon);
  };

  const esittirTıklaması = async () => {
    if (operasyon && oncekiIslem !== '') {
      const sonuc = hesapla();

      try {
        await onYeniHesaplama(oncekiIslem, guncelIslem, operasyon, sonuc);

      } catch (error) {
        console.error("Hesaplama sırasında hata oluştu:", error);
        onHesaplamaHatasi(error);
      }

      setGuncelIslem(sayıyıFormatla(sonuc.toString()));
      setOncekiIslem('');
      setOperasyon(null);
      setSonrakiSayıSıfırlansınMı(true);
    }
  };

  const temizle = () => {
    setGuncelIslem('0');
    setOncekiIslem('');
    setOperasyon(null);
    setSonrakiSayıSıfırlansınMı(false);
  };

  const geriSil = () => {
    if (guncelIslem.length > 1) {
      setGuncelIslem(guncelIslem.slice(0, -1));
    } else {
      setGuncelIslem('0');
    }
  };

  const artıEksi = () => {
    if (guncelIslem !== '0') {
      setGuncelIslem(guncelIslem.startsWith('-') 
        ? guncelIslem.slice(1) 
        : '-' + guncelIslem);
    }
  };

  const ondalıkEkle = () => {
    if (!guncelIslem.includes(',')) {
      setGuncelIslem(guncelIslem + ',');
    }
  };

  const dugmeTemelStili = {
    cursor: 'pointer',
    fontSize: '1.4em',
    border: 'none',
    outline: 'none',
    borderRadius: '8px',
    transition: 'all 0.2s ease-in-out'
  };

  const sayıDugmeStili = {
    ...dugmeTemelStili,
    backgroundColor: '#FFB6C1',
    color: '#333333'
  };

  const operatorDugmeStili = {
    ...dugmeTemelStili,
    backgroundColor: '#FF8C00',
    color: 'white'
  };

  const kontrolDugmeStili = {
    ...dugmeTemelStili,
    backgroundColor: '#FF8C00',
    color: 'white'
  };

  const esittirDugmeStili = {
    ...dugmeTemelStili,
    backgroundColor: '#87CEEB',
    color: '#333333'
  };

  const artıEksiDugmeStili = {
    ...dugmeTemelStili,
    backgroundColor: '#DA70D6',
    color: 'white'
  };

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(5, 75px)',
      gridTemplateRows: 'minmax(90px, auto) repeat(4, 65px)',
      backgroundColor: '#E6E6FA',
      padding: '15px',
      borderRadius: '15px',
      boxShadow: '0 0 30px rgba(0, 0, 0, 0.2)',
      border: '1px solid #B0C4DE',
      gap: '4px'
    }}>
      <div style={{
        gridColumn: '1 / -1',
        backgroundColor: '#FFFFFF',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        justifyContent: 'space-around',
        padding: '10px',
        borderRadius: '8px',
        marginBottom: '10px',
        color: '#333333',
        fontWeight: 'bold'
      }}>
        <div style={{
          color: 'rgba(0, 0, 0, .5)',
          fontSize: '1.1em'
        }}>{oncekiIslem} {operasyon}</div>
        <div style={{
          color: '#333333',
          fontSize: '2em'
        }}>{guncelIslem}</div>
      </div>

      <button onClick={() => sayıTıklaması('7')} style={sayıDugmeStili}>7</button>
      <button onClick={() => sayıTıklaması('8')} style={sayıDugmeStili}>8</button>
      <button onClick={() => sayıTıklaması('9')} style={sayıDugmeStili}>9</button>
      <button onClick={() => operasyonTıklaması('/')} style={operatorDugmeStili}>/</button>
      <button onClick={temizle} style={kontrolDugmeStili}>C</button>

      <button onClick={() => sayıTıklaması('4')} style={sayıDugmeStili}>4</button>
      <button onClick={() => sayıTıklaması('5')} style={sayıDugmeStili}>5</button>
      <button onClick={() => sayıTıklaması('6')} style={sayıDugmeStili}>6</button>
      <button onClick={() => operasyonTıklaması('*')} style={operatorDugmeStili}>*</button>
      <button onClick={geriSil} style={kontrolDugmeStili}>⌫</button>

      <button onClick={() => sayıTıklaması('1')} style={sayıDugmeStili}>1</button>
      <button onClick={() => sayıTıklaması('2')} style={sayıDugmeStili}>2</button>
      <button onClick={() => sayıTıklaması('3')} style={sayıDugmeStili}>3</button>
      <button onClick={() => operasyonTıklaması('-')} style={operatorDugmeStili}>-</button>
      <button onClick={esittirTıklaması} style={{
        ...esittirDugmeStili,
        gridRow: 'span 2'
      }}>=</button>

      <button onClick={artıEksi} style={artıEksiDugmeStili}>+/-</button>
      <button onClick={() => sayıTıklaması('0')} style={sayıDugmeStili}>0</button>
      <button onClick={ondalıkEkle} style={sayıDugmeStili}>,</button>
      <button onClick={() => operasyonTıklaması('+')} style={operatorDugmeStili}>+</button>
    </div>
  );
}

export default HesapMakinesi;
