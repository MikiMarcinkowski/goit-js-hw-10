const API_KEY =
  'live_hmn1n1og6YXJ06D010VbCePU5aGk8e0cIa7QNNuHApIlzqZTBBCeJjR7zyvirFXY';

import axios from 'axios';
axios.defaults.headers.common['x-api-key'] =
  'live_hmn1n1og6YXJ06D010VbCePU5aGk8e0cIa7QNNuHApIlzqZTBBCeJjR7zyvirFXY';

function fetchBreeds() {
  return fetch('https://api.thecatapi.com/v1/breeds').then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
  });
}

function fetchCatByBreed(breedId) {
  return fetch(
    `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}&api_key=${API_KEY}`
  ).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}

export { fetchBreeds, fetchCatByBreed };
