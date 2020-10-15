import { SET_AUTHORS, ADD_AUTHOR } from "../actions";

const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTHORS:
      const authors = action.payload;
      return authors;

    case ADD_AUTHOR:
      const newAuthor = action.payload;
      return [newAuthor, ...state];

    default:
      return state;
  }
};

export default reducer;
