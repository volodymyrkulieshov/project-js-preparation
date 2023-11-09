import axios from 'axios';

export class API_SERVICE {
  #BASE_URL = 'https://books-backend.p.goit.global/';

  constructor(selectedCategory, bookId) {
    this.selectedCategory = selectedCategory;
    this.bookId = bookId;
  }
  booksListRequest() {
    return axios.get(`${this.#BASE_URL}books/category-list`);
  }
}
