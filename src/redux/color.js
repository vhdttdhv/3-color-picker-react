import { createSlice } from "@reduxjs/toolkit";

export const color = createSlice({
  name: "color",
  initialState: {
    value: "#00d8ff",
  },
  reducers: {
    changeColor: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeColor } = color.actions;

export default color.reducer;
