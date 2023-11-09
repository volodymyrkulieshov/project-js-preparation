import axios from 'axios';
import { API_SERVICE } from './api-requests';

const api = new API_SERVICE();

async function getTopBooks() {
  return (response = await api.booksListRequest());
}
// getTopBooks();
