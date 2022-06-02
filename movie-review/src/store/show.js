import axios from "axios";
import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";

export const getShowRequest = createAsyncThunk("SHOW", (id) => {
  return axios.get(`/api/shows/${id}`).then((res) => res.data);
});

const showReducer = createReducer({}, {
  [getShowRequest.fulfilled]: (state, action) => action.payload,
});

export default showReducer;
