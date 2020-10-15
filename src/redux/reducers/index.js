import { combineReducers } from "redux";

// Reducers
import authorsReducer from "./authors";
import booksReducer from "./books";
import userReducer from "./user";

const rootReducer = combineReducers({
  authors: authorsReducer,
  books: booksReducer,
  user: userReducer
});

export default rootReducer;
