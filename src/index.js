import '../node_modules/material-design-icons/iconfont/material-icons.css';
import './css/style.css';
import galleryTpl from './templates/galleryTpl.hbs';
import SearchService from './js/apiService';
import _ from 'lodash';
import clearMarkup from './js/clearMarkup';
// import * as basicLightbox from 'basiclightbox';

const refs = {
  gallery: document.querySelector('.gallery'),
  loadMoreBtn: document.querySelector('.load-more-btn'),
  searchQuery: document.querySelector('.search-input'),
};

refs.loadMoreBtn.disabled = true;

const searchService = new SearchService();

function createGalleryCardsMarkup(data) {
  const hits = data.hits;
  return galleryTpl(hits);
}

function renderGalleryCards(markup) {
  refs.gallery.insertAdjacentHTML('beforeend', markup);
}

// function search() {
//   if (refs.searchQuery.value === '') {
//     clearMarkup();
//     refs.loadMoreBtn.disabled = true;
//   } else {
//     searchService.searchQuery = refs.searchQuery.value;
//     searchService.resetPage();
//     clearMarkup();
//     searchService
//       .fetchImagesByName()
//       .then(data => createGalleryCardsMarkup(data))
//       .then(markup => renderGalleryCards(markup));
//     refs.loadMoreBtn.disabled = false;
//   }
// }
function search() {
  if (refs.searchQuery.value === '') {
    clearMarkup();
    refs.loadMoreBtn.disabled = true;
  } else {
    searchService.searchQuery = refs.searchQuery.value;
    searchService.resetPage();
    clearMarkup();
    searchService
      .fetchImagesByName()
      .then(data => createGalleryCardsMarkup(data))
      .then(markup => renderGalleryCards(markup));
    refs.loadMoreBtn.disabled = false;
  }
}

function loadMore() {
  searchService
    .fetchImagesByName()
    .then(data => createGalleryCardsMarkup(data))
    .then(markup => renderGalleryCards(markup))
    .then(() => {
      setTimeout(() => {
        refs.loadMoreBtn.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }, 500);
    });
}

refs.searchQuery.addEventListener('input', _.debounce(search, 600));
refs.loadMoreBtn.addEventListener('click', loadMore);

// document.querySelector('.photo-item').onclick = () => {
//   basicLightbox
//     .create(
//       `
// 		<img width="1400" height="900" src="https://placehold.it/1400x900">
// 	`,
//     )
//     .show();
// };
