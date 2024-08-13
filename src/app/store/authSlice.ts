import { createSlice } from "@reduxjs/toolkit";


interface InitialStateProps {
    loading : boolean;
    errorMessage : string;
    isAuthenticated : boolean
}

const initialState : InitialStateProps = {
    loading : false,
    errorMessage : '',
    isAuthenticated : false,
}

export const authSlice = createSlice({
    name : "auth",
    initialState,
    reducers : {
        
    }
})




export default authSlice.reducer