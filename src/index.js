import '../node_modules/material-design-icons/iconfont/material-icons.css';
import './css/style.css';
import SearchService from './js/apiService';
import createGalleryCardsMarkup from './js/createGalleryCardsMarkup';
import renderGalleryCards from './js/renderGalleryCards';
import { refs } from './js/refs';
import _ from 'lodash';
import clearMarkup from './js/clearMarkup';
import '../node_modules/basiclightbox/dist/basicLightbox.min.css';
import showFullImage from './js/showFullImage';

refs.loadMoreBtn.disabled = true;

const searchService = new SearchService();

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
      .then(markup => renderGalleryCards(markup))
      .catch(error => console.log(error));

    refs.loadMoreBtn.disabled = false;
  }
}

function loadMore() {
  searchService
    .fetchImagesByName()
    .then(data => createGalleryCardsMarkup(data))
    .then(markup => renderGalleryCards(markup))
    .catch(error => console.log(error));

  setTimeout(() => {
    window.scrollTo({
      top: 1000000,
      behavior: 'smooth',
    });
  }, 600);
}

refs.searchQuery.addEventListener('input', _.debounce(search, 600));
refs.loadMoreBtn.addEventListener('click', loadMore);
refs.gallery.addEventListener('click', showFullImage);
