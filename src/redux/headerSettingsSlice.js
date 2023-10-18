import { createSlice } from "@reduxjs/toolkit";

export const headerSettingsSlice = createSlice({
  name: "headerSettings",
  initialState: {
    showHeader: true,
    theme: "dark",
    title: "",
    fixed: false,
  },
  reducers: {},
});

// Action creators are generated for each case reducer function

export default headerSettingsSlice.reducer;
