import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const productsApi = createApi({
  // The path the will be used as name in the redux store
  reducerPath: "products",

  // the base query for all the endpoints
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:9000/" }),

  // Strings representing the various models the
  tagTypes: ["Product"],

  // The various endpoints from which the frontend will interact with
  endpoints: (builder) => ({
    // Enpoint to fetch all products
    getProducts: builder.query({
      query: () => "/products",
      providesTags: ["Product"],
    }),

    getProduct: builder.query({
      query: (id) => `products/${id}`,
      providesTags: ["Product"],
    }),
  }),
});

export const { useGetProductsQuery, useGetProductQuery } = productsApi;

export default productsApi;
