import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "../apiCall";
import { createQuery } from "../../utilities/functions";

const slice = createSlice({
  name: "stores",
  initialState: {
    list: [],
    currentStore: null,
    storeProducts: [],
    error: null,
    loading: false,
    count: 0,
    addStoreLoading: false,
    updateStoreLoading: false,
    getStoreLoading: false,
    deleteStoreLoading: false,
    getStoreProductsLoading: false,
  },
  reducers: {
    // Get all stores
    STORES_REQUESTED: (stores, action) => {
      stores.loading = true;
      stores.list = [];
    },
    STORES_RECEIVED: (stores, action) => {
      stores.list = action.payload.data;
      stores.loading = false;
    },
    STORES_REQUEST_FAILED: (stores, action) => {
      stores.list = [];
      stores.loading = false;
      stores.error = action.payload.message;
    },

    // Add new store
    ADD_STORE_BEGIN: (stores) => {
      stores.addStoreLoading = true;
      stores.error = null;
    },
    ADD_STORE_SUCCESS: (stores, action) => {
      stores.list.push(action.payload.data);
      stores.addStoreLoading = false;
    },
    ADD_STORE_FAILED: (stores, action) => {
      stores.error = action.payload.message;
      stores.addStoreLoading = false;
    },

    // Get Store

    GET_STORE_BEGIN: (stores, action) => {
      stores.currentStore = null;
      stores.error = action.payload.message;
      stores.getStoreLoading = true;
    },
    GET_STORE_SUCCESS: (stores, action) => {
      stores.currentStore = action.payload.data;
      stores.getStoreLoading = false;
    },
    GET_STORE_FAILED: (stores, action) => {
      stores.error = action.payload.message;
      stores.getStoreLoading = false;
    },

    // Get store products
    GET_STORE_PRODUCTS_BEGIN: (stores) => {
      stores.getStoreProductsLoading = true;
    },

    GET_STORE_PRODUCTS_SUCCESS: (stores, action) => {
      stores.storeProducts = action.payload.data;
      stores.getStoreProductsLoading = false;
    },
    GET_STORE_PRODUCTS_FAILED: (stores, action) => {
      stores.getStoreProductsLoading = false;
      stores.error = action.payload?.message;
    },

    // Get store counts
    GET_STORES_COUNT: (stores, action) => {
      stores.count = action.payload.data;
    },
  },
});

export const {
  STORES_REQUESTED,
  STORES_RECEIVED,
  STORES_REQUEST_FAILED,

  ADD_STORE_BEGIN,
  ADD_STORE_SUCCESS,
  ADD_STORE_FAILED,

  GET_STORE_BEGIN,
  GET_STORE_SUCCESS,
  GET_STORE_FAILED,

  GET_STORE_PRODUCTS_BEGIN,
  GET_STORE_PRODUCTS_SUCCESS,
  GET_STORE_PRODUCTS_FAILED,

  GET_STORES_COUNT,
} = slice.actions;

// Action creators

const url = "/stores";

/**
 * @breif Fetch all stores from the database
 * @param {Object} searchQuery Search query object
 * @returns {promise} Promise
 */
export const getAllStores = (searchQuery) => (dispatch) => {
  let query = createQuery(searchQuery);

  dispatch(
    apiCallBegan({
      url: `${url}/${query}`,
      onStart: STORES_REQUESTED.type,
      onSuccess: STORES_RECEIVED.type,
      onError: STORES_REQUEST_FAILED.type,
    })
  );
};

/**
 * @breif Add a new store
 * @param {Object} store store object to be added.
 * @returns
 */
export const addProduct = (store) =>
  apiCallBegan({
    url: url,
    data: store,
    onStart: ADD_STORE_BEGIN.type,
    onSuccess: ADD_STORE_SUCCESS.type,
    onError: ADD_STORE_FAILED.type,
  });

/**
 * @breif Get the current store using it id
 * @param {String} id Store id string
 * @returns {promise}
 */
export const getStore = (id) =>
  apiCallBegan({
    url: `${url}/${id}`,
    onStart: GET_STORE_BEGIN.type,
    onSuccess: GET_STORE_SUCCESS.type,
    onError: GET_STORE_FAILED.type,
  });

/**
 * @breif Get all stores products
 * @param {String} id Store id
 * @returns
 */
export const getStoreProducts = (id) =>
  apiCallBegan({
    url: `${url}/${id}/products`,
    onStart: GET_STORE_PRODUCTS_BEGIN.type,
    onSuccess: GET_STORE_PRODUCTS_SUCCESS.type,
    onError: GET_STORE_PRODUCTS_FAILED.type,
  });

/**
 * @breif Get the number of stores in the database
 * @param {Object} countQuery Count query parameters
 * @returns
 */
export const getStoresCount = (countQuery) => {
  let query = createQuery(countQuery);

  return apiCallBegan({
    url: `${url}/count?${query}`,
    onSuccess: GET_STORES_COUNT.type,
  });
};

export default slice.reducer;
