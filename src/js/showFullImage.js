import * as basicLightbox from 'basiclightbox';

export default function showFullImage(e) {
  if (e.target.classList.contains('photo-item')) {
    const instance = basicLightbox.create(`
      <img src="${e.target.dataset.source}">
  `);
    instance.show();
  }
}
