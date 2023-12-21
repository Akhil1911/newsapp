import { createSlice } from "@reduxjs/toolkit";
import { fetchPosts,fetchPostById,getLength } from "./Thunks/thunk";

export const NewsSlice = createSlice({
  name: "news",
  initialState: {
    loading: false,
    postsLen: 0,
    // error:"",
    articles: {
      item: [],
      singleItem: [],
    },
  },
  reducers: {
    
  },
  extraReducers: (builder) => {


    builder.addCase(fetchPosts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.loading = false;
      state.articles = action.payload;
    });
    builder.addCase(fetchPosts.rejected, (state, action) => {
      state.loading = false;
    });

    builder.addCase(fetchPostById.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchPostById.fulfilled, (state, action) => {
      state.loading = false;
      state.articles.singleItem = action.payload;
      // state.error = parseInt(action.payload.error)
    });
    builder.addCase(fetchPostById.rejected, (state, action) => {
      state.loading = false;
    });

    builder.addCase(getLength.fulfilled, (state, action) => {
        state.postsLen = action.payload.length;
    })

  },
});

export const { getNewsDetails } = NewsSlice.actions;
export default NewsSlice.reducer;
