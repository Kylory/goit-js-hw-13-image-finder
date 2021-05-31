import '../node_modules/material-design-icons/iconfont/material-icons.css';
import './css/style.css';
import SearchService from './js/apiService';
import createGalleryCardsMarkup from './js/createGalleryCardsMarkup';
import renderGalleryCards from './js/renderGalleryCards';
import { refs } from './js/refs';
// import _ from 'lodash';
import clearMarkup from './js/clearMarkup';
import '../node_modules/basiclightbox/dist/basicLightbox.min.css';
import showFullImage from './js/showFullImage';

const searchService = new SearchService();

function search(event) {
  event.preventDefault();
  if (event.currentTarget.elements.query.value == '') {
    clearMarkup();

    refs.loadMoreBtn.classList.toggle('is-hidden');
  } else {
    searchService.searchQuery = event.currentTarget.elements.query.value;
    searchService.resetPage();
    clearMarkup();

    searchService
      .fetchImagesByName()
      .then(data => createGalleryCardsMarkup(data))
      .then(markup => renderGalleryCards(markup))
      .catch(error => console.log(error));

    refs.loadMoreBtn.classList.toggle('is-hidden');
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

refs.searchQuery.addEventListener('submit', search);
refs.loadMoreBtn.addEventListener('click', loadMore);
refs.gallery.addEventListener('click', showFullImage);
