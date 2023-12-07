import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./auth";
import entitiesReducer from "./entities";
import productsApi from "./entities/products.api";
import categoriesApi from "./entities/categories.api";
import authApi from "./entities/auth.api";

export default combineReducers({
  entities: entitiesReducer,
  auth: authReducer,
  [productsApi.reducerPath]: productsApi.reducer,
  [categoriesApi.reducerPath]: categoriesApi.reducer,
  [authApi.reducerPath]: authApi.reducer,
});
