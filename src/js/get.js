const BASE_URL = 'http://localhost:3000';

function fetchCards() {
  return fetch(`${BASE_URL}/video-cards`).then(response => {
    if (!response.ok) {
      throw new Error();
    }
    return response.json;
  });
}

function fetchCardById(cardId) {
  return fetch(`${BASE_URL}/video-cards/${cardId}`).then(response => {
    if (!response.ok) {
      throw new Error();
    }
    return response.json();
  });
}

fetchCards();
fetchCardById(2);
fetchCardById(4);
