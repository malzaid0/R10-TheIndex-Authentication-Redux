import { SET_BOOKS, ADD_BOOK } from "./actionTypes";

import instance from "./instance";

export const fetchBooks = () => async dispatch => {
  try {
    const res = await instance.get("/api/books/");
    const books = res.data;
    dispatch({
      type: SET_BOOKS,
      payload: books
    });
  } catch (error) {
    console.error(error);
  }
};

export const postBook = (book, closeModal) => async dispatch => {
  try {
    const res = await instance.post("/api/books/", book);
    const newBook = res.data;
    closeModal();
    dispatch({
      type: ADD_BOOK,
      payload: newBook
    });
  } catch (error) {
    console.error(error.response.data);
  }
};
