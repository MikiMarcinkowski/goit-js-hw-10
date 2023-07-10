
const url = 'https://api.thecatapi.com/v1/breeds';

const apiKey =
  'live_hmn1n1og6YXJ06D010VbCePU5aGk8e0cIa7QNNuHApIlzqZTBBCeJjR7zyvirFXY';

export function fetchBreeds() {
  return fetch(`${url}?api_key=${apiKey}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}

export function fetchCatByBreed(breedId) {
  return fetch(
    `https://api.thecatapi.com/v1/images/search?api_key=${apiKey}&breed_ids=${breedId}`
  ).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}
