import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "./apiCall";
import { getCookie, removeCookie, setCookie } from "../utilities/cookies";
import { authService } from "../services";
import authApi from "./entities/auth.api";

// Initialize the user token from the local storage or cookie settings
const userToken = localStorage.token || getCookie("token") || null;

// Initialize authentication
const isAuth = !!userToken;

// Current user
const currentUser = authService.getCurrentUser();

/**
 * @breif Authentication slices
 */

const slice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: isAuth,
    token: userToken,
    user: currentUser || null,
    loading: false,
    resetToken: false,
    error: null,
  },
  reducers: {
    AUTH_BEGIN: (auth) => {
      auth.loading = true;
    },
    AUTH_SUCCESS: (auth, action) => {
      auth.token = action.payload.token;
      localStorage.setItem("token", auth.token);
      setCookie("token", auth.token);
      auth.isAuthenticated = true;
      auth.loading = false;
    },
    AUTH_ERROR: (auth, action) => {
      auth.loading = false;
      auth.error = action.payload?.message;
    },

    AUTH_LOGOUT: (auth) => {
      auth.token = null;
      delete localStorage.token;
      removeCookie("token");
      auth.isAuthenticated = false;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(authApi.endpoints.signUp.matchPending, (state) => {
      state.loading = true;
    });

    builder.addMatcher(authApi.endpoints.signUp.matchRejected, (state) => {
      state.loading = false;
    });

    builder.addMatcher(
      authApi.endpoints.signUp.matchFulfilled,
      (state, action) => {
        state.isAuthenticated = true;
        state.loading = false;
        state.token = action.payload.token;
        state.user = action.payload.data.user;
      },
    );
  },
});

export const { AUTH_BEGIN, AUTH_SUCCESS, AUTH_ERROR } = slice.actions;

// Action creators

const url = "/auth";

/**
 * @breif The action creators should login the user after password and email are valid.
 * @param {Object} data Provide data for login with password and email.
 * @returns {Promise}
 */
export const login = (data) =>
  apiCallBegan({
    url: `${url}/login`,
    method: "post",
    data,
    onStart: AUTH_BEGIN.type,
    onSuccess: AUTH_SUCCESS.type,
    onError: AUTH_ERROR.type,
  });

/**
 * @breif Sign up a new user account to the platform.
 * @param {Object} data Provided user data whic are username, email,password and passwordConfirm.
 * @returns {Promise} Promise resolved
 */
export const signup = (data) =>
  apiCallBegan({
    url: `${url}/signup`,
    method: "post",
    data,
    onStart: AUTH_BEGIN.type,
    onSuccess: AUTH_SUCCESS.type,
    onError: AUTH_ERROR.type,
  });

export default slice.reducer;
