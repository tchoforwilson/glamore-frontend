import { configureStore } from "@reduxjs/toolkit";
import { apiRequest, logger, toastify } from "./middlewares";
import reducer from "./reducer";
import productsApi from "./entities/products.api";
import categoriesApi from "./entities/categories.api";
import authApi from "./entities/auth.api";

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      productsApi.middleware,
      categoriesApi.middleware,
      authApi.middleware,
      logger,
      apiRequest,
      toastify,
    ]),
});

export default store;
