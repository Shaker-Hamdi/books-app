import { LOAD_CATEGORIES } from "./categoriesConstants";
import { createReducer } from "../../store/reducerUtil";

const initialState = {
    categories: []
};

export const loadCategories = (state, payload) => {
    return {
        ...state,
        categories: payload
    };
};

export default createReducer(initialState, {
    [LOAD_CATEGORIES]: loadCategories
});
