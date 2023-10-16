import { combineReducers } from "redux";
import categoriesReducer from "./categories";
import storesReducer from "./stores";
import productsReducer from "./products";
import usersReducer from "./users";

export default combineReducers({
  categories: categoriesReducer,
  stores: storesReducer,
  products: productsReducer,
  users: usersReducer,
});
