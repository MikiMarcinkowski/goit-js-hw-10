import { fetchBreeds, fetchCatByBreed } from './js/cat-api';
import Notiflix from 'notiflix';
import SlimSelect from 'slim-select';
import '../node_modules/slim-select/dist/slimselect.css';

const select = document.querySelector('.breed-select');
const catInfo = document.querySelector('.cat-info');
const loader = document.querySelector('.loader');
const error = document.querySelector('.error');

loader.classList.replace('loader', 'is-hidden');
error.classList.add('is-hidden');
catInfo.classList.add('is-hidden');
select.classList.replace('breed-select', 'is-hidden');

fetchBreeds()
  .then(data => {
    const markup = data
      .map(({ id, name }) => `<option value="${id}">${name}</option>`)
      .join();
    select.innerHTML = markup;

    select.classList.replace('is-hidden', 'breed-select');

    new SlimSelect({
      select: '.breed-select',
    });
  })
  .catch(fetchError);

select.addEventListener('change', selectBreed);


function selectBreed(event) {
  loader.innerHTML = '';
  loader.classList.replace('is-hidden', 'loader');
  select.classList.add('is-hidden');
  catInfo.classList.add('is-hidden');

  const breedId = event.currentTarget.value;
  fetchCatByBreed(breedId)
    .then(data => {
      loader.classList.replace('loader', 'is-hidden');
      select.classList.remove('is-hidden');
      const { url, breeds } = data[0];

      catInfo.innerHTML = `<img src="${url}" alt="${breeds[0].name}" width="300"/>
    <div class="description" style='margin-left: 50px' >
    <h1>${breeds[0].name}</h1>
    <p>${breeds[0].description}</p>
    <p><b>Temperament:</b> ${breeds[0].temperament}</p>
    </div>`;
      catInfo.classList.remove('is-hidden');
      catInfo.style.display = 'flex';
    })
    .catch(fetchError);
}

function fetchError(error) {
  select.classList.remove('is-hidden');
  loader.classList.replace('loader', 'is-hidden');

  Notiflix.Notify.failure(
    'Oops! Something went wrong! Try reloading the page!'
  );
}
