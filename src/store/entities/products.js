import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "../apiCall";
import { createQuery } from "../../utilities/functions";

const slice = createSlice({
  name: "products",
  initialState: {
    list: [],
    loading: false,
    error: null,
  },
  reducers: {
    PRODUCTS_REQUESTED: (products) => {
      products.loading = true;
    },
    PRODUCTS_RECEIVED: (products, action) => {
      products.list = action.payload.data;
      products.loading = false;
    },
    PRODUCTS_REQUEST_FAILED: (products, action) => {
      products.loading = false;
      products.error = action.payload.message;
    },
  },
});

export const {
  PRODUCTS_REQUESTED,
  PRODUCTS_RECEIVED,
  PRODUCTS_REQUEST_FAILED,
} = slice.actions;

// Action creators

const URL = "/products";

/**
 * @breif Fetch all products from the database
 * @param {Object} searchQuery Search qquery object
 * @returns {promise} Promise
 */
export const getAllProducts = (searchQuery) => (dispatch) => {
  let query = createQuery(searchQuery);

  dispatch(
    apiCallBegan({
      url: `${URL}/${query}`,
      onStart: PRODUCTS_REQUESTED.type,
      onSuccess: PRODUCTS_RECEIVED.type,
      onError: PRODUCTS_REQUEST_FAILED.type,
    })
  );
};

export default slice.reducer;
