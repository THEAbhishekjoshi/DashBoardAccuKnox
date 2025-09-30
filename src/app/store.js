import categoriesReducer from "@/features/categories/categoriesSlice";
import { configureStore } from "@reduxjs/toolkit";

export default configureStore({
  reducer: {
    categories: categoriesReducer
  }
});
