import { createAsyncThunk } from '@reduxjs/toolkit';
import { logoutUser } from './authServices';
import { setLoading, setUser } from './authSlice';
import { toast } from 'react-toastify';

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

export { fetchCurrentUser };
