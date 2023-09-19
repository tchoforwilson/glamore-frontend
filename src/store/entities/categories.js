import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "../apiCall";
import { createQuery } from "../../utilities/functions";

const slice = createSlice({
  name: "categories",
  initialState: {
    list: [],
    loading: false,
    error: null,
    currentCategory: null,
  },
  reducers: {
    GET_CATEGORIES_REQUESTED: (categories) => {
      categories.loading = true;
    },
    GET_CATEGORIES_SUCCESS: (categories, action) => {
      categories.list = action.payload.data;
      categories.loading = false;
    },
    GET_CATEGORIES_FAILED: (categories, action) => {
      categories.loading = false;
    },
  },
});

export const {
  GET_CATEGORIES_REQUESTED,
  GET_CATEGORIES_SUCCESS,
  GET_CATEGORIES_FAILED,
} = slice.actions;

/**
 * @breif Action creators
 */

const URL = "/categories";

/**
 * @breif Dispatch action to get all categories
 * @param {Object} searchQuery
 * @returns
 */
export const getAllCategories = (searchQuery) => {
  let query = createQuery(searchQuery);
  return apiCallBegan({
    url: `${URL}?${query}`,
    onStart: GET_CATEGORIES_REQUESTED.type,
    onSuccess: GET_CATEGORIES_SUCCESS.type,
    onError: GET_CATEGORIES_FAILED.type,
  });
};

export default slice.reducer;
