import { createSlice } from "@reduxjs/toolkit";

interface InitialStateProps {
  loading: boolean;
  errorMessage: string;
  links: {
    documents : string[]
    total : number
  };
}

const initialState: InitialStateProps = {
  loading: false,
  errorMessage: "",
  links: {
    documents : [],
    total : 0
  },
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
});

export const {setLinks, setErrorMessage} = linkSlice.actions
export default linkSlice.reducer;
