import { configureStore } from "@reduxjs/toolkit";
import favoritesSlice from "./slices/favoritesSlice";

export default configureStore({
  reducer: {
    favorites: favoritesSlice,
  },
});
