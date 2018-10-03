import { LOAD_BOOKS, GET_GETEGORY_BOOKS } from "./booksConstants";
import axios from "axios";

export const loadBooks = data => {
    return {
        type: LOAD_BOOKS,
        payload: data
    };
};

export const asyncLoadBooks = () => {
    return async dispatch => {
        const response = await axios.get("books.json");
        const data = response.data.books;
        dispatch(loadBooks(data));
    };
};

export const getCategoryBooks = categoryId => {
    return {
        type: GET_GETEGORY_BOOKS,
        payload: categoryId
    };
};
