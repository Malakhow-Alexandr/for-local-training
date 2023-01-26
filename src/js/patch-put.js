const BASE_URL = 'http://localhost:3000';

const newCard = {
  BitSize: '384 bits',
  CoolingSystem: 'Active',
  GraphicsChip: 'GeForce RTX 4090',
  MemoryCapacity: '24 GB',
  MemoryType: 'GDDR6X',
  title: 'MSI GeForce RTX 4090 Ventus 3X 24G OC',
};

async function updateCardById(update, cardId) {
  const options = {
    method: 'PATCH',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify(update),
  };
  const response = await fetch(`${BASE_URL}/video-cards/${cardId}`, options);
  return await response.json();
}

updateCardById(newCard, 15);
