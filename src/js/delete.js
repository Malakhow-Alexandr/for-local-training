const BASE_URL = 'http://localhost:3000';

function deleteCard(cardId) {
  const options = {
    method: 'DELETE',
  };
  return fetch(`${BASE_URL}/video-cards/${cardId}`, options).then(response => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  });
}
deleteCard(17);
