import { createStore, combineReducers } from "redux";
import carsReducer from "./cars/reducer";

const rootReducer = combineReducers({ cars: carsReducer });
const store = createStore(rootReducer);

export { store };
export { default as carsAction } from "./cars/action";