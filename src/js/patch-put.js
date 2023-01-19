const BASE_URL = 'http://localhost:3000';

const newCard = {
  BitSize: '384 bits',
  CoolingSystem: 'Active',
  GraphicsChip: 'GeForce RTX 4090',
  MemoryCapacity: '24 GB',
  MemoryType: 'GDDR6X',
  title: 'MSI GeForce RTX 4090 Ventus 3X 24G OC',
};

function updateCardById(update, cardId) {
  const options = {
    method: 'PATCH',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify(update),
  };
  return fetch(`${BASE_URL}/video-cards/${cardId}`, options).then(response => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  });
}

updateCardById(newCard, 15);
