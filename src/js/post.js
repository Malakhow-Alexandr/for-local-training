const BASE_URL = 'http://localhost:3000';

const newCard = {
  BitSize: '256 bits',
  CoolingSystem: 'Active',
  GraphicsChip: 'GeForce RTX 4080',
  MemoryCapacity: '16 GB',
  MemoryType: 'GDDR6',
  title: 'MSI PCI-Ex GeForce RTX 4080 Suprim X 16GB GDDR6X',
};

async function addNewCard(card) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(card),
  };

  const response = await fetch(`${BASE_URL}/video-cards`, options);
  return await response.json();
}

async function addCardAndUpdateUi(card) {
  try {
    const newCard = addNewCard(card);
  } catch (error) {
    console.log(error.message);
  }
}

addCardAndUpdateUi(newCard);
