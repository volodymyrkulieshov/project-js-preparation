import axios from 'axios';

export class API_SERVICE {
  #BASE_URL = 'https://books-backend.p.goit.global/';

  constructor(selectedCategory, bookId) {
    this.selectedCategory = selectedCategory;
    this.bookId = bookId;
  }
  // -------------Запит на категорії-----------------------------
  booksGategoryListRequest() {
    return axios.get(`${this.#BASE_URL}books/category-list`);
  }

  // ---------------Запит на ТОП книги(бестселлери)-----------------

  topBooksRequest() {
    return axios.get(`${this.#BASE_URL}books/top-books`);
  }

  // -------------Запит на категорію книги (категорії в сайд барі і по кнопці see more) -----------------

  categoryRequest() {
    return axios.get(
      `${this.#BASE_URL}books/category?category=${selectedCategory}`
    );
  }

  bookIdRequest() {
    return axios.get(`${this.#BASE_URL}books/${this.bookId}`);
  }
}
