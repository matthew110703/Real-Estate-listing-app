import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://zoopla.p.rapidapi.com`,
    prepareHeaders: (headers) => {
      headers.set("x-rapidapi-key", import.meta.env.VITE_RAPIDAPI_KEY);
      headers.set("x-rapidapi-host", "zoopla.p.rapidapi.com");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getProperties: builder.query({
      query: (params) => ({
        url: "/properties/v2/list",
        params,
      }),
    }),
    getProperty: builder.query({
      query: (id) => ({
        url: "/properties/v2/detail",
        params: { listingId: id },
      }),
    }),
    autocomplete: builder.query({
      query: (search) => ({
        url: "/v2/auto-complete",
        params: { locationPrefix: search },
      }),
    }),
  }),
});

export const {
  useGetPropertiesQuery,
  useGetPropertyQuery,
  useAutocompleteQuery,
} = apiSlice;
export default apiSlice.reducer;
