import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  locationValue: "Oxford, Oxfordshire",
  locationIdentifier: "oxford",
  page: 1,
  sortOrder: "newest_listings",
  priceMin: "",
  priceMax: "",
  propertySubType: "",
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setLocation: (state, action) => {
      state.locationValue = action.payload.locationValue;
      state.locationIdentifier = action.payload.locationIdentifier;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setSortOrder: (state, action) => {
      state.sortOrder = action.payload;
    },
    setPriceRange: (state, action) => {
      state.priceMin = action.payload.min;
      state.priceMax = action.payload.max;
    },
    setPropertyType: (state, action) => {
      state.propertySubType = action.payload;
    },
    resetFilter: (state) => {
      state.locationValue = "Oxford, Oxfordshire";
      state.locationIdentifier = "oxford";
      state.page = 1;
      state.sortOrder = "newest_listings";
      state.priceMin = "";
      state.priceMax = "";
      state.propertySubType = "";
    },
  },
});

export const {
  setLocation,
  setPage,
  setPriceRange,
  setSortOrder,
  setPropertyType,
  resetFilter,
} = filterSlice.actions;

export default filterSlice.reducer;
