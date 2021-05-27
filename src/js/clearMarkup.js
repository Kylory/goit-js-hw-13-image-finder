const refs = {
  gallery: document.querySelector('.gallery'),
};

export default function clearMarkup() {
  refs.gallery.innerHTML = '';
}
