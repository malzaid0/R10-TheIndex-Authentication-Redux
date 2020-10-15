import { SET_AUTHORS, ADD_AUTHOR } from "./actionTypes";

import instance from "./instance";

export const fetchAuthors = () => async dispatch => {
  try {
    const res = await instance.get("/api/authors/");
    const authors = res.data;
    dispatch({
      type: SET_AUTHORS,
      payload: authors
    });
  } catch (error) {
    console.error(error);
  }
};

export const postAuthor = (author, closeModal) => async dispatch => {
  try {
    const res = await instance.post("/api/authors/", author);
    const newAuthor = res.data;
    closeModal();
    dispatch({
      type: ADD_AUTHOR,
      payload: newAuthor
    });
  } catch (error) {
    console.error(error.response.data);
  }
};
