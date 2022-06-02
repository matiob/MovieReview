import axios from "axios";
import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";

export const sendRegisterRequest = createAsyncThunk("REGISTER", (body) => {
  return axios.post("/api/users/register", body).then((res) => res.data);
});

export const sendLoginRequest = createAsyncThunk("LOGIN", (body) => {
  return axios.post("/api/users/login", body).then((res) => res.data);
});

export const sendLogoutRequest = createAsyncThunk("LOGOUT", () => {
  return axios.post("/api/users/logout").then((res) => res.data);
});

export const getUserLoggedRequest = createAsyncThunk("LOGGED", (id) => {
  return axios
    .get(`/api/users/me`)
    .then((res) => res.data)
});

export const getSingleUserRequest = createAsyncThunk("SINGLE_USER", (id) => {
  return axios
    .get(`/api/users/${id}`)
    .then((res) => res.data)
});

const userReducer = createReducer({}, {
  [sendRegisterRequest.fulfilled]: (state, action) => action.payload,
  [sendLoginRequest.fulfilled]: (state, action) => action.payload,
  [sendLogoutRequest.fulfilled]: (state, action) => action.payload,
  [getSingleUserRequest.fulfilled]: (state, action) => action.payload,
  [getUserLoggedRequest.fulfilled]: (state, action) => action.payload,
});

export default userReducer;