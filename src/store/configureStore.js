import { configureStore } from "@reduxjs/toolkit";
import { apiRequest, logger, toastify } from "./middlewares";
import reducer from "./reducer";
import productsApi from "./entities/products.api";
import categoriesApi from "./entities/categories.api";
import authApi from "./entities/auth.api";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

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

setupListeners(store.dispatch);

export default store;
