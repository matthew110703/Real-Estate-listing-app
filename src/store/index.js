import { configureStore } from "@reduxjs/toolkit";

// Reducers
import toastReducer from "./toastSlice";
import filterReducer from "./filterSlice";
import { apiSlice } from "./apiSlice";

const store = configureStore({
  reducer: {
    toast: toastReducer,
    filter: filterReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export default store;
