import { refs } from './refs';
import { getTopBooks } from './api';
import { createGallery } from './books-render-functions';

const renderTopBooks = async () => {
  try {
    const categories = await getTopBooks();
    const allBooks = categories.flatMap(category => category.books);
    createGallery(allBooks.slice(15 - 23));
  } catch (error) {
    console.log(error);
  }
};

renderTopBooks();
