import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./auth";
import entitiesReducer from "./entities";
import productsApi from "./entities/products.api";

export default combineReducers({
  entities: entitiesReducer,
  auth: authReducer,
  [productsApi.reducerPath]: productsApi.reducer,
});
