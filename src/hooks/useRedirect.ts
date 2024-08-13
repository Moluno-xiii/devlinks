import { useState, useEffect } from "react";
import { account } from "../../appwrite";

const useRedirect = () => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const getCurrentUser = async () => {
    try {
      setLoading(true);
      const data = await account.get();
      setUser(data);
      setLoading(false);
    } catch (error: any) {
      console.error(error.message);
      setError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    getCurrentUser();
  }, []);

  return { user, getCurrentUser, loading, error };
};

export default useRedirect;
