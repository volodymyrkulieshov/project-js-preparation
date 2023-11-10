// import axios from 'axios';
import { API_SERVICE } from './api-requests';
import createMarkup from './markup';
const api = new API_SERVICE();

// ----------------Отримання  масив обєктів з категоріями книг-----------------
async function getBooksCategoryList() {
  try {
    const response = await api.booksGategoryListRequest();
    // console.log(response);
    const booksCategory = response.data;
    return booksCategory;
  } catch (error) {
    console.log('Error');
  }
}

const categoryList = document.querySelector('.category-list');
console.log(categoryList);

async function getBookGategoty() {
  const categories = await getBooksCategoryList();

  const markup = categories
    .map(
      category =>
        `<li class="book-category__list-item">${category.list_name}</li>`
    )
    .join('');
  categoryList.insertAdjacentHTML('beforeend', markup);
}
if (categoryList) {
  getBookGategoty();

  categoryList.addEventListener('click', onCategoryListSearchCategory);
}

async function onCategoryListSearchCategory(evt) {
  if (evt.target.nodeName !== 'LI') {
    return;
  }

  const category = evt.target.textContent;
  highlightCategory(category);

  if (category !== 'All categories') {
    await createMarkup(category);
  } else {
    await renderCategories();
  }
}

export function highlightCategory(category) {
  const items = document.querySelectorAll('.book-category__list-item');

  for (const item of items) {
    if (item.textContent === category) item.classList.add('active');
    else item.classList.remove('active');
  }
}

// -------------Отримання масиву обєктів з усіма книгами(бестселлери)-------

async function getTopBooks() {
  try {
    const response = await api.topBooksRequest();
    // console.log(response);
    const topBooks = response.data;
    // console.log(topBooks);
    return topBooks;
  } catch (error) {
    console.log('Error');
  }
}
getTopBooks();
// --------------Отримання масиву обєктів з кинжками обраної категорії----------

// async function getBooksByCategory() {
//   try {
//     const response = await api.categoryRequest(category);
//     // console.log(response);
//     const booksByCategory = response.data;
//     console.log(booksByCategory);
//     return booksByCategory;
//   } catch (error) {
//     console.log('Error');
//   }
// }
// getBooksByCategory();
