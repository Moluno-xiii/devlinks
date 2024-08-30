import { createAsyncThunk } from '@reduxjs/toolkit';
import { logoutUser } from './authServices';
import { CreateAccount, Login } from '@/types';
import { account } from '../../../../appwrite';
import { setLoading, setUser } from './authSlice';
import { toast } from 'react-toastify';

const login = createAsyncThunk(
  'auth/login',
  async ({ email, password }: Login, { dispatch, rejectWithValue }) => {
    try {
      const data = await account.createEmailPasswordSession(email, password);
      const currentUser = await account.get();
      localStorage.setItem('user', JSON.stringify(currentUser));
      dispatch(setUser(currentUser));
      return data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

const logout = createAsyncThunk(
  'auth/logout',
  async (_, { dispatch, rejectWithValue }) => {
    try {
      await logoutUser();
      localStorage.removeItem('user');
      dispatch(setUser(null));
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

const fetchCurrentUser = createAsyncThunk(
  'auth/fetchCurrentUser',
  async (_, { dispatch, rejectWithValue }) => {
    try {
      dispatch(setLoading(true));
      const stored_user = localStorage.getItem('user');
      if (stored_user) {
        const parsed_user = JSON.parse(stored_user);
        dispatch(setUser(parsed_user));
      }else {
        dispatch(setUser(null))
        return null
      }
    } catch (error: any) {
      toast.error("No available session")
      dispatch(setUser(null));
      return null;
    }finally {
      setLoading(false)
    }
  }
);

export { login, fetchCurrentUser, logout };
