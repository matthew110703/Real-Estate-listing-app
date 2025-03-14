import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  message: "",
  type: "",
};

const toastSlice = createSlice({
  name: "toast",
  initialState,
  reducers: {
    setToast: (state, action) => {
      state.message = action.payload.message;
      state.type = action.payload.type;
    },
  },
});

export const { setToast } = toastSlice.actions;
export default toastSlice.reducer;
