// 'api_key=live_hmn1n1og6YXJ06D010VbCePU5aGk8e0cIa7QNNuHApIlzqZTBBCeJjR7zyvirFXY';

const API_KEY = 'live_hmn1n1og6YXJ06D010VbCePU5aGk8e0cIa7QNNuHApIlzqZTBBCeJjR7zyvirFXY';

// https://www.youtube.com/watch?v=wszFDXP0lkA

// import '../../node_modules/slim-select/dist/slimselect.css';

// import axios from 'axios';
// axios.defaults.headers.common['x-api-key'] =
//   'live_hmn1n1og6YXJ06D010VbCePU5aGk8e0cIa7QNNuHApIlzqZTBBCeJjR7zyvirFXY';

  import { fetchBreeds, fetchCatByBreed } from './js/cat-api.js';


const loader = document.querySelector('.loader');
const errorTheme = document.querySelector('.error');
const catInfo = document.querySelector('.cat-info');
const select = document.querySelector('.breed-select');

// import SlimSelect from 'slim-select';
// new SlimSelect({
//   select: select,
// });




