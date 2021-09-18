import { configureStore } from "@reduxjs/toolkit";
import spacingReducer from "./spacing";
import blurReducer from "./blur";
import colorReducer from "./color";
export default configureStore({
  reducer: {
    spacing: spacingReducer,
    blur: blurReducer,
    color: colorReducer,
  },
});
