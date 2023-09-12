import { configureStore } from "@reduxjs/toolkit";
import { apiRequest, logger, toastify } from "./middlewares";
import reducer from "./reducer";

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(logger, apiRequest, toastify),
});

export default store;
