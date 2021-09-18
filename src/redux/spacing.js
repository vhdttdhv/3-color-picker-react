import { createSlice } from "@reduxjs/toolkit";

export const spacing = createSlice({
  name: "spacing",
  initialState: {
    value: 4,
  },
  reducers: {
    changeSpacing: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeSpacing } = spacing.actions;

export default spacing.reducer;
