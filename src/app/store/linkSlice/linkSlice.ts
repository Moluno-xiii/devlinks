import { fetchLinks, getLinks } from "@/utils/links_utils/link_functions";
import { createSlice } from "@reduxjs/toolkit";

interface InitialStateProps {
  loading: boolean;
  errorMessage: string;
  links: string[];
}

const initialState: InitialStateProps = {
  loading: false,
  errorMessage: "",
  links: [],
};

export const linkSlice = createSlice({
  name: "link",
  initialState,
  reducers: {
    setLinks(state, action){
      state.links = action.payload
    },
    setErrorMessage(state, action){
      state.errorMessage = action.payload
    },
    
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchLinks.pending, (state) => {
        state.loading = true;
        state.errorMessage = '';
      })
      .addCase(fetchLinks.fulfilled, (state, action) => {
        state.loading = false;
        state.links = action.payload;
      })
      .addCase(fetchLinks.rejected, (state, action) => {
        state.loading = false;
        state.errorMessage = action.payload as string
      });
  },
});

export const {setLinks, setErrorMessage} = linkSlice.actions
export default linkSlice.reducer;
