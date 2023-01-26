const BASE_URL = 'http://localhost:3000';

function fetchCards() {
  return fetch(`${BASE_URL}/video-cards`).then(response => {
    if (!response.ok) {
      throw new Error();
    }
    return response.json;
  });
}

async function fetchCardById(cardId) {
  const response = await fetch(`${BASE_URL}/video-cards/${cardId}`);
  return response.json();
};

fetchCards();
fetchCardById(2);
fetchCardById(4);
