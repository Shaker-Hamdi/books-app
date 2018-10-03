import { LOAD_BOOKS, GET_GETEGORY_BOOKS } from "./booksConstants";
import { createReducer } from "../../store/reducerUtil";

const initialState = {
    books: [],
    categoryBooks: []
};

export const loadBooks = (state, payload) => {
    return {
        ...state,
        books: payload
    };
};

export const getCategoryBooks = (state, payload) => {
    return {
        ...state,
        categoryBooks: state.books.filter(book => book.category === payload)
    };
};

export default createReducer(initialState, {
    [LOAD_BOOKS]: loadBooks,
    [GET_GETEGORY_BOOKS]: getCategoryBooks
});
