import { useState, useEffect } from "react";
import { account } from "../../appwrite";
import { useDispatch } from "react-redux";
import { isLoading, setError, setUser } from "@/app/store/authSlice/authSlice";

const useRedirect = () => {
  const dispatch = useDispatch()

  const getCurrentUser = async () => {
    try {
      dispatch(isLoading())
      const data = await account.get();
      dispatch(setUser(data))
    } catch (error: any) {
      console.error(error.message);
      dispatch(setError(error))
    }
  };

  useEffect(() => {
    getCurrentUser();
  }, []);

};

export default useRedirect;
