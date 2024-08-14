import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import build from "next/dist/build";
import { login as loginUser} from "./authThunks";
import { StaticImageData } from "next/image";
import { truncateSync } from "fs";

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
      state.loading = false
    },
    logout(state) {
      state.isAuthenticated = false;
      state.user = null;
    },
    setError (state, action: PayloadAction<string>) {
        state.errorMessage = action.payload
        state.loading = false
    },
    setUser (state, action){
      state.user = action.payload
      state.loading = false
    },
    isLoading (state){
      state.loading = true
      state.errorMessage = ""
    }
  },
  extraReducers: (builder) => {
    builder
        .addCase(loginUser.pending, (state) => {
            state.loading = true;
            state.errorMessage = '';
        })
        .addCase(loginUser.fulfilled, (state) => {
            state.loading = false;
            state.isAuthenticated = true;
            state.errorMessage = '';
        })
        .addCase(loginUser.rejected, (state, action) => {
            state.loading = false;
            state.isAuthenticated = false;
            state.user = null;
            state.errorMessage = action.payload as string
        });
}
});

export const {isLoading, login, logout, setUser, setError } = authSlice.actions
export default authSlice.reducer;

// login
// check authentication state
// logout user
// create account
// get current user session data
