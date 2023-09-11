import { configureStore } from "@reduxjs/toolkit";
import { apiRequest, logger, Toastify } from "./middlewares";
import reducer from "./reducer";

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(logger, Toastify, apiRequest),
});

export default store;
