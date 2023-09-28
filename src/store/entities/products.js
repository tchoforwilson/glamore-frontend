import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "../apiCall";
import { createQuery } from "../../utilities/functions";

const slice = createSlice({
  name: "products",
  initialState: {
    list: [],
    currentProduct: null,
    error: null,
    loading: false,
    addCategoryLoading: false,
  },
  reducers: {
    PRODUCTS_REQUESTED: (products) => {
      products.loading = true;
      products.error = null;
    },
    PRODUCTS_RECEIVED: (products, action) => {
      products.list = action.payload.data;
      products.loading = false;
    },
    PRODUCTS_REQUEST_FAILED: (products, action) => {
      products.loading = false;
      products.error = action.payload.message;
    },

    ADD_PRODUCT_BEGIN: (products) => {
      products.addCategoryLoading = true;
      products.currentProduct = null;
    },
    ADD_PRODUCT_SUCCESS: (products, action) => {
      products.list.push(action.payload.data);
      products.currentProduct = action.payload.data;
      products.addCategoryLoading = false;
    },
    ADD_PRODUCT_FAILED: (products, action) => {
      products.addCategoryLoading = false;
      products.error = action.payload.message;
    },
  },
});

export const {
  PRODUCTS_REQUESTED,
  PRODUCTS_RECEIVED,
  PRODUCTS_REQUEST_FAILED,

  ADD_PRODUCT_BEGIN,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_FAILED,
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

/**
 * @breif Add a new product
 * @param {Object} product Product object to be added.
 * @returns
 */
export const addProduct = (product) =>
  apiCallBegan({
    url: URL,
    data: product,
    onStart: ADD_PRODUCT_BEGIN.type,
    onSuccess: ADD_PRODUCT_SUCCESS.type,
    onError: ADD_PRODUCT_FAILED.type,
  });

export default slice.reducer;
