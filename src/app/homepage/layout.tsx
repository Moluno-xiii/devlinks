"use client";
import { useRouter } from "next/navigation";
import Header from "../../components/UI/Header";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { fetchCurrentUser } from "../store/authSlice/authThunks";
import { useSelector } from "react-redux";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const queryClient = new QueryClient();
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
    if (loading) return;
    if (!user || user.emailVerification !== true) {
      setTimeout(() => {
        router.push("/");
      }, 3000);
      toast.error("Session expired");
    }
  }, [user, router, loading]);

  if (loading) return <p>loading...</p>;
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <Header />
        <ToastContainer autoClose={3000} theme="light" position="top-right" />
        <div>{children}</div>
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default Layout;
