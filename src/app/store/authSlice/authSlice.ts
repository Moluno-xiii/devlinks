import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { login as loginUser } from "./authThunks";

interface InitialStateProps {
  loading: boolean;
  errorMessage: string;
  isAuthenticated: boolean;
  profilePicture: string;
  user: any; // remember to set user types
}

const initialState: InitialStateProps = {
  loading: false,
  errorMessage: "",
  isAuthenticated: false,
  profilePicture: "",
  user: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action) {
      state.isAuthenticated = true;
      state.user = action.payload;
      state.loading = false;
    },
    logout(state) {
      state.isAuthenticated = false;
      state.user = null;
    },
    setError(state, action: PayloadAction<string>) {
      state.errorMessage = action.payload;
      state.loading = false;
    },
    setUser(state, action) {
      state.user = action.payload;
      state.loading = false;
    },
    setLoading(state, action) {
      state.loading = action.payload;
      state.errorMessage = "";
    },
    setProfilePicture(state, action) {
      state.profilePicture = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.errorMessage = "";
      })
      .addCase(loginUser.fulfilled, (state) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.errorMessage = "";
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.isAuthenticated = false;
        state.user = null;
        state.errorMessage = action.payload as string;
      });
  },
});

export const { setLoading, login, logout, setUser, setError, setProfilePicture } =
  authSlice.actions;
export default authSlice.reducer;
