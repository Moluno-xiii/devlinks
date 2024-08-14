import { createAsyncThunk } from "@reduxjs/toolkit";
import { loginUser, logoutUser } from "./authServices";
import { Login } from "@/types";
import { account } from "../../../../appwrite";
import { isLoading, setError, setUser } from "./authSlice";

const login = createAsyncThunk(
  "auth/login",
  async ({ email, password }: Login, { dispatch, rejectWithValue }) => {
    try {
      const data = await account.createEmailPasswordSession(email, password);
      const currentUser = await account.get();
      dispatch(setUser(currentUser));
      console.log(data);
      return data;
    } catch (error: any) {
      console.log(error.message);
      return rejectWithValue(error.message);
    }
  },
);

const logout = createAsyncThunk(
  "auth/logout",
  async (_,{ dispatch, rejectWithValue }) => {
    try {
      await logoutUser()
      dispatch(setUser(null));
    } catch (error: any) {
      console.log(error.message);
      return rejectWithValue(error.message);
    }
  },
);

const fetchCurrentUser = createAsyncThunk(
  "auth/fetchCurrentUser",
  async (_, { dispatch, rejectWithValue }) => {
    try {
      dispatch(isLoading());
      const user = await account.get();
      dispatch(setUser(user));
      return user;
    } catch (error: any) {
      // dispatch(setError(error.message))
      dispatch(setUser(null));
    }
  },
);

export { login, fetchCurrentUser, logout };
