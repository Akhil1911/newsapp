import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const SERV_LINK = "http://localhost";


export const fetchPosts = createAsyncThunk(
  "news/fetchPosts",
  async ({ page = 1, limit = 3 }, { getState }) => {
    try {
      // http://localhost/posts?_page=2&_limit=3
      const prevState = getState().news;
      const res = await axios.get(
        `${SERV_LINK}/posts?_page=${page}&_limit=${limit}`
      );
      // console.log(page)
      return {
        item: [...prevState.articles.item, ...res.data],
        page: page,
      };
    } catch (error) {
      throw error;
    }
  }
);

export const fetchPostById = createAsyncThunk(
  "news/fetchPostById",
  async (id) => {
    try {
      const res = await axios.get(`${SERV_LINK}/posts/${id}`);
      return res.data;
    } catch (error) {
      // return {
      //   error: error.response.status,
      // };
      throw error;
    }
  }
);

export const addToNewsletter = createAsyncThunk(
  "users/addToNewsletter",
  async (data) => {
    try {
      const findUser = await axios.get(
        `${URL_SERV}/newsletter?email=${data.email}`
      );

      if (!Array.isArray(findUser.data) || !findUser.data.length) {
        const response = await axios({
          method: "POST",
          url: `${URL_SERV}/newsletter`,
          data: {
            email: data.email,
          },
        });

        return {
          newsletter: "added",
          email: response.data,
        };
      } else {
        return {
          newsletter: "failed",
        };
      }
    } catch (error) {
      throw error;
    }
  }
);

export const getLength = createAsyncThunk("news/getLength", async () => {
  try {
    const res = await axios.get(`${SERV_LINK}/posts`);
    return res.data;
  } catch (error) {
  }
});


