const API_KEY = '21804857-e4d02e1e62ab2bb6123c0439f';
const BASE_URL = 'https://pixabay.com/api/?image_type=photo&orientation=horizontal';

export default class SearchService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  async fetchImagesByName() {
    const response = await fetch(
      `${BASE_URL}l&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${API_KEY}`,
    );
    const result = await response.json();
    this.page += 1;
    return result;
  }

  resetPage() {
    this.page = 1;
  }
}
