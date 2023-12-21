import { configureStore } from "@reduxjs/toolkit";
import NewsSlice from "./news";
import UserSlice from "./users";
export const store = configureStore({
  reducer: {
    news: NewsSlice,
    users: UserSlice,
  },
}); 