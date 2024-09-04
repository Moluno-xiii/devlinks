import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface InitialStateProps {
  loading: boolean;
  errorMessage: string;
  isAuthenticated: boolean;
  profilePicture: string;
  user: any;
}

const initialState: InitialStateProps = {
  loading: false,
  errorMessage: '',
  isAuthenticated: false,
  profilePicture: '',
  user: null,
};

export const authSlice = createSlice({
  name: 'auth',
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
      state.errorMessage = '';
    },
    setProfilePicture(state, action) {
      state.profilePicture = action.payload;
    },
    setAuthenticated(state, action) {
      state.isAuthenticated = action.payload;
    },
  },
});

export const {
  setLoading,
  login,
  logout,
  setUser,
  setError,
  setProfilePicture,
  setAuthenticated
} = authSlice.actions;
export default authSlice.reducer;
