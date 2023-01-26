const BASE_URL = 'http://localhost:3000';

async function deleteCard(cardId) {
  const options = {
    method: 'DELETE',
  };
  const response = await fetch(`${BASE_URL}/video-cards/${cardId}`, options);
  return response;
}
deleteCard(16);
