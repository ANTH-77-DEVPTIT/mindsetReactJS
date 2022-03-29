import { createStore } from "redux";

import rootReducer from "./reducer";

let preloadedState;
const dataString = localStorage.getItem("products")

if(dataString) {
    preloadedState = {
        data: JSON.parse(dataString)
    }
}

const store = createStore(rootReducer, preloadedState);

export default store;
