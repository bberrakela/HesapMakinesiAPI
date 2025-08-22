const API_BASE_URL = 'http://localhost:5139/api';

export const loadHistoryFromApi = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/Hesaplama/gecmis`);

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`HTTP hatası! Durum: ${response.status}, Mesaj: ${errorText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('API: Geçmiş yüklenirken hata:', error);
    throw error; 
  }
};

export const saveCalculationToApi = async (sayi1, sayi2, islem) => {
  try {
    const response = await fetch(`${API_BASE_URL}/Hesaplama/hesapla`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        sayi1: parseFloat(sayi1.toString().replace(',', '.')),
        sayi2: parseFloat(sayi2.toString().replace(',', '.')),
        islem: islem,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`HTTP hatası! Durum: ${response.status}, Mesaj: ${errorText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('API: Hesaplama kaydedilirken hata:', error);
    throw error;
  }
};

export const clearHistoryInApi = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/Hesaplama/gecmis`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`HTTP hatası! Durum: ${response.status}, Mesaj: ${errorText}`);
    }
    return true; 
  } catch (error) {
    console.error('API: Geçmiş temizlenirken hata:', error);
    throw error;
  }
};
