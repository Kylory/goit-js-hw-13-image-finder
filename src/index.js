import '../node_modules/material-design-icons/iconfont/material-icons.css';
// material - design - icons / iconfont / material - icons.css;
import './css/style.css';
import galleryTpl from './templates/galleryTpl.hbs';
// import fetchCountriesByName from './js/fetchCountriesByName';
// import renderCountryCard from './js/renderCountryCard';
import _ from 'lodash';
// import clearMarkup from './js/clearMarkup';

const refs = {
  gallery: document.querySelector('.gallery'),
  loadMoreBtn: document.querySelector('.load-more-btn'),
  searchQuery: document.querySelector('.search-input'),
};

// let searchQuery = refs.searchQuery.value;

// function showCountries() {
//   if (refs.input.value) {
//     fetchCountriesByName(refs.input.value).then(renderCountryCard);
//   } else clearMarkup();
// }

const API_KEY = '21804857-e4d02e1e62ab2bb6123c0439f';

function fetchImagesByName(searchQuery, page) {
  return fetch(
    `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${searchQuery}&page=${page}&per_page=12&key=${API_KEY}`,
  ).then(response => {
    return response.json();
  });
}

function createGalleryCardsMarkup(responseFromApi) {
  const hits = responseFromApi.hits;
  return galleryTpl(hits);
}

function renderGalleryCard(markup) {
  refs.gallery.insertAdjacentHTML('beforeend', markup);
}

function searchImageByName() {
  let searchQuery = refs.searchQuery.value;
  //   let page = 1;
  fetchImagesByName(searchQuery)
    .then(hit => createGalleryCardsMarkup(hit))
    .then(markup => renderGalleryCard(markup));
  //   page += 1;
}

refs.searchQuery.addEventListener('input', _.debounce(searchImageByName, 600));
