import { createSlice } from "@reduxjs/toolkit";
import build from "next/dist/build";
import { login } from "./authThunks";

interface InitialStateProps {
  loading: boolean;
  errorMessage: string;
  isAuthenticated: boolean;
  user: any; // remember to set all the user props in user.ts
}

const initialState: InitialStateProps = {
  loading: false,
  errorMessage: "",
  isAuthenticated: false,
  user: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action) {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    logout(state) {
      state.isAuthenticated = false;
      state.user = null;
    },
    setError (state, action) {
        state.errorMessage = action.payload
        state.loading = false
    }
  },
  extraReducers: (builder) => {
    builder
        .addCase(login.pending, (state) => {
            state.loading = true;
            state.errorMessage = '';
        })
        .addCase(login.fulfilled, (state, action) => {
            state.loading = false;
            state.isAuthenticated = true;
            state.user = action.payload; 
            state.errorMessage = '';
        })
        .addCase(login.rejected, (state, action) => {
            state.loading = false;
            state.isAuthenticated = false;
            state.user = null;
            state.errorMessage = action.payload as string
        });
}
});

export default authSlice.reducer;

// login
// check authentication state
// logout user
// create account
// get current user session data
