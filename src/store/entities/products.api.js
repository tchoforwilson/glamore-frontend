import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_URL } from "../../configurations/config";
import qs from "qs";

const productsApi = createApi({
  // The path the will be used as name in the redux store
  reducerPath: "products",

  // the base query for all the endpoints
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),

  // Strings representing the various models the current query interacts with
  tagTypes: ["Product", "Review"],

  // The various endpoints from which the frontend will interact with
  endpoints: (builder) => ({
    // Enpoint to fetch all products
    getProducts: builder.query({
      query: (params) => ({
        url: "/products",
        method: "GET",
        params: qs.stringify(params),
      }),
      providesTags: (result) =>
        result?.data.length
          ? [
              ...result?.data.map((product) => ({
                type: "Product",
                id: product.id,
              })),
              { type: "Product", id: "LIST" },
            ]
          : [{ type: "Product", id: "LIST" }],
    }),

    // Get a single product from the database using it id
    getProduct: builder.query({
      query: (id) => `products/${id}`,
      providesTags: ["Product"], // Tells the query that it should provide the "Product" tag and should be autorefetched on invalidation by another endpoint
    }),

    // Create a product
    createProduct: builder.mutation({
      query: ({ shopId, ...filters }) => ({
        url: "/products",
        method: "POST",
        body: { shopId, filters },
      }),
      invalidateTags: ["Product"], // Tells the query that this endpoint is going to modify a "Product" from the backend
    }),


    // Get Product Reviews
    getProductReviews: builder.query({
      query: (productID) => ({
        url: `products/${productID}/reviews`,
        method: "GET"
      }),
      providesTags: (result) => 
        result?.data?.length 
          ? [ ...result?.data.map((review) => ({ type: "Review", id: review.id })) ] 
          : [ { type: "Review", id: "LIST" } ]
    })
  }),
});

export const { useGetProductsQuery, useGetProductQuery, useCreateProductMutation, useGetProductReviewsQuery } = productsApi;

export default productsApi;
