import { SET_BOOKS, ADD_BOOK } from "../actions/actionTypes";

const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BOOKS:
      const books = action.payload;
      return books;

    case ADD_BOOK:
      const newBook = action.payload;
      return [...state, newBook];

    default:
      return state;
  }
};

export default reducer;
