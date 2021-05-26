import '../node_modules/material-design-icons/iconfont/material-icons.css';
// material - design - icons / iconfont / material - icons.css;
import './css/style.css';
import galleryTpl from './templates/galleryTpl.hbs';
// import fetchCountriesByName from './js/fetchCountriesByName';
// import renderCountryCard from './js/renderCountryCard';
// import _ from 'lodash';
// import clearMarkup from './js/clearMarkup';

const refs = {
  gallery: document.querySelector('.gallery'),
};

// function showCountries() {
//   if (refs.input.value) {
//     fetchCountriesByName(refs.input.value).then(renderCountryCard);
//   } else clearMarkup();
// }

// refs.input.addEventListener('input', _.debounce(showCountries, 500));

const API_KEY = '21804857-e4d02e1e62ab2bb6123c0439f';

function fetchImagesByName(searchQuery) {
  return fetch(
    `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${searchQuery}&page=1&per_page=12&key=${API_KEY}`,
  ).then(response => {
    return response.json();
  });
}
function someMagic(responseFromApi) {
  return responseFromApi.hits;
}

function createGalleryCardsMarkup(item) {
  return galleryTpl(item);
}

function renderGalleryCard(markup) {
  refs.gallery.innerHTML = markup;
}

fetchImagesByName('cats')
  .then(obj => someMagic(obj))
  .then(hit => createGalleryCardsMarkup(hit))
  .then(markup => renderGalleryCard(markup));
