import { configureStore } from "@reduxjs/toolkit";
import { apiRequest, logger, toastify } from "./middlewares";
import reducer from "./reducer";
import productsApi from "./entities/products.api";

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      logger,
      apiRequest,
      toastify,
      productsApi.middleware,
    ),
});

export default store;
