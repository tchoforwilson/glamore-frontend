import { combineReducers } from "redux";
import categoriesReducer from "./categories";
import storesReducer from "./stores";
import productsReducer from "./products";
import usersReducer from "./users";
import productsApi from "./products.api";

export default combineReducers({
  categories: categoriesReducer,
  stores: storesReducer,
  users: usersReducer,
});
