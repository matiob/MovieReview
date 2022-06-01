import axios from "axios";
import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";

export const getSingleFavRequest = createAsyncThunk("FAVORITE", (id) => {
  return axios.get(`http://localhost:3001/api/favorites/one/${id}`).then((res) => res.data);
});

export const sendFavRequest = createAsyncThunk("SAVE", (favorite, thunkAPI) => {
  const { user } = thunkAPI.getState();
  const userId = user.id;
  return axios
    .post(`http://localhost:3001/api/favorites/${userId}`, favorite)
    .then((res) => res.data);
});

export const deleteFavRequest = createAsyncThunk("DELETE", (id) => {
  return axios.delete(`http://localhost:3001/api/favorites/${id}`).then((res) => res.data);
});

const singleFavReducer = createReducer(
  {},
  {
    [getSingleFavRequest.fulfilled]: (state, action) => action.payload,
    [sendFavRequest.fulfilled]: (state, action) => action.payload,
    [deleteFavRequest.fulfilled]: (state, action) => action.payload,
  }
);

export default singleFavReducer;
