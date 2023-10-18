import { configureStore } from "@reduxjs/toolkit";
import headerSettingsReducer from "./headerSettingsSlice";

export default configureStore({
  reducer: {
    headerSettings: headerSettingsReducer,
  },
});
