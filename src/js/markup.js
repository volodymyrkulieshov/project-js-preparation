import { API_SERVICE } from './api-requests';

const bookCollection = document.querySelector('.books-gallery');
const api = new API_SERVICE();

export default async function createMarkup(category) {
  const res = await api.categoryRequest(category);
  console.log(res);
  const books = await res.data;
  console.log(books);

  function removeLastWord(category) {
    let words = category.split(' ');
    words.pop();
    let result = words.join(' ');
    return result;
  }

  function LastWord(category) {
    var words = category.trim().split(' '); //Splitting sentence into words
    return words[words.length - 1]; //Returning the last word
  }

  function collectionMarkup() {
    return `<h1 class="collection-title">${removeLastWord(
      category
    )} <span>${LastWord(category)}</span></h1>
    <ul class="top-books rendering-gap js-list-rendering">

    ${books
      .map(({ title, book_image, author, _id }) => {
        return `<li class="book-card" data-id="${_id}">
        <div class="book-thumb">
      <img class="book-cover" src="${book_image}" alt="${title}">
      <div class="quick-view">
                <p class="quick-view-text">QUICK VIEW</p>
                </div>
                </div>
                <div class="book-descr">
      <h2 class="book-name">${title}</h2>
      <h3 class="book-author">${author}</h3>
      </div>
  </li>`;
      })
      .join('')}
    </ul>
    
    `;
  }

  bookCollection.innerHTML = collectionMarkup();
}
