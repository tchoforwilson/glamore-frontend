import { configureStore } from "@reduxjs/toolkit";
import { apiRequest, logger, toastify } from "./middlewares";
import reducer from "./reducer";
import productsApi from "./entities/products.api";

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      productsApi.middleware,
      logger,
      apiRequest,
      toastify,
    ]),
});

export default store;
