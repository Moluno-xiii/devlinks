import { createAsyncThunk } from "@reduxjs/toolkit";
import { loginUser } from "./authServices";
import { Login } from "@/types";

export const login = createAsyncThunk(
    'auth/login',
    async ({ email, password }: Login, { rejectWithValue }) => {
        try {
            const response = await loginUser({ email, password });
            return response;
        } catch (error: any) {
            return rejectWithValue(error.message);
        }
    }
);
