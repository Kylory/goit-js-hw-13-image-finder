import galleryTpl from '../templates/galleryTpl.hbs';

export default function createGalleryCardsMarkup(data) {
  return galleryTpl(data.hits);
}
