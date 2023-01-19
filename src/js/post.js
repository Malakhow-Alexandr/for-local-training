const BASE_URL = 'http://localhost:3000';

const newCard = {
  BitSize: '256 bits',
  CoolingSystem: 'Active',
  GraphicsChip: 'GeForce RTX 4080',
  MemoryCapacity: '16 GB',
  MemoryType: 'GDDR6',
  title: 'MSI PCI-Ex GeForce RTX 4080 Suprim X 16GB GDDR6X',
};

function postNewCard(card) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(card),
  };

  return fetch(`${BASE_URL}/video-cards`, options).then(response => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  });
}

postNewCard(newCard);
