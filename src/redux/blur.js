import { createSlice } from "@reduxjs/toolkit";

export const blur = createSlice({
  name: "blur",
  initialState: {
    value: 0,
  },
  reducers: {
    changeBlur: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeBlur } = blur.actions;

export default blur.reducer;
