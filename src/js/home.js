import axios from 'axios';
import { API_SERVICE } from './api-requests';

const api = new API_SERVICE();
// ----------------Отримання  масив обєктів з категоріями книг-----------------
async function getCategoryList() {
  try {
    const response = await api.booksListRequest();
    // console.log(response);
    const booksCategory = response.data;
    return console.log(booksCategory); //
  } catch (error) {
    console.log('Error');
  }
}
getCategoryList();

// -------------Отримання масиву обєктів з усіма книгами(бестселлери)-------

async function getTopBooks() {
  try {
    const response = await api.topBooksRequest();
    // console.log(response);
    const topBooks = response.data;
    console.log(topBooks);
    return topBooks;
  } catch (error) {
    console.log('Error');
  }
}
getTopBooks();

// async function getTopBooks() {
//   return await api.topBooksRequest().then(response => {
//     if (!response.ok) {
//       throw new Error(response.statusText);
//     }
//     return response.json();
//   });
