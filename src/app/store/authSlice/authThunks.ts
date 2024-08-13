import { createAsyncThunk } from "@reduxjs/toolkit";
import { loginUser } from "./authServices";
import { Login } from "@/types";
import { account } from "../../../../appwrite";
import { isLoading, setError, setUser } from "./authSlice";
import { getUserById } from "../../../../sudoAppwrite";

const login = createAsyncThunk(
  "auth/login",
  async ({ email, password }: Login, { dispatch, rejectWithValue }) => {
    // try {
    //     const response = await loginUser({ email, password });
    //     return response;
    // } catch (error: any) {
    //     return rejectWithValue(error.message);
    // }
    try {
      const data = await account.createEmailPasswordSession(email, password);
      const userData = await getUserById('66bb734ac221e8cfd38a')
      console.log(data)
      return data
    } catch (error: any) {
      console.log(error.message);
      return rejectWithValue(error.message)
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

export { login, fetchCurrentUser };
