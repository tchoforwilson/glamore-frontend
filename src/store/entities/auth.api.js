import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_URL } from "../../configurations/config";

const authApi = createApi({
  reducerPath: "auth",

  baseQuery: fetchBaseQuery({ baseUrl: `${API_URL}/auth` }),

  tagTypes: ["User"],

  endpoints: (builder) => ({
    signUp: builder.mutation({
      query: (body) => ({
        url: "signup",
        method: "POST",
        body: body,
      }),
    }),

    login: builder.mutation({
      query: (credentials) => ({
        url: "login",
        method: "POST",
        body: credentials,
      }),
    }),

    logout: builder.mutation({
      query: () => ({
        url: "logout",
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }),
    }),
  }),
});

export const { useSignUpMutation, useLoginMutation, useLogoutMutation } =
  authApi;

export default authApi;
