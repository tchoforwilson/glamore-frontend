import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "../apiCall";
import { createQuery } from "../../utilities/functions";

const slice = createSlice({
  name: "orders",
  initialState: {
    list: [],
    currentOrder: null,
    error: null,
    loading: false,
    count: 0,
    addOrderLoading: false,
    updateOrderLoading: false,
    getOrderLoading: false,
    deleteOrderLoading: false,
  },
  reducers: {
    ORDERS_REQUESTED: (orders, action) => {
      orders.loading = true;
      orders.list = [];
    },
    ORDERS_RECEIVED: (orders, action) => {
      orders.list = action.payload.data;
      orders.loading = false;
    },
    ORDERS_REQUEST_FAILED: (orders, action) => {
      orders.list = [];
      orders.loading = false;
      orders.error = action.payload.message;
    },

    ADD_ORDER_BEGIN: (orders) => {
      orders.addOrderLoading = true;
      orders.error = null;
    },
    ADD_ORDER_SUCCESS: (orders, action) => {
      orders.list.push(action.payload.data);
      orders.addOrderLoading = false;
    },
    ADD_ORDER_FAILED: (orders, action) => {
      orders.error = action.payload.message;
      orders.addOrderLoading = false;
    },

    GET_ORDERS_COUNT: (orders, action) => {
      orders.count = action.payload.data;
    },
  },
});

export const {
  ORDERS_REQUESTED,
  ORDERS_RECEIVED,
  ORDERS_REQUEST_FAILED,

  ADD_ORDER_BEGIN,
  ADD_ORDER_SUCCESS,
  ADD_ORDER_FAILED,

  GET_ORDERS_COUNT,
} = slice.actions;

// Action creators

const URL = "/orders";

/**
 * @breif Fetch all orders from the database
 * @param {Object} searchQuery Search qquery object
 * @returns {promise} Promise
 */
export const getAllOrders = (searchQuery) => (dispatch) => {
  let query = createQuery(searchQuery);

  dispatch(
    apiCallBegan({
      url: `${URL}/${query}`,
      onStart: ORDERS_REQUESTED.type,
      onSuccess: ORDERS_RECEIVED.type,
      onError: ORDERS_REQUEST_FAILED.type,
    })
  );
};

/**
 * @breif Add a new order
 * @param {Object} order Order object to be added.
 * @returns
 */
export const addProduct = (order) =>
  apiCallBegan({
    url: URL,
    data: order,
    onStart: ADD_ORDER_BEGIN.type,
    onSuccess: ADD_ORDER_SUCCESS.type,
    onError: ADD_ORDER_FAILED.type,
  });

/**
 * @breif Get the number of orders in the database
 * @param {Object} countQuery Count query parameters
 * @returns
 */
export const getOrdersCount = (countQuery) => {
  let query = createQuery(countQuery);

  return apiCallBegan({
    url: `${URL}/count?${query}`,
    onSuccess: GET_ORDERS_COUNT.type,
  });
};

export default slice.reducer;
