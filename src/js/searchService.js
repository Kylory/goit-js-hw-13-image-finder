const API_KEY = '21804857-e4d02e1e62ab2bb6123c0439f';
const BASE_URL = 'https://pixabay.com/api/?image_type=photo&orientation=horizontal';

export default class SearchService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  fetchImagesByName() {
    return fetch(
      `${BASE_URL}l&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${API_KEY}`,
    ).then(response => {
      this.page += 1;
      return response.json();
    });
  }

  resetPage() {
    this.page = 1;
  }
}
