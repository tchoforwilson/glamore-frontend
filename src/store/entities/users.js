import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "../apiCall";

const slice = createSlice({
  name: "users",
  initialState: {
    list: [],
    favorites: [],
    follows: [],
    items: [],
    currentUser: null,
    error: null,
    favoritesLoading: false,
    followsLoading: false,
    getMeLoading: false,
    getUsersLoading: false,
    getUserLoading: false,
  },
  reducers: {
    // Current user
    GET_ME_BEGIN: (users) => {
      users.getMeLoading = true;
    },
    GET_ME_SUCCESS: (users, action) => {
      users.currentUser = action.payload.data.user;
      users.getMeLoading = false;
    },
    GET_ME_FAILED: (users, action) => {
      users.getMeLoading = false;
      users.error = action.payload.message;
    },
    // Favorites
    GET_FAVORITES_BEGIN: (users) => {
      users.favoritesLoading = true;
    },
    GET_FAVORITES_SUCCESS: (users, action) => {
      users.favorites = action.payload.data;
      users.favoritesLoading = false;
    },
    GET_FAVORITES_FAILED: (users, action) => {
      users.favoritesLoading = false;
      users.error = action.payload.message;
    },

    // Follows
    GET_FOLLOWS_BEGIN: (users) => {
      users.followsLoading = true;
    },
    GET_FOLLOWS_SUCCESS: (users, action) => {
      users.follows = action.payload.data;
      users.followsLoading = false;
    },
    GET_FOLLOWS_FAILED: (users, action) => {
      users.followsLoading = false;
      users.error = action.payload.message;
    },

    // Get user
    GET_USER_BEGIN: (users) => {
      users.getUserLoading = true;
      users.currentUser = null;
    },
    GET_USER_SUCCESS: (users, action) => {
      users.currentUser = action.payload.data;
      users.getUserLoading = false;
    },
    GET_USER_FAILED: (users, action) => {
      users.currentUser = null;
      users.error = action.payload?.message;
    },
  },
});

export const {
  GET_ME_BEGIN,
  GET_ME_SUCCESS,
  GET_ME_FAILED,

  GET_FAVORITES_BEGIN,
  GET_FAVORITES_SUCCESS,
  GET_FAVORITES_FAILED,

  GET_FOLLOWS_BEGIN,
  GET_FOLLOWS_SUCCESS,
  GET_FOLLOWS_FAILED,

  GET_USER_BEGIN,
  GET_USER_SUCCESS,
  GET_USER_FAILED,
} = slice.actions;

// Action creators

const url = "/users";

export const getMe = () =>
  apiCallBegan({
    url: `${url}/me`,
    onStart: GET_ME_BEGIN.type,
    onSuccess: GET_ME_SUCCESS.type,
    onError: GET_ME_FAILED.type,
  });

/**
 * @breif Get user favorites items
 * @param {String} id  user id
 * @returns
 */
export const getMyfavorites = (id) =>
  apiCallBegan({
    url: `${url}/${id}/my-favorites`,
    onStart: GET_FAVORITES_BEGIN.type,
    onSuccess: GET_FAVORITES_SUCCESS.type,
    onError: GET_FAVORITES_FAILED.type,
  });

/**
 * @brief Get stores/shops user follows
 * @param {String} id user id
 * @returns
 */
export const getMyShops = (id) =>
  apiCallBegan({
    url: `${url}/${id}/my-shops`,
    onStart: GET_FOLLOWS_BEGIN.type,
    onSuccess: GET_FOLLOWS_SUCCESS.type,
    onError: GET_FOLLOWS_FAILED.type,
  });

/**
 * @breif Get a single user by id
 * @param {String} id user id
 * @returns
 */
export const getUser = (id) =>
  apiCallBegan({
    url: `${url}/${id}`,
    onStart: GET_USER_BEGIN.type,
    onSuccess: GET_USER_SUCCESS.type,
    onError: GET_USER_FAILED.type,
  });

export default slice.reducer;
