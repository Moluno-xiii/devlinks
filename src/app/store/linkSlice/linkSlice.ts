import { createSlice } from "@reduxjs/toolkit";

interface InitialStateProps {
  loadingLinks: boolean;
  errorMessage: string;
  links: {};
}

const initialState: InitialStateProps = {
  loadingLinks: false,
  errorMessage: "",
  links: {},
};

export const linkSlice = createSlice({
  name: "link",
  initialState,
  reducers: {},
});
//   export const {isLoading, login, logout, setUser, setError } = linkSlice.actions
export default linkSlice.reducer;
