import { createSlice } from "@reduxjs/toolkit/";

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    favoritesArray: [],
  },
  reducers: {
    save: (state, action) => {
      state.favoritesArray = action.payload;
    },
  },
});

export const { save } = favoritesSlice.actions;

export default favoritesSlice.reducer;
