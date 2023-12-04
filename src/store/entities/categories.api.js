import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_URL } from "../../configurations/config";
import qs from "qs";

const categoriesApi = createApi({
  reducerPath: "categories",

  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),

  tagTypes: ["Category"],

  endpoints: (builder) => ({
    // Get all categories from the backend
    getCategories: builder.query({
      query: (params) => ({
        url: "/categories",
        method: "GET",
        params: qs.stringify(params),
      }),
      providesTags: (result) => {
        console.log("the value of result is", result);

        return result?.data.length
          ? [
              ...result?.data.map((category) => ({
                type: "Category",
                id: category._id,
              })),
            ]
          : [{ type: "Category", id: "LIST" }];
      },
    }),

    // Create a category
    createCategory: builder.mutation({
      query: (body) => ({
        url: "/categories",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Category"],
    }),
  }),
});

export const { useGetCategoriesQuery, useCreateCategoryMutation } =
  categoriesApi;

export default categoriesApi;
