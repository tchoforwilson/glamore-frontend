import { combineReducers } from "redux";
import categoriesReducer from "./categories";
import storesReducer from "./stores";
import usersReducer from "./users";
import authReducer from "../auth";

export default combineReducers({
  categories: categoriesReducer,
  stores: storesReducer,
  users: usersReducer,
  auth: authReducer,
});
