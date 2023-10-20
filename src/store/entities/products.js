import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "../apiCall";
import { createQuery } from "../../utilities/functions";

const slice = createSlice({
  name: "products",
  initialState: {
    list: [],
    currentProduct: null,
    error: null,
    count: 0,
    loading: false,
    addProductLoading: false,
    getProductLoading: false,
  },
  reducers: {
    // Get products
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

    // Add product
    ADD_PRODUCT_BEGIN: (products) => {
      products.addProductLoading = true;
      products.currentProduct = null;
    },
    ADD_PRODUCT_SUCCESS: (products, action) => {
      products.list.push(action.payload.data);
      products.currentProduct = action.payload.data;
      products.addProductLoading = false;
    },
    ADD_PRODUCT_FAILED: (products, action) => {
      products.addProductLoading = false;
      products.error = action.payload.message;
    },

    // Get product
    GET_PRODUCT_BEGIN: (products, action) => {
      products.currentProduct = null;
      products.error = null;
      products.getProductLoading = true;
    },
    GET_PRODUCT_SUCCESS: (products, action) => {
      products.currentProduct = action.payload.data;
      products.getProductLoading = false;
    },
    GET_PRODUCT_FAILED: (products, action) => {
      products.currentProduct = null;
      products.error = action.payload.message;
      products.getProductLoading = false;
    },

    // Get product count
    GET_PRODUCTS_COUNT: (products, action) => {
      products.count = action.payload.data;
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

  GET_PRODUCT_BEGIN,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_FAILED,

  GET_PRODUCTS_COUNT,
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
 * @param {Object} data Product object to be added.
 * @returns
 */
export const addProduct = (data) =>
  apiCallBegan({
    url: URL,
    data,
    onStart: ADD_PRODUCT_BEGIN.type,
    onSuccess: ADD_PRODUCT_SUCCESS.type,
    onError: ADD_PRODUCT_FAILED.type,
  });

/**
 * @breif Get a product from the database
 * @param {String} id Product id
 * @returns
 */
export const getProduct = (id) =>
  apiCallBegan({
    url: `${URL}/${id}`,
    onStart: GET_PRODUCT_BEGIN.type,
    onSuccess: GET_PRODUCT_SUCCESS.type,
    onError: GET_PRODUCT_FAILED.type,
  });

/**
 * @breif Count the number of products in the database
 * @param {Object} countQuery Count query parameters
 */
export const getProuctsCount = (countQuery) => {
  const query = createQuery(countQuery);
  return apiCallBegan({
    url: `${URL}/count?${query}`,
    onSuccess: GET_PRODUCTS_COUNT.type,
  });
};

export default slice.reducer;
