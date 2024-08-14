"use client";
import { useRouter } from "next/navigation";
import Header from "../../components/UI/Header";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { fetchCurrentUser } from "../store/authSlice/authThunks";
import { useSelector } from "react-redux";
const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const { user, loading, errorMessage } = useSelector(
    (state: RootState) => state.auth,
  );

  useEffect(
    function () {
      if (user !== null || user !== undefined) return;
      dispatch(fetchCurrentUser());
    },
    [dispatch, user],
  );

  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, [user, router]);

  return (
    <div>
      <Header />
      <div>{children}</div>
    </div>
  );
};

export default Layout;
