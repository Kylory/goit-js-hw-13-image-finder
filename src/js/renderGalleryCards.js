import { refs } from './refs';

export default function renderGalleryCards(markup) {
  refs.gallery.insertAdjacentHTML('beforeend', markup);
}
