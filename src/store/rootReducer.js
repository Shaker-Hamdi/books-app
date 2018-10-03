import { combineReducers } from "redux";
import booksReducer from "../features/books/booksReducer";
import categriesReducer from "../features/categories/categoriesReducer";

const rootReducer = combineReducers({
    books: booksReducer,
    categories: categriesReducer
});

export default rootReducer;
