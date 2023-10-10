import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "../apiCall";
import { createQuery } from "../../utilities/functions";

const slice = createSlice({
  name: "categories",
  initialState: {
    list: [],
    error: null,
    currentCategory: null,
    loading: false,
    count: 0,
    addCategoryLoading: false,
    getCategoryLoading: false,
    updateCategoryLoading: false,
    deleteCategoryLoading: false,
  },
  reducers: {
    GET_CATEGORIES_REQUESTED: (categories) => {
      categories.loading = true;
      categories.error = null;
    },
    GET_CATEGORIES_SUCCESS: (categories, action) => {
      categories.list = action.payload.data;
      categories.loading = false;
    },
    GET_CATEGORIES_FAILED: (categories, action) => {
      categories.loading = false;
      categories.error = action.payload.message;
    },

    ADD_CATEGORY_BEGIN: (categories, action) => {
      categories.addCategoryLoading = true;
      categories.error = null;
      categories.currentCategory = null;
    },
    ADD_CATEGORY_SUCCESS: (categories, action) => {
      categories.list.push(action.payload.data);
      categories.currentCategory = action.payload.data;
      categories.addCategoryLoading = false;
    },
    ADD_CATEGORY_FAILED: (categories, action) => {
      categories.addCategoryLoading = false;
      categories.error = action.payload.message;
    },

    GET_CATEGORIES_COUNT: (categories, action) => {
      categories.count = action.payload.data;
    },
  },
});

export const {
  GET_CATEGORIES_REQUESTED,
  GET_CATEGORIES_SUCCESS,
  GET_CATEGORIES_FAILED,

  ADD_CATEGORY_BEGIN,
  ADD_CATEGORY_SUCCESS,
  ADD_CATEGORY_FAILED,

  GET_CATEGORIES_COUNT,
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

/**
 * @breif Add a new product category t
 * @param {Object} category Category object to be added
 * @returns
 */
export const addCategory = (category) =>
  apiCallBegan({
    url: URL,
    data: category,
    onStart: ADD_CATEGORY_BEGIN.type,
    onSuccess: ADD_CATEGORY_SUCCESS.type,
    onError: ADD_CATEGORY_FAILED.type,
  });

/**
 * @breif Count the number of categories in the database
 * @param {Object} countQuery Count query object
 * @returns
 */
export const getCategoriesCount = (countQuery) => {
  const query = createQuery(countQuery);

  return apiCallBegan({
    url: `${URL}/count?${query}`,
    onSuccess: GET_CATEGORIES_COUNT.type,
  });
};

export default slice.reducer;
