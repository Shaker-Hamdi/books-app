import { createStore, applyMiddleware, compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./rootReducer";
import thunk from "redux-thunk";

export const configureStore = perloadedState => {
    const middlewares = [thunk];
    const middelwareEnhancer = applyMiddleware(...middlewares);

    const storeEnhancer = [middelwareEnhancer];

    let composedEnhancer;

    if (process.env.NODE_ENV !== "production") {
        composedEnhancer = composeWithDevTools(...storeEnhancer);
    } else {
        composedEnhancer = compose(...storeEnhancer);
    }

    const store = createStore(rootReducer, perloadedState, composedEnhancer);

    return store;
};
