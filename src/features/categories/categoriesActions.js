import { LOAD_CATEGORIES } from "./categoriesConstants";
import axios from "axios";

export const loadCategoies = data => {
    return {
        type: LOAD_CATEGORIES,
        payload: data
    };
};

export const asyncLoadCategories = () => {
    return async dispatch => {
        const response = await axios.get("books.json");
        const data = response.data.categories;
        dispatch(loadCategoies(data));
    };
};
